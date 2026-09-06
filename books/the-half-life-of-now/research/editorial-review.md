# Editorial Review

## Release decision — September 5, 2026

**Remain blocked pending bounded research and mechanical remediation.**

The manuscript is structurally complete: the canonical README declares a Complete Desk draft with 24 of 24 numbered chapters, and its checked Reader manifest includes front matter, all 24 chapters, and back matter. Front and back matter are present. This review also adds the repository-standard `bookself-arr-v1` rights package that was previously missing.

The release is not yet cleared because the current research packet does not support a publication-grade claim audit. The source ledger is a useful thematic bibliography, but it uses the older columns `domain,source,url,use,falsification_note` rather than Desk's canonical source-ledger schema, and many rows point to institution homepages rather than dated source documents. That is especially material for a book whose thesis depends on freshness and whose chapters cover medicine, economic data, AI governance, news, conflict, climate, law, and politics.

## Concrete remediations

1. **Normalize the source ledger.** Migrate `research/source-ledger.csv` to Desk's canonical seven fields: `id,year,author_or_institution,title,source_type,book_use,url`, preserving the existing falsification boundaries in a companion review/falsification note rather than dropping them.
2. **Replace generic landing pages for material claims.** For time-sensitive chapters, attach dated, claim-level primary or authoritative sources rather than relying on FDA, CDC, Census, BLS, FRED, SEC, FEMA, NCES, NOAA, NIST, or similar homepages as if the institution itself proved a specific proposition.
3. **Run a claim-level freshness pass.** At minimum recheck Chapters 6–17 and 19–22 for material dated/current claims, with special attention to clinical guidance, revised economic statistics, model drift/AI governance, media correction norms, autonomous-weapons governance, climate observations, public-policy timing, and data-rights claims. Record the strongest counterevidence or scope limit for each material claim that survives.
4. **Add a chapter/source map or equivalent factual-review record.** The release packet needs enough traceability to show which evidence supports which chapter and which claims are intentionally conceptual rather than empirical.
5. **Run the mechanical book gate on the frozen candidate.** Require `scripts/check-book-length.py the-half-life-of-now` to pass the standard chapter-count, per-chapter minimum, and chapter-only total thresholds.
6. **Run Desk repository integrity on the same frozen candidate.** Require `python3 scripts/check-desk.py` to pass after the source-ledger migration and any catalog regeneration required by the final release candidate.

If items 1–4 complete without identifying a substantive blocker, and items 5–6 pass on one frozen Desk SHA, this review may be updated to release-cleared. No separate human-review requirement is created by this note.

## Scope and novelty boundary

The manuscript's organizing synthesis is **freshness debt**: the liability created when representations remain formally valid but become too stale for the decision being made. The front matter correctly limits the “half-life” language to metaphor rather than claiming a universal exponential decay law for facts. The research brief also preserves the core countercase: newer information is not automatically better, slow institutions can be valuable, and indiscriminate updating can amplify noise and instability.

The adjacent concepts already named in the packet — Samuel Arbesman's changing bodies of knowledge and Ogburn's cultural lag — should remain acknowledged as prior conceptual neighbors. Marketing should not claim discovery of information decay, cultural lag, model drift, legal revision, or institutional updating as new phenomena.

## Rights and matter

- Front matter: present.
- Back matter / epilogue: present.
- Rights notice: added in this readiness pass.
- Machine-readable rights metadata: added in this readiness pass.
- Copyright owner: Sven Hardy Benson.
- Rights profile: `bookself-arr-v1`.

## Release-state rule

Keep the Desk status as `Complete Desk draft` while these gates are open. Do not copy this edition to Shelf or mark it Published until the review is explicitly cleared and the mechanical/repository checks pass on the frozen release source.
