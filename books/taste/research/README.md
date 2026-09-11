# Research trail — Taste

This directory is the canonical evidence and provenance package for *Taste: How
Human Judgment Becomes the Scarcest Resource in an Age of Infinite Content*.

## Source ledger

The source-by-source record lives in `research/sources/*.json`, one file per
source, keyed by a stable lowercase id. Each fragment records the year,
author or institution, title, source type, the chapter and claim it informs,
and a URL.

## Chapter evidence map

- **Ch 1, The Slop Tide** — `ai-slop-merriam-webster-2025`, `willison-ai-slop-term`.
- **Ch 2, The Machine That Never Stops Singing** — `michael-smith-ai-music-fraud-doj`.
- **Ch 3, The Kindle Flood** — `amazon-kindle-ai-books-npr`.
- **Ch 4, The Jam Problem** — `iyengar-lepper-jam-study-2000`.
- **Ch 5, The Judgment of Paris** — `judgment-of-paris-1976`.
- **Ch 6, The Color of Wine** — `brochet-2001-wine-color`.
- **Ch 7, Ninety-Nine Percent No Award** — `hodgson-wine-judge-reliability`.
- **Ch 8, The Beautiful Brain** — `zeki-neuroaesthetics-2011`.
- **Ch 9, Bourdieu's Ladder** — `bourdieu-distinction-1979`.
- **Ch 10, The Kouros Problem** — `getty-kouros-colloquium-1993`, `getty-museum-collections-kouros-1997`, plus `research/ch10-kouros-primary-audit.md`.
- **Ch 11, The Tire Company That Rated Restaurants** — `michelin-guide-history-cnn`.
- **Ch 12, Four Thousand Shelves** — `trader-joes-curation-strategy`.
- **Ch 13, The Algotorial** — `spotify-algotorial-curation`.
- **Ch 14, The Slush Pile** — `literary-agent-query-stats`.
- **Ch 15, Quiet Money** — `quiet-luxury-trend-2023`.
- **Ch 16, The Forger's Triumph** — `van-meegeren-vermeer-forger`.
- **Ch 17, The Opera Spatial Problem** — `jason-allen-ai-art-colorado-fair`.
- **Ch 18, Machines With Taste?** — `rlhf-human-feedback-overview`.
- **Ch 19, The New Gatekeepers** and **Ch 20, Cultivating Taste** synthesize
  the evidence above rather than introducing new sourced claims; they were
  reviewed against the same source set for consistency.

## Known limitations and counterevidence preserved in the manuscript

- The Getty kouros (Ch 10) remains unresolved. The primary Getty record is now
  the canonical source trail rather than Wikipedia. Getty's 1993 colloquium
  documents a technical record that became more complicated as the surface
  alteration layer was studied, and the museum's later institutional history
  calls the symposium inconclusive while stating that Getty itself still
  believed the balance of evidence favored authenticity. The chapter now uses
  the case to show that stylistic judgment, material analysis, and provenance
  can fail in different places rather than claiming intuition was ultimately
  proven more accurate than science. See `research/ch10-kouros-primary-audit.md`.
- Wine-tasting research is deliberately used both to support (Ch 5) and to
  complicate (Ch 6, Ch 7) the idea that trained taste is reliable. This is
  intentional: the book's argument depends on holding those findings in
  tension rather than picking the more convenient one.
- Bourdieu's *Distinction* (Ch 9) is mid-20th-century French survey research;
  the manuscript treats its mechanism (taste as learned, class-linked
  cultural capital) as durable while not claiming its 1960s French survey
  data describes 2027 audiences directly.
- Figures for literary-agent acceptance rates (Ch 14) and Trader Joe's
  SKU/sales-per-square-foot comparisons (Ch 12) vary somewhat by source year
  and methodology; the manuscript uses commonly reported ranges and rounds
  rather than asserting false precision.
- The Michael Smith case (Ch 2) and the Amazon KDP policy history (Ch 3)
  involve fast-moving legal and platform-policy developments; both should be
  rechecked against primary court and platform documentation before release.

## Before release

- Recheck the Michael Smith sentencing outcome and any appeal against the
  DOJ docket, since sentencing postdates this draft's research cutoff.
- Recheck current Amazon KDP AI-disclosure policy language, which platforms
  revise frequently.
- Confirm no third-party image or text has been copied into `media/`; this
  book currently carries no media assets.
