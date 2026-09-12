# Book identity and cover metadata

A book's `README.md` owns its public title, subtitle, author, status, and contents.
The opening title page must agree with it. A chapter heading, an old working
name, a catalog summary, and a research document are not competing title sources.

## Canonical opening

The book README starts with this structure, followed by its metadata table:

```markdown
# Book Title

*Subtitle, when the book has one*

| | |
|---|---|
| **Authors** | Sven Hardy Benson |
| **Status** | Drafting |
```

The front matter starts with the same title and subtitle, followed by the byline:

```markdown
# Book Title

*Subtitle, when the book has one*

**Sven Hardy Benson**
```

Omit the italic subtitle line in both files when there is no established
subtitle. Do not invent one to satisfy a format. Put an existing subtitle
immediately below the H1 so both catalog cards and opened covers can read it.
Use `Authors` in new metadata rows; the checker also recognizes legacy `Author`.

Use the chosen wording and capitalization. Do not automatically title-case,
shorten, remove an article, or split a title at every colon. Split only when
source context establishes that the second part is the subtitle. If existing
sources conflict and the intended wording is uncertain, identify that conflict
rather than silently renaming the book.

## Title pages and contents

Register the front-matter file in the README's checkbox contents list. Existing
numbered names such as `00-front-matter.md` and single-file manuscripts remain
supported; do not rename them merely to satisfy a tool.

If front matter opens with an introduction heading instead of the book title,
add the title/subtitle/byline above it and preserve the introduction heading and
prose. A byline in copyright text or a later chapter is not a title-page byline.
Existing italic edition/tagline lines may remain in the opening.

Distinct books can deliberately share a title, as with *The Limit Does Not
Exist*. Keep each slug, subtitle, research trail, and manuscript separate. A
shared title is not evidence that two folders should be merged.

## Validate before handing off

For a focused edit, run:

```bash
python3 scripts/check-book-cover-metadata.py <book-slug>
```

For new books, renames, catalog changes, or a whole-library audit, run:

```bash
python3 scripts/check-book-cover-metadata.py
python3 scripts/check-desk.py
```

The global cover audit discovers actual book folders and checks inventory
agreement. It must not skip a new book merely because registration was missed.
Both focused and global modes support `--json`; validation is read-only and
requires only Python's standard library.

When adding a book, update `catalog.json`, the root README catalog, the feedback
dropdown, `llms.txt`, and `sitemap.xml`. The landing page derives its catalog from
the root README; do not add a second manually maintained list in `index.html`.

Review the actual diff after running any generator. Existing migration helpers,
including `align-title-pages.py`, are not a required editing step: preview their
output and apply only changes authorized for the task. Do not use bulk
normalization as a substitute for resolving an ambiguous title.

These checks validate identity and consistency, not literary quality, factual
accuracy, cover legibility, or publication readiness. Use the prose standard for
writing, verify source-supported claims against the research trail, and inspect
the rendered cover when changing its layout. A Desk correction does not release
a new Shelf edition; follow the repository's release rules separately.
