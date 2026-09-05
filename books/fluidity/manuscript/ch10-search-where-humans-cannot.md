# Search Where Humans Cannot

Human beings are very good at searching spaces we can imagine.

We are worse when the interesting object is represented by ten thousand interacting choices and the useful region occupies a fraction of the space too small to name.

This is why we build machines.

A chess program searches positions no person could enumerate. A protein-design system can evaluate sequences beyond any laboratory’s physical screening capacity. A numerical optimizer can move through millions of parameters without needing to understand each parameter as a separate idea. The machine advantage is not always superior abstraction. Sometimes it is the willingness to visit places no human curiosity budget would pay for.

Navier–Stokes contains several spaces like this.

The most obvious is initial data. A three-dimensional divergence-free velocity field is not a list of a few numbers. It is a function with infinitely many degrees of freedom. Any numerical representation truncates that infinity into a very large but finite parameter space. Even after imposing symmetries, decay, energy bounds, or spectral cutoffs, the number of possible configurations is immense.

If blowup exists, the dangerous initial condition may live in a narrow family we have not learned to name.

Humans respond by imposing structure.

Axisymmetry. Swirl. Helicity. Vortex tubes. Anti-parallel configurations. Self-similarity. Concentrated Fourier packets. Geometric ansätze motivated by physical intuition. These reductions make the search tractable and analytically interpretable. They also risk excluding the pathology.

A machine can search more promiscuously.

It can parameterize divergence-free fields in a basis, impose energy or regularity constraints, and optimize an objective associated with future vorticity growth, enstrophy production, depletion of dissipation, or proximity to a candidate singular scaling. It can mutate fields, run short high-resolution simulations, retain the most extreme outcomes, and repeat.

This kind of adversarial fluid search already has analogues in computational mathematics. Researchers have optimized over initial conditions to find extreme growth events, near-singular behavior, or sharp constants in inequalities. AI adds a flexible controller and function approximator around those methods.

The objective matters more than the brand of optimizer.

Ask for maximum vorticity at a fixed future time and the system may find a field that produces a large transient spike with no relevance to blowup.

Ask for behavior consistent with a scale-invariant singularity and it may exploit discretization artifacts that imitate the scaling on the available range.

Ask to minimize a PDE residual and it may learn a solution that satisfies sampled points while cheating elsewhere.

Machine search is literal. It finds what the objective rewards.

This makes objective design a form of mathematical conjecture.

What finite computation would be informative about an infinite-time or singularity question?

That is not a machine-learning question alone. It is the analysis.

A useful search objective should connect to a theorem. If a certain quantity exceeding a threshold would imply entry into a regime where a validated continuation argument can establish blowup, optimize that quantity. If near-extremizers of a critical inequality reveal the geometry any singularity must approach, search for those. If a proposed regularity estimate depends on a constant, numerically optimize the constant and inspect the extremal fields.

The goal is to make computation produce mathematical witnesses.

A witness can be positive or negative.

Suppose a researcher conjectures an inequality that would control vortex stretching by dissipation. The inequality seems plausible on random fields. An adversarial optimizer searches divergence-free fields satisfying the required normalization and maximizes the ratio of the two sides. Within hours it finds configurations where the ratio grows without apparent bound under refinement.

The proof idea is dead before anyone writes the proof.

That is a valuable result.

The most productive AI system may spend much of its time disproving its own conjectures numerically.

Mathematicians already test conjectures on examples. The machine difference is adversarial scale. Instead of trying the examples tradition has taught us to try, optimize specifically for failure.

This is the mathematical equivalent of red teaming.

If Anthropic built a Navier–Stokes effort using instincts from AI safety, I would want a dedicated counterexample factory.

Every proposed universal inequality enters the factory.

The factory knows the symmetries and constraints of the equation. It generates or optimizes fields designed to violate the claim. It rescales them. It concentrates them. It separates frequencies. It pushes them toward boundaries of embeddings. It tries periodic and whole-space approximations. It searches known pathological families. It asks whether the inequality survives the averaged equation. It reports not merely “found a failure” but which structural feature caused the failure.

A theorem that survives aggressive finite search is not proved.

But a false theorem may be killed cheaply.

This asymmetry is a gift.

The cost of false mathematical ideas is often borne late. A researcher senses an estimate might hold, builds a strategy around it, proves preliminary lemmas, and only later discovers a counterexample. Machine adversaries can move some of that cost to the beginning.

The same approach applies to proof plans.

Suppose an agent proposes a decomposition of the nonlinear term into “good” and “bad” frequency interactions, claiming the bad part is perturbative. A search system can construct synthetic spectra concentrating energy in exactly the interactions designated bad and estimate whether the claimed smallness survives scaling. If not, the architecture fails before formalization.

This is search where humans can search too, but rarely exhaustively.

There are more ambitious spaces.

One is the space of mathematical observables.

A regularity proof might depend on finding a functional whose evolution has a favorable sign or whose growth can be controlled by known quantities. Humans invent such functionals through analogy and intuition. Machines can generate families of them from building blocks: norms, weighted integrals, commutators, vorticity-direction measures, frequency envelopes, local energies, pressure corrections, mixed quantities.

The combinatorics explode immediately.

Good.

Let them.

The crucial step is to attach filters.

First, scaling. Discard candidates with no plausible relationship to the critical structure unless there is an explicit reason to keep them.

Second, symmetry and invariance. A quantity depending on coordinates in a physically meaningless way should justify itself.

Third, symbolic evolution. Differentiate along smooth solutions and inspect the terms.

Fourth, numerical stress. Does the candidate behave as hoped on known flows, extreme-growth solutions, and adversarially optimized fields?

Fifth, nearby-model testing. Does the same favorable law hold for equations known to blow up? If so, it cannot alone prove what we need.

Sixth, literature comparison. Is the functional genuinely new, or a disguised form of an existing criterion?

Seventh, formal verification of identities that survive.

A million candidates can become a dozen without a human seeing the million.

This is the central bargain of machine search.

Humans give up the right to inspect every rejected possibility in exchange for a dramatically larger frontier of possibilities explored.

That bargain is already normal in optimization and machine learning. It is less comfortable in pure mathematics because mathematicians value reasons. If the system says, “I searched 8.2 million observables and these nine survived,” an analyst will reasonably ask why these nine matter and whether the filters excluded the tenth that contained the theorem.

The answer is not to avoid search.

It is to make the filters part of the science.

Every rejection rule should be explicit and, where possible, reversible. The system should retain enough metadata to revisit discarded classes when a new theorem changes the criteria. If a candidate was rejected only because it appeared supercritical, and later an agent discovers a geometric compensation mechanism, the old candidate family should be recoverable.

Search needs memory because mathematical relevance changes.

Another enormous space is the literature itself.

This sounds less exciting than function space and may be equally important.

Mathematics is fragmented by notation. Two papers can contain structurally similar arguments with symbols so different that ordinary keyword search barely connects them. One community works in vorticity, another in velocity gradients, another in Fourier blocks, another in geometric measure language. The same inequality can appear in local and global forms. A theorem can be rediscovered because the original paper framed it around a different problem.

Language models are naturally good at translation across notation.

Used carefully, this can create a search engine for mechanisms rather than words.

“Find results whose proof ultimately controls the vortex-stretching term through directional coherence.”

“Find all regularity criteria invariant under Navier–Stokes scaling and compare their logical strength.”

“Find arguments using backward uniqueness in blowup exclusion.”

“Find theorems where pressure regularity substitutes for velocity regularity.”

“Find results that would become equivalent under this interpolation lemma.”

The output cannot be trusted as a bibliography without verification. But as a generator of connections, it can search a conceptual space humans traverse slowly.

This matters because breakthroughs often occur at interfaces.

A technique from dispersive PDE moves into fluids.

A geometric insight from minimal surfaces informs regularity.

A computer-assisted method from dynamical systems makes a singularity construction rigorous.

A proof-assistant abstraction built for probability turns out to simplify measure-theoretic PDE machinery.

Humans specialize because specialization is how depth is achieved. AI can help maintain breadth without pretending breadth is depth.

The system can say: here are seven neighboring literatures with structurally similar obstacles. A human can decide which analogy deserves belief.

Search also extends into the space of proof representations.

An argument that looks impossible in physical coordinates may become transparent in Fourier space. A nonlocal pressure term may be easier after projection. A self-similar change of variables can convert finite-time behavior into an infinite-time stationary problem. A logarithmic time coordinate can turn scaling into translation. A wavelet or Littlewood–Paley decomposition can expose interactions by scale.

Models can translate candidate identities among representations automatically and ask which one produces the cleanest structure.

This is not merely algebraic convenience.

Representation determines what patterns are visible.

The history of mathematics is full of problems becoming solvable after the right representation was invented: complex numbers, Fourier transforms, coordinates, generating functions, category-theoretic abstractions. The new representation does not alter the object. It changes the search landscape for the mind.

Can a machine invent representations rather than merely choose among known ones?

Probably, in some limited sense, before it can explain why they are beautiful.

Optimization can search parameterized transformations for properties we value: sparsity of nonlinear interactions, cancellation, near-diagonality, monotonicity, easier bounds. Symbolic regression can propose coordinate changes. Neural operators can discover latent variables that compress solution families. Most outputs will be ugly and useless. Some may reveal an invariant humans can later understand.

This is where the book’s argument becomes genuinely speculative.

There is no evidence, as of September 2026, that Anthropic has a machine capable of discovering the decisive representation for Navier–Stokes. There is evidence that modern AI systems can coordinate tools, generate code, reason about formal mathematics, and contribute to research-level mathematical tasks. There is evidence from other groups that machine learning can uncover unexpected singular structures in fluid equations.

The leap is to combine those capabilities into a search process whose scale changes what can be tried.

The leap could fail.

Search spaces can be too large even for machines. Objectives can be misleading. The useful representation may require a conceptual invention not expressible in the chosen parameterization. Numerical approximations can point persistently in the wrong direction. Models can waste vast compute rediscovering the obvious.

“Search more” is not a theory of intelligence.

It is a resource.

The quality of the research comes from how the resource is coupled to constraints.

Chess search became powerful because the game has crisp legal moves and outcomes. Protein search benefits from experimental and structural feedback. Navier–Stokes research has fewer immediate labels. Most candidate ideas are not simply legal or illegal. They are useful, useless, interesting, false, already known, unprovable with current tools, or true but irrelevant.

The evaluator is the bottleneck.

This is why I keep returning to funnels.

The future system wins not by enumerating infinity but by learning which inexpensive tests correlate with mathematical leverage.

Scaling is one such test.

Counterexample optimization is another.

Formal type checking is another.

Known-model transfer is another.

Literature equivalence is another.

Numerical stability under precision and resolution is another.

Human expert judgment remains another.

Stack enough of them and search becomes less blind.

The point is not to remove human intuition from the process. It is to protect intuition from having to perform every low-level rejection itself.

A mathematician should be able to say, “I have a strange idea: maybe dangerous vorticity concentration always creates a compensating pressure structure,” and ask the system to spend a million machine-hours trying to make the idea precise, find counterexamples, search the literature, derive candidate identities, and return with the five versions that survived.

That is an extraordinary amplification of curiosity.

The mathematician’s afternoon becomes a research program.

The system’s obligation is to come back with less noise than it started with.

That is the hard part.

Search where humans cannot.

Filter where humans would.
