# Publication Checklist — Autonomy Half-Life

This checklist governs the first publication candidate for **Autonomy Half-Life: Why Authority Should Decay as the World Changes**. Desk remains the canonical working source. Sven Hardy Benson’s Shelf will hold a frozen released snapshot, not a live mirror.

## Gate 1 — Manuscript integrity and scope

- [x] Front matter present.
- [x] Chapters 1–20 present and linked from the canonical book README.
- [x] Back matter present.
- [x] `RIGHTS.md` and `rights.json` present with the intended public-reading / All Rights Reserved profile.
- [x] Research brief, chapter briefs, and 26-source ledger present.
- [x] Desk catalog and discovery registrations exist for the book.
- [x] The repository API confirms all 20 numbered chapter files are present.
- [x] The 20 numbered chapter files total 438,340 UTF-8 bytes; the smallest numbered chapter file is 18,177 bytes. This is a completeness/sanity signal only, not a word-count pass.
- [ ] Run `python3 scripts/check-book-length.py autonomy-half-life` against the frozen Desk source and require `healthy: true`, all 20 chapters at or above 3,000 words, and at least 65,000 chapter-only words.

The exact full-book check is a controlling release condition because this manuscript was created under the repository’s current one-shot full-book expectations. The connector-only environment cannot execute the local command. That limitation must not be converted into a claimed pass or a reason to waive the gate.

## Gate 2 — Claims, research, and novelty

- [x] The manuscript distinguishes credential validity from a live mandate.
- [x] Trust, competence, authority, and legitimacy are treated as distinct concepts rather than interchangeable scores.
- [x] The book explicitly rejects a universal mathematical decay constant; “half-life” is a design metaphor and burden-of-proof rule.
- [x] Environmental distance from the conditions of grant is the manuscript’s narrow organizing contribution; elapsed time remains one signal and a backstop rather than the governing principle.
- [x] Adjacent 2026 work on authority decay, trust decay, agent authorization, delegation, and mandate management is acknowledged rather than erased by a priority claim.
- [x] Current revisions of the most time-sensitive Internet-Drafts were rechecked on 2026-09-06 and remain labeled as work in progress rather than standards.
- [x] Directly adjacent 2026 authority-decay preprints are preserved in the novelty boundary.
- [x] Emergency-power evidence includes both persistence/ratchet risks and counterevidence favoring continuity or revocation mechanisms over automatic sunsets.

See `release-review.md` for the September 6, 2026 current-source freeze and editorial judgment.

## Gate 3 — Editorial coherence

- [x] The central mechanism remains consistent across the manuscript: authority weakens when the current action moves materially away from the purpose, facts, scope, risk, counterparties, delegation chain, reversibility, or accountability conditions that justified the grant.
- [x] Expected variation remains inside the theory; autonomy is not defined so narrowly that every ordinary change requires renewed permission.
- [x] The strongest objection — reauthorization cost, centralization, and bureaucratic paralysis — is integrated into the argument rather than relegated to a footnote.
- [x] Graduated consequence is used as a practical alternative to binary permission: execute → prepare, write → read, transact → recommend, commit → simulate.
- [x] Cross-domain analogies are bounded. The manuscript does not equate constitutional authority, military command, software authorization, or machine-learning concept drift.
- [x] The front and back matter state the novelty boundary and non-mathematical status of the half-life metaphor clearly enough for a first edition.
- [x] No unresolved rights, novelty, or substantive editorial blocker was identified in the September 6 release review.

## Gate 4 — First-edition package

- [x] Author metadata uses **Sven Hardy Benson**.
- [x] Format is **Book**.
- [x] Publisher is **Svyable**.
- [x] Edition is **First edition**.
- [x] Language is **English**.
- [x] Draft date is recorded as **2026-09-05**, the date the full manuscript first entered Desk review.
- [x] Candidate date is recorded as **2026-09-06**.
- [x] Shelf currently has no `books/autonomy-half-life/` publication, so this is a first-release path rather than a public revision.
- [x] Desk remains `Drafting` while the controlling length gate is unresolved.

The author asked to continue toward publication on 2026-09-06. This authorizes first-edition candidate preparation and a named Desk freeze. It does not override the explicit mechanical length gate and must not be read as permission to publish a candidate that fails that check.

## Gate 5 — Freeze and release transaction

- [ ] Freeze a named Desk commit/ref for the first-edition candidate after this publication-prep change lands.
- [ ] Run `python3 scripts/check-book-length.py autonomy-half-life` on that frozen source and record the result.
- [ ] If the gate passes, promote the Desk status from `Drafting` to the appropriate complete/publication-candidate state without changing Shelf yet.
- [ ] Prepare the Shelf snapshot using the same semantics as `scripts/release-book.sh autonomy-half-life ../shelf`.
- [ ] Copy the committed Desk book snapshot to Shelf with byte-identical publication files except for the intended Shelf book-README status transformation to `Published` and Shelf catalog/discovery updates.
- [ ] Verify the Shelf book README says exactly `Published` and the root Shelf catalog contains one Autonomy Half-Life row.
- [ ] Verify the public Shelf Reader route for the released book.
- [ ] Record the frozen Desk source commit and Shelf release transaction in the Desk publication trail after the release lands.

## Release rule

Publish only from a named frozen Desk ref that passes `python3 scripts/check-book-length.py autonomy-half-life`. Do not create an unmerged public Shelf proof branch merely to stage the manuscript before that gate is closed. Once released, Shelf is the frozen public edition; later manuscript changes belong on Desk and require a new release transaction unless the author explicitly requests a live public hotfix.
