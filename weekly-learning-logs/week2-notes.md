# 🧠 Week 2 – CKB Learning Track

This repository documents my Week 2 progress in the **Nervos CKB Academy** program.  
In this week, I focused on understanding how transactions are built, signed, and verified on the CKB blockchain.

---

## 🚀 Topics Covered

- The structure of a CKB transaction (`inputs`, `outputs`, `cellDeps`, `witnesses`)
- How to locate code using `code_hash` and `hash_type`
- Understanding `CellDeps` and dependency relationships
- How to sign and send a transaction
- Fee calculation and the “Low Fee Rate” issue

---

## 🧩 Exercises

| # | Exercise | Description |
|---|-----------|-------------|
| 1 | `transfer-transaction.json` | Manually filled transaction template |
| 2 | `signed-transaction.json` | Transaction after signing with OmniLock |
| 3 | `tx-hash-verification.md` | Verifying the transaction hash on testnet |

---

## 📸 Screenshots

<table align="centre">
  <tr>
    <td align="center">
      <img width="450" alt="Screenshot 2025-10-20 151636"
        src="https://github.com/user-attachments/assets/71344a40-2849-4d1e-852f-0771d4e48551" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <table>
        <tr>
          <td align="center" style="padding: 8px;">
            <img width="380" alt="Screenshot 2025-10-20 010029"
              src="https://github.com/user-attachments/assets/62b80a1d-e8d2-4b73-8353-38d40ca63a5b" />
          </td>
          <td align="center" style="padding: 8px;">
            <img width="380" alt="Screenshot 2025-10-19 231553"
              src="https://github.com/user-attachments/assets/d7bb0c18-fac5-4e37-a483-a2af0d492ba5" />
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>


- View of Live Cells from toolbox  
- Serialized transaction before hashing  
- Final transaction hash on CKB Testnet Explorer  

---

## 📅 Summary of Learning

In Week 2, I learned how every field in a transaction connects together — from `cellDeps` (code dependencies) to `witnesses` (signatures).  
I also practiced resolving fee errors and confirmed transactions on the CKB testnet.

---

## 🔗 References

- [CKB Academy – Basic Operations Course](https://academy.ckb.dev/courses/basic-operation)
- [Nervos CKB Documentation](https://docs.nervos.org/)
- [Omnilock Documentation](https://github.com/nervosnetwork/ckb-production-scripts)

---

## 🧰 Tools Used

- **CKB Toolbox** (for live cells & chain info)
- **CKB Explorer** (for viewing transactions)
- **Omnilock Script** (for signing and verifying)

                                                         Date: 13th Oct - 19th Oct ,2025

