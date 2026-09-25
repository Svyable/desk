# Editor guide

This is the path if you are comfortable editing the repository directly.
Routine authorized Desk work can be committed straight to `main`; branches and
pull requests are available when isolation, coordination, or review adds value.

If you have never used GitHub, start with the [author guide](author-guide.md)
instead.

## Choose the lightest workflow that fits

For routine reversible work on a book you are authorized to edit, make the
change, review the diff, and commit it. A direct commit is a save point; it is
not publication and it does not need a pull request merely for ceremony.

Use a branch and pull request when the change is broad, risky, concurrent,
cross-book, touches shared tooling or global catalog surfaces, crosses a
publication/release boundary, or benefits from an isolated reviewable diff. A
branch name such as `book/example-book-ch02-05` or
`fix/example-book-ch02-typos` is sufficient.

Whether direct or through a PR, keep each change coherent. If the table of
contents must change to match added, renamed, or removed chapters, edit the
book's `README.md` in the same finished change. Intermediate checkpoint
commits may precede the final cleanup and checks.

A PR may contain one chapter, several related chapters, or a whole-book writing
pass. Prefer the largest scope that remains coherent and reviewable. Do not
combine unrelated books or unrelated tooling changes merely to reduce PR count.
Book-specific automation may deliberately use a narrower batch size.

## Editorial work before line polish

Use [the prose authoring standard](prose-authoring-standard.md) to review the
book's promise, progression, evidence, and voice. Diagnose the largest problem
before editing individual sentences. A structural pass may cut or move material;
a sentence pass should not conceal an argument that remains unfinished.

For substantial work, identify the passages that demonstrate the problem and
explain how the proposed change improves the reading experience. Preserve
unusual phrasing that works. Distinguish a factual correction, a structural
necessity, and a matter of taste. Use the existing research/review notes for
substantial editorial findings; a focused PR description suffices for small work.

Read changed chapters with their neighbors. Check repeated explanations,
examples, definitions, time references, and promises the later chapters must
fulfill. For a release candidate, read the entire manuscript and follow
[the release method](release-method.md); a favorable sample is not a whole-book
review. Exploratory drafts may retain clearly identified open questions.

## Keeping the chapter-feedback book list current

`.github/ISSUE_TEMPLATE/chapter-feedback.yml` has a dropdown of books.
GitHub will not update it for you.

When you add a book:

1. Copy `books/_TEMPLATE/` to `books/<slug>/`.
2. In the same PR, add a new option under the `book` dropdown in
   `chapter-feedback.yml`. The option text is the slug, for example
   `leveraging-luck`.
3. Put `_TEMPLATE` last, so real books sit above the example.

When you retire a book, remove its option in the same PR that removes the
folder.

## Publishing happens on the Shelf

This is the private Desk. Do not treat Status `Published` here as a public
catalog. Commit the Desk publication and prepare the release with
`scripts/release-book.sh <slug> ../shelf`. The helper verifies the Desk/Shelf
roles, prepares the public snapshot and catalog update, and stops before commit
or push so the Shelf diff can be reviewed. See
[Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md).

## Line-comment reviews

Review the manuscript, not the idea of the book, unless the PR is a new-book
proposal.

- Comment on the line that needs to change.
- Use GitHub's suggested-change feature when you have replacement text.
- Do not demand a voice that is not already on the page.
- If the TOC or chapter count in the book README is stale, say so and block
  merge until it is fixed.

## Landing etiquette

- Direct commits are acceptable for authorized routine Desk work.
- When a PR is used, merge it once its actual required checks and conflict state
  are satisfactory; do not add review ceremony solely because a PR exists.
- Do not squash away a carefully written chapter history unless there is a good
  reason. A regular merge or a squash of noisy fixups is fine.
- After landing a finished structural change, confirm the live README contents
  list still matches the files in `manuscript/`.
- Do not enable branch protection or CODEOWNERS as part of ordinary editing.
