# Publication Checklist — Neuralase

This checklist governs the first publication candidate and release record for **Neuralase: Transformer Loops and the Intelligence of the Second Pass**. Desk remains the canonical working source. Sven Hardy Benson’s Shelf holds a frozen released snapshot, not a live mirror.

## Gate 1 — Manuscript integrity and scope

- [x] Front matter present.
- [x] Chapters 1–18 present and linked from the book README.
- [x] Back matter present.
- [x] `RIGHTS.md` and `rights.json` present with the intended public-reading / All Rights Reserved profile.
- [x] Research brief, source registry, chapter-source map, falsification notes, and editorial review present.
- [x] Desk catalog and discovery registrations exist for the book.
- [x] The generated Desk manuscript-directory count is 71,701 words.
- [x] Front matter is 1,725 words and back matter is 1,285 words under the Desk `WORD_RE` definition, leaving an exact chapter-only total of **68,691 words**.
- [x] The three smallest chapter files by byte size were counted directly with the same regex: Chapter 1 = 3,397 words; Chapter 14 = 3,395; Chapter 15 = 3,385. All clear the 3,000-word floor.
- [x] `python3 scripts/check-book-length.py neuralase` passed directly against canonical frozen Desk source `688016d3fa1031038dd6bf6bfba8c8a4845df351` in temporary non-merge Desk validation PR #1213.

The canonical frozen manuscript tree is `33bcdabf77be6d8cb1d34508918aa56e63c3edbd`. The exact checker run confirmed all 18 numbered chapters are at or above 3,000 words and the chapter-only total is **68,691 words**, clearing the 65,000-word release floor.

A supplementary repository-wide `check-desk.py` run during the earlier validation cycle failed on unrelated catalog/source-schema debt elsewhere in Desk. The merged Neuralase release decision explicitly named the book-length command above as the final Neuralase release gate, so unrelated repository-wide debt was not converted into a manuscript failure.

## Gate 2 — Claims and research

- [x] The book distinguishes fixed Transformer layer depth, autoregressive token generation, external agent loops, and recurrent-depth Transformer computation.
- [x] “Neuralase” is explicitly disclosed as Sven Hardy Benson’s coined organizing term rather than an established biological process, scientific field, or claim of priority over the underlying research traditions.
- [x] Positive evidence for chain-of-thought, self-consistency, search, tool use, process verification, test-time compute, adaptive computation, recurrent depth, and latent reasoning is represented in the research trail.
- [x] Negative evidence on intrinsic self-correction, chain-of-thought faithfulness, diminishing returns, and overthinking is preserved as central evidence rather than minimized.
- [x] Frontier recurrent-depth and overthinking sources most exposed to recency risk were rechecked against official proceedings or first-party research pages in September 2026.
- [x] The manuscript avoids treating 2025–2026 research directions as settled production winners.

## Gate 3 — Editorial coherence

- [x] The central mechanism remains controlled re-entry: what returns, what changes, what discriminates improvement, how compute is allocated, and what stops the process.
- [x] The robustness pass deepened Chapters 2–18 around state dynamics, difference, friction, branching, world contact, memory, latent computation, explanation, halting, controller design, economics, and overthinking.
- [x] The late manuscript was returned to continuous narrative prose rather than presentation-style framework density.
- [x] The book repeatedly preserves the boundary that a loop is not intelligence by itself; a productive loop must make an important failure harder to preserve.
- [x] No unresolved factual, novelty, rights, or substantive editorial blocker remains in the merged release review.

## Gate 4 — First-edition package

- [x] Author metadata uses **Sven Hardy Benson**.
- [x] Format is **Book**.
- [x] Publisher is **Svyable**.
- [x] Edition is **First edition**.
- [x] Language is **English**.
- [x] Draft date is recorded as **2026-09-04**, the date the complete manuscript first landed in Desk.
- [x] Candidate date is recorded as **2026-09-06**.
- [x] Desk remains `Complete draft`; the Desk copy is not marked `Published`.
- [x] Shelf carries the first released edition with status exactly `Published`.

The author asked to continue toward publication on 2026-09-06. The objective release gates are satisfied and the first Shelf edition is now released.

## Gate 5 — Freeze and release transaction

- [x] Freeze the first-edition candidate under the named Desk ref `release/neuralase-first-edition-2026-09-06`, commit `688016d3fa1031038dd6bf6bfba8c8a4845df351`.
- [x] Run `python3 scripts/check-book-length.py neuralase` on that exact frozen source and record the passing result in Desk PR #1213.
- [x] Prepare the Shelf snapshot using the same byte-verification semantics as `scripts/release-book.sh neuralase ../shelf` / `scripts/release-book.py`.
- [x] Copy the committed Desk book snapshot to Shelf with byte-identical manuscript, research, and rights files except for the intended Shelf book-README status transformation to `Published` and Shelf discovery changes.
- [x] Add `neuralase` to Shelf `.github/ISSUE_TEMPLATE/chapter-feedback.yml`; the permanent Release feedback coverage workflow passed.
- [x] Verify the Shelf book README says exactly `Published`, `catalog.json` contains `neuralase`, and the root Shelf catalog contains one Neuralase release row.
- [x] Verify the released Reader route is registered as `https://svyable.github.io/shelf/reader/#/b/neuralase/`.
- [x] Record the frozen Desk source commit and released Shelf route in the Desk book README.

## Release record

- Initial Shelf publication: Shelf PR #239, squash merge `13f50caf87aa281e27abb308a65996735e8dcb2f`.
- Canonical-freeze reconciliation: Shelf PR #241, squash merge `fc17e6d946221974a18c5561dd1b0b5d8e44171d`.
- Canonical Desk source: `688016d3fa1031038dd6bf6bfba8c8a4845df351`.
- Manuscript tree on Desk and Shelf: `33bcdabf77be6d8cb1d34508918aa56e63c3edbd`.
- Research tree on canonical Desk and reconciled Shelf: `1de88eef5027c5ed85df8c8ab8c74688cb099662`.

## Release rule

The first edition is released from the named frozen Desk ref `release/neuralase-first-edition-2026-09-06`. Shelf is the frozen public edition; later manuscript changes belong on Desk and require a new release transaction unless the author explicitly requests a live public hotfix.
