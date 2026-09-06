# What “Solved” Actually Means

A million dollars is an efficient way to ruin a mathematical conversation.

Mention the Clay prize and almost any discussion of Navier–Stokes acquires the atmosphere of a treasure hunt. The equations become a safe with one loose hinge. The mathematician becomes a codebreaker. Somewhere, presumably, there is a page on which one clever substitution turns the lock and releases a check.

The real prize problem is less cinematic and more exacting.

Before asking how artificial intelligence might solve Navier–Stokes, it is worth being almost pedantic about the word *solve*. A system that cannot keep the target fixed will optimize its way into a nearby theorem and celebrate too early. Humans do this as well. The literature around famous open problems is full of ideas that prove something interesting, sometimes something profound, while leaving the actual quantifiers untouched.

The official Clay formulation, written by Charles Fefferman, gives several acceptable routes. In broad terms, the positive route asks for global existence and smoothness of solutions to the three-dimensional incompressible Navier–Stokes equations for smooth divergence-free initial data satisfying the required decay or periodic conditions. The negative route asks for a mathematically admissible breakdown. The details matter enough that anybody serious about the problem should read the statement rather than rely on this paragraph.

That instruction sounds trivial. For an AI research system, it is architecture.

The first object in a Navier–Stokes proving stack should not be a chat prompt that says “solve Navier–Stokes.” It should be a formal target whose relationship to the Clay statement has been checked independently, line by line, by domain experts and by multiple representations. The system should know which domain it is working on. It should know the assumptions on the initial data. It should know whether forcing is present. It should know what regularity is required. It should know whether it is proving local existence, global weak existence, global smooth existence, uniqueness, partial regularity, or an extension criterion.

Those words are close enough to cause trouble.

Suppose a model proves that smooth solutions exist for a short time. Excellent. That result is part of the classical theory. It does not settle global regularity.

Suppose it proves a global weak solution exists. Also excellent. Leray’s work has given us that kind of result since the 1930s. It does not settle whether the smooth solution remains smooth.

Suppose it proves that a solution remains smooth provided a certain critical norm stays finite. Useful. That is a regularity criterion. Unless the system can prove the norm stays finite under the Clay hypotheses, the criterion tells us where the gap lives rather than closing it.

Suppose it proves global regularity for sufficiently small initial data in a critical space. Important, but still not the general problem.

Suppose it proves a theorem in two dimensions. Beautiful mathematics. Wrong dimension.

Suppose it proves a theorem for an averaged version of the nonlinearity. That may reveal exactly why the true equation is special. It is still not the true equation.

Suppose it generates a numerical trajectory in which vorticity grows by ten orders of magnitude and appears to obey a self-similar scaling law. Now we have a candidate worth understanding. We do not yet have finite-time blowup.

The danger is not that these results are worthless. The danger is that they can sound like the headline if compressed carelessly.

This is where modern AI systems encounter a problem deeper than hallucinated citations. Language is tolerant of family resemblance. Mathematics is not.

A sentence such as “we establish global solutions under the energy inequality” can be perfectly true and almost irrelevant to the regularity target. A generated proof may use “solution” consistently while sliding from classical to weak meaning in a way that prose hides. A theorem prover will prevent that only if the types and definitions encode the distinction correctly. The machine checker is merciless about what has been formalized and completely indifferent to what the author intended.

This is why formal verification does not eliminate human responsibility at the front of the process.

There are two ways to prove the wrong theorem.

The obvious way is to make a logical mistake.

The more interesting way is to state the wrong theorem correctly.

The second is about to become a larger problem in AI-assisted mathematics because agents are extremely good at satisfying specifications. If the specification is weaker than the scientific question, the system can produce a flawless artifact that creates false confidence. Software engineers know this failure mode well. A program can pass every test because the tests do not encode the real requirement. The equivalent in mathematics is a proof object accepted by a kernel whose theorem statement has drifted from the intended claim.

For Navier–Stokes, target drift can happen in the smallest choices.

A boundary condition changes. A decay condition disappears. A norm is strengthened. A solution class becomes more regular at the start than the Clay statement permits one to assume later. A pressure term is projected away under conditions that are not available. A constant depends on a quantity that was supposed to be controlled uniformly. A continuation argument assumes the very regularity it is intended to extend. A numerical ansatz imposes symmetry that excludes the dangerous geometry.

None of these mistakes needs to look stupid.

Many would look like research.

The right response is not to avoid intermediate theorems. The path to a Millennium problem almost certainly runs through them. The response is to make the dependency on the target explicit.

Imagine a large directed graph. The node at the top is the exact formal target. Beneath it are candidate sufficient conditions. Beneath those are lemmas. Some branches lead to known theorems. Some lead to numerical conjectures. Some terminate in counterexamples. Some depend on infrastructure that has not been formalized. Every edge has a meaning: this theorem, with these hypotheses, would imply that theorem.

Now imagine that every agent in the system works inside that graph.

A model can be creative at the leaves without being allowed to redefine the root.

This is close to the architecture Anthropic described in its 2026 Fermat formalization. The Prove2Me platform maintained a directed acyclic graph of theorem statements so many Claude agents could decide what to prove next, reuse prior results, and avoid losing the structure of the project as the formalization grew enormous. Fermat’s Last Theorem already had a human proof; the problem was translating and reconstructing enough mathematics in Lean to make the proof machine-checkable. Navier–Stokes would add a more difficult layer: the graph cannot be fully designed in advance because the decisive route is unknown.

That makes target discipline more important, not less.

A serious system would treat implication as a budget.

Each time it moves away from the Clay statement into a sufficient condition, a model should be forced to explain what has been gained and what new obligation has been created. If global regularity would follow from a bound on a critical norm, the new research target is not “we found a criterion.” It is “prove this bound from the original data, or show why this route fails.” If blowup would follow from existence and stability of a particular self-similar profile, the new target becomes a chain of existence, spectral, perturbative, and embedding statements whose exact hypotheses can be audited.

This style of research sounds bureaucratic.

Good mathematics often hides how much bureaucracy it already contains.

Definitions are bureaucracy. Notation is bureaucracy. Lemma numbering is bureaucracy. Peer review is bureaucracy. A proof assistant is an exceptionally strict bureaucrat. The purpose of the machinery is to stop a seductive local success from being mistaken for the global claim.

The prize itself has another layer of bureaucracy that matters for AI.

Clay does not accept direct submissions of proposed solutions. Its published rules require a proposed solution to appear in a qualifying outlet. At least two years must pass after publication. The solution must achieve general acceptance in the global mathematics community before Clay decides whether to consider it in detail. The Institute deliberately refuses the role of instant referee for every claimed solution.

This has sometimes frustrated would-be solvers. In an AI era it may look prophetic.

If frontier models can produce thousands of plausible proofs of famous problems, the scarce resource becomes not generation but credible attention. No serious institution can become an inbox for machine-generated claims. The publication and acceptance requirements make the claimant carry the burden of entering the existing mathematical process.

A model does not get to route around the community by being fast.

That matters because even formal verification cannot settle every social question automatically.

A Lean proof can show that a theorem follows from a specified foundation and imported library. It cannot, by itself, show that the theorem statement captures exactly the natural-language Clay target unless that correspondence has been established. It cannot tell the community whether the formalization relies on axioms people consider inappropriate for the claim without someone inspecting the dependency base. It cannot guarantee that the proof is illuminating enough for humans to understand what new mechanism has been discovered. It cannot decide authorship. It cannot decide whether a proposed computational component is reproducible in an independently controlled environment.

Nor should we ask it to.

Mathematical truth and mathematical acceptance overlap without being identical processes.

The Pythagorean theorem does not become true when enough mathematicians vote for it. A valid proof is valid before a committee meets. Yet our knowledge that a long, novel, technically demanding proof is valid is socially produced through checking, reconstruction, exposition, independent work, and time. The more complex the artifact, the more this distinction matters.

AI increases complexity by making larger proofs economically possible.

Anthropic’s Fermat formalization is an extreme example. The company reported roughly thirteen million lines of Lean code and tens of thousands of theorems. No human will read such an artifact line by line in the way referees read a twenty-page paper. Trust has to be layered: trust the formal kernel, inspect the theorem statement, audit the axiom base, reproduce the build, sample the architecture, compare key intermediate results with known mathematics, and understand the human-level proof plan.

Now replace “formalization of known mathematics” with “novel Navier–Stokes solution.”

The burden increases.

A novel proof has to answer two questions at once.

Does it check?

What did it actually prove?

Those questions are so basic that they can seem insulting. They are not. Large systems fail at interfaces. The theorem statement is an interface between human intention and formal syntax. Imported lemmas are interfaces between local work and a library. Numerical certificates are interfaces between floating-point computation and exact inequalities. Generated code is an interface between a mathematical idea and an algorithm. A research paper is an interface between the machine artifact and the community expected to evaluate it.

The strongest AI mathematics program will be the one most suspicious of interfaces.

This is where Anthropic’s safety culture, usually discussed in the context of model behavior, becomes unexpectedly relevant to pure mathematics. A safety-minded system asks what happens when a powerful component optimizes against an incomplete specification. That is exactly the problem of proving the wrong theorem. It asks how to maintain human oversight across long autonomous tasks. That is exactly the problem of a research agent pursuing thousands of lemmas. It asks how to build auditability, interruption, and review into agentic workflows. Those features map cleanly onto the epistemic demands of theorem proving.

The analogy should not be pushed too far. A mathematical agent is not dangerous in the same way as an autonomous system controlling money, machines, or biological tools. But the design instinct is useful: do not confuse competent execution with aligned execution.

A proof agent can be misaligned with a theorem.

The most common version will not be dramatic. It will simply find an easier statement.

Humans have been doing this forever. We start with an impossible question, prove a tractable special case, and publish something meaningful. Research would be poorer without that instinct. The problem arises only when the success is narrated as if the target never moved.

For *Fluidity*, this becomes a rule: every intermediate success must carry its distance from the prize.

A new regularity criterion? State what remains to prove.

A candidate monotone quantity? Show whether it is scale critical and whether its derivative has an uncontrolled term.

A numerical singularity? State the equation, dimension, domain, symmetry, precision, and missing rigor.

A formalized PDE theorem? State the assumptions and compare them against the Clay formulation.

A model-generated proof sketch? Treat it as a proposal, not evidence.

A complete machine-checked proof? Audit the target, dependencies, axioms, and reproducibility before the adjectives start.

This discipline does more than protect against embarrassment. It improves search.

A research system that knows exactly why a result is insufficient can turn insufficiency into the next task. The distance from the target becomes structured information.

Suppose an agent proves global regularity assuming a bound in a scale-critical space. It should not close the ticket. It should open a new dependency: derive that bound, weaken the hypothesis, or construct data showing the route cannot be universal. Another agent can search the literature for equivalent criteria. Another can test whether the candidate quantity obeys an evolution inequality. Another can examine extremal configurations numerically. Another can formalize the criterion so that hidden assumptions surface.

The point is not to make research linear.

The point is to make wandering legible.

Mathematicians wander constantly. We change variables, study toy models, prove lemmas that turn out not to matter, explore symmetric cases, compute examples, read neighboring fields, and occasionally discover that the interesting theorem is not the one we started with. Human memory and notebooks absorb much of this mess. An AI institution can afford to preserve it in more explicit form.

That preservation may be one of its largest advantages.

Famous problems accumulate rediscoveries. A new generation finds a route, follows it for months, then learns that a similar approach was tried twenty years earlier and failed at a delicate endpoint. The published literature records the polished survivors better than the graveyard. Seminar lore carries the rest unevenly.

A proving system can build a graveyard with searchable headstones.

“Attempted to control X by Y. Fails under Navier–Stokes scaling.”

“Candidate inequality false; numerical counterexample at high-frequency concentration.”

“Formalization reveals dependence on H¹ bound unavailable globally.”

“Self-similar ansatz incompatible with finite energy under stated decay.”

“Equivalent to known criterion in paper Z.”

This is not glamorous output. It is a map of where not to dig.

For a problem ninety years old, that map may be as valuable as another proof attempt.

The obsession with the million-dollar prize encourages the wrong metric. A model can contribute deeply to Navier–Stokes without closing the problem. It can formalize a century of regularity theory. It can discover a useful inequality. It can rule out a class of blowup scenarios. It can produce a rigorous computer-assisted proof for a related model. It can connect two literatures that evolved separate notation. It can expose a hidden gap in an accepted argument. It can make a body of PDE mathematics machine-checkable enough that future agents search on firmer ground.

Any of these might be scientifically important even if the Clay status page never changes.

Anthropic’s Riemann-hypothesis episode is instructive precisely because the model failed at the glamorous target. According to Anthropic, the attempt produced progress on a related bound. That is what real research often looks like: the impossible problem functions as a searchlight, and the result appears off to the side.

Navier–Stokes may do the same.

The model that “solves” it in the history books may spend most of its useful life proving things that are not the final theorem.

Then, perhaps, one day the dependency graph stops having an open edge.

That is the moment worth calling solved.

Not when the answer sounds right.

Not when the plot is dramatic.

Not when the agents agree.

Not when a company wants the headline.

When the exact target has been met by an argument that can survive formal and human scrutiny under the rules of mathematics.

The million dollars can wait.

A publication-ready account also needs to distinguish *target equivalence* from ordinary theorem proving. Suppose the team chooses a Lean statement that it believes faithfully represents one of the Clay alternatives. The theorem prover can certify deductions from that statement. It cannot certify the historical and semantic claim that this is the same problem Fefferman wrote down unless that relationship has itself been formalized and reviewed.

That should become its own project.

Take the official formulation sentence by sentence. Encode the domains, regularity classes, decay assumptions, periodic alternatives, pressure relation, and the acceptable positive and negative outcomes. Then produce a human-readable correspondence table between each piece of the formal statement and the source text. Have independent analysts reconstruct the statement without seeing the first encoding. Compare the results. Where they differ, treat the difference as a mathematical issue, not a formatting dispute.

This is specification engineering for a theorem.

The idea may sound foreign only because mathematicians usually do it socially. A community agrees that several formulations are equivalent because experts know the standard transformations. A high-stakes AI project should turn the important equivalences into explicit lemmas.

If the whole-space statement is translated into a pressure-free projected form, prove the equivalence under the relevant hypotheses.

If the final argument uses vorticity rather than velocity, prove that the vorticity formulation reconstructs the required velocity solution.

If a computer-assisted proof works in rescaled variables, prove that the rescaling maps the certified object back into the original Clay class.

If the project chooses the periodic alternative, keep that choice visible rather than allowing prose to drift between torus and whole-space claims.

Every transformation pays an equivalence tax.

The tax is annoying and cheap compared with a false Millennium announcement.

There is a second kind of target drift that is subtler: theorem inflation after the proof is complete.

A machine may prove exactly what it was asked to prove. Then a press release, summary agent, executive presentation, or journalist compresses the statement into something stronger. “A new regularity criterion” becomes “progress toward smoothness.” “A computer-assisted singular profile in a related equation” becomes “AI finds fluid singularity.” “Formalized weak existence” becomes “Navier–Stokes proved in Lean.” None of these transformations requires a mathematical error in the original work.

The publication pipeline therefore needs a comparator after the theorem as well as before it.

Every outward-facing claim should link back to the strongest verified statement that supports it. If the words “solves Navier–Stokes” appear, the system should require a direct path to the formal Clay root. If the root is still open, the phrase fails automatically.

This is anti-headline architecture.

A company serious about scientific credibility should welcome it because the alternative becomes worse as machine research scales. Frontier systems will generate adjacent results constantly. The temptation to narrate every result through the famous problem will be enormous. A hard claim comparator protects the lab from its own incentives.

The same architecture can improve peer review. A referee should not have to reverse-engineer what changed between the canonical problem and the submitted theorem. The paper can include a machine-generated but human-audited delta:

These hypotheses are identical.

This formulation is proved equivalent by Lemma A.

This domain is one of the allowed Clay alternatives.

This numerical certificate enters only in Proposition B.

This axiom set is used by the formal proof.

These claims remain outside the theorem.

A reader can then spend attention on the genuinely new step.

That is an important economic effect of formalization. It can reduce the amount of expert attention consumed by checking interfaces, leaving more attention for mathematical substance.

Clay’s two-year and general-acceptance conditions matter differently in this setting. They are not proof rules. A theorem does not become logically valid by aging for two years. The interval is an institutional filter that gives the world time to attack, reconstruct, simplify, and absorb a proposed solution.

Machine mathematics makes such a filter more valuable, not less.

Imagine an AI-assisted proof arrives with millions of formal dependencies, numerical certificates, and a concise human paper. Day one can establish that the artifacts build. It cannot establish that every important semantic choice has been understood by independent experts. Other groups may find a cleaner proof. A hidden assumption may surface when someone ports the argument to another proof assistant. A numerical certificate may be reproduced using a different interval package. A theorem thought to be novel may connect to old literature in an unexpected way.

Time is part of distributed verification.

The future of famous-problem claims may therefore have three clocks.

The machine clock: minutes or days to generate and check candidate mathematics.

The referee clock: months to inspect, reproduce, and publish.

The community clock: years for a result to become part of trusted mathematical knowledge.

Confusing these clocks will produce endless false dawns.

A company can move on the machine clock and still respect the community clock. The formal artifacts can be public immediately. The code can be reproducible. The proof can be attacked openly. The lab can state, with unusual precision, “our internal and external checkers accept this candidate; the mathematical community has not yet accepted it.”

That sentence would be a sign of maturity, not weakness.

The phrase *solution candidate* should mean something operational too. It should not be awarded because an internal team is excited. A branch reaches that status only after the root target comparator passes, all admitted axioms are listed, no unresolved `sorry`-like placeholders remain in the release cone, numerical components have rigorous certificates, and at least one checker independent of the generation environment accepts the formal artifact.

Even then, candidate means candidate.

Human mathematics retains the right to find that the formal root was encoded poorly, that a trusted computation was too broad, or that the proof’s claimed interpretation exceeds its exact statement.

The architecture is deliberately asymmetric.

The machine may propose success quickly.

Success is allowed to become true slowly.

This is the opposite of the incentive structure around a breaking-news headline. It is also much closer to how serious mathematics already works.

The million-dollar prize makes the story easy to market because it supplies a finish line everyone understands.

The real finish line is harder to draw.

It is the point at which independent people who wanted the argument to fail can no longer make it fail, independent machines reproduce the formal core, the exact statement is accepted as the intended statement, and the result becomes ordinary enough that mathematicians begin using it rather than merely discussing whether it is correct.

That is what solved means.

Everything before it is progress.