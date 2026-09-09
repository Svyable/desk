# Coarse-Graining Prior Art — Where the Remaining Novelty Ends

Appendix C reduces dynamic architecture to ordinary augmented-state dynamics. That leaves a tempting fallback claim: perhaps the book's novelty is a new principle for choosing the right coarse-grained constraint variables.

This note exists to prevent that claim from becoming inflated too.

There are already mature and active literatures on selecting predictive macrostates, deriving reduced dynamics, identifying causal macroscales, inferring thermodynamics from partial observations, and defining statistical boundaries of autonomous systems.

The book should not imply that it invented any of those goals.

## Mori–Zwanzig and projection-based reduction

The Mori–Zwanzig projection-operator formalism is a major framework for deriving reduced dynamics of selected variables from higher-dimensional dynamics. Eliminated variables generally reappear as memory and fluctuating terms in a generalized Langevin description.

One modern discussion of the formalism and its relation to irreversible macrodynamics is:

https://arxiv.org/abs/2112.04067

A 2023 study of linear and nonlinear dynamic coarse-graining using Mori–Zwanzig methods illustrates how the choice of projection affects whether reduced dynamics preserve important observables:

https://arxiv.org/abs/2307.08143

A very recent September 2026 preprint generalizes projection-based coarse-graining for far-from-equilibrium systems using oblique projectors and explicitly targets active/living-matter-like settings:

https://arxiv.org/abs/2609.05217

The last item is a preprint and should be labeled as such.

**Novelty guardrail:** the book must not claim that separating a small set of relevant variables from hidden microscopic degrees of freedom, or deriving effective dynamics for those variables, is new.

## Computational mechanics and causal states

Computational mechanics provides an especially strong prior-art challenge to loose claims about “the best variables for predicting the future.”

Crutchfield and Shalizi showed that causal states provide minimal predictive representations of stochastic processes. Their 1999 paper also criticized thermodynamic-depth constructions partly because arbitrary macrostate choices make structural measures unstable:

https://doi.org/10.1103/PhysRevE.59.275

The broader computational-mechanics framework treats causal states as minimal sufficient statistics of the past for predicting the future.

**Novelty guardrail:** the book must not claim to have invented the idea that a reduced state description should preserve future-predictive information with minimal complexity.

A constraint-oriented model would have to add something physically different from generic predictive sufficiency—for example an independently measured energetic/material cost tied to maintaining the candidate architecture and an intervention on that architecture that moves a recovery boundary.

## Causal emergence and macro-level causal models

Erik Hoel and collaborators have developed the idea of **causal emergence**: in some systems a macro-level model can have stronger or clearer causal informativeness than a maximally detailed micro-level description under their chosen information-theoretic measures.

A representative paper/preprint is:

https://arxiv.org/abs/1612.09592

This literature directly challenges any claim that the book discovered the possibility that a coarse-grained causal model can outperform a detailed microscopic one.

**Novelty guardrail:** “the macro description can be more useful or causal than the micro description” is occupied territory.

## Markov blankets, autonomy, and boundaries

Markov-blanket approaches explicitly study statistical boundaries between internal and external states, including nested and self-sustaining boundaries in biological systems.

Kirchhoff, Parr, Palacios, Friston, and Kiverstein discuss autonomous organization and nested Markov blankets:

https://doi.org/10.1098/rsif.2017.0792

A critical review of the scope of Markov-blanket/free-energy-principle arguments is:

https://doi.org/10.1016/j.plrev.2021.09.001

The book already separates Friston's variational free energy from thermodynamic free energy. This coarse-graining pass adds another boundary: a physical membrane used as a constraint variable is not automatically the same object as a statistical Markov blanket.

**Novelty guardrail:** statistical boundary identification and multi-scale autonomy are not new contributions of this book.

## Coarse-grained stochastic thermodynamics

Stochastic thermodynamics has an extensive literature on hidden degrees of freedom, coarse-grained trajectories, and lower bounds on dissipation inferred from partial observations.

Seifert's 2019 thermodynamic-inference review is a central reference:

https://doi.org/10.1146/annurev-conmatphys-031218-013554

A 2026 *Nature Reviews Physics* article by Udo Seifert reviews universal bounds on entropy production from fluctuating coarse-grained trajectories and emphasizes the practical problem that experiments often observe only mesoscopic variables:

https://doi.org/10.1038/s42254-026-00954-5

**Novelty guardrail:** attaching thermodynamic inference to coarse-grained observables is already a developed research program.

## Information trimming and sufficient statistics

Information-theoretic work also studies how high-dimensional variables can be replaced by lower-dimensional sufficient statistics without losing relevant mutual information.

One example is:

https://doi.org/10.1103/PhysRevE.95.060102

Again, predictive compression is not an unoccupied idea.

## What is left after this reduction?

Very little theoretical novelty should be claimed without a concrete result.

The remaining candidate is not:

- a new method for coarse-graining;
- a new theory of minimal predictive states;
- a new theory of macroscopic causation;
- a new notion of autonomous statistical boundaries;
- a new way to infer thermodynamic quantities from partial observations.

The strongest surviving experimental proposition is narrower:

> In a specified driven chemical or biological system, a physically interpretable architecture variable or small architecture-variable set can have an independently measured construction/maintenance cost and a causal intervention effect on recovery. A reduced model that includes those variables can predict held-out recovery boundaries under matched physical budgets, and the effect cannot be reproduced by extra resource alone or by the strongest conventional baseline model.

This is best understood as a **domain-specific causal modeling result** if it succeeds.

It may still be scientifically important. Many important papers discover the right reduced variable or reaction coordinate for a difficult system rather than a new universal law.

But the standard is now empirical.

## Stronger constraint-variable criteria after coarse-graining review

The earlier criteria should be tightened.

A candidate constraint variable should not be selected merely because it is slow. Slow variables are a classic route to model reduction and are not always the causal architecture of interest.

A stronger candidate should have four properties simultaneously:

1. **persistent transition modulation:** changing the variable changes multiple downstream transition rates, admissible paths, or effective disturbances over the prediction horizon;
2. **independent physical maintenance cost:** keeping the variable in its functional regime consumes measurable material/work or imposes a separately measured opportunity cost;
3. **intervention-stable causal effect:** direct perturbation of the variable moves a held-out recovery boundary after resource inventory and obvious confounders are matched;
4. **reduced-model value:** representing the variable as architecture adds held-out prediction, transfer, identifiability, or compression beyond established coarse-graining and domain models.

The phrase **work-maintained constraint** should therefore be treated as a hypothesized causal role, not a primitive category of matter.

## Strongest novelty kill condition

If, in the first real dataset, an automatically learned predictive state representation, a standard reaction-coordinate method, a conventional physiological model, or a generic robust-control/viability model predicts recovery as well as the hand-selected constraint variables—and the hand-selected variables add no intervention advantage—then the remaining scientific novelty claim should be abandoned.

The book can still be valuable.

It would then be a synthesis showing how thermodynamics, cybernetics, control, information theory, and biology meet around the problem of constrained recovery.

That is enough for a book.

It is not enough for a new scientific principle.