# binder

Sven Benson's **private binder** in a
[Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md)
setup. This repository is the private Git working room; its Binder Reader is an
intentionally public preview of the manuscripts being written here.

The public shelf is [Svyable/shelf](https://github.com/Svyable/shelf). Binder
and Shelf are separate Git repositories with separate histories. A release
copies a committed book snapshot from Binder into Shelf; after release the two
copies are independent until the next release.

The software is [Bookself](https://github.com/Svyable/bookself).

**Binder Reader — working drafts:** [svyable.github.io/binder/reader](https://svyable.github.io/binder/reader/)  
**Shelf Reader — released editions:** [svyable.github.io/shelf/reader](https://svyable.github.io/shelf/reader/)  

The repository itself remains private on GitHub, but the Pages site is public.
This is deliberate: when Pages is served from `main` / root, files committed to
the Pages source can also be reachable by their Pages URLs. Do not put secrets,
credentials, or anything that must remain confidential in this Binder.

## The books

| Book | Authors | Status | Binder preview | Shelf edition |
|---|---|---|---|---|
| [Leveraging Luck](books/leveraging-luck/) | @svyable | Revision in progress | [Read working draft](https://svyable.github.io/binder/reader/#/b/leveraging-luck/) | [Read released edition](https://svyable.github.io/shelf/reader/#/b/leveraging-luck/) |
| [The Exponentiality](books/the-exponentiality/) | @svyable | Not yet drafted | [Open Binder preview](https://svyable.github.io/binder/reader/#/b/the-exponentiality/) | Not released |
| [The Unbounding](books/the-unbounding/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/binder/reader/#/b/the-unbounding/) | Not released |
| [The Convergence](books/the-convergence/) | @svyable | Drafting | [Read working draft](https://svyable.github.io/binder/reader/#/b/the-convergence/) | Not released |

## The simple workflow

**Write → Preview → Release.**

Write and revise under `books/<slug>/` in Binder. The public Binder Reader shows
the current working version. The Shelf keeps the deliberately released edition
unchanged until the next release.

### Public Binder preview

The public working-draft Reader is:

- `https://svyable.github.io/binder/reader/`

Direct book links use:

- `https://svyable.github.io/binder/reader/#/b/<slug>/`

The small `reader/` bootstrap reuses the shared Reader UI already served by the
public Svyable Shelf, while content paths resolve against this Binder Pages site.
Binder status remains `Drafting`, `Complete draft`, or `Revision in progress`;
the preview does **not** turn a Binder manuscript into a released Shelf edition.

This preview is branch-served static Pages. It does not require a GitHub Actions
workflow, build artifact, or hosted deployment job.

### Preview locally

You can also serve the repository locally:

```bash
python3 -m http.server
```

Open:

- `http://127.0.0.1:8000/reader/`

For a fully copied local Bookself UI, `scripts/bootstrap-ui.sh ../bookself` can
synchronize `reader/` and `desk/` from a sibling Bookself checkout. Review that
change before committing because it replaces the lightweight Reader bootstrap.

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

The public Binder Reader is only the live working preview; it is not part of the
release transaction. `scripts/promote-book.sh` remains the lower-level copy-only
command and does not publish or create a live Binder ↔ Shelf link.

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
