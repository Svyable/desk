# Release gate closeout — The Other 250 — September 7, 2026

**Desk source reviewed:** `30c1ed778356b834e4c23f657ab3798f4d64edf7`  
**Status:** Release-cleared on substantive factual/editorial/rights grounds; all known per-chapter depth defects are closed; publication remains subject only to the explicit repository mechanical/integrity steps below.

## Depth gate

The September 6 literal `scripts/check-book-length.py the-other-250` run established 26 numbered chapters, a 68,901-word chapter-only corpus, and 21 chapters below the 3,000-word per-chapter floor. Chapters 18 and 23–26 already passed on that frozen source.

Every one of the original 21 sub-floor chapters has now received bounded substantive remediation. The final two closures landed on September 7:

- Chapter 16, `ch16-america-chooses-its-ancestry.md`: the pre-remediation blob was byte-identical to the September 6 source; +961 exact checker-token words guarantee a current count of at least 3,240 words.
- Chapter 21, `ch21-the-broken-promise-at-studebaker.md`: the pre-remediation blob was byte-identical to the September 6 source; +996 exact checker-token words guarantee a current count of at least 3,275 words.

The chapter-specific and aggregate remediation artifacts preserve the exact arithmetic or conservative lower-bound proof for all prior closures. No remaining numbered chapter is known to be below 3,000 words. The aggregate 65,000-word floor was already satisfied before remediation.

This evidence does not fabricate a literal final checker execution. The final candidate still requires:

`python3 scripts/check-book-length.py the-other-250`

on one frozen committed Desk source, with `healthy: true`.

## Desk integrity gate

The title-specific source-ledger schema defect is closed, and the book remains a complete 26-chapter package with front matter, back matter, research trail, rights metadata, and no unresolved factual/research blocker.

A fresh inspection of the current repository contract shows that a full `scripts/check-desk.py` run cannot pass on current main for reasons outside this title: the repository has real book folders that are missing from the current `catalog.json` / generated Desk discovery state. Specifically, current main contains:

- `books/the-books-that-wrote-america/`
- `books/the-decisive-25/`
- `books/the-ten-year-republic/`

while those slugs are absent from the current canonical `catalog.json`. The root README summary is correspondingly stale at 117 projects even though current canonical book-local state is 122 projects.

That is a concrete repository-wide integrity blocker, not a reason to reopen *The Other 250*'s substantive review. Before release, regenerate/reconcile the current Desk catalog and discovery surfaces using the repository-conventional catalog tooling, then require:

`python3 scripts/check-desk.py`

to exit cleanly on the same frozen release candidate.

## Release decision

**Release-cleared subject to explicit mechanical/integrity steps only.** No additional factual, editorial, rights, or human-review gate is introduced.

Proceed to the matched Desk/Shelf release transaction once all of the following are true on one frozen committed Desk source:

1. `scripts/check-book-length.py the-other-250` reports healthy.
2. Current Desk catalog/discovery drift is reconciled and `scripts/check-desk.py` exits cleanly.
3. The intended 28 Reader surfaces remain present and ordered: front matter, 26 chapters, and back matter.
4. The Shelf snapshot is prepared from that exact frozen Desk source, with Chapter 26's first-edition factual horizon retained as September 6, 2026.

Until those two repository commands actually pass, do not label the Shelf release complete. Once they pass, no further readiness review is required by this artifact.
