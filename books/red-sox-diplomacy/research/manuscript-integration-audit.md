# Manuscript Integration Audit — Red Sox Diplomacy

## Current state

*Red Sox Diplomacy* is a complete documentary narrative: front matter, a reader-facing method note, prologue, Chapters 1–22, epilogue, and chapter-keyed source notes.

The complete manuscript was merged into `main` through PR #1786 on September 14, 2026. The book remains **Revision in progress** in Desk. A Desk merge is not a Shelf publication.

The canonical research ledger contains **349 unique canonical rows**, sequentially numbered `rsd-001` through `rsd-349`, rebuilt deterministically from the 185-row baseline plus staged addenda 16–39. Historical addendum IDs are provenance only.

Rights files remain at the book root under the `bookself-arr-v1` All Rights Reserved profile.

## Closed integration gates

The following gates were completed before the PR #1786 merge and should not be casually reopened:

- full-manuscript continuity and compression across the opening, Athens/NATO sequence, India/Iran/Beijing sequence, closing trilogy, and epilogue;
- Red Sox / American-history braid integration, with broad thematic expansion frozen;
- manuscript-level exact-quotation verification for the current text;
- India, Iran, Beijing, and Greece / Red Sox publication-balance stop conditions;
- deterministic source-ledger normalization and deduplication;
- title-page title/subtitle/byline alignment;
- Desk catalog/discovery synchronization;
- real-checkout differential integrity validation showing no new `check-desk.py` errors introduced by the book PR relative to then-current `main`.

The full repository integrity command had unrelated baseline failures on `main`. Those are repository debt, not unfinished Red Sox Diplomacy work.

## Reader-facing evidence contract

`manuscript/note-on-the-record.md` now states the documentary rules in one place so chapters do not need to keep re-explaining them.

The governing distinctions are:

- contemporaneous primary records carry chronology and institutional action where available;
- retrospective testimony remains retrospective testimony;
- official or institutional accounts are sources, not automatic neutral truth;
- contested claims remain attributed and competing accounts remain visible;
- archival gaps are preserved rather than solved through plausible invention;
- baseball may supply chronology, atmosphere, identity, ritual, and American context, but it is not silently converted into psychological cause;
- agency stays distributed across colleagues, institutions, counterparts, spouses, allies, adversaries, local organizers, legislatures, and governments rather than collapsing every outcome into the central subject.

Any future enhancement should make those distinctions clearer, not blur them.

## Known archival gaps to preserve

These remain legitimate absences unless genuinely new primary or strong near-primary evidence appears:

- Burns-specific memory of the 1967 Impossible Dream season;
- Burns-specific memory of the 1975 World Series;
- Burns-specific memory of the 1978 Yankees tiebreaker;
- where or how Burns experienced the 1986 World Series while assigned in Jerusalem;
- where or how Burns watched or reacted in real time to the October 27, 2004 championship;
- the exact Boston Red Sox club contribution to the Greek baseball effort;
- any private Red Sox reaction attributed to Libby Baylies Burns without a source.

The absence of these scenes is part of the manuscript's documentary shape.

## Post-merge enhancement lanes

Broad research and broad thematic layering remain frozen. High-value work now consists of selective improvement rather than expansion for its own sake.

Good enhancement work includes line-level compression, stronger scene entry and exit, removal of repeated explanatory conclusions, cleaner attribution, better direct hyperlinks to authoritative records, replacement of unstable links with durable archives, stronger figure captions and documentary objects, and factual correction where later verification warrants it.

A new exact quotation reopens quote verification for that quotation. A new factual claim creates a source burden. A new source added to the working research record should enter a new staged addendum (`source-ledger-addendum-40.csv` or later) rather than silently changing historical addenda; rebuild the canonical ledger deterministically before any future publication freeze.

Do not add baseball merely because a chapter can support another metaphor. Do not add generic leadership lessons. Do not smooth the prose until it sounds like institutional biography.

Protect the manuscript's specificity, rhythm, judgment, useful roughness, and willingness to say when the record stops.

## Publication boundary

Desk is the drafting and revision workspace. Shelf is a separate publication surface.

Do not copy this book to Shelf, change its status to Published, or describe a Desk merge as publication without an explicit release instruction. When publication is authorized, release from an exact committed Desk snapshot and validate Shelf discovery, rights, media, links, and rendering separately.
