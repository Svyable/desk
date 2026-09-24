# Desk Conformance Pass Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring `~/GitHub/desk` (Svyable/desk@main) into conformance with the public-surfaces and CI/CD expectations documented in Shelf's `README/AGENTS` (pushed as `ac76c67`), so `python3 scripts/check-desk.py` is green at HEAD, research-ledger validation is contract-aware, and docs mirror the surfaces.

**Architecture:** Three cooperating layers. (1) Reconciliation of surface drift using the existing generators plus hand registration of the three new books. (2) A new dedicated `scripts/check-research-sources.py` with an authorized-schema registry (accepted ledger header signatures + fragment shapes), invariant validation that tolerates legitimate cross-chapter URL reuse, and genuine-error detection; it is called from `check-desk.py` like the other sub-checks. (3) Checker staleness fixes (loader boundary `r4`→`r10`), gitignore hygiene, and surface/CI documentation aligned with Shelf.

**Tech Stack:** Python 3 standard library only (csv, json, re, argparse, subprocess, pathlib), unittest, GitHub YAML workflows, Markdown.

---

## Chunk 1: Surface reconciliation (generators + hand registration + byline fixes)

### Task 1.1: Run the catalog generators

The design decision: generators own catalog/README freshness; `catalog.json` is the inventory source of truth.

**Files:**
- Modify (generated): `catalog.json`, `README.md`

- [ ] **Step 1: Verify the pre-state quote**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-desk.py
```
Expected: exit 1, with `catalog.json is not synchronized ... missing: bottled-lightning, lightning-in-a-bottle, the-formula` and the README `## The books` errors listed in the design doc.

- [ ] **Step 2: Sync catalog.json from book folders**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/catalog-manifest.py --write
```
Expected: exit 0; `catalog.json` now lists `bottled-lightning`, `lightning-in-a-bottle`, `the-formula`.

- [ ] **Step 3: Rebuild README dashboard blocks (Desk table + Desk/Shelf summaries)**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/catalog.py --write --shelf-root ../shelf
```
Expected: exit 0; README `## The books` now contains `data-talent-leverage`, `the-formula`; `red-sox-diplomacy` shows `22 of 22 + preface + epilogue`; the Desk↔Shelf summary block agrees with the Shelf checkout.

- [ ] **Step 4: Confirm catalog.py exits clean in JSON mode**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/catalog.py --json >/tmp/catalog.json.out; echo "exit=$?"
```
Expected: `exit=0`; the JSON report's `healthy` is `true`.

- [ ] **Step 5: Commit**

```bash
cd ~/GitHub/desk && git add catalog.json README.md && git commit -m "Reconcile desk catalog.json and README with book folders"
```

### Task 1.2: Fix the two new books' title-page bylines

The cover-metadata checker requires the byline line to be exactly `**Sven Hardy Benson**`.

**Files:**
- Modify: `books/bottled-lightning/manuscript/front-matter.md`
- Modify: `books/lightning-in-a-bottle/manuscript/front-matter.md`

Current openings (both have a plain `Sven Hardy Benson` line after the subtitle):
```
# Bottled Lightning

*How Repeated Synthesis Turns AI Output into an Intelligence Engine*

Sven Hardy Benson
```
and
```
# Lightning in a Bottle

*How to Turn Generative Intelligence into Compounding Work*

Sven Hardy Benson
```

- [ ] **Step 1: Read both files to confirm the exact byline line**

Run:
```bash
cd ~/GitHub/desk && sed -n '1,8p' books/bottled-lightning/manuscript/front-matter.md && echo ==== && sed -n '1,8p' books/lightning-in-a-bottle/manuscript/front-matter.md
```

- [ ] **Step 2: Bold the byline in both files**

In each file, replace the bare line `Sven Hardy Benson` (right after the subtitle) with `**Sven Hardy Benson**`. Do not touch any other line.

- [ ] **Step 3: Verify cover metadata for both books**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-book-cover-metadata.py bottled-lightning lightning-in-a-bottle
```
Expected: `Cover metadata OK: 2 books; titles, subtitles, and Sven Hardy Benson bylines agree.`

- [ ] **Step 4: Commit**

```bash
cd ~/GitHub/desk && git add books/bottled-lightning/manuscript/front-matter.md books/lightning-in-a-bottle/manuscript/front-matter.md && git commit -m "Add author byline to two new book title pages"
```

### Task 1.3: Register the three new books on the hand-maintained discovery surfaces

`llms.txt`, `sitemap.xml`, and the `chapter-feedback.yml` dropdown are hand-maintained on Desk (no generator), matching the Shelf-documented expectation. Insert alphabetically.

**Files:**
- Modify: `llms.txt`
- Modify: `sitemap.xml`
- Modify: `.github/ISSUE_TEMPLATE/chapter-feedback.yml`

Display titles (from book READMEs):
- `books/bottled-lightning/README.md` → **Bottled Lightning**
- `books/lightning-in-a-bottle/README.md` → **Lightning in a Bottle**
- `books/the-formula/README.md` → **The Formula**

- [ ] **Step 1: Add Bottled Lightning to llms.txt**

Insert after line 38 (`- [Bookself](…)`), before line 39 (`- [Chiptastrophy](…)`):
```
- [Bottled Lightning](https://svyable.github.io/desk/books/bottled-lightning/README.md)
```

- [ ] **Step 2: Add Lightning in a Bottle to llms.txt**

Insert between line 55 (`- [Leveraging Luck](…)`) and line 56 (`- [Look Alive](…)`):
```
- [Lightning in a Bottle](https://svyable.github.io/desk/books/lightning-in-a-bottle/README.md)
```

- [ ] **Step 3: Add The Formula to llms.txt**

Insert between line 103 (`- [The Exponentiality](…)`) and line 104 (`- [The Half-Life of Now](…)`):
```
- [The Formula](https://svyable.github.io/desk/books/the-formula/README.md)
```

- [ ] **Step 4: Move the two `the-limit-*` entries into the ## Books section**

Currently they are placed INSIDE the `## Reading a book` section (after line 153), so `check-desk.py`'s section extractor never sees them. Move both lines so they sit inside `## Books`, after `- [The Last Human Channel](…)` (line 111) and before `- [Built to Be Alone](…)` (line 112), in this order:
```
- [The Limit Does Not Exist](https://svyable.github.io/desk/books/the-limit-does-not-exist-draw-the-line/README.md)
- [The Limit Does Not Exist](https://svyable.github.io/desk/books/the-limit-does-not-exist-enough/README.md)
```
Then delete the two stray occurrences from inside `## Reading a book`.

- [ ] **Step 5: Add the three books to sitemap.xml**

Insert these `<url>` elements alphabetically (paths sort like the list):
- After `the-exponentiality` path line (`.../books/the-exponentiality/README.md`), before `.../books/the-half-life-of-now/README.md`:
  - `<url><loc>https://svyable.github.io/desk/books/the-formula/README.md</loc></url>`
- After `.../books/bookself/README.md`, before `.../books/chiptastrophy/README.md`:
  - `<url><loc>https://svyable.github.io/desk/books/bottled-lightning/README.md</loc></url>`
- After `.../books/leveraging-luck/README.md`, before `.../books/look-alive/README.md`:
  - `<url><loc>https://svyable.github.io/desk/books/lightning-in-a-bottle/README.md</loc></url>`

- [ ] **Step 6: Add the three books to the chapter-feedback.yml dropdown**

Insert slugs alphabetically (the list is already sorted):
- `bottled-lightning` between `bookself` and `chiptastrophy`
- `lightning-in-a-bottle` between `leveraging-luck` and `look-alive`
- `the-formula` between `the-exponentiality` and `the-half-life-of-now`

- [ ] **Step 7: Verify llms.txt / sitemap / feedback now agree**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-desk.py
```
Expected: still exits 1 (research-source errors remain), but the llms.txt and sitemap and feedback dropdown lines are GONE from the output.

- [ ] **Step 8: Commit**

```bash
cd ~/GitHub/desk && git add llms.txt sitemap.xml .github/ISSUE_TEMPLATE/chapter-feedback.yml && git commit -m "Register bottled-lightning, lightning-in-a-bottle, and the-formula on discovery surfaces"
```

## Chunk 2: `scripts/check-research-sources.py` — schema registry + invariant checker

### Task 2.1: Write the checker (authorized ledger schemas + fragment shapes + invariants)

**Files:**
- Create: `scripts/check-research-sources.py`
- Test: `scripts/check-research-sources.test.py`

Design contract (from the approved design doc):

1. **Authorized ledger schemas** — a documented registry mapping each accepted header signature to its role columns. A ledger passes the header check iff its exact field tuple is in the registry. Registry:
   - canonical: `id,year,author_or_institution,title,source_type,book_use,url` (65 books)
   - `source_id,chapter,accessed_date,publication_date,author_or_institution,title,source_type,claim_or_use,url,notes` (5 books)
   - `source_id,chapters,access_date,publication_date,author_or_institution,title,source_type,claim_or_role,url,caveat` (2 books)
   - `id,source,year,type,used_for,url,notes` (2 books)
   - `id,chapters,type,source,url,use,caveat` (2 books)
   - `id,chapter,source_type,source,date,url,claim_supported,caveat` (2 books)
   - `id,chapter,title,organization,date,url,type,claim_supported,caveat` (1 book)
   - `era,selection,source,source_type,use` (1 book: the-crime-that-made-the-decade; **no url column — locator role is `source`**)
   - `chapter,window,event,source_type,source,locator,use,status` (1 book: the-ten-year-republic; **locator role is `locator`**)
   - `chapter,topic,source,year,url,role,notes` (1 book)
   - `chapter,claim_or_topic,source_type,source_title,author_or_institution,year,url_or_identifier,status,notes` (1 book; **locator role is `url_or_identifier`**)
   - `chapter,claim_area,source_type,source,title,url,date_or_version,notes` (1 book)

2. **Authorized fragment shapes** — a fragment JSON passes iff its key set equals one of:
   - `{author_or_institution, book_use, source_type, title, url, year}` (flat; 3 books)
   - `{author_or_institution, book_use, source_type, title, url, year, id}` (the-swarm)
   - `{author_or_institution, book_use, notes, source_type, title, url, year}` (the-convergence richer)
   - `{caveat, claims_used, date, id, publisher, source_type, title, url}` (the-swarm perspectives)
   - `{chapter, checked, sources, title}` where `sources` is a list of flat objects (the-mortality-discount). Nested `sources` entries must each match the flat shape `{author_or_institution, book_use, source_type, title, url, year}` and must each be non-empty.

3. **Invariants that matter** (validated per book across ledger rows AND fragment records):
   - **id uniqueness** (id-scoped): extract the id from the schema's id column (or `Path.stem` for fragments — note fragments already use the filename as id). Duplicate id → error.
   - **locator/url presence**: for every record, the schema's locator role column (or fragment `url`) must be a non-empty string, EXCEPT records whose `source_type` is exactly `Author research archive` (sifting-for-alpha rows 11-12): for these, the locator may be empty IF `book_use` mentions an existing path under that book's `research/` directory (validated with `path.exists()`).
   - **locator (URL) reuse**: a locator may be reused across DIFFERENT chapters (legit cross-chapter reference), but the SAME locator in the SAME chapter flagged as a duplicate. Determine each record's chapter set from the schema's chapter column (`chapter`/`chapters`) when present, else by regex `\bChapter\s+([\d., and-]+)` over the schema's use/claim column (e.g. `book_use`, `use`, `claim_or_use`, `claim_supported`); if no chapter is derivable, the record's scope is `ALL`. Two records with the same locator are a TRUE duplicate iff their chapter sets overlap. (This makes chokepoint/solar-century/waiting-list/artificial-abundance cross-chapter reuse PASS while waiting-list 26/27 same-chapter failure still FAILS.)
   - **required non-empty cells**: for flat/canonical schemas, the fields that must be non-empty are `id`, `author_or_institution`, `title`, `source_type`, and at least one of {use/claim/book_use/used_for}; `year`/`date`/`publication_date` are OPTIONAL (may be empty — the-other-250 has 26 legitimately undated historical rows). For role-specialized schemas, the non-empty requirement applies to every column except `notes`/`caveat`/`status`/`checked`/`date_*` (optional annotation columns).
   - **fragment id collision**: fragment filename is the source id; it must be unique against ledger ids and other fragment ids in the same book. (Retains the current id-scoped behavior.)
   - **too many CSV fields** (a `None` key row) is still an error per row.

4. **CLI**:
   - `python3 scripts/check-research-sources.py` — exit 0 if every `books/*/` research source set passes, else exit 1; prints `ERROR: <location> <message>` lines plus a trailing summary `Research sources OK: 84 books, N records.` on success.
   - `python3 scripts/check-research-sources.py --list-schemas` — prints the authorized ledger header signatures and fragment shapes, one per line, and exits 0.
   - `--root ROOT` override (defaults to repo root via `Path(__file__).resolve().parents[1]`).
   - Reuses the failure style of `check-desk.py` (`fail(message)` -> global flag -> exit code).

5. **Book set**: iterate `books/*/` dirs excluding `_*`. For each, load `research/source-ledger.csv` if present (via `csv.DictReader`) and every `research/sources/*.json` fragment.

Write the full script and its unit test (Task 2.2) together, then run tests.

- [ ] **Step 1: Write `scripts/check-research-sources.py`**

Reference points in the existing codebase for style: `scripts/check-desk.py` (fail/summary/section helpers, `--root` handling), `scripts/check-book-cover-metadata.py` (argparse + `--json` pattern). Use only the standard library.

- [ ] **Step 2: Write `scripts/check-research-sources.test.py`**

Follow the existing `scripts/check-book-length.test.py` pattern: `unittest.TestCase`, build a temp repo root (`tempfile.TemporaryDirectory`), invoke `SCRIPT` via `subprocess.run([sys.executable, str(SCRIPT), "--root", str(root)])`. Cover:
   - canonical ledger passes
   - one richer schema passes
   - cross-chapter URL reuse passes (same url in chapter 2 and chapter 5 rows)
   - same-chapter same-URL duplicate fails
   - missing required cell (empty title) fails
   - duplicate fragment id vs ledger id fails
   - fragment with unknown field fails
   - `author research archive` row with empty locator + existing research path passes; with nonexistent path fails
   - fragment structured `{chapter,checked,sources,title}` shape passes when nested sources are flat
   - `--list-schemas` exits 0 and prints at least 12 header signatures

- [ ] **Step 3: Run the new tests**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.test.py -v
```
Expected: all tests pass (adjust fixtures until green).

- [ ] **Step 4: Smoke-run against the real tree**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.py; echo "exit=$?"
```
Expected: still exits 1 (data fixes happen in Chunk 3) but now reports genuine issues only: the-other-250 undated rows PASS, chokepoint/solar-century/artificial-abundance cross-chapter reuse PASS, waiting-list 26/27 still FAIL, convergence fragment↔ledger duplicates still FAIL, mortality-discount and swarm shapes PASS (or their genuine problems only).

- [ ] **Step 5: Commit**

```bash
cd ~/GitHub/desk && git add scripts/check-research-sources.py scripts/check-research-sources.test.py && git commit -m "Add contract-aware research source checker with schema registry"
```

## Chunk 3: Fix genuine research data errors in place

### Task 3.1: Consolidate the-convergence fragment↔ledger duplication

The convergence is anomalous: fragments deliberately duplicate ledger rows (overlap 10 URLs). The design rule: each source URL appears exactly once per book. Because convergence fragments are the richer curated form (authors wrote them alongside full ledgers), keep the FRAGMENT where a duplicate exists and REMOVE the redundant ledger row; for pure fragment↔fragment dupes, keep the fragment with the most fields (prefer one with `notes`).

**Files:**
- Modify: `books/the-convergence/research/source-ledger.csv`
- Modify/Delete: the 10 duplicate fragments in `books/the-convergence/research/sources/`

- [ ] **Step 1: List the exact duplicates**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.py 2>&1 | grep the-convergence
```
Expected: ~16 errors: 10 fragment↔ledger URL dups, 2 `notes` field issues (replaced by the authorized `notes` shape in Chunk 2), and the usgs/nber fragment↔fragment dupes.

- [ ] **Step 2: Remove the redundant ledger rows**

For each URL present in BOTH the ledger and a fragment, delete the ledger row and keep the fragment. Confirm with the script until only the two fragment↔fragment dupes remain (usgs-mcs triple, nber/doi-3386 pair).

- [ ] **Step 3: Resolve fragment↔fragment duplicates**

- `doi-10.3133-mcs2026.json` + `usgs-mineral-commodity-summaries-2026.json` + `usgs-mineral-commodity-summaries-2026-copper.json` all carry the same URL `https://doi.org/10.3133/mcs2026`. Keep ONE (the most specific/curated — recommend `usgs-mineral-commodity-summaries-2026.json`), delete the other two, ensuring no unique `book_use` text is thrown away (merge any distinct chapter evidence into the kept file's `book_use`).
- `doi-10.3386-w32041.json` + `nber-working-paper-32041.json` both carry `https://doi.org/10.3386/w32041`. Keep `nber-working-paper-32041.json` (richer `book_use` + revised-April-2026 sourcing), delete `doi-10.3386-w32041.json`.

- [ ] **Step 4: Verify**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.py; echo "exit=$?"
```
Expected: no `the-convergence` findings for sources; real-tree exit still 1 only if other books remain (waiting-list, republic-in-motion, sifting, and the 2 author-archive rows).

- [ ] **Step 5: Commit**

```bash
cd ~/GitHub/desk && git add books/the-convergence/research && git commit -m "Consolidate duplicate sources in the-convergence research set"
```

### Task 3.2: Fix the genuine same-URL/same-chapter duplicates

From the original `check-desk.py` output these are TRUE duplicates under the Chunk-2 invariant (same locator, overlapping chapter):

**Files:**
- Modify: `books/the-waiting-list/research/source-ledger.csv` (rows 26/27)
- Modify: `books/the-republic-in-motion/research/source-ledger.csv` (row 53 vs row 12)

- [ ] **Step 1: waiting-list rows 26 and 27**

Both are ch05 and both point to the DOJ Live Nation case landing page (`https://www.justice.gov/atr/case/us-and-plaintiff-states-v-live-nation-entertainment-inc-and-ticketmaster-llc`), but they are two distinct documents (2024 Antitrust Complaint, and Proposed Final Judgment + Competitive Impact Statement 2026). Fix by pointing the 2026 row at the specific PFJ/CIS page. If the exact sub-URL cannot be verified offline, keep one row with the canonical case URL and fold the other row's evidence into its `book_use` (do NOT keep two same-URL same-chapter rows).

After the edit, run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.py 2>&1 | grep the-waiting-list
```
Expected: no `the-waiting-list` duplicate findings.

- [ ] **Step 2: republic-in-motion row 53 vs row 12**

`rim-ch05-004` (line 53) and `rim-ch05-001` (line 12) both point to the Smithsonian `artificial-river-erie-canal` page but describe different sub-pages (Erie Canal vs Canal Builders). Fix by setting row 53's URL to the correct Canal Builders sub-page URL; if that URL cannot be confirmed, set the row's `url` to the top-level exhibition page that canonicalizes both sub-topics.

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.py 2>&1 | grep the-republic-in-motion
```
Expected: no duplicate findings for the book.

- [ ] **Step 3: Commit**

```bash
cd ~/GitHub/desk && git add books/the-waiting-list/research/source-ledger.csv books/the-republic-in-motion/research/source-ledger.csv && git commit -m "Fix same-chapter duplicate source URLs in waiting-list and republic-in-motion ledgers"
```

### Task 3.3: Author research archive rows (sifting-for-alpha)

Design decision: `Author research archive` rows may omit a locator when `book_use` names an existing in-repo research file (validated). The current sifting rows 11-12 already satisfy this only if `book_use` mentions the in-repo path.

**Files:**
- Modify: `books/sifting-for-alpha/research/source-ledger.csv` (rows 11-12)

- [ ] **Step 1: Read rows 11-12 and confirm the in-repo path is named in book_use**

Run:
```bash
cd ~/GitHub/desk && sed -n '11,12p' books/sifting-for-alpha/research/source-ledger.csv
```
The `book_use` text should reference `research/q25-2026-09-06-thirty-strategy-audit.md` (it is the actual file that documents both rows). If the path is not present, append `; in-repo evidence: research/q25-2026-09-06-thirty-strategy-audit.md` to each row's `book_use`.

- [ ] **Step 2: Verify**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-research-sources.py 2>&1 | grep sifting
```
Expected: no findings for sifting-for-alpha.

- [ ] **Step 3: Commit**

```bash
cd ~/GitHub/desk && git add books/sifting-for-alpha/research/source-ledger.csv && git commit -m "Anchor author-research-archive rows to in-repo evidence"
```

## Chunk 4: Wire the checker into the gate + staleness + hygiene

### Task 4.1: Call check-research-sources.py from check-desk.py

**Files:**
- Modify: `scripts/check-desk.py` (imports not needed; lines 105-205 removal, 378-383 replacement)
- Test: `scripts/check-desk-reader-contract.test.py` (may need no change, but run tests)

- [ ] **Step 1: Replace inline source checks with the subprocess call**

Remove `check_source_ledger`, `check_source_fragment`, `check_book_sources`, `register_source`, and the `SOURCE_LEDGER_FIELDS`/`SOURCE_RECORD_FIELDS` constants. Replace the block at lines 378-383 with:
```python
research_check = subprocess.run(
    [sys.executable, str(ROOT / "scripts" / "check-research-sources.py"), "--root", str(ROOT)],
    check=False,
    capture_output=True,
    text=True,
)
if research_check.returncode:
    for line in (research_check.stdout or research_check.stderr).splitlines():
        if line.startswith("ERROR:"):
            fail(line.removeprefix("ERROR: ").strip())
```
Keep `csv`/`json` imports only if still used elsewhere (csv is no longer used after removal — drop it; json remains for the cover/commit JSON parse). Update the final summary line to not reference ledger counts (the sub-check owns that):
```python
print(f"Desk integrity check passed: {len(book_dirs)} books are cataloged consistently; research sources verified by scripts/check-research-sources.py.")
```

- [ ] **Step 2: Sanity-run the whole gate**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-desk.py
```
Expected: same research-source errors surfaced, now via the sub-check (no behavioral regression for the other checks).

- [ ] **Step 3: Run the reader contract tests**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-desk-reader-contract.test.py
```
Expected: pass (if it references removed symbols, update it to match the new structure).

- [ ] **Step 4: Commit**

```bash
cd ~/GitHub/desk && git add scripts/check-desk.py scripts/check-desk-reader-contract.test.py && git commit -m "Gate desk integrity on the research-source checker"
```

### Task 4.2: Fix the stale Reader loader boundary (r4 → r10)

**Files:**
- Modify: `scripts/check-desk.py` (the `app_boundaries` tuple)
- Modify: `scripts/check-desk-reader-contract.test.py` (line 12 asserts the `r4` marker)

- [ ] **Step 1: Update the boundary in check-desk.py**

In `scripts/check-desk.py`, the `app_boundaries` tuple currently contains:
```python
"const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r4';",
```
`reader/js/app-loader.js:3` pins `v=r10`. Replace the `r4` entry with the `r10` entry so the gate matches the loader:
```python
"const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r10';",
```
Keep the relative form (`new URL('./app.js', import.meta.url)`) as the second accepted boundary.

- [ ] **Step 2: Update the matching marker in the regression test**

In `scripts/check-desk-reader-contract.test.py`, the `required` tuple still asserts:
```python
'const canonicalAppUrl = \'https://svyable.github.io/bookself/reader/js/app.js?v=r4\';',
```
Replace `?v=r4` with `?v=r10` in that assertion.

- [ ] **Step 3: Verify**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-desk-reader-contract.test.py && python3 scripts/check-desk.py 2>&1 | grep -i "reader loader"
```
Expected: the regression test passes; the `Reader loader is missing the canonical Bookself app.js boundary` line is GONE from check-desk (exit still 1 from data issues only if any remain).

- [ ] **Step 4: Commit**

```bash
cd ~/GitHub/desk && git add scripts/check-desk.py scripts/check-desk-reader-contract.test.py && git commit -m "Accept current Reader loader app.js boundary (r10)"
```

### Task 4.3: Gitignore hygiene

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Append the Python cache entries**

Append to `.gitignore`:
```
__pycache__/
*.pyc
```

- [ ] **Step 2: Confirm the untracked cache is ignored**

Run:
```bash
cd ~/GitHub/desk && git status --short
```
Expected: `scripts/__pycache__/` no longer appears as untracked.

- [ ] **Step 3: Commit**

```bash
cd ~/GitHub/desk && git add .gitignore && git commit -m "Ignore Python bytecode caches"
```

## Chunk 5: Docs alignment (mirror Shelf's pushed guidance)

### Task 5.1: Desk README — surfaces + generated-vs-hand-maintained

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add a "Reputation & discovery surfaces" subsection**

In the section that documents Desk's public surface (find the nearest existing heading, e.g. `## The books`/`## Public discovery surface` or the repo-anatomy block), add a table:
```
| Surface | Owner | Maintained by |
| --- | --- | --- |
| `books/<slug>/` manuscript + README | book | author commits |
| `catalog.json` | catalog-manifest.py | `--write` regenerates from `books/` |
| README `## The books` + summaries | catalog.py | `--write [--shelf-root ../shelf]` |
| `.github/ISSUE_TEMPLATE/chapter-feedback.yml` dropdown | hand | agent registration |
| `llms.txt` | hand | agent registration |
| `sitemap.xml` | hand | agent registration |
| `publication/**` + `release.json` | Desk release tooling | release-book.sh (Shelf side) |
```
- Note that `catalog.py` regenerates the README table + summaries; `catalog-manifest.py` owns catalog.json; the three discovery surfaces above are hand-maintained and verified by `scripts/check-desk.py`.

- [ ] **Step 2: Note the new checker**

Where `scripts/check-desk.py` is mentioned, add: `Research source ledgers and fragments are validated by scripts/check-research-sources.py (invoked by check-desk.py); run it with --list-schemas to see the authorized schemas.`

- [ ] **Step 3: Commit**

```bash
cd ~/GitHub/desk && git add README.md && git commit -m "Document public surfaces and research-source checker in README"
```

### Task 5.2: Desk AGENTS.md — surfaces + CI/CD sections

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Add a "Public surfaces" table**

Under the existing `## Desk / Shelf boundary` section (or a new `## Public surfaces` section), add the same table as Task 5.1 with the note that `catalog.json` is the inventory source of truth, catalog.py owns the README dashboard, and feedback dropdown/llms.txt/sitemap.xml are hand-maintained and gate-checked.

- [ ] **Step 2: Add a "Continuous integration" section**

Add a `## Continuous integration` section stating: hosted CI is optional verification only (Local-first invariant); all Desk workflows declare `permissions: contents: read`; Desk has NO write-path workflow (the single guarded write exception lives on Shelf: `sync-bookself-reader.yml`); verify locally with `python3 scripts/check-desk.py` (which now also runs the research-source checker and catalog/cover audits).

- [ ] **Step 3: Commit**

```bash
cd ~/GitHub/desk && git add AGENTS.md && git commit -m "Document Desk public surfaces and read-only CI expectations"
```

### Task 5.3: release-method.md gate 4 update

**Files:**
- Modify: `docs/release-method.md`

- [ ] **Step 1: Update the Repository gate text**

Find the gate-4/"Repository" check text and update so it references the full local check set: `python3 scripts/check-desk.py` (includes cover audit, catalog.py, catalog-manifest, feedback/llms/sitemap agreement, Reader boundary, and `scripts/check-research-sources.py`), plus `python3 scripts/catalog.py --shelf-root ../shelf`.

- [ ] **Step 2: Commit**

```bash
cd ~/GitHub/desk && git add docs/release-method.md && git commit -m "Document full integrity check set in release method gate"
```

## Chunk 6: Final verification + push

### Task 6.1: Full local gate + tests green

- [ ] **Step 1: Run check-desk.py**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/check-desk.py
```
Expected: exit 0, message `Desk integrity check passed: N books are cataloged consistently; research sources verified by scripts/check-research-sources.py.`

- [ ] **Step 2: Run all scripts unit tests**

Run:
```bash
cd ~/GitHub/desk && for t in scripts/*.test.py; do echo "== $t"; python3 "$t" || exit 1; done
```
Expected: all pass.

- [ ] **Step 3: Confirm catalog.py standalone**

Run:
```bash
cd ~/GitHub/desk && python3 scripts/catalog.py --shelf-root ../shelf; echo "exit=$?"
```
Expected: `exit=0`, `Reader audit: 0 blocking errors`.

### Task 6.2: Review the diff and push

- [ ] **Step 1: Review the final diff**

Run:
```bash
cd ~/GitHub/desk && git status && git log --oneline -10
```
Confirm only intended files changed and commits are coherent.

- [ ] **Step 2: Push to origin/main**

```bash
cd ~/GitHub/desk && git push origin main
```
Expected: pushed; the read-only `release-boundary.yml` / `desk-gui.yml` / `reader-startup.yml` workflows run and pass (they declare `contents: read` and only verify).

- [ ] **Step 3: Confirm the working tree is clean**

Run:
```bash
cd ~/GitHub/desk && git status --short
```
Expected: empty (no output).