# binder

Sven Benson's **private binder** in a
[Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md)
setup. This repository is the private writing room. Drafts, experiments, and
the next revision of a published book stay here until they are deliberately
released.

The public shelf is [Svyable/shelf](https://github.com/Svyable/shelf). Binder
and Shelf are separate Git repositories with separate histories. Shelf does
**not** point into this private repository. A release copies a committed book
snapshot into Shelf, verifies the copy, and then the two copies are independent
until the next release.

The software is [Bookself](https://github.com/Svyable/bookself).
The public reader is [svyable.github.io/shelf/reader](https://svyable.github.io/shelf/reader/).

## The books

| Book | Authors | Status |
|---|---|---|
| [Leveraging Luck](books/leveraging-luck/) | @svyable | Drafting |
| [The Exponentiality](books/the-exponentiality/) | @svyable | Not yet drafted |
| [The Unbounding](books/the-unbounding/) | @svyable | Complete draft |

## The simple workflow

**Write → Preview → Release.**

Write and revise under `books/<slug>/` in this private Binder. Keep the public
Shelf copy unchanged while a new edition is in progress.

### Preview locally — no Actions required

Bookself preview is local static software. It does not need GitHub Actions,
Pages on this private repository, a hosted runner, or a build artifact.

This particular Svyable Binder predates the rule that stamped Binder instances
include `reader/` and `desk/` automatically. Bootstrap those shared directories
once from a sibling Bookself checkout:

```bash
scripts/bootstrap-ui.sh ../bookself
```

That command delegates to Bookself's `scripts/sync-ui.sh`, copies only
`reader/` and `desk/`, and leaves manuscripts and Binder identity alone. Review
and commit the copied UI here. New binders created with current
`stamp-instance.sh` already include the shared UI and do not need this migration.

Then preview entirely on the local machine:

```bash
python3 -m http.server
```

Open:

- `http://127.0.0.1:8000/reader/`
- `http://127.0.0.1:8000/desk/`

### Release locally

When a revision is ready, commit it here first, then prepare the public release:

```bash
scripts/release-book.sh <slug> ../shelf
```

The release command runs locally with Git and Python's standard library. It
refuses uncommitted book changes and dirty Shelf release paths. It prepares the
Shelf copy with `Status: Published`, adds or updates the Shelf catalog row,
verifies the copied publication files against this committed Binder snapshot,
and stops before commit or push so the public diff can be reviewed.

No private-repository GitHub Actions run is part of this path. A pull request or
CI check can be used for review when useful, but Bookself does not require one
to release a book.

`scripts/promote-book.sh` is the lower-level copy-only command. It does not
publish and does not create a live Binder ↔ Shelf link.

For the full revision model, see
[Revising a published book](https://github.com/Svyable/bookself/blob/main/docs/revisions.md).

## How to take part

| If you are… | Start here |
|---|---|
| New to GitHub | [Author guide](docs/author-guide.md) |
| Running binder + shelf | [Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md) |
| Comfortable with pull requests | [Editor guide](docs/editor-guide.md) |
| Starting a new book | [Book anatomy](docs/book-anatomy.md) |
| An AI agent | [AGENTS.md](AGENTS.md) |

## License

The framework (everything outside `books/`) is MIT. Book manuscripts remain
copyright of their authors. See [LICENSE](LICENSE).
