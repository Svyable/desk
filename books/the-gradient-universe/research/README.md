# Research Notes — The Gradient Universe

## Research question

The book now asks a narrower question than its first draft did:

> Can a driven system spend present free energy to construct or maintain a physical constraint that changes its later *viable reachable states*, and can the thermodynamic cost of that constraint be measured separately from the future capability it adds?

The proposed name is **recursive thermodynamic reachability**. The proposed measurable effect is **reachability leverage**.

This is a conjecture and research program, not an established law of nature.

The most important research discipline is therefore to separate what is already known from what the book is proposing.

## Three levels of confidence

### 1. Established or mature science

The book relies on established thermodynamics, statistical mechanics, fluid mechanics, chemistry, physiology, evolutionary biology, control theory, and climate science for ordinary claims within those fields.

Examples include:

- conservation of energy and second-law constraints;
- equilibrium free energies and chemical potentials;
- exergy/available-work reasoning;
- transport driven by temperature, pressure, electrical, concentration, redox, and chemical-potential differences under specified mechanisms;
- dissipative structures and nonlinear instabilities in specified systems;
- chemiosmotic coupling and cellular ion gradients;
- natural selection as differential reproductive success among heritable variants;
- control-theoretic reachability and viability kernels;
- minimum-energy control, energetic resilience, and architecture/control co-design in engineered systems;
- energetic and thermodynamic costs of control in specified biological models.

None of these should be advertised as discoveries of this book.

### 2. Productive but non-universal principles

The book discusses maximum entropy production, maximum power, constructal approaches, dissipative adaptation, and related ideas because they attempt to explain which far-from-equilibrium states are selected.

Their status is deliberately below the first category.

The manuscript treats them as domain-dependent hypotheses, closures, heuristics, or research programs unless a stronger theorem applies under clearly stated assumptions.

Failure of one of these principles does not threaten the second law.

### 3. The book's conjecture

The candidate contribution is not that control costs energy, that future options matter, that viability has a geometry, that organisms construct constraints, that loss of control authority raises reachability cost, that engineered architectures trade cost against controllability, or that dormancy preserves latent capacity. All of those have prior art.

The narrow conjecture left to test is:

> In a driven chemical or living system, a constraint constructed or maintained by the system itself can be assigned a physical cost and a separately predicted causal effect on the system's robust viable reachable set. Under a predeclared disturbance process, selection can favor that endogenous constraint when the future viability/reachability it adds outweighs its energetic and material cost, even when the constraint lowers instantaneous power or entropy production.

The term **reachability leverage** refers only to that causal gain attributable to the specified constraint under a specified budget, horizon, and disturbance model.

## Novelty discipline

Before calling the conjecture original, read [reachability-prior-art.md](reachability-prior-art.md).

That note records the closest known work and the claims the book must not make.

Particularly close prior art includes:

- control-theoretic reachable sets and viability kernels;
- reachable-set methods in stochastic biochemical systems;
- minimum-energy reachability and energetic resilience under lost control authority;
- control/architecture co-design in engineered systems;
- biological organization as closure of constraints;
- semantic information defined through contribution to viability;
- non-equilibrium capacity in living systems and dormancy;
- counterfactual geometry of unrealized accessible biological futures;
- thermodynamic cost–controllability trade-offs in metabolic currency coupling;
- viability-geometric accounts of persistence under perturbation.

The conjecture earns novelty only if the *full causal loop* adds something these literatures do not already predict:

1. a measured nonequilibrium resource is consumed;
2. part of it is invested in a specific self-produced physical constraint;
3. that constraint changes later accessible transitions;
4. the change is predicted before the future disturbance occurs;
5. the constraint's cost and reachability gain jointly predict when it is retained, selected, or beneficial;
6. simpler power, growth, resilience, control-energy, viability, or standard co-design models do not explain the same threshold as well.

If that test is not met, the honest description is **interdisciplinary synthesis**, not breakthrough.

## Core research notes

- [Recursive thermodynamic reachability](recursive-thermodynamic-reachability.md) — formal object, candidate mechanisms, predictions, falsification conditions, and mathematical work still required.
- [Closest prior art](reachability-prior-art.md) — novelty guardrails and the paper-shaped experiment that would most strongly test the proposal.
- [Source ledger](source-ledger.csv) — claim-to-source audit trail.

## Formal objects

Let the system state be \(x\), environment \(e\), admissible action or control \(u\), and physically instantiated constraint architecture \(c\):

\[
\dot{x}=f(x,e,u;c).
\]

A model must specify in advance:

- a state representation;
- a viability set \(K\);
- a physical resource/work budget \(B\);
- a time horizon \(\tau\);
- admissible controls/actions;
- a disturbance family or probability model;
- the physical cost of constructing and maintaining \(c\).

A thermodynamically budgeted viable reachable set is the set of states or targets accessible within those conditions while respecting the viability constraints.

The safest initial comparison is set-valued or target-specific. A scalar “volume of options” is not automatically meaningful because it can depend on coordinates, coarse-graining, and an arbitrary measure.

## Candidate mechanisms

The conjecture is motivated by systems that spend present work to change later transition structure:

- membranes that suppress uncontrolled diffusion;
- pumps that use one chemical gradient to build another;
- regulatory networks that make different metabolic regimes independently accessible;
- storage that preserves resources across interruptions;
- repair that prevents later loss of operating states;
- dormancy that preserves reactivation capability with very low present throughput;
- physical memory that changes later control cost or target accessibility;
- redundant or reserve capacity that preserves operation under component failure.

These examples are not evidence of one universal law. Each must be modeled and tested on its own terms.

## Strongest first experiment

A useful first paper should avoid brains, civilizations, and grand universal claims.

Choose an engineered microbial system or driven synthetic chemical network where an added regulatory or structural constraint has a measurable cost.

Before experiment:

1. define the system boundary;
2. define the physical resource budget;
3. define the viable state set;
4. define the disturbance distribution;
5. calculate the robust reachable sets of competing architectures;
6. calculate the energetic/material cost of the added constraint;
7. predict a parameter threshold at which its reachability gain should outweigh its cost.

Then test whether persistence, recovery, or reproductive success changes near the predicted threshold.

The highest-value version would use a system where ordinary growth rate, instantaneous power, current entropy production, energy inventory, standard resilience, minimum control energy, and standard viability/co-design metrics make distinguishable predictions.

## Falsification rules

The conjecture is not allowed the following escape hatches:

- no post hoc state variables;
- no post hoc viability boundary;
- no hidden-gradient rescue without independent measurement;
- no changing the time horizon after seeing which architecture wins;
- no ignoring construction or maintenance cost;
- no calling an informational, social, or semantic difference a thermodynamic gradient without a physical definition;
- no appealing to the second law when the stronger conjecture fails;
- no claiming novelty when a standard control, viability, resilience, energetic-resilience, co-design, or biological model already predicts the result equally well.

A framework that cannot lose is not ready for publication as science.

## Book-level boundaries

The book should keep these distinctions explicit:

- thermodynamic free energy is not Friston's variational free energy;
- physical information processing cost is not semantic meaning;
- thermodynamic dependence is not thermodynamic explanation;
- natural selection is not entropy-production maximization;
- active maintenance is different from passive persistent structure;
- stronger gradients do not generically imply greater complexity;
- a higher dissipation rate does not generically imply greater fitness, resilience, intelligence, or value;
- social and ethical claims require premises that thermodynamics does not supply.

## Publication standard

There are two potentially publishable outputs here, and they should not be confused.

**A trade/science book** can be worth publishing if it offers an unusually clear synthesis of gradients, constraints, non-equilibrium systems, control, and the limits of thermodynamic explanation, even if the conjecture remains unproven.

**A scientific paper** requires more. The reachability conjecture needs a mathematical formulation and at least one result that makes a risky quantitative prediction not already supplied by the closest prior art.

Until then the manuscript should say “conjecture,” “candidate mechanism,” or “research program,” never “law,” “discovery,” or “proved principle.”
