# AGENTS.md

Rules for AI agents working in this repository.

## Scope

- Do only what was asked. Do not rewrite neighboring chapters, "clean up"
  prose, or reformat files you were not told to touch.
- One chapter per pull request. If a task spans books or chapters, stop and
  split the work. This does not apply to a task that explicitly asks for an
  entire new book in one pass (a scheduled or automated full-book drop); that
  case is scoped instead by `docs/book-brief-standard.md`, which sets the
  minimum length and chapter count such a run should hit.
- When you add, rename, or remove a chapter, update that book's README
  table of contents and the Chapters count in the same change.
- When you add a book, add its slug to the Book dropdown in
  `.github/ISSUE_TEMPLATE/chapter-feedback.yml` in the same change.

## Desk / Shelf boundary

This repository is the **private Desk**. It contains drafts and the next
working edition of books that may already have an older edition on the public
Shelf.

The GitHub repository is `Svyable/desk`, and its GitHub Pages project path is
`/desk/`. The repository name and public Pages path now match this instance's
Bookself role.

The Git repository stays private, but this Svyable instance has a
**human-approved public Desk Reader** served with GitHub Pages. The Pages
preview is intentionally a working-in-public surface. Do not assume committed
Desk material is confidential merely because the GitHub repository is private.
Never commit secrets, credentials, or material that must remain private.

Desk and Shelf are separate Git repositories. Releasing a book copies a
committed snapshot from Desk into Shelf; after release the copies are
independent until the next release.

Normal direction of manuscript flow is **Desk → Shelf**, never a two-way sync.
Shared Reader UI may be synchronized from the Bookself platform; the lightweight
Desk Reader bootstrap may also reuse the public Shelf Reader UI at runtime.

## Local-first invariant

This Desk must remain fully usable with **zero GitHub Actions minutes**.
Writing, local preview, release preparation, and recovery must not depend on
hosted CI/CD, Actions runners, build artifacts, or deployment jobs.

The public Desk Reader is branch-served static Pages and is an optional
convenience surface, not a prerequisite for writing or releasing. The normal
release helper runs locally with Git and Python's standard library.

## Voice

- For book, essay, narrative, or other voice-sensitive prose tasks, read and apply
  `.agents/skills/human-prose/SKILL.md` before drafting, reviewing, or editing.
- Preserve the author's voice, tense, and rhythm. Match the surrounding
  sentences, not a house style you brought with you.
- Do not substitute synonyms "for clarity" unless the author asked for that.
- Do not add headings, lists, or emphasis the surrounding chapter does not
  already use.

## Markdown

- Chapters are a single `# Title` heading, then paragraphs. No YAML front
  matter. No HTML comments in chapter files.
- Book READMEs are an info table plus a checkbox table of contents. No YAML
  front matter.
- Follow existing naming: `books/<slug>/`, `chNN-slug.md`, `front-matter.md`,
  `back-matter.md`.
- Images live in that book's `media/` folder and are referenced with
  relative links (`![alt](../media/figure-1.png)`).

## Do not

- Do not touch `LICENSE` or change licensing without the repository owner's
  explicit approval.
- Do not reformat a file wholesale (line wrapping, heading levels, quote
  style) as a drive-by.
- Do not add a build step, CODEOWNERS, branch protection, or an Actions-based
  preview workflow unless a human asks for it by name.
- Do not make writing, preview, or release depend on GitHub Actions, hosted CI,
  or paid automation minutes.
- Do not commit secrets or credentials.
- Do not remove, privatize, broaden, or otherwise change the human-approved
  Desk Pages exposure model unless a human asks.
- Do not copy unpublished books into the public Shelf unless a human asked to
  **release** that title.
- Do not mark the Desk copy `Published`; `Published` is a Shelf state.

## Verbs (author and agent)

**Start a book.** Copy `books/_TEMPLATE/` to `books/<slug>/`. Fill title,
authors, `Status: Drafting`. Add the slug to the chapter-feedback dropdown.

**Write / edit.** One chapter file per change. If you add, rename, or remove
a chapter, update that book's README TOC and Chapters count in the same
change.

**Preview.** The public working preview is
`https://svyable.github.io/desk/reader/`; a direct book route is
`reader/#/b/<slug>/`. Desk drafts remain drafts in this Reader. Local preview
is also supported with `python3 -m http.server` from the repository root. The
committed lightweight Reader bootstrap reuses shared public Reader assets; if a
fully copied local UI is needed, `scripts/bootstrap-ui.sh ../bookself` can
replace/synchronize `reader/` and `desk/` from a sibling Bookself checkout.

**Release (Bookself).** Commit the publication on Desk first, then run
`scripts/release-book.sh <slug> ../shelf`. The command runs locally; it does not
require GitHub Actions. It refuses uncommitted book changes and dirty Shelf
release paths, verifies Desk/Shelf roles, prepares an exact replacement Shelf
snapshot, sets the Shelf copy to `Published`, updates the Shelf catalog row,
verifies copied publication files against the committed Desk snapshot, and
stops before commit or push. Review and land the resulting change in the Shelf
repository with normal Git; a PR is optional to Bookself itself.

**Promote / copy only.** `scripts/promote-book.sh <slug> ../shelf` is the
lower-level file-copy operation. It does not publish, verify the release, or
create a live Desk ↔ Shelf relationship. Prefer **Release** normally.

**Publish.** Not on this Desk. Release to Shelf first.

**Revise a published book.** Revise this Desk copy while the current Shelf
edition stays unchanged. Commit the Desk revision and Release it when ready.

**Unpublish.** Reverse the publication state on Shelf. Deleting the Desk copy
is optional and separate.

See https://github.com/Svyable/bookself/blob/main/docs/revisions.md for the
canonical revision and release model.
