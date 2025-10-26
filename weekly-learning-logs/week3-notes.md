# 🧠 Week 3 — NFT Getting Started on Nervos CKB

## 📚 Overview
This week’s learning focused on **NFT development on the Nervos CKB Layer 1 blockchain**, as part of the [CKB Academy course on NFTs](https://academy.ckb.dev/courses/nft-getting-started).  
I explored the **concepts, architecture, and standards** that make NFTs on Nervos CKB unique compared to traditional EVM-based blockchains.

---

## 🪙 Understanding Nervos Layers

| Layer | Name | Description |
|-------|------|--------------|
| **L1** | **CKB (Common Knowledge Base)** | Uses the **Cell Model** and **CKB-VM**, offering flexibility and true decentralization. |
| **L2** | **Godwoken** | Uses the **EVM** model, allowing Ethereum-compatible smart contracts and tools. |

Each layer has its own NFT standard — optimized for different use cases.

---

## 🎨 NFT Standards on Nervos

Nervos offers two major NFT protocols:

### **1️⃣ CoTA (Compact Token Aggregator)**

**Core Concept:**  
CoTA uses **Sparse Merkle Trees (SMTs)** to compress NFT ownership data into a single 32-byte proof, which minimizes on-chain state usage.

**Advantages:**
- ✅ Extremely low minting and transfer fees (less than $0.01 USD).
- ✅ Efficient off-chain data verification.
- ✅ Ideal for large-scale NFT collections and games.
- ✅ Maintains full decentralization and security of CKB.

**Typical Use Cases:**
- Art, music, collectibles.
- Game assets.
- Event tickets / POAPs.
- Tokenization of real-world assets.

---

### **2️⃣ Spore — Fully On-Chain NFTs**

**Core Concept:**  
Spore stores **all NFT data directly on-chain** — including images, metadata, or other content.  
Each NFT exists as an individual **Cell**, making it **tamper-proof and permanent**.

**Advantages:**
- ✅ Full on-chain storage — no reliance on IPFS or external servers.
- ✅ Guaranteed permanence and availability.
- ✅ Best suited for high-value NFTs or low-data assets.

**Typical Use Cases:**
- High-value or limited edition art.
- Tokenized real estate.
- Music NFTs.
- Immutable pixel art.

---

## ⚖️ Comparison — CoTA vs Spore

| Attribute | CoTA NFT Standard | Spore NFT Standard |
|------------|-------------------|--------------------|
| **Primary Focus** | Low-cost NFTs | Strong permanence |
| **Data Storage** | Off-chain (SMT proof) | Fully on-chain |
| **Minting Cost** | <$0.01 | Depends on content size |
| **Transfer Cost** | <$0.01 | <$0.01 |
| **Refundable State Rent** | ✅ Yes | ✅ Yes |
| **Full Decentralization** | ✅ | ✅ |
| **Ideal For** | Scalable, low-cost NFTs | Permanent, high-value NFTs |

---

## 🧩 Technical Learnings

- CKB uses **template-based smart contracts**, meaning new NFTs can reuse existing contract deployments instead of deploying new ones.
- The **Cell Model** enables efficient state management and rent-based sustainability.
- SMTs (Sparse Merkle Trees) provide **verifiable off-chain data proofs** for scalability.
- Both CoTA and Spore inherit Nervos’ **security, decentralization, and sustainability**.

---

## 🧑‍💻 Resources and Tools

### 📘 CoTA
- [CoTA Official Website](https://cota.io)
- [CoTA SDK Documentation](https://docs.cota.io)
- [Example Apps](https://github.com/nervina-labs)

### 🔥 Spore
- [Spore Official Website](https://spore.pro)
- [Spore SDK](https://github.com/ckb-dev/spore-sdk)
- [Spore Docs](https://docs.spore.pro)

---

## 💬 Community & Support
- 💻 Joined [Nervos Discord](https://discord.gg/nervos)
- 🌐 Participating in discussions at [Nervos Talk Forum](https://talk.nervos.org)

---

## 🖼️ Screenshots
1. A few visuals from my course progress and understanding:
2. Community joined proofs:

|-------------|--------------|
<table align="center">
  <!-- Top row -->
  <tr>
    <td align="center">
      <table>
        <tr>
          <td align="center" style="padding: 8px;">
            <img width="300" alt="Screenshot 2025-10-27 001507"
              src="https://github.com/user-attachments/assets/5b0ab848-a698-4819-bec9-e1ea18f62202" />
          </td>
          <td align="center" style="padding: 8px;">
            <img width="300" alt="Screenshot 2025-10-27 004700"
              src="https://github.com/user-attachments/assets/8831584e-b3ad-4769-9c7c-beed88880536" />
          </td>
          <td align="center" style="padding: 8px;">
            <img width="300" alt="Screenshot 2025-10-27 012242"
              src="https://github.com/user-attachments/assets/ae4f924f-7237-42af-860e-84554ccf2986" />
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Bottom row -->
  <tr>
    <td align="center">
      <table>
        <tr>
          <td align="center" style="padding: 8px;">
            <img width="300" alt="Screenshot 2025-10-27 011032"
              src="https://github.com/user-attachments/assets/ec97e1d3-6a35-488e-9294-7d2d00237b3b" />
          </td>
          <td align="center" style="padding: 8px;">
            <img width="300" alt="Screenshot 2025-10-27 011625"
              src="https://github.com/user-attachments/assets/be8196f1-ddde-41b5-9306-f927aa351059" />
          </td>
          <td align="center" style="padding: 8px;">
            <img width="300" alt="Screenshot 2025-10-27 011728"
              src="https://github.com/user-attachments/assets/75f606aa-83c6-49d4-8c3f-ec84c7f89e80" />
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

## ✅ Weekly Summary

> This week’s topic — NFT Standards on CKB — was more advanced than previous lessons.  
> After detailed research and exploring the CKB Academy resources, I now understand how **CoTA and Spore** form the backbone of NFT development on the Nervos ecosystem.

---

📅 **Completed Week 3:** NFT Getting Started  
🧠 **Status:** All concepts understood and documented  
📎 **Repository:** `week3-notes.md`

                                                         Date: 20th Oct - 26th Oct ,2025
