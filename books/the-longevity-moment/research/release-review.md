# Release review — The Longevity Moment

**Reviewed:** 2026-09-05  
**Desk source:** `706f2ff9c6a98769c9388cb50826ebead97f8a13`  
**Decision:** **Remain blocked — do not release to Shelf.**

## What is already in good shape

- The canonical README is `Complete draft` with front matter, 22 numbered chapters, three interludes, and back matter all checked.
- `RIGHTS.md` and `rights.json` are present and use the repository's standard all-rights-reserved profile.
- The research packet includes a source ledger plus chapter/interlude falsification notes and is explicitly cautious about biomedical longevity claims, healthspan, averages, and unequal access.
- A bounded release-readiness read found no reason to weaken those research boundaries. The blocker below is independently controlling, so this review does not claim a completed line-by-line factual audit of every chapter.

## Controlling blocker: one-shot full-book length gate

PR #896 introduced this project as a **complete new trade-nonfiction manuscript** in one book drop. That makes `docs/book-brief-standard.md` controlling for the original automated full-book drop. The standard requires:

- at least 18 numbered chapters;
- every numbered chapter at or above 3,000 words; and
- at least 65,000 words across numbered `chNN-*.md` chapter files, verified with `python3 scripts/check-book-length.py the-longevity-moment`.

The current manuscript tree is `2f3535fd7578bab8ee56070fd6fa35f299d3fed3`, unchanged from the generated Desk dashboard snapshot that reported roughly 58,887 Markdown words across the manuscript. The validator counts a strict subset of that material: numbered chapters only, excluding front matter, back matter, and the three interludes. Therefore the current chapter-only total is necessarily below 58,887 and cannot satisfy the 65,000-word floor.

This is not a request to pad the manuscript. The repository standard explicitly requires real additional cases, research, counter-evidence, or adjacent argument rather than repeated prose.

## Required remediation

1. Substantively deepen the numbered chapters until the one-shot full-book floor can be met without padding.
2. Run `python3 scripts/check-book-length.py the-longevity-moment` against the remediated committed source and require a passing result.
3. Run the normal Desk integrity/catalog checks required by current repository instructions.
4. Refresh any time-sensitive claims that changed during remediation and re-evaluate release readiness.

Until those steps are complete, `Complete draft` means manuscript-complete in Desk, **not release-cleared**.