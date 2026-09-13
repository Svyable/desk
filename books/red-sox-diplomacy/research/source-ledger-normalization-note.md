# Source Ledger Normalization Note

## Canonical baseline

`source-ledger.csv` was rebuilt from the prior canonical file plus historical addenda 02–15.

Current canonical baseline:

- 185 rows after the header;
- canonical IDs `rsd-001` through `rsd-185`;
- one row per exact source URL;
- historical addendum ID collisions removed;
- validator schema preserved exactly: `id,year,author_or_institution,title,source_type,book_use,url`.

Canonical IDs after this rebuild supersede row IDs inside addenda 02–15. Those addenda are provenance/history, not an alternate canonical index.

## Addendum 16

`source-ledger-addendum-16.csv` contains 20 post-normalization sources with IDs `rsd-186` through `rsd-205`.

At creation time these URLs were checked against the 185-row canonical baseline and are intended to append directly, subject to a final duplicate check before integration.

Coverage:

- 2025 Harvard post-Beijing interviews;
- September 2026 PBS Burns retrospective on Iraq;
- U.S.-India civil-nuclear primary records and Evan Feigenbaum oral history;
- Iran 2006 U.S. policy shift and Burns testimony;
- Iranian/UN, Security Council, European, independent nonproliferation and IAEA records.

## Addendum 17 reconciliation

`source-ledger-addendum-17.csv` was created after the canonical rebuild and contains both refined duplicate entries and genuinely new archive-index sources.

### Duplicate URLs already canonical

Do **not** append these as new canonical rows:

| Addendum 17 ID | Existing canonical ID | Source |
|---|---:|---|
| `rsd-206` | `rsd-002` | State Daily Press Briefing — June 4 1997 |
| `rsd-207` | `rsd-014` | Atlantic Council / Chicago Council Burns transcript |
| `rsd-208` | `rsd-140` | State Magazine Q&A with Burns |
| `rsd-209` | `rsd-021` | HKS 2024 graduation-address announcement |
| `rsd-210` | `rsd-015` | Davidson student witness |
| `rsd-211` | `rsd-169` | Dick Bresciani / Red Sox institutional biography |

The addendum versions sometimes have sharper `book_use` descriptions. During a later editorial ledger pass, those descriptions may be folded into the existing canonical rows without changing source identity.

### New URLs from addendum 17

After addendum 16 is merged, assign these the next canonical IDs rather than preserving their historical addendum IDs:

| Future canonical ID | Addendum 17 ID | Source |
|---|---:|---|
| `rsd-206` | `rsd-212` | Fenway Park Living Museum — General Managers |
| `rsd-207` | `rsd-213` | Fenway Park Timeline 2000–2009 |
| `rsd-208` | `rsd-214` | State Bureau of European and Eurasian Affairs remarks index — 2004 |
| `rsd-209` | `rsd-215` | NATO Press Releases 2004 |
| `rsd-210` | `rsd-216` | NATO Speeches 2004 |

These are primarily archival-route or negative-source-audit records. They should remain labeled as such and must not be converted into positive evidence about Burns's whereabouts or behavior.

## Next canonical merge

When book-local research stabilizes enough to run Desk validation:

1. Start from canonical `rsd-001`–`rsd-185`.
2. Append unique addendum 16 rows as canonical `rsd-186`–`rsd-205`.
3. Append the five unique addendum 17 URLs as canonical `rsd-206`–`rsd-210`.
4. Re-check URL uniqueness across all 210 rows.
5. Validate the exact CSV schema.
6. Treat all addendum IDs as historical after the merge.

Do not merge duplicate rows merely because their `book_use` wording is more specific. Update the existing canonical row instead if that wording materially improves the ledger.