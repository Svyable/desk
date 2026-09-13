# Manuscript Integration Audit — Red Sox Diplomacy

## Current state

The documentary narrative is complete: front matter, prologue, Chapters 1–22, epilogue, and reader-facing source notes all exist and are checked in the book README.

The book remains **Drafting**. A complete manuscript and a substantially improved narrative are not the same thing as a publication-ready manuscript.

Rights files exist at the book root under the `bookself-arr-v1` All Rights Reserved profile.

PR #1786 remains intentionally draft. Do not mark it ready, merge it, or publish the book until the integration gates below are complete and a human explicitly directs that transition.

## Work completed in integration / narrative revision

### First integration pass

- Rebuilt `research/source-ledger.csv` from the old canonical ledger plus the then-existing early addenda.
- Canonical ledger currently contains 185 unique URLs with sequential canonical IDs `rsd-001` through `rsd-185` and the exact validator schema.
- Resolved duplicate URLs and historical row-ID collisions rather than treating them as separate sources.
- Preserved older addenda as research history; their historical IDs are not authoritative after normalization.
- Added `continuity-pass-01.md` and applied its highest-value closing edits: shorter epilogue, reduced repeated Beijing-crisis material in Chapter 20, and a more distinct representation-focused Chapter 21.

### Red Sox + American history braid pass

The manuscript uses three clocks selectively:

1. Burns's life and diplomatic career;
2. Red Sox / baseball history;
3. American social, political and cultural history.

Created:

- `research/red-sox-american-history-braid.md` — research/design map;
- `research/red-sox-american-history-braid-audit.md` — chapter-by-chapter role map and repetition guardrails.

The braid is now **frozen for expansion**. Do not add more baseball-history material before evidence control and the final line/read-through pass.

### Continuity pass 02 — closing movement

Chapters 20–22 and the epilogue were compressed so the final movement no longer repeats the same institution/person/handoff thesis four times.

Current ownership:

- Chapter 20: authentication, judgment, accountability and authorized intent;
- Chapter 21: America represented outward and foreign reality reported inward;
- Chapter 22: handoff, revisability and Burns's post-government reassessment of Iraq;
- epilogue: inherited identity, person under title, work passed forward.

### Continuity pass 03 — opening third

Chapters 1–8 were audited for premature thesis explanation.

Substantive revisions:

- Chapter 1 now centers on Bates School Little League, Wellesley Babe Ruth League, family fandom and AFS Luxembourg rather than previewing the whole diplomatic thesis.
- Chapter 3 now owns repeated arrival and relationship maintenance rather than late-career technology/representation theory.
- Chapter 4 separates Burns-specific Cairo evidence from Beecroft/Veliotes environment and corrects an overclaim about how much of the 1983–85 tour Burns spent as staff aide.
- Chapter 5 compresses around the Jerusalem Consulate, Palestinian economic assistance, Douglas Keene, unresolved jurisdiction and the deliberately missing 1986 World Series scene.
- Chapter 8 compresses the baseball briefing-room material around reciprocal social memory rather than cataloguing every joke.
- Chapters 2, 6 and 7 were deliberately left structurally intact because their current evidence density is doing distinct work.

### Continuity pass 04 — Athens to NATO

Chapters 9–13 were audited for distributed agency and repeated alliance theory.

- Chapters 9–10 remain intentionally dense because the Athens/Greece material must preserve Burns, Libby, embassy colleagues, Greek organizers, diaspora volunteers, professional baseball actors, local players and successors as distinct agents.
- Chapter 11 now owns the September 11 information/authority gap: Burns was twelve days into the NATO job, Washington became temporarily difficult to reach, and allied solidarity moved toward him before formal authorization caught up.
- Chapter 12 owns the treaty sequence: September 12 conditional Article 5 decision, October 2 factual determination, October 4 support measures and Eagle Assist.
- Chapter 13 now centers on the 2003 Turkey-defense procedural dispute and institutional repair rather than broad alliance theory.

### Continuity pass 05 — India to Beijing

Chapters 14–19 were audited for attribution, handoff and repeated theory.

- Chapter 14 remains structurally intact because successive jurisdictions, Indian counterpart agency and the post-Burns completion phase are the mechanism of the story.
- Chapter 15 remains structurally intact because the absence of the desired bargain is the point; it retains EU3/P5+1 agency, Iranian stated positions, IAEA/UNSC distinctions and the limits of sanctions.
- Chapter 16 was compressed around the deliberately missing October 27, 2004 Burns scene and the documented afterlife of the championship in Burns's own language.
- Chapter 17 was compressed around one move: practitioner experience becomes examinable rather than authoritative. The checked README link was also corrected to the actual filename `ch17-the-professor-in-the-cheap-seats.md`.
- Chapter 18 was compressed into a field chapter: competition, the 2023 crisis/channel recovery sequence, Libby's independent/shared posting record, contested people-to-people exchange and bounded baseball markers. The abstract human-channel synthesis now belongs to Chapter 20.
- Chapter 19 remains largely intact because the sports analogy becomes useful precisely where it fails before geopolitical stakes.

`research/chapter-source-map.md` has been refreshed to reflect these five passes and the current evidence-control phase.

## Integration gates

### 1. Canonical source ledger

`research/source-ledger.csv` remains the validator-facing canonical ledger.

The current 185-row canonical file is stale by design. Research continued after that normalization and staged addenda now extend through at least `source-ledger-addendum-38.csv`.

Before validator/integration work:

- discover the actual highest addendum at freeze time;
- rebuild from the current canonical baseline plus **all later addenda**;
- deduplicate by normalized/canonical URL and source identity;
- reassign canonical IDs sequentially; historical addendum IDs are provenance only;
- preserve exact schema `id,year,author_or_institution,title,source_type,book_use,url`;
- keep archive routes, negative-source audits, hypotheses and verification targets labeled accurately rather than upgrading them into positive evidence;
- remove tracking parameters where stable canonical URLs exist;
- run the Desk validator after the canonical rewrite.

Do not perform another partial canonical merge.

### 2. Chapter-source map

Refreshed after the five continuity passes. It will need one final reconciliation after canonical ledger normalization and publication-stage quote verification.

Treat `High` or `High-Medium` as evidence strength, not permission to skip final verification.

### 3. Quote and scan verification

Before publication, exact language derived from PDFs, scans or oral-history PDFs must be checked against stable page images/screenshots or reliable HTML/transcripts. Particular attention:

- Ted Osius / ADST oral-history wording;
- Douglas Keene / Jerusalem witness wording;
- David L. Marcus, “America's Salesman” scan;
- 2011 Harvard Kennedy School professor-of-practice PDF;
- Indian MEA documentary volumes;
- IAEA technical PDFs if exact language is retained;
- NATO/archival PDFs where exact procedural quotations are retained;
- school/yearbook or historical-newspaper scans if direct quotation moves into the manuscript.

If a clean primary text cannot be secured, paraphrase conservatively rather than preserve an uncertain quotation.

### 4. Known archival gaps to preserve

Do not solve these by narrative inference:

- Burns-specific memory of the 1967 Impossible Dream season;
- Burns-specific memory of the 1975 World Series;
- Burns-specific memory of the 1978 Yankees tiebreaker;
- where/how Burns experienced the 1986 World Series while assigned in Jerusalem;
- where/how Burns watched or reacted in real time to the October 27, 2004 championship;
- the exact Boston Red Sox club contribution to the Greek baseball effort;
- any direct Red Sox quotation or private baseball reaction attributed to Libby without a source.

### 5. High-value remaining source work

Broad research is frozen. New research should occur only to close a named publication gap.

Priority gaps:

- India: read Shivshankar Menon's *Choices* directly; preserve strong Shyam Saran/Ronen Sen voices and serious nonproliferation criticism.
- Iran: publication-stage direct-source chronology check; preserve distinctions among enrichment, safeguards concerns, possible weaponization work and possession of a nuclear weapon.
- Beijing: preserve stable official versions of relevant public posts and keep the 2024 public-diplomacy dispute explicitly contested between U.S. and Chinese accounts.
- Chapter 22: preserve stable support for Burns's September 2026 Iraq retrospective and source detained-American outcomes precisely.
- Greece / Red Sox: further work should be archival or witness-based, not another broad web sweep.

### 6. Narrative continuity/depth

The manuscript now has chapter ownership across the full arc. Future prose work should be line-level compression and factual correction rather than thematic expansion.

Priority search patterns remain:

- repeated `Not X. Y.` pivots;
- repeated `the distinction matters` / `this is why it matters` transitions;
- repeated warnings that baseball does not explain diplomacy;
- repeated formulations of `human channel`, `representation`, `patience`, `institutional inheritance`, and `person inside institution`;
- chapters that explain their conclusion after the scene has already landed;
- stacked noun lists that read like presentation copy;
- retrospective claims that make earlier outcomes look inevitable;
- places where Burns is credited for an institutional result belonging to a team, government, alliance, spouse, counterpart or wider network.

Protect the manuscript's useful roughness. Do not polish it into generic leadership prose.

### 7. Book-package completeness

Already present:

- README / checked TOC;
- front matter;
- prologue;
- Chapters 1–22;
- epilogue;
- reader-facing source notes;
- research book brief and extensive dossiers;
- `RIGHTS.md`;
- `rights.json`.

A concise documentary-method note may still be useful because the book intentionally refuses invented scenes and preserves archival gaps, but do not add ceremonial back matter merely to make the package look conventional.

### 8. Desk integration

Only after book-local evidence control is acceptable:

- refresh from latest `main` before shared-file edits;
- synchronize root `README.md` catalog;
- synchronize `.github/ISSUE_TEMPLATE/chapter-feedback.yml`;
- synchronize `llms.txt`;
- synchronize `sitemap.xml`;
- synchronize Reader direct slugs if that surface remains static;
- run `python3 scripts/check-desk.py`;
- resolve catalog/status/source-ledger validator failures.

Do not mark PR #1786 ready until these integration checks are clean.

### 9. Publication boundary

Desk is the drafting/integration workspace. A merged Desk manuscript is not automatically a Shelf publication.

Do not copy to Shelf or mark `Status: Published` without an explicit publication instruction. When publication is authorized, publish from an exact committed Desk snapshot, then update Shelf discovery/catalog surfaces and validate there separately.