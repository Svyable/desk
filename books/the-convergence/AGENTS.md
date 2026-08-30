# AGENTS.md

Additional rules for work on **The Convergence**. The repository-root `AGENTS.md` still applies.

## Research source records

- Treat `research/source-ledger.csv` as the legacy aggregate. Do not append new rows to it.
- For each new source, add one JSON file under `research/sources/` instead. Independent sources must live in independent files so concurrent research PRs do not contend on one ledger.
- Use a stable lowercase filename derived from the source, for example `doi-10.3386-w32041.json` or `iea-global-energy-review-2026.json`. The filename stem is the source ID.
- Each source JSON object must contain exactly: `year`, `author_or_institution`, `title`, `source_type`, `book_use`, and `url`.
- Prefer a DOI-based filename when a DOI exists. A duplicate URL or duplicate source ID is an integrity error.
- Run `python3 scripts/check-desk.py` before finishing research changes.

Example:

```json
{
  "year": 2026,
  "author_or_institution": "Jonathan M. Colmer, David Lagakos, and Martin Shu",
  "title": "Is the Electricity Sector a Weak Link in Development?",
  "source_type": "Original empirical and quantitative working paper",
  "book_use": "Chapter 4 counterevidence on electricity as a universal development bottleneck",
  "url": "https://doi.org/10.3386/w32041"
}
```
