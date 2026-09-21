# Build Your Bottega

Start with a live question.

Not a prompt.

A question that has consequences if answered badly.

A founder wants to know why customers keep leaving after the third month. A scientist has an anomalous result that will not disappear. A writer has a story whose obvious explanation feels false. A lawyer needs to know whether a new business model survives the language of an old statute. An engineer has a system that works in tests and fails under the shape of real traffic.

The question is the commission.

This is where most advice about working with AI begins too late. It begins with the interface: how to write the instruction, which model to choose, which agent framework to use, which automation to connect.

The workshop begins before software.

What are we trying to make true?

What would count as evidence?

What cannot be compromised?

Who bears the consequence?

What would make us stop?

These are the walls of the room.

Once they exist, agents can become useful inhabitants.

Imagine a writer beginning a nonfiction book.

The weak workflow is familiar.

"Write me a bestselling book about human-AI collaboration in the style of a famous author."

A capable model can produce something immediately. It will likely contain recognizable shape: an opening anecdote, broad historical claims, neat chapter titles, management language, optimistic warnings, a closing call to action.

It may even be readable.

The book will not yet have a reason to exist.

A bottega begins differently.

The writer starts with the unresolved claim.

Perhaps the prevailing debate treats AI as either tool or replacement, while the writer suspects the better model is apprenticeship. The historical analogy to Renaissance workshops appears. Now the first task is not prose.

It is falsification.

Did workshops actually operate in the way the metaphor requires?

What do museums and historians say about Verrocchio's shop?

What can be established about Leonardo's training?

What is Vasari's later story and what is direct evidence?

Where does the analogy fail?

The writer assigns agents to research these questions.

One searches museum collections.

Another builds a source ledger.

Another is instructed to find reasons the workshop analogy is misleading.

A human reads the decisive sources.

The first surprise arrives: the famous story about Leonardo's angel is not a secure eyewitness fact but a later Vasari account.

A weak system would discard the anecdote because it is uncertain or repeat it because it is vivid.

The workshop does something better.

It makes the uncertainty part of the opening.

Now the book has tension.

The myth is useful because the documented collaborative workshop beneath it is more interesting than the myth.

The agent did not write the idea into existence.

The interaction changed the writer's understanding.

That is the beginning of the process.

Next comes architecture.

The writer and agents map the argument.

One path follows history chronologically.

Another follows the mechanics of a workshop: commission, sketch, apprenticeship, critique, memory, attribution.

Another follows modern AI capability.

The writer compares them against the reader promise.

Which sequence makes each chapter necessary?

Which sequence prevents the book from becoming eighteen versions of the same metaphor?

The workshop selects the second, with historical cases returning only when they do new work.

Now chapters have jobs.

This matters because agents are extraordinarily good at local completion. Give one a chapter title and enough context and it will often produce a plausible chapter.

Plausibility is the enemy of structure.

Every chapter can sound like it belongs while the book as a whole goes nowhere.

The master must maintain progression.

Chapter one establishes the apprentice who can surprise the master.

Chapter two moves inside the workshop.

Chapter three asks how apprenticeship transfers judgment.

Later chapters change the problem: cheap sketches create a selection bottleneck, memory becomes infrastructure, the collapse of junior tasks threatens the expert pipeline, authorship separates from keystrokes.

The argument travels.

This is what the human should hold in active memory even if agents maintain the detailed records.

The master needs a compact model of the whole.

Then the drafting begins.

Do not assign every chapter to one giant conversation.

Give each piece enough context to belong and enough independence to move.

The agent should know the reader promise, the prior chapters' earned conclusions, the evidence relevant to the current chapter, recurring examples to avoid, and the prose constraints that matter.

Then let it attempt.

The first draft comes back.

The human reads for life before correctness.

Where does attention rise?

Where does the chapter become a lecture?

Which sentence sounds like it could live in any AI book?

Where is the claim stronger than the evidence?

What has already been said?

The human marks those failures.

A critic agent can help.

It searches for repeated rhetorical machinery.

It compares claims against the source ledger.

It identifies where a paragraph simply restates itself.

It finds neighboring chapters making the same move.

Another agent checks citation provenance.

Another counts chapter length and structural invariants.

The human decides what matters.

Now revise.

This is a bottega.

Several intelligences touching one object under one evolving standard.

Nothing about the pattern belongs only to writing.

Take software.

The commission is not "build a dashboard."

It is the operational problem the dashboard is supposed to solve.

The research agent inspects the existing system, incidents, users, constraints.

A coding agent proposes implementations.

A test agent tries to break them.

A security process inspects permissions.

The human engineer decides architecture and accepts responsibility for the production boundary.

The system records the decisions.

The work moves through branches.

The human does not have to write every line.

The human does have to know what has been built.

Take scientific research.

The commission is a question with a method, not a desired result.

Agents can search literature, extract methods, write analysis code, generate alternative models, check calculations, and identify papers that disagree.

The scientist must preserve the distinction between hypothesis and evidence.

An agent that finds a beautiful explanation cannot be allowed to convert the anomaly into proof.

The workshop keeps epistemic status visible.

Take a small business.

The owner can create a bottega around operations: one agent for customer research, one for financial analysis, one for marketing drafts, one for documentation, one for competitive monitoring.

The obvious temptation is to run all of them constantly.

Do not.

Agents should exist because the commission needs them.

An idle specialist costs almost nothing compared with a human employee, which makes unnecessary agents psychologically easy to create. Soon the owner is managing a synthetic org chart instead of the business.

The bottega is not a swarm for the sake of a swarm.

It is a composition.

Every participant needs a role that produces information or work the whole requires.

This suggests a practical pattern for building your own workshop.

Begin with one master record.

The current purpose.

The current state.

The source of truth for important decisions.

The definition of done.

Then add specialists only where the work has a recurring boundary.

Research.

Critique.

Implementation.

Verification.

Memory.

The names will differ.

The boundary matters more than the persona.

Do not give the agents elaborate fictional biographies unless the fiction changes useful behavior. "You are a world-class Renaissance critic with thirty years of experience" sounds more intelligent than "check every claim against a primary source."

The second instruction creates a testable role.

Bottegas run on roles, not costumes.

Each role needs inputs.

A research agent without source standards will optimize for plausible retrieval.

A critic without the commission will criticize irrelevant things.

A coding agent without repository conventions will create locally clean global mess.

Context should travel with the assignment.

This is the equivalent of handing the apprentice the correct drawing, material, and portion of the commission.

Then establish the return format.

What should the agent bring back?

An answer?

A set of candidates?

A patch?

A list of claims with sources?

A recommendation plus alternatives?

A result plus uncertainty?

The return format shapes thinking.

If every agent returns polished prose, the workshop becomes hard to inspect.

Sometimes the better return is a table of evidence.

Sometimes a diff.

Sometimes a list of failed tests.

Sometimes three options with explicit tradeoffs.

Sometimes one paragraph saying the evidence is insufficient.

A master learns to request the artifact needed for the next decision, not the artifact that looks most complete.

Then establish the gates.

Which actions can happen without asking?

Which changes remain private?

Which touch external systems?

Which create commitments?

Which require independent verification?

Do not put a human click everywhere.

Put human judgment where consequence concentrates.

Then establish critique.

This is the part people skip because generation feels like progress.

Every serious workshop needs an adversarial function.

Someone or something should be rewarded for finding the defect before the outside world does.

The critic cannot be a ceremonial second pass whose job is to make the work sound nicer.

It must have specific failure modes to hunt.

Unsupported claim.

Security boundary.

Unstated assumption.

Incentive mismatch.

Voice drift.

Missing stakeholder.

Broken test.

Contradictory requirement.

The workshop's quality rises when criticism has teeth and no shame.

Then preserve the history.

Not everything.

Enough.

What was decided?

Why?

What evidence mattered?

What failed?

What remains open?

What changed the commission?

This allows the next session, person, or agent to begin from accumulated reality rather than a clean prompt.

Then develop the human.

This is where the process becomes a renaissance rather than an automation stack.

Ask whether the person is getting better.

Not merely faster.

Is the writer's eye sharpening?

Is the engineer better at architecture?

Is the analyst better at source quality?

Is the owner asking better questions?

Can the person detect a machine failure earlier than six months ago?

If not, change the division of labor.

Give the human first touch on some tasks.

Make the agent explain alternatives.

Create blind evaluations.

Reduce assistance during training.

Increase challenge.

The workshop should produce masters.

That includes the person who built it.

This is the part of the Da Vinci Process that software alone cannot install.

The human has to want correction.

A workshop around a defensive master becomes an expensive flattery engine.

Agents make flattery easy because they are responsive to instructions and preferences. The master can remove every disagreeable voice with a sentence.

Human teams do not disappear so politely.

That inconvenience is one reason humans remain valuable.

A colleague can have a career, a reputation, an ethical line, a memory of what you said last year, and the freedom to think your plan is stupid.

A machine can simulate disagreement, but the owner can usually rewrite the simulation.

This creates a responsibility to design dissent that cannot be optimized away casually.

External reviewers.

Real customers.

Independent tests.

Public evidence.

Experts who do not work for you.

Reality with standing.

The bottega should have windows.

Otherwise one person and ten agents can become a closed belief system at extraordinary speed.

The next rule is economic.

Do not automate what you have not priced.

Agent work feels cheap because the marginal computation can be low compared with human labor. That encourages excess.

But every artifact has review cost.

Every branch has integration cost.

Every agent has context cost.

Every additional stream can create contradictory decisions.

The scarce resource moves from production to attention.

Track that.

If ten agents produce more work than one human can evaluate, the system is not leveraged.

It is underwater.

This is why a small, disciplined workshop can outperform a synthetic bureaucracy.

The Renaissance master did not win by having the most apprentices.

The master needed enough skilled hands to extend capability without losing the work.

The same law survives.

Scale until judgment becomes the bottleneck.

Then improve judgment before adding scale.

This is where many organizations will make the wrong move. They will respond to agent capacity by multiplying agents, then respond to the resulting coordination burden by adding orchestration software, dashboards, supervisors, routing agents, evaluation agents, and management layers.

The machine organization recreates bureaucracy before the humans have decided what the work is.

A bottega should remain legible.

The master should be able to answer what each role is doing and why.

If the system becomes too complex to explain, complexity has become an unmanaged participant.

There is one final element.

Joy.

It sounds soft after permissions, provenance, and verification.

It is not.

The historical workshop was labor. It was also a place where people encountered technique, rivalry, discovery, material, and one another. Great work requires enough attention that curiosity can survive obligation.

Agents can destroy this by turning every activity into optimization.

They can also restore it by removing the dead labor around the alive problem.

The writer spends less time formatting citations and more time chasing the contradiction.

The engineer spends less time on boilerplate and more time on architecture.

The scientist spends less time moving data and more time asking what the result means.

The owner spends less time compiling updates and more time with customers.

That is the version worth building.

Not a world where machines perform and humans approve.

A world where machines take enough weight that humans can move closer to the part of the work that requires being awake.

That is your bottega.

It will not look like mine.

It should not.

A workshop becomes valuable when it acquires local memory, local standards, and a rhythm suited to its craft.

Start with the commission.

Add intelligence where it earns its place.

Keep the record.

Invite correction.

Protect the human's ability to see.

A workshop becomes real when the first surprising failure changes its design.

Until then, it is architecture on paper.

Suppose the research agent repeatedly returns high-quality secondary summaries and weak primary sourcing.

Do not simply correct the outputs forever.

Change the role.

Require primary-source-first retrieval for claims above a certain consequence.

Suppose the coding agent writes excellent features and weak tests.

Do not add a generic instruction to "be careful."

Separate testing into another function with different incentives.

Suppose the critic agent rewrites everything toward blandness.

Restrict its authority. Ask it to diagnose before proposing language.

The bottega evolves from observed failure.

This is how local process becomes craft.

There is no universal agent org chart because the right decomposition depends on where the work breaks.

This should make leaders skeptical of prefabricated "AI workforce" diagrams with dozens of named agents.

A diagram can be useful for imagination.

It is not evidence that the roles are necessary.

Start with the friction.

Where does the human repeatedly lose time?

Where does quality repeatedly fail?

Where does important context disappear?

Where does review arrive too late?

Those failures define the first agents.

Then watch.

A mature bottega will probably contain fewer permanent roles than the early enthusiasm suggests.

Many capabilities will be summoned on demand.

One research process can behave differently under different commissions.

One critic can adopt several evaluation lenses.

Specialization should be earned by persistent context, permission, tool access, or evaluation—not by giving every prompt a job title.

This keeps the workshop legible.

Legibility matters because the human principal needs a model of the system.

If you cannot explain what your agents are doing, you cannot meaningfully supervise them.

This becomes a practical limit on scale.

The question is not how many agents the platform can run.

The question is how many distinct responsibilities the workshop can keep coherent.

An orchestra can contain a hundred musicians because the roles, score, rehearsal culture, and conductor create shared structure.

One hundred agents with overlapping mandates and no shared state are not an orchestra.

They are noise with invoices.

The bottega needs a score.

In knowledge work, that score is the project state.

The commission.

Current decisions.

Standards.

Open questions.

Permissions.

Definitions.

Source of truth.

Every agent should encounter the relevant slice of that state.

Not a giant prompt containing the whole organization.

The relevant slice.

Context quality is another form of routing.

Too little context and the agent becomes generic.

Too much and the signal disappears.

The master curates context the way a painter chooses a palette.

This is one of the new skills that will feel trivial until people see the difference it makes.

A good context package is not a data dump.

It contains what the task needs to become local.

The current file.

The relevant standards.

A few strong examples.

Known constraints.

Recent decisions.

The source trail.

What not to change.

This is the working table.

Everything else stays in the studio until needed.

There is another discipline: name the canonical object.

A workshop with multiple agents can accidentally create several realities.

One agent edits a copy.

Another analyzes an older version.

A third updates a plan whose assumptions have changed.

The human receives three coherent answers from three different worlds.

Version confusion becomes epistemic confusion.

The system should know which artifact is current.

This sounds like mundane file hygiene.

It is central.

The intelligence of the workshop cannot exceed the coherence of its state.

A brilliant model working on the wrong version is worse than a mediocre model working on the right one.

This is why source-of-truth discipline becomes more valuable as intelligence scales.

Then comes cadence.

Human-agent work can become exhausting if every capability is active continuously.

A good bottega develops rhythms.

Research burst.

Synthesis.

Critique.

Revision.

Verification.

Rest.

The phases overlap, but the workshop should know when attention has shifted.

This protects against a common pathology: permanent ideation.

The agent always has another thought.

Another source.

Another option.

The project never experiences silence.

Humans need silence because selection often requires integration that does not look productive.

The master should be willing to turn the workshop off.

Read the chapter without assistance.

Walk away from the design.

Sit with the contradiction.

The machine's availability should not become a demand to use it.

This is perhaps the strangest discipline of abundance.

Restraint.

The historical master had natural limits. Apprentices went home. Materials ran out. Light changed. Communication took time.

The agentic master must create some limits voluntarily.

Otherwise the workshop colonizes every gap.

This is not anti-technology.

It is protection of the human process the technology is supposed to extend.

A good bottega should make a person more capable of attention, not less capable of being alone.

That includes knowing when the agent has become a reflex.

Before asking, pause.

Do I need retrieval?

Generation?

Critique?

Execution?

Or am I trying to avoid deciding?

That question will save more time than any prompt library.

Because the biggest waste in an agentic workshop will not be slow models.

It will be high-speed avoidance.

Generating instead of choosing.

Researching instead of committing.

Optimizing instead of asking whether the goal still matters.

The master has to feel those substitutions.

This is why building a bottega is ultimately a practice of self-management as much as system design.

The workshop amplifies the operator.

A curious operator becomes more curious.

A disciplined operator becomes more leveraged.

An insecure operator can become buried in options.

A careless operator can produce mistakes at industrial speed.

The agents inherit the shape of the principal's attention.

That is not destiny. Good process can compensate for personality. Critics can challenge. Gates can slow. Memory can preserve.

But the master remains part of the system.

You cannot automate yourself out of the workshop and still call it yours.

The point is not to stand above the agents.

It is to remain present where the work becomes consequential.

That presence can be light.

A question.

A selection.

A refusal.

A change in the commission.

The smallest human intervention can redirect enormous machine effort.

That is leverage in its purest form.

It deserves care.

Build the workshop so your attention lands where it has the highest consequence.

Then protect that attention as fiercely as any other scarce resource.

The machines will bring speed.

Your job is to bring direction worth accelerating.

There is an economic stopping rule for the bottega too.

Add an agent only when its expected contribution exceeds the review and coordination it creates.

This sounds obvious and is easy to violate because generation cost is visible while attention cost is hidden.

A new agent can produce twenty analyses cheaply.

The principal now has twenty analyses to reconcile.

If the work requires ten minutes of generation and three hours of human comparison, the expensive resource was never compute.

It was judgment.

This means the one-person company of the agentic era will not necessarily be the person running the most automation.

It may be the person with the best ratio of machine production to human attention.

A disciplined operator keeps the number of active streams below the point where integration quality collapses.

This is the personal version of organizational span of control.

There is no universal number.

The limit depends on how standardized the work is, how good the tests are, how independent the streams are, and how consequential the decisions become.

The workshop should notice when review debt accumulates.

Unread agent reports.

Unmerged branches.

Decisions deferred because too many options exist.

Context that no longer fits in the principal's head.

These are signs that synthetic capacity has outrun human integration.

Do not add another apprentice.

Close loops.

The great promise of agents is not infinite parallelism.

It is selective parallelism under coherent judgment.

The bottega remains a workshop only while the work can still come back together.

Then attempt something that would have been unreasonable before the workshop existed.
