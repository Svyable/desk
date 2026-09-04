# Publication Checklist — Nothing Counts Yet

This checklist governs the 25-chapter expanded trade edition release. Desk remains the canonical working source; Sven Hardy Benson’s Shelf is a released snapshot, not a live mirror.

## Gate 1 — Manuscript integrity

- [x] Front matter present.
- [x] Chapters 1–25 present and linked from the book README.
- [x] Back matter present.
- [x] Rights notice and machine-readable rights metadata present.
- [x] Reader configuration present.
- [x] Research map present.
- [x] Expanded chapters 21–25 reviewed for continuity with the core thesis.

## Gate 2 — Claims and research

- [x] Core deliberate-practice, error-management, simulation, mastery-learning, cognitive-apprenticeship, psychological-safety, and exploratory-learning literatures mapped.
- [x] Automation chapter bounded by established human-factors literature on out-of-the-loop performance, vigilance, situation awareness, and skill degradation.
- [x] Error-reporting / secret-curriculum chapter bounded by research showing that fear, leadership, organizational climate, and psychological safety affect willingness to speak up.
- [x] Forgetting / retention chapter framed as a design principle rather than a universal legal claim; student-data retention guidance provides a concrete adjacent example of lifecycle governance.
- [x] Novelty claim remains limited to the synthesis/category; no claim that practice, apprenticeship, simulation, play, pilots, or learning from error are new discoveries.
- [x] AI claims remain product-agnostic and use transfer-with-less-assistance as the central test.

## Gate 3 — Editorial coherence

- [x] Chapters 21–25 extend rather than contradict Chapters 1–20.
- [x] The ending remains a gate into consequence, not a celebration of permanent rehearsal.
- [x] Low stakes remains distinct from low standards.
- [x] Privacy remains distinct from impunity.
- [x] Developmental data remains distinct from evaluative data.
- [x] Automation is treated as capable of both eroding and rebuilding rehearsal infrastructure.

## Gate 4 — Edition strategy

- [x] Existing 20-chapter Shelf release remains recoverable in Git history.
- [x] 25-chapter Desk manuscript was treated as a new publication candidate rather than a casual live edit.
- [x] Frozen Desk source selected: `3bd8456867dff274bad33513cb3b58fc11a21aff`.
- [x] Complete release delta prepared on Shelf from the frozen source.
- [x] Shelf snapshot marked `Published` while Desk remained the working source.
- [x] Publication files added/updated from the frozen Desk source; publication metadata transformed for Shelf.
- [x] Catalog identity and Reader slug verified unchanged.
- [x] Shelf release CI (`Release feedback coverage`) passed.
- [x] Shelf release merged in PR #201 at `1c2db855b796f55f6528346978e10ed0d4cf2a19`.
- [x] Desk release record created.

## Release rule

Do not publish merely because prose exists. Publish only when the exact candidate commit is frozen, the research/release review matches the candidate’s actual structure, and the Shelf snapshot can be traced back to that commit without ambiguity.
