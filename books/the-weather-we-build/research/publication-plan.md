# Publication Plan — The Weather We Build

**Edition target:** Expanded 16-chapter Sven Hardy Benson edition  
**Desk state:** Expanded working draft  
**Publication surface:** Sven Hardy Benson's Shelf  
**Policy:** Do not overwrite or blur the existing September 2026 frozen Shelf snapshot. Publish a new snapshot only from a newly frozen, fully reviewed Desk commit.

## Gate 0 — Preserve provenance

- [x] Existing Shelf snapshot remains tied to frozen source `819e8187720b945f499ca53793d1cce7ace1abaa`.
- [x] Expanded manuscript is clearly marked as a later Desk working edition.
- [x] Rights packet exists (`RIGHTS.md`, `rights.json`).
- [x] Reader manifest exists (`reader.json`).

## Gate 1 — Manuscript completeness

- [x] Front matter present.
- [x] Prologue present.
- [x] Chapters 1–16 present.
- [x] Epilogue present.
- [x] Back matter present.
- [x] README table of contents matches the 16-chapter manuscript.

**Result:** pass.

## Gate 2 — Evidence and novelty

- [x] Original 12-chapter publication source ledger exists.
- [x] Intellectual and lexical predecessors for the original framing are recorded.
- [x] Chapters 13–16 now have an authoritative evidence addendum.
- [x] New late-book concepts are explicitly treated as authorial framing, not established technical nomenclature.
- [x] Chapter 15 preserves distinctions among mitigation, adaptation, carbon removal, weather modification, and solar geoengineering.
- [x] Chapter 16 preserves the strongest countercase: robustness can sometimes replace tighter environmental control.

**Result:** pass for editorial progression.

## Gate 3 — Developmental edit

- [x] Chapter 12 no longer behaves like the book's final climax; its ending now opens the four questions developed by Chapters 13–16.
- [x] Chapter 13 retains a distinct job: capability density, thermal obligation, thermal clocks, and thermal strategy rather than the broader urban heat-flow material in Chapters 8 and 10.
- [x] Chapter 14 earns its place through continuity, tacit operational knowledge, institutional behavior, and the conversion of *can* into *keeps*, rather than repeating Chapter 10's sensing/observability argument.
- [x] Chapter 15 now opens by naming planetary control as a temptation rather than calling Earth a literal controlled environment; the cleanroom comparison remains an explicitly dangerous analogy used to teach systems humility.
- [x] Chapter 16 materially constrains the thesis by making robustness a real alternative to tighter control at the margin.
- [x] The epilogue now resolves heat debt, maintenance/continuity, planetary boundaries, and robustness while preserving the original closing image.
- [x] Repeated motifs are functioning as deliberate refrains around dependency, boundaries, heat, maintenance, and physicality rather than as structural duplication.
- [x] The late-book departures from the “begin with a room” principle are deliberate: Chapters 12, 15, and 16 operate as synthesis/counter-thesis chapters rather than new sector case studies.

**Result:** pass. No unresolved developmental issue requires chapter reorder, deletion, or thesis change.

## Gate 4 — Line and fact edit

Run a publication copyedit against the post-developmental manuscript with these rules:

- [ ] Normalize capitalization, punctuation, quotation style, em dashes, and heading conventions.
- [ ] Remove accidental repetition and sentence-level throat clearing while preserving Sven Hardy Benson's compressed cadence.
- [ ] Check every factual sentence that could be read as quantitative, historical, medical, regulatory, or current against the ledgers.
- [ ] Preserve boundary language: “some,” “can,” “may,” “where appropriate,” and sector-specific qualifications where the evidence requires them.
- [ ] Verify that no release copy describes “manufactured weather” as an original coinage.
- [ ] Verify that author-facing surfaces say **Sven Hardy Benson**.
- [ ] Verify that legitimate Svyable imprint/repository/platform references remain only where they belong.

**Exit criterion:** copyedit complete with no factual blocker and no unresolved author/byline inconsistency.

## Gate 5 — Publication candidate freeze

After Gate 4 passes:

- [ ] Mark Desk status `Complete expanded draft` or repository-equivalent publication-ready state.
- [ ] Record the exact candidate commit SHA in this file and the release review.
- [ ] Do not modify manuscript prose after freeze without invalidating the candidate and re-running the relevant gates.
- [ ] Derive any word counts or generated catalog metadata from repository tooling rather than hand-estimating.

**Exit criterion:** one immutable Desk commit is the sole source for the new Shelf edition.

## Gate 6 — Mechanical repository validation

From the frozen candidate:

- [ ] Run the repository's catalog generator (`python3 scripts/catalog.py --write`) if required by current Desk conventions.
- [ ] Run `python3 scripts/check-desk.py` or the current equivalent validator.
- [ ] Resolve only objective validation failures; do not use the release step for unrelated manuscript expansion.
- [ ] Confirm rights metadata, Reader manifest, catalog/discovery registration, feedback surface, and sitemap/discovery files as required by current repository tooling.

**Exit criterion:** required checks green and generated files derived from the frozen source.

## Gate 7 — Shelf release pair

- [ ] Create the next Sven Hardy Benson's Shelf snapshot from the exact frozen Desk candidate.
- [ ] Transfer the full manuscript, research packet, rights packet, and Reader metadata required by Shelf conventions.
- [ ] Change publication status/metadata only where Shelf requires it; do not silently rewrite prose during transfer.
- [ ] Compare source and released manuscript files for exact content equality where equality is expected.
- [ ] Keep the September 2026 prior snapshot historically legible rather than pretending it never existed.

**Exit criterion:** Shelf content is traceable to one frozen Desk SHA.

## Gate 8 — Final release review

The final reviewer must be able to answer yes to all of the following:

- [ ] Is the 16-chapter manuscript the intended edition?
- [ ] Did every new chapter pass evidence review?
- [x] Did the epilogue receive a post-expansion structural check?
- [ ] Are rights and public-reading permissions explicit?
- [ ] Are predecessor/novelty boundaries explicit?
- [ ] Are generated catalog and discovery surfaces current?
- [ ] Are objective repository checks green?
- [ ] Is the Shelf snapshot derived from the recorded frozen Desk SHA?
- [ ] Are there zero unresolved `Drafting`, `Revision`, `DO NOT RELEASE`, or equivalent blockers controlling this edition?

Only then change the disposition to **release-cleared**.

## Current publication disposition

**Not yet release-cleared.**

Structural completeness, expansion evidence, and developmental edit are now passed. The next gate is deliberately narrow: publication line/fact edit. After that, freeze exactly one candidate SHA and move into mechanical validation. No further chapter expansion should enter this edition unless it is important enough to reopen Gate 3.