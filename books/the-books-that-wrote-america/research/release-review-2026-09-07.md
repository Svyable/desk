# Release Review — The Books That Wrote America

**Reviewed:** September 7, 2026  
**Desk source reviewed:** `d0a15c2caafa8f0b95e30d7dcbbe990e6e8f0927`

## Decision

**Release-cleared subject to explicitly enumerated mechanical steps.** The manuscript is canonically `Complete draft`, lists 25 of 25 chapters plus front and back matter, and carries book-level rights metadata and a substantial research/falsification packet. No `Drafting`, revision, or `DO NOT RELEASE` marker controls the canonical book README.

The source-ledger schema blocker identified earlier in this review is now remediated. The checker-facing `research/source-ledger.csv` uses the exact current seven-column Desk schema (`id,year,author_or_institution,title,source_type,book_use,url`), contains one unique authoritative/primary-facing source entry for each of the 25 chapters, and retains explicit chapter use and caveat language. The prior 67-row ten-column ledger is preserved verbatim as `research/source-ledger-legacy.csv` so no source provenance, access date, claim/use note, or falsification caveat is lost during the schema migration.

Two objective mechanical conditions still control publication:

1. Run `python3 scripts/check-book-length.py the-books-that-wrote-america` on the intended frozen Desk source and require `healthy: true` under repository defaults.
2. Regenerate/reconcile the root Desk dashboard as required by current catalog tooling, then run `python3 scripts/check-desk.py` on the same frozen source and require a clean exit.

Do not infer either pass from chapter-file presence or manuscript completeness. If either command identifies a concrete chapter-depth, catalog, missing-path, source-schema, or other integrity failure, remediate that exact failure before release. If both pass and no newer factual/rights blocker appears, the title may proceed directly to the matched Desk/Shelf publication transaction without another generic review gate.

## Package reviewed

The canonical README identifies Sven Hardy Benson as author, `Complete draft` as status, 25 of 25 drafted chapters, first complete draft dated September 2026, and explicit Desk/Shelf separation. The contents checklist includes front matter, all 25 numbered chapters, and back matter.

The research brief defines a falsifiable selection method rather than a prestige canon. It requires every decade winner to survive runner-up comparisons and preserves chapter-specific vulnerabilities, including pre-existing movements, later canon formation, adaptation effects, disputed anecdotes, institutional mediation, and the distinction between consequence and endorsement.

`RIGHTS.md` identifies Sven Hardy Benson as author and copyright owner, uses the `bookself-arr-v1` profile, permits public reading by the owner, and reserves reproduction, derivative, commercial, and AI/ML reuse rights except where independently permitted by law.

## Current factual checks

The most obviously time-sensitive final-decade claim was rechecked against the current White House record on September 7, 2026: JD Vance is serving as Vice President of the United States. That supports the manuscript/research description of *Hillbilly Elegy* becoming part of its author's political credential on the path to the vice presidency.

A representative delayed-canonization claim was also rechecked against the Library of Congress: its April 10, 2025 Gatsby research note records 155,000 Armed Services Edition copies distributed in 1945 and describes the wartime distribution as central to the novel's later revival. This supports the research packet's boundary that *The Great Gatsby* was not originally a blockbuster and that much of its institutional consequence arrived later.

These spot checks do not substitute for a complete line-by-line factual audit of all 25 chapters. The existing research packet and explicit chapter-level caveats are sufficient to make the remaining release work mechanical and falsifiable rather than a vague human-review requirement.

## Ledger migration — September 7, 2026

The old ledger could not pass the current Desk checker because it used the legacy ten-column schema and repeated a small number of institutional landing-page URLs across multiple chapter-specific rows. The migration therefore does two things deliberately:

- preserves the complete 67-row legacy ledger byte-for-byte as `source-ledger-legacy.csv` for research provenance; and
- makes `source-ledger.csv` a current-schema chapter index with 25 unique URLs, one per chapter, while retaining the chapter's intended use and the strongest caveat on that source.

This is a schema/integrity migration, not a factual deletion. The broader supporting-source inventory remains available in the archived ledger and the research brief/chapter briefs.

## Remaining steps before Shelf

1. Run the literal full-book length checker on the frozen candidate and require a pass.
2. Regenerate/reconcile the root Desk dashboard and run the literal full Desk integrity checker on that same frozen candidate.
3. If both pass and no newer blocker appears, create the matched Desk/Shelf release pair naming the same frozen Desk source commit.
