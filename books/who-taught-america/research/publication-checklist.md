# Publication Checklist — Who Taught America?

This checklist governs the first publication candidate and release record for **Who Taught America? — Twenty-Six Schools, 250 Years, and the Classrooms That Made a Nation**. Desk remains the canonical working source. Sven Hardy Benson’s Shelf holds a frozen released snapshot, not a live mirror.

## Gate 1 — Manuscript integrity and scope

- [x] Front matter present.
- [x] Chapters 1–26 present and linked from the book README.
- [x] Back matter present, including the 26-decade shadow list of rival selections.
- [x] `RIGHTS.md` and `rights.json` present with the intended public-reading / All Rights Reserved profile.
- [x] Research brief, canonical source ledger, chapter-source map, falsifiability notes, and release review present.
- [x] Run `python3 scripts/check-book-length.py who-taught-america` and require `healthy: true`, every numbered chapter at or above 3,000 words, and at least 65,000 chapter-only words. Passing report: 26 chapters, 79,466 chapter-only words, smallest chapter 3,027 words.

The exact repository length checker was later run on the frozen release source and passed: **26 numbered chapters, 79,466 chapter-only words, smallest chapter 3,027 words**. No mechanical length result is inferred from file size.

## Gate 2 — Claims and research

- [x] Every chapter has an explicit evidence packet in `chapter-source-map.md`.
- [x] Chapters 1–17 were strengthened during publication review with additional primary, governmental, archival, or scholarly evidence rather than relying on a single institutional origin page.
- [x] The 1779 William & Mary chapter has the underlying Board of Visitors statute in its source packet.
- [x] The Georgia chapter preserves the distinction between the 1785 charter and the 1801 opening; the UNC chapter preserves the distinction between its 1789 charter and 1795 opening.
- [x] The West Point chapter is bounded against claiming the academy alone engineered continental expansion.
- [x] The American School for the Deaf chapter restores Laurent Clerc, deaf students, and signs already used in American communities to the origin story.
- [x] The Carlisle chapter pairs National Park Service history with National Archives student and boarding-school records and treats importance as consequence, not merit.
- [x] The Tuskegee packet restores Lewis Adams’s political role and distinguishes Washington’s institution-building from a one-founder myth.
- [x] The Scopes chapter preserves that the prosecution was deliberately constructed as a test case and publicity event.
- [x] The modern chapters use official or primary evidence for Los Alamos, Little Rock, Berkeley, Boston, charter schools, OpenCourseWare, Parkland, and the Harvard admissions decision.
- [x] Perform the final manuscript-to-source reconciliation and correct or explicitly bound claims that outrun their packets; see `source-reconciliation.md`.

The book’s title-level superlative is intentionally argumentative: “most important school of the decade” is the author’s defended choice, not a purported statistical ranking. Historical “first” claims inside chapters must remain narrower and tied to a specific supported metric.

## Gate 3 — Editorial coherence

- [x] The book has one school for every named calendar decade touched by 1776–2026: twenty-six chapters, with partial opening and closing decades.
- [x] “Most important” is defined as historically revealing and consequential rather than best, oldest, richest, most selective, or most admirable.
- [x] The shadow list makes serious rival choices visible instead of hiding judgment behind a ranking formula.
- [x] The long arc remains coherent: republican preparation → public capacity → widened access → professionalization → liberation and coercion → research infrastructure → curriculum and constitutional conflict → organizational unbundling → open knowledge → student political power → the admissions/AI-era gate.
- [x] Carlisle, Little Rock, South Boston, and Parkland preserve the agency and suffering of people inside the institutions rather than using them only as scenery for policy conflict.
- [x] The Harvard chapter states that the 2020s are unfinished and does not present the long-run effects of the 2023 admissions decision or AI on schooling as settled.
- [x] Deepen every chapter below the floor with researched institutional mechanics, counter-evidence, and downstream consequences rather than padding; all 26 chapters now clear the floor.

## Gate 4 — Desk catalog and discovery

- [x] Add `who-taught-america` to the canonical `catalog.json` manifest from current `main`.
- [x] Regenerate the root README catalog/dashboard from the same source with `scripts/catalog.py --write`.
- [x] Add the book to `.github/ISSUE_TEMPLATE/chapter-feedback.yml`.
- [x] Add the canonical book route to `llms.txt` and `sitemap.xml`.
- [x] Run the Desk integrity gate against the exact base and candidate: require zero candidate non-research errors, a canonical Who Taught America source packet, and zero new research-schema errors relative to base. The full command remains baseline-red on current `main` because unrelated legacy research packets are still being normalized.

The branch was merged forward onto current `main` before these shared registrations were written, so the manifest, feedback dropdown, machine map, and sitemap are additive to the newest Desk state available during this pass. The root README remains deliberately unchecked because its summary counts, word totals, and generated book row should come from `python3 scripts/catalog.py --write`, not from hand-maintained arithmetic. `index.html` should change only if the current Desk integrity contract requires it.

## Gate 5 — First-edition package

- [x] Author metadata uses **Sven Hardy Benson**.
- [x] Format is **Book**.
- [x] Publisher is **Svyable**.
- [x] Edition target is **First edition**.
- [x] Language is **English**.
- [x] Complete-draft date is recorded as **2026-09-06**.
- [x] Publication-candidate preparation began **2026-09-06**.
- [x] Desk remains the working edition and is not marked `Published`.
- [x] Shelf carries the frozen first released edition with status exactly `Published`.

The author asked to continue toward publication on 2026-09-06. The objective release gates were satisfied and the first Shelf edition is now released.

## Gate 6 — Freeze and release transaction

- [x] Freeze the first-edition candidate under Desk ref `release/who-taught-america-first-edition-2026-09-06`, commit `1ea139b81bb4822f438c98942676d8b334a38a99`.
- [x] Run `python3 scripts/check-book-length.py who-taught-america` on that frozen source: 26 chapters, 79,466 chapter-only words, smallest chapter 3,027 words.
- [x] Run the baseline-aware Desk integrity gate on the frozen candidate and record zero new research-schema failures, zero candidate non-research errors, and a canonical Who Taught America source packet.
- [x] Prepare the Shelf snapshot using the repository’s `scripts/release-book.py` semantics from the exact frozen Desk source.
- [x] Copy the committed Desk book snapshot to Shelf with **42 non-README publication files byte-identical** to the frozen source; transform only the Shelf book README to `Published` plus normal Shelf catalog/feedback registration.
- [x] Verify `catalog.json` contains `who-taught-america` exactly once and the root Shelf README contains the Reader route exactly once.
- [x] Verify Shelf feedback coverage: all 55 released publication slugs covered on the release candidate and on merged `main`.
- [x] Merge Shelf PR #242 as first-edition release commit `57d4cedf89af84156aabbd6fea3758e576424ae6`.
- [x] Record the frozen Desk source and released Shelf route in the Desk book README.

## Release record

- Desk release-gate merge: Desk PR #1210, squash merge `0c31a5e92b61aaf4ca06b7ace9aafceb05134b48`.
- Canonical frozen Desk source: `1ea139b81bb4822f438c98942676d8b334a38a99`.
- Shelf first-edition release: Shelf PR #242, squash merge `57d4cedf89af84156aabbd6fea3758e576424ae6`.
- Manuscript tree on the frozen Desk source: `91e4697ccab60b1cafbecd443ffcd168c6e68074`.
- Research tree on the frozen Desk source: `7e25d99837912f60e36c082deb586426ea0dd19c`.
- Released Reader route: `https://svyable.github.io/shelf/reader/#/b/who-taught-america/`.
## Release rule

The first edition is released from the named frozen Desk ref `release/who-taught-america-first-edition-2026-09-06`, source commit `1ea139b81bb4822f438c98942676d8b334a38a99`. Shelf is the frozen public edition; later manuscript changes belong on Desk and require a new release transaction unless the author explicitly requests a live public hotfix.
