# Build the Navier–Stokes Stack

If Anthropic announced a “Navier–Stokes team,” the least interesting question would be which model they used.

Models change too quickly. The problem does not.

The useful question is what the team would build around the model so that three years of machine labor produced something better than three years of very expensive mathematical autocomplete.

This chapter is the speculative center of the book.

Nothing that follows should be read as a description of an existing Anthropic project. As of September 5, 2026, Anthropic has not publicly announced that it is running the system I am about to describe. The components, however, are no longer imaginary: long-running agents, code execution, scientific tooling, multi-agent coordination, theorem proving in Lean, reviewer roles, high-precision numerical computation, retrieval, and auditable artifacts all exist in demonstrated form somewhere in the current ecosystem.

The proposal is to combine them around one theorem.

Call it the Navier–Stokes stack.

At the bottom is the canonical target package.

This should be small enough that experts can read it. It contains the exact Clay formulation or a formally proved equivalent. The target package changes rarely. Any change triggers extraordinary review because everything else in the project points toward it.

The target package is not owned by a model.

It is constitutional law.

Above it sits the formal foundation: the machine-checked body of known mathematics needed to express serious routes. Function spaces, local theory, energy bounds, critical scaling, selected regularity criteria, pressure machinery, vorticity calculus, weak formulations, compactness, and the parts of harmonic analysis the project repeatedly uses.

This layer should be public and reusable.

Above that sits the theorem graph.

The graph is where known mathematics meets speculation. Every node is a statement. Every edge is an implication or dependency. A node can be known and formalized, known but informal, conjectural, numerically supported, disproved, superseded, or blocked. Strategic branches connect candidate ideas to the target.

The graph is the project’s memory and its task allocator.

An agent does not receive “solve Navier–Stokes.”

It receives “close or kill node 18,427.”

This sounds less inspiring. It is how large things get done.

The graph should contain alternative routes from the beginning. A regularity program. A blowup program. Geometric approaches. Critical-space estimates. Rigidity and minimal-counterexample strategies. Computer-assisted singularity construction. Automated theorem mining from existing criteria. Representation search. No branch is declared the official theory merely because it has the most recent success.

This prevents institutional lock-in.

Humans fall in love with approaches. Labs do too. Once a group has invested years in one route, evidence against the route becomes emotionally and financially expensive. A machine system can diversify more cheaply if the architecture treats competing strategies as a portfolio rather than a civil war.

The next layer is the literature engine.

Do not build a chatbot that summarizes papers.

Build a mathematical parser whose outputs can be challenged.

For each paper, extract theorem statements, definitions, hypotheses, domains, spaces, scaling, key proof mechanisms, dependencies, and explicit limitations. Preserve source links and the exact text around important claims. Map equivalent notation. Identify when one theorem implies another under known embeddings. Attach confidence to the extraction, not to the mathematics itself.

Human curators review high-centrality entries.

The literature engine should be able to answer questions a human survey article cannot update continuously.

Which published regularity criteria are invariant under the natural scaling?

Which rely on one velocity component?

Which localize in space?

Which pressure criteria become redundant under stronger velocity assumptions?

Which proposed blowup scenarios are already excluded by known nonexistence theorems?

Which proofs use a structural feature absent from Tao’s averaged equation?

Which endpoint gaps recur across apparently different approaches?

This is the field turned into a queryable object.

Above it sits the conjecture factory.

I dislike the name because it sounds like a machine designed to produce mathematical slogans. The real job is controlled variation.

Take known inequalities and alter exponents within scaling constraints.

Combine observables from different regularity criteria.

Generate localized variants.

Search weighted quantities.

Transform between velocity, vorticity, pressure, and frequency representations.

Ask whether a quantity has an evolution law with exploitable cancellation.

Construct plausible strengthening or weakening of known lemmas.

Every generated conjecture is disposable.

This layer should be cheap and slightly reckless.

Directly above it is the counterexample factory.

This one should be ruthless.

Every universal claim is attacked before it earns formal attention. Symbolic checks. Scaling checks. Random fields. Adversarially optimized divergence-free fields. High-frequency concentration. Toy models. Averaged equations. Known singular or wild solutions in neighboring classes. Boundary cases of embeddings. Numerical extremizer searches.

Most conjectures should die here.

A healthy project has a high mortality rate.

If ninety percent of generated inequalities survive the first counterexample pass, the counterexample pass is weak.

The survivors enter the proof-planning layer.

Specialist agents attempt informal proofs, but the deliverable is not polished prose. It is an obligation graph: these are the lemmas required, these are known, these are new, these depend on this regularity, this step is the conceptual bottleneck.

A good proof planner reduces ambiguity.

It should also be allowed to conclude that the conjecture is strategically useless even if true.

That judgment prevents the formal layer from filling with beautiful irrelevancies.

The next layer is the numerical laboratory.

Here the stack branches away from pure theorem proving.

High-resolution Navier–Stokes solvers.

Spectral codes.

Continuation methods.

Neural representations where useful.

High-precision arithmetic.

Automatic differentiation.

Interval packages.

Optimization over initial data.

Search for self-similar profiles.

Extremizer calculations for candidate inequalities.

The laboratory is not a single solver because no single numerical method deserves that much authority.

Agents design experiments and compare methods. Every result is attached to code, configuration, precision, and provenance. Interesting numerical objects become theorem nodes, not conclusions.

Beside the numerical laboratory sits the formalization factory.

Once a claim crosses a significance threshold, agents translate it into Lean. Routine supporting lemmas are filled in. Missing library infrastructure becomes explicit. The proof checker rejects local errors. The theorem graph updates only after the formal object builds.

This factory should not be the last step.

It should operate continuously on foundational and high-risk nodes.

The next layer is adversarial review.

Reviewer agents do not see the generating chain unless necessary. They receive the claim and relevant dependencies. Their job is to break it.

One reviews scaling.

One reviews hypotheses and target equivalence.

One tries to construct counterexamples.

One checks literature novelty.

One audits formal dependencies and axioms.

One audits numerical reproducibility.

One asks whether the argument also proves a known false statement in a nearby model.

For major claims, use different model families and external systems.

The reviewers should have asymmetric incentives. A false positive is expensive. “I found no issue” should carry little prestige. A decisive flaw should be valuable.

Above all this sits the coordinator.

The coordinator is the component most likely to be mistaken for an “AI mathematician.” Its actual job is research management.

Which branches deserve more compute?

Which blocked node is central enough to justify formal infrastructure work?

Which numerical anomaly deserves independent reproduction?

Which results should be sent to humans?

Which branch is repeating a known dead end?

Where are reviewer agents disagreeing?

What is the shortest currently plausible path to the root theorem?

What recent result changes the portfolio?

The coordinator should not have final authority over truth.

Its job is to allocate attention.

That distinction is essential.

A company can optimize an agent to maximize apparent project progress. The agent will eventually learn that declaring nodes closed makes the graph look healthy. Truth requires independent constraints the coordinator cannot edit.

The canonical target cannot be weakened by the coordinator.

Formal checker failures cannot be overruled.

Counterexamples cannot be hidden because they are inconvenient.

Human reviewers can freeze branches.

External reproduction can downgrade internal confidence.

Governance lives in architecture.

The human layer sits above and through the entire stack.

Not one ceremonial mathematician asked to bless the final output.

PDE analysts help define the strategic search space and evaluate leverage.

Numerical analysts design reliable experiments and error models.

Formal-methods experts curate definitions and trust boundaries.

Research engineers maintain reproducibility.

Mathematical physicists and turbulence experts contribute intuition about plausible structures.

Independent reviewers attack mature claims.

The human committee’s most valuable power may be the power to say, “This is technically impressive and not interesting. Stop.”

Machines are bad at opportunity cost when the cost assigned to them is cheap compute.

Humans have finite careers and therefore a refined sense of leverage.

The stack should use that scarcity deliberately.

Do not ask experts to inspect every generated proof.

Ask them to shape filters and review survivors.

This changes the ratio of machine labor to human judgment.

A single expert decision can launch a thousand agent-hours. A single counterexample can terminate them. The human becomes less of a line editor and more of a capital allocator for curiosity.

The stack also needs a public boundary.

Research inside a company will naturally include proprietary tooling and unfinished ideas. A Millennium project, however, should have an explicit graduation path into public mathematics.

When a result becomes substantial, publish the statement and evidence early enough for external criticism.

When formal infrastructure is stable, upstream it to public libraries where possible.

When a numerical candidate matters, release enough code and data for independent reproduction.

When a proof route appears viable, invite adversaries outside Anthropic before the company becomes emotionally committed to the claim.

When the full theorem closes, the public artifact should be verifiable without private model access.

This is not philanthropy.

It is a correctness mechanism.

Open scrutiny introduces independent assumptions, independent toolchains, and independent incentives. A private team can become a monoculture no matter how many internal agents it runs.

The stack should therefore be designed to leak *verification* outward even if discovery remains concentrated inside.

There is another design choice: whether to pursue smoothness or blowup more aggressively.

The machine economics initially favor the blowup side. A counterexample is one object. Search can hunt for it. Numerical methods can generate candidates. Computer-assisted proof can sometimes enclose a concrete solution.

The positive side requires a universal mechanism.

But the asymmetry is not decisive. The blowup object may be extraordinarily unstable or impossible. Meanwhile machine theorem mining could uncover a hidden coercive structure in the positive direction.

The portfolio should follow evidence.

If numerical singularity searches repeatedly fail under increasingly adversarial objectives and rigorous exclusion results accumulate, the smoothness branch gains value.

If a robust candidate profile appears and survives independent computation, move resources toward making it exact.

This is research as Bayesian allocation without pretending anyone knows the correct probabilities.

The stack should also know when to stop.

Not stop the entire problem. Stop branches.

A route that has absorbed enormous compute without reducing a central uncertainty needs a review. A conjecture that survives only because counterexample search cannot reach the relevant scale should not accumulate confidence automatically. A formalization project whose library costs dwarf its strategic value can be deferred.

Machine abundance makes stopping more important because the marginal cost of continuing can appear near zero.

Compute is not zero. More important, project attention is not zero. A branch that never dies clutters the graph and consumes reviewer bandwidth.

Pruning is part of reasoning.

What would success look like before the theorem?

A public formal library of serious three-dimensional Navier–Stokes theory.

A machine-readable map of regularity criteria and obstructions.

New verified lemmas produced through agent search.

Numerically discovered structures later proved rigorously.

Faster rejection of false inequalities.

Independent papers by mathematicians using the infrastructure for questions unrelated to the Millennium prize.

A community that can reproduce the project’s claims without trusting Anthropic.

If those happen and Navier–Stokes remains open, the stack has still changed mathematics.

This is why the title of the book is less reckless than it appears.

“How Anthropic solves Navier–Stokes” need not mean a model wakes up one morning with a proof.

It can mean Anthropic builds an environment in which the field can afford more search, more checking, more memory, and more adversarial scrutiny than any previous generation.

The theorem may be the last output of the system.

The institution is the first.
