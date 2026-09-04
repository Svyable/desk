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

Before freezing a publication candidate, perform one end-to-end structural read with these explicit tests:

- [ ] Does Chapter 12 still function as a climax now that Chapters 13–16 follow it, or should its ending become a hinge rather than a finale?
- [ ] Does Chapter 13 repeat thermal material already covered in Chapters 4, 8, 10, or 12?
- [ ] Does Chapter 14 earn its place through the manufactured-weather thesis rather than becoming a general essay about maintenance?
- [ ] Does Chapter 15 remain disciplined and non-grandiose when moving from rooms to planetary systems?
- [ ] Does Chapter 16 sharpen the thesis through a genuine counterargument rather than merely restating resilience?
- [ ] Does the epilogue now resolve the full 16-chapter arc rather than the earlier 12-chapter arc?
- [ ] Are repeated motifs intentional refrains rather than accidental duplication?
- [ ] Is every chapter opening concrete enough to satisfy the book's own “begin with a room” editorial principle, or is a deliberate exception justified?

**Exit criterion:** no unresolved structural issue that changes chapter order, thesis, or conclusion.

## Gate 4 — Line and fact edit

Run a publication copyedit against the frozen candidate with these rules:

- [ ] Normalize capitalization, punctuation, quotation style, em dashes, and heading conventions.
- [ ] Remove accidental repetition and sentence-level throat clearing while preserving Sven Hardy Benson's compressed cadence.
- [ ] Check every factual sentence that could be read as quantitative, historical, medical, regulatory, or current against the ledgers.
- [ ] Preserve boundary language: “some,” “can,” “may,” “where appropriate,” and sector-specific qualifications where the evidence requires them.
- [ ] Verify that no release copy describes “manufactured weather” as an original coinage.
- [ ] Verify that author-facing surfaces say **Sven Hardy Benson**.
- [ ] Verify that legitimate Svyable imprint/repository/platform references remain only where they belong.

**Exit criterion:** copyedit complete with no factual blocker and no unresolved author/byline inconsistency.

## Gate 5 — Publication candidate freeze

After Gates 3 and 4 pass:

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
- [ ] Did the epilogue receive a post-expansion structural check?
- [ ] Are rights and public-reading permissions explicit?
- [ ] Are predecessor/novelty boundaries explicit?
- [ ] Are generated catalog and discovery surfaces current?
- [ ] Are objective repository checks green?
- [ ] Is the Shelf snapshot derived from the recorded frozen Desk SHA?
- [ ] Are there zero unresolved `Drafting`, `Revision`, `DO NOT RELEASE`, or equivalent blockers controlling this edition?

Only then change the disposition to **release-cleared**.

## Current publication disposition

**Not yet release-cleared.**

The manuscript is complete at the structural-file level and the expansion evidence gate is now closed. The next work is deliberately editorial: developmental read of the 16-chapter arc, then line/fact edit, then freeze and mechanical validation. No further chapter expansion should be folded into this release candidate unless it is important enough to restart the structural gate.