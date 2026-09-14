# Source Ledger Normalization Note

The canonical `source-ledger.csv` has been rebuilt deterministically from the 185-row baseline plus staged addenda 16–39 using `rebuild-source-ledger.py` on a real repository checkout.

`source-ledger-rebuild-report.json` records 185 baseline rows, 213 staged rows, 49 duplicate rows removed after URL normalization, 26 materially fuller `book_use` upgrades, and **349 final canonical rows**. The highest staged file is `source-ledger-addendum-39.csv`.

The resulting ledger is sequential through `rsd-349`. Historical addendum IDs, which reached `rsd-397`, remain provenance only.

## Standing rules

Broad research expansion is frozen unless a specifically named publication-stage gap requires a targeted source.

The canonical ledger is an evidence index, not a trophy count. Historical addenda must not be appended wholesale again. New evidence should be reconciled deliberately, preserve evidence class honestly, retain the exact validator schema, normalize URLs only for identity comparison, and produce an inspected reconciliation report before any future canonical rebuild is treated as clean.
