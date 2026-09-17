---
name: human-prose
description: Draft, revise, or review authorial prose so it reads as deliberate human writing rather than generic AI-assisted copy. Preserve the author's existing voice while removing synthetic structure, false authority, canned rhetoric, and over-neat conclusions. Use for books, essays, narrative nonfiction, introductions, conclusions, and other voice-sensitive prose.
---

# Human Prose

## Purpose

Make prose sound like a particular thoughtful person wrote it, not like a model performed "good writing."

The goal is not to add randomness, slang, mistakes, or eccentricity. Human prose comes from selective attention, judgment, specificity, restraint, memory, uncertainty, and an identifiable point of view. Preserve those qualities when they already exist. Build them from the material when they do not.

This skill is subordinate to explicit author instructions and to repository-level `AGENTS.md` rules.

## Inputs

Use whatever the task provides:

- the passage or chapter to draft, review, or edit
- surrounding prose that establishes the author's voice
- research notes, citations, quotations, or source links
- the requested audience, genre, and degree of intervention

If surrounding prose is available, read enough of it to hear the author's normal sentence length, diction, humor, level of formality, use of first person, and appetite for metaphor before editing.

## Core rule

**Do not replace one generic style with another.**

Preserve the author's voice, facts, argument, tense, and useful idiosyncrasies. Change only what is making the prose feel synthetic, unearned, inaccurate, repetitive, or structurally canned.

The target is not merely prose that passes an anti-AI smell test. The target is prose that creates reader momentum. A reader should keep going because a real question, pressure, contradiction, mechanism, person, decision, or consequence is still alive on the page.

## Reader-attention rule

Every substantial passage needs a reason for the next paragraph to exist.

That reason may be narrative (`what happens now?`), causal (`why did this happen?`), explanatory (`how does this work?`), argumentative (`is that really true?`), or human (`what will this person do under this constraint?`). Do not manufacture suspense, hide known facts, or tease a revelation merely to create motion. Let the material create the information gap.

A useful drafting question is: **what is still unresolved for the reader at this exact point?** If the honest answer is "nothing; the next paragraphs just keep explaining," the passage probably needs to be cut, reordered, or rebuilt around a live question.

Exposition should usually arrive because the reader now wants it. A technical explanation can be gripping when it resolves pressure already established. A scene can be dull when it exists only as decoration before the lecture.

Do not force every chapter to use a human protagonist. An experiment, proof, document, market failure, machine, court case, policy, anomaly, or unanswered scientific result can carry narrative pressure when something consequential changes as the reader follows it.

## Stock-token discipline

Treat default model diction as a warning signal. The problem is not that any single word is forbidden; the problem is language that arrives before thought.

Be suspicious of phrases such as:

- "in today's world"
- "in an era of"
- "more than ever"
- "at its core"
- "in many ways"
- "the reality is"
- "the key is"
- "what's striking is"
- "this is where"
- "it is important to"
- "serves as a reminder"
- "stands as a testament"
- "underscores the importance of"
- "a complex interplay"
- "a nuanced landscape"
- "navigate the landscape"
- "new frontier"
- "paradigm shift"
- "game changer"
- "quiet revolution"
- "perfect storm"
- "double-edged sword"
- "tip of the iceberg"
- "not just X, but Y"
- "not merely X, but Y"
- "the question is not whether X, but how Y"
- "ultimately" or "fundamentally" used to manufacture depth

Do not run synonym roulette on these phrases. Replace the sentence with the underlying observation, mechanism, scene, fact, or judgment. If a sentence can be transplanted unchanged into a book on leadership, AI, health, economics, or spirituality, it has probably not yet become this book's sentence.

### Interrogate `we`

Generic `we` is one of the easiest ways to smuggle vagueness into nonfiction.

Use `we` only when the referent is honest and reasonably clear: author and reader, a named community, humans as a species, researchers in a field, citizens of a country, or another identifiable group. Do not write `we live in a time`, `we all know`, `we tend to`, `we have always`, or `we are entering` as a substitute for naming who, where, when, and on what evidence.

Do not automatically replace `we` with `you`; generic second person can be just as synthetic. Often the sentence needs an actual subject.

## Trope audit

A familiar narrative shape is not automatically wrong, but it must be earned by the evidence. Investigate rather than default to:

- lone genius versus foolish establishment
- visionary founder versus timid incumbents
- rejection or failure revealed as a hidden blessing
- childhood anecdote that supposedly explains an entire adult life
- "everything changed" after one dramatic moment
- inevitable technological progress or inevitable disruption
- a secret truth "they" did not want people to know
- brave outsider vindicated by history
- a simple villain standing in for institutional incentives
- a historical anecdote compressed into obstacle → perseverance → triumph
- "humans have always..." claims that flatten periods and cultures
- "for centuries..." throat-clearing that skips the actual chronology
- an `Imagine...` opening that invents a generic reader scene instead of using real material
- a chapter opening that exists only to become a metaphor for the thesis

If the evidence really supports one of these shapes, keep the facts and remove the prefab moral. Let the specificity make the pattern visible.

## Elegance rule

Elegant prose is compressed thought, not decorated thought.

Prefer exact nouns and verbs with causal weight. Let syntax reveal relationships instead of announcing them with stage directions. Use transitions when the relationship would otherwise be unclear, not because every paragraph needs a verbal handrail.

Cut the sentence after the sentence that lands. Models often explain a strong line once more in weaker language. Trust the reader sooner.

Avoid conceptual inflation. Do not promote an observation into a `principle`, a tendency into a `law`, a useful distinction into a `framework`, or a difficult question into a `paradigm` unless the material earns the larger term.

Do not confuse polish with elegance. A slightly strange but exact sentence is often better than a frictionless sentence that could have been written by anyone.

## Workflow

### 1. Diagnose before rewriting

Separate structural problems from sentence-level problems. Look first for repeated rhetorical machinery, not isolated words.

Flag the strongest tells before editing when the user asked for review or diagnosis. When the user asked for an edit, fix them directly and keep the intervention surgical.

### 2. Find the narrative engine

Before drafting or substantially revising a chapter, identify what moves it.

Look for some combination of:

- a person or institution trying to accomplish something
- a constraint that prevents the easy outcome
- an anomaly that does not fit the available explanation
- a decision whose consequences are not yet known
- a sequence in which each event changes the next question
- a mechanism the reader can gradually see operating
- a conflict between what a system says it does and what it rewards in practice
- a number, document, proof, experiment, or object whose meaning changes as context accumulates

Do not paste a narrative engine onto material that does not support one. The point is to discover the pressure already present in the subject and organize the chapter so the reader can feel it.

### 3. Remove false authority

Never manufacture or retain a quotation merely because it sounds like a famous thinker.

High-risk forms include:

- `— [person]-style`
- `— inspired by [person]`
- `— in the spirit of [person]`
- invented aphorisms placed in quotation marks beside a real person's name
- quotation marks around a paraphrase that cannot be traced to a source

If the wording is not a verified quotation, either find and cite the real source when the task permits research, or absorb the thought into the author's own prose without quotation marks. Do not create a plausible attribution.

### 4. Prefer scene, observation, and consequence to slogans

When prose states the lesson before the reader has experienced the material, reverse the order.

Prefer:

1. a concrete event, person, object, decision, or detail
2. the pressure or uncertainty inside it
3. what changed or was noticed
4. the principle that follows

Do not force every anecdote to end in a one-line moral. Sometimes the next paragraph can carry the implication. Sometimes the reader can infer it.

### 5. Reduce framework density

Models tend to turn every idea into a named system. Humans usually name only the concepts worth remembering.

Be suspicious when a short span contains several of these:

- "The Five Pillars"
- "The X Framework"
- "The Y Protocol"
- "The Z Engine"
- equations for qualitative ideas
- checklists that answer their own questions
- branded labels for ordinary advice

Keep a framework only when it adds genuine compression, is supported by evidence, or is important enough to recur. Otherwise write the thought as prose.

### 6. Break canned rhetorical symmetry

Use rhetorical balance deliberately, not continuously.

Common machine-like patterns include:

- "Not X. Not Y. Z."
- "It is not X; it is Y."
- "X without Y is A. Y without X is B."
- three perfectly parallel clauses in repeated succession
- "This isn't the end. It's the beginning."
- "Here's the secret..."
- "Here's what I discovered..."
- "Here's everything distilled..."

A strong antithesis can stay. A page full of them cannot. Replace repeated symmetry with ordinary syntax, qualification, example, or a more specific observation.

### 7. Remove presentation voice

Book prose should not sound like a slide deck, course funnel, keynote, or generated explainer unless that is explicitly the genre.

Watch for:

- "Here's what we'll cover"
- "By the end, you will..."
- check-mark benefit lists
- "This is the goal"
- "Your move"
- "Act now"
- "Now go do it"
- "watch the magic happen"
- "optimize every factor"
- "10x" claims without evidence

Replace presenter language with argument, narrative, or a quiet transition.

### 8. Avoid pseudo-precision

Do not turn qualitative relationships into equations merely to make them feel rigorous.

For example, a formula such as `Luck = Exposure × Recognition × Action × Mindset` implies measurement and functional relationships that may not exist. Unless the formula comes from a source or a deliberately defined model, explain the interaction in prose.

The same rule applies to arbitrary percentages, universal deadlines, ranked "levels," and claims that one factor is "the highest" or "the secret" without support.

### 9. Use fewer examples more deeply

A rapid montage of famous people, each compressed to obstacle → persistence → triumph, feels generated and usually distorts history.

Prefer a smaller number of examples with:

- dates, places, objects, and constraints
- what the person knew at the time
- what they did not know
- competing explanations
- other people and institutions involved
- the cost of the decision
- what might have happened otherwise

History should contain uncertainty until the outcome actually arrives.

### 10. Let uncertainty survive

Human judgment is often provisional. Do not inflate a reasonable claim into certainty.

Prefer accurate qualifiers such as:

- "often"
- "in this case"
- "may"
- "suggests"
- "one explanation is"
- "the difficulty is"
- "in retrospect"

Do not hedge every sentence. Use uncertainty where the evidence or the lived situation was actually uncertain.

### 11. Humanize with specificity, not decoration

Specific nouns and verbs beat ornamental adjectives.

Instead of adding generic sensory prose, ask what detail changes the reader's understanding. A delayed train, a stained lab dish, an unanswered email, a name mentioned in a room, a bill on the kitchen table, or the fact that somebody had already rehearsed the procedure can carry more human weight than a paragraph of atmosphere.

Do not invent sensory details, inner thoughts, dialogue, or biographical facts to make a scene vivid.

### 12. Vary rhythm for meaning

Do not mechanically alternate sentence lengths. Rhythm should follow thought.

Use a short sentence when something lands. Let a longer sentence hold qualification, history, accumulation, or doubt. Permit an occasional fragment if it belongs to the established voice. Avoid sequences where every paragraph has the same setup, pivot, and aphoristic close.

### 13. Earn aphorisms

Aphorisms are strongest after evidence and weakest when used as scaffolding.

Keep a memorable line when it compresses something the reader has just seen. Cut it when it merely restates the paragraph in more polished language.

A useful test: if the line could be pasted onto a motivational image without losing anything, it probably needs more context or less grandeur.

### 14. Audit reader momentum

After drafting, read only the first and last sentence of each paragraph in sequence. This is not a style formula; it is a diagnostic for movement.

Ask whether the passage keeps opening and resolving meaningful pressure, or whether it repeatedly announces, explains, summarizes, and announces again. Look for places where:

- the answer arrives before the reader has a question
- an anecdote is abandoned once it has served as a hook
- a paragraph says the same thing at greater abstraction
- a transition tells the reader the prose is moving when the underlying thought is not
- the text pauses for a generic mini-essay that could be removed without changing the chapter's sequence
- a strong concrete passage is followed by an unnecessary moral

Repair the underlying movement. Do not add cliffhangers or rhetorical questions as cosmetic momentum.

## Common transformations

### Generated reveal

Before:

> Here's the secret: strategies compound.

Better:

> No single habit does much by itself. The interesting effects begin when a new skill changes the people you can speak to, those people expose you to different problems, and one of those problems gives the skill an unexpected use.

### Symmetrical slogan

Before:

> Mindset without action is meditation. Action without strategy is busyness.

Better:

> Optimism does little by itself. You eventually have to place a bet. The trick is to place enough of them to encounter surprise without mistaking constant motion for progress.

### Synthetic moral after history

Before:

> The mold was sheer chance; the trained mind that saw its meaning was the real discovery.

Better:

> The contamination was accidental. The reaction to it was not. Plenty of laboratory mistakes end in the sink; this one encountered a scientist curious enough to ask why the bacteria had died.

### Over-neat adversity

Before:

> The job you didn't get would have trapped you in a dying industry. Two years later, you started your own company.

Better:

> A rejection remains a rejection on Tuesday afternoon. It may redirect a career; it may simply hurt. We are usually poor judges of an event's final meaning while we are still living through it.

### Generic universal `we`

Before:

> We live in an age where we are more connected than ever, yet we increasingly struggle to know what is true.

Better:

> A phone can deliver a central-bank statement, a forged screenshot, a war-zone video, and a stranger's confident interpretation of all three before breakfast. Access to information and confidence in it are no longer the same problem.

### Trope-first opening

Before:

> Every revolution begins quietly. In 2008, a small group of outsiders saw what Wall Street could not.

Better:

> By 2008, plenty of people on Wall Street knew mortgage underwriting had deteriorated. The harder question was why knowledge distributed across banks, ratings firms, investors, regulators, and borrowers failed to stop the machinery that depended on it.

## Narrative nonfiction mode

For serious narrative nonfiction, history, biography, and researched trade books, aim for calm authority rather than motivational certainty.

- Start concrete, then widen toward principle.
- Use history as suspense, not ornament.
- Treat psychology as a lens, not a lecture.
- Distinguish what was known then from what hindsight makes obvious now.
- Let institutions, timing, class, geography, networks, and other people share causal credit with the protagonist.
- Prefer understatement after tragedy or suffering.
- Let wit appear as judgment rather than as a constant performance.
- Make an aphorism earn its place.
- Keep at least one live question moving through a substantial passage; do not resolve every uncertainty the instant it appears.
- Make exposition pay rent by answering a question, sharpening a conflict, changing the apparent stakes, or revealing mechanism.
- Re-enter people, objects, documents, or unresolved questions when their meaning has changed; recurrence should deepen, not merely remind.

The reader should feel that the author has metabolized the research, not pasted a bibliography or a list of quotations into the prose.

## Review mode

When the user asks for a critique before changes:

1. identify the highest-impact recurring patterns
2. quote only enough of each passage to identify it
3. explain why the pattern feels synthetic or weak
4. propose a humanistic rewrite
5. distinguish voice problems from factual or sourcing problems
6. identify where reader momentum drops and name the missing pressure, question, mechanism, or consequence
7. do not modify files until the user asks

Prioritize structural tells over exhaustive copyediting.

## Edit mode

When the user asks to revise prose:

1. preserve factual claims and citations unless separately asked to fact-check
2. preserve distinctive authorial phrases that work
3. remove false quotations and unsupported attribution
4. consolidate repetitive frameworks and lists
5. deepen or compress examples rather than decorating them
6. vary cadence only where the thought calls for it
7. remove stock-token language by recovering the underlying observation rather than substituting fancier synonyms
8. make the chapter's live question or pressure legible without manufacturing suspense
9. stop before the text becomes "perfectly smooth"

Do not rewrite neighboring material merely for consistency.

## Final checks

Before returning or committing prose, ask:

- Could this passage belong to almost any self-help, business, technology, or popular-science book? If yes, make it more specific to this author, subject, evidence, and moment.
- What unresolved question, pressure, contradiction, mechanism, or consequence is carrying the reader into the next paragraph?
- Did the passage earn the reader's curiosity, or did I simulate curiosity with a tease, rhetorical question, or delayed fact?
- Did I use generic `we`, `you`, or `people` where a real subject should be named?
- Did stock phrases such as `at its core`, `in today's world`, `this is where`, `underscores`, `serves as a reminder`, `not just...but`, or similar default language slip through because they sounded fluent?
- Did I default to a familiar trope—lone genius, foolish establishment, inevitable disruption, hidden blessing, secret truth—before the evidence earned it?
- Did I turn several ideas into named frameworks for no reason?
- Did I leave any unverified quotation or imitation attribution?
- Did every anecdote receive the same polished moral?
- Did I use repeated "not X but Y," triads, em dashes, or "Here's..." reveals as a crutch?
- Did I add certainty the sources do not justify?
- Did I preserve ambiguity where the people in the story actually faced it?
- Did I invent detail to make the prose feel alive?
- Did I explain a strong sentence after it had already landed?
- Does the ending trust the reader, or bark instructions at them?
- Most importantly: does this sound more like Sven working through this exact material, or merely more like an editor or model performing elegance?

If the last answer is "more like an editor or model," restore the author's texture, recover the concrete material, and intervene less.