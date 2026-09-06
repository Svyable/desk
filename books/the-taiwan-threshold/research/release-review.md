# Release review — The Taiwan Threshold

**Reviewed:** 2026-09-06  
**Desk source under review before this focused pass:** `1f1b4dcc3e073dc9fe0dc1687b26a23d189cf19b`  
**Current delta-reviewed Desk source:** `2e716f684591c51f81c79a05faa4e3dfe31847e5`  
**Mechanical validation base:** `c207010f28e1a6aed80218c73f1f7adf59cfc8b9`  
**Decision:** **Substantively release-cleared, but remain blocked from first Shelf release by explicit mechanical remediations.**

## Mechanical gate result — September 6, 2026

Temporary non-merge Desk validation PR #1236 executed the repository-conventional checks rather than inferring readiness from file presence.

`python3 scripts/check-book-length.py the-taiwan-threshold` failed on the substantively cleared manuscript source. It found 18 numbered chapters and **47,216 chapter-only words**, below the **65,000** minimum. Eleven chapters are below the **3,000-word** per-chapter floor:

- Chapter 3 — 2,415 words
- Chapter 4 — 2,411 words
- Chapter 5 — 2,246 words
- Chapter 6 — 2,259 words
- Chapter 10 — 1,819 words
- Chapter 11 — 1,732 words
- Chapter 13 — 1,679 words
- Chapter 15 — 2,274 words
- Chapter 16 — 1,824 words
- Chapter 17 — 2,213 words
- Chapter 18 — 2,497 words

The manuscript therefore needs substantive deepening rather than mechanical padding. Even lifting only those eleven chapters to 3,000 words would not by itself satisfy the 65,000-word full-book floor.

The same validation run executed `python3 scripts/check-desk.py` against current Desk main `c207010f28e1a6aed80218c73f1f7adf59cfc8b9`. That check also failed on repository-wide integrity debt outside this book, including unsynchronized catalog/discovery surfaces and multiple source-ledger/source-schema errors. Those global failures are a separate publication gate and must be clean on the eventual frozen source before any Shelf transaction.

These failures replace the former generic “mechanical checks remain” language with concrete remediations. They do not revoke the factual/research/editorial clearance below.

## Post-augmentation delta review — September 6, 2026

Desk PR #1199 subsequently rewrote only Chapter 2, `Gray Is a Strategy`, for this book. The focused delta was re-read against the prior complete claim-level review before carrying substantive release clearance forward to current Desk source `2e716f684591c51f81c79a05faa4e3dfe31847e5`.

The revised chapter substantially expands the book’s decision-architecture analysis: classification latency, baseline ledgers, ratchet and rollback measures, effect matrices, consultation triggers, private-amplification latency, restoration time, learning audits, adaptation asymmetry, pattern-confidence layers, threshold families, and reset conditions. Those constructs are presented as authorial analytic tools and questions for scenario planning, not as reported Taiwanese, Chinese, U.S., Japanese, Philippine, or allied policies, deployed systems, measured historical statistics, or evidence of a specific operational plan.

The delta preserves the evidentiary boundaries already controlling this manuscript. It continues to distinguish observed effect from inferred intent, scenario analysis from observed operation, consultation from automatic commitment, and machine-assisted pattern recognition from reliable intent detection. It adds no new dated quantitative claim, named quotation, attributed current operational fact, or assertion that would require a new source-ledger entry before first release.

No factual correction or new substantive blocker was identified in the changed Chapter 2 prose. The prior full-manuscript factual, research, rights, matter, novelty, and editorial clearance therefore remains valid for the current delta-reviewed Desk source.

## What is established

- The canonical README says `Complete draft`, with front matter, prologue, 18 numbered chapters, and back matter checked.
- `RIGHTS.md` and `rights.json` are present and internally consistent under `bookself-arr-v1`.
- The research brief and source ledger preserve the controlling distinctions between capability and intent, exercises and operations, scenario analysis and observed events, and partner relevance and automatic commitment.
- The September 6 opening/late-book release-evidence pass inspected the front matter, prologue, Chapters 1–5, and Chapters 15–18 against current authoritative evidence. No factual manuscript correction was required.
- The September 6 Chapters 6–14 pass completed the remaining claim-level review across inspections, air/maritime pressure, undersea cables, cyber, finance, semiconductors, Japan, the Philippines, and Washington's classification problem. No factual manuscript correction was required in that tranche either.
- Current Taiwan cable-resilience and cyber-resilience sources were added with explicit attribution boundaries; current semiconductor and alliance sources were rechecked without upgrading announcements, exercises, access, or policy statements into claims of completed capability or predetermined contingency decisions.
- The old back-matter statement that the complete trade manuscript remained under development was replaced with a neutral Desk/Shelf edition note.
- The post-#1199 Chapter 2 augmentation received a focused delta review on source `2e716f684591c51f81c79a05faa4e3dfe31847e5`; it introduces analytic planning constructs but no new material factual claim requiring separate sourcing.

See:
- [release-evidence-pass-2026-09-06.md](release-evidence-pass-2026-09-06.md)
- [release-evidence-pass-ch06-14-2026-09-06.md](release-evidence-pass-ch06-14-2026-09-06.md)

## Full substantive decision

The complete manuscript remains **release-cleared on factual, research, rights, matter, novelty, and editorial grounds** through the focused Chapter 2 delta review on Desk source `2e716f684591c51f81c79a05faa4e3dfe31847e5`.

The book does not predict a date for war, treat every exercise or patrol as invasion preparation, convert cable incidents into automatic sabotage attribution, equate cyber access with executed effect, claim that announced semiconductor diversification has already replaced Taiwan's ecosystem, or treat Japanese/Philippine relevance as automatic operational commitment.

The manuscript's central claim remains bounded: cumulative coercive actions below the conventional threshold of war can alter operating conditions, expectations, and response choices even when no single act settles intent or legal classification.

## Required remediations before Shelf release

1. Substantively deepen the manuscript so every numbered chapter is at least 3,000 words and the chapter-only manuscript is at least 65,000 words; do not use filler or padding to satisfy the gate.
2. Re-run `python3 scripts/check-book-length.py the-taiwan-threshold` on one frozen Desk source and require a clean pass.
3. Restore repository-wide Desk integrity, including catalog/discovery synchronization and source-data contract failures reported by `python3 scripts/check-desk.py`.
4. Re-run `python3 scripts/check-desk.py` on the same publication base and require a clean pass.
5. Only then freeze the committed Desk source and prepare the linked Desk/Shelf publication pair from exactly that snapshot.

No additional human-review requirement is imposed. The remaining blockers are objective and enumerated.
