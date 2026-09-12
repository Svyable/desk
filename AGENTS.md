# AGENTS.md

Rules for AI agents working in this repository.

## Scope

- Do only what was asked. Do not rewrite neighboring chapters, "clean up"
  prose, or reformat files you were not told to touch.
- A pull request may contain one chapter, a coherent run of chapters, or an
  entire book when that is the requested writing scope. Keep manuscript work
  scoped to one book unless the task explicitly spans books. Prefer batching
  chapters that belong to the same writing pass or argument; do not bundle
  unrelated prose, tooling changes, or drive-by cleanup merely to reduce PR
  count. Book-specific automation may define a narrower batch size for its own
  runs.
- Automated full-book drops are additionally scoped by
  `docs/book-brief-standard.md`, which sets the minimum length and chapter count
  such a run should hit.
- When you add, rename, or remove chapters, update that book's README table of
  contents and the Chapters count in the same change.
- When you add, rename, or remove a book, keep the root README catalog and the
  Book dropdown in `.github/ISSUE_TEMPLATE/chapter-feedback.yml` synchronized,
  then run `python3 scripts/check-desk.py` before finishing.

## Desk / Shelf boundary

This repository is the **Desk**. It contains drafts and the next working
edition of books that may already have an older edition on the public Shelf.

The GitHub repository is `Svyable/desk`, and its GitHub Pages project path is
`/desk/`. `desk` is the instance name and its Bookself role is **Desk**.

The Git repository stays private by policy where supported, but this Svyable
instance has a **human-approved public Desk Reader** served with GitHub Pages.
The Pages preview is intentionally a working-in-public surface. Do not assume
committed Desk material is confidential merely because repository visibility
may be restricted. Never commit secrets, credentials, or material that must
remain private.

Desk and Shelf are separate Git repositories. Releasing a book copies a
committed snapshot from Desk into Shelf; after release the copies are
independent until the next release.

Normal direction of manuscript flow is **Desk → Shelf**, never a two-way sync.
Shared Reader runtime code comes from the Bookself platform and is copied into
this repository by the local Desk sync contract. Do not make Desk execute Reader
code from Shelf, and do not use Shelf as a runtime source for Desk-owned or
Bookself-owned modules.

Shelf is not a Bookself mirror. Bookself framework updates and Desk → Shelf
publication releases are separate operations with separate ownership rules.

## Local-first invariant

This Desk must remain fully usable with **zero GitHub Actions minutes**.
Writing, local preview, release preparation, integrity checks, and recovery must
not depend on hosted CI/CD, Actions runners, build artifacts, or deployment
jobs.

Read-only CI may verify release helpers and invariants, but it is optional
verification rather than part of the publishing mechanism. The public Desk
Reader is branch-served static Pages and is an optional convenience surface,
not a prerequisite for writing or releasing. The normal release helper and
`scripts/check-desk.py` run locally with Python's standard library.

## Voice and prose quality

- For book, essay, narrative, or other voice-sensitive prose tasks, read and apply
  `.agents/skills/human-prose/SKILL.md` **and** `docs/prose-authoring-standard.md`
  before drafting, reviewing, or editing.
- The prose standard is an authoring requirement, not merely a cleanup rubric.
  Do not knowingly hand downstream a draft full of problems that a later
  anti-slop pass is expected to repair.
- For new books and substantial expansions, establish the reader promise,
  distinct contribution, competing explanation, and chapter progression before
  drafting. Use the planning and revision guidance in the prose standard.
- Revise structure and evidence before line polish. Calibrate voice against
  passages that work in this book, and let form follow the subject. Preserve
  useful roughness in explicitly exploratory work; identify unresolved gaps.
- For release candidates, read the whole manuscript and record specific
  editorial evidence in the existing review notes. Passing length, metadata,
  or style checks does not establish literary quality or authorize release.
- Preserve the author's voice, tense, rhythm, judgment, and useful
  idiosyncrasies. Match the surrounding manuscript, not a house style you
  brought with you.
- Draft chapters as developed prose, not outlines expanded sentence by
  sentence. Combine adjacent choppy lines and one-sentence paragraphs when they
  are fragments of the same thought. Paragraph breaks should mark a real change
  in idea, pressure, time, speaker, scene, or argumentative function.
- Build narrative movement even in analytical nonfiction. Prefer concrete
  event, mechanism, decision, document, person, or constraint before abstraction;
  let pressure and consequence earn the principle. Do not invent scenes,
  dialogue, motives, sensory detail, or biography to create drama.
- Use fewer examples more deeply. Do not turn chapters into catalogs of famous
  cases, risks, policy options, rhetorical questions, or near-synonymous
  considerations. A list is justified only when the categories themselves are
  useful.
- Control repetition across the book. Before drafting, know what earlier
  chapters have already established. When a theme recurs, advance it with a new
  mechanism, exception, cost, actor, case, or consequence rather than
  rediscovering the same lesson.
- Avoid canned symmetry and synthetic gravitas: repeated `not X but Y`
  constructions, stacked triads, strings of short declarative sentences,
  question inventories, presentation voice, generic reveals, and aphorisms used
  as scaffolding. Em dashes are punctuation, not an automatic rhythm engine.
- Earn endings. Do not close every section or chapter by restating the thesis,
  issuing a policy checklist, previewing the next chapter like a presentation,
  or stamping a polished slogan onto material that has already landed.
- Preserve uncertainty where the evidence is uncertain. Never invent a quote,
  attribution, statistic, consensus, causal claim, source, or biographical
  detail to make prose feel complete.
- Do not substitute synonyms "for clarity" unless the author asked for that.
- Do not add headings, lists, or emphasis the surrounding chapter does not
  already use.
- Before committing voice-sensitive prose, perform a dedicated anti-slop pass
  and a paragraph pass using `docs/prose-authoring-standard.md`. If the chapter
  still reads like an expanded outline, repeated framework, slide deck, or
  generic model performance, it is not ready.

## Book identity and completion checks

- Follow `docs/book-metadata-standard.md` when starting a book or changing its
  title, subtitle, byline, front matter, or catalog entry. Use Sven Hardy Benson
  as the author and keep the README and title page aligned.
- Run `python3 scripts/check-book-cover-metadata.py <book-slug>` for the affected
  book before handing off manuscript work. For inventory changes, run the global
  cover audit and `python3 scripts/check-desk.py`; the latter includes cover checks.
- Start from the current repository state and inspect relevant changes before
  editing. Preserve concurrent author/editor work rather than replaying an old
  manuscript snapshot over it.
- If a required check fails, distinguish defects introduced by the change from
  failures reproduced on its base revision. Fix new defects; report unrelated
  existing failures accurately. Do not weaken a check or claim a full pass merely
  because a focused check passes.
- Keep PRs mergeable. Use objective checks and the repository's existing merge
  rules; enable automatic merging when supported and authorized. Do not add a
  human-review blocker solely as a workflow ritual or bypass required checks.

## Markdown

- Chapters are a single `# Title` heading, then paragraphs. No YAML front
  matter. No HTML comments in chapter files.
- Manuscript formatting is prose-first. Do not simulate subheads with bold lead
  phrases, turn short sentences into visual lists, or use typography to create
  importance the prose has not earned.
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
- Do not make writing, preview, integrity checking, or release depend on GitHub
  Actions, hosted CI, or paid automation minutes.
- Do not commit secrets or credentials.
- Do not remove, privatize, broaden, or otherwise change the human-approved
  Desk Pages exposure model unless a human asks.
- Do not copy unpublished books into the public Shelf unless a human asked to
  **release** that title.
- Do not mark the Desk copy `Published`; `Published` is a Shelf state.
- Do not hand-edit Shelf manuscript bytes as a substitute for the release
  transaction. Shelf substantive changes must retain a committed Desk source.

## Verbs (author and agent)

**Start a book.** Copy `books/_TEMPLATE/` to `books/<slug>/`. Fill title,
authors, `Status: Drafting`, and the matching title-page opening. Follow
`docs/book-metadata-standard.md` for inventory updates and validation.

**Write / edit.** Write or edit the chapter files requested by the task. A
change may contain one chapter or a coherent batch. Before drafting, read enough
surrounding manuscript to know the current voice, argument, recurring examples,
and what earlier chapters have already earned. Use the project's research where
it exists rather than filling gaps with unsupported general knowledge. Draft
for argument and narrative movement, then perform the required anti-slop and
paragraph passes before committing. If you add, rename, or remove chapters,
update that book's README TOC and Chapters count in the same change. Keep
unrelated prose and tooling out of the batch.

**Check Desk.** Run `python3 scripts/check-desk.py`. It verifies that real book
folders, Reader catalog rows, direct Reader slugs, the feedback dropdown, and
the Desk Reader compatibility guard agree. It requires no network access.

**Preview.** The public working preview is
`https://svyable.github.io/desk/reader/`; a direct book route is
`reader/#/b/<slug>/`. Desk drafts remain drafts in this Reader. Local preview
is also supported with `python3 -m http.server` from the repository root. To
refresh this Desk from a sibling Bookself checkout, run
`scripts/sync-bookself.sh ../bookself`. That is the public Bookself update
command for humans and agents. It copies Bookself-owned Reader runtime files
into `reader/` while preserving Desk-owned shell, identity, adapters, books,
catalog/release state, and the `/desk/` authoring UI. Review the resulting diff
and commit it in this repository; no hosted build is involved.

**Release (Bookself).** Commit the publication on Desk first, then run
`scripts/release-book.sh <slug> ../shelf`. The command runs locally; it does not
require GitHub Actions. It refuses uncommitted book changes and dirty Shelf
release paths, verifies Desk/Shelf roles, prepares an exact replacement Shelf
snapshot, sets the Shelf copy to `Published`, updates the Shelf catalog row,
verifies copied publication files against the committed Desk snapshot, and
writes `books/<slug>/release.json` on Shelf containing the exact Desk commit and
a deterministic digest of the authored payload. It then refreshes Shelf
feedback/publication surfaces and stops before commit or push. Review and land
the resulting change in the Shelf repository with normal Git; a PR is optional
to Bookself itself.

**Promote / copy only.** `scripts/promote-book.sh <slug> ../shelf` is the
lower-level file-copy operation. It does not publish, verify the release, create
release provenance, or create a live Desk ↔ Shelf relationship. Prefer
**Release** normally.

**Publish.** Not on this Desk. Release to Shelf first.

**Revise a published book.** Revise this Desk copy while the current Shelf
edition stays unchanged. Commit the Desk revision and Release it when ready.
The replacement release refreshes the Shelf provenance manifest and payload
digest.

**Live public hotfix.** If a human explicitly requires an immediate Shelf
correction, make the corresponding Desk correction and commit it as the source
of truth, then use the release transaction to refresh Shelf and provenance. Do
not bypass or delete the provenance check to force a manuscript hotfix through.

**Unpublish.** Reverse the publication state on Shelf. Deleting the Desk copy
is optional and separate.

See https://github.com/Svyable/bookself/blob/main/docs/revisions.md for the
canonical revision and release model.
