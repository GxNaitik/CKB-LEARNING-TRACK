# 📌 Week — CKB Script Programming Deep Dive

### 📅 Date: 17th Nov – 23rd Nov, 2025

---

## 🚀 Overview
This week I focused on understanding **CKB Script Programming**—how on-chain logic works inside the Nervos CKB blockchain through the **cell model + RISC-V virtual machine**.  
I learned how scripts control validation, ownership, token logic, and how to deploy/debug custom code on Layer 1.

---

## 🔍 What I Learned

### 🧠 1️⃣ CKB Validation Model — Lock vs Type Scripts
| Script Type | Role | When Executed |
|-------------|------|----------------|
| **Lock Script** | Controls access / ownership (signature check) | When a cell is **consumed** |
| **Type Script** | Controls how cell data can change (business logic) | When a cell is **created or consumed** |

✔ A transaction succeeds only if **all lock + type scripts execute successfully**  
✔ Identical scripts are **executed only once** per transaction (deduped)

---

### 💻 2️⃣ Script vs Script Code
| Term | Meaning |
|------|--------|
| **Script Code** | The actual compiled program (RISC-V binary from C/JS/Rust) |
| **Script** | A blockchain structure with `code_hash + args` pointing to script code |

🔸 `args` give each script a unique identity & use-case.

---

### 🔐 3️⃣ Writing + Deploying Scripts on CKB
Steps I learned:
1. Write script in **C / JavaScript / Rust**
2. Compile to **RISC-V executable**
3. Deploy binary inside a cell’s **data**
4. Create a **lock or type script** using the `code_hash`
5. Add script cell to **cell_deps**
6. Broadcast transaction — CKB VM executes the script

---

### 🥕 4️⃣ “Carrot Detection” Type Script
I studied a script that:
- Iterates through **all output cells**
- Reads first 6 bytes of cell data
- Rejects the transaction if any cell begins with `"carrot"`

Learnings from this example:
- Using `ckb_load_cell_data` syscall
- Returning **0 = success** and **non-zero = failure**
- Debugging logic errors in script execution

---

### 💰 5️⃣ UDT (User Defined Token) Implementation
Key concepts:
- Tokens are stored across many **cells** (not in a single contract account)
- First 4 bytes of `output_data` store the **token amount**
- Type script ensures:
  - `sum(inputs) == sum(outputs)` for transfers
  - Only the issuer can mint initial supply

🔑 Design trick:
- `args` include a **unique OutPoint** → impossible to reuse → prevents fake minting

---

### 🔧 6️⃣ WebAssembly on CKB
I learned how CKB supports WebAssembly even though the VM is RISC-V:
- Compile program → `.wasm`
- Convert Wasm → C (`wasm2c`)
- Compile C → **RISC-V binary**
- Deploy & run on chain

Meaning CKB can support:
- AssemblyScript
- Rust
- and potentially many more languages

---

### 🐞 7️⃣ Debugging Scripts
I explored **two powerful debugging workflows**:

| Tool | Usage | Purpose |
|------|--------|---------|
| **GDB + ckb-standalone-debugger** | For C/Rust scripts | Step-by-step debugging with breakpoints |
| **Duktape REPL** | For JavaScript scripts | Run & test code interactively inside CKB VM |

Really helpful to locate logical issues in validation scripts.

---

## 🧠 Final Summary
This week I gained a deep understanding of **how programmable validation works at Layer 1 in CKB**.  
Now I clearly understand:
- Script execution model
- Cell data transformation rules
- How UDTs are secured without global storage
- How to deploy + test + debug real scripts
- How CKB supports multiple languages via RISC-V

---

📌 **Status:** Completed  
🧩 **Focus Area:** CKB Script Programming  
📎 **Repository File:** `weekX-ckb-script-programming.md`  

                                                📅 **Date:** 17th Nov – 23th Nov, 2025
