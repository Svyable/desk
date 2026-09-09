# Research Notes — The Gradient Universe

## Research question

The book now asks a narrower question than its first draft did:

> Can a physically motivated subset of work-maintained variables act as a useful **constraint coarse-graining**—one that predicts which disturbances remain recoverable under finite budgets better, more compactly, or more transferably than conventional state descriptions?

The broader phrase **recursive thermodynamic reachability** remains useful as the book's historical route to this question. It should not be presented as new reachability mathematics.

The first-principles passes removed four increasingly tempting claims:

1. there is no universal scalar called “future options per joule”;
2. adaptive systems do not generally maximize raw reachability—useful gates often delete transitions;
3. if architecture variables `c` themselves evolve, the enlarged state `z=(x,c)` turns the system into ordinary extended-state dynamics, so self-modification alone does not create a new formal reachability object;
4. predictive coarse-graining itself is established territory in statistical mechanics, dynamical-systems reduction, computational mechanics, causal-emergence work, and coarse-grained stochastic thermodynamics.

The potentially publishable scientific residue is empirical and methodological: identify slower or persistent variables whose maintenance consumes measurable resources and whose causal effect is to reshape faster transition structure; then test whether that decomposition predicts recovery across disturbances with useful compression, transfer, and matched-resource causal specificity.

This is a conjecture and research program, not an established law.

## Three levels of confidence

### Established or mature science

The manuscript relies on established thermodynamics, statistical mechanics, chemistry, physiology, evolutionary biology, dynamical systems, control theory, cybernetics, information theory, and climate science.

That includes conservation laws, free energies and chemical potentials, exergy, chemiosmotic coupling, natural selection, reachable sets, viability kernels, robust control, state augmentation, geometric-mean fitness, bet hedging, Ashby's requisite variety, empowerment, information thermodynamics, minimum-energy control, control/architecture co-design, constraint closure, predictive coarse-graining, and measured microbial preparedness trade-offs.

None of those is a discovery of this book.

### Productive but non-universal principles

Maximum entropy production, maximum power, constructal approaches, dissipative adaptation, and similar ideas are treated as domain-dependent hypotheses, closures, heuristics, or research programs unless a stronger theorem applies under stated assumptions.

Failure of one does not threaten the second law.

### The remaining conjecture

For a specified physical system and prediction problem, a partition

\[
z=(x,c)
\]

may be scientifically useful when `x` contains faster process variables and `c` contains slower or persistent work-maintained variables that alter transition laws, effective disturbances, admissible responses, or transition costs.

The decomposition earns scientific value only if all of the following survive experiment:

- intervention on `c` moves a preregistered recovery boundary;
- the construction/maintenance/switching cost of `c` is independently measurable;
- the effect is not reproduced by giving the comparison system the same extra resource without the architecture;
- a reduced model using `c` predicts held-out disturbances with useful compression or accuracy;
- the same decomposition transfers across more than one disturbance family or intervention;
- established neighboring models do not explain the result equally well with fewer assumptions.

If those tests fail, the honest outcome is a useful synthesis rather than a new scientific object.

## The decisive reduction

Suppose

\[
\dot{x}=f(x,c,e,u),
\]

and the architecture itself evolves according to

\[
\dot{c}=g(x,c,e,u).
\]

Define

\[
z=(x,c),
\qquad
\dot z=F(z,e,u)=\begin{pmatrix}f\\g\end{pmatrix}.
\]

Every self-modifying trajectory is now an ordinary trajectory in the enlarged state space. Viability sets, budgets, stochastic dynamics, and reachability can all be defined there using established machinery.

Therefore:

> **Recursive architecture change is not, by itself, new mathematics.**

This is one of the book's most important negative results.

It turns the research problem into a variable-selection and coarse-graining problem: when is it useful to identify some variables as *constraints* rather than treating every microscopic variable symmetrically?

## Constraint-quality criteria

A candidate constraint variable should pass five primary tests:

1. **Intervention** — manipulating it changes the relevant transition/recovery law.
2. **Independent cost** — its physical cost is measured without fitting the outcome it later explains.
3. **Predictive compression** — a reduced model using it preserves or improves held-out prediction with fewer effective degrees of freedom, lower data burden, or better identifiability.
4. **Transfer** — the decomposition remains useful across at least one disturbance or intervention not used to define it.
5. **Competition** — it adds something beyond energy inventory, current dissipation, robust control, viability, empowerment, resource allocation, or the appropriate domain model.

A sixth causal control is especially valuable: **matched extra resource**. Give the comparison system the same resource quantity spent on the proposed constraint without giving it the architecture itself. If extra resource alone reproduces the effect, the architecture-specific explanation is unnecessary.

See [When Is a Constraint a Useful State Variable?](constraint-coarse-graining-criteria.md).

## Formal package

### Book appendices

- [Appendix A — Constraint-Selective Reachability](../manuscript/appendix-a-constraint-selective-reachability.md) — dimensional analysis, viable disturbance sets, and the minimal fluctuating-environment bridge.
- [Appendix B — Requisite Variety Under a Physical Budget](../manuscript/appendix-b-requisite-variety-under-budget.md) — cybernetic ancestry and the fact that useful regulation may shrink raw reachability.
- [Appendix C — The Conjecture Reduced](../manuscript/appendix-c-the-conjecture-reduced.md) — state augmentation removes formal novelty from self-modifying reachability and leaves a coarse-graining/prediction claim.
- [Appendix D — The Variable Problem](../manuscript/appendix-d-the-variable-problem.md) — microscopic completeness versus predictive usefulness, and the proposal that some work-maintained structures may earn status as recovery-relevant macroscopic variables.

### Formal and computational audit

- [Constraint-selective reachability LaTeX](constraint-selective-reachability.tex) — original viable-reachability definitions and hazard-rate proposition.
- [Extended-state reduction LaTeX](extended-state-reduction.tex) — formal state-augmentation proposition and empirical coarse-graining criterion.
- [Hierarchical proof audit](lamport-proof-reachability.md) — Lamport-style assumption tree beginning with the reduction test.
- [Threshold model](reachability_threshold.py) — dependency-free Monte Carlo check of the Appendix-A population threshold.
- [Threshold validation](reachability-threshold-validation.md) — numerical output and non-claims.
- [Finite-state graph model](reachability_graph_model.py) — controller-versus-disturbance toy model where a costly gate removes dangerous transitions.
- [Finite-state validation](reachability-graph-validation.md) — exact default output and interpretation.

### Experimental and novelty apparatus

- [Dormancy constraint benchmark](dormancy-constraint-benchmark.md) — preregistered comparison of energy/activity variables against structural/regulatory variables for recovery, with held-out prediction, intervention, matched-resource, and domain-model controls.
- [Constraint coarse-graining criteria](constraint-coarse-graining-criteria.md) — intervention, cost, compression, transfer, matched-resource, and model-comparison requirements.
- [Experimental protocol](reachability-experiment-protocol.md) — preregisterable path from physical architecture to held-out recovery and competition.
- [Experimental candidate ranking](experiment-candidate-ranking.md) — ranks candidate domains by discriminating power rather than narrative appeal.
- [Scientific figure specifications](reachability-diagrams.md) — figures that keep measured quantities, model-derived sets, and evolutionary outcomes separate.
- [Recursive thermodynamic reachability](recursive-thermodynamic-reachability.md) — broader historical conjecture and implications, now explicitly non-novel as a mathematical object.
- [Closest prior art](reachability-prior-art.md) — control, viability, constraint-closure, non-equilibrium-capacity, and 2025–2026 guardrails.
- [Cybernetics and information prior art](cybernetics-information-prior-art.md) — Ashby, Good Regulator, empowerment, feedback thermodynamics, and sensory-capacity guardrails.
- [Coarse-graining prior art](coarse-graining-prior-art.md) — Mori–Zwanzig, predictive states, causal emergence, Markov blankets, and coarse-grained thermodynamics.
- [Source ledger](source-ledger.csv) — claim-to-source trail.

## Model ladder

### Model 1 — survival entered directly

Appendix A assumes hazards arrive at rate \(\lambda\), a costly architecture pays continuous log-growth cost \(c\), and per-hazard survival is \(s_1>s_0\). The asymptotic crossover is

\[
\lambda^*=\frac{c}{\ln(s_1/s_0)}.
\]

This is not novel. The simulation validates only the algebra.

### Model 2 — survival derived from an explicit transition graph

The graph model derives survival coverage from a finite control game. Under the default matched budget and recovery horizon:

- base robust survivable severities: \(\{1,2\}\);
- gated robust survivable severities: \(\{1,2,3,4\}\);
- \(s_0\approx0.665240956\);
- \(s_1\approx0.909969427\);
- with maintenance cost \(c=0.04\), \(\lambda^*\approx0.127688771\).

The base architecture nevertheless has the larger raw state set because it includes harmful and lethal branches. The gate improves robust recovery by removing possibilities.

This demonstrates logical consistency, not biology.

### Model 3 — reduction

Once architecture becomes dynamic, ordinary augmented-state dynamics can represent it. There is no reason to create a special recursive operator.

This is the formal point at which the research program stops seeking new mathematics and starts testing whether a **constraint-oriented reduced description** earns empirical value.

### Model 4 — dormancy recovery benchmark

The first real benchmark is now specified rather than merely suggested.

Bollen et al. (2025) report a progression in *E. coli* protein aggregates from more liquid-like condensates toward more solid structures, with aggregate maturation impairing dissolution and recovery: https://doi.org/10.1038/s41467-025-56387-8 .

Taher et al. (2026) provide a complementary case in which nitrogen starvation sharply increases persisters without a corresponding fall in ATP; low PyrBI is implicated and PyrBI overexpression reduces persistence: https://doi.org/10.1038/s41467-026-75914-9 .

A 2026 perspective emphasizes the broader metabolic heterogeneity of bacterial persistence: https://doi.org/10.1038/s41467-026-71427-7 .

The preregistered comparison is deliberately adversarial:

- `M_energy`: ATP/activity/energetic variables;
- `M_structure`: aggregate or pathway-state variables;
- `M_joint`: energy plus candidate constraint variables;
- `M_domain`: strongest study-specific conventional model.

A positive result requires held-out predictive gain plus a causal intervention in the predicted direction. A matched-resource control is required for the stronger thermodynamic interpretation.

The Bollen source-data deposit has been identified, but the spreadsheet bytes have not yet been loaded into a reproducible analysis environment. No reanalysis result is claimed until the original tables are actually ingested and checked. Figure digitization will not be substituted for source data.

## Experimental strategy after the novelty stress test

Several attractive examples have been demoted because their headline claim is already occupied territory.

- **Proteome reserve, growth–lag trade-offs, and anticipatory regulation:** benchmark/null cases. Existing microbial physiology already quantifies present-growth costs paid for future preparedness.
- **Metabolic-currency controllability:** close extension target, not a clean novelty target. The 2026 PRX Life work already links environmental complexity, currency balance, greater controllability, and greater thermodynamic cost.
- **Dormancy:** now the first empirical benchmark because present energetic state and future recoverability can separate in experimentally specific ways. Success still requires outperforming the published aggregate/PyrBI mechanisms rather than renaming them.
- **Fuel-driven compartments:** clean causal physics but an active field already contains chemically fueled compartments, vesicles, coacervates, and transport. Novelty would require a preregistered recovery-boundary test, not merely showing that fuel maintains a compartment.

The best immediate step is therefore not to hunt for the most dramatic biological story. It is to take a tractable recovery problem with strong competing models and ask whether the constraint decomposition passes the quality criteria above.

A failure on a well-understood benchmark is more informative than an apparent success in a poorly characterized system.

## Novelty guardrails

The book must not claim to have invented:

- reachable sets, viability kernels, or energy-feasible reachability;
- state augmentation for self-modifying dynamics;
- requisite variety;
- empowerment or future-control channel capacity;
- information thermodynamics of measurement and feedback;
- semantic information tied to viability;
- predictive coarse-graining or minimal predictive states;
- geometric-mean fitness or bet hedging;
- costly microbial preparedness or anticipatory regulation;
- minimum-energy reachability or energetic resilience;
- controller/architecture co-design;
- self-maintaining constraint closure;
- non-equilibrium capacity in dormancy;
- counterfactual geometry of accessible futures;
- thermodynamic cost–controllability trade-offs in metabolic currencies.

The new name earns nothing by itself.

## Falsification rules

No post hoc state variables. No post hoc viability boundary. No hidden-gradient rescue. No horizon changes after seeing who wins. No free construction, activation, or maintenance cost. No arbitrary state-space volume sold as biological value. No appeal to the second law when the stronger prediction fails.

Most importantly, the proposed decomposition must compete against the right neighboring theory.

If a conventional domain model predicts held-out recovery equally well and the constraint language adds no compression, transfer, or intervention insight, discard the stronger claim.

## Publication standard

A trade/science book can be worth publishing as a careful synthesis even if this conjecture ultimately reduces to established theory.

A scientific paper now requires something more precise than a new equation or new noun: a **measured constraint coarse-graining that predicts a held-out physical recovery boundary, survives matched-resource intervention, transfers to another perturbation, and beats a credible baseline**.

Until then the manuscript should use *conjecture*, *candidate decomposition*, or *research program*—never *law*, *discovery*, or *proved principle*.