# Desk integration note

The new book becomes a Desk publication candidate only when the repository-wide discovery surfaces agree with the book folder.

Required synchronized surfaces:

- root `README.md` Desk catalog and summary
- `catalog.json`
- `llms.txt`
- `sitemap.xml`
- `.github/ISSUE_TEMPLATE/chapter-feedback.yml` Book dropdown

The canonical local command is:

```bash
python3 scripts/catalog.py --write
python3 scripts/check-desk.py
```

`catalog.py --write` owns exact manuscript word counts and generated dashboard freshness. Manual edits must not be treated as a substitute for the generator when exact derived values cannot be reproduced from the connected GitHub surface.
