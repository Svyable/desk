# Source Ledger Normalization Note

## Canonical baseline and rebuild

The current `source-ledger.csv` was rebuilt deterministically from the 185-row canonical baseline plus staged addenda 16–39 using `rebuild-source-ledger.py` on a real repository checkout.

`source-ledger-rebuild-report.json` records:

- 185 baseline rows;
- 213 staged rows;
- 49 duplicate rows removed after URL normalization;
- 26 materially fuller `book_use` upgrades;
- **349 final canonical rows**;
- highest staged file: `source-ledger-addendum-39.csv`.

The resulting ledger is sequential through `rsd-349`. Historical addendum IDs, which reached `rsd-397`, remain provenance only and do not dictate canonical numbering.

## Research-expansion freeze

The manuscript, epilogue and reader-facing source notes now exist. Broad source expansion is **frozen** unless a specific publication-stage gap requires a targeted source.

Do not create another addendum merely because another generally relevant source can be found. New sourcing should close a named gap: counterpart balance, quote verification, chronology, attribution, or one of the explicitly preserved archival unknowns.

## Deterministic rebuild implementation

The executable procedure lives at `books/red-sox-diplomacy/research/rebuild-source-ledger.py`.

The rebuild uses complete corpus reconciliation rather than conversational hand-merging. It normalizes stable URL identity, preserves the earliest source record, upgrades only materially fuller `book_use` fields, reassigns canonical IDs sequentially, validates required fields and normalized-URL uniqueness, and emits the reconciliation report for inspection.

## Canonical rules after rebuild

1. The current canonical ledger is `rsd-001`–`rsd-349`.
2. Historical addenda remain provenance and must not be appended again wholesale.
3. New publication-stage evidence should be added only to close a named gap, then reconciled deliberately rather than through another partial merge.
4. Preserve evidence class honestly: archive index, negative-source audit, hypothesis/verification route, retrospective witness, primary official record, and contemporaneous reporting are not interchangeable.
5. Preserve the exact validator schema: `id,year,author_or_institution,title,source_type,book_use,url`.
6. Normalize URLs for identity comparison only; preserve display URLs deliberately.
7. Any future canonical rebuild must inspect its reconciliation report before the ledger is treated as clean.

## Publication principle

The canonical ledger is an evidence index, not a trophy count. The final rebuild prefers a smaller clean set of unique, accurately classified sources over preserving every historical row number. Addenda remain useful as research history after their unique rows have been absorbed.
