# AGENTS.md

Rules for AI agents working in this repository.

## Scope

- Do only what was asked. Do not rewrite neighboring chapters, "clean up"
  prose, or reformat files you were not told to touch.
- One chapter per pull request. If a task spans books or chapters, stop and
  split the work.
- When you add, rename, or remove a chapter, update that book's README
  table of contents and the Chapters count in the same change.
- When you add a book, add its slug to the Book dropdown in
  `.github/ISSUE_TEMPLATE/chapter-feedback.yml` in the same change.

## Binder / Shelf boundary

This repository is the **private Binder**. It contains drafts and the next
working edition of books that may already have an older edition on the public
Shelf.

Binder and Shelf are separate Git repositories. The Shelf does not reference or
read this repository at runtime. Releasing a book copies a committed snapshot
from Binder into Shelf; after release the copies are independent until the next
release.

Normal direction of manuscript flow is **Binder → Shelf**, never a two-way sync.
Shared `reader/` and `desk/` UI is copied separately from the Bookself platform.

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
- Do not add a build step, GitHub Pages, CODEOWNERS, or branch protection
  unless a human asked for that by name.
- Do not commit secrets or credentials.
- Do not enable GitHub Pages on this binder unless a human asked.
- Do not copy unpublished books into the public shelf unless a human asked to
  **release** that title.
- Do not mark the Binder copy `Published`; `Published` is a Shelf state.

## Verbs (author and agent)

**Start a book.** Copy `books/_TEMPLATE/` to `books/<slug>/`. Fill title,
authors, `Status: Drafting`. Add the slug to the chapter-feedback dropdown.

**Write / edit.** One chapter file per change. If you add, rename, or remove
a chapter, update that book's README TOC and Chapters count in the same
change.

**Preview.** Serve this Binder locally and use `reader/#/b/<slug>/` and
`desk/`. Do not make the Binder public just to obtain a preview URL.

**Release (Bookself).** Commit the publication in Binder first, then run
`scripts/release-book.sh <slug> ../shelf`. The command refuses uncommitted
publication changes and dirty Shelf release paths, verifies Binder/Shelf roles,
prepares an exact replacement Shelf snapshot, sets the Shelf copy to
`Published`, updates the Shelf catalog row, verifies copied publication files
against the committed Binder snapshot, and stops before commit or push. Review
and land the resulting change in the Shelf repository.

**Promote / copy only.** `scripts/promote-book.sh <slug> ../shelf` is the
lower-level file-copy operation. It does not publish, verify the release, or
create a live Binder ↔ Shelf relationship. Prefer **Release** normally.

**Publish.** Not on this Binder. Release to Shelf first.

**Revise a published book.** Revise this Binder copy while the current Shelf
edition stays unchanged. Commit the Binder revision and Release it when ready.

**Unpublish.** Reverse the publication state on Shelf. Deleting the Binder copy
is optional and separate.

See https://github.com/Svyable/bookself/blob/main/docs/revisions.md for the
canonical revision and release model.
