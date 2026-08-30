# Svyable Desk

> The working room for Svyable books.

**Write here → preview here → release deliberate snapshots to Shelf.**

Desk holds the live working state of each book: manuscripts, research, media,
notes, and revision history. [Shelf](https://github.com/Svyable/shelf) holds
released editions. [Bookself](https://github.com/Svyable/bookself) is the
software and workflow that connects the two.

| Go to | What it is |
|---|---|
| **[Desk Reader](https://svyable.github.io/desk/reader/)** | Working drafts from this repository, when Desk GitHub Pages is enabled |
| **[Shelf Reader](https://svyable.github.io/shelf/reader/)** | Released public editions |
| **[Bookself docs](https://github.com/Svyable/bookself/blob/main/docs/bookself.md)** | The Desk → Shelf model |
| **[Author guide](docs/author-guide.md)** | Start here if you are writing |
| **[Editor guide](docs/editor-guide.md)** | Start here if you are reviewing or editing |
| **[AGENTS.md](AGENTS.md)** | Repository rules for AI agents |

## Reader: what works, what can break

The Desk Reader is a static preview of the manuscripts in this repository. It
reuses the shared Shelf Reader UI, but resolves book content against Desk.
Drafts stay drafts; opening a manuscript in the Desk Reader does not publish it.

There are two separate failure modes worth knowing:

1. **The whole Reader returns 404.** GitHub Pages is not enabled for Desk. In
   GitHub, open **Settings → Pages**, choose **Deploy from a branch**, then
   select **`main` / `/ (root)`**. Because this repository is private, GitHub
   Pages for the repository requires an eligible paid GitHub plan.
2. **The Reader opens, but a book is missing.** The Reader does **not** scan the
   `books/` directory. Its catalog is the `## The books` table in this README.
   Every real `books/<slug>/` directory must have one row in that table.

Direct book routes use this shape:

```text
https://svyable.github.io/desk/reader/#/b/<slug>/
```

If Pages is unavailable, preview locally instead:

```bash
python3 -m http.server
```

Then open `http://127.0.0.1:8000/reader/`.

### Catalog invariant

**This table is executable documentation.** The Reader parses it to discover
books.

When adding or renaming a book:

- keep one row here for every real folder under `books/` except `_TEMPLATE`;
- make the first link in the row point to `books/<slug>/`;
- keep the book's canonical title, author, status, chapter count, and contents
  in that book's own `README.md` rather than duplicating them here;
- use the slug unchanged in the Desk Reader route.

## The books

| Book | Working draft |
|---|---|
| [Aggregate, Consolidate, Innovate](books/aggregate-consolidate-innovate/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/aggregate-consolidate-innovate/) |
| [Artificial Promises](books/artificial-promises/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/artificial-promises/) |
| [Built to Be Alone](books/the-loneliness-dividend/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-loneliness-dividend/) |
| [Exponential Compression](books/exponential-compression/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/exponential-compression/) |
| [Gatekeepers](books/gatekeepers/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/gatekeepers/) |
| [Keep Cooking](books/keep-cooking/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/keep-cooking/) |
| [Leveraging Luck](books/leveraging-luck/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/leveraging-luck/) |
| [Look Alive](books/look-alive/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/look-alive/) |
| [Make Yourself Useful](books/make-yourself-useful/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/make-yourself-useful/) |
| [Predictable](books/predictable/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/predictable/) |
| [Proof of Human](books/proof-of-human/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/proof-of-human/) |
| [Scaling Laws](books/scaling-laws/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/scaling-laws/) |
| [Silent Cartel](books/silent-cartel/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/silent-cartel/) |
| [Single Points of Failure](books/single-points-of-failure/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/single-points-of-failure/) |
| [Source Code](books/source-code/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/source-code/) |
| [Subsidized Intelligence](books/subsidized-intelligence/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/subsidized-intelligence/) |
| [Synthetic Intelligence](books/synthetic-intelligence/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/synthetic-intelligence/) |
| [The Abstraction Trap](books/the-abstraction-trap/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-abstraction-trap/) |
| [The Bureaucracy of Heaven](books/the-bureaucracy-of-heaven/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-bureaucracy-of-heaven/) |
| [The Compatibility Dividend](books/the-compatibility-dividend/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-compatibility-dividend/) |
| [The Convergence](books/the-convergence/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-convergence/) |
| [The Delegation Machine](books/the-delegation-machine/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-delegation-machine/) |
| [The Exponentiality](books/the-exponentiality/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-exponentiality/) |
| [The Potentiality](books/the-potentiality/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-potentiality/) |
| [The Reliability Tax](books/the-reliability-tax/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-reliability-tax/) |
| [The Search Frontier](books/the-search-frontier/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-search-frontier/) |
| [The Unbounding](books/the-unbounding/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-unbounding/) |
| [The Value Stack](books/the-value-stack/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-value-stack/) |
| [The Vanishing Bid](books/the-vanishing-bid/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-vanishing-bid/) |
| [The World Beneath the World](books/the-world-beneath-the-world/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/the-world-beneath-the-world/) |
| [To State the Obvious](books/to-state-the-obvious/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/to-state-the-obvious/) |
| [Useful Noise](books/useful-noise/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/useful-noise/) |
| [Vectors](books/vectors/) | [Read in Desk](https://svyable.github.io/desk/reader/#/b/vectors/) |

## Repository anatomy

Each book is a self-contained project:

```text
books/
  <slug>/
    README.md          ← canonical title, status, chapter count, contents
    manuscript/        ← the book itself
    research/          ← sources and book-specific notes
    media/             ← images and other book assets
```

`books/_TEMPLATE/` is the starting point for a new book and is intentionally
not part of the Reader catalog.

The repository also contains the lightweight `reader/` bootstrap, shared Desk
documentation under `docs/`, and local release helpers under `scripts/`.

## The workflow

```text
                  Svyable Desk                         Svyable Shelf
              ──────────────────                   ──────────────────
idea → research → manuscript → revision → commit → release snapshot → edition
                       ↑                                  │
                  Desk Reader                        Shelf Reader
                 working proof                     released work
```

### 1. Start a book

Copy `books/_TEMPLATE/` to `books/<slug>/`, fill in the book README, and follow
the repository rules in [AGENTS.md](AGENTS.md). Add the new book to **The
books** table above so the Reader can discover it.

For the expected shape of a book, see [Book anatomy](docs/book-anatomy.md).

### 2. Write and revise

Work in `books/<slug>/manuscript/`. Keep the book README's contents and chapter
count synchronized with the manuscript. Desk is the working edition even when
Shelf already contains an older released edition.

### 3. Preview

Use the Desk Reader when Pages is enabled, or serve the repository locally with
`python3 -m http.server`. Previewing is not publishing.

### 4. Release deliberately

Commit the Desk version first, then prepare a Shelf snapshot locally:

```bash
scripts/release-book.sh <slug> ../shelf
```

The release helper validates the Desk/Shelf roles, copies the committed book
snapshot, marks the Shelf copy `Published`, updates the Shelf catalog, verifies
the copy, and stops before commit or push so the public change remains
intentional.

For the revision model, see
[Revising a published book](https://github.com/Svyable/bookself/blob/main/docs/revisions.md).

## Public discovery surface

When Desk Pages is enabled, the working-proof site also exposes:

- [`llms.txt`](https://svyable.github.io/desk/llms.txt) — a machine-readable map
  of Desk books and important manuscript pages;
- [`robots.txt`](https://svyable.github.io/desk/robots.txt) — crawler policy;
- [`sitemap.xml`](https://svyable.github.io/desk/sitemap.xml) — public Pages
  inventory;
- [`AGENTS.md`](https://svyable.github.io/desk/AGENTS.md) — modification rules
  for agents.

The Git repository is private, but an enabled GitHub Pages site is an
intentional public working-proof surface. Do not commit secrets, credentials,
or material that must remain confidential.

## Rights and license

The framework outside `books/` is covered by [LICENSE](LICENSE). Book
manuscripts remain the copyright of their authors; see [RIGHTS.md](RIGHTS.md).
