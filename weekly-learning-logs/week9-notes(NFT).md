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

## 🛠️ 3. Tools I Learned About

### 🟣 **Imagination.to**
- A no-code NFT creator for **Spore NFTs**  
- Fully on-chain image & metadata storage  
- Very simple UI  
- Best for beginners  

---

### 🟢 **Omiga.to**
A CKB asset explorer & wallet that lets you view:

- CKB tokens  
- NFTs (Spore + COTA)  
- On-chain cells  
- Useful for confirming NFT minting  

---

### 🟠 **CoTA SDK**
- A JavaScript SDK for minting **CoTA NFTs**  
- Great for developers building NFT platforms or applications  

---

## 🎯 4. Key Concepts I Understood

### **Cells**
- The fundamental storage structure in CKB  
- NFTs = customized cells with lock scripts + data  

### **On-chain vs Off-chain Storage**
- **Spore** → everything stored fully on-chain  
- **CoTA** → proofs stored on-chain, metadata stored off-chain  

### **Lock Script**
- Ensures NFT ownership  
- Only the owner can update or transfer the cell  

### **Capacity**
- Storage cost on CKB  
- Larger NFT files require more capacity  

---

## 🧠 5. Why NFTs on CKB Are Unique

- Built on first-principles using the **Cell Model**  
- Not restricted to Ethereum-style ERC-721 standards  
- Extremely flexible NFT architecture:
  - Store entire image on-chain  
  - Or use compact off-chain proofs  
  - Or attach custom validation logic  
- CKB is one of the most flexible Layer 1s for smart assets  

---

## 📌 6. What I Can Now Do

By the end of Week 9, I can:

✔ Understand the architecture of NFTs on CKB  
✔ Explain **Spore vs CoTA** differences  
✔ Use Imagination.to to mint fully on-chain NFTs  
✔ View minted NFTs in Omiga.to  
✔ Understand the basic **CoTA minting flow** using the SDK  
✔ Explain how NFTs exist as **cells** on CKB  

---

## 🔗 References

- **Imagination.to** – https://www.imagination.to  
- **CoTA Protocol** – https://github.com/nervina-labs/cota-sdk  
- **Omiga.to** – https://www.omiga.to  
- **CKB Documentation** – https://docs.nervos.org  

---

