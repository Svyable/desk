# Hunting a Singularity

There is a certain kind of mathematical object that seems determined not to be found.

It may exist. It may be unstable. It may occupy a tiny region of function space. Any small perturbation of the initial guess sends the numerical method away from it. Ordinary simulation therefore behaves almost perversely: the closer the object is to the boundary between possible behaviors, the less likely a generic computation is to land there and stay.

This is one reason singularity hunting is a different activity from simulating a fluid.

A simulation begins with initial data and advances the equations. It asks what this flow does.

A singularity search can begin with the desired pathological behavior and work backward. Does there exist a profile, perhaps self-similar after a change of variables, that satisfies the equations and the required constraints? Can we pose the search as a nonlinear optimization problem over functions? Can we stabilize the unstable object numerically by solving for it as a stationary point in transformed coordinates rather than hoping time evolution visits it naturally?

Machine learning becomes interesting here for reasons that have little to do with conversational intelligence.

A neural network is a flexible parameterization of a function. Physics-informed neural networks, or PINNs, can be trained so that their outputs approximately satisfy differential equations and boundary or normalization conditions. Instead of fitting labels from a dataset, one can optimize the network against the residual of the governing equation.

The phrase *approximately satisfy* is where the entire epistemic problem begins.

In 2025, researchers working across Google DeepMind, Brown, NYU, Stanford and other institutions described using specialized neural methods and high-precision optimization to discover previously unknown unstable singularities in several nonlinear fluid equations related to, but not identical with, the three-dimensional Navier–Stokes Millennium problem. The systems searched for self-similar structures in equations including models where singularity behavior had resisted conventional numerical discovery.

This was not “AI solves Navier–Stokes.”

It was more instructive than that headline would have been.

The work showed a machine-learning system acting as a mathematical microscope.

The neural network did not need to understand turbulence in the way a human fluid dynamicist does. It needed to represent a candidate function accurately enough, optimize a difficult residual, respect constraints, and reveal a structure that researchers could then analyze. The object of interest was not generated prose. It was a numerical solution candidate living in function space.

This is a more mature role for AI in science.

Use the machine where the search space is too large or unstable for ordinary human-guided methods. Then hand the surviving object to mathematics.

The self-similar idea is central because blowup, if it occurs, may organize itself under rescaling. Imagine a flow whose characteristic spatial scale shrinks as a potential singular time approaches while some amplitude grows in a corresponding way. In appropriately rescaled coordinates, the violent time-dependent behavior can become a stationary or slowly varying profile. Instead of simulating an ever-sharpening event directly, one searches for the profile satisfying a transformed equation.

This does not guarantee the true Navier–Stokes problem has a self-similar singularity. In fact, important classes of self-similar blowup have been ruled out under various assumptions. But the general strategy—change coordinates so a dynamically unstable event becomes a solvable stationary object—is powerful across nonlinear PDE.

It also makes the problem amenable to optimization.

A neural network can represent the candidate profile. Automatic differentiation computes derivatives. A loss function penalizes PDE residual, boundary behavior, normalization, symmetry conditions, or other constraints. An optimizer adjusts millions of parameters. High-precision arithmetic and specialized second-order methods can push residuals far lower than naive training would achieve.

When the residual becomes tiny, the plot becomes seductive.

The network appears to have found the thing.

This is where mathematics must become impolite.

A residual of 10^-12 is not a theorem.

Neither is 10^-30.

A residual is a statement about a chosen numerical representation, sample, norm, precision, optimization landscape, and implementation. A function can satisfy an equation approximately on collocation points while violating it between them. A network can represent a nearby solution to a slightly different problem. Boundary truncation can matter. Symmetry constraints can remove unstable modes. The loss can weight some regions more heavily than others. Floating-point error can produce false convergence. A sharp feature can live below the sampling scale.

Even when the numerical candidate is genuinely excellent, “excellent approximation” is not “exact solution.”

The gap can be bridgeable.

That is the exciting part.

Computer-assisted proof has a long tradition of taking a numerical approximation and surrounding it with rigorous error bounds. One computes an approximate object, studies the linearization around it, bounds inverse operators, controls nonlinear remainders, and uses a fixed-point or contraction argument to prove that a true solution exists nearby. Interval arithmetic and validated numerics prevent rounding error from escaping the accounting.

The computer first guesses.

Then mathematics proves the guess has an exact neighbor.

This is the template *Fluidity* borrows for Navier–Stokes.

An AI system should not be asked to leap directly from equation to theorem if an intermediate numerical object can guide the search. Nor should the numerical object be promoted directly into a claim. The credible path is a pipeline:

Discover a candidate.

Characterize it.

Stress it.

Identify the exact theorem its existence would imply.

Construct a rigorous enclosure.

Formalize the certificate if feasible.

Let independent groups reproduce it.

Only then discuss the Millennium problem.

The DeepMind-associated singularity work is valuable because it demonstrates the first stages of this pipeline in a setting where the target structures are genuinely difficult. The researchers emphasized unstable singularities. Instability matters because ordinary trajectory simulation can systematically miss an unstable self-similar solution even when that solution exists mathematically. Neural optimization can search for the stationary profile directly.

This suggests a role for AI broader than PINNs.

The machine can search not only functions but formulations.

Which rescaling makes a candidate singular behavior stationary?

Which gauge removes irrelevant degrees of freedom?

Which coordinates best expose symmetry?

Which normalization prevents the optimizer from collapsing onto a trivial solution?

Which basis represents the profile efficiently?

Which residual norm correlates with the rigorous estimate needed later?

Which unstable eigenmodes dominate the linearization?

A language-and-code agent can orchestrate these choices while numerical solvers perform the heavy calculation.

This is where Anthropic’s tool-using agents could connect to the fluid work even if Anthropic never trains a specialized PDE model.

The model does not have to be the numerical method.

It can be the scientist operating a numerical laboratory.

Give the agent access to high-precision solvers, automatic differentiation, continuation methods, spectral codes, interval packages, symbolic algebra, visualization, and a paper library. Its job is to propose experiments, inspect failures, modify formulations, and preserve provenance. Specialized numerical systems do what they are good at. The agent manages the research loop.

This is a more plausible architecture than asking Claude to internally simulate a turbulent flow through next-token prediction.

It also creates a better failure surface.

When the model is wrong about a derivation, symbolic or formal tools can catch it.

When the optimizer is unstable, diagnostics reveal it.

When a profile is resolution-dependent, mesh or basis refinement exposes it.

When two independent solvers disagree, the disagreement becomes a research task.

When a numerical residual stops decreasing beyond a precision threshold, the system asks whether the formulation is wrong instead of generating a confident paragraph about success.

The computer becomes less of an oracle and more of a laboratory full of instruments.

Humans have already learned to distrust instruments intelligently. A measurement can saturate. A sensor can drift. A simulation can be under-resolved. An optimization can settle in the wrong basin. Scientific training is partly learning that every instrument has a characteristic way of lying.

AI needs that culture.

The current enthusiasm around physics-informed neural networks makes the warning especially important. PINNs have produced impressive results on many PDE problems, but reliability is uneven. Peer-reviewed work in 2026 continued to show that PINNs can struggle even on classical benchmark flows such as the lid-driven cavity, particularly as Reynolds number and solution complexity increase. A network that minimizes a PDE residual is not automatically a superior CFD solver, much less a proof engine.

This counterevidence should strengthen the Navier–Stokes program.

It tells us not to worship the method.

Use neural representations where they discover structures conventional methods miss. Use spectral methods where spectral methods are better. Use finite differences, finite elements, adaptive meshes, continuation, Newton–Krylov methods, interval arithmetic, symbolic analysis, whatever the problem demands. The research stack should be method-agnostic and certificate-hungry.

Anthropic’s contribution, in this vision, is not a branded PINN.

It is coordination across heterogeneous tools.

A singularity-hunting agent might begin with the literature on known blowup scenarios. It extracts candidate scalings and forbidden classes. It constructs transformed equations. A numerical specialist searches each family. A critic checks whether the candidate satisfies finite-energy, decay, incompressibility, and smooth-data requirements. Another agent studies the linearized spectrum. A proof planner asks what stability theorem would promote the candidate into a rigorous construction. A formalization agent encodes the theorem statement before the expensive proof begins.

Most candidates die.

One violates decay.

One has infinite energy.

One exists only under symmetry excluded by the desired claim.

One disappears when precision increases.

One depends on a boundary artifact.

One solves Euler rather than Navier–Stokes because the viscous term became negligible in the wrong limit.

One produces spectacular vorticity growth that eventually regularizes.

One is a rediscovery of a profile already ruled out by a theorem the search agent missed.

The system should celebrate these deaths quietly.

Every dead candidate reduces the search space.

This is a different use of machine abundance than brute-force theorem generation. Instead of producing a million proofs, produce a million possible pathologies and force them through increasingly physical and mathematical filters.

The blowup side of Navier–Stokes is naturally suited to adversarial search because a single counterexample would settle the negative direction. One admissible smooth initial condition leading to finite-time breakdown is enough.

This asymmetry is tempting.

A positive proof must control every admissible flow.

A negative proof needs one.

One might therefore expect AI to favor blowup hunting. Search is good at finding needles.

But the needle has to be exact.

A machine can find a field that looks almost singular. Nature can produce enormous gradients. Tom Hou and collaborators have reported highly resolved numerical scenarios in three-dimensional Navier–Stokes-related settings showing dramatic vorticity amplification and behavior consistent with potential singularity formation. The numerical work is sophisticated and scientifically valuable. It still does not turn finite computation into infinite blowup.

That last gap is where many famous claims go to die.

A finite-time singularity theorem needs a mechanism robust enough to survive rigorous error accounting. If the candidate is unstable, the proof may require exquisite control. If the singularity exists only on a knife-edge, one must construct data on that edge and show the exact PDE follows the intended trajectory. If the profile has unstable directions, a computer-assisted proof may need to build the stable manifold or tune parameters with validated precision.

This is hard mathematics.

It is also exactly the sort of hard mathematics that benefits from a discovered numerical object.

Without the object, analysts do not know what to prove.

With it, the infinite problem becomes a finite list of estimates around a concrete candidate.

This is why the 2025–2026 singularity work is, to me, more relevant to an AI Navier–Stokes future than another benchmark showing a model can answer graduate-level questions.

Benchmarks test whether the model can traverse known terrain.

Singularity discovery shows machines helping reveal terrain humans had not mapped.

That is the step from assistant to instrument.

The next step is from instrument to institution.

An isolated numerical discovery can be forgotten, misinterpreted, or oversold. An institution wraps it in memory, criticism, formal targets, independent reproduction, and a path to rigor.

The most important screen in the Navier–Stokes lab may therefore not be the one displaying the candidate singularity.

It may be the one displaying everything that would have to be true before the lab is allowed to believe it.
