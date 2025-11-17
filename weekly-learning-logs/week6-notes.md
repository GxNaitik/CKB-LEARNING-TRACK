
## Week 06 

### Tasks Completed

### CKB Development Progress — Constructing & Sending a CKB Transaction

Learned how to generate keys, create a testnet address, receive CKBytes, construct a raw transaction, sign it, and send it on-chain.

- Created a **CKB Testnet Address** using the Java SDK:
  - Initialized network as `TESTNET`
  - Loaded private key and generated address using `AddressFactory`
  - Verified the generated Testnet address (starting with `ckt`)

- Claimed **10,000 CKBytes** from the **Nervos Pudge Faucet**:
  - Submitted my `ckt` address to the faucet
  - Waited for status to change from *Pending → Processed*
  - Retrieved the **OutPoint** `(tx_hash, index=0)`  
    → This OutPoint becomes the **input** for my custom transaction.

- Constructed a raw CKB Transaction:
  - Used `Transaction.smartBuilder(network)`  
  - Added **CellDeps** for `SECP256K1_BLAKE160_SIGHASH_ALL`
  - Added the faucet OutPoint as an **Input**
  - Created two **Outputs**:
    - `100 CKBytes` sent to another testnet address
    - `9899.9 CKBytes` returned as change  
  - Transaction fee automatically handled (~0.1 CKBytes)
  - Printed transaction JSON for inspection

- Signed the transaction using my private key:
  - Added signature through `Secp256k1Blake160SighashAll.newFulfillment(keyPair)`
  - Verified the `witnesses` field was correctly updated

- Sent the signed transaction to the **CKB Testnet**:
  - Used `CkbService.getInstance().sendTransaction(tx)`
  - Printed returned transaction hash
  - Verified transaction and updated balance through **Testnet Explorer**

---

### 📸 Related Screenshots

<table style="width:100%; text-align:center;">
<tr>
  <td style="width:33.3%; vertical-align:top; text-align:center;">
    <img src="https://github.com/user-attachments/assets/e391a926-09b5-44f0-a660-635e24df0186" width="100%">
  </td>
  <td style="width:33.3%; vertical-align:top; text-align:center;">
    <img src="https://github.com/user-attachments/assets/e2fa568c-d9b4-4978-993d-141ac5b40999" width="100%">
  </td>
  <td style="width:33.3%; vertical-align:top; text-align:center;">
    <img src="https://github.com/user-attachments/assets/1b482c28-c581-402b-8e5c-70625f07a309" alt="" width="100%">
  </td>
</tr>
</table>

---

### Code Snippets Used

```java
// 1. Generate Key Pair
ECKeyPair keyPair = ECKeyPair.random();
System.out.println(keyPair.getEncodedPrivateKey());

// 2. Create Address
Network network = Network.TESTNET;
ECKeyPair keyPair = ECKeyPair.create("0x<your_private_key>");
Address address = new AddressFactory(network).newAddress(keyPair);
System.out.println(address);

// 3. Construct Transaction
Transaction tx = Transaction.smartBuilder(network)
  .addCellDeps(Contract.Name.SECP256K1_BLAKE160_SIGHASH_ALL)
  .addInput("0x167f4f9517b7e208f4104eb7b3161c0669c97da7a13bccffe75f0c46cfb7885f", 0)
  .addOutputInBytes("ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqw7lylgpn2j67xrlf4y76jwnznq0a8ufggsz6xpa", 100)
  .addOutputInBytes(address, 9899.9)
  .build();
printJson(tx);

// 4. Sign Transaction
Secp256k1Blake160SighashAll.newFulfillment(keyPair).fulfill(tx, 0);
printJson(tx);

// 5. Send Transaction
CkbService service = CkbService.getInstance(network);
byte[] hash = service.sendTransaction(tx);
System.out.println(bytesToHex(hash));






                                                 Date: 6th Oct – 12th Oct, 2025
