# Ninety Years of Near Misses

The phrase *unsolved problem* gives history the wrong shape.

It suggests a locked door with ninety years of mathematicians taking turns at the handle. Nobody gets in. The room behind the door remains exactly as mysterious as it was on the first day.

Navier–Stokes does not look like that from inside the subject.

The territory around the Millennium problem is crowded with theorems. We know how to construct weak solutions globally in time. We know strong solutions exist locally from smooth enough data. We know a great deal about two-dimensional flows. We know regularity follows if certain quantities satisfy additional bounds. We know singularities, if they occur in suitable weak solutions, are constrained in remarkable ways. We know many symmetric, perturbative, and small-data regimes. We know that some tempting proof architectures cannot possibly be general because nearby equations preserving much of the same broad structure can blow up. We know that weak solution classes can admit behaviors that force uncomfortable questions about uniqueness.

This is not a record of failure.

It is a ninety-year reduction of ignorance.

The remaining gap is still enormous because the problem asks for a universal statement. Yet the gap has acquired walls. Every serious attempt now begins inside a landscape shaped by previous attempts, not on blank paper.

That is precisely why Navier–Stokes may become a better AI problem than it was a chatbot problem.

A chatbot sees papers.

A research institution should see constraints.

The difference begins with Leray.

In the 1930s, Jean Leray developed the foundational theory of weak solutions for three-dimensional incompressible Navier–Stokes. The historical details matter, but the structural lesson is simple enough. If one insists on classical differentiability everywhere, the global theory is hard. Leray enlarged the notion of solution so that finite-energy solutions could be constructed for all time in a weak sense.

This move is common in analysis. When classical objects become too rigid to guarantee existence, weaken the formulation until compactness or energy methods can produce a limit. Instead of requiring every derivative to exist pointwise, require the equation to hold after integration against smooth test functions. Instead of demanding perfect regularity, retain enough structure to preserve the physically and analytically meaningful bounds.

Weak formulations are not evasions. They are among the central inventions of modern PDE.

But once a class is enlarged, new questions appear. Is the weak solution unique? Does it become smooth immediately? Does it agree with a classical solution whenever one exists? Can singular behavior hide inside the weaker class? Which energy inequalities or admissibility conditions select the physically relevant objects?

The Millennium problem survives because global weak existence is not the same theorem as global smooth existence and uniqueness for the relevant smooth data.

One of the important ideas in the subject is weak–strong uniqueness. Roughly, while a sufficiently regular strong solution exists, an appropriate weak solution cannot wander off independently. The difficulty appears when regularity itself is in doubt. The weak framework lets the theory continue past the point where classical control may be lost, but that continuation does not settle what happened at the point of loss.

This produces an odd asymmetry.

We can often prove that a mathematical object exists after the moment we are unable to prove that it remains the kind of object we started with.

The story then becomes a search for conditions under which that degradation cannot occur.

Regularity criteria are one answer.

A regularity criterion says, in effect: if a certain measurable quantity behaves well enough, then the solution stays smooth. The famous families associated with Ladyzhenskaya, Prodi, Serrin, Beale–Kato–Majda analogies in neighboring equations, vorticity conditions, pressure criteria, component criteria, and later refinements all convert a vague danger into a more specific obligation.

This is valuable because “prove no singularity forms” is not a working instruction.

“Prove this scale-critical space-time norm cannot diverge” is.

A criterion can therefore be understood as a compression of the open problem. It identifies a variable through which catastrophe would have to pass.

The catch is that a criterion is not a bound.

This distinction is so easy to blur that it should be printed above every autonomous theorem-proving cluster working on Navier–Stokes.

If a paper proves that regularity follows whenever a norm remains finite, the Millennium problem becomes: show the norm remains finite from the original hypotheses. If all known estimates for that norm depend on its own finiteness, the door has acquired a more informative label without opening.

Still, labels matter.

They tell search systems where pressure accumulates.

The Caffarelli–Kohn–Nirenberg partial regularity theorem sharpens the picture from another direction. Rather than proving that singularities cannot exist, it shows that the possible singular set for suitable weak solutions is extraordinarily small in a precise parabolic measure-theoretic sense. A solution cannot simply become bad across a fat region of spacetime. If regularity fails, the failure is highly constrained.

For a popular account, this result is almost impossible to summarize without making it sound weaker than it is.

“We proved that any singularities are sparse” does not convey the technical depth.

For the Millennium problem, however, the emotional cruelty is obvious. *Sparse* is not *none*.

A single admissible singular point would be enough to defeat global smoothness.

Partial regularity therefore teaches the same lesson as numerical computation from the opposite side. A theorem can push the bad set toward zero without crossing the final logical step to emptiness. Mathematics cares about that step because the universal statement lives there.

Artificial intelligence will be tempted by the shape of such results. Models are good at interpolation. Give them a sequence—large bad set, smaller bad set, tiny bad set—and they will produce language suggesting the trend continues. Proof does not permit extrapolation by mood.

The correct machine response to partial regularity is not “we are nearly done.”

It is “what mechanism could force the remaining singular set to be empty?”

This question has generated geometric approaches, local criteria, blowup analysis, epsilon-regularity arguments, harmonic-analysis techniques, and attempts to understand how vorticity can concentrate.

Each route accumulates its own near misses.

A blowup analysis may show that if singularity occurs, after rescaling around the dangerous point one obtains a limiting ancient solution with special properties. Then the problem becomes a Liouville theorem: prove that no nontrivial object with those properties can exist. This is a powerful recurring method across PDE. Singular behavior, if present, should reveal a rigid profile when magnified correctly.

But the limiting object can retain just enough freedom to escape known classifications.

A geometric criterion may show that if vorticity directions align coherently, stretching is depleted and regularity follows. Then the question becomes whether the dynamics themselves force the necessary coherence in every dangerous region.

A component criterion may show that controlling one velocity or vorticity component suffices. Then the question becomes whether the equations supply that control automatically.

An endpoint estimate may almost close, except the one space preserved by scaling is exactly where compactness or boundedness fails.

The word *endpoint* appears often in analysis because nature seems to enjoy placing famous problems at the boundary where the convenient theorem stops.

From the outside, these can look like technicalities.

Inside the proof, the technicality is usually the entire problem.

Consider scaling. If one derives an estimate that becomes worse as the solution is rescaled toward smaller structures, the estimate may be powerless precisely where a singularity would form. A subcritical estimate can dominate concentration; a supercritical one can lose the race. Many proposed arguments fail not because an algebraic line is wrong but because the line is true in the wrong scale.

This is where a machine can help unusually well.

Scaling checks are cheap.

Every candidate norm, inequality, interpolation, and functional can be annotated automatically with its transformation under Navier–Stokes scaling. A proof-search system should refuse to let a new estimate enter the serious queue without a scaling report. If the estimate is supercritical, that does not make it useless, but the system should demand the missing mechanism that compensates for the unfavorable scaling.

Humans already do this reflexively. Machines can do it exhaustively.

The same applies to known obstruction results.

Tao’s averaged Navier–Stokes construction is one of the clearest. It asks, in effect, how much of the usual Navier–Stokes proof technology is genuinely using the special algebraic form of the nonlinearity. Tao built an averaged version retaining a broad energy-cancellation structure yet exhibiting finite-time blowup. Any supposed global-regularity argument that would also prove regularity for that averaged system has missed something essential.

An AI lab should treat such results as unit tests for proof ideas.

Run the argument against the adversarial cousin.

If it “proves” a false theorem there, isolate the first step that smuggled in extra structure.

Then ask whether that extra structure exists in true Navier–Stokes and whether it can be exploited quantitatively.

Negative mathematics becomes positive search guidance.

The more unsettling boundary comes from weak-solution nonuniqueness.

In 2019, Tristan Buckmaster and Vlad Vicol published a landmark result showing nonuniqueness of weak solutions to the three-dimensional Navier–Stokes equation in a broad class. The precise solution spaces and admissibility details matter enormously; one should not summarize the paper as “Navier–Stokes solutions are nonunique” without qualification. The Clay problem concerns a particular smoothness question beginning from smooth data, and the existence of wild weak solutions does not settle it.

But the conceptual warning is profound.

If one relaxes the notion of solution too far, the equation can support more behavior than physical intuition suggests.

This destroys another easy narrative: perhaps once global weak existence is known, uniqueness and smoothness are merely technical upgrades. They are not. The weak world can be qualitatively different.

For an AI system, this means definitions are part of the scientific result.

A theorem prover can protect a definition after it has been encoded. It cannot decide which definition captures the physically and mathematically intended question unless that choice is made deliberately.

The history of Navier–Stokes is filled with such decisions.

Which solution class?

Which domain?

Which initial data?

Which notion of pressure?

Which local energy inequality?

Which spaces are critical?

Which singularity notion?

Which continuation criterion?

A system that treats these as metadata will eventually prove something impressive and irrelevant.

A system that treats them as the geometry of the search may become useful.

Recent work continues to narrow the terrain. Quantitative partial regularity results sharpen how singular behavior can be measured. New localized criteria identify smaller sets of observables that would guarantee regularity. Data-assimilation and determining-functional results explore when finite observational information can certify important properties of a flow. These papers do not indicate that the Millennium problem is about to fall. They indicate that the frontier is active and technically refined.

This creates a practical problem for human researchers.

The literature is too large to hold in working memory.

A new idea about one component of vorticity may have an analogue in a paper about pressure. A criterion proved in one Besov-type space may be equivalent, after embeddings and interpolation, to another criterion published under different notation. A numerical observation may correspond to a concentration scenario already excluded under a hidden hypothesis. A proposed monotone quantity may have been tested twenty years ago in a different gauge.

The cost of discovering these overlaps is high because mathematical papers are optimized for humans inside subfields, not for global machine comparison.

An Anthropic-style research system could make the overlap explicit.

Not by summarizing each paper into three bullets. That would throw away the useful structure.

Instead, parse the theorems into typed objects: hypotheses, domains, norms, scaling, conclusion, constants, dependence, proof mechanism, known counterexamples, relation to the Clay target. Store implication links. Record whether a criterion is stronger or weaker than another under known embeddings. Mark which lemmas are formalized and which exist only in prose. Attach a falsification note to every proposed equivalence.

The result would be a machine-readable regularity atlas.

Humans have built versions of this in survey articles and in their heads. The machine advantage is not originality. It is completeness and update speed.

Now imagine feeding the atlas to specialized agents.

One searches for minimal sufficient sets of criteria whose intersection leaves a narrow unresolved regime.

Another looks for inequalities that would move known a priori bounds into that regime.

Another constructs families of fields approaching the boundary of each criterion, searching for near-extremizers that show where constants degrade.

Another studies the geometry of those near-extremizers numerically.

Another asks whether any candidate estimate would contradict known wild solutions or averaged-equation blowup.

Another formalizes the implication chain so the system cannot quietly drop an exponent.

This is not a proof.

It is a better way to know what has not been proved.

That may sound modest for a book titled *How Anthropic Solves Navier–Stokes*. I think it is the opposite.

Famous open problems are surrounded by enormous clouds of redundant uncertainty. Researchers do not merely lack the final idea. They lack perfect knowledge of which ideas are truly new, which routes have been killed, which assumptions are doing the work, and which gaps are formal rather than conceptual. Human collaboration reduces this uncertainty through seminars, surveys, correspondence, graduate training, and memory. The process is slow because the representation is mostly language.

AI can change the representation.

If a large part of the surrounding theory becomes structured enough to query, test, and formalize, the final unknown becomes cleaner.

This is what ninety years of near misses has purchased.

Not failure.

A narrowing corridor.

The corridor is still dark at the end. We do not know whether smoothness or blowup is waiting there. We do know many doors that do not lead out.

A good AI research institution should begin by locking those doors behind it.
