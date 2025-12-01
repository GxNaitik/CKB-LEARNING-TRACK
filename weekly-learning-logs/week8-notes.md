## Week 08

**Date:** 24th Nov – 30th Nov, 2025

### Tasks Completed

### 🔧 CKB Development Progress — Setting Up a Full Dev Environment (Digest #4)

This week I focused on learning how to properly set up a **complete Nervos CKB development environment**, based on the insights from *Start Your CKB Development Journey | Digest #4*.  
I learned how to configure, initialize, and run a **local CKB dev chain**, how CKB nodes work, and also explored recent ecosystem highlights.

---

### 🟩 1. Understanding CKB Development Environments

I learned two ways developers can start building on CKB:

#### **1️⃣ Public Testnet Nodes**
- Use public JSON-RPC endpoints directly.
- Good for testing real behavior and verifying transactions.
- Requires faucet tokens.

#### **2️⃣ Local Development Chain (Recommended for early development)**
- Full control over block production.
- Instantly mine blocks using the built-in miner.
- No need for faucet tokens.
- Faster feedback loop.

---

### 🟦 2. Setting Up a Local Dev Chain

I studied and practiced the entire setup flow:

#### ✔ Downloaded CKB & CKB-CLI binaries  
Checked installed versions using:

#### ✔ Initialized a new dev chain  

This generated:
- `ckb.toml`
- `ckb-miner.toml`
- `specs/dev.toml`
- default configs + genesis block hash

#### ✔ Created a miner account using `ckb-cli`  
Recorded:
- address  
- lock_arg  
- lock_hash  

These are needed for mining rewards.

#### ✔ Updated the block_assembler config  
Added my `lock_arg` into:


#### ✔ Learned how to shorten block time  
- Changed `genesis_epoch_length` in `specs/dev.toml`  
- Adjusted mining delay in `ckb-miner.toml`

This makes block production almost instant → very useful for testing.

#### ✔ Started Node + Miner  


This lets me:
- mine blocks automatically  
- receive block rewards  
- test scripts, transactions, and custom logic quickly  

---

### 🟧 3. FAQ Learned — Types of Nodes

I learned about the 3 node types in the CKB network:

| Node Type | Purpose |
|----------|----------|
| **Mining Node** | Produces blocks via PoW |
| **Full Node** | Verifies blocks & transactions |
| **Light Node** | Stores minimal state, relies on full nodes |

This helped me understand how the CKB network stays decentralized and secure.

---

### 🟨 4. How to Get Testnet CKB  
I can receive test tokens through the official faucet:

🔗 https://faucet.nervos.org/

---

### 🟪 5. Blockchain Highlights I Studied
Some broader blockchain topics discussed in the digest:

- **Gridless (Africa)** — using Bitcoin mining to support rural microgrids  
- **Digital-first networking** — how online communities improve relationship-building  
- **AI + Web3 convergence** — why permissionless blockchains are ideal for AI agent interactions  

These helped me understand the context around blockchain adoption.

---

### 🟫 6. Top 3 Hackathon Projects Explored

#### **1️⃣ CKBGPT**
- A ChatGPT+LangChain chatbot that understands the entire CKB source code.
- Can answer technical questions about CKB files and modules.

GitHub: https://github.com/tianlitao/toly-gpt

#### **2️⃣ CKB Academy**
- A beginner-friendly learning platform with structured courses.
- Helps new developers start building on Nervos.

GitHub: https://github.com/Flouse/ckb-academy

#### **3️⃣ Nervos Doc Search Bot**
- A custom search engine + Telegram bot for exploring all CKB documentation.
- Very useful for learning deeper technical topics.

GitHub: https://github.com/toastmanAu/Nervos-Doc-Search-Bot

---

### 📘 References

- Digest #4 – Start Your CKB Development Journey  
- Public JSON-RPC Nodes: https://github.com/nervosnetwork/ckb/wiki/Public-JSON-RPC-node  
- Nervos Faucet: https://faucet.nervos.org/  
- Hackathon project repositories (listed above)

---

                                                **Date:** 24th Nov – 30th Nov, 2025
