# Desk Conformance Pass — Design

Date: 2026-09-23
Owner: svenbenson
Repo: `~/GitHub/desk` (Svyable/desk@main)
Status: Approved by user 2026-09-23

## Motivation

Shelf's `README.md` and `AGENTS.md` were updated (commit `ac76c67`, pushed) to
document the expected "Public surfaces" and "Continuous integration" (CI/CD)
behavior for the two-repo Bookself pipeline. This pass brings `desk` into
conformance with those expectations, so that the integrity gate
`python3 scripts/check-desk.py` is green at HEAD and the repo's tooling, docs,
and local CI describe and obey the same contract.

## Findings (pre-existing drift at clean HEAD)

1. **Surface registration drift.** Three on-desk drafts exist in
   `books/` but are not registered on every public surface:
   - `bottled-lightning`, `lightning-in-a-bottle`, `the-formula` — missing from
     `catalog.json`, `sitemap.xml`, and the `chapter-feedback.yml` book
     dropdown; also missing from `llms.txt`.
   - `the-limit-does-not-exist-draw-the-line`,
     `the-limit-does-not-exist-enough` — missing from `llms.txt`.
   - `data-talent-leverage` — present in `catalog.json` but missing from the
     README `## The books` table.
   - `red-sox-diplomacy` — README dashboard progress is stale
     (`22 of 22 + prologue + epilogue` vs the book README's
     `22 of 22 + preface + epilogue`).
   - Desk↔Shelf summary block in README disagrees with the current Shelf
     checkout (run of `catalog.py --write --shelf-root ../shelf` needed).
   - Cover metadata: `bottled-lightning`, `lightning-in-a-bottle` title-page
     openings lack an author byline.

2. **Ledger/fragment contract too strict.** `check-desk.py` rejects 19
   hand-authored richer ledger schemas and richer fragment shapes as
   "unexpected columns," and flags legitimate cross-chapter URL reuse as
   duplicates. The ledger ownership table (84 books) is authoritative in
   `AGENTS.md`; Shelf's "Local-first" rule keeps the research data incountry —
   rewriting it into the flat schema would be lossy and is rejected.

3. **Stale checker.** `check-desk.py:372` hardcodes the Reader loader boundary
   as `canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r4'`
   while `reader/js/app-loader.js:3` pins `v=r10`.

4. **Hygiene.** `scripts/__pycache__/` is untracked; `.gitignore` lacks
   `__pycache__/` and `*.pyc` (Shelf has both).

## Design

### 1. Surface reconciliation (run the generators, hand-register the new books)

- Run `python3 scripts/catalog-manifest.py --write` — syncs `catalog.json`
  and cover-metadata checks (registers the three missing slugs).
- Run `python3 scripts/catalog.py --write --shelf-root ../shelf` — rebuilds the
  README `## The books` table and the Desk/Shelf summary blocks; fixes
  `data-talent-leverage`, `the-formula`, `red-sox-diplomacy`, and the Shelf
  disagreement.
- Hand-register the three new books in `llms.txt`, `sitemap.xml`, and the
  `chapter-feedback.yml` dropdown (consistent with how those surfaces are
  documented as hand-maintained).
- Add the missing author bylines to the two new title pages
  (`books/bottled-lightning`, `books/lightning-in-a-bottle`).

Outcome: rerun `check-desk.py` — these categories disappear, leaving only
research-source and checker-staleness findings.

### 2. New `scripts/check-research-sources.py` — schema registry + invariants

Replaces the inline ledger/fragment validation in `check-desk.py` with a
dedicated, unit-testable checker (following the existing per-script check
pattern: `check-book-length.py`, `check-reader-startup-boundary.py`, etc.).

**Authorized ledger schemas** — accept, rather than reject:
- canonical 7-column: `id,year,author_or_institution,title,source_type,book_use,url`
- richer variants observed (documented set of accepted header signatures):
  `source_id,chapter(s),accessed/access_date,publication_date,author_or_institution,title,source_type,claim_or_use/claim_or_role,url,notes|caveat`,
  `id,source,year,type,used_for,url,notes`,
  `id,chapter(s),type,source,url,use,caveat`,
  `id,chapter,source_type,source,date,url,claim_supported,caveat`,
  `id,chapter,title,organization,date,url,type,claim_supported,caveat`,
  `era,selection,source,source_type,use`,
  `chapter,window,event,source_type,source,locator,use,status`,
  `chapter,topic,source,year,url,role,notes`,
  `chapter,claim_or_topic,source_type,source_title,author_or_institution,year,url_or_identifier,status,notes`,
  `chapter,claim_area,source_type,source,title,url,date_or_version,notes`
- the checker maps each signature onto canonical concepts (id, year, org,
  title, source_type, claim/use, url, chapter) for invariant validation
  rather than requiring a single column set.

**Authorized fragment shapes** (JSON under `research/sources/`):
- flat 7-field map (`author_or_institution, book_use, source_type, title, url, year`)
- `{id, …}` variants (`the-swarm-agents-in-the-wild`)
- richer `{caveat, claims_used, date, id, publisher, source_type, title, url}`
  (`the-swarm-agents-in-the-wild` perspectives)
- chapter-structured `{chapter, checked, sources, title}` (`the-mortality-discount`)

**Invariants that matter** (per book, across ledger rows + fragments):
- every row has an `id` and a `url` (no empty required cells);
- no TRUE duplicates: same URL in the same chapter with overlapping
  claim/use. Cross-chapter reuse of a URL is allowed (e.g., the IEA lithium
  report cited in both ch02 and ch05 of `chokepoint`);
- fragment ids/urls are unique against ledger rows and against other fragments
  (id-scoped, not URL-global).

**Data fixes in place** (genuine errors only):
- empty `url`/`year` cells in `sifting-for-alpha`, `the-other-250`, and any
  other row that fails the required-cell check;
- true same-URL/same-chapter duplicate rows (leave legitimate cross-chapter
  reuse alone).

**Interface:**
- `python3 scripts/check-research-sources.py` — exit 0 if all books pass, nonzero
  with per-book findings otherwise (same shape as `check-desk.py` findings).
- `python3 scripts/check-research-sources.py --list-schemas` — prints the
  authorized ledger-header signatures and fragment shapes (audit aid).
- `--root` override for the repo root.
- Called from `check-desk.py` as `subprocess.run` (like `catalog-manifest.py`
  already is), so `check-desk.py` remains the single integrity gate.

**Testing:** `scripts/check-research-sources.test.py` covering: canonical pass,
richer-schema pass, cross-chapter URL reuse passes, true duplicate fails,
missing-required-cell fails, fragment/ledger id collisions fail, schema
registry lists correctly.

### 3. Checker-staleness fixes

- `scripts/check-desk.py:372` Reader loader boundary: accept the currently
  pinned `app.js?v=r10` (update the hardcoded expected manifest), so it stays
  in sync with `reader/js/app-loader.js:3`. Keep the relative-form
  (`new URL('./app.js', import.meta.url)`) as the second accepted form.

### 4. Hygiene

- Add `__pycache__/` and `*.pyc` to `.gitignore` (mirrors Shelf).
- Untracked `scripts/__pycache__/` is then ignored.

### 5. Docs alignment (mirror Shelf's pushed guidance)

- `README.md`: update repo-map/anatomy sections to list the sync'd public
  surfaces and which are generated vs hand-maintained; note the new
  `check-research-sources.py`.
- `AGENTS.md`: add a "Public surfaces" table (books/<slug>, catalog.json,
  README `## The books`, `chapter-feedback.yml` dropdown, llms.txt,
  sitemap.xml — with generation roles) and a "Continuous integration" section
  documenting the three read-only workflows (`desk-gui.yml`,
  `reader-startup.yml`, `release-boundary.yml`; all `permissions: contents: read`)
  and the verification-only stance.
- `docs/release-method.md`: gate-4 ("Repository") text updated to reference the
  full check set (`check-desk.py` + `check-research-sources.py` + `catalog.py`).

### Non-goals
- No lossy rewrite of ledger/fragment data into the flat 7-column schema.
- No change to desk release tooling: `release-book.sh → release.py →
  release-book.py + generate-publication-pages.py` already conforms (writes
  books/<slug>, README row, catalog.json, chapter-feedback.yml, publication/**,
  sitemap.xml, release.json; deliberately does not write llms.txt — matches the
  hand-maintained documentation).
- No new write-path in CI. Desk stays verification-only, matching Shelf's one
  guarded write exception (which lives in Shelf, `sync-bookself-reader.yml`).

## Data flow
During troubleshooting, ledger data stays local (per Shelf "Local-first"
invariant). The checkers are read-only; only the explicit `--write` generator
invocations in section 1 mutate surfaces.

## Error handling
- `check-research-sources.py` reports structured per-book, per-row findings with
  the same level/message shape as `check-desk.py` and a single "N blocking
  errors" summary line.
- Genuine data errors are fixed in place during implementation; schema drift
  that falls outside the authorized set is surfaced as an error (not silently
  absorbed) so the registry stays honest.
- `check-desk.py` propagates `check-research-sources.py` exit codes and stderr,
  mirroring the existing `catalog_manifest_check` pattern.

## Order of work
1. Run generators + hand-register new books; rerun `check-desk.py` until only
   research-source + staleness findings remain.
2. Implement `check-research-sources.py` + tests; fix genuine data errors.
3. Update loader-boundary manifest; gitignore hygiene.
4. Docs: README.md, AGENTS.md, release-method.md.
5. Final: `python3 scripts/check-desk.py`, `python3 scripts/catalog.py
   --shelf-root ../shelf`, and the test suites all green → commit + push to
   origin/main.

## Verification
- `python3 scripts/check-desk.py` exits 0 at HEAD.
- `python3 scripts/check-research-sources.py` exits 0 and `--list-schemas`
  prints the registry.
- `python3 scripts/check-research-sources.test.py` passes.
- `python3 scripts/catalog.py --shelf-root ../shelf` reports 0 blocking errors.
- Git working tree clean after final commit.