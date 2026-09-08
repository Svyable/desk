# Release Review — The Books That Wrote America

**Reviewed:** September 7, 2026  
**Desk source:** `d0a15c2caafa8f0b95e30d7dcbbe990e6e8f0927`

## Decision

**Remain blocked with precise remediations.** The manuscript is canonically `Complete draft`, lists 25 of 25 chapters plus front and back matter, and carries book-level rights metadata and a substantial research/falsification packet. No `Drafting`, revision, or `DO NOT RELEASE` marker controls the canonical book README.

Publication is not yet cleared because two objective repository gates remain unresolved:

1. `research/source-ledger.csv` uses a legacy ten-column schema (`source_id,chapter,accessed_date,publication_date,author_or_institution,title,source_type,claim_or_use,url,notes`) while the current Desk integrity checker requires exactly `id,year,author_or_institution,title,source_type,book_use,url`. Normalize the ledger without dropping source provenance or falsification notes, then run the ordinary Desk integrity command.
2. The frozen candidate still needs the literal full-book mechanical length result under `scripts/check-book-length.py` and a literal clean `scripts/check-desk.py` result on the same committed source. Do not infer either pass from chapter-file presence or manuscript completeness.

## Package reviewed

The canonical README identifies Sven Hardy Benson as author, `Complete draft` as status, 25 of 25 drafted chapters, first complete draft dated September 2026, and explicit Desk/Shelf separation. The contents checklist includes front matter, all 25 numbered chapters, and back matter.

The research brief defines a falsifiable selection method rather than a prestige canon. It requires every decade winner to survive runner-up comparisons and preserves chapter-specific vulnerabilities, including pre-existing movements, later canon formation, adaptation effects, disputed anecdotes, institutional mediation, and the distinction between consequence and endorsement.

`RIGHTS.md` identifies Sven Hardy Benson as author and copyright owner, uses the `bookself-arr-v1` profile, permits public reading by the owner, and reserves reproduction, derivative, commercial, and AI/ML reuse rights except where independently permitted by law.

## Current factual checks

The most obviously time-sensitive final-decade claim was rechecked against the current White House record on September 7, 2026: JD Vance is serving as Vice President of the United States. That supports the manuscript/research description of *Hillbilly Elegy* becoming part of its author's political credential on the path to the vice presidency.

A representative delayed-canonization claim was also rechecked against the Library of Congress: its April 10, 2025 Gatsby research note records 155,000 Armed Services Edition copies distributed in 1945 and describes the wartime distribution as central to the novel's later revival. This supports the research packet's boundary that *The Great Gatsby* was not originally a blockbuster and that much of its institutional consequence arrived later.

These spot checks do not substitute for a complete line-by-line factual audit of all 25 chapters. The existing research packet is strong enough to make the remaining work bounded: normalize the ledger, run the mechanical gates, and resolve any concrete errors those steps expose. Do not create an additional generic human-review requirement.

## Required remediations before Shelf

1. Convert `research/source-ledger.csv` to the current seven-column Desk schema while preserving every source's useful claim/use and caveat information.
2. Run `python3 scripts/check-book-length.py the-books-that-wrote-america` on the intended frozen Desk source and require `healthy: true` under repository defaults.
3. Regenerate/reconcile the root Desk dashboard as required by current catalog tooling, then run `python3 scripts/check-desk.py` on the same frozen source and require a clean exit.
4. If those commands reveal chapter-depth, catalog, source-schema, missing-path, or other concrete failures, remediate those exact failures and re-evaluate. If they pass and no new factual/rights blocker appears, the title may proceed to the matched Desk/Shelf publication transaction without inventing another process gate.
