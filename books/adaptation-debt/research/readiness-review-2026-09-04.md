# Adaptation Debt — readiness review — 2026-09-04

## Purpose

This note records the objective state of *Adaptation Debt* after the planned twenty-chapter manuscript and the first evidence-led depth pass landed in Desk.

It is intentionally conservative. The manuscript is **20 of 20 drafted**, but the book remains **Drafting** until the local word-count and repository-integrity gates are actually executed. Byte size, visual chapter length, GitHub line counts, and dashboard estimates are not substitutes for those gates.

## Canonical manuscript state

The canonical book README on `main` records:

- author: Sven Hardy Benson;
- status: `Drafting`;
- chapters: `20 of 20 drafted`;
- all twenty numbered manuscript chapter links checked and present.

The planned manuscript was completed through the finale run covering Chapters 17–20. A subsequent depth pass strengthened Chapters 1, 2, and 5 without changing chapter architecture or status.

## Current manuscript byte profile

The following values are GitHub content sizes for the current numbered Markdown chapter files. They are useful only as a triage signal. **They are not word counts and do not establish the 3,000-word chapter floor.**

| Chapter | Bytes |
|---:|---:|
| 1 | 18,484 |
| 2 | 18,154 |
| 3 | 15,280 |
| 4 | 15,684 |
| 5 | 18,985 |
| 6 | 16,807 |
| 7 | 16,330 |
| 8 | 16,298 |
| 9 | 17,447 |
| 10 | 17,768 |
| 11 | 17,667 |
| 12 | 18,549 |
| 13 | 16,666 |
| 14 | 15,924 |
| 15 | 15,321 |
| 16 | 20,748 |
| 17 | 16,792 |
| 18 | 20,558 |
| 19 | 21,622 |
| 20 | 22,555 |

The twenty numbered chapters total approximately 357,639 bytes of Markdown. Front matter is an additional approximately 11,317 bytes. These figures help identify comparatively short chapters but must not be converted into a claimed manuscript word count.

The smallest remaining byte profiles are Chapters 3, 4, 14, and 15. A read-through of Chapters 14 and 15 found substantive timing, counterevidence, and option-design work already present; they should not be padded merely to resemble later chapters by file size. Exact local word counts should decide whether any further depth work is required.

## Research and falsification state

The research package contains a dedicated research/falsification brief and a normalized source ledger currently extending through `AD042`.

The source trail covers the manuscript's principal empirical and conceptual lanes, including:

- organizational learning, exploration/exploitation, core rigidities, architectural innovation, path dependence, structural inertia, dynamic capabilities, and ambidexterity;
- Kodak, Adobe, Netflix, Microsoft, and IBM primary or first-party records;
- GAO legacy-system modernization evidence;
- IEA and U.S. Department of Energy existing-asset and retrofit evidence;
- policy feedback, organizational identity, real-options logic, authentic dissent, psychological safety, and programmed ex-post review / sunset evidence.

The research brief preserves explicit falsification tests and terminology boundaries. The manuscript repeatedly keeps the strongest countercase visible: durable commitments can create reliability, trust, compatibility, capability, and option value rather than automatically constituting debt.

No new source-ledger rows were needed for the Chapters 1, 2, and 5 depth pass because the added facts remained inside already-ledgered Kodak, GAO, DOE, and IEA sources.

## Rights state

`RIGHTS.md` and `rights.json` agree on:

- work: *Adaptation Debt*;
- author and copyright owner: Sven Hardy Benson;
- copyright: © 2026 Sven Hardy Benson. All Rights Reserved;
- policy/profile: `bookself-arr-v1`;
- public reading and conventional search permitted;
- reproduction, distribution, derivatives, commercial reuse, AI training/generative use/retrieval/indexing, synthetic narration, and synthetic translation reserved unless separately authorized;
- registration status recorded as `not-recorded-in-bookself`, with no registration number or effective date asserted.

No rights inconsistency was found in this review.

## Known repository-integrity blocker

The generated root Desk dashboard is stale for this book.

The canonical book README says `20 of 20 drafted`, while the root `README.md` catalog row still says `4 of 20`.

This is not merely cosmetic. `scripts/catalog.py --json` contains an audit that emits the error code `catalog_progress_stale` when normalized dashboard progress disagrees with the canonical book README, and the repository integrity checker invokes the catalog audit.

The normal repair is the repository's generator:

```text
python3 scripts/catalog.py --write
```

That command should be run from a real local Desk checkout against current `main`, then the generated diff should be inspected so unrelated concurrent catalog changes are not overwritten.

This connector session did not have a mounted repository checkout. Replacing the entire generated root README through the GitHub contents API merely to change one catalog cell was deliberately avoided because it would create unnecessary concurrency risk.

## Remaining objective completion gates

Do **not** promote *Adaptation Debt* from `Drafting` based on this review alone.

A local checkout still needs to establish all of the following against current `main`:

1. Every numbered chapter is at least 3,000 words under the repository's counting rules.
2. The qualifying manuscript total is at least 65,000 words, with the 70,000–90,000-word range preferred when depth is earned rather than padded.
3. `python3 scripts/catalog.py --write` refreshes the stale root dashboard row and any other generated catalog values from current canonical book metadata.
4. `python3 scripts/check-desk.py` passes after the generated catalog refresh.
5. The final diff is inspected for accidental cross-book or generated-file churn before any status/finalization PR is merged.

If exact counts reveal a short chapter, deepen the argument with evidence, cases, counterevidence, or operational detail. Do not add prose merely to cross a threshold.

## Readiness conclusion

The planned manuscript architecture is complete at twenty of twenty chapters. Rights are consistent, the source/falsification package is substantial, and the first depth pass has strengthened three of the smallest foundation chapters.

The remaining barrier to a completion-status decision is objective local verification, plus the known generated-dashboard mismatch. Until those gates are executed, `Drafting` is the correct Desk status.
