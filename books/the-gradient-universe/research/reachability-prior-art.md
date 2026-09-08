# Closest Prior Art for the Reachability Conjecture

This note exists to prevent the manuscript from claiming novelty that belongs to existing work.

## Claims the book must NOT make

The book must not claim to have invented:

- reachable sets or viability kernels;
- the idea that control has energetic or thermodynamic costs;
- energetic resilience as the extra control energy required after loss of control authority;
- architecture/controller co-design that trades hardware or architecture cost against controllability and performance;
- the idea that living systems preserve latent capacity during dormancy;
- the idea that biological organization depends on self-maintained constraints;
- the idea that information can be evaluated by its contribution to viability;
- the idea that adaptive systems can be studied through distributions or geometries of unrealized future trajectories;
- viability-geometric accounts of persistence under perturbation;
- the general idea that future-option structure matters for agency, resilience, or biological function.

Each of those already has relevant prior art.

## Very close prior art

### Life as Counterfactual Geometry — 2026

A 2026 paper titled **“Life as Counterfactual Geometry: An Adversarial Theory of Biological Function”** explicitly treats biological function through the geometry and stability of distributions over unrealized but accessible future trajectories. It develops a counterfactual manifold over future paths and discusses resource-gated boundedness.

Primary link: https://doi.org/10.3390/e28030255

This is close enough that the book must not present “future geometry,” “counterfactual futures,” or “accessible future trajectories” as a novel contribution by themselves.

The candidate distinction left open for this book is narrower: **thermodynamically budgeted reachability leverage attributable to a specific endogenously constructed constraint**, including explicit accounting for the work required to build and maintain that constraint.

### Non-equilibrium capacity — Youk

Hyun Youk proposes **non-equilibrium capacity (NEC)** as the retained ability of a living system to generate, sustain, or restart life-associated dynamics, including from dormant states.

Primary link: https://doi.org/10.1016/j.newton.2025.100358

The book must not claim to have discovered the idea that a dormant system can retain latent nonequilibrium capability despite low present activity.

A legitimate extension would be to ask whether NEC can be operationalized with thermodynamically constrained reachability or viability methods, and whether that operationalization predicts reactivation or failure before outcome labels are known.

### Thermodynamic cost–controllability trade-off — 2026

Jumpei F. Yamagishi and Tetsuhiro S. Hatakeyama published **“Thermodynamic Cost-Controllability Tradeoff in Metabolic Currency Coupling”** in PRX Life on 3 September 2026.

Primary link: https://doi.org/10.1103/4bqh-zhry

The paper shows that greater independent controllability of coupled metabolic currencies can require higher thermodynamic cost.

The book therefore must not claim to have discovered the general idea that controllability costs dissipation.

A distinct test would couple a known control cost to a calculated **robust viable reachable-set gain** under a specified environmental disturbance process, then test whether that gain predicts when the cost becomes adaptive.

### Energetic resilience under loss of control authority — 2026

Ram Padmanabhan and Melkior Ornik published **“Approximate energetic resilience of nonlinear systems under partial loss of control authority”** in *Automatica* in 2026.

Primary link: https://doi.org/10.1016/j.automatica.2026.112898

The paper quantifies the extra control energy required for nonlinear systems to achieve reachability objectives after partial actuator/control-authority loss. This is very close to any claim that “loss of reachability has an energetic cost.”

The book must therefore not market energy-versus-reachability accounting as a new control-theoretic idea.

The candidate distinction is again narrower and biological/nonequilibrium: **the system itself spends work to create or maintain a constraint that changes its later viable reachable set**, and the experiment asks whether that endogenous investment is favored under specified environmental variation.

### Control and architecture co-design

Control engineering already contains a substantial literature on selecting sensors, actuators, communication links, plant parameters, and controller structure while trading architecture cost against achievable performance, controllability, robustness, energy use, or feasibility. This includes contemporary mixed-integer controller/architecture co-design as well as decades of actuator-placement and control-effort work.

The book must not claim that paying for architecture to gain control authority is new in engineered systems.

The potentially distinct scientific question is whether an analogous **endogenous constraint-investment relation** can be defined and tested in driven chemical or living systems without importing an engineer's externally specified objective after the fact.

### Viability geometry and persistence — 2026

Recent work also develops viability-geometric frameworks for adaptive or persistent systems, explicitly using reachable perturbations, collapse boundaries, and stabilization mechanisms.

The book must therefore avoid presenting “persistence as geometry of viable states” as unique.

Its remaining target is the thermodynamic price and causal contribution of a *particular self-produced physical constraint* to that geometry.

### Semantic information, autonomous agency, and viability

Kolchinsky and Wolpert connect information, autonomous agency, and a specified viability function within nonequilibrium statistical physics.

Primary link: https://doi.org/10.1098/rsfs.2018.0041

The book must not claim to be the first to connect information to physical viability.

A distinct extension would measure whether a physical memory or informational constraint changes the thermodynamically budgeted set of viable future states or the cost of reaching them.

### Biological organization as closure of constraints

Montévil and Mossio formalize biological organization as a closure of constraints: processes maintain constraints that in turn act on other processes.

Primary link: https://doi.org/10.1016/j.jtbi.2015.02.029

Lehman and Kauffman connect constraint closure to major transitions in origins-of-life scenarios.

Primary link: https://doi.org/10.3390/e23010105

The book must not claim that self-maintained constraints are a new idea.

The proposed extension is to quantify what a given constraint changes in the later control problem: **what future states, disturbances, or targets become physically reachable because work was invested in that constraint?**

### Reachability in biochemical systems

Lakatos and Stumpf apply control-theoretic reachable-set methods to stochastic biochemical systems under uncertainty.

Primary link: https://doi.org/10.1098/rsos.160790

The book must not claim that reachable sets are new to systems biology.

The proposed extension is to integrate physical work/exergy budgets, endogenous constraint construction, robust viability, and selection-relevant perturbation distributions in one experiment.

## Broader foundations

### Macroscopic stochastic thermodynamics

Falasco and Esposito review the emergence of macroscopic thermodynamics from stochastic descriptions and provide a modern foundation for nonequilibrium work, currents, fluctuations, and entropy production.

Primary link: https://doi.org/10.1103/RevModPhys.97.015002

### Active matter dissipation across scales

Bebon, Robinson, and Speck provide a thermodynamically consistent treatment of dissipation across scales in active matter.

Primary link: https://doi.org/10.1103/PhysRevX.15.021050

This is a natural domain for separating instantaneous dissipation from the repertoire of robust collective states.

### Principles of emergent organization

A 2024 Physics Reports review emphasizes that physics still lacks basic general principles of spontaneous self-organization and that defining structure itself remains difficult.

Primary link: https://doi.org/10.1016/j.physrep.2024.04.001

This sets the appropriate ambition: a proposed principle should solve a precisely stated subproblem rather than declare a universal fourth law.

## Narrow novelty boundary worth testing

After accounting for the work above, the strongest candidate claim left for *The Gradient Universe* is:

> In a driven chemical or living system, a physically instantiated constraint that is constructed or maintained by the system itself can be assigned a thermodynamic cost and a separately predicted causal effect on the system's robust viable reachable set. Under a predeclared disturbance process, selection can favor that endogenous constraint when the future viability/reachability it adds outweighs its energetic and material cost, even when the constraint lowers instantaneous power or entropy production.

Even this should be described as a **candidate synthesis and testable conjecture** until a more exhaustive literature review, mathematical derivation, and experiment establish that the formulation is genuinely new and useful.

The novelty cannot be “energy affects control,” “architecture affects reachability,” “future options matter,” or “viability has a geometry.” All of those are occupied territory.

The novelty, if any, has to come from the full causal loop:

1. the system consumes a measured nonequilibrium resource;
2. part of that resource is invested in a specific physical constraint;
3. the constraint changes later accessible transitions;
4. the resulting reachability change is predicted before the future disturbance occurs;
5. the constraint's cost and reachability gain jointly predict when it is retained, selected, or beneficial;
6. competing power, growth, resilience, and standard control models fail to explain the same threshold as well.

If any one of those pieces is missing, the claim becomes much closer to existing work.

## Strongest possible paper-shaped experiment

A high-value first paper would not attempt to prove a universal law.

It would choose a system where control cost is measurable, such as a synthetic chemical network or engineered microbial regulatory architecture.

Before experiment:

1. define the system boundary;
2. define the physical resource budget;
3. define the viable state set;
4. define the disturbance distribution;
5. calculate the robust reachable sets of competing architectures;
6. calculate the energetic cost of the added constraint/control architecture;
7. predict a parameter threshold at which the reachability gain should outweigh the cost.

Then test whether persistence, recovery, or fitness changes near the predicted threshold.

If a simpler model based on power, growth rate, energy inventory, ordinary robustness, control energy, or standard co-design metrics predicts the result equally well, the reachability formulation has not earned novelty.

That is the standard the book should set for itself.