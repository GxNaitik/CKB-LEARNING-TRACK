# CKB On-Chain Jackpot Minigame – Getting Started Roadmap

This document is a practical, step-by-step roadmap for building an on-chain jackpot minigame on **Nervos CKB**. It is designed to help you start correctly, avoid common mistakes, and progress from an MVP to a production-ready on-chain game.

---

## PROJECT GOAL

Build a fully on-chain minigame where:

* Users pay a fixed fee (e.g., 50 CKB) to spin a wheel
* Each spin adds to a transparent on-chain jackpot
* After a fixed number of spins (N), a winner is selected
* Winner selection is weighted by number of spins
* Entire jackpot is paid out on-chain
* System is self-sustaining (optional treasury cut)

The project is built **incrementally**, starting with a minimal MVP and evolving toward advanced features like stealth addresses and stronger randomness.

---

## PHASE 0 — MINDSET (IMPORTANT)

Before writing any code:

* You are building an **MVP first**, not the final version
* The MVP must prove:

  * Paid spins work
  * Jackpot grows correctly
  * Reveal + payout logic works
* Privacy, stealth addresses, and advanced randomness come **after correctness**

Do not over-engineer at the beginning.

---

## DAY 1 — FOUNDATION & ENVIRONMENT (START HERE)

### 1. Lock Core Game Parameters

Decide these once for the MVP and do not change them mid-build:

* `spin_fee`: 50 CKB
* `max_spins (N)`: 100 (small number for testing)
* `treasury_percentage`: 0%
* Winner selection: weighted by number of spins
* Randomness: commit–reveal (operator-controlled for MVP)

Write these in your README.

---

### 2. Development Environment Setup

Install and verify the following:

* Rust + Cargo (for CKB on-chain scripts)
* Node.js + npm (for off-chain tooling)
* `ckb-cli`
* Lumos SDK

By the end of Day 1, you should be able to:

* Run `ckb-cli --version`
* Run a basic Node.js script
* Compile a basic Rust project

This step is critical. Weak setup leads to constant blockers later.

---

### 3. Create Project Structure

Create the following folder structure:

```
ckb-minigame/
 ├── contracts/
 │   ├── spin_lock/
 │   ├── game_state_lock/
 │   └── payout_lock/
 ├── schemas/
 │   └── game.mol
 ├── scripts/
 │   ├── spin.ts
 │   ├── reveal.ts
 │   └── payout.ts
 ├── tests/
 └── README.md
```

Empty folders are fine for Day 1.

---

## PHASE 1 — CORE ON-CHAIN LOGIC (DAYS 2–3)

### What You Build First

#### Game State Cell

Tracks:

* Current spin count
* Maximum spins
* Game status:

  * `0` = spinning
  * `1` = reveal
  * `2` = payout
* Commit hash for randomness

#### Prize Pool Cell

* Holds accumulated CKB from spins
* Uses a simple single-signature lock for MVP
* Capacity increases with every valid spin

No UI. No stealth lock yet. Only correctness.

---

## PHASE 2 — SPIN TRANSACTIONS (DAYS 3–4)

Implement a valid spin transaction:

* User pays exactly `spin_fee`
* Prize Pool cell capacity increases
* Spin counter increments
* Participants list updates

Success condition:

> You can submit multiple spins and see the jackpot grow exactly as expected on-chain.

At this point, the project is already meaningful.

---

## PHASE 3 — REVEAL & PAYOUT (DAYS 5–6)

### Reveal Phase

* Commit hash stored at game creation
* Operator submits secret seed
* Script verifies `hash(seed) == commit_hash`

### Winner Selection

* Combine seed with participants data
* Generate deterministic randomness
* Select weighted winner

### Payout Phase

* Only valid after `spins == max_spins`
* Only winning address can receive jackpot
* Prize Pool cell is fully consumed

Success condition:

> After the final spin, exactly one address can claim the entire jackpot.

---

## PHASE 4 — HARDENING & FEATURES (AFTER MVP)

Only after the MVP works end-to-end:

1. Replace payout lock with **stealth-address lock**
2. Improve randomness (multi-commit or VRF-style)
3. Add treasury split
4. Build frontend UI
5. Add indexer and analytics
6. Perform security review / audit
7. Deploy to mainnet

---

## HOW ASSISTANCE WILL BE USED

During development, assistance can provide:

* Rust smart contract templates
* Molecule schema definitions
* Lumos transaction builders
* Debugging help for failed transactions
* Gas and storage optimization guidance
* Portfolio-quality documentation

---

## IMMEDIATE NEXT ACTION

When ready to begin implementation:

1. Complete Day 1 steps
2. Confirm MVP parameters
3. Request MVP scaffold generation

Once the scaffold is generated, development can proceed immediately with local testing.

---

## FINAL NOTE

This project is:

* Technically advanced
* Realistic on CKB
* Portfolio-worthy
* Suitable for hackathons and grants

Building it step-by-step is the key to success.

