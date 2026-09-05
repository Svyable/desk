# Many Agents, One Theorem

A mathematician can work alone for years and still be working with other people.

The notation came from somewhere. The lemmas have authors. The standard examples were chosen by a community. A technique carries the fingerprints of the field that invented it. A seminar question from five years ago can sit quietly inside a proof until the day it becomes useful.

Solo mathematics is often collaboration stretched through time.

Multi-agent AI compresses that collaboration into a workspace.

Anthropic’s formalization of Fermat’s Last Theorem made the idea concrete. The company described many Claude agents coordinating against a theorem-dependency graph. Different agents could attack different formal obligations, reuse completed results, and continue from a shared mathematical state. The striking part was not merely parallelism. Parallelism is easy to imagine. Give ten models ten lemmas and wait.

The hard part is making ten efforts compose.

Software teams know this problem intimately. Adding developers to a project can slow it down because communication, interfaces, merge conflicts, duplicated work, and mismatched assumptions consume the gains from parallel labor. Mathematics has the same disease. Two agents can prove lemmas that are individually correct but useless together because their hypotheses do not align. Five agents can independently rediscover the same theorem. A hundred agents can create a forest of local abstractions no one can navigate.

The scaling problem is coordination, not intelligence.

This becomes extreme for Navier–Stokes because the final route is unknown. Fermat formalization could, in broad terms, follow established mathematics toward a known theorem. A Navier–Stokes research program needs agents to explore while simultaneously deciding what should be explored.

That turns the theorem graph into a market for attention.

Every open node has a value that is uncertain.

Some nodes are necessary infrastructure. Formalize this Sobolev embedding. Prove a density lemma. Establish a pressure estimate in the chosen setting. These are boring but reliable investments.

Some nodes are strategic bottlenecks. If this new scale-critical bound holds, a known regularity criterion closes the theorem. If this spectral condition holds, a candidate blowup profile becomes stable enough for a computer-assisted argument. These are expensive and potentially transformative.

Some nodes are lottery tickets. Try this strange commutator. Search this family of anisotropic weights. Look for a monotone functional inspired by a neighboring equation. Most fail.

Some nodes should never have been opened. They rest on a false premise or duplicate old work.

A research institution needs a way to allocate effort among them.

Humans do this through judgment, reputation, curiosity, deadlines, advisor influence, fashion, and accident. A machine system can add explicit signals: estimated dependency centrality, historical failure rate of similar routes, formal distance to the target, novelty relative to the literature, numerical evidence, scaling compatibility, cost of testing, and disagreement among critics.

This is not a recipe for letting an algorithm decide what mathematics matters.

It is a way to make resource allocation visible enough to argue about.

Suppose the system has three hundred active hypotheses. A coordinating agent ranks them by expected information gain rather than by the probability of immediate proof. One lemma has only a ten percent chance of being true, but a quick counterexample search could kill an entire branch. Another has an eighty percent chance of being true but would merely reprove a known subcritical estimate. A third requires substantial formal library work but would make dozens of future claims machine-checkable.

The “best” task depends on the state of the whole project.

This is why many agents need one theorem.

Without a common target, parallelism degenerates into content production.

The Navier–Stokes project should therefore have a constitution stronger than a prompt.

The root theorem is fixed.

Every strategic branch must state its implication path to the root.

Every conjectural node records status: untested, numerically supported, informally proved, formally checked, refuted, superseded, or blocked.

Every result records hypotheses in machine-comparable form.

Every agent can open new nodes but cannot silently weaken existing ones.

Every branch has an adversary assigned before it receives substantial compute.

Every numerical claim carries the exact code, parameters, precision, domain, and error model used to produce it.

Every formal theorem can be traced to its dependencies.

Every human intervention is recorded as an intervention rather than magically attributed to the model.

This sounds like governance because a large theorem search is a governance problem.

Agents have local incentives even if they do not possess human motives. A proving agent receives a task and searches for completion. A reviewer receives a claim and searches for defects. A coordinator tries to increase project progress. A literature agent rewards novelty detection. These roles create different error profiles.

The diversity is useful only if the roles are genuinely separated.

Ask the same model to write a proof and then “check whether your proof is correct,” and it may remain anchored to its original reasoning. Give another instance the proof without the generating transcript and instruct it to break the argument, and you may gain some independence. Use a different model family, proof assistant, numerical codebase, or human expert and you gain more.

Independence is a resource.

A hundred identical agents sharing the same training data and toolchain can form a unanimous committee around the same hidden error.

This is where Anthropic’s own concern with trustworthy agents becomes mathematically relevant. Agent systems create risks from long horizons, tool use, hidden state, and compounding mistakes. In theorem research, the damage is epistemic rather than physical, but the mechanism is familiar: one early error becomes an accepted dependency and thousands of downstream steps build on it.

The graph must therefore propagate distrust as well as truth.

If a foundational lemma is revised, every dependent node should be invalidated automatically until rechecked.

If a numerical certificate was produced with a bug, the system should identify every theorem or conjecture that cited it.

If a definition changes, proof objects depending on the old definition should not remain green through textual similarity.

Formal systems already enforce some of this at the code level. The broader research graph has to enforce it across informal, numerical, and conceptual artifacts too.

Think of a theorem project as a build system.

Change a header file and downstream modules recompile.

Change the definition of admissible blowup and the research claims should recompile too.

This build-system mentality is one of the least glamorous and most promising imports from software engineering into mathematics.

It also changes the value of small proofs.

In ordinary research, a technical lemma may be proved once inside a paper and then become difficult to reuse because the notation and hypotheses are entangled with the local argument. In a formal agent system, reusable lemmas become infrastructure. A carefully generalized estimate can unlock hundreds of branches. The system can discover that spending a day strengthening a low-level theorem saves weeks of duplicated work.

Anthropic’s Fermat formalization appears to have benefited from exactly this style of reuse. Formal libraries reward modularity because the checker requires explicit interfaces.

Navier–Stokes will need much more of it.

PDE analysis is full of technical results that humans treat as ambient knowledge: approximation by smooth functions, weak convergence, lower semicontinuity, singular-integral bounds, Sobolev embeddings, product estimates, compactness, mollification, localization, pressure decompositions, Littlewood–Paley tools, Grönwall inequalities, heat-semigroup estimates. A model trying to formalize a serious research proof will collide with any gaps in the library immediately.

One response is frustration.

The better response is to let infrastructure agents fill the gaps in parallel with discovery agents.

This creates two tempos of mathematical work.

The frontier group chases the unknown.

The infrastructure group makes the known machine-usable.

Humans already organize fields this way accidentally. Textbook writers, library maintainers, survey authors, formalizers, and expository mathematicians build roads others use. Academic incentives often underreward this labor because the novelty is less glamorous. Machine research may value it correctly because every formal dependency makes its return measurable.

A theorem library is capital.

The metaphor becomes especially literal when computation is metered. Spend tokens once to formalize a robust theorem and every future agent can import it cheaply. Fail to generalize it and the system pays the same proof cost repeatedly.

This is one reason the billions of generated tokens in Anthropic’s Fermat project should not be read only as extravagance. Some of that work produced reusable mathematical infrastructure. The right accounting question is not “how many tokens per theorem?” but “which formal assets reduce the cost of the next theorem?”

For Navier–Stokes, the investment horizon could be years.

A serious program might begin without any expectation of closing the Millennium problem quickly. The first objective could be to formalize enough of the modern three-dimensional regularity theory that a future candidate proof has somewhere trustworthy to land. That work would already be scientifically useful. It would expose hidden assumptions in standard arguments, improve libraries, create educational artifacts, and make comparison among criteria exact.

Meanwhile, exploration agents can work in less formal environments where speed matters more than certainty.

This separation is essential.

Do not require every speculative idea to be formalized before it can be tested. That would make the system too slow.

Do not allow a speculative idea to graduate into a central dependency without increasing levels of verification. That would make the system too credulous.

Research needs stages of trust.

A candidate functional might begin as a symbolic expression generated by an agent.

A scaling checker marks it critical.

A symbolic differentiator derives an evolution identity.

A numerical agent tests the identity and the sign behavior on known flows.

An adversary finds no simple counterexample.

A human analyst recognizes a promising cancellation.

A formal agent proves the identity.

A second group proves an estimate controlling the bad term.

The theorem graph shows that the estimate implies a known regularity criterion.

Only then does the branch move from “interesting” to “strategic.”

The machine contribution at each stage is different. So is the meaning of failure.

This staged process also protects against a subtle pathology: formalizing nonsense beautifully.

Proof assistants guarantee correctness relative to statements, not importance. If agents are rewarded for producing checked theorems, they can generate an infinite literature of trivialities. A system can look extraordinarily productive while making no progress toward the root.

The common theorem gives the work a gradient.

How did this result change the unresolved frontier?

Sometimes the answer will be “it did not, but it became reusable infrastructure.” That can be legitimate. Sometimes the answer will be “it killed a plausible route.” Also legitimate. What should become suspicious is a growing collection of formally valid artifacts with no effect on dependencies, uncertainty, or capability.

This is another place where human research institutions have lessons for AI.

Publication counts can rise while knowledge barely moves. Metrics become targets. Fields accumulate papers that are correct but incrementally disconnected. An AI lab can reproduce the pathology at machine speed if it measures the wrong thing.

The Navier–Stokes project needs metrics that are difficult to game.

Number of open high-centrality dependencies reduced.

Number of conjectural implications converted into checked ones.

Number of false branches killed before human review.

Coverage of foundational theory formalized.

Independent reproductions of numerical claims.

Reduction in assumptions required by the strongest known route.

Novel results validated outside the lab.

These are still imperfect. Goodhart’s law does not disappear because the dashboard is mathematical. But they point toward epistemic progress rather than artifact count.

The many-agent architecture also creates a new form of specialization.

One agent can become unusually good at scaling and dimensional analysis.

Another at Lean formalization of functional analysis.

Another at interval arithmetic.

Another at searching PDE literature across notation changes.

Another at constructing pathological examples.

Another at numerical continuation of self-similar profiles.

Another at converting an informal proof into the smallest list of explicit obligations.

Models may share a common base, but specialization can arise through context, tools, memory, fine-tuning, and evaluation.

This resembles a research group, except roles can be cloned.

If one counterexample specialist is useful, run fifty against a high-value conjecture.

If a formalization branch becomes blocked on routine measure theory, assign a swarm.

If a candidate singular profile appears, duplicate the numerical effort across independent solvers and representations.

Cloning changes research economics in a way human institutions cannot match.

Human expertise takes years to train and cannot be copied overnight. Machine expertise can be replicated once the workflow is learned.

The risk is monoculture.

Fifty clones can be fifty copies of the same blind spot.

So the institution should spend deliberate effort on heterogeneity. Different prompts are a weak form. Different model checkpoints are stronger. Different proof assistants, numerical methods, libraries, and external research groups are stronger still. Human adversaries with reputational incentives to find flaws are invaluable.

A theorem worth a million dollars should be attacked by systems that did not help write it.

That should be a rule.

No single agentic stack should be allowed to be judge, jury, and historian of its own success.

This is where the research program extends beyond Anthropic.

Even if Anthropic generates the decisive proof, the proof should leave Anthropic quickly. Formal files should be buildable elsewhere. Numerical certificates should have independent checkers. The natural-language argument should be circulated to PDE experts who are not invested in the project. Other model labs should be invited to attack it. The community should try to restate the result using different notation and perhaps formalize critical pieces in another system.

The goal is not to protect a company’s claim.

It is to destroy every version of the claim that cannot survive independence.

If something remains after that, mathematics has gained more than a headline.

It has gained a theorem.

Many agents can make the search faster.

Only one theorem can make them all right.
