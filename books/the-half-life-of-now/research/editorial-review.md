# Editorial Review

## Release decision — September 6, 2026

**Remain blocked pending bounded research and manuscript expansion.**

The manuscript is structurally complete: the canonical README declares a Complete Desk draft with 24 of 24 numbered chapters, and its checked Reader manifest includes front matter, all 24 chapters, and back matter. Front and back matter are present. The repository-standard `bookself-arr-v1` rights package is present.

The legacy source-ledger schema blocker is now closed. `research/source-ledger.csv` has been migrated to Desk's canonical seven fields — `id,year,author_or_institution,title,source_type,book_use,url` — and the prior falsification/scope notes have been preserved in `research/falsification-boundaries.md` rather than discarded.

Two substantive blocker classes remain.

First, the current research packet still does not support a publication-grade claim audit. Several migrated rows intentionally identify themselves as institution homepages or broad portals rather than pretending those pages prove a specific proposition. That is especially material for a book whose thesis depends on freshness and whose chapters cover medicine, economic data, AI governance, news, conflict, climate, law, and politics. The migration improves traceability but does not fabricate dated evidence.

Second, the mechanical full-book standard is not currently reachable without manuscript expansion. The generated Desk catalog records **50,337 words for the entire manuscript directory**, including front and back matter. The standard release gate requires at least **65,000 numbered-chapter words**, so the chapter-only total is necessarily below the minimum by more than 14,663 words. An all-chapter length run is still required after expansion, but the current snapshot is already mechanically blocked on total length.

## Concrete remediations

1. **Expand the manuscript substantively.** Add at least enough chapter prose to bring numbered-chapter words to 65,000 while preserving the argument and avoiding padding. Because the current 50,337-word catalog count includes front/back matter, the required chapter expansion is greater than 14,663 words.
2. ~~**Normalize the source ledger.**~~ **Completed September 6, 2026.** The ledger now uses Desk's canonical seven-field schema. The legacy falsification boundaries are preserved in `research/falsification-boundaries.md`.
3. **Replace generic landing pages for material claims.** For time-sensitive chapters, attach dated, claim-level primary or authoritative sources rather than relying on FDA, CDC, Census, BLS, FRED, SEC, FEMA, NCES, NOAA, NIST, or similar homepages as if the institution itself proved a specific proposition.
4. **Run a claim-level freshness pass.** At minimum recheck Chapters 6–17 and 19–22 for material dated/current claims, with special attention to clinical guidance, revised economic statistics, model drift/AI governance, media correction norms, autonomous-weapons governance, climate observations, public-policy timing, and data-rights claims. Record the strongest counterevidence or scope limit for each material claim that survives.
5. **Add a chapter/source map or equivalent factual-review record.** The release packet needs enough traceability to show which evidence supports which chapter and which claims are intentionally conceptual rather than empirical.
6. **Run the mechanical book gate on the expanded frozen candidate.** Require `scripts/check-book-length.py the-half-life-of-now` to pass the standard chapter-count, per-chapter minimum, and chapter-only total thresholds.
7. **Run Desk repository integrity on the same frozen candidate.** Require `python3 scripts/check-desk.py` to pass after the source-ledger migration and any catalog regeneration required by the final release candidate.

If items 1 and 3–5 complete without identifying a substantive blocker, and items 6–7 pass on one frozen Desk SHA, this review may be updated to release-cleared. No separate human-review requirement is created by this note.

## Scope and novelty boundary

The manuscript's organizing synthesis is **freshness debt**: the liability created when representations remain formally valid but become too stale for the decision being made. The front matter correctly limits the “half-life” language to metaphor rather than claiming a universal exponential decay law for facts. The research brief also preserves the core countercase: newer information is not automatically better, slow institutions can be valuable, and indiscriminate updating can amplify noise and instability.

The adjacent concepts already named in the packet — Samuel Arbesman's changing bodies of knowledge and Ogburn's cultural lag — should remain acknowledged as prior conceptual neighbors. Marketing should not claim discovery of information decay, cultural lag, model drift, legal revision, or institutional updating as new phenomena.

## Rights and matter

- Front matter: present.
- Back matter / epilogue: present.
- Rights notice: present.
- Machine-readable rights metadata: present.
- Copyright owner: Sven Hardy Benson.
- Rights profile: `bookself-arr-v1`.

## Release-state rule

Keep the Desk status as `Complete Desk draft` while these gates are open. Do not copy this edition to Shelf or mark it Published until the review is explicitly cleared and the mechanical/repository checks pass on the frozen release source.
