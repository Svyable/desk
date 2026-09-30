# Screenplay authoring standard

This is the Desk standard for **movie and television scripts**. It governs files under `screenplays/` and complements, rather than inherits wholesale from, the book prose standard.

The canonical script source is **Fountain** (`.fountain`): plain UTF-8 text that is readable in a diff, friendly to agents, and portable to screenplay applications. PDF, Final Draft, and other formatted files are exports. Do not make an export the only editable source.

## The project contract

Each project lives at `screenplays/<slug>/` and begins with `README.md` metadata:

- `Slug` — lowercase kebab-case, matching the folder
- `Title` — current project title
- `Format` — `feature`, `short`, `pilot`, `series`, or `limited-series`
- `Status` — `development`, `outlining`, `drafting`, `revision`, or `locked`
- `Source` — `original` or one or more `books/<slug>/` references
- `Logline` — one concrete dramatic sentence, not marketing fog

Single-script projects use `script/main.fountain`. Series and limited series use `episodes/epNN-title.fountain` (or `epNNN-title.fountain`). `treatment.md`, `bible.md`, and `continuity.md` carry prose planning and continuity material; they are not substitutes for the script.

Run:

```bash
python3 scripts/check-screenplays.py
```

or one project:

```bash
python3 scripts/check-screenplays.py <slug>
```

The check is dependency-free and is also part of `scripts/check-desk.py`.

## Fountain source rules

Use ordinary Fountain syntax. Keep formatting semantic rather than manually aligned.

```text
Title: A WORKING TITLE
Credit: Written by
Author: Sven Hardy Benson
Draft date: 2026-09-30

FADE IN:

INT. KITCHEN - NIGHT

A glass trembles beside the sink.

MARA
Don't answer it.
```

Practical rules:

- Scene headings use recognizable screenplay locations such as `INT.`, `EXT.`, `INT./EXT.`, or `I/E.`.
- Action is present-tense, observable, and economical. Write what can be seen, heard, or materially inferred from behavior.
- Character cues are not Markdown headings. Dialogue is dialogue, not an essay broken into spoken lines.
- Avoid tabs and hand-built whitespace for alignment. Let Fountain render the page.
- Use Fountain sections, synopsis lines, notes, boneyards, and forced elements deliberately when they help navigation; do not turn the canonical script into an outline full of production annotations.
- Scene numbers are optional during drafting. Add stable scene numbers when production or locked continuity requires them; do not churn them during early structural revision.

## Dramatic standard

A screenplay is a chain of changed situations. A scene earns its page count by altering what somebody can do, knows, wants, fears, owes, or must decide.

Before drafting a scene, know at least:

1. who is driving the scene now,
2. what that person wants in the room,
3. what resists the easy outcome,
4. what changes before the cut.

The change can be tiny. It cannot be nothing.

Do not write scenes whose only function is to deliver information the writer wants the audience to know. Exposition should arrive through conflict, work, error, discovery, ritual, bargaining, concealment, consequence, or another action that would matter even if the audience already understood the backstory.

## Action lines

Write for the eye, ear, actor, editor, designer, and director without trying to perform all of their jobs on the page.

Prefer:

- concrete verbs and specific objects,
- short paragraphs when the image or beat changes,
- spatial clarity when geography affects suspense or action,
- behavior that lets the audience infer interior state,
- detail that changes how the moment plays.

Avoid:

- novelistic access to thoughts the audience cannot perceive,
- camera directions used merely to make prose feel cinematic,
- paragraph-long inventories of set dressing,
- adjectives that tell actors what emotion to perform when behavior can carry it,
- repeated `we see`, `we hear`, or `the camera` unless the seeing/hearing itself is the dramatic information.

A screenplay can be lyrical. The lyricism still has to survive contact with a shot, a performance, a sound, or a cut.

## Dialogue

Characters should not share the author's paragraph rhythm, vocabulary, or explanatory patience.

A dialogue pass should ask:

- What does this character want the other person to do right now?
- What are they unwilling to say directly?
- What would this character notice, misunderstand, joke about, evade, or weaponize that another character would not?
- Can a line become an action, silence, interruption, object, look, or cut?
- Does the response actually respond, or is it waiting to deliver the next prepared speech?

Do not optimize every line for wit. Do not make every exchange subtextual to the point of opacity. Do not let all characters become miniature Sven Hardy Bensons.

Parentheticals are for playable clarification that the line cannot supply by itself. They are not a running commentary track.

## Structure without formula worship

Feature acts, television act breaks, teasers, tags, sequences, midpoint language, beat sheets, and page targets are useful diagnostic tools. None is a universal law.

Use structure to answer practical questions:

- Where does the protagonist become committed rather than merely exposed?
- Where does the cost of the goal become harder to ignore?
- Which revelation changes the strategy rather than only adding information?
- What makes the ending the consequence of prior choices instead of the writer arriving at the planned final scene?

For commercial broadcast formats, explicit act breaks may be production requirements. For streaming or independent work, do not insert legacy network architecture by reflex. Record the intended production/distribution assumption in the project notes when it matters.

## Television and episodic work

A series needs more than a pilot premise. `bible.md` should make the repeatable dramatic engine visible: why episode two exists, why episode eight is not merely more of episode one, and what can generate conflict after the pilot's central question changes.

Track at least:

- series premise and engine,
- world rules and recurring institutions,
- regular and recurring characters,
- season-level pressure and reversals,
- episode stories and unresolved threads,
- timeline facts, injuries, relationships, possessions, secrets, promises, and knowledge state.

Use `continuity.md` as a living ledger. Put durable facts there; do not rely on an agent remembering them from a prior chat.

Episode files are named `epNN-title.fountain` or `epNNN-title.fountain`. The number is an ordering key, not a claim that a broadcaster has assigned an official production code.

## Adaptation

When `Source` references a Desk book, distinguish three things:

1. **source truth** — what the book actually says,
2. **adaptation choice** — what the screen version changes for dramatic or production reasons,
3. **continuity truth** — what is now established inside this screen project.

Do not quietly rewrite the source book to make an adaptation choice look canonical. Do not preserve every scene, argument, chronology, or character merely because it exists in prose. Screen adaptation is transformation under a different set of constraints.

For nonfiction adaptation, never invent a factual scene, quote, motive, or private conversation and present it as documented. A dramatized composite, reconstruction, or speculative scene needs an explicit project-level decision about how it will be labeled and sourced.

Rights remain a separate question from technical ability to adapt. A source reference in this repo is provenance, not a rights clearance.

## Revision passes

Do not do every kind of revision at once. A useful order is:

1. **premise/engine** — is there enough pressure to sustain the intended length?
2. **structure** — do scenes cause later scenes, or merely accumulate?
3. **scene function** — what changes in each scene and where does it turn?
4. **character/continuity** — do choices follow from established wants, knowledge, and constraints?
5. **dialogue** — specificity, subtext, rhythm, compression, differentiated voices.
6. **action** — filmability, clarity, pace, unnecessary direction or novelization.
7. **format** — Fountain syntax, title page, scene headings, episode names, metadata.

When a structural change removes the purpose of later material, fix the downstream consequences in the same coherent pass. Do not polish dialogue in a scene that no longer needs to exist.

## Production reality

Scripts are plans for collaborative, constrained production. Budget, locations, cast count, night work, children, animals, stunts, VFX, music, period detail, and rights-controlled material can materially change what a script can become.

Do not flatten creative work into a budget spreadsheet, but do notice when a draft repeatedly spends production complexity without dramatic return. If the project has a known production class, record it in the README Notes or treatment and write with that reality in view.

## Agent workflow

For screenplay tasks, agents should:

1. read the project README and this standard;
2. read `.agents/skills/screenwriting/SKILL.md`;
3. read the treatment/bible/continuity material that is relevant to the requested scene or episode;
4. read enough existing script pages to learn character voices and current continuity;
5. make the requested dramatic change in Fountain rather than converting the script to Markdown prose;
6. update continuity or project notes when the change establishes a durable fact;
7. run `python3 scripts/check-screenplays.py <slug>` and the narrow tests relevant to tooling changes;
8. run `python3 scripts/check-desk.py` when handing off a repo-level change.

Do not apply book chapter length rules, book title-page rules, or prose paragraph diagnostics to `.fountain` script pages. Treatments and bibles are prose and should still avoid generic AI language, fake quotation, false certainty, and unsupported claims.
