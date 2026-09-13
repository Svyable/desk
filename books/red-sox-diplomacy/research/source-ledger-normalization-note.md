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

Research continued after the 185-row rebuild. Staged addenda now run through `source-ledger-addendum-38.csv`.

The historical staged numbering reaches `rsd-352`, but **352 is not a canonical row count**. Later addenda include URLs already present in the canonical ledger and occasional URLs repeated across addenda. Historical row IDs also should not dictate final canonical IDs.

Examples already identified:

- addendum 17 includes six refined records whose URLs are already canonical (`rsd-002`, `rsd-014`, `rsd-140`, `rsd-021`, `rsd-015`, `rsd-169`);
- the European/Eurasian Affairs 2004 remarks-index URL appears again in later staged research;
- several later addenda intentionally preserve archive routes, negative-source audits, institutional histories and verification targets that must remain labeled as such rather than being promoted into positive evidence.

The later corpus materially expands India, Iran, early-life/Wellesley, Boston College, Greece/baseball networks, Athens witnesses, Beijing, Red Sox institutional history, American-history context, and publication-stage verification routes.

## Research-expansion freeze

The first-pass manuscript, epilogue and reader-facing source notes now exist. Broad source expansion should therefore be treated as **frozen** unless a specific publication-stage gap requires a targeted source.

Do not create another addendum merely because another generally relevant source can be found. New sourcing should close a named gap: counterpart balance, quote verification, chronology, attribution, or one of the explicitly preserved archival unknowns.

This freeze is important because repeated partial canonical merges create unnecessary ID churn and make deduplication harder.

## Final canonical rebuild

Before Desk integration/validation:

1. Start from canonical `rsd-001`–`rsd-185`.
2. Ingest every staged row from addenda 16–38, plus any later addendum created only to close a named publication gap.
3. Normalize stable URLs before duplicate comparison; remove tracking parameters when a canonical URL exists.
4. Deduplicate by normalized URL across the entire corpus, not by historical row ID or title.
5. Where a staged duplicate has a materially better `book_use` description, improve the existing canonical row rather than append another source.
6. Preserve evidence class honestly: archive index, negative-source audit, hypothesis/verification route, retrospective witness, primary official record, and contemporaneous reporting are not interchangeable.
7. Reassign canonical IDs sequentially from `rsd-001` after deduplication. Historical addendum IDs become provenance only.
8. Preserve the exact validator schema: `id,year,author_or_institution,title,source_type,book_use,url`.
9. Check every final URL for uniqueness and nonempty required fields.
10. Run `python3 scripts/check-desk.py` only after the canonical rewrite and shared integration files are synchronized.

## Deterministic-input requirement

Do **not** rewrite the canonical ledger from clipped or partial connector output.

The rebuild is complete only if the normalization operation has deterministic access to:

- all 185 canonical baseline rows;
- every staged row from addenda 16 through the actual highest addendum;
- the full URL field for every row so duplicate comparison is corpus-wide rather than local.

During the current editorial pass, the GitHub connector exposed large CSV files in clipped conversational chunks. The manuscript, source map and integration audit could be updated safely from complete chapter/control files, but the canonical ledger was intentionally left unchanged rather than claiming a normalization based on incomplete rows.

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