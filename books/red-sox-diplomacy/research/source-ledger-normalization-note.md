# Source Ledger Normalization Note

## Canonical baseline

`source-ledger.csv` was previously rebuilt from the old canonical file plus historical addenda 02–15.

Baseline used for the final deterministic rebuild:

- 185 rows after the header;
- canonical IDs `rsd-001` through `rsd-185`;
- one row per exact source URL at the time of that rebuild;
- historical addendum ID collisions removed;
- validator schema preserved exactly: `id,year,author_or_institution,title,source_type,book_use,url`.

Canonical IDs from that baseline supersede row IDs inside addenda 02–15. Those addenda remain provenance/history, not an alternate canonical index.

## Final deterministic rebuild

The canonical ledger has been rebuilt from the 185-row baseline plus staged addenda 16–39 using `rebuild-source-ledger.py` on a real repository checkout.

`source-ledger-rebuild-report.json` records 185 baseline rows, 213 staged rows, 49 duplicate rows removed after URL normalization, 26 materially fuller `book_use` upgrades, and **349 final canonical rows**. The highest staged file is `source-ledger-addendum-39.csv`.

The resulting `source-ledger.csv` is sequential through `rsd-349`. Historical addendum IDs, which reached `rsd-397`, remain provenance only and do not dictate canonical numbering.

## Research-expansion freeze

The manuscript, epilogue and reader-facing source notes now exist. Broad source expansion is **frozen** unless a specific publication-stage gap requires a targeted source.

Do not create another addendum merely because another generally relevant source can be found. New sourcing should close a named gap: counterpart balance, quote verification, chronology, attribution, or one of the explicitly preserved archival unknowns.

## Deterministic rebuild implementation

The executable procedure lives at `books/red-sox-diplomacy/research/rebuild-source-ledger.py`.

The final rebuild used the script’s complete corpus reconciliation rather than a conversational hand-merge. The script normalized scheme/host/trailing-slash identity, treated `twitter.com` and `x.com` status URLs as the same host identity, removed fragments and known tracking parameters, preserved the earliest source record, upgraded only materially fuller `book_use` fields, and emitted the reconciliation report for inspection.

## Canonical rules after rebuild

1. The current canonical ledger is `rsd-001`–`rsd-349`.
2. Historical addenda remain provenance and must not be appended again wholesale.
3. New publication-stage evidence should be added only to close a named gap, then reconciled deliberately rather than through another partial merge.
4. Preserve evidence class honestly: archive index, negative-source audit, hypothesis/verification route, retrospective witness, primary official record, and contemporaneous reporting are not interchangeable.
5. Preserve the exact validator schema: `id,year,author_or_institution,title,source_type,book_use,url`.
6. Normalize URLs for identity comparison only; preserve display URLs deliberately.
7. Any future canonical rebuild must inspect its reconciliation report before the ledger is treated as clean.

## Publication principle

The canonical ledger is an evidence index, not a trophy count. The final rebuild therefore prefers a smaller clean set of unique, accurately classified sources over preserving every historical row number. Addenda remain useful as research history after their unique rows have been absorbed.
