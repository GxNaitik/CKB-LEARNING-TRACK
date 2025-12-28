import { ccc } from '@ckb-ccc/connector-react';
import { Coins, Sparkles, Trophy, History as HistoryIcon, ShieldCheck } from 'lucide-react';
import { SpinWheel } from './components/SpinWheel';
import { useEffect, useMemo, useState } from 'react';

// Game Address
const DEFAULT_GAME_ADDRESS = 'ckt1qrejnmlar3r452tcg57gvq8patctcgy8acync0hxfnyka35ywafvkqgjc77j65rdlumdyucxf0zwndff5rv24dp5qq5j8stc';

type WalletLike = {
  address?: string;
  icon?: string;
};

function App({
  wallet,
  openWallet,
  disconnectWallet,
  balanceCkb,
  lastTxHash,
  onTx,
  signer,
  gameAddress,
  gameAddressValid,
}: {
  wallet?: WalletLike;
  openWallet?: () => void;
  disconnectWallet?: () => void;
  balanceCkb?: string;
  lastTxHash?: string;
  onTx?: (txHash: string) => void;
  signer?: ReturnType<typeof ccc.useSigner> | null;
  gameAddress: string;
  gameAddressValid: boolean;
}) {
  const address = wallet?.address ?? '';
  const explorerTxUrl = lastTxHash ? `https://pudge.explorer.nervos.org/transaction/${lastTxHash}` : '';

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center pb-20 overflow-x-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-6 z-50">
        <div className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <Coins className="text-black h-6 w-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black italic tracking-tighter text-white">
              CKB <span className="text-primary">SPIN</span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">Testnet Beta</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {wallet ? (
            <div className="flex items-center gap-3">
              <button
                onClick={openWallet}
                className="glass-button px-5 py-2.5 rounded-xl flex items-center gap-3 text-sm font-bold tracking-wide hover:bg-white/5"
                disabled={!openWallet}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Balance</span>
                  <span className="text-sm font-mono text-white">{balanceCkb ?? '--'} CKB</span>
                </div>
                <span className="hidden sm:inline text-xs font-mono text-gray-300 max-w-[160px] truncate">
                  {address ? `${address.slice(0, 8)}...${address.slice(-6)}` : 'Connected'}
                </span>
              </button>

              <button
                onClick={disconnectWallet}
                className="px-5 py-2.5 rounded-xl font-black text-sm transition-all border border-red-500/30 bg-red-500/10 text-red-200 hover:bg-red-500/20"
                disabled={!disconnectWallet}
              >
                DISCONNECT
              </button>
            </div>
          ) : (
            <button
              onClick={openWallet}
              className="bg-primary text-black hover:bg-green-400 px-6 py-2.5 rounded-xl font-black text-sm transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!openWallet}
            >
              CONNECT WALLET
            </button>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 flex flex-col items-center gap-12 mt-6">

        {!gameAddressValid && (
          <div className="w-full max-w-4xl">
            <div className="glass-panel p-4 rounded-2xl border border-red-500/20 bg-red-500/5 text-sm text-gray-200">
              Game address is invalid. Update it to a valid testnet address (starts with <span className="font-mono">ckt1</span>) before placing bets.
            </div>
          </div>
        )}

        {/* Header Texts */}
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold font-mono text-primary mb-2 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> PROVABLY FAIR GAMING
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none drop-shadow-2xl">
            SPIN TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-[text-shimmer_2s_linear_infinite]">WIN</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            The most transparent on-chain casino on Nervos Network. Instant payouts. Zero house edge.
          </p>
        </div>

        {/* THE WHEEL */}
        <div id="game-section" className="w-full relative mt-8 flex justify-center">
          <SpinWheel
            gameAddress={gameAddress}
            walletAddress={address}
            onConnect={openWallet}
            signer={signer}
            onTx={onTx}
            onWin={(w) => console.log(w)}
          />
        </div>

        {lastTxHash && (
          <div className="w-full max-w-4xl text-left mt-2">
            <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Bet Transaction</div>
              <a className="text-sm font-mono text-primary break-all" href={explorerTxUrl} target="_blank" rel="noreferrer">
                {lastTxHash}
              </a>
            </div>
          </div>
        )}

        {/* Footer / Instructions */}
        <div className="w-full max-w-4xl grid md:grid-cols-3 gap-6 text-left mt-10 p-8 rounded-3xl bg-white/5 border border-white/5">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="text-primary w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Fairness Guaranteed</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Demo UI only: the bet transaction is on-chain, but spin outcomes are simulated in the browser.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
              <Trophy className="text-yellow-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Instant Payouts</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Not implemented yet: there is currently no payout contract/backend, so winnings are not paid automatically.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
              <HistoryIcon className="text-blue-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">No Registration</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Just connect your CKB wallet and start playing. No email or personal data required.
              </p>
            </div>
          </div>
        </div>

      </main>

      <footer className="w-full text-center py-8 text-gray-700 text-sm mt-12">
        {gameAddress && (
          <div className="mt-2 text-[11px] text-gray-600">
            Game address:{' '}
            <a
              className="font-mono text-gray-500 hover:text-primary transition-colors"
              href={`https://testnet.explorer.nervos.org/address/${gameAddress}`}
              target="_blank"
              rel="noreferrer"
            >
              {gameAddress}
            </a>
            <div>&copy; 2024 CKB SpinToWin. Deployed on Nervos Testnet.</div>
          </div>
        )}
      </footer>
    </div>
  );
}

export function AppWithCcc() {
  const { wallet, open, disconnect, client } = ccc.useCcc();
  const signer = ccc.useSigner();

  const [address, setAddress] = useState<string>('');
  const [balanceCkb, setBalanceCkb] = useState<string>('');
  const [lastTxHash, setLastTxHash] = useState<string>('');
  const [houseAddress, setHouseAddress] = useState<string>('');
  const [houseAddressError, setHouseAddressError] = useState<string>('');
  const envGameAddress = import.meta.env.VITE_GAME_ADDRESS || DEFAULT_GAME_ADDRESS;
  const gameAddress = houseAddress || envGameAddress;
  const [gameAddressValid, setGameAddressValid] = useState<boolean>(true);

  const walletForUi: WalletLike | undefined = useMemo(() => {
    if (!wallet) return undefined;
    const maybeWallet = wallet as unknown as { icon?: string };
    return { icon: maybeWallet.icon, address };
  }, [wallet, address]);

  const openWallet = useMemo(() => {
    return () => {
      void open();
    };
  }, [open]);

  const disconnectWallet = useMemo(() => {
    return () => {
      void disconnect();
    };
  }, [disconnect]);

  useEffect(() => {
    if (!signer) {
      setAddress('');
      setBalanceCkb('');
      return;
    }
    (async () => {
      const addr = await signer.getRecommendedAddress();
      setAddress(addr);
      const capacity = await signer.getBalance();
      setBalanceCkb(ccc.fixedPointToString(capacity));
    })();
  }, [signer]);

  useEffect(() => {
    if (!signer) return;
    if (!lastTxHash) return;
    (async () => {
      const capacity = await signer.getBalance();
      setBalanceCkb(ccc.fixedPointToString(capacity));
    })();
  }, [signer, lastTxHash]);

  useEffect(() => {
    (async () => {
      try {
        const payoutApiKey = import.meta.env.VITE_PAYOUT_API_KEY;
        const resp = await fetch('/api/house', {
          headers: {
            ...(payoutApiKey ? { 'x-api-key': payoutApiKey } : {}),
          },
        });

        const json = (await resp.json()) as { address?: string; error?: string };

        if (!resp.ok) {
          throw new Error(json.error || 'Failed to fetch /api/house');
        }

        if (typeof json.address === 'string' && json.address.startsWith('ckt1')) {
          setHouseAddress(json.address);
          setHouseAddressError('');
        } else {
          throw new Error('Invalid house address returned by backend');
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setHouseAddress('');
        setHouseAddressError(msg);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await ccc.Address.fromString(gameAddress, client);
        setGameAddressValid(true);
      } catch {
        setGameAddressValid(false);
      }
    })();
  }, [client, gameAddress]);

  return (
    <App
      wallet={walletForUi}
      openWallet={openWallet}
      disconnectWallet={disconnectWallet}
      balanceCkb={balanceCkb}
      lastTxHash={lastTxHash}
      onTx={setLastTxHash}
      signer={signer}
      gameAddress={gameAddress}
      gameAddressValid={gameAddressValid && !houseAddressError}
    />
  );
}

export default App;
