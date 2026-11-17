# Editorial review — 16 November 2026

## Decision

**Working full-length expanded draft, not a release candidate.** The 20-chapter narrative structure has been retained. The November 16 expansion added real cases and constraints in chapters 2–19, updated the research ledger, and preserved the fictional status of future invoices, devices, councils, and scenarios. The book remains in Desk and is not approved for a Shelf release.

## Mechanical gate from the connected branch

Word counts use the exact `\b[\w’'-]+\b` regex declared in `scripts/check-book-length.py`, applied to all twenty current chapter files as read from the connected GitHub branch. Front matter, back matter and research are excluded.

| Chapter | Words | Chapter | Words |
|---|---:|---|---:|
| 1 — The Envelope in the Wrong Century | 3,057 | 11 — The Ministry of Almost | 3,387 |
| 2 — The Last Shade on the Block | 4,297 | 12 — The Road Nobody Built | 3,280 |
| 3 — A House That Sells Tuesday | 4,163 | 13 — Naming the Weather | 3,038 |
| 4 — The Repair Tag | 3,847 | 14 — The River Has Counsel | 3,207 |
| 5 — A Telephone for Trees | 3,791 | 15 — People Who Are Not Here Yet | 3,085 |
| 6 — The Spare Organ Problem | 3,569 | 16 — The Universe Has a Volume Knob | 3,000 |
| 7 — Postcards from Sleep | 3,536 | 17 — The Sky Needs a Janitor | 3,062 |
| 8 — The Right to Lose a Thought | 3,509 | 18 — The Quietest Signal | 3,125 |
| 9 — The Library of Solitude | 3,410 | 19 — Museum of the Unmade | 3,117 |
| 10 — An Hour Without a Price | 3,016 | 20 — The Outbox | 3,196 |

**Totals:** 20 chapters, **67,692 chapter-only words**, no chapter under 3,000; 7 chapters in the preferred 3,500–4,500 range. The prescribed 18-chapter, 3,000/chapter, 65,000-total minimums therefore pass under frozen connector-based counts, though preferred chapter depth is not yet met for most chapters. This count was independently recomputed from branch text with the repository regex, not from a local checkout or a running instance of `scripts/check-book-length.py`.

## Prose and structure check

- 20/20 chapter Markdown files contain exactly one chapter H1 and no secondary Markdown subheads; chapter format agrees with the prose-first Desk convention.
- The source-heavy midbook examples provide real-world pressure: Seville heat-wave naming, Te Awa Tupua river governance, Zūm Oakland school buses, California DROP, regenerative islet cell study, BLC1 radio interference, Japanese orbital debris inspection, and the Science Museum's Babbage construction.
- The expanded chapters have research links close to the concrete claims. The first chapter and the final chapter intentionally carry imaginative framing and synthesis rather than turning into link catalogs.
- The number of paragraphs under twelve words is moderate per chapter but relatively high in the closing chapter, which needs careful paragraph-level reading so cadence does not become artificial.
- The repeated verbal device “I imagine” occurs in several chapters; keep it only where hypothetical future scenes need clear attribution, and vary form where the claim is already explicitly hypothetical.
- The recurring argument that measurements are not interpretations is useful but sometimes predictable. Preserve chapters' different mechanisms: distribution and repair, experimental design, clinical efficacy, legal representation, risk reporting, representation of the unborn, perception, ownership, and falsification. Cut duplicate lectures when doing the literary pass.

## Remaining release blockers and priorities

1. **Full-book literary read:** Identify passages that move with a person, decision, or conflict, then compare with chapters that mainly enumerate constraints. Strengthen especially chapters 10–20 (many are just above the minimum) with case continuity and consequence, not padded repetition. Trim recurring thesis explanations and the final chapter's chapter-by-chapter recap.
2. **Source-by-source review:** Check all citations, dates, jurisdictions, samples, corrections and opposing findings against the latest primary evidence. Scientific examples can contain important caveats that an initial source read may miss. In particular, verify the regulatory and clinical state at the time of edition release.
3. **Human voices and rights:** Seek documented firsthand accounts for the Whanganui framework, people affected by shade and transit choices, actual repairers, and patients; do not invent travel, interviews, quotes, motivations or permissions.
4. **Falsification:** In each essay, distinguish the attractive mechanism from the strongest explanation against it and identify what evidence would justify adopting, rejecting or changing the idea.
5. **Reader continuity and differentiation:** Read adjacent Desk titles to check whether more of this book's ideas are unique in treatment rather than headline. Check the placement of Chapters 9 and 10 against civic Chapters 11–15, and the pace from the cosmic Chapters 16–18 to the unmade museum.
6. **Validation:** The branch-based structural and length audits are passed by inspection and regex, but full local `python3 scripts/check-book-cover-metadata.py ideas-from-the-future-and-other-odd-things-in-my-head`, `python3 scripts/check-desk.py`, and a whole-book line/edit review have **not** been run in a complete repository checkout. Do not claim those checks succeeded.
7. **Publication:** No cover/sign-off, production files, distribution plan, book release or Shelf write authorized in this pass.

The next editorial action should be the highest-leverage unresolved literary defect, not automatically more words. The quantitative minimums are an input to review; they are not the argument that the book has become a bestseller.
