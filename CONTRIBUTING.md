# Contributing

Thank you for helping. There are two ways in. Pick the one that matches how
you like to work.

## Two ways to contribute

### 1. Make or propose an edit

Authorized authors, repository owners, and agents working on an explicitly
assigned Desk task may commit routine reversible changes directly. Use a pull
request when isolation or review is useful: overlapping work, broad or risky
changes, cross-book/global changes, tooling changes, or publication/release work.
See [the editor guide](docs/editor-guide.md) for both paths.

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

## Direct-to-main for routine Desk work

A commit on the Desk is a reversible working save point, not publication.
Repository owners, authors named on a book's README, and agents explicitly
authorized for the current Desk task may commit routine, coherent, reversible
changes directly to `main` when there is no known overlap with concurrent work.

Use a pull request when the change is broad, risky, cross-book, touches shared
tooling or global catalog surfaces, overlaps active work, or crosses a
publication/release boundary. External contributors without write authorization
should still propose changes through a branch or fork.

Intermediate commits may be unfinished. Run the checks required for the state
you are actually claiming before calling the work complete or release-ready.

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
