# Source Ledger Normalization Note

The canonical `source-ledger.csv` is rebuilt deterministically from the preserved 185-row `source-ledger-baseline.csv` plus staged addenda 16–39 using `rebuild-source-ledger.py`. The baseline file is the immutable pre-addendum canonical snapshot, so rebuilds no longer depend on recovering an earlier Git state.

`source-ledger-rebuild-report.json` records 185 baseline rows, 214 staged rows, 49 duplicate rows removed after URL normalization, 26 materially fuller `book_use` upgrades, 1 audited literal text correction, and **350 final canonical rows**. The highest staged file is `source-ledger-addendum-39.csv`.

The resulting ledger is sequential through `rsd-350`. Historical addendum IDs, which reached `rsd-399`, remain provenance only. The single audited text correction fixes `Chuck Samiotis` to `Chuck Samiotes` in the CNN source note without mutating the preserved baseline.

## Standing rules

Broad research expansion is frozen unless a specifically named publication-stage gap requires a targeted source.

The canonical ledger is an evidence index, not a trophy count. Historical addenda must not be appended wholesale again. New evidence should be reconciled deliberately, preserve evidence class honestly, retain the exact validator schema, normalize URLs only for identity comparison, and produce an inspected reconciliation report before any future canonical rebuild is treated as clean.
