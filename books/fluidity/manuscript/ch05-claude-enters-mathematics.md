# Claude Enters Mathematics

On September 4, 2026, Anthropic published a result that would have sounded like science fiction only a few years earlier and like a category error to many mathematicians for much longer than that.

Claude had formalized Fermat’s Last Theorem.

The sentence needs immediate handling because it is almost perfectly engineered for misunderstanding.

Claude did not discover Fermat’s Last Theorem. Fermat wrote his famous marginal claim in the seventeenth century. Andrew Wiles, building on decades of twentieth-century mathematics and with a crucial correction completed with Richard Taylor, proved the theorem in the 1990s. Nor did Anthropic’s project produce a new human mathematical route that superseded Wiles.

What Anthropic reported was the first complete computer-checked formalization of the theorem: a vast body of mathematics translated into Lean so that a small trusted kernel could verify the formal proof object. Anthropic said Claude agents carried out most of the formalization autonomously over eleven days, coordinating through a system called Prove2Me. The completed project contained tens of thousands of theorems and, according to Anthropic, on the order of thirteen million lines of Lean.

The distinction between proof and formalization is not a footnote.

It is why the result matters for Navier–Stokes.

The popular fantasy about AI mathematics has focused on inspiration. A machine stares at an open problem, produces an ingenious proof, and humans applaud or panic. The Fermat project demonstrates a different capability: industrial-scale mathematical reconstruction under mechanical verification.

That capability is less romantic and may be more consequential.

Modern mathematics rests on an enormous informal stack. A research paper can say “by a standard argument,” cite a theorem whose statement uses slightly different conventions, suppress a measurable-selection detail, pass through an isomorphism everyone in the subfield accepts, and continue. Human experts know what is being licensed. Formal proof assistants do not.

To formalize serious mathematics is to discover how much mathematics is hidden inside the phrase *of course*.

Definitions need exact types. Structures need interfaces. Theorems need every hypothesis. Coercions between number systems need justification. Imported results must exist in the library in a usable form. A one-line human appeal to a familiar construction can become hundreds of lines of infrastructure because the proof assistant requires the object itself, not the social knowledge that the object is routine.

This is why formalization used to look like a heroic manual craft.

It still is, but the economics are changing.

If agents can absorb much of the translation and library work, mathematical formalization stops being something reserved mostly for foundationally important theorems, specialized communities, or researchers willing to spend years building machinery. It becomes a service the research process can call much earlier.

That is the first direct bridge from Fermat to Navier–Stokes.

A future Navier–Stokes project should not wait for the final proof before formalizing anything.

It should formalize the battlefield.

The equations. The domains. The notion of solution. The local existence theorem. The energy inequality. The weak formulation. The relevant Sobolev and Lebesgue spaces. Scale transformations. Embeddings. Interpolation inequalities. Pressure recovery. Vorticity identities. Regularity criteria. Blowup alternatives. Partial regularity components where feasible. Known special cases. Negative tests.

Not because Lean will solve the PDE by force.

Because formal infrastructure changes the cost of asking whether a proposed step is actually available.

A human analyst can write on a blackboard, “by interpolation we obtain…” and the room may accept the line because the exponents look familiar. A formal system has to instantiate the interpolation theorem with the correct spaces, dimensions, boundary conditions, constants, and regularity assumptions. The machine is annoying in exactly the way a Millennium problem needs.

The Fermat project also introduced a second bridge: coordination.

According to Anthropic’s account, Prove2Me organized the formalization as a directed acyclic graph of theorem statements. Agents did not simply open the same file and hope to avoid collisions. They worked against an explicit dependency structure. A theorem could be blocked because prerequisites were missing. Once a prerequisite landed, other branches could reuse it. The project became less like one model writing a long proof and more like a software organization building a mathematical codebase.

This is a profound shift in the metaphor.

The natural unit of AI mathematics may not be the answer.

It may be the theorem graph.

That graph matters even more when the proof is unknown. Formalizing Fermat’s Last Theorem begins with a destination and a known human route, even if rebuilding the route in Lean requires formidable work. Navier–Stokes begins with a destination and no known road.

A static dependency graph is therefore impossible.

What one can build is a living graph of obligations.

At the top sits the exact Clay target. Under it sit alternative strategic branches: global a priori control in a critical regime; exclusion of minimal blowup solutions; geometric depletion of vortex stretching; a new monotone quantity; a computer-assisted singularity construction; some route nobody has named yet. Each branch decomposes into lemmas. Some are known. Some are conjectural. Some are disproved. Some can be tested numerically. Some can be formalized. Some depend on infrastructure. Some can be attacked in toy models first.

Agents become useful when they can change the graph without losing the root.

A model proposes a lemma. Another checks its scaling. A literature agent finds a 1998 theorem implying it under stronger assumptions. A counterexample agent breaks the unrestricted version. The original lemma is revised. A formal agent discovers that one condition was implicit. A numerical agent searches for near-extremal fields. A human analyst decides the surviving statement is interesting enough to promote.

The graph records the history.

This is a different kind of mathematical memory.

Traditional papers remember successful paths. Research notebooks remember a subset of failed ones. People remember the emotional shape of dead ends and transmit some of it through seminars and students. Much disappears.

Agentic research can keep almost everything, but keeping everything is not enough.

A billion transcripts are not memory. They are landfill.

The graph is valuable because it stores failure as structure: this route depends on an inequality that is false; this criterion reduces to a known criterion; this numerical profile violates finite energy; this proof uses an axiom not allowed by the intended foundation; this branch is blocked on a missing library theorem; this candidate quantity is supercritical and no compensation mechanism is known.

That is why the formalization story should interest mathematicians who do not care about Lean.

The theorem prover is only one part of the discipline. The larger idea is to convert the research process from prose-shaped memory into checkable dependencies.

Anthropic’s August 2026 work around the Riemann hypothesis points in a complementary direction.

The company reported that a research version of Claude was given a serious attempt at the Riemann hypothesis. It did not solve it. Instead, the work led to an improvement in a longstanding lower bound concerning the proportion of nontrivial zeros on the critical line. Anthropic said mathematicians validated the result.

Again, the non-solution is the interesting part.

A famous open problem can be a generator of adjacent mathematics.

Human researchers know this intimately. One attacks the grand theorem, proves a lemma that survives after the main route collapses, and publishes the lemma because it moves a neighboring frontier. The research question was valuable even when the original target resisted.

For AI, this behavior is a sign that the model is beginning to participate in the ecology of research rather than only answer exercises.

Exercises have known destinations.

Research produces useful wreckage.

The Riemann episode also offers a warning. A laboratory can publish an AI-related mathematical result and the headline will naturally compress it toward the famous problem. “Claude tackles the Riemann hypothesis” travels farther than the exact bound. By the time the story reaches general audiences, an adjacent advance can become “AI nearly solved Riemann.” The same compression will be dangerous around Navier–Stokes.

A responsible system needs anti-headline architecture.

Every result should be attached to a target comparator.

What theorem did we prove?

What is the Clay theorem?

What hypotheses differ?

What remains open?

Can the difference be expressed mechanically?

If a model finds a global result for small initial data, the system should display in large type that smallness is not present in the general Clay statement. If a numerical method finds a candidate singularity in a related equation, the system should name the related equation before using the word singularity. If a proof assistant checks a regularity criterion, the UI should show the unresolved premise preventing the criterion from closing the problem.

This sounds like product design because it is.

Scientific interfaces influence scientific behavior.

A system that rewards completed tasks will encourage agents to carve tasks into solvable forms. A system that rewards exact progress toward a fixed target can use the same tendency productively, provided the distance to the target remains visible.

Anthropic’s broader science work in 2026 suggests the company understands that agentic science requires more than a language box. Its Claude Science workbench was described around auditable artifacts, tool access, computing resources, coordination, and reviewer agents. Whatever the eventual product details, the direction is clear: persistent scientific work requires an environment in which models can produce and inspect objects, not merely converse about them.

For Navier–Stokes, the objects are unusually diverse.

Lean files.

Python or Julia experiments.

High-precision numerical solvers.

Interval arithmetic certificates.

Symbolic derivations.

Fourier decompositions.

Bibliographic graphs.

Counterexample libraries.

Plots of rescaled candidate profiles.

Lists of hypotheses.

Proof dependencies.

A model that cannot move among these representations will be handicapped. A model that can move among them without preserving semantics will be worse.

The key ability is translation under audit.

Take a simple example. A human paper defines a vorticity quantity, proves an inequality in integral notation, and later transforms to a Littlewood–Paley decomposition. An AI system might translate the inequality into code to test it numerically. It might formalize a special case in Lean. It might rewrite the quantity in Fourier variables to compare against another paper. Each translation creates a chance to change normalization, boundary conventions, sign, or constants.

The research institution therefore needs provenance.

Where did this definition come from?

Which transformation produced this version?

What was checked exactly?

Which claims are numerical?

Which are symbolic?

Which are formal?

Which remain human judgments?

The phrase *auditable artifact* is not administrative garnish in this setting. It is the difference between a research result and an impressive demo.

The third bridge from Anthropic’s 2026 mathematics work is scale.

Anthropic’s Fermat formalization reportedly consumed billions of generated tokens. Token counts are a crude measure. They do not map cleanly to insight, cost, or mathematical value, and one should resist turning them into a pseudo-physical law of theorem proving. Yet the scale itself tells us something.

Formal mathematics can absorb enormous amounts of machine labor.

That labor is not all “thinking” in the grand sense. It includes failed attempts, compiler-guided repair, library lookup, boilerplate, elaboration, refactoring, duplicate exploration, and local proof search. Humans are expensive at these tasks because our attention is scarce. Machines can spend extravagantly.

The change resembles what happened to computation in other fields. Scientists once rationed CPU cycles because every run mattered. As compute became cheaper, they ran ensembles, sweeps, ablations, and searches that would have seemed wasteful before. Cheapness did not remove the need for scientific judgment. It changed which experiments were economically reasonable.

Mathematical search is entering the same regime.

A human analyst might test three possible decompositions carefully.

An agent system can test three thousand crudely, throw away 2,990 automatically, and ask the analyst to examine ten.

The danger is obvious. If the filters are weak, the system sends the human 2,000 false positives and calls that acceleration.

The success of AI mathematics will be measured less by how many ideas it can emit than by the precision of its funnels.

Fermat formalization is a favorable environment for funnels because Lean supplies a hard local verifier. An invalid proof term does not pass. The open frontier is harder. A candidate *strategy* can be mathematically coherent and still lead nowhere. There is no compiler error for “this will consume six months and terminate in a known endpoint obstruction.”

That requires higher-level critics.

Some can be automated from the literature.

Does the argument survive scaling?

Does it imply a known false statement in a nearby model?

Is its central inequality already known to be false?

Does it assume a norm that can become large under rescaling?

Is the supposed new theorem equivalent to a known criterion?

Other judgments will remain difficult.

Does the idea have leverage?

Does it exploit exact structure rather than generic machinery?

Does it create a new observable or merely rename an old one?

Is the computational evidence pointing toward a theorem or toward a numerical artifact?

Would a human expert bet a month on it?

This is where the phrase “Claude enters mathematics” becomes more interesting than “Claude gets good at math.”

Entering a field means entering its institutions of error correction.

A student does not become a mathematician by answering increasingly difficult problem sets. The transition happens when answers stop existing in the back of the book. The student learns to ask questions whose importance is uncertain, to distinguish a gap from a detail, to discover that a beautiful idea is false, to accept criticism, to read enough history to know what has already been tried, and to produce arguments other people can trust.

AI systems are beginning to be placed inside analogous loops.

The theorem prover is the harsh adviser who refuses an unjustified step.

The reviewer agent is the skeptical colleague.

The literature system is the memory of the field.

The numerical cluster is the experimental notebook.

The dependency graph is the group’s whiteboard.

The human mathematician remains the person responsible for deciding what deserves belief and attention.

At least for now.

Navier–Stokes is where these pieces could become one research organism.

The remarkable thing about Anthropic’s 2026 results is not that they make a Millennium solution inevitable. Nothing in those results justifies that confidence.

They make the attempt legible.

A few years ago, “an AI lab solves Navier–Stokes” was a sentence with no mechanism behind it. One could imagine a smarter model and stop there.

Now there is a plausible engineering outline.

Formalize the target.

Build the surrounding theory.

Represent the dependency graph.

Let many agents explore under exact bookkeeping.

Use computation to search spaces too large for human curiosity budgets.

Use adversarial agents and known negative results to kill seductive routes.

Promote surviving conjectures into formal obligations.

Keep the human experts close to the narrow end of the funnel.

Repeat until either the graph closes or the research produces something valuable nearby.

This is not a prediction that it will work.

It is the first time the words *how it could work* can be written without magic.

There is one further distinction that changes how the Fermat result should be read: reconstruction at scale can itself improve discovery infrastructure.

A formalization is not only a checked monument to a theorem already known. It creates a searchable, typed, executable map of mathematical dependencies. Definitions that once lived in prose become objects agents can manipulate. Lemmas that were implicit become reusable interfaces. Proof obligations that human experts discharged through context become explicit edges.

That matters because research agents need a world in which they can ask precise counterfactual questions.

What breaks if this hypothesis is weakened?

Which downstream theorems depend on this lemma?

Can this intermediate result be generalized without increasing the axiom footprint?

Is there another proof of this node that avoids a library component we do not trust?

Which parts of the proof use the arithmetic nature of the problem and which are generic formal infrastructure?

A huge formalization makes those questions computationally tractable in a way a PDF does not.

The same mechanism is beginning to appear outside number theory. By 2026, large machine-assisted Lean developments were reaching modern PDE and stochastic analysis. A public project formalized global Leray–Hopf weak existence for three-dimensional incompressible Navier–Stokes while explicitly refusing to claim smoothness or uniqueness. That is exactly the kind of boundary-aware artifact this book wants.

The important sentence is not “AI has formalized Navier–Stokes.”

It is “part of the known Navier–Stokes theory now has a machine-checkable frontier.”

Once weak existence sits inside a formal environment, a new smoothness argument can connect to a trusted baseline instead of rebuilding the definition of a weak solution from scratch. A regularity criterion can be attached above it. A candidate theorem can show exactly where it strengthens the known result. The formal system can display the open edge between “global weak solution exists” and “the solution stays smooth and unique in the required sense.”

That open edge is a better research object than the phrase *Millennium problem*.

Anthropic’s role in this ecosystem is therefore less exclusive than the title may suggest. The company is the protagonist, not the owner of machine mathematics. OpenAI has reported model-generated research advances with formal certificates. DeepMind has developed formal and semi-formal mathematics systems and contributed to AI-assisted fluid singularity discovery through collaborators. Academic formalizers are building PDE infrastructure. Open-source communities maintain Mathlib and independent checkers.

This competition improves the premise.

A future Anthropic Navier–Stokes proof should be attacked by systems Anthropic did not train.

If OpenAI can independently reprove a central lemma, that is useful. If a DeepMind system finds a counterexample, more useful. If an open Lean community rebuilds the theorem statement and finds a mismatch, invaluable. The goal is not to preserve Anthropic’s victory condition. It is to destroy every version of the claim that is not mathematics.

This changes what “Claude enters mathematics” means.

It does not mean Claude walks into a silent room and becomes the mathematician.

It means Claude enters an adversarial civilization of proofs, libraries, other models, reviewers, journals, numerical analysts, and institutions whose job is to refuse premature certainty.

That is a much harder environment than a benchmark.

It is also a healthier one.

Benchmarks reward producing a known answer. Research communities reward results that survive other people trying to make them false. A model can score highly on one and fail catastrophically at the other because the second requires provenance, novelty judgment, target discipline, and the ability to live with unresolved uncertainty.

The Riemann episode is encouraging precisely because the grand target did not collapse. The attempt yielded something narrower that human mathematicians could inspect. That pattern is scientifically credible. Most ambitious research programs should produce adjacent results before they produce the headline theorem.

Navier–Stokes gives us a way to measure whether the institution is learning from those adjacent results.

Does a new criterion narrow the catastrophe specification?

Does a formalized theorem remove ambiguity from the dependency graph?

Does a failed numerical singularity produce a reusable no-go condition?

Does a new PDE library reduce the cost of formalizing the next paper?

Does a model-generated lemma survive independent proof?

Does a six-billion-token run leave the system less likely to waste the next six billion in the same way?

If the answer is no, scale is theater.

If the answer is yes, even an unsolved Millennium problem can generate compounding scientific capital.

That may be the most important lesson of Anthropic’s first visible entrance into serious mathematics.

The result is not that intelligence has become a theorem vending machine.

The result is that mathematical labor can now be organized at a scale where verification, memory, and coordination become first-class research variables.

Navier–Stokes is where we find out whether those variables can help produce an idea nobody has yet had.