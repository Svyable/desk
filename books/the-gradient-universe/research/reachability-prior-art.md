# Closest Prior Art for the Reachability Conjecture

This note exists to prevent the manuscript from claiming novelty that belongs to existing work.

## Claims the book must NOT make

The book must not claim to have invented:

- reachable sets, viability kernels, or energy-feasible reachability;
- state augmentation for dynamics whose architecture changes through time;
- the idea that control has energetic or thermodynamic costs;
- energetic resilience as extra control energy after loss of control authority;
- architecture/controller co-design;
- Ashby's requisite variety or the Good Regulator tradition;
- information-theoretic future control or empowerment;
- thermodynamics of measurement, feedback, memory, and information flow;
- the idea that living systems preserve latent capacity during dormancy;
- biological organization as self-maintained or closed constraints;
- semantic information evaluated through viability;
- distributions or geometries of unrealized accessible future trajectories;
- costly microbial preparedness, bet hedging, growth–lag trade-offs, or anticipatory regulation;
- thermodynamic cost–controllability trade-offs in metabolic currencies;
- the general idea that future control structure matters for resilience, agency, or biological function.

Each has substantial prior art.

## The first-principles novelty reduction

Suppose

\[
\dot{x}=f(x,e,u;c),
\qquad
\dot c=g(x,e,u;c).
\]

Defining the enlarged state \(z=(x,c)\) gives an ordinary dynamical system

\[
\dot z=F(z,e,u).
\]

So a system changing its own architecture does not by itself require a new reachability formalism. Standard reachability, viability, stochastic control, and physical cost functionals can be applied to the enlarged state when the model is tractable.

This eliminates any novelty claim based merely on the word *recursive*.

The remaining scientific possibility is a **coarse-graining claim**: selected slower or persistent, work-maintained variables may form a compact “constraint architecture” whose interventions causally reshape faster transition/recovery dynamics and whose independently measured costs help predict held-out recovery across disturbances.

That decomposition earns value only through prediction, compression, transfer, and intervention.

## Very close prior art

### Viability and reachability

Jean-Pierre Aubin's viability theory formalizes states from which controls can keep a system inside prescribed constraints.

Primary review: https://doi.org/10.1137/0328044

Lakatos and Stumpf apply reachable-set computation to stochastic biochemical systems:

https://doi.org/10.1098/rsos.160790

Control theory also studies minimum-energy and energy-feasible reachability. Any phrase such as “reachable states under an energy budget” is therefore established territory.

### Energetic resilience under loss of control authority

Padmanabhan and Ornik quantify additional control energy needed after partial loss of control authority:

https://doi.org/10.1016/j.automatica.2026.112898

The book must not market energy-versus-reachability accounting as new.

### Ashby and the cybernetic control problem

W. Ross Ashby's *An Introduction to Cybernetics* develops the law of requisite variety: effective regulation is constrained by the variety of disturbances and responses.

Archival source: https://doi.org/10.5962/bhl.title.5851

Conant and Ashby's Good Regulator theorem is another direct ancestor:

https://doi.org/10.1080/00207727008920220

The book must not claim to have discovered that a regulator requires an adequate response repertoire or internal model structure.

### Empowerment

Klyubin, Polani, and Nehaniv introduced empowerment as an information-theoretic channel-capacity measure of potential action-to-future-sensation control:

https://doi.org/10.1109/CEC.2005.1554676

“Future options,” “future control,” and “influence over possible outcomes” are not new concepts merely because the book arrives at them from thermodynamics.

### Information thermodynamics and sensory memory

Sagawa and Ueda and later information-thermodynamics work formalize measurement and feedback costs and bounds:

- https://doi.org/10.1103/PhysRevLett.104.090602
- https://doi.org/10.1103/PhysRevE.85.021104
- https://doi.org/10.1103/PhysRevX.4.031015

Sensory-capacity work explicitly analyzes memory, information, and thermodynamic efficiency in cellular sensing:

https://pubmed.ncbi.nlm.nih.gov/26986297/

The book cannot claim that physical memory or feedback becomes valuable only because it changes future control; that territory is already developed.

### Life as Counterfactual Geometry — 2026

**“Life as Counterfactual Geometry: An Adversarial Theory of Biological Function”** explicitly treats function through distributions and geometry of unrealized accessible future trajectories:

https://doi.org/10.3390/e28030255

Future geometry by itself is therefore unavailable as a novelty claim.

### Non-equilibrium capacity

Hyun Youk proposes non-equilibrium capacity as retained ability to generate, sustain, or restart life-associated dynamics, including dormancy:

https://doi.org/10.1016/j.newton.2025.100358

The book must not claim to discover latent capacity in low-throughput living states.

### Dormancy depth and resuscitation physiology

Mechanistic work already links ATP, dynamic protein aggregation, chaperone-mediated disaggregation, and dormancy depth to bacterial resuscitation:

https://doi.org/10.1016/j.molcel.2018.10.022

Additional VBNC work links ATP and metabolic pathways to resuscitation:

- https://doi.org/10.1016/j.jare.2023.08.002
- https://doi.org/10.1128/jb.00208-24

A reachability treatment of dormancy is scientifically interesting only if it predicts recovery earlier, more compactly, or more transferably than these established physiological variables.

### Thermodynamic cost–controllability trade-off — 2026

Yamagishi and Hatakeyama's PRX Life paper derives a thermodynamic cost–controllability trade-off in coupled metabolic currencies:

https://doi.org/10.1103/4bqh-zhry

Their abstract already argues that complex environments can favor comparably sized currency pools and greater controllability despite higher thermodynamic cost, while simpler environments can favor cheaper imbalance.

The book therefore cannot claim the general “complex environments make costly controllability worth it” prediction as new.

Any extension must predict a specific finite-time recovery or demand boundary not already captured by their controllability metric.

### Constraint closure

Montévil and Mossio formalize biological organization as closure of constraints:

https://doi.org/10.1016/j.jtbi.2015.02.029

Lehman and Kauffman connect constraint closure to origin-of-life transitions:

https://doi.org/10.3390/e23010105

Self-maintained constraints are not a new idea.

### Semantic information and viability

Kolchinsky and Wolpert connect semantic information, autonomous agency, and viability within nonequilibrium statistical physics:

https://doi.org/10.1098/rsfs.2018.0041

The book must not claim to be first to connect information to physical viability.

### Microbial preparedness and fluctuating environments

Mori et al. quantify a proteome reserve whose present cost enables faster response after nutrient improvement:

https://doi.org/10.1038/s41467-017-01242-8

Basan et al. measure a growth–lag trade-off:

https://doi.org/10.1038/s41586-020-2505-4

Experimental and theoretical work on bet hedging and anticipatory regulation already establishes that present growth can be sacrificed for future performance under variable environments.

A 2026 PRX Life paper further models evolutionary learning of environmental transition statistics through proteome allocation:

https://doi.org/10.1103/rqj5-pqvt

These are benchmark/null cases for the book, not evidence of novelty.

### Driven compartments and dissipative assembly

Chemically fueled vesicles, transient compartments, coacervates, and active transport already exist in a broad dissipative-assembly literature. Representative links include:

- https://doi.org/10.1002/syst.201900044
- https://doi.org/10.1038/nchem.2511
- https://doi.org/10.1002/adma.201706750
- https://doi.org/10.1038/s41565-018-0250-8
- https://doi.org/10.1021/jacs.5c18600
- https://doi.org/10.1021/acs.nanolett.6c02653

A synthetic-compartment experiment would need a preregistered, matched-resource recovery-boundary prediction; fuel-maintained assembly itself is not the contribution.

## Narrow novelty boundary worth testing

After the reductions above, the strongest candidate is no longer a new reachability object.

It is this empirical proposition:

> For some driven biological or chemical systems, a small set of physically motivated, work-maintained variables can form a constraint coarse-graining that causally predicts robust recovery across held-out disturbances after their costs are measured independently. The decomposition should provide useful compression, transfer, or intervention predictions beyond standard domain variables and neighboring control/information measures.

Even this should be described as a **candidate decomposition and research program** until data support it.

## Strongest possible experiment

A high-value first experiment should include:

1. a full enough state description to support a conventional baseline model;
2. a proposed smaller constraint-variable subset chosen before held-out tests;
3. independent construction/maintenance cost measurements;
4. a predeclared viability/recovery criterion;
5. a disturbance family with held-out perturbations;
6. direct intervention or ablation of the candidate constraint;
7. a matched-extra-resource control;
8. comparison against viability, robust control, resource allocation, energy inventory, dissipation, empowerment/information measures, and the strongest domain model;
9. a transfer test in a second disturbance class.

If the constraint decomposition merely renames state variables or does not improve prediction, compression, transfer, or causal interpretation, the scientific novelty claim should be abandoned.

That is now the standard the book sets for itself.