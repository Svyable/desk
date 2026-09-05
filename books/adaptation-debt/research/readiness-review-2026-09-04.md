# Adaptation Debt — readiness review — 2026-09-04

## Purpose

This note records the objective state of *Adaptation Debt* after the planned twenty-chapter manuscript and two evidence-led depth passes landed in Desk.

It is intentionally conservative. The manuscript is **20 of 20 drafted**, but the book remains **Drafting** until the local word-count and repository-integrity gates are actually executed. Byte size, visual chapter length, GitHub line counts, and dashboard estimates are not substitutes for those gates.

## Canonical manuscript state

The canonical book README on `main` records:

- author: Sven Hardy Benson;
- status: `Drafting`;
- chapters: `20 of 20 drafted`;
- all twenty numbered manuscript chapter links checked and present.

The planned manuscript was completed through the finale run covering Chapters 17–20. The first depth pass strengthened Chapters 1, 2, and 5. The second depth pass strengthened Chapters 3, 4, 14, and 15 without changing chapter architecture or status.

The second pass was deliberately analytical rather than volumetric:

- Chapter 3 now separates adaptation debt from both sunk cost and ordinary switching cost, adds the time dimension to the diagnosis, and makes recurring legacy “debt service” visible across operating budgets.
- Chapter 4 now makes survivorship bias and asymmetric hindsight accounting explicit, and distinguishes entrant concentrated exposure from incumbent managed optionality.
- Chapter 14 now treats waiting as a trade between information arriving and exercise capacity decaying, with distinct technology, customer, organizational, asset, and obligation clocks.
- Chapter 15 now distinguishes information-producing experiments from exercisable organizational options and treats unmanaged option portfolios as a possible new source of adaptation debt.

## Current manuscript byte profile

The following values are GitHub content sizes for the current numbered Markdown chapter files. They are useful only as a triage signal. **They are not word counts and do not establish the 3,000-word chapter floor.**

| Chapter | Bytes |
|---:|---:|
| 1 | 18,484 |
| 2 | 18,154 |
| 3 | 19,104 |
| 4 | 18,308 |
| 5 | 18,985 |
| 6 | 16,807 |
| 7 | 16,330 |
| 8 | 16,298 |
| 9 | 17,447 |
| 10 | 17,768 |
| 11 | 17,667 |
| 12 | 18,549 |
| 13 | 16,666 |
| 14 | 19,453 |
| 15 | 20,040 |
| 16 | 20,748 |
| 17 | 16,792 |
| 18 | 20,558 |
| 19 | 21,622 |
| 20 | 22,555 |

The twenty numbered chapters now total approximately 372,335 bytes of Markdown. Front matter is an additional approximately 11,345 bytes. These figures help identify comparatively short chapters but must not be converted into a claimed manuscript word count.

The earlier byte-profile concern around Chapters 3, 4, 14, and 15 has been addressed with substantive argument rather than padding. The comparatively smaller current files are now Chapters 8, 7, 13, and 17, all of which already contain developed mechanisms and should be deepened only if exact local counts or editorial review identify a real gap.

## Research and falsification state

The research package contains a dedicated research/falsification brief and a normalized source ledger extending through `AD042`.

The source trail covers the manuscript's principal empirical and conceptual lanes, including:

- organizational learning, exploration/exploitation, core rigidities, architectural innovation, path dependence, structural inertia, dynamic capabilities, and ambidexterity;
- Kodak, Adobe, Netflix, Microsoft, and IBM primary or first-party records;
- GAO legacy-system modernization evidence;
- IEA and U.S. Department of Energy existing-asset and retrofit evidence;
- policy feedback, organizational identity, real-options logic, authentic dissent, psychological safety, and programmed ex-post review / sunset evidence.

The research brief preserves explicit falsification tests and terminology boundaries. The manuscript repeatedly keeps the strongest countercase visible: durable commitments can create reliability, trust, compatibility, capability, and option value rather than automatically constituting debt.

No new source-ledger rows were needed for either depth pass because the added argument remained inside already-ledgered empirical and conceptual lanes.

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

## Repository-integrity state

The earlier generated-dashboard progress mismatch has been repaired. The root Desk catalog now shows *Adaptation Debt* at `20 of 20` rather than the obsolete `4 of 20` state.

The root dashboard's last generated snapshot also reported 56,313 words for the book. That number predates the latest Chapter 3, 4, 14, and 15 depth edits and therefore must **not** be treated as the current qualifying manuscript count.

The normal next step remains a local regeneration from current `main`:

```text
python3 scripts/catalog.py --write
python3 scripts/check-desk.py
```

Those commands should be run from a real Desk checkout, followed by inspection of the generated diff so unrelated concurrent catalog changes are not overwritten.

## Remaining objective completion gates

Do **not** promote *Adaptation Debt* from `Drafting` based on this review alone.

A local checkout still needs to establish all of the following against current `main`:

1. Every numbered chapter is at least 3,000 words under the repository's counting rules.
2. The qualifying manuscript total is at least 65,000 words, with the 70,000–90,000-word range preferred when depth is earned rather than padded.
3. `python3 scripts/catalog.py --write` refreshes the exact current word count and any other generated catalog values from canonical book metadata.
4. `python3 scripts/check-desk.py` passes after the generated catalog refresh.
5. The final diff is inspected for accidental cross-book or generated-file churn before any status/finalization PR is merged.

If exact counts reveal a short chapter, deepen the argument with evidence, cases, counterevidence, or operational detail. Do not add prose merely to cross a threshold.

## Readiness conclusion

The planned manuscript architecture is complete at twenty of twenty chapters. Rights are consistent, the source/falsification package is substantial, and seven chapters have now received explicit evidence-led depth passes beyond the initial complete manuscript.

The earlier dashboard progress blocker is gone. The remaining barrier to a completion-status decision is objective local word-count and integrity verification against the latest depth edits. Until those gates are executed, `Drafting` is the correct Desk status.
