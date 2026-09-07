# Mechanical depth audit — The Decisive 25

**Audit date:** September 6, 2026  
**Purpose:** prioritize substantive depth work before the exact Desk length checker is run.

This is a **byte-size triage, not a word-count result**. Git blob sizes are useful for deciding where to deepen first, but they must never be substituted for `python3 scripts/check-book-length.py the-decisive-25`. English prose varies too much in word length, punctuation, Markdown, and spacing for bytes to prove the 3,000-word floor.

The Desk standard remains controlling: every numbered chapter must contain at least 3,000 words and the numbered chapters together must contain at least 65,000 words.

## Current chapter-size triage

| Chapter | Person | Bytes at audit | Priority |
|---|---|---:|---|
| 1 | George Washington | 22,204 after first depth pass | Recheck mechanically |
| 2 | Alexander Hamilton | 18,359 | Medium |
| 3 | Toussaint Louverture | 16,271 | High |
| 4 | Tecumseh | 15,406 | High |
| 5 | John Marshall | 16,345 | High |
| 6 | Andrew Jackson | 16,262 | High |
| 7 | Samuel Morse | 14,826 | Highest |
| 8 | Frederick Douglass | 15,633 | High |
| 9 | Abraham Lincoln | 16,916 | High |
| 10 | Ulysses S. Grant | 15,343 | High |
| 11 | Thomas Edison | 15,087 | Highest |
| 12 | J. P. Morgan | 14,603 | Highest |
| 13 | Theodore Roosevelt | 15,154 | Highest |
| 14 | Henry Ford | 15,260 | High |
| 15 | Alice Paul | 15,500 | High |
| 16 | Franklin D. Roosevelt | 16,929 | High |
| 17 | J. Robert Oppenheimer | 16,157 | High |
| 18 | George C. Marshall | 17,217 | Medium-high |
| 19 | Martin Luther King Jr. | 16,281 | High |
| 20 | Richard Nixon | 15,629 | High |
| 21 | Ronald Reagan | 16,620 | High |
| 22 | Bill Gates | 15,475 | High |
| 23 | Osama bin Laden | 15,046 | Highest |
| 24 | Steve Jobs | 16,086 | High |
| 25 | Donald Trump | 18,686 | Medium |

The byte figures for Chapters 2–25 come from the branch manuscript tree before the first depth rewrite. Chapter 1 was rewritten substantively afterward and is recorded at its new 22,204-byte size. Exact word counts remain unknown until the checker runs.

## Depth order

The safest publication strategy is not to expand every chapter indiscriminately. Start where the risk of a 3,000-word failure is highest and where additional material can improve the causal argument.

### Tranche A — highest-risk compact chapters

- **Chapter 7 — Morse:** deepen the telegraph's effects on newspapers, markets, railroad coordination, political time, and the distinction between Morse's personal leverage and the near-inevitability of electrical signaling.
- **Chapter 12 — Morgan:** deepen railroad reorganization as private governance, the 1895 gold episode, the missing-central-bank problem, and the Rockefeller rival case.
- **Chapter 23 — bin Laden:** deepen the distinction between provocation and U.S. agency, the institutional transformation after September 11, the Bush rival case, and the danger of granting an attacker causal ownership of discretionary American choices.
- **Chapter 11 — Edison:** deepen the electrical system rather than the lamp—generation, distribution, load, financing, standardization, and the Bell/Westinghouse counterfactual.
- **Chapter 13 — Theodore Roosevelt:** deepen the common logic connecting trust regulation, labor mediation, conservation, Panama, and the Roosevelt Corollary while preserving McKinley's stronger claim to the original imperial acquisitions.

### Tranche B — early-American causal depth

- Chapters 3–6 and 8–10: expand rival-selection pressure and institutional mechanisms rather than biographical chronology.
- Chapter 1 has already received the first such pass: army survival, Newburgh, civilian supremacy, rival leverage, and the founding contradictions now receive more room.

### Tranche C — twentieth-century mechanism

- Chapters 14–22: deepen the mechanism connecting the selected person's actions to durable institutions or platforms, with special attention to substitutability. Ford, Paul, Oppenheimer, Marshall, King, Reagan, and Gates all have unusually strong rival cases that should receive enough space to make the winner costly rather than ceremonial.

### Tranche D — final live interval

- Chapter 25 should not be enlarged merely to add current events. Its September 6, 2026 evidence freeze is an editorial safeguard. Any later factual update must refresh the ledger and prose together. Additional depth should focus on mechanism, rival selection, institutional persistence, and uncertainty—not news accumulation.

## Expansion rule

A chapter may grow only through material that earns its length. Preferred additions are:

1. a concrete institutional mechanism;
2. a deeper rival case;
3. counterevidence that narrows the claim;
4. a second-order consequence that persisted beyond the decade;
5. evidence about substitutability—what another plausible actor could realistically have done;
6. a neglected group or institution whose contribution prevents lone-person causation.

Do not add ornamental scene-setting, invented interiority, repeated summaries, generic lessons, or extra examples that merely restate the existing thesis.

## Decision rule

After each coherent depth tranche, rerun the exact length checker on a trusted checkout. Once every chapter is at least 3,000 words and the chapter-only total is at least 65,000 words, delete the uncertainty from the release review and record the mechanical evidence. Until then, the book remains **Drafting — structurally complete**.