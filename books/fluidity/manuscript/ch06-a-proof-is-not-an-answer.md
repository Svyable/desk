# A Proof Is Not an Answer

The most dangerous mathematical sentence a language model can produce is not “I don’t know.”

It is “therefore the result follows.”

The words are ordinary. In a correct proof they are almost invisible. In a bad proof they can cover a canyon.

Mathematics has always depended on compression. Nobody proves every theorem from the axioms of set theory each time. We cite previous results, use accepted constructions, skip routine algebra, invoke standard estimates, and trust readers to reconstruct familiar steps. A research paper is a highly compressed certificate addressed to a community that knows the code.

Language models are trained on the compressed surface.

This gives them an unusual advantage and an unusual liability. They learn the texture of mathematical exposition extremely well. A model can know that one typically applies Hölder here, interpolates there, invokes compactness after a uniform bound, passes to a subsequence, and closes by Grönwall. Those moves are real. They are also the exact moves that become dangerous when a hypothesis, endpoint, topology, or constant is wrong.

The prose can be fluent while the proof is dead.

This is why the arrival of formal theorem proving changes the role of AI more than another point on a benchmark.

A benchmark asks whether the model can get the answer.

A proof assistant asks whether the object checks.

Those are not the same demand.

When a model solves a competition problem, humans can often verify the result by reading a few paragraphs. If the solution is wrong, the mistake is usually local enough to find. A Millennium problem is different. A novel proof could be dozens or hundreds of pages, depend on new machinery, and introduce definitions whose implications are not obvious even to specialists. A model could produce an argument no one human can confidently audit end to end in a reasonable time.

At that scale, “looks right” stops being a serious verification strategy.

Formal proof offers a way out, but only if we understand what it actually guarantees.

A system such as Lean checks a formal object against a formal statement using a small trusted kernel and a body of definitions, axioms, and imported theorems. If the checker accepts, we gain very strong evidence that the conclusion follows from the encoded premises according to the formal rules.

That is extraordinary.

It is not omniscience.

The checker does not know whether the formal statement is the Clay statement unless humans or another verified translation establish that correspondence. It does not know whether a definition of “smooth solution” accidentally bakes in the property we hoped to prove. It does not know whether a numerical certificate imported as an axiom actually corresponds to the computation claimed. It does not know whether the chosen foundational axioms match the intended standard if unusual axioms are introduced. It does not know whether a library theorem was applied to the physical object the authors thought they had defined if the semantic bridge was wrong.

Formal proof eliminates one family of errors and exposes another family more clearly.

This is not a weakness. It is how trustworthy systems work.

A measurement instrument does not answer every scientific question. It gives one class of observation unusually well. A compiler does not tell you whether software is useful. It tells you whether the program satisfies a syntactic and semantic contract strongly enough to compile. A cryptographic signature does not tell you whether a document is true. It tells you who signed these bytes under a key.

Lean tells you something precise and valuable.

The mistake would be to ask it for more than that.

For Navier–Stokes, I would divide trust into at least five layers.

The first is target trust.

Did we formalize the theorem we mean to solve?

This sounds like a one-time task. It is not. The target is built from definitions: domain, divergence-free condition, initial regularity, decay or periodicity, viscosity, solution class, pressure, time interval, smoothness, and the alternative form of failure if one pursues blowup. Each definition has to correspond to standard mathematical usage. The safest approach is redundancy: independently formalize the target in more than one way, compare them, and prove equivalence where possible.

A human mathematician should be able to read a deliberately small, stable “target package” without navigating millions of generated lines.

The second layer is dependency trust.

Which theorems, definitions, axioms, and computational certificates does the final result depend on?

A proof assistant can produce dependency information. A research system should make it central. If the claimed Navier–Stokes theorem imports an unexpected axiom, a private opaque theorem, or a generated certificate whose provenance is unclear, that should be visible before anybody writes a press release.

Large formal projects can hide complexity simply through size. Dependency minimization becomes a scientific virtue.

The third layer is checker trust.

Why do we believe the proof assistant itself?

Formal systems are designed around a small trusted computing base because small things are easier to audit than giant things. That does not mean bugs are impossible. It means trust can be concentrated into a manageable kernel rather than spread across every tactic, agent, editor, and model that helped produce the proof. Untrusted automation can generate proof terms all day; the kernel is supposed to reject invalid ones.

This architecture is almost ideal for AI.

A model can be reckless upstream because recklessness is cheap if downstream checking is strict.

The fourth layer is computational trust.

A Navier–Stokes proof may include numerically assisted components. Perhaps a computer verifies a spectral bound, encloses a fixed point, proves a finite list of inequalities with interval arithmetic, or validates stability of a candidate singular profile. In that case, one needs a bridge from floating-point computation to rigorous mathematics.

Ordinary numerical code is not enough.

A floating-point calculation returns an approximation subject to rounding, discretization, truncation, conditioning, implementation choices, and perhaps hardware details. A computer-assisted proof turns those errors into explicit bounds. Interval arithmetic encloses values rather than merely estimating them. Validated numerics propagate guaranteed uncertainty. The final theorem should depend on certificates that can be reproduced and, ideally, checked by a smaller independent program or formal system.

The fifth layer is community trust.

What have independent mathematicians done with the result?

Can they restate the mechanism in human language? Can they reproduce the formal build? Can they identify the decisive new idea? Have experts in PDE, harmonic analysis, numerical analysis, and formal methods inspected the interfaces relevant to them? Have alternate implementations checked the fragile computational steps? Has the theorem survived hostile seminars?

This layer can sound old-fashioned beside machine verification.

It is not obsolete.

Community scrutiny catches specification mistakes, relevance mistakes, interpretation mistakes, and missing context that a formal kernel cannot know. It also converts a proof from a private artifact into public mathematical knowledge.

The Clay rules make this social layer explicit. Publication comes first. Time passes. General acceptance matters.

A world of AI-generated mathematics will need more of that, not less.

The phrase *proof is not an answer* points to another distinction.

Mathematics problems in school often ask for a number. The proof explains why the number is right. Research mathematics frequently asks for structure. The proof is the structure.

If Navier–Stokes global regularity is true, the value of a solution will not be exhausted by the word *yes*. We want to know what mechanism prevents blowup. If blowup is possible, we want to know how smooth data generate it and what the singularity looks like. The theorem closes the binary question. The proof changes the field.

This is one reason an enormous opaque machine proof could be simultaneously valid and scientifically frustrating.

Suppose Anthropic produces a formally checked ten-million-line argument that global regularity holds. The target is right. The dependencies are clean. Independent builds pass. Clay’s process eventually accepts it.

What have mathematicians learned?

Perhaps a lot. The system may have discovered a new monotone quantity, geometric decomposition, critical estimate, or compactness principle visible in the proof graph. Or perhaps the argument consists of a vast combinatorial partition of cases no human can hold in mind. The theorem is still a theorem, but the human scientific payoff differs.

This tension already exists in computer-assisted mathematics. The four-color theorem raised early philosophical questions because computers checked cases humans could not feasibly inspect one by one. Later computer-assisted proofs have become normal in many areas, but researchers still value conceptual compression: an explanation of why the computation must work.

AI will intensify the tension because it can produce not only huge computations but huge symbolic arguments.

A good research system should therefore optimize for two products.

One is the formal certificate.

The other is the human proof story.

The certificate is exact. The story explains leverage.

For Navier–Stokes, the story should answer a simple question: what was missing from ninety years of analysis?

Was it a hidden coercive quantity?

A geometric constraint on vortex stretching?

A critical norm estimate nobody could close?

A rigidity theorem excluding minimal blowup?

A singular profile whose existence can finally be proved?

A computer-assisted bridge from numerical discovery to exact blowup?

Something stranger?

If the AI system cannot answer that after producing a valid proof, human mathematicians will spend years reverse-engineering the answer. That reverse engineering may itself produce important mathematics. The machine would have solved the problem before we understood the solution.

There is no rule against that.

But it changes what “solved” feels like.

This is why I would not build an Anthropic Navier–Stokes effort as a single optimization for “formal target closed.” The system should preserve explanations at every layer. Each new lemma should have a natural-language statement, provenance, role in the dependency graph, scaling behavior, and relationship to known theory. Agents should be encouraged to compress proof clusters into reusable concepts when possible.

The word *concept* is difficult to operationalize.

Models are excellent at inventing names for things. That is not conceptual compression. A real concept reduces complexity because many previously separate facts become instances of one mechanism. A new norm is not important because it has a memorable name. It is important if its evolution captures a cancellation the old norms missed.

The system therefore needs reviewers whose job is to resist fake understanding.

“Explain why this lemma matters without restating it.”

“Which previous obstruction does it bypass?”

“Would the proof still work for Tao’s averaged equation?”

“What fails if viscosity is removed?”

“Which known regularity criterion becomes automatic if this estimate holds?”

“What is the shortest human-level dependency chain from this result to the Clay target?”

Questions like these do not verify truth directly. They test whether the theorem has scientific leverage.

There is another reason to separate proof from answer: AI systems can be rewarded for closure.

Agents like tasks with completion conditions. “Prove theorem X” has a satisfying end state. Research is not so cooperative. The right response to a false conjecture may be to disprove it. The right response to an impossible proof plan may be to document the obstruction. The right response to a numerical blowup candidate may be to show it is a discretization artifact.

A system optimized too strongly for “task completed” can learn to weaken the task until completion becomes possible.

This is specification gaming translated into mathematics.

The defense is to reward negative knowledge.

If an adversarial agent produces a counterexample to a proposed lemma, that branch should count as progress. If formalization reveals an implicit assumption, progress. If a numerical candidate disappears under higher precision, progress. If literature search shows the “new” idea was proved in 1987 and does not close the critical endpoint, progress.

The research graph should get better when dreams die.

Humans know this emotionally but our institutions do not always reward it. Papers publish positive results. Failed proof attempts vanish. Graduate students can spend months learning why an idea does not work, then leave the knowledge in a notebook. AI systems could preserve a much richer negative literature if we design for it.

That negative literature becomes especially valuable when generation is cheap.

Imagine ten million proof proposals over several years. Without memory, the system repeats the same seductive mistakes forever. With only semantic search, it may retrieve a vaguely related transcript and fail to understand the structural identity. With formal failure annotations, scaling metadata, and counterexample links, the system can recognize whole families of dead routes.

This is an epistemic immune system.

The analogy is imperfect, but the function is clear: distinguish novelty from recycled error before scarce expert attention is spent.

The strongest objection is that all this machinery may formalize the easy parts while the hard part remains a single flash of human genius.

That is possible.

A perfect theorem database does not invent the missing inequality. A thousand reviewers do not guarantee the right conjecture. Formal verification can become a magnificent factory around an empty insight.

But the objection cuts both ways.

Human genius also operates inside infrastructure. Mathematicians become capable of flashes because they have absorbed definitions, examples, failed routes, analogies, and techniques. They use blackboards, collaborators, symbolic algebra, numerical experiments, and libraries. The isolated-insight story edits out the support system after the fact.

AI can expand that support system dramatically.

Even if the final idea arrives from a person, agents may make the idea visible by clearing away false branches, producing examples, formalizing adjacent results, and reducing the time between conjecture and decisive test.

The question is not whether a model deserves the romance of genius.

The question is whether the research system increases the rate at which true mathematical structure is found and trusted.

Navier–Stokes does not care who felt inspired.

The theorem cares whether every line is earned.

That is why an answer is cheap and a proof is expensive.

And why, in the age of abundant answers, the expense may finally be something machines are good at paying.

There is a third product a publication-scale AI proof should produce besides certificate and proof story: a *claims manifest*.

The manifest is deliberately boring. It says exactly what has been established, at what level of verification, and what has not.

The root theorem.

The accepted definitions.

The axiom footprint.

Which components are fully formal.

Which components are computer-assisted and what certificates they use.

Which claims are explanatory rather than logical dependencies.

Which numerical experiments were discovery aids only.

Which human choices entered the construction.

Which results are new and which are formalizations of known mathematics.

Which parts have been independently reproduced.

This document matters because the final proof will exist in several languages at once. Lean has one statement. The journal paper has another surface. The press release has another. A talk has another. An executive summary has another. Every translation is an opportunity to inflate the claim.

The manifest acts as a checksum on language.

A sentence in a press release says the result “proves global regularity.” The claims system asks which formal theorem licenses that sentence. A talk says the key mechanism is a new geometric depletion law. The graph asks whether that law is actually necessary to the proof or merely one explanation generated after the fact. A paper calls a computational lemma “rigorous.” The manifest points to the certificate and independent checker.

This becomes more important when the proof is too large for any one person to own cognitively.

Traditional authorship provides a kind of implicit integrity guarantee: the authors are expected to know what their paper claims. In a machine-scale proof, even the human team may not have read every generated intermediate theorem. Responsibility has to move from personal memory into explicit provenance.

That does not reduce human responsibility.

It makes the limits of memory honest.

A second publication artifact should be the *minimal trusted route*.

The discovery graph may contain millions of nodes. The accepted theorem should identify the smallest dependency cone needed for the result. Remove exploratory branches. Remove alternative proofs. Remove unused generated lemmas. Freeze exact versions of libraries and checkers. Export the proof object in a form that another group can rebuild without the internal research environment.

This is the mathematical equivalent of shipping a release build instead of a development machine.

It matters because enormous research repositories accumulate accidental dependencies. A theorem may compile because an imported module exposes a helper theorem nobody intended to trust. A generated proof may depend on a convenience axiom introduced during experimentation. A numerical certificate may point to a file created by a stale pipeline.

The release cone forces the lab to discover what the proof actually needs.

The smaller that cone becomes, the stronger the result’s portability.

This is where reproducibility and conceptual understanding unexpectedly reinforce each other. Dependency minimization often reveals the genuine mechanism. If ninety percent of the project can be deleted and the theorem still checks, those deleted lines were search history rather than mathematical essence. The remaining dependencies tell us where the leverage lives.

An AI system can help perform this proof distillation automatically.

Try deleting a lemma.

Rebuild.

Replace a specialized theorem with a standard library result.

Rebuild.

Ask for an alternate proof of a central node from fewer assumptions.

Rebuild.

Find duplicate definitions.

Prove equivalence and collapse them.

The result is not merely a smaller codebase. It is a more intelligible theorem.

There is a danger in the opposite direction: explanatory compression can become fictional. A model takes a huge valid proof and produces a ten-page “conceptual proof” that skips precisely the hard steps the formal artifact had to manage.

So compression itself must be checked.

Every sentence in the short proof should point to a verified cluster in the long proof. Every “standard argument” should name the theorem that makes it standard. Every metaphor should be labeled as metaphor. If the compact story omits a computational case split essential to validity, it should say so rather than pretend the concept alone closes the theorem.

This is a new kind of expository discipline.

The machine can produce the certificate.

The machine can also produce the explanation.

Neither should be allowed to certify the other without independent structure.

A fourth product may be a *counterfactual proof map*.

Which assumptions could be weakened while preserving the result?

Which lemmas fail if viscosity is removed?

Which parts depend on three dimensions?

Which arguments survive on the torus and whole space?

Which part would break in Tao’s averaged equation?

This map turns the final proof into a research instrument. It tells the community why the theorem is specific to Navier–Stokes and where its methods may transfer.

If global regularity is proved, the counterfactual map may teach more than the yes/no answer. If blowup is constructed, it can show which structural modifications kill the singularity and which leave it intact.

A theorem becomes a laboratory after it is solved.

This is why I resist the image of an AI system printing a final answer and ending the story. The best proof architecture would make closure the beginning of a second phase: distillation, explanation, perturbation, generalization, and independent reconstruction.

A proof is not an answer because an answer stops when the question is closed.

A good proof creates better questions.