# Svyable Desk

Sven Benson's **private Desk** in a
[Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md)
setup. This repository is the private Git working room; its Desk Reader is an
intentionally public preview of the manuscripts being written here.

The GitHub repository is `Svyable/self`, and its GitHub Pages project path is
`/self/`. The repository name is instance identity; its Bookself role remains
**Desk**.

The public shelf is [Svyable/shelf](https://github.com/Svyable/shelf). Desk
and Shelf are separate Git repositories with separate histories. A release
copies a committed book snapshot from Desk into Shelf; after release the two
copies are independent until the next release.

The software is [Bookself](https://github.com/Svyable/bookself).

**Desk Reader — working drafts:** [svyable.github.io/self/reader](https://svyable.github.io/self/reader/)  
**Shelf Reader — released editions:** [svyable.github.io/shelf/reader](https://svyable.github.io/shelf/reader/)  

## GitHub plan requirement

This Desk demonstrates Bookself's optional **private repository + public
working-proof Reader** mode.

| Surface | Repository visibility | GitHub plan |
|---|---|---|
| Local Desk Reader / Publishing Desk | Private | GitHub Free is enough |
| Public Shelf Reader | Public | GitHub Free is enough |
| Public Desk Reader from this private repository | Private source, public website | GitHub Pro for a personal repository, or another eligible paid GitHub plan |

Bookself itself does not require GitHub Pro. The normal free path is to keep the
Desk private, preview it locally, and publish released editions from a public
Shelf repository. GitHub Pro is only needed for this extra convenience: keeping
the Desk Git repository private while also serving its working Reader through
GitHub Pages.

If the account does not have private-repository Pages eligibility, this Desk
continues to work normally as a private writing repository and local Reader, but
the public Pages URL `https://svyable.github.io/self/reader/` will not be served
from the private repository.

The repository itself remains private on GitHub, but when the Desk Pages site
is enabled the website is **public**. This is deliberate working in public, not
a privacy feature. Files in the Pages source can be reachable by their Pages
URLs. Do not put secrets, credentials, or anything that must remain confidential
on this Desk. A client-side password would not make a public static Pages site
confidential.

## The books

| Book | Authors | Status | Desk preview | Shelf edition |
|---|---|---|---|---|
| [Leveraging Luck](books/leveraging-luck/) | @svyable | Revision in progress | [Read working draft](https://svyable.github.io/self/reader/#/b/leveraging-luck/) | [Read released edition](https://svyable.github.io/shelf/reader/#/b/leveraging-luck/) |
| [The Exponentiality](books/the-exponentiality/) | @svyable | Not yet drafted | [Open Desk preview](https://svyable.github.io/self/reader/#/b/the-exponentiality/) | Not released |
| [The Unbounding](books/the-unbounding/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/the-unbounding/) | Not released |
| [The Convergence](books/the-convergence/) | @svyable | Drafting | [Read working draft](https://svyable.github.io/self/reader/#/b/the-convergence/) | Not released |
| [Predictable](books/predictable/) | @svyable | Drafting | [Read working draft](https://svyable.github.io/self/reader/#/b/predictable/) | Not released |
| [The Reliability Tax](books/the-reliability-tax/) | Sven Hardy Benson | Drafting | [Read working draft](https://svyable.github.io/self/reader/#/b/the-reliability-tax/) | Not released |
| [The World Beneath the World](books/the-world-beneath-the-world/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/the-world-beneath-the-world/) | Not released |
| [Proof of Human](books/proof-of-human/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/proof-of-human/) | Not released |
| [Single Points of Failure](books/single-points-of-failure/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/single-points-of-failure/) | Not released |
| [Built to Be Alone](books/the-loneliness-dividend/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/the-loneliness-dividend/) | Not released |
| [Silent Cartel](books/silent-cartel/) | @svyable | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/silent-cartel/) | Not released |
| [Useful Noise](books/useful-noise/) | Sven Hardy Benson | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/useful-noise/) | Not released |
| [To State the Obvious:](books/to-state-the-obvious/) | Sven Hardy Benson | Drafting | [Read working draft](https://svyable.github.io/self/reader/#/b/to-state-the-obvious/) | Not released |
| [Keep Cooking](books/keep-cooking/) | Sven Hardy Benson | Complete draft | [Read working draft](https://svyable.github.io/self/reader/#/b/keep-cooking/) | Not released |
| [Synthetic Intelligence](books/synthetic-intelligence/) | Sven Hardy Benson | Drafting | [Read working draft](https://svyable.github.io/self/reader/#/b/synthetic-intelligence/) | Not released |
| [The Value Stack](books/the-value-stack/) | Sven Hard Benson | Drafting | [Read working draft](https://svyable.github.io/self/reader/#/b/the-value-stack/) | Not released |

## The simple workflow

**Write → Preview → Release.**

Write and revise under `books/<slug>/` on Desk. The public Desk Reader shows
the current working version when the optional private-repository Pages feature
is enabled. The Shelf keeps the deliberately released edition unchanged until
the next release.

### Public Desk preview

The public working-draft Reader is:

- `https://svyable.github.io/self/reader/`

Direct book links use:

- `https://svyable.github.io/self/reader/#/b/<slug>/`

The small `reader/` bootstrap reuses the shared Reader UI already served by the
public Svyable Shelf, while content paths resolve against this Desk's Pages
site. Desk status remains `Drafting`, `Complete draft`, or `Revision in
progress`; the preview does **not** turn a Desk manuscript into a released Shelf
edition.

This preview is branch-served static Pages. It does not require a GitHub Actions
workflow, build artifact, or hosted deployment job. It does require GitHub's
private-repository Pages entitlement because the source repository is private.

### Agent discovery

The public Pages surface deliberately includes low-noise entry points for search
crawlers and AI agents:

- [`/llms.txt`](https://svyable.github.io/self/llms.txt) — curated map of Desk, books, and important manuscript pages.
- [`/robots.txt`](https://svyable.github.io/self/robots.txt) — crawl policy; the public working-draft surface is intentionally crawlable.
- [`/sitemap.xml`](https://svyable.github.io/self/sitemap.xml) — machine-readable inventory of key public pages.
- [`/AGENTS.md`](https://svyable.github.io/self/AGENTS.md) — instructions for agents that are actually modifying Desk content.

These are discovery aids, not publication markers. A Desk manuscript remains a
working draft until it is explicitly released to Shelf.

### Preview locally

You can always serve the repository locally, including on GitHub Free:

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
verifies the copied publication files against this committed Desk snapshot,
and stops before commit or push so the public diff can be reviewed.

The public Desk Reader is only the live working preview; it is not part of the
release transaction. `scripts/promote-book.sh` remains the lower-level copy-only
command and does not publish or create a live Desk ↔ Shelf relationship.

For the full revision model, see
[Revising a published book](https://github.com/Svyable/bookself/blob/main/docs/revisions.md).

## How to take part

| If you are… | Start here |
|---|---|
| New to GitHub | [Author guide](docs/author-guide.md) |
| Running Desk + Shelf | [Bookself](https://github.com/Svyable/bookself/blob/main/docs/bookself.md) |
| Comfortable with pull requests | [Editor guide](docs/editor-guide.md) |
| Starting a new book | [Book anatomy](docs/book-anatomy.md) |
| An AI agent | [AGENTS.md](AGENTS.md) |

## License

The framework (everything outside `books/`) is MIT. Book manuscripts remain
copyright of their authors. See [LICENSE](LICENSE).
