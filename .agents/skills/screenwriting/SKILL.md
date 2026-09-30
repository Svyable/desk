---
name: screenwriting
description: Draft, revise, diagnose, or continue film and television scripts in Fountain while preserving character voice, dramatic causality, adaptation provenance, and production-readable formatting. Use for feature scripts, shorts, pilots, episodic scripts, treatments, series bibles, and screenplay continuity work under screenplays/.
---

# Screenwriting

## Purpose

Write scripts that behave like scripts: playable scenes, visible action, differentiated dialogue, pressure that changes the situation, and source files another writer can open in a normal Fountain workflow.

This skill is subordinate to explicit author instructions, root `AGENTS.md`, and `docs/screenplay-authoring-standard.md`.

## Read before writing

For a project under `screenplays/<slug>/`, read in this order:

1. `README.md` for format, status, source, and logline;
2. `docs/screenplay-authoring-standard.md`;
3. relevant `treatment.md`, `bible.md`, and `continuity.md`;
4. the existing script or nearby episodes/scenes needed to preserve voice and continuity;
5. source-book passages only when the task is an adaptation and those passages are actually relevant.

Do not reread an entire series when a compact continuity file and the adjacent episode pages answer the question. Do not trust chat memory over committed continuity.

## Core rule

**A scene must change the playable situation.**

Somebody enters with a want, assumption, obligation, secret, fear, tactic, deadline, or problem. Resistance changes what is possible. The scene exits in a materially different state: a decision, reversal, discovery, refusal, debt, wound, new tactic, altered relationship, or changed audience knowledge.

A scene may be quiet. It may even be nearly wordless. It still needs movement.

## Scene drafting

Before writing, privately identify:

- point-of-view center,
- immediate objective,
- source of resistance,
- hidden or asymmetrical information,
- turn,
- exit pressure into the next scene.

Do not print this scaffold into the screenplay unless the author asked for an outline. Use it to write the scene.

Enter late enough that the scene is already alive. Leave when the dramatic fact has changed; do not explain the scene after it lands.

## Action

Use present-tense, filmable action. Prefer behavior and objects over interior explanation.

Bad screenplay prose often has one of two failures: it reads like a novel with camera access bolted on, or it reads like a shot list written by someone trying to prove the scene is cinematic. Avoid both.

Describe the thing that matters. Let collaborators do their jobs.

## Dialogue

Dialogue is strategic behavior, not formatted exposition.

Keep each character's vocabulary, sentence length, humor, tolerance for directness, social power, domain knowledge, habits of evasion or confrontation, and relationship-specific voice distinct enough that removing character labels would not make every exchange interchangeable.

Characters can explain things when they have a reason to explain them. Give the explanation a social cost, objective, mistake, interruption, or consequence when the scene supports it.

Do not make every line sharp. Do not make every line incomplete. Do not confuse subtext with vagueness.

## Character continuity

Track what each important character knows **at that point in time**. Many script errors are knowledge-state errors disguised as dialogue problems.

When a change establishes a durable fact—injury, object ownership, secret revealed, relationship shift, timeline date, promise, location rule—update `continuity.md` if the project uses it.

For series, distinguish audience knowledge, character knowledge, false belief, secrets known to only some characters, and unresolved writer-room questions. Do not collapse these into one summary.

## Adaptation mode

If the project references `books/<slug>/`, preserve provenance without treating the book as screenplay instructions.

Keep clear which material is directly supported by the source, compressed or reordered, composited, invented for dramatic structure, or omitted.

For nonfiction, historical, or real-person material, do not invent private speech or motives as factual reporting. A dramatization can invent under an explicit creative convention; the repo should make that convention visible rather than accidentally laundering invention into fact.

## Pilot and series mode

A pilot has two jobs: deliver a satisfying dramatic object now and prove there is a machine capable of generating future stories.

Before calling a pilot structurally sound, ask:

- What repeats?
- What escalates?
- What changes permanently after the pilot?
- Which relationships generate story without repeating the same conflict?
- What is the season pressure?
- What would episode three be about if episode two did not exist?

A premise that only supports a movie should not be stretched into a series because the folder says `series`.

## Revision mode

When revising, diagnose before polishing. Name the highest-order failure privately: engine, sequence causality, scene turn, character objective, knowledge state, dialogue, action clarity, or format.

Fix higher-order failures first. If a scene needs deletion, do not spend time making its jokes better.

A useful scene pass checks whether the scene begins with active pressure, the objective can be inferred from behavior, the obstacle can actually resist, new information changes behavior, there is a turn rather than just more conversation, and the exit image/decision is stronger than a summary line.

## Fountain discipline

Canonical scripts remain `.fountain` files. Do not convert them to Markdown, screenplay-looking code blocks, HTML, or manually aligned text.

Use a Fountain title page. Keep scene headings recognizable. Use tabs neither for indentation nor pseudo-layout. Treat PDF/FDX as exports unless the author explicitly makes another format canonical.

For series episodes, use `episodes/epNN-title.fountain` or `episodes/epNNN-title.fountain`.

## Final pass

Before handing off a script scene or episode as ready:

- read it for actor rhythm rather than essay rhythm;
- verify every scene changes something;
- remove lines that explain what the image or prior line already established;
- check character knowledge state;
- check entrances, exits, props, injuries, time of day, and location continuity;
- look for dialogue where every character sounds like the same clever author;
- look for unfilmable interior prose;
- look for camera directions that add no dramatic information;
- run `python3 scripts/check-screenplays.py <slug>`.

The goal is not a mechanically perfect spec-script page. The goal is a script that another writer, actor, director, or production reader can understand, trust, and continue.
