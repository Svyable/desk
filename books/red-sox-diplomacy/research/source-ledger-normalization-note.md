# Source Ledger Normalization Note

The canonical `source-ledger.csv` is rebuilt deterministically from the preserved 185-row `source-ledger-baseline.csv` plus staged addenda using `rebuild-source-ledger.py`. The baseline file is the immutable pre-addendum canonical snapshot, so rebuilds no longer depend on recovering an earlier Git state.

`source-ledger-rebuild-report.json` currently records the last completed rebuild: 185 baseline rows, 214 staged rows through `source-ledger-addendum-39.csv`, 49 duplicate rows removed after URL normalization, 26 materially fuller `book_use` upgrades, 1 audited literal text correction, and **350 final canonical rows**.

The canonical ledger is therefore sequential through `rsd-350`. Historical addendum IDs through `rsd-399` remain provenance only. The single audited text correction fixes `Chuck Samiotis` to `Chuck Samiotes` in the CNN source note without mutating the preserved baseline.

## Newly staged after the last rebuild

`source-ledger-addendum-40.csv` stages four newly verified social-media records (`rsd-400`–`rsd-403`): the September 30, 2023 Beijing Guoan football-match post and its Wikimedia Commons preservation layer, plus the March 30, 2024 Duke Kunshan basketball/student-exchange post and its Commons preservation layer.

A default-branch search found neither originating status ID in the existing canonical corpus, so they are new candidates rather than obvious duplicate aliases. They must still enter `source-ledger.csv` only through the deterministic rebuild and inspected reconciliation report; until that rebuild is run, the canonical count remains 350 rather than being manually incremented.

## Standing rules

Broad research expansion is frozen unless a specifically named publication-stage gap requires a targeted source.

The canonical ledger is an evidence index, not a trophy count. Historical addenda must not be appended wholesale again. New evidence should be reconciled deliberately, preserve evidence class honestly, retain the exact validator schema, normalize URLs only for identity comparison, and produce an inspected reconciliation report before any future canonical rebuild is treated as clean.
