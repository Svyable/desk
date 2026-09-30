# Screenplays

Home for **movie and television scripts** and **adaptations** of Sven Hardy Benson works on this Desk.

This tree is managed as a first-class authoring format. It is separate from `scripts/` (Desk Python tooling) and `books/` (manuscript prose). Canonical screenplay pages are written in **Fountain** so they remain plain text, diffable, agent-readable, and portable to professional screenplay software.

## Start a project

Copy `screenplays/_TEMPLATE/` to `screenplays/<slug>/`, then edit the project `README.md`.

Required metadata:

- **Slug** — lowercase kebab-case matching the folder
- **Title** — current project title
- **Format** — `feature`, `short`, `pilot`, `series`, or `limited-series`
- **Status** — `development`, `outlining`, `drafting`, `revision`, or `locked`
- **Source** — `original` or one or more `books/<slug>/` references
- **Logline** — one concrete dramatic sentence

## Layout

```text
screenplays/
  <slug>/
    README.md
    treatment.md
    bible.md
    continuity.md
    script/
      main.fountain             # feature, short, or standalone pilot
    episodes/
      ep01-pilot.fountain       # series / limited series
      ep02-example.fountain
```

Use the canonical path that matches the project format. Unused template files may remain while a project is in development, but produced series episodes belong in `episodes/`, while single-script formats use `script/main.fountain`.

## Writing rules

- Read [`docs/screenplay-authoring-standard.md`](../docs/screenplay-authoring-standard.md) before substantial screenplay work.
- Agents should apply [`.agents/skills/screenwriting/SKILL.md`](../.agents/skills/screenwriting/SKILL.md).
- `.fountain` files are screenplay source, not Markdown prose. Do not apply book chapter formatting or book length rules to them.
- Treatments, bibles, and continuity notes are planning prose. Keep them concrete and useful to future writers rather than polishing them into pitch-deck language by default.
- Adaptations cite their source book(s) under `books/` and keep adaptation choices separate from source-book truth.
- Do not rewrite `books/` prose from a screenplay task unless explicitly asked.
- Rights, external submission, sale, and Shelf/publication actions remain separate human decisions.

## Validate

Check every screenplay project:

```bash
python3 scripts/check-screenplays.py
```

Check one project while drafting:

```bash
python3 scripts/check-screenplays.py <slug>
```

The validator checks project metadata, source-book provenance, canonical paths, episode naming, and basic Fountain integrity without external dependencies. `python3 scripts/check-desk.py` includes this screenplay check for repo-level handoff.

## Exports

Fountain is canonical even when a collaborator needs PDF, Final Draft (`.fdx`), or another delivery format. Generate/export those from the Fountain source with the screenplay tool of choice. Do not hand-edit an export while leaving the canonical Fountain stale.
