# Manuscript Integration Audit — Red Sox Diplomacy

## Current state

The documentary narrative is complete: front matter, prologue, Chapters 1–22, and epilogue all exist and are checked in the book README.

The book remains **Drafting**. A complete manuscript and a substantially improved narrative are not the same thing as a publication-ready manuscript.

Rights files exist at the book root under the `bookself-arr-v1` All Rights Reserved profile.

PR #1786 remains intentionally draft. Do not mark it ready, merge it, or publish the book until the integration gates below are complete and a human explicitly directs that transition.

## Work completed in integration / narrative revision

### First integration pass

- Rebuilt `research/source-ledger.csv` from the old canonical ledger plus the then-existing early addenda.
- Canonical ledger contains 185 unique URLs with sequential canonical IDs `rsd-001` through `rsd-185` and the exact validator schema.
- Resolved duplicate URLs and historical row-ID collisions rather than treating them as separate sources.
- Preserved older addenda as research history; their historical IDs are not authoritative after normalization.
- Refreshed `chapter-source-map.md` against the complete manuscript.
- Added `continuity-pass-01.md` and applied its highest-value closing edits: shorter epilogue, reduced repeated Beijing-crisis material in Chapter 20, and a more distinct representation-focused Chapter 21.

### Red Sox + American history braid pass

The manuscript now uses three clocks selectively:

1. Burns's life and diplomatic career;
2. Red Sox / baseball history;
3. American social, political and cultural history.

Created:

- `research/red-sox-american-history-braid.md` — research/design map;
- `research/red-sox-american-history-braid-audit.md` — chapter-by-chapter role map and repetition guardrails.

Substantive revisions were applied to:

- **Prologue** — now promises baseball as contested American inheritance and a second historical clock without previewing the whole chronology;
- **Chapter 1** — adds Red Sox integration history, the 1967/1970s American backdrop, Boston school desegregation and Bicentennial-era context while preserving the distinction between historical context and Burns-specific memory;
- **Chapter 2** — heavily recut so it no longer previews the entire biography; it now centers on the 2021 `But he's a Red Sox fan` interruption and the narrower mechanism by which an authentic allegiance became durable public shorthand;
- **Chapter 5** — uses the 1986 World Series only as a home-clock / expatriate-life counterpoint while preserving the complete absence of a Burns-specific viewing scene;
- **Chapter 6** — adds the 1994 baseball strike and cancelled World Series as period atmosphere during post-Cold War American confidence, without making the labor dispute an allegory for geopolitics;
- **Chapter 8** — briefly situates the State briefing-room baseball ritual in baseball's post-strike return to public life;
- **Chapter 10** — reframes Greek baseball as a hybrid cultural network rather than a sealed American export; Greek initiative and diaspora/professional networks remain analytically distinct;
- **Chapter 11** — keeps baseball out of the immediate September 11 NATO scene, then lets it return afterward as American civic ritual, including the 2001 World Series/Yankee Stadium first-pitch moment;
- **Chapter 16** — places the 2004 championship inside national time: Iraq, Afghanistan, the post-9/11 political atmosphere and the presidential-election calendar, while preserving the missing Burns championship-night scene;
- **Chapter 17** — adds the 2013 Marathon bombing / Boston Strong / Fenway championship sequence as civic-history backdrop without claiming baseball healed the city or inventing Burns's reaction;
- **Chapter 21** — treats baseball as an American cultural object already remade by diaspora, migration and international professional networks before it appears in Beijing;
- **Epilogue** — lightly echoes the idea that inherited American identities contain devotion, exclusion, revision and contradiction rather than repeating the historical chronology.

The braid is now **frozen for expansion**. Do not add more baseball-history material before the next compression/read-through pass.

## Integration gates

### 1. Canonical source ledger

`research/source-ledger.csv` remains the validator-facing canonical ledger.

**Important:** the canonical 185-row ledger is now stale by design. Research continued rapidly after that normalization and staging addenda now extend through at least `source-ledger-addendum-32.csv`.

The later addenda include, among other things:

- India counterpart and nonproliferation sources;
- Iran multi-sided sources;
- expanded Burns-specific Red Sox primary evidence;
- Wellesley / Bates School / AFS and local-history material;
- Greece / diaspora / Red Sox network research;
- Libby Baylies Burns independent Athens, preservation and Beijing evidence;
- direct and near-direct 2004 / 2007 / China baseball material;
- the new Red Sox/American-history backdrop sources in addendum 32.

Before validator/integration work:

- reconstruct the canonical ledger from the current canonical file plus **all later addenda**;
- discover the actual highest addendum at the time of normalization rather than assuming 32 remains final;
- deduplicate by normalized URL;
- reassign canonical IDs sequentially; do not preserve historical addendum IDs merely for convenience;
- retain exact schema `id,year,author_or_institution,title,source_type,book_use,url`;
- keep research hypotheses and verification targets clearly labeled rather than upgrading them into evidence;
- remove tracking parameters where stable canonical URLs exist;
- run the Desk validator after the canonical rewrite.

Do not perform another partial canonical merge while research is still actively adding addenda.

### 2. Chapter-source map

Updated after the first complete manuscript. It will need one final refresh after the source-ledger normalization and the Red Sox/American-history braid pass.

Treat `High` or `High-Medium` as evidence strength, not permission to skip final verification.

### 3. Quote and scan verification

Before publication, exact language derived from PDFs, scans or oral-history PDFs must be checked against stable page images/screenshots or reliable HTML/transcripts. Particular attention:

- Ted Osius / ADST oral-history wording;
- Douglas Keene / Jerusalem witness wording;
- David L. Marcus, “America’s Salesman” scan;
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

The new history braid depends on keeping **context distinct from memory**.

### 5. High-value remaining source work

- India: read Shivshankar Menon’s *Choices* directly; preserve Shyam Saran and Ronen Sen as Indian voices; maintain serious nonproliferation criticism rather than treating critics as obstacles.
- Iran: perform a publication-stage direct-source chronology check and preserve distinctions among enrichment, safeguards noncompliance, possible weaponization work and a nuclear weapon.
- Beijing: preserve stable official versions of relevant public posts and keep the 2024 public-diplomacy dispute explicitly contested between U.S. and Chinese accounts.
- Chapter 22: preserve stable primary/transcript support for Burns's September 2026 Iraq retrospective and source detained-American outcomes precisely.
- Greece / Red Sox: highest-value remaining work is archival or witness-based, not another broad web search: Red Sox public-affairs/community-relations files, Samiotes/Jim Rice Field records, MLB International/RBI files, direct Galatis/Samiotes/Gordon Edes testimony, and local Greek-player witnesses.

### 6. Narrative continuity/depth pass

The Red Sox/American-history braid now has a defined chapter-by-chapter architecture. The next pass should be **compression, not expansion**.

Priority search patterns:

- repeated `Not X. Y.` pivots;
- repeated `the distinction matters` / `this is why it matters` transitions;
- repeated warnings that baseball does not explain diplomacy;
- repeated formulations of `human channel`, `representation`, `patience`, `institutional inheritance`, and `person inside institution`;
- chapters that explain their conclusion after the scene has already landed;
- stacked noun lists that read like presentation copy;
- retrospective claims that make earlier outcomes look inevitable;
- places where Burns is credited for an institutional result belonging to a team, government, alliance, spouse, counterpart or wider network.

Chapter 2 has already received a major compression because it had become a miniature version of the entire book.

Protect the manuscript's useful roughness. Do not polish it into generic leadership prose.

### 7. Book-package completeness

Already present:

- README / TOC;
- front matter;
- prologue;
- Chapters 1–22;
- epilogue;
- research book brief and extensive dossiers;
- `RIGHTS.md`;
- `rights.json`.

Still assess before integration:

- a concise note on sources/documentary method may be useful because the book intentionally refuses invented scenes and preserves archival gaps;
- a selected bibliography/source note only if it improves reader use beyond the research ledger;
- a short author note about the deliberately different relationship between *Red Sox Diplomacy* and *The Long Table* only if it belongs in the reader-facing edition.

Do not add ceremonial back matter merely to make the package look conventional.

### 8. Desk integration

Only after book-local evidence and continuity work are in acceptable shape:

- refresh from latest `main` before shared-file edits;
- synchronize root `README.md` catalog;
- synchronize `.github/ISSUE_TEMPLATE/chapter-feedback.yml`;
- synchronize `llms.txt`;
- synchronize `sitemap.xml`;
- synchronize Reader direct slugs if that surface remains static;
- run `python3 scripts/check-desk.py`;
- resolve any catalog/status/source-ledger validator failures.

Do not mark PR #1786 ready until these integration checks are clean.

### 9. Publication boundary

Desk is the drafting/integration workspace. A merged Desk manuscript is not automatically a Shelf publication.

Do not copy to Shelf or mark `Status: Published` without an explicit publication instruction. When publication is authorized, publish from an exact committed Desk snapshot, then update Shelf discovery/catalog surfaces and validate there separately.