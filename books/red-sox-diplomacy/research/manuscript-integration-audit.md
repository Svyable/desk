# Manuscript Integration Audit — Red Sox Diplomacy

## Current state

The first-pass documentary narrative is complete: front matter, prologue, Chapters 1–22, and epilogue all exist and are checked in the book README.

The book remains **Drafting**. A complete first pass is not the same thing as a publication-ready manuscript.

Rights files now exist at the book root under the `bookself-arr-v1` All Rights Reserved profile.

PR #1786 remains intentionally draft. Do not mark it ready, merge it, or publish the book until the integration gates below are complete and a human explicitly directs that transition.

## Integration gates

### 1. Canonical source ledger

`research/source-ledger.csv` is the validator-facing canonical ledger. Research accumulated faster than the canonical file and now extends through `source-ledger-addendum-15.csv`.

Required normalization:

- merge all legitimate addendum rows into the canonical ledger;
- retain exact schema `id,year,author_or_institution,title,source_type,book_use,url`;
- deduplicate by URL rather than merely by row ID;
- resolve ID collisions without silently discarding a source;
- remove duplicate Marcus/U.S. News scan references where the same URL appears under multiple IDs;
- keep research hypotheses clearly identifiable by source type/use rather than upgrading them into evidence;
- validate URLs syntactically and remove tracking parameters where a stable canonical URL exists.

Do not overwrite the canonical ledger until a complete reconstruction can be made safely from the canonical file plus every addendum.

### 2. Chapter-source map

Updated after the full first pass. The map records publication-stage gaps rather than draft-stage readiness. Treat `High` or `High-Medium` as evidence strength, not permission to skip final verification.

### 3. Quote and scan verification

Before publication, exact language derived from PDFs, scans or oral-history PDFs must be checked against stable page images/screenshots or reliable HTML/transcripts. Particular attention:

- Ted Osius / ADST oral-history wording;
- Douglas Keene / Jerusalem witness wording;
- David L. Marcus, “America’s Salesman” scan;
- Indian MEA documentary volumes;
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

- India: read Shivshankar Menon’s *Choices* directly; obtain strongest Shyam Saran and Ronen Sen first-person material; add a serious nonproliferation-critical source.
- Iran: direct-source check of U.S., EU/EU3, Iranian, IAEA and UNSC chronology; retain distinctions among enrichment, safeguards noncompliance, possible weaponization work and a nuclear weapon.
- Beijing: preserve a stable official copy of the 2024 Red Sox social post; verify contested public-diplomacy allegations against both U.S. and Chinese official records.
- Chapter 22: preserve stable primary/transcript support for Burns’s September 2026 Iraq retrospective and precise sourcing for detained-American outcomes.

### 6. Narrative continuity/depth pass

The full manuscript now permits editing that was impossible chapter by chapter.

Audit for:

- repeated formulations of the same thesis, especially `human channel`, `representation`, `patience`, `communication is not trust`, and `person inside institution`;
- chapters that summarize a policy problem instead of turning through a documented scene or decision;
- baseball references that merely decorate rather than reveal character, social intelligence or the limits of analogy;
- repeated sentence rhythms and presentation-style symmetry;
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

- acknowledgments / note on sources if appropriate;
- selected bibliography or source note if the Desk/Shelf book format calls for it;
- any author note required to explain the documentary method and the two-Burns-books experiment.

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
