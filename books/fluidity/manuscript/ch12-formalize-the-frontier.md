# Formalize the Frontier

A proof assistant cannot verify a theorem written in a language it does not know.

That statement is so obvious that it hides one of the largest practical obstacles in this book. If a research group produced a genuinely new Navier–Stokes argument tomorrow, the final obstacle would not be simply typing the proof into Lean. The surrounding formal world would have to know enough analysis to understand what the proof was saying.

When I first framed this problem, that sounded like infrastructure a future AI laboratory would have to build before serious work could begin.

By September 2026, that description was already becoming stale.

The frontier had started paving itself.

In April, Scott Armstrong and Julia Kempe released a formalization in Lean of the core interior De Giorgi–Nash–Moser theory for uniformly elliptic divergence-form equations. Their development includes local boundedness, weak Harnack, Harnack, and interior Hölder regularity for weak solutions. They described it as the first machine-checked formalization of a major theorem in modern partial differential equations.

This was not elementary calculus dressed in formal syntax. De Giorgi–Nash–Moser theory is analysis built out of weak solutions, Sobolev spaces, measure estimates, iteration, and quantitative regularity. The formalization required new infrastructure for precisely the kinds of objects that make PDE difficult to put inside a proof assistant.

Two months later Armstrong reported something much larger. Working with Tuomo Kuusi, he formalized substantial parts of contemporary quantitative stochastic homogenization. According to Armstrong, the project contained roughly 449,000 lines of Lean. The code was written by language models under the mathematicians’ supervision, primarily GPT-5.5 with Claude models also involved, and the development had to combine elliptic PDE, probability, random fields, multiscale arguments, and background mathematics that was not already conveniently available in Mathlib.

The number of lines is not the theorem. It is evidence about labor.

A body of modern analysis large enough to have looked economically absurd as a manual formalization project can now be attempted with machine labor while experts concentrate on the blueprint, the abstractions, and the places where semantics matter.

Then the story moved still closer to Navier–Stokes.

A public Lean project called `leray-hopf` now formalizes Leray–Hopf weak existence for the three-dimensional incompressible Navier–Stokes equations on both the periodic three-torus and whole space. The project says its release surface is free of project-specific axioms and `sorry` placeholders, and it exposes finite-horizon and global-in-time existence statements.

Its README also contains the sentence the entire AI mathematics industry needs to learn how to write.

It does not claim smoothness.

It does not claim higher regularity beyond the energy class it has encoded.

It does not claim uniqueness.

That is not modesty around the edge of the result. It is the mathematical boundary of the result.

Leray’s weak existence theorem is foundational precisely because global weak solutions can be obtained while the regularity problem remains unresolved. A machine-checked version of weak existence therefore does not move the Clay problem from open to solved. It makes the distinction between what is known and what is unknown executable.

That distinction is a better starting point for an AI attack than a thousand pages of optimistic prose.

There is another development that would have sounded like administrative detail until agentic mathematics made specification itself dangerous. Independent projects have begun formalizing the Millennium problem statements. The Lean Millennium Prize Problems project, for example, includes a Navier–Stokes declaration intended to follow Fefferman’s Clay formulation and leaves the final proof exactly where it belongs: missing. Google DeepMind’s Formal Conjectures effort has also encoded a Navier–Stokes Millennium statement.

The existence of several formal targets is useful because no one of them should become sacred merely because it compiles.

A serious Navier–Stokes program should compare them.

Where do the domains differ?

How is smoothness represented?

What does decay at infinity mean in the formal language?

How are divergence-free data encoded?

What does the periodic case quantify over?

Which formulation corresponds exactly to Fefferman’s alternatives?

If two formalizations look different, can their equivalence be proved?

This is not bookkeeping before the mathematics begins. It is part of preventing the machine from solving the wrong problem beautifully.

The target should be treated like a cryptographic root of trust.

Proof-generating agents should not own it.

That idea became more urgent in July 2026 when the Lean project itself disclosed two soundness fixes. One bug could allow a malicious meta-program to trick the kernel into accepting a false theorem. A second bug involved nested inductive types and, according to Lean’s release notes, could be exploited even under a Comparator workflow. An independently implemented external checker did not share that particular defect.

The point is not that Lean is untrustworthy. The point is almost the opposite. Mature formal verification is becoming explicit about its trusted computing base.

A green checkmark is produced by software.

High-stakes mathematical verification therefore needs the habits of security engineering as well as the habits of proof.

Keep the trusted theorem statement separate from the submission.

Build untrusted generated code in a sandbox.

Export the proof object.

Check it again outside the generating environment.

Use independently implemented checkers when the stakes justify them.

Pin dependencies.

Record the axiom footprint.

Make the final artifact reproducible on machines controlled by people who had nothing to do with generating it.

Lean’s current documentation describes a Comparator-plus-external-checker workflow as a gold standard for high-risk settings such as proof competitions and untrusted AI. That is almost a design document for the end of this book.

If an Anthropic system one day announced a Navier–Stokes proof, I would not want the proof-generating agents to be able to alter the formal Clay statement, modify the checker, insert a convenient axiom, or choose which version of the theorem the public sees.

The final proof should enter a hostile environment.

The statement is frozen elsewhere.

The proof is treated as untrusted input.

One verifier checks it.

Another implementation checks it again.

Independent mathematicians rebuild the result.

Then everyone turns to the more difficult question: does the formal theorem actually express the mathematics the community thinks it expresses?

Formalization reduces the trusted surface. It does not remove interpretation.

This is why the modern PDE formalizations matter so much. They show that the interpretive burden can be paid incrementally, long before the decisive theorem arrives.

A human analyst has a vast invisible standard library.

“Take a standard mollifier.”

“Pass to a weakly convergent subsequence.”

“By lower semicontinuity.”

“Use the pressure estimate.”

“Localize with a cutoff.”

“Apply the Sobolev embedding.”

“Interpolate.”

“Use compactness.”

A trained reader imports chapters of mathematics behind each phrase. Proof assistants do not import the social meaning of *standard*. They need the definitions, hypotheses, and theorem objects.

That used to make formalization look like a tax paid after discovery.

The 2026 evidence suggests a different model.

Formalization can become part of the research environment itself.

The first phase of an AI Navier–Stokes program should therefore be a formal map of what the field already knows—not every theorem ever written, but the spine connecting the Clay target to plausible modern strategies.

The weak baseline is an obvious place to start. The public Leray–Hopf project suggests that pieces of it already exist in machine-checkable form: divergence-free energy spaces, Galerkin approximation, weak formulations, energy inequalities, passage to limits, and a global weak solution curve.

The next layer is the bridge from weak existence toward regularity.

Local strong existence for sufficiently regular data.

Weak–strong uniqueness where needed.

Continuation principles.

Classical regularity criteria.

Vorticity identities.

Pressure recovery.

The heat and Stokes semigroups.

Critical scaling.

The exact functional spaces in which candidate a priori estimates live.

Then comes the machinery that may or may not be needed by the final proof.

Calderón–Zygmund theory.

Littlewood–Paley decompositions.

Besov and critical Sobolev spaces.

Product estimates.

Commutators.

Localization.

Suitable weak solutions.

Local energy inequalities.

Partial regularity.

Profile decompositions.

Concentration compactness.

Geometric vorticity structure.

There is no reason to formalize all of this indiscriminately. A library can become a monument to activity rather than a tool. The point is to create a green baseline around the most reusable parts of the problem so that genuinely new mathematics does not arrive mixed with ten thousand routine gaps.

Suppose an agent proposes a new scale-critical estimate controlling a vortex-stretching term.

If the surrounding library is ready, the system can isolate the claim. Scaling has already been encoded. The pressure machinery is known. The continuation criterion is formal. The interpolation theorem exists. The implication graph becomes brutally clear: if this estimate holds, these checked lemmas imply global regularity.

Now humans know where to look.

Without the infrastructure, formalization fails everywhere at once. Perhaps the estimate is false. Perhaps the proof assistant lacks the exact Bochner-integral theorem. Perhaps a Sobolev result is available only on a different domain. Perhaps one coercion is awkward. The system cannot distinguish a dead breakthrough from a missing library import.

Research becomes debugging the environment.

The goal is not to eliminate debugging. It is to make the unknown mathematical node visible against a background that already compiles.

This is what the Armstrong–Kempe result changes conceptually. It demonstrates that weak-solution PDE regularity can be brought inside Lean in a modern form. The Armstrong–Kuusi work pushes the point further: contemporary research arguments combining several analytical domains can be autoformalized at enormous scale when expert mathematicians control the conceptual plan.

The natural question is whether Navier–Stokes is just more of the same.

It is not.

The Clay problem is not waiting for someone to translate a known proof. It is missing mathematics.

This is the boundary the AI story must never blur.

Autoformalization can make the known world machine-readable.

It can expose assumptions.

It can turn a human proof into a checked object.

It can accelerate library construction.

It can compare theorem statements.

It can help agents search because known lemmas become callable rather than merely retrievable as text.

None of that proves the missing inequality exists.

None of it proves a singular solution exists.

None of it tells us which side of the Millennium alternative is true.

Formalization changes the cost of reaching the frontier. It does not guarantee the frontier moves.

That distinction is why I would organize the work in stages.

First, freeze a trusted target.

Not a target written by the same agents trying to satisfy it. Compare independent encodings of the Clay statement and ask PDE experts and formal methods experts to agree on the semantics. If useful working formulations differ from the canonical target, prove the equivalence rather than letting it live in a README.

Second, establish a weak baseline.

Reproduce or independently rebuild the Leray–Hopf spine inside the project’s chosen library. This is valuable even if a public version exists. Independent reconstruction tests whether the definitions are portable and whether the project understands the theorem it imports.

Third, formalize the regularity bridge.

The local theory and the continuation machinery turn a mysterious statement—“the solution stays smooth forever”—into concrete sufficient conditions. The project should be able to ask a generated idea, mechanically: if this estimate were true, would it actually close the theorem?

Fourth, formalize negative knowledge.

This may be more important for AI than positive library growth.

Some self-similar blowup scenarios have been ruled out under particular assumptions. Some endpoint estimates fail. Weak solution classes behave badly. Tao’s averaged Navier–Stokes construction warns that broad energy and harmonic-analysis structure does not suffice by itself. Convex-integration results warn that a statement about weak solutions may not mean what a regularity researcher wishes it meant.

Turn those failures into executable objections.

If a generated inequality is killed by scaling, the system should know before a person reads it.

If a proof architecture would also prove a false theorem for a nearby equation, make the nearby equation a regression test.

If a proposed monotone quantity is known not to be monotone, keep the counterexample in the library.

If a candidate singular profile violates finite energy, represent the violation as a theorem, not a memory in somebody’s notes.

Formalize the taboo.

Human mathematical fields carry enormous amounts of negative lore orally. Experts know that certain approaches “cannot work” because of scaling, old counterexamples, or subtle endpoint failures. Language models can retrieve some of this from papers, but retrieval is a weak form of memory. A machine-search institution needs the scar itself attached to the branch it kills.

The fifth stage is candidate-specific.

Only when a genuinely new route appears should the project spend heavily on abstractions used nowhere else.

If smoothness wins through a new geometric depletion principle, formalize the geometry.

If blowup wins through a self-similar profile found numerically, formalize the transformed equations, spectral conditions, unstable modes, and the reconstruction back to admissible physical data.

If the route is computer-assisted, insert another layer between numerics and theorem proving.

Validated numerics.

This deserves its own institutional identity. A neural network can find a candidate profile. A high-order spectral solver can refine it. Neither one proves that an exact solution exists nearby. The validated-numerics layer needs interval enclosures, operator bounds, tail estimates, rounding control, inverse estimates, and an a posteriori theorem turning an approximation into the existence of an exact object.

Only then should the object enter the formal graph as something stronger than evidence.

The distinction among these trust levels needs to be visible in the software.

A generated conjecture is not a theorem.

A tiny residual is not a theorem.

A theorem proved informally is not yet a machine-checked theorem.

A theorem accepted by one Lean build is not yet an independently validated high-stakes proof.

An independently checked formal theorem is still not automatically the Clay statement unless the target equivalence is secure.

A formal Clay theorem is still not instantly a Millennium Prize award because mathematical acceptance has an institutional process beyond the proof assistant.

We need a certification ladder because AI collapses language faster than it collapses epistemology.

A model can describe every stage in the same confident English.

The system should refuse to let prose erase the differences.

There is a further reason to formalize early: machine search becomes more useful when mathematics is an API rather than a document collection.

A literature agent can retrieve a regularity criterion from a paper and summarize it. A formal library can expose the exact quantifiers and hypotheses to another agent without relying on the summary. The coordinator can ask whether two criteria are actually comparable. A proof planner can test whether a proposed lemma closes an existing implication. A counterexample agent can target the precise missing premise.

This turns mathematical memory from paragraphs into interfaces.

The idea has a software smell because software engineers learned the same lesson long ago. A function with an exact type can be composed. A paragraph saying roughly what the function does requires a human to interpret it every time.

Formal mathematics is expensive type information for thought.

Agents make the price easier to pay.

They also make bad abstractions more dangerous.

Generate 449,000 lines of Lean around the wrong definitions and you have not built infrastructure. You have built a city around a planning mistake.

This is where formal mathematicians become more valuable as generation gets cheaper.

Their scarce contribution moves upward.

Which definition will compose with the rest of the library?

Which theorem should be generalized before hundreds of agents depend on it?

Which coercion is convenient now but poisonous later?

What belongs in the trusted base?

When is a numerical certificate safe to import?

What axiom audit is acceptable?

How should the periodic and whole-space formulations share infrastructure?

How do we represent almost-everywhere equivalence without making later arguments unbearable?

How do we keep a proof term inspectable enough to reproduce when the generating model changes?

These are architecture questions.

Calling the human expert a “reviewer” understates the role. The expert is part language designer, part mathematician, part constitutional lawyer.

What does the system mean by *solution*?

That question can decide whether six billion tokens produce a theorem or a loophole.

The same applies to theorem-statement extraction from the literature.

Most mathematics will continue to enter the system first as human prose and notation. A model has to translate it. Translation is an epistemic hazard.

One agent extracts the theorem.

A second does it independently.

A comparator identifies differences.

The original source passage remains attached.

A human resolves ambiguity at high-centrality nodes.

Once the theorem becomes foundational, its provenance should be harder to edit than its proof.

This reverses a common AI instinct. Models usually compress more aggressively as context grows. A theorem graph should do the opposite near its load-bearing points. Preserve exactness. Preserve the original statement. Preserve uncertainty. Preserve the date and version. Preserve why the project believes the formal statement matches the human source.

A million low-value lemmas can be regenerated.

A corrupted foundational statement can poison the entire graph.

The 2026 Lean kernel bugs make this more than philosophy. The proof checker itself needs provenance, versions, and independent verification. A final Navier–Stokes artifact should say exactly which Lean version checked it, which Mathlib commit it used, which axioms appear in the dependency closure, which Comparator or export process was used, and which independent checker accepted the result.

Then somebody else should run the whole thing again.

A theorem worth a million dollars should be easier to reproduce than a machine-learning benchmark.

The formal frontier should also be public.

I would make that a hard design principle for any serious Millennium attempt.

Anthropic can keep model weights private. It can keep proprietary orchestration systems private. It can spend private compute. But reusable theorem statements, definitions, formal libraries, and final proof artifacts should be inspectable by people who do not need Anthropic’s permission to verify them.

A private formalization can demonstrate capability.

A public one can become mathematics.

Openness improves the library itself. Other researchers try to use the definitions for different purposes and discover where the abstractions are brittle. They generalize lemmas. They find hidden assumptions. They port parts into other systems. They test build reproducibility. They argue about whether a standard mathematical notion has been encoded in the standard way.

This is precisely the kind of disagreement a high-stakes proof needs.

No company should get to define the theorem, generate the proof, run the only checker, and announce the interpretation.

The final result has to leave the building.

There is a temptation to turn all this infrastructure into a progress meter.

Do not.

If fifty thousand known lemmas are green and one red lemma contains the entire conceptual obstruction, the problem is not ninety-nine percent solved.

The missing node can still be everything.

A better measure is the sharpness of the boundary between known and unknown.

How many ambient assumptions have been made explicit?

How much routine analysis can be called without reinvention?

How many supposed strategies have been reduced to one concrete conjecture?

How many false branches have reusable refutations?

How many independent formalizations agree on the root target?

How much of a candidate numerical construction has rigorous enclosure rather than visual plausibility?

How narrow is the region where expert mathematical judgment is still carrying unverified weight?

That is real progress even if the Millennium problem remains untouched.

It makes self-deception harder.

For a ninety-year-old problem, that may be one of the most valuable early returns an AI system can buy.

The original version of this chapter ended with an imagined future: formalize the surrounding theory so that when the decisive insight arrives, the rest of mathematics is ready to compile.

The future arrived earlier than expected.

Major PDE regularity theory has been machine-checked. Contemporary research analysis has been formalized at hundreds of thousands of lines with language models doing the code generation. Leray–Hopf weak existence for three-dimensional Navier–Stokes has a public Lean implementation. The Clay target itself has several formal encodings. The proof-assistant community is already building adversarial verification workflows for AI-generated proofs.

None of this solves Navier–Stokes.

It does something almost as important for the story of how it might eventually be solved.

It turns the surrounding formal world from a thought experiment into an engineering program.

The final unknown is still allowed to be impossibly hard.

But it is getting fewer places to hide.
