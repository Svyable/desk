# Publication Checklist — The Most Important City in America

This checklist governs preparation of the first edition of **The Most Important City in America: 250 Years, Twenty-Six Decades, and the Places That Made the Nation**. Desk is the canonical working source. Sven Hardy Benson’s Shelf should receive only a deliberate frozen release snapshot.

## Gate 1 — Manuscript integrity and scope

- [x] Front matter present.
- [x] Chapters 1–26 present and linked from the canonical book README.
- [x] Back matter present.
- [x] `RIGHTS.md` and `rights.json` present.
- [x] Research brief, chapter-level selection tests, falsification notes, and source ledger present.
- [x] All 26 decade choices name a winner and identify at least one plausible rival.
- [x] The 2020s winner is explicitly provisional rather than presented with false hindsight.
- [ ] Run `python3 scripts/check-book-length.py the-most-important-city-in-america` against the reconciled/frozen Desk source and require `healthy: true`, every numbered chapter at or above 3,000 words, and at least 65,000 chapter-only words.

The repository's exact regex-based length check is controlling. File size, chapter count, subjective completeness, and prose quality are not substitutes. Any chapter below 3,000 words should be deepened with evidence, mechanism, countercase, or cost accounting rather than filler.

## Gate 2 — Historical claims and selection judgments

- [x] The manuscript defines “important” as nationally transferable consequence rather than population, wealth, virtue, or fame.
- [x] The research trail distinguishes historical fact from the manuscript's selection judgment.
- [x] Each decade has an explicit falsification test or rival-city challenge.
- [x] The manuscript repeatedly asks who paid for the winning city's importance rather than treating influence as synonymous with progress.
- [x] The 1990s chapter does not claim that Seattle street protest alone caused the WTO ministerial negotiations to fail.
- [x] The 2000s chapter keeps the moral distinction between the September 11 attacks and the financial crisis while using both to examine concentrated national risk.
- [x] The 2020s chapter distinguishes announced semiconductor investment from completed productive capacity.
- [x] The 2020s water argument describes modeled groundwater constraints and assured-water-supply policy rather than claiming that Phoenix is imminently “running out of water.”
- [ ] Line-check exact figures, dates, casualty counts, population claims, production claims, investment amounts, and superlatives against the source ledger before first-edition freeze.
- [ ] Perform a dedicated comparable-title / prior-art search before using any “first,” “only,” “never before,” or equivalent novelty language in marketing.

## Gate 3 — Current-source freeze for the 2020s

Current factual freeze: **September 6, 2026**.

- [x] NIST / U.S. Department of Commerce current release verifies TSMC's July 16, 2026 announcement of an additional $100 billion, bringing total planned U.S. investment to $265 billion and expanding the planned Arizona facility count.
- [x] City of Phoenix material verifies the 2024 heat record used in the chapter: 113 consecutive days at or above 100°F and 70 total days at or above 110°F.
- [x] Arizona Department of Water Resources' current Phoenix Active Management Area material confirms that groundwater-model updates continue to show unmet demand and do not support new Assured Water Supply determinations based on groundwater alone.
- [ ] Refresh these three current-source families immediately before a later publication date if the first edition does not release from this source freeze.

## Gate 4 — Editorial coherence

- [x] Every numbered chapter uses one top-level `#` chapter heading; Chapter 24's earlier internal-heading structure was removed.
- [x] Later-century chapters were deepened around mechanism rather than merely adding chronology.
- [x] Phoenix now states explicit real-time conditions under which it would lose the provisional 2020s selection.
- [ ] Complete a full-manuscript repetition pass for recurring formulations such as “that is why,” “the city wins,” “made visible,” “concentrated,” and “national system.” Keep the method legible without letting the prose sound templated.
- [ ] Complete a naming/style pass for institutions, racial/ethnic terminology, decade labels, numerals, and em-dash usage.
- [ ] Complete a final read for unsupported causal verbs: caused, created, produced, transformed, forced, led to, and made.

## Gate 5 — Desk integration

- [ ] Reconcile the book branch onto current `main` before review; do not merge the branch while it is hundreds of commits behind.
- [ ] Add `the-most-important-city-in-america` to the current Desk `catalog.json` manifest so the Reader can discover the book.
- [ ] Regenerate the root Desk catalog/summary from the canonical READMEs when a normal checkout is available; do not hand-edit generated counts as though they were exact.
- [ ] Open a mergeable PR containing the working book package and current Desk integration.
- [ ] Merge automatically when objective repository gates allow; do not invent a human-review blocker.

## Gate 6 — First-edition freeze and Shelf release

- [ ] After all prior gates pass, create a named Desk first-edition release ref from the exact candidate commit.
- [ ] Re-run `python3 scripts/check-book-length.py the-most-important-city-in-america` against the frozen source and record the exact result.
- [ ] Promote Desk status only after the controlling checks pass.
- [ ] Prepare a Shelf snapshot using Desk's established release semantics rather than treating Shelf as a live mirror.
- [ ] Verify the Shelf book README, catalog entry, Reader route, rights files, and byte identity of publication files except for intentional Shelf metadata transformations.
- [ ] Record the frozen Desk source commit and Shelf transaction in the publication trail.

## Release rule

Do not publish this manuscript to Shelf merely because all 26 chapters exist. The first edition is releasable only after exact length, source, editorial, integration, and freeze gates are satisfied. Until then the canonical status is **Drafting**.
