import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { ccc } from '@ckb-ccc/core';

const PORT = Number(process.env.PORT ?? 8787);

const rawHousePrivateKey = process.env.HOUSE_PRIVATE_KEY;
const PAYOUT_API_KEY = process.env.PAYOUT_API_KEY;
const MAX_PAYOUT_CKB = Number(process.env.MAX_PAYOUT_CKB ?? 10000);
const CKB_RPC_URL = process.env.CKB_RPC_URL;

if (!rawHousePrivateKey) {
  throw new Error('Missing HOUSE_PRIVATE_KEY in backend env');
}

const HOUSE_PRIVATE_KEY = rawHousePrivateKey.startsWith('0x') ? rawHousePrivateKey : `0x${rawHousePrivateKey}`;

function hexByteLength(hex) {
  const h = hex.startsWith('0x') ? hex.slice(2) : hex;
  return Math.ceil(h.length / 2);
}

function scriptOccupiedBytes(script) {
  return 32 + 1 + hexByteLength(script.args);
}

function minCellCapacityCkb({ lock, type, dataHex }) {
  const dataBytes = hexByteLength(dataHex);
  const lockBytes = scriptOccupiedBytes(lock);
  const typeBytes = type ? scriptOccupiedBytes(type) : 0;
  const occupiedBytes = 8 + lockBytes + typeBytes + dataBytes;
  return occupiedBytes;
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '64kb' }));

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/house', async (req, res) => {
  try {
    if (PAYOUT_API_KEY) {
      const provided = req.header('x-api-key');
      if (!provided || provided !== PAYOUT_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    const client = new ccc.ClientPublicTestnet(CKB_RPC_URL ? { url: CKB_RPC_URL } : undefined);
    const signer = new ccc.SignerCkbPrivateKey(client, HOUSE_PRIVATE_KEY);

    const address = await signer.getRecommendedAddress();
    const balance = await signer.getBalance();

    res.json({
      address,
      balanceCkb: ccc.fixedPointToString(balance),
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    res.status(500).json({ error: msg });
  }
});

app.post('/api/payout', async (req, res) => {
  let signer;
  let requestedAmountCkb;
  let requiredPayoutCkb;
  try {
    if (PAYOUT_API_KEY) {
      const provided = req.header('x-api-key');
      if (!provided || provided !== PAYOUT_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    const { toAddress, amountCkb, betTxHash } = req.body ?? {};

    if (typeof toAddress !== 'string' || !toAddress.startsWith('ckt1')) {
      return res.status(400).json({ error: 'Invalid toAddress (expected testnet ckt1...)' });
    }

    const amountNum = Number(amountCkb);
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      return res.status(400).json({ error: 'Invalid amountCkb' });
    }

    requestedAmountCkb = amountNum;

    if (amountNum > MAX_PAYOUT_CKB) {
      return res.status(400).json({ error: `amountCkb exceeds MAX_PAYOUT_CKB (${MAX_PAYOUT_CKB})` });
    }

    const client = new ccc.ClientPublicTestnet(CKB_RPC_URL ? { url: CKB_RPC_URL } : undefined);
    signer = new ccc.SignerCkbPrivateKey(client, HOUSE_PRIVATE_KEY);

    const { script: toLock } = await ccc.Address.fromString(toAddress, client);

    const outputDataHex = '0x';
    const minCkb = minCellCapacityCkb({ lock: toLock, dataHex: outputDataHex });
    const finalAmount = Math.max(amountNum, minCkb);

    requiredPayoutCkb = finalAmount;

    const buildAndSend = async (feeRate) => {
      const tx = ccc.Transaction.from({
        outputs: [{ lock: toLock, capacity: ccc.fixedPointFrom(finalAmount) }],
        outputsData: [outputDataHex],
      });

      await tx.completeInputsByCapacity(signer);
      await tx.completeFeeBy(signer, feeRate);

      return signer.sendTransaction(tx);
    };

    let payoutTxHash;
    let lastErr;
    let feeRate = 1500;
    for (let attempt = 0; attempt < 5; attempt += 1) {
      try {
        payoutTxHash = await buildAndSend(feeRate);
        break;
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        lastErr = e;
        const isRbf = /PoolRejectedRBF|RBF rejected/i.test(msg);
        const isDuplicate = /PoolRejectedDuplicatedTransaction|already exists in transaction_pool/i.test(msg);
        if (!isRbf && !isDuplicate) {
          throw e;
        }

        if (isDuplicate) {
          const hashMatch = msg.match(/Transaction\(Byte32\((0x[0-9a-fA-F]{64})\)\)/);
          if (hashMatch) {
            payoutTxHash = hashMatch[1];
            break;
          }
        }

        feeRate = Math.ceil(feeRate * 1.5 + 500);
        await new Promise((r) => setTimeout(r, 2000));
      }
    }

    if (!payoutTxHash) {
      throw lastErr ?? new Error('Payout failed after fee bump retries');
    }

    res.json({
      payoutTxHash,
      toAddress,
      amountCkb: finalAmount,
      betTxHash: typeof betTxHash === 'string' ? betTxHash : undefined,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);

    const m = msg.match(/Insufficient CKB, need\s+([0-9.]+)\s+extra CKB/i);
    if (m) {
      const shortfallCkb = Number(m[1]);
      let houseAddress;
      let houseBalanceCkb;
      try {
        if (signer) {
          houseAddress = await signer.getRecommendedAddress();
          const bal = await signer.getBalance();
          houseBalanceCkb = ccc.fixedPointToString(bal);
        }
      } catch {
        // ignore secondary failures
      }

      return res.status(402).json({
        error: msg,
        shortfallCkb,
        houseAddress,
        houseBalanceCkb,
        requestedAmountCkb,
        requiredPayoutCkb,
      });
    }

    res.status(500).json({ error: msg });
  }
});

app.listen(PORT, () => {
  console.log(`Payout server listening on http://localhost:${PORT}`);
});
