# Source Ledger Normalization Note

## Canonical baseline

`source-ledger.csv` was previously rebuilt from the old canonical file plus historical addenda 02–15.

Current validator-facing baseline:

- 185 rows after the header;
- canonical IDs `rsd-001` through `rsd-185`;
- one row per exact source URL at the time of that rebuild;
- historical addendum ID collisions removed;
- validator schema preserved exactly: `id,year,author_or_institution,title,source_type,book_use,url`.

Canonical IDs after that rebuild supersede row IDs inside addenda 02–15. Those addenda remain provenance/history, not an alternate canonical index.

## Research after the baseline

Research continued after the 185-row rebuild. Staged addenda now run through `source-ledger-addendum-39.csv`.

The historical staged numbering reaches `rsd-390`, but **390 is not a canonical row count**. Later addenda include URLs already present in the canonical ledger and URLs repeated across addenda. Historical row IDs do not dictate final canonical IDs.

Examples already identified:

- addendum 17 includes six refined records whose URLs are already canonical (`rsd-002`, `rsd-014`, `rsd-140`, `rsd-021`, `rsd-015`, `rsd-169`);
- the European/Eurasian Affairs 2004 remarks-index URL appears again in later staged research;
- later Greece/Red Sox, AHEPA, Wellesley, Beijing and Burns-retrospective passes intentionally revisit URLs with better `book_use` descriptions;
- archive routes, negative-source audits, institutional histories and verification targets must remain labeled as such rather than being promoted into positive evidence.

A corpus-wide reconciliation during the publication pass identified roughly fifty repeated staged URLs before final normalization. The expected final row count is therefore materially below the historical `rsd-390` sequence. Do not treat the provisional count as authoritative until the deterministic rebuild script has run over the refreshed checkout.

## Research-expansion freeze

The manuscript, epilogue and reader-facing source notes now exist. Broad source expansion is **frozen** unless a specific publication-stage gap requires a targeted source.

Do not create another addendum merely because another generally relevant source can be found. New sourcing should close a named gap: counterpart balance, quote verification, chronology, attribution, or one of the explicitly preserved archival unknowns.

This freeze is important because repeated partial canonical merges create unnecessary ID churn and make deduplication harder.

## Deterministic rebuild implementation

The executable procedure now lives at:

`books/red-sox-diplomacy/research/rebuild-source-ledger.py`

From the repository root, after refreshing the branch from current `main`:

```bash
python3 books/red-sox-diplomacy/research/rebuild-source-ledger.py --check
python3 books/red-sox-diplomacy/research/rebuild-source-ledger.py --write
```

`--check` performs the complete corpus reconciliation without modifying files. `--write` rewrites `source-ledger.csv` and emits `source-ledger-rebuild-report.json` with every duplicate decision.

The script deliberately refuses to run if the canonical baseline is no longer exactly 185 rows. That guard prevents a second accidental merge from treating an already-rebuilt ledger as the old baseline.

## Final canonical rebuild rules

1. Start from canonical `rsd-001`–`rsd-185`.
2. Ingest every staged row from addenda 16–39, plus any later addendum created only to close a named publication gap.
3. Normalize stable URLs before duplicate comparison. The implementation normalizes scheme/host/trailing slash, treats `twitter.com` and `x.com` status URLs as the same host identity, removes fragments, and strips only known tracking parameters.
4. Deduplicate by normalized URL across the entire corpus, not by historical row ID or title.
5. Preserve the earliest encountered source record as the canonical metadata owner. If a later duplicate has a materially fuller `book_use`, upgrade only that explanatory field.
6. Preserve evidence class honestly: archive index, negative-source audit, hypothesis/verification route, retrospective witness, primary official record, and contemporaneous reporting are not interchangeable.
7. Reassign canonical IDs sequentially from `rsd-001` after deduplication. Historical addendum IDs become provenance only.
8. Preserve the exact validator schema: `id,year,author_or_institution,title,source_type,book_use,url`.
9. Check every final normalized URL for uniqueness and every required field for content.
10. Preserve the earliest display URL in the ledger; normalization is for identity comparison, not silent rewriting of reader-facing citations.
11. Inspect `source-ledger-rebuild-report.json` before considering the gate closed.
12. Run `python3 scripts/check-desk.py` only after the canonical rewrite and shared integration files are synchronized.

## Deterministic-input requirement

Do **not** rewrite the canonical ledger from clipped or partial connector output.

The rebuild is complete only if the normalization operation has deterministic filesystem access to:

- all 185 canonical baseline rows;
- every staged row from addenda 16 through the actual highest addendum;
- the full URL field for every row so duplicate comparison is corpus-wide rather than local.

During the publication pass, the connector was sufficient to inspect every source file and identify duplicate structure, but the available write API only replaces whole files and the execution environment could not mount or clone the live branch. The canonical ledger was therefore intentionally left unchanged rather than claiming a rebuild assembled by conversational hand-splicing.

That is a correctness boundary, not a reason to do another partial merge.

## Known duplicate reconciliation from addendum 17

Do **not** append these as new canonical rows:

| Addendum 17 ID | Existing canonical ID | Source |
|---|---:|---|
| `rsd-206` | `rsd-002` | State Daily Press Briefing — June 4 1997 |
| `rsd-207` | `rsd-014` | Atlantic Council / Chicago Council Burns transcript |
| `rsd-208` | `rsd-140` | State Magazine Q&A with Burns |
| `rsd-209` | `rsd-021` | HKS 2024 graduation-address announcement |
| `rsd-210` | `rsd-015` | Davidson student witness |
| `rsd-211` | `rsd-169` | Dick Bresciani / Red Sox institutional biography |

The five additional addendum-17 archive/index URLs (`rsd-212`–`rsd-216` in that historical file) remain candidates for the final canonical rebuild subject to corpus-wide URL deduplication.

## Publication principle

The canonical ledger is an evidence index, not a trophy count. The final rebuild should prefer a smaller clean set of unique, accurately classified sources over preserving every historical row number. Addenda remain useful as research history even after their unique rows have been absorbed.