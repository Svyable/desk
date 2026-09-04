# Release Review — The Weather We Build

**Reviewed:** 2026-09-03  
**Edition under review:** Expanded 16-chapter Desk working edition  
**Prior Shelf snapshot:** frozen source `819e8187720b945f499ca53793d1cce7ace1abaa`  
**Disposition:** **Not yet release-cleared; evidence gate passed, editorial gates remain.**

## Why this review supersedes the earlier decision

The prior release review cleared the original 12-chapter structural draft for mechanical publication. The manuscript was subsequently expanded with Chapters 13–16. That expansion changed the book's argumentative ending and therefore invalidated any claim that the expanded Desk edition was already release-cleared.

The existing September 2026 Shelf snapshot remains valid as a historical frozen edition. This review concerns only the later 16-chapter Desk edition.

## Current scope

The expanded manuscript contains:

- front matter;
- prologue;
- Chapters 1–16;
- epilogue;
- back matter;
- book-level rights packet;
- Reader manifest;
- original publication source ledger;
- Chapters 13–16 evidence addendum;
- methodical publication plan.

The book README correctly marks the Desk manuscript as an expanded working draft rather than silently replacing the previously published snapshot.

## Evidence gate for Chapters 13–16

### Chapter 13 — The Heat Debt

U.S. Department of Energy technical material supports the chapter's qualitative claim that high-density computing creates substantial thermal-management requirements and that liquid cooling can move heat from IT equipment into dedicated water loops. DOE's advanced-cooling R&D also supports the narrower claim that rising processor/rack heat flux is an active engineering problem.

**Boundary preserved:** no universal claim that every data center requires liquid cooling or that one architecture is optimal everywhere.

### Chapter 14 — The Night Shift of Civilization

NIST maintenance-management research supports the chapter's central human-systems claim: modern maintenance remains substantially dependent on human problem solving, and sensing/analytics are most useful when integrated with rather than imagined as a simple replacement for human knowledge. DOE condition-based and predictive-maintenance guidance supports the chapter's examples of detecting degradation before failure.

**Boundary preserved:** automation can reduce manual work and improve diagnosis; the manuscript should not imply that maintenance must remain permanently human or non-automated.

### Chapter 15 — The Planetary Cleanroom

NASA / Fifth National Climate Assessment material supports the chapter's description of Earth as a coupled system involving atmosphere, land, oceans, cryosphere, energy, water, carbon, and other cycles. The National Academies' solar-geoengineering work supports the chapter's insistence that large-scale climate intervention raises technical, ecological, social, ethical, legal, and governance questions simultaneously.

**Boundary preserved:** “planetary cleanroom” is an explicitly dangerous analogy used to teach humility, not a technical classification of Earth. Mitigation, adaptation, carbon removal, weather modification, and sunlight-reflection strategies remain distinct.

### Chapter 16 — The Last Free Input

DOE resilience guidance supports the counter-thesis that efficiency and passive design can widen the period during which buildings remain habitable after loss of active conditioning. NIST mechanical-system reliability work supports the broader design direction toward fault tolerance and robust operation rather than assuming tighter environmental control is always the only path.

**Boundary preserved:** robustness is a design alternative at the margin, not a universal substitute for environmental control.

## Novelty / terminology boundary

The prior predecessor review remains controlling for the phrase **manufactured weather**: the release must not claim the phrase itself is an original coinage.

The late-book labels **heat debt**, **maintenance paradox**, **planetary cleanroom**, and **last free input** are treated as Sven Hardy Benson's narrative framing devices. Publication copy must not present them as established engineering nomenclature unless an independent literature review establishes otherwise.

## What is now passed

- Manuscript file completeness: **pass** for 16 chapters plus front/prologue/epilogue/back matter.
- Rights packet: **pass**.
- Reader manifest: **pass**.
- Original Chapters 1–12 evidence packet: **pass from prior review**.
- Chapters 13–16 evidence packet: **pass for editorial progression**.
- Predecessor/novelty boundary: **pass with explicit qualifications**.
- Existing frozen Shelf snapshot provenance: **pass / preserved**.

## What remains before release

### Developmental gate — open

The expansion changed the ending. A full 16-chapter structural read must determine whether:

- Chapter 12 now functions as a hinge instead of a climax;
- Chapter 13 duplicates earlier thermal material;
- Chapter 14 remains tightly tied to manufactured weather rather than becoming a general maintenance essay;
- Chapter 15 remains proportionate and disciplined at planetary scale;
- Chapter 16 genuinely strengthens the thesis through counterargument;
- the epilogue resolves the expanded 16-chapter argument rather than the prior 12-chapter edition.

### Line/fact gate — open

After the structural pass, run publication copyedit and claim verification against both source ledgers. Preserve all sector-specific qualifications and Sven Hardy Benson's compressed cadence.

### Candidate freeze — open

No new publication candidate SHA has been frozen. Any Shelf publication before a post-edit freeze would be premature.

### Mechanical validation — open

From the frozen candidate, run the repository's current catalog/discovery generation and validation tooling, including `scripts/catalog.py --write` and `scripts/check-desk.py` where those remain the current conventions. Generated metadata must be derived, not estimated by hand.

### Shelf transfer — open

The next Shelf snapshot must be copied from the exact frozen Desk candidate, with source equality checked wherever the Shelf representation is intended to preserve manuscript content exactly.

## Current blocker check

- Missing manuscript path: **none**.
- Missing rights packet: **none**.
- Missing evidence for Chapters 13–16: **none after addendum**.
- Structural review after expansion: **open blocker**.
- Publication line/fact edit: **open blocker**.
- Frozen candidate SHA: **open blocker**.
- Repository validation on frozen candidate: **open blocker**.
- Shelf copy/metadata validation: **open blocker**.

## Release decision

**Do not publish the expanded 16-chapter edition yet.**

Proceed in the order defined in `publication-plan.md`: developmental edit, line/fact edit, freeze one exact Desk candidate, run objective repository checks, prepare a matched Shelf snapshot from that source, and only then issue a final release review changing the disposition to **release-cleared**.
