# 📘 Week 09 — CKB NFT Learning Notes  
**Topic:** Understanding NFTs on Nervos CKB  
**Week:** 9  
**Focus:** NFT Standards, Minting Methods & Tools on CKB

---

## 🧩 What I Learned This Week

This week, I explored **how NFTs work on the Nervos CKB blockchain**. CKB does *not* use a single NFT standard like ERC-721; instead, it supports **multiple NFT frameworks**, each designed for different use cases.

---

## 🔥 1. CKB NFT Models

### ### **1. Spore NFT (Fully On-Chain NFT)**
- Every NFT is stored **directly inside a CKB cell**.
- Media (image/text/binary file) is also **stored inside the cell**, making it permanent & immutable.
- Great for **1/1 art**, permanent storage, provenance.
- Simple and no-code creation using **Imagination.to**.

**Key Features:**
- On-chain metadata + media  
- Strong immutability  
- No dependency on off-chain servers  
- Slightly higher storage cost because data is stored on chain

---

### **2. CoTA NFT (Compact Token Architecture)**
- A scalable, efficient NFT solution built using the **COTA protocol**.
- NFT metadata stored **off-chain**, but ownership and proofs are stored on-chain.
- Designed for:
  - Collections
  - Gaming NFTs
  - Batch minting
  - Cheap transfers

**Why it’s powerful:**
- Very low on-chain footprint  
- Thousands of NFTs can be minted cheaply  
- Uses **off-chain registry + on-chain proofs**

---

## 🚀 2. How Minting Works

### **A. Minting Spore NFTs** (Simplest — No code)
Tool used: **Imagination.to**

Process:
1. Upload image/file  
2. Add title + metadata  
3. Sign the transaction  
4. NFT is stored fully on-chain  

Result → A unique CKB Cell containing your NFT data + metadata.

---

### **B. Minting CoTA NFTs** (Developer-focused)
Process:
1. Register issuer using CoTA SDK  
2. Create a COTA ID  
3. Mint NFTs using JavaScript code  
4. Broadcast transaction

Example (simplified):
```js
const tx = await cota.mint({ cota_id, receivers });

