# Research Notes — The Gradient Universe

## Research question

The book now asks a narrower question than its first draft did:

> Can a driven system spend present free energy to construct or maintain a physical constraint that changes its later *viable reachable states*, and can the physical cost of that constraint be measured separately from the future capability it adds?

The working umbrella name remains **recursive thermodynamic reachability**.

The first-principles pass makes one correction to the earlier wording: there is no justified universal scalar called “future options per joule.” Work has physical units; a reachable set is set-valued; a survival probability is dimensionless; reproductive success introduces another mapping. Until a particular system supplies that mapping, the primitive object should be a **cost–capability Pareto relation**, not a universal quotient.

The more precise measurable object is therefore **constraint-selective viable reachability**: the causal change in budget-admissible viable transitions, recovery targets, or survivable disturbances attributable to a specified physical constraint after its construction, maintenance, and use are charged to the comparison.

This is a conjecture and research program, not an established law of nature.

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
- geometric-mean fitness and bet hedging in fluctuating environments;
- minimum-energy control, energetic resilience, and architecture/control co-design in engineered systems;
- energetic and thermodynamic costs of control in specified biological models.

None of these should be advertised as discoveries of this book.

### 2. Productive but non-universal principles

The book discusses maximum entropy production, maximum power, constructal approaches, dissipative adaptation, and related ideas because they attempt to explain which far-from-equilibrium states are selected.

Their status is deliberately below the first category.

The manuscript treats them as domain-dependent hypotheses, closures, heuristics, or research programs unless a stronger theorem applies under clearly stated assumptions.

Failure of one of these principles does not threaten the second law.

### 3. The book's conjecture

The candidate contribution is not that control costs energy, that future options matter, that viability has a geometry, that organisms construct constraints, that loss of control authority raises reachability cost, that engineered architectures trade cost against controllability, that bet hedging can beat fast growth in variable environments, or that dormancy preserves latent capacity. All of those have prior art.

The narrow conjecture left to test is:

> In a driven chemical or living system, a constraint constructed or maintained by the system itself can be assigned a physical cost and a separately predicted causal effect on later viable control/recovery. Under a predeclared disturbance process, that physical prediction can identify when the constraint becomes worth carrying despite lower instantaneous growth, power, or dissipation.

A stronger version would require the reachability model to predict a recovery or selection boundary **better than simpler established alternatives**.

## The first-principles correction: viability may require fewer options

The old intuition “more future states are better” does not survive contact with gates.

A membrane excludes. A checkpoint stops a cycle. An inhibitory neuron suppresses action. A repair pathway can remove damaged states from the future repertoire. Development closes possible cell fates. A safety interlock deliberately makes some physical trajectories unreachable.

A successful constraint can therefore **shrink raw reachability while improving viable reachability**.

The relevant question is not:

> How many futures are possible?

It is:

> Which declared disturbances or targets remain viably reachable within the physical budget, and how did the constraint change that set?

This is why the core formal object is set-valued or target-specific rather than a universal state-space volume.

## Formal package

The research package now includes four distinct layers.

- [Appendix A — Constraint-Selective Reachability](../manuscript/appendix-a-constraint-selective-reachability.md) — book-readable derivation, dimensional analysis, limiting cases, and the minimal fluctuating-environment proposition.
- [LaTeX formalization](constraint-selective-reachability.tex) — definitions, proposition, proof, limiting cases, and falsification requirement.
- [Hierarchical proof audit](lamport-proof-reachability.md) — a Lamport-style assumption/proof tree designed to expose hidden premises.
- [Standard-library validation model](reachability_threshold.py) — reproducible Monte Carlo sanity check of the toy threshold without third-party packages.
- [Validation record](reachability-threshold-validation.md) — numerical results and an explicit statement of what the simulation does **not** validate.
- [Experimental protocol](reachability-experiment-protocol.md) — a preregisterable path from physical architecture to competition outcome.
- [Scientific figure specifications](reachability-diagrams.md) — six diagrams designed to preserve the distinction among measured quantities, model-derived reachable sets, and selection outcomes.

The older synthesis notes remain useful:

- [Recursive thermodynamic reachability](recursive-thermodynamic-reachability.md) — candidate mechanisms and broader implications.
- [Closest prior art](reachability-prior-art.md) — novelty guardrails and claims the book must not make.
- [Source ledger](source-ledger.csv) — claim-to-source audit trail.

## Minimal formal objects

Let system state be \(x\), environment \(e\), admissible action or control \(u\), and physically instantiated constraint architecture \(c\):

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

For a disturbance family \(D\), define the survivable disturbance set

\[
S_\tau(c,B)=\left\{d\in D:\exists u\text{ such that the trajectory remains viable and respects }B\right\}.
\]

If \(\mu\) is a predeclared probability distribution over disturbances, then

\[
s(c)=\mu(S_\tau(c,B))
\]

is the probability that a disturbance falls inside the architecture's budget-admissible viable response set under that model.

The measure \(\mu\) is part of the environment description. Change the environment and the capability value can change.

That is expected, not embarrassing.

## The theorem-shaped toy result

Consider two heritable architectures with equal pre-cost benign log-growth rate \(r\).

Architecture 1 pays a continuous growth cost \(c>0\).

Hazards arrive as a Poisson process of rate \(\lambda\).

At each hazard, the two lineages retain fractions \(s_0\) and \(s_1\), with \(s_1>s_0\).

Then the almost-sure asymptotic log-growth rates are

\[
g_0=r+\lambda\ln s_0,
\]

\[
g_1=r-c+\lambda\ln s_1.
\]

The costly architecture wins only when

\[
\lambda>\lambda^*=\frac{c}{\ln(s_1/s_0)}.
\]

The dimensional check is clean: \(c\) and \(\lambda\) both have units of inverse time and the logarithm is dimensionless.

This threshold is **not** claimed as novel. It is a transparent geometric-mean-fitness consequence under explicit assumptions.

The research opportunity is to predict \(s_0\) and \(s_1\) from a thermodynamically budgeted control/reachability model before measuring which lineage wins.

## Computational sanity check

The default toy model assigns exponentially distributed disturbance severity, recovery thresholds \(h_0=0.3\) and \(h_1=1.2\), and continuous cost \(c=0.05\).

That gives

\[
s_0\approx0.25918,
\qquad
s_1\approx0.69881,
\]

and

\[
\lambda^*\approx0.050411.
\]

The committed standard-library Monte Carlo model reproduces the sign change in mean log-growth advantage at that boundary within sampling tolerance.

That validates the derivation and implementation only.

A simulation of assumptions is not evidence that nature satisfies them.

## Novelty discipline

Before calling the conjecture original, read [reachability-prior-art.md](reachability-prior-art.md).

Particularly close prior art includes:

- Aubin's viability theory;
- reachable-set methods in stochastic biochemical systems;
- geometric-mean fitness and microbial bet hedging;
- minimum-energy reachability and energetic resilience under lost control authority;
- optimal control of stochastic reaction networks with control costs;
- control/architecture co-design in engineered systems;
- biological organization as closure of constraints;
- semantic information defined through contribution to viability;
- non-equilibrium capacity in living systems and dormancy;
- counterfactual geometry of unrealized accessible biological futures;
- thermodynamic cost–controllability trade-offs in metabolic currency coupling.

The conjecture earns novelty only if the *full causal loop* adds something these literatures do not already predict:

1. a measured nonequilibrium resource is consumed;
2. part of it is invested in a specific self-produced physical constraint;
3. that constraint changes later admissible transitions;
4. the change in viable recovery is predicted before the disturbance/competition outcome;
5. independent cost and reachability measurements imply a quantitative environmental boundary;
6. the predicted boundary survives ablation and matched-resource controls;
7. simpler established models do not predict the same result as well with fewer assumptions.

If that test is not met, the honest description is **interdisciplinary synthesis**, not breakthrough.

## Strongest first experiment

A useful first paper should avoid brains, civilizations, and grand universal claims.

Choose an engineered microbial system or driven synthetic chemical network where an added regulatory or structural constraint has a measurable cost.

Before competition:

1. define the system boundary;
2. define the physical resource budget;
3. define the viable state set;
4. define the disturbance distribution;
5. calculate the viable recovery sets of competing architectures;
6. calculate the energetic/material cost of the added constraint;
7. predict a switching-rate or hazard-rate boundary from those measurements.

Then test whether persistence or reproductive success changes near the predicted boundary.

The highest-value version includes two controls:

- **ablation:** remove the constraint and show that the predicted recovery repertoire contracts;
- **matched extra resource:** give the cheap architecture the energy/material quantity spent by the costly architecture without giving it the architecture itself.

If extra resource alone reproduces the effect, architecture-specific reachability was unnecessary.

## Falsification rules

The conjecture is not allowed the following escape hatches:

- no post hoc state variables;
- no post hoc viability boundary;
- no hidden-gradient rescue without independent measurement;
- no changing the time horizon after seeing which architecture wins;
- no ignoring construction, maintenance, activation, or opportunity cost;
- no raw state-space volume presented as biological value without an invariant reason;
- no calling an informational, social, or semantic difference a thermodynamic gradient without a physical definition;
- no appealing to the second law when the stronger conjecture fails;
- no claiming novelty when a standard control, viability, resilience, bet-hedging, energetic-resilience, co-design, or biological model already predicts the result equally well.

A framework that cannot lose is not ready for publication as science.

## Book-level boundaries

The book should keep these distinctions explicit:

- thermodynamic free energy is not Friston's variational free energy;
- physical information-processing cost is not semantic meaning;
- thermodynamic dependence is not thermodynamic explanation;
- natural selection is not entropy-production maximization;
- active maintenance is different from passive persistent structure;
- stronger gradients do not generically imply greater complexity;
- more raw reachability does not generically imply greater viability;
- a higher dissipation rate does not generically imply greater fitness, resilience, intelligence, or value;
- social and ethical claims require premises that thermodynamics does not supply.

## Publication standard

There are two potentially publishable outputs here, and they should not be confused.

**A trade/science book** can be worth publishing if it offers an unusually clear synthesis of gradients, constraints, non-equilibrium systems, control, and the limits of thermodynamic explanation, even if the conjecture remains unproven.

**A scientific paper** requires more. The reachability conjecture needs one mechanistic model and at least one risky quantitative prediction not already supplied by the closest prior art.

Until then the manuscript should say “conjecture,” “candidate mechanism,” or “research program,” never “law,” “discovery,” or “proved principle.”
