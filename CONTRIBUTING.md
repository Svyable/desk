# Contributing

Thank you for helping. There are two ways in. Pick the one that matches how
you like to work.

## Two ways to contribute

### 1. Propose an edit (pull request)

Change the Markdown, then open a pull request. This is the path for editors
and co-authors. See [the editor guide](docs/editor-guide.md) for the
branch → edit → PR walkthrough.

If you have never used GitHub, you can still propose an edit from the
browser. See [the author guide](docs/author-guide.md).

This repository is the private Desk in a
[Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md)
setup. Publishing to the street happens on
[Svyable/shelf](https://github.com/Svyable/shelf), not here.

### 2. File an issue

If you spotted something and do not want to touch the text yourself, open an
issue. Use **Chapter feedback** for a specific passage, or **New book
proposal** to pitch a book before anyone scaffolds it.

## One chapter per pull request

A pull request should touch one chapter file (or front/back matter), plus the
book README only when the table of contents or status needs to match.

Do not bundle unrelated chapters, repo-wide reformats, or tooling changes
into a chapter PR.

## Direct-to-main for lead authors

The people named as authors on a book's README may commit directly to `main`
for that book — small fixes should not need ceremony. Everyone else uses a
pull request.

If you are a lead author editing someone else's book, still open a PR.

## Review expectations

- Reviews happen as line comments on the manuscript, not as a separate essay.
- Preserve the author's voice. Fix what was asked; do not rewrite the page.
- The lead author of that book merges.
- Check that the book README's contents list and status still match reality
  before merging.

## Keeping the Desk catalog current

The root `README.md` is the Reader's book catalog. When a book is added,
renamed, or removed, update its `## The books` row and the **Book** dropdown in
`.github/ISSUE_TEMPLATE/chapter-feedback.yml` in the same change.

The public landing page derives its catalog from the root README. `llms.txt`
and `sitemap.xml` are the corresponding machine-discovery inventories.

Before finishing a book-structure or catalog change, run:

```bash
python3 scripts/check-desk.py
```

The check uses only Python's standard library and local repository files. It
verifies that the real `books/` directories, Reader catalog routes, feedback
dropdown, landing page, `llms.txt`, sitemap, and Reader compatibility guard are
consistent. It does not use GitHub Actions or network access.
