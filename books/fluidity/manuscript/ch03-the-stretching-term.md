# The Stretching Term

Take a small rubber band, draw an arrow along it, and stretch it.

The arrow becomes longer. Nothing mystical happened. You changed the geometry and the marked direction was carried with it.

This is not a derivation of three-dimensional vortex stretching, but it is a useful physical insult to the difficulty. A fluid can contain rotation. In three dimensions, the flow can stretch the direction in which that rotation points. Under the right circumstances, stretching intensifies vorticity. The field that describes the fluid is therefore capable of reorganizing itself in a way that increases the very gradients analysts are trying to control.

Viscosity pushes the other way. It diffuses sharp structure. The Millennium problem sits inside that contest.

Popular explanations of Navier–Stokes often stop here because the picture is intuitive. Vortex stretching makes smaller, fiercer vortices; viscosity smooths them; nobody knows whether smoothing always wins. That is directionally helpful and mathematically inadequate.

The real difficulty is not that we lack a stabilizing term. We have one. It is not that we lack an energy estimate. We have one of the most famous estimates in PDE. The problem is that the quantities controlled by the basic energy inequality are not strong enough, at the three-dimensional scaling of the equation, to rule out all concentration scenarios.

This is where the word *supercritical* enters and where many otherwise intelligent conversations go soft.

A partial differential equation has natural scalings: transformations that change space, time, and the size of the unknown field while preserving the form of the equation. For three-dimensional incompressible Navier–Stokes, one can rescale a solution so that spatial features are compressed, time is accelerated appropriately, and velocity is amplified. Certain norms grow under this rescaling, some shrink, and some remain invariant. Those invariant quantities are called critical with respect to the scaling.

The basic kinetic energy lives at a weaker level than the critical regularity one would like to control. In loose language, the energy estimate can remain perfectly respectable while activity migrates toward smaller scales where derivatives become dangerous. The estimate does not see enough.

This is one reason a proof cannot simply say, “viscosity dissipates energy, therefore blowup is impossible.”

If that sentence worked, the problem would have disappeared before the Clay Institute existed.

The energy identity captures something real and powerful. Multiply the velocity equation by the velocity, integrate in space, use incompressibility to cancel the transport term in the appropriate way, account for pressure, and viscosity produces dissipation through the gradient of velocity. For smooth solutions in the standard setting, kinetic energy decreases according to a clean law.

The nonlinear term is therefore strange. It can rearrange energy without creating total kinetic energy in the simplest balance, yet that rearrangement may transfer energy toward high frequencies where gradients are large. The total amount of money in the account can remain bounded while it is moved into a currency whose exchange rate against regularity is brutal.

Turbulence makes this intuition familiar. Large structures feed smaller structures across a cascade until viscosity becomes effective at sufficiently fine scales. But the mathematical question is not whether ordinary turbulent flows dissipate. It is whether the equation itself permits a concentration process so extreme that smoothness fails before viscosity can regularize it.

The vorticity formulation exposes the danger more sharply.

Vorticity is the curl of the velocity field. It measures local rotation. In two dimensions, vorticity behaves in a way that gives analysts much stronger control. There is no genuine vortex stretching term of the three-dimensional kind. Vorticity is transported and diffused, and maximum-principle-type arguments become available. Global regularity in two dimensions is therefore far better understood.

In three dimensions, the vorticity equation contains a term often written schematically as the vorticity acting through the velocity gradient on itself. It is the mathematical home of stretching. The geometry of vortex lines and the strain field become coupled. A region of rotation can align with an expanding direction of the strain, increasing vorticity magnitude.

The phrase “can increase” is doing careful work. The term is not always positive. Geometry matters. Alignment matters. Nonlocal structure matters. The same equation that permits intensification also contains mechanisms that may prevent coherent runaway.

That ambiguity is why geometric approaches to Navier–Stokes have been so compelling. If blowup requires a specific alignment of vorticity, strain, and spatial concentration, perhaps the equation’s geometry forbids that alignment from persisting strongly enough. If vortex directions become sufficiently coherent in dangerous regions, perhaps one gains improved estimates. If the nonlinear interactions that transfer energy to small scales have cancellations not captured by crude norm inequalities, perhaps the apparent supercriticality can be defeated by using the exact structure.

The phrase *exact structure* will recur throughout this book.

Terence Tao’s work on an averaged version of the three-dimensional Navier–Stokes equation gave the field a particularly sharp warning. Tao constructed an averaged nonlinearity that preserves important broad properties, including an energy cancellation, yet admits finite-time blowup. The result does not prove that true Navier–Stokes blows up. It proves something almost more useful for a positive strategy: generic arguments that rely only on those broad properties cannot be enough. A successful global-regularity proof has to exploit finer features of the actual Navier–Stokes nonlinearity.

This is a negative theorem as a design document.

Suppose an AI system proposes a beautiful argument. It uses the energy inequality, a family of harmonic-analysis estimates, and some general cancellation property of the bilinear term. Before anybody celebrates, another agent should ask: would the same argument apply to Tao’s averaged equation?

If yes, and if the hypotheses cover the blowup solution there, the argument cannot be right.

That is an unusually powerful form of automated criticism. Instead of asking a language model whether another language model’s proof “looks correct,” one can test the proof architecture against nearby mathematical worlds where the conclusion is known to fail.

This is how failed routes become computationally useful.

The Navier–Stokes literature contains many such boundary markers. Regularity criteria tell us that if certain norms remain finite, or if certain components satisfy integrability conditions, then the solution stays regular. Partial regularity tells us how small the singular set must be for suitable weak solutions. Symmetric or small-data cases show regimes in which the equation behaves well. Convex-integration results show how wild weak solutions can become when regularity requirements are loosened. Each result marks a region of the map.

An AI research system should not merely ingest these papers as text.

It should encode the boundaries they establish.

A candidate proof wants to bound a norm. Which known criteria would then close the theorem? Is the bound scaling-critical, subcritical, or supercritical? Does the estimate rely on an embedding that fails at an endpoint? Could a sequence of rescaled test functions make the constant blow up? Does Tao’s averaged equation satisfy the same premises? Does a convex-integration construction show the proposed statement is false for weak solutions? Does a known blowup in a toy model defeat the generic mechanism?

This begins to look less like a chatbot and more like a theorem laboratory.

The difference matters because mathematical notation can disguise structural repetition. A proof may be written with different symbols, in physical space instead of Fourier space, with dyadic decompositions instead of Sobolev norms, but still rely on the same doomed skeleton. Humans recognize these families through expertise acquired over years. Machines can, in principle, make the skeleton explicit.

Imagine a database of proof moves rather than papers.

“Uses only global energy control.”

“Requires endpoint Sobolev embedding.”

“Relies on sign of enstrophy production.”

“Assumes vorticity-direction coherence.”

“Controls pressure by Calderón–Zygmund estimate.”

“Closes under smallness in a critical norm.”

“Fails under averaged nonlinearity.”

“Depends on axisymmetry.”

A new argument could be compared against that database before it receives serious human attention.

This would not prove the argument wrong. It would triage it.

Human mathematicians already do this mentally. An expert can hear the first five minutes of a seminar and realize that a proposed global estimate cannot survive scaling. Another notices that the speaker is trying to control a supercritical quantity with subcritical data. A third recognizes a lemma as a disguised version of a known criterion. A fourth asks what happens to the pressure term. The objections arrive from accumulated pattern recognition.

AI can make some of that pattern recognition cheap enough to apply to every branch of search.

The prize problem may require exactly this because the number of attractive wrong routes is enormous.

The nonlinearity is quadratic. Quadratic terms invite inequalities. Inequalities invite interpolation. Interpolation invites exponents. Exponents can be adjusted until a line appears to close. The danger is that one hidden dependence grows at the same scale as the feared singularity. The estimate becomes circular: it controls the dangerous quantity by something that is dangerous in disguise.

A proof assistant can catch some versions of this once the argument is formalized. It will not automatically tell you that the theorem is unhelpful. A valid inequality can be mathematically correct and strategically useless because it produces no uniform control from the initial data.

This is where proof search and theorem proving separate.

Theorem proving asks: does this conclusion follow from these premises?

Proof search for Navier–Stokes asks: which premises can ultimately be discharged from the Clay hypotheses?

The second question is closer to scientific discovery.

Consider a regularity criterion. Suppose we know that a solution is smooth as long as an integral involving velocity or vorticity remains finite. The criterion turns the Millennium problem into a more concentrated one: can that integral blow up? This is progress because it identifies a choke point. But if every known estimate for the integral depends on the integral itself, the graph has merely folded back on itself.

An AI system needs to distinguish a choke point from an exit.

One route is to search for a new quantity with better behavior.

Mathematics has a long history of breakthroughs that amount to choosing the right thing to measure. Energy. Entropy. Curvature. A monotone frequency. A compensated quantity in which bad terms cancel. A transform that makes hidden linearity visible. The equation stays the same; the observable changes.

Could a model discover such an observable for Navier–Stokes?

This is one of the places where I think the optimistic case for AI is strongest, though not for the reason usually offered.

People imagine a model staring at the PDE and “having an insight.” Perhaps. A more concrete advantage is combinatorial. The literature contains thousands of quantities, decompositions, commutators, identities, criteria, and transformations developed across PDE, harmonic analysis, geometry, turbulence, and dynamical systems. Humans explore this space selectively because no one can hold all of it at once. A machine can generate candidate combinations, reject those that violate scaling, compute formal evolution laws, test them on known solutions, search for sign structures, and compare the surviving forms with the literature.

Most candidates will be garbage.

That is acceptable if garbage collection is automated.

Suppose the system generates a million candidate functionals. It can discard those with the wrong scaling. Symbolic differentiation discards those whose evolution laws contain obviously uncontrolled higher-order terms. Numerical searches discard those that fail monotonicity on known smooth flows. Toy-model tests discard those that would incorrectly prove regularity for an averaged equation known to blow up. Literature search discards those already studied. Formalization discards those whose supposed identities were algebraic mistakes.

What reaches a human might be ten candidates.

The important innovation is not the million ideas.

It is the funnel.

Mathematical creativity under abundant generation becomes an exercise in designing increasingly severe filters.

The stretching term provides a natural target for such a funnel because it converts a vague question—“why might a singularity form?”—into geometric and analytic subquestions. Which alignment configurations maximize vorticity production? Can incompressibility constrain them? How local is the dangerous interaction? Can one isolate a scale-local transfer mechanism? Are there quantities that see direction coherence rather than magnitude alone? Can pressure prevent persistent concentration? What structures are compatible with self-similar blowup? Which are ruled out by finite energy or decay?

Each question supports a different kind of machine tool.

Symbolic agents can derive identities.

Numerical agents can search extremizers.

Literature agents can map prior criteria.

Formal agents can verify lemmas.

Adversarial agents can construct counterexamples in simplified models.

Human analysts can decide whether the surviving structure smells like mathematics or like a well-filtered accident.

That last role is not a ceremonial human-in-the-loop checkbox.

Mathematical taste is partly a judgment about leverage. A technically valid lemma can be irrelevant. A numerically suggestive quantity can be impossible to estimate. A formal proof plan can require ten thousand years of library development. A crude observation can be the one thing that changes the geometry of the problem.

Machines will improve at these judgments. In the near term, the scarce resource may be human attention directed at the right survivors.

This turns the Navier–Stokes problem into an economics problem in addition to a mathematics problem.

How much cheap search can we buy per hour of expert scrutiny?

How quickly can bad branches be killed?

How much failed knowledge can be retained?

How much of verification can be shifted from intuition to exact checkers?

How can the system make its own uncertainty legible enough that experts know where to look?

The title *Fluidity* is partly about this shift. The research process itself becomes a flow. Ideas enter at large scale. They cascade into smaller claims. Some dissipate under counterexamples. Some survive into formal lemmas. A few concentrate.

That metaphor is dangerous because metaphors like to pretend they are explanations.

Still, one parallel is useful.

The challenge is not to stop the cascade.

It is to control it.

In three-dimensional Navier–Stokes, we do not know whether the equation always controls the cascade strongly enough to preserve smoothness.

In AI mathematics, we are about to find out whether verification can control generation strongly enough to preserve truth.

The stretching term is where both stories stop being comfortable.
