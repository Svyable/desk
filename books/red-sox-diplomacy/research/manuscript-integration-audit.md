# Manuscript Integration Audit — Red Sox Diplomacy

## Current state

The first-pass documentary narrative is complete: front matter, prologue, Chapters 1–22, and epilogue all exist and are checked in the book README.

The book remains **Drafting**. A complete first pass is not the same thing as a publication-ready manuscript.

Rights files exist at the book root under the `bookself-arr-v1` All Rights Reserved profile.

PR #1786 remains intentionally draft. Do not mark it ready, merge it, or publish the book until the integration gates below are complete and a human explicitly directs that transition.

## Work completed in the first integration pass

- Rebuilt `research/source-ledger.csv` from the old canonical ledger plus addenda 02–15.
- Canonical ledger now contains 185 unique URLs with sequential canonical IDs `rsd-001` through `rsd-185` and the exact validator schema.
- Resolved duplicate URLs and historical row-ID collisions rather than treating them as separate sources.
- Preserved old addenda as research history; they are no longer authoritative for canonical IDs.
- Added `source-ledger-addendum-16.csv` for post-addendum India, Iran, and 2025–26 closing-stage sources, IDs `rsd-186` through `rsd-205`.
- Refreshed `chapter-source-map.md` against the complete manuscript.
- Added `continuity-pass-01.md` and applied its three highest-value closing edits: a shorter epilogue, a compressed repeated Beijing-crisis section in Chapter 20, and a more distinct representation-focused China passage in Chapter 21.

## Integration gates

### 1. Canonical source ledger

`research/source-ledger.csv` is the validator-facing canonical ledger.

Current canonical state: normalized through historical addendum 15, 185 unique source URLs.

Current staging state: `source-ledger-addendum-16.csv` adds 20 unique research rows for:

- 2025 Harvard post-Beijing reflection;
- September 2026 Burns Iraq retrospective;
- U.S.-India 123 Agreement primary records and Evan Feigenbaum oral history;
- Iran 2006 U.S. policy shift, Burns testimony, Iranian/UN records, EU institutional material, an independent nonproliferation source, and an IAEA technical record.

Before validator/integration work:

- merge addendum 16 into canonical after one duplicate-URL check;
- retain exact schema `id,year,author_or_institution,title,source_type,book_use,url`;
- continue deduplicating by URL rather than merely by row ID;
- keep research hypotheses clearly identifiable by source type/use rather than upgrading them into evidence;
- remove tracking parameters where a stable canonical URL exists.

Old addenda may remain as provenance/history unless they create tooling confusion. Their row IDs should not be treated as canonical after normalization.

### 2. Chapter-source map

Updated after the full first pass. The map records publication-stage gaps rather than draft-stage readiness. Treat `High` or `High-Medium` as evidence strength, not permission to skip final verification.

### 3. Quote and scan verification

Before publication, exact language derived from PDFs, scans or oral-history PDFs must be checked against stable page images/screenshots or reliable HTML/transcripts. Particular attention:

- Ted Osius / ADST oral-history wording;
- Douglas Keene / Jerusalem witness wording;
- David L. Marcus, “America’s Salesman” scan;
- Indian MEA documentary volumes;
- IAEA `GOV/2006/15` if any exact language is used;
- NATO/archival PDFs where exact procedural quotations are retained.

If a clean primary text cannot be secured, paraphrase rather than preserve an uncertain quotation.

### 4. Known archival gaps to preserve

Do not solve these by narrative inference:

- Burns-specific memory of the 1967 Impossible Dream season;
- Burns-specific memory of the 1975 World Series;
- Burns-specific memory of the 1978 Yankees tiebreaker;
- where/how Burns experienced the 1986 World Series while assigned in Jerusalem;
- where/how Burns watched or reacted in real time to the October 27, 2004 championship;
- the exact Boston Red Sox club contribution to the Greek baseball effort.

The manuscript may use contextual baseball history, but it must continue to label context as context rather than memory.

### 5. High-value remaining source work

- India: read Shivshankar Menon’s *Choices* directly; obtain strongest Shyam Saran and Ronen Sen first-person material; add a serious nonproliferation-critical source specific to the U.S.-India exception.
- Iran: the new addendum substantially improves the U.S./UN/Iran/EU record, but still perform a publication-stage direct-source check of the full chronology and preserve distinctions among enrichment, safeguards noncompliance, possible weaponization work and a nuclear weapon.
- Beijing: preserve a stable official copy of the 2024 Red Sox social post; verify contested public-diplomacy allegations against both U.S. and Chinese official records.
- Chapter 22: the September 2026 PBS interview is now staged in addendum 16; still source detained-American count/details precisely.

### 6. Narrative continuity/depth pass

`continuity-pass-01.md` completed the first closing-unit diagnosis.

Edits already applied:

- epilogue shortened so Chapter 22 owns handoff/revisability;
- Chapter 20 no longer re-narrates the Beijing crisis at Chapter 18 length;
- Chapter 21 now treats the 2024 China programming dispute chiefly as evidence about representation/national image rather than repeating the channel-maintenance argument.

Remaining manuscript-wide audit:

- repeated formulations of `human channel`, `representation`, `patience`, and institutional inheritance;
- chapters that summarize a policy problem instead of turning through a documented scene or decision;
- baseball references that merely decorate rather than reveal character, social intelligence or the limits of analogy;
- repeated `Not X. Y.` pivots, stacked noun lists, and `the distinction matters` transitions;
- conclusions that explain the chapter after the chapter has already landed;
- retrospective claims that make earlier outcomes look inevitable;
- places where Burns is credited for an institutional result that belongs to a team, government, alliance or counterpart network.

Protect the manuscript’s useful roughness. Do not polish it into generic leadership prose.

### 7. Book-package completeness

Already present:

- README / TOC;
- front matter;
- prologue;
- Chapters 1–22;
- epilogue;
- research book brief and extensive dossiers;
- `RIGHTS.md`;
- `rights.json`.

Still assess before integration:

- a concise note on sources/documentary method may be useful because the book intentionally refuses invented scenes and preserves archival gaps;
- a selected bibliography/source note only if it improves reader use beyond the research ledger;
- a short author note about the deliberately different relationship between *Red Sox Diplomacy* and *The Long Table* only if it belongs in the reader-facing edition.

Do not add ceremonial back matter merely to make the package look conventional.

### 8. Desk integration

Only after book-local evidence and continuity work are in acceptable shape:

- refresh from latest `main` before shared-file edits;
- synchronize root `README.md` catalog;
- synchronize `.github/ISSUE_TEMPLATE/chapter-feedback.yml`;
- synchronize `llms.txt`;
- synchronize `sitemap.xml`;
- synchronize Reader direct slugs if that surface remains static;
- run `python3 scripts/check-desk.py`;
- resolve any catalog/status/source-ledger validator failures.

Do not mark PR #1786 ready until these integration checks are clean.

### 9. Publication boundary

Desk is the drafting/integration workspace. A merged Desk manuscript is not automatically a Shelf publication.

Do not copy to Shelf or mark `Status: Published` without an explicit publication instruction. When publication is authorized, publish from an exact committed Desk snapshot, then update Shelf discovery/catalog surfaces and validate there separately.
