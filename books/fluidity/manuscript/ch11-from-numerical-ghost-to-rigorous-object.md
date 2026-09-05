# From Numerical Ghost to Rigorous Object

A numerical singularity begins life as a rumor told by floating-point numbers.

The rumor can be persuasive.

A rescaled profile stops changing. Residuals fall across orders of magnitude. Independent discretizations produce the same shape. The apparent blowup exponent stabilizes under refinement. High-precision arithmetic extends the scaling regime. The linearized spectrum has the pattern theory predicted. A neural representation and a spectral representation converge toward each other.

At some point, the pictures stop looking accidental.

Mathematics is still allowed to say no.

This can feel absurd to people outside numerical analysis. If every computation points to the same object, what exactly is left to doubt?

Everything that lives between finite approximation and exact existence.

The transition from numerical ghost to rigorous object is one of the most beautiful forms of collaboration between computation and proof. It is also a model for how an AI-assisted Navier–Stokes result could become credible without asking humans to distrust computation or worship it.

Start with a candidate solution to a transformed PDE.

Perhaps a self-similar ansatz converts a potential finite-time singularity into a stationary profile equation. A numerical method finds a function U* that makes the residual F(U*) very small. If F(U)=0 were solved exactly and if U satisfied the required decay, regularity, and admissibility conditions, then U would generate the desired PDE behavior.

The numerical result says U* is close to something interesting.

The rigorous task is to prove there exists an exact U near U* with F(U)=0.

One common strategy is a Newton-like argument.

Linearize F around U*. If the derivative DF(U*) is invertible in the relevant function spaces with a controlled inverse, then small residual plus sufficiently controlled nonlinear remainder can imply the existence of a true solution nearby. In finite dimensions this resembles the familiar idea that Newton’s method converges when one starts close enough to a nondegenerate root. In infinite-dimensional PDE, every phrase in that sentence becomes a theorem.

What space does U live in?

What norm measures closeness?

Is the linearized operator actually invertible, or does symmetry create neutral directions?

If there are neutral directions, what gauge or phase condition removes them?

How large is the inverse norm?

How does one bound the nonlinear remainder?

Does the numerical approximation satisfy the boundary or decay conditions strongly enough?

Can truncation error be enclosed?

Can every constant be made explicit?

The computer-assisted proof is the process of turning those questions into inequalities that close.

This is where a tool-using AI system could be exceptionally useful because the work crosses disciplines that humans often divide among people.

A numerical analyst constructs the candidate.

A functional analyst chooses spaces and proves operator bounds.

A dynamical-systems specialist studies the spectrum and invariant manifolds.

A rigorous-numerics expert builds interval enclosures.

A formal-methods specialist checks the final certificate.

A PDE expert verifies that the exact object actually implies the claimed singularity or regularity statement for the original equation.

The project is naturally multi-agent because the theorem itself is a chain of interfaces.

Interfaces are where mistakes accumulate.

Suppose the numerical profile is computed on a truncated domain. The rigorous argument has to control what happens outside the truncation. A decay estimate cannot be assumed merely because the plotted function appears small near the boundary. The tail may interact through a nonlocal pressure term.

Suppose a spectral method represents the profile with a finite number of coefficients. The omitted high-frequency tail needs a bound.

Suppose an eigenvalue computation suggests one unstable direction. A proof needs to enclose the spectrum tightly enough to know there are not hidden unstable modes missed by discretization.

Suppose a neural network gives a residual near machine precision at millions of points. A proof needs a norm bound over the continuum, not a confidence interval on samples.

These are not reasons to distrust numerics.

They are the agenda for upgrading numerics.

The first practical requirement is error decomposition.

Every computational claim should be accompanied by a taxonomy of its possible errors: floating-point rounding, discretization, truncation, optimization, representation, domain approximation, quadrature, differentiation, conditioning, and model mismatch. Different tools control different terms.

High precision reduces rounding but does not fix discretization.

A finer grid reduces some discretization errors but can worsen conditioning.

Automatic differentiation computes derivatives of the neural representation exactly in symbolic graph terms but says nothing about whether the representation is close to the true solution.

A low residual indicates equation fit in a chosen norm but does not automatically control distance to an exact root when the linearized operator is nearly singular.

This last point is crucial.

A small residual can sit far from any true solution if the problem is ill-conditioned.

The missing quantity is stability.

How strongly does the equation push errors away from the candidate? If the linearized inverse is huge, tiny residual may correspond to substantial uncertainty in the profile. If the candidate lies near a bifurcation or has unstable directions, the geometry can be delicate.

A good AI scientist should learn to ask for condition numbers before adjectives.

“Residual 10^-25” is impressive only relative to the stability constants needed for the existence argument.

This is exactly the kind of cross-check language models can automate once the discipline is encoded. The numerical agent reports a residual. The rigorous agent refuses to score it without an inverse bound. The coordinator knows the project is blocked on spectral validation rather than treating the tiny number as success.

The second requirement is interval arithmetic or another rigorous enclosure method.

Ordinary floating-point numbers represent nearby real values after rounding. Interval arithmetic represents sets guaranteed, under correct implementation and assumptions, to contain the exact value. Operations enlarge the interval to cover all possibilities introduced by rounding and uncertainty. The result can be frustratingly conservative, but that conservatism is the point.

A computer-assisted proof often becomes a war against interval inflation.

Naive bounds become too wide. Dependencies among variables are lost. One chooses better coordinates, sharper analytic estimates, domain decompositions, or higher precision. The proof is not simply “run the same computation with intervals.” It is designed so the errors stay small enough to close a fixed-point or contraction condition.

This is mathematical engineering.

It may be a natural habitat for agents.

Agents can search decompositions that tighten bounds. They can generate and test alternative bases. They can automate tedious constant propagation. They can identify which inequality dominates the enclosure and focus optimization there. They can produce independently checkable certificates rather than opaque final numbers.

Again, abundant search is useful because the verifier is exact.

The third requirement is reproducibility across methods.

If a potential Navier–Stokes singularity matters, do not let one codebase own it.

Compute the profile with a neural representation and a spectral method.

Use different precision libraries.

Implement the transformed PDE independently.

Vary the domain truncation.

Change the collocation scheme.

Perturb initialization.

Ask an external group to reproduce the candidate from the published equations without receiving the original weights.

Agreement does not prove existence. Disagreement is priceless.

The history of computational science contains too many cases where independent implementation exposed a sign error, normalization mismatch, boundary condition, or accidental regularization. A multi-agent system can imitate some independence internally, but true independence should eventually leave the lab.

The fourth requirement is theorem linkage.

What would the exact profile prove?

This question has to be answered before the proof machinery grows around it.

A beautiful self-similar solution of a transformed equation may correspond to initial data with infinite energy. It may violate the smoothness assumptions in the Clay statement. It may solve a related fluid equation rather than Navier–Stokes. It may require symmetry that is legitimate for constructing a counterexample—or symmetry that accidentally changes the problem. It may produce a singularity only backward in time. It may fail the divergence-free condition after transformation.

The system should maintain a formal implication map from profile theorem to Clay consequence.

If there is no path, the profile can still be important mathematics. It is not a Millennium solution.

This is where theorem proving belongs earlier than many numerical projects would naturally place it.

Formalize the *claim about the candidate* before formalizing the candidate’s existence proof.

For example: if there exists a smooth profile U satisfying equations A, boundary conditions B, spectral conditions C, and admissibility D, then one can construct smooth initial data for the original three-dimensional incompressible Navier–Stokes equations whose corresponding solution loses regularity at finite time T.

Prove that implication first if possible.

Now the computer-assisted project has a crisp target. Every numerical and analytic component exists to establish A through D.

This reduces the risk of spending a year rigorously proving the existence of an object that does not settle the intended theorem.

The same method works on the smoothness side.

Suppose computation suggests a new lower bound on dissipation associated with concentrated vorticity. One might formulate a rigorous theorem: if every smooth solution satisfies inequality Q with a universal constant, then a known continuation criterion remains bounded and global regularity follows.

Formalize the implication.

Then use numerical search to test Q adversarially before attempting the proof.

The computer can therefore sit on both sides of rigor.

Upstream, it discovers candidates and counterexamples.

Downstream, it certifies constants and checks formal proof objects.

The human temptation is to separate “numerical” and “pure” mathematics into different cultures. The Navier–Stokes problem may reward the group that refuses the separation.

A singularity, if it exists, is both a mathematical theorem and a dynamical object. Numerics can show its face before analysis can prove its name.

There is a historical precedent in other PDE and dynamical systems problems. Researchers have used high-precision computation to conjecture special solutions and computer-assisted methods to prove their existence. Javier Gómez-Serrano and collaborators have been among those advancing rigorous computation around fluid singularities. Tom Hou and collaborators have combined extreme-resolution numerics with analytic structure in the study of potential singular behavior. The 2025 machine-learning singularity work extends the toolkit rather than inventing the philosophy from nothing.

This matters because AI stories often erase the field that made the AI useful.

A neural network does not arrive in a vacuum and “discover physics.” Researchers choose the transformed equations, constraints, loss, optimization strategy, and interpretation. They know which residuals matter. They know which singularities are interesting. They know what would be required for a proof.

The AI contribution can still be substantial. It changes what search is affordable and which representations can be optimized.

But the path to rigor is a collaboration with decades of numerical analysis and PDE theory.

A future Anthropic effort should make that lineage visible because hiding it would make the science worse. Agents need the prior methods as tools. Human experts need provenance to know what they are trusting. The public needs to understand that a “machine-discovered singularity” is a composite achievement: formulation, computation, validation, analysis, formalization, and scrutiny.

The phrase *rigorous object* also raises a philosophical point.

A numerical approximation can be more informative to a human than the exact proof enclosing it.

Look at the profile and you see shape, concentration, symmetry, perhaps the mechanism. Read the interval inequalities and you see the legal contract guaranteeing the profile exists.

Both are knowledge.

The picture guides understanding.

The certificate closes doubt.

AI systems should preserve both rather than collapsing everything into a proof status badge.

If a Navier–Stokes singularity is eventually proved through computer assistance, the scientific story should include the visual and dynamical object that led us there. If global regularity is proved by an inequality discovered through numerical extremizer search, show the extremal flows that taught the machine what the inequality needed to control.

The machine proof should not erase the experiment that made the proof imaginable.

This is one of the reasons *Fluidity* is not a book about automated theorem proving alone.

The frontier is the handoff.

Language to code.

Code to computation.

Computation to conjecture.

Conjecture to inequality.

Inequality to certificate.

Certificate to formal theorem.

Formal theorem back to human understanding.

Every handoff can lose meaning.

Every handoff can also add a different kind of evidence.

A numerical ghost becomes a rigorous object not when we stop trusting the machine, but when we ask the machine to tell us exactly how much trust its numbers deserve.
