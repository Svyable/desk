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

## Manuscript scope per pull request

A pull request may touch one chapter, a coherent run of chapters, front/back
matter, or an entire book when that is the task. Size is not the governing
rule; coherence is.

Keep a manuscript PR focused on one book unless the task explicitly spans
books. Batch chapters when they belong to the same writing pass or argument,
and keep the book README's table of contents and drafted count synchronized in
the same change.

Do not bundle unrelated prose, repo-wide reformats, drive-by cleanup, or
unrelated tooling changes into a manuscript PR. Book-specific automation may
set a narrower scope for its own runs; those local rules do not impose a
global one-chapter cap on the Desk.

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
