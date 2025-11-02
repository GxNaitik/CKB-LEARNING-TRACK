# 🧱 CKB Learning Track — Week 4  
### 🗓️ Focus: Developer Training Course Setup & Devnet Configuration  

---

## 🏁 Overview  
This week’s focus was to set up the **CKB Developer Environment** and understand the **Developer Training Course**, which teaches developers how to build blockchain applications directly on **Nervos CKB Layer 1** using the **Cell Model**.  

The Cell Model is a flexible smart contract system inspired by Bitcoin’s UTXO model — different from Ethereum’s EVM — and forms the foundation of Nervos L1.  

---

## 🧠 What I Learned  
- Understood the **Cell Model**, which represents assets and contracts as cells.  
- Learned about **Nervos Layer 1** vs **Godwoken Layer 2 (EVM-compatible)**.  
- Explored **developer-training-course** structure and examples.  
- Set up a **local Devnet** using **Tippy** to simulate blockchain transactions.  
- Prepared to start running labs like **Lumos Script**, **Data Cell**, and **Double Counter**.  

---

## 🧰 Tools & Setup Completed  

| Tool | Purpose |
|------|----------|
| **Node.js (v18 LTS)** | Required runtime for lab exercises |
| **Rust** | Used for writing on-chain smart contracts |
| **Git** | Cloning and version control |
| **VS Code** | IDE for development |
| **Tippy** | GUI tool for one-click CKB Devnet setup |

---

## . Clone the Developer Training Course

git clone https://github.com/jordanmack/developer-training-course.git
cd developer-training-course
npm install


## 🧩 Key Concept: The Cell Model

- A **cell** works like a small, programmable unit (similar to a Bitcoin UTXO).  
- **Inputs** and **outputs** show how data or tokens move in a transaction.  
- **Lock scripts** control who can use a cell, and **type scripts** set custom rules.  
- Every transaction runs and gets checked on-chain inside the **CKB-VM**.

<p align="center">
  <img src="https://github.com/user-attachments/assets/90a999c4-6140-4c5c-8f73-ce0133aee648" width="49%" alt="Tippy Devnet Screenshot" />
  <img src="https://github.com/user-attachments/assets/452ba918-0b03-416b-832b-b57546375ece" width="49%" alt="VS Code Developer Training Course Screenshot" />
</p>



