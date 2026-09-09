# Research Notes — The Gradient Universe

## Research question

The book now asks a narrower question than its first draft did:

> Can a driven system spend present free energy to construct or maintain a physical constraint that changes its later *viable recovery possibilities*, and can that physical change predict persistence or selection before the outcome is observed?

The working umbrella name remains **recursive thermodynamic reachability**.

The first-principles pass removes two tempting but unjustified claims.

There is no defensible universal scalar called “future options per joule.” Work has physical units; reachable sets are set-valued; survival probability is dimensionless; reproductive fitness is a further mapping supplied by biology.

There is also no reason to expect adaptive systems to maximize raw reachability. Useful constraints often remove transitions. A membrane excludes. A checkpoint stops. Inhibition suppresses. A safety interlock makes some trajectories impossible.

The more precise object is therefore **constraint-selective viable reachability**: the causal change in budget-admissible viable transitions, recovery targets, or survivable disturbances attributable to a specified physical constraint after construction, maintenance, activation, and opportunity costs are counted.

This is a conjecture and research program, not an established law.

## Three levels of confidence

### Established or mature science

The manuscript relies on established thermodynamics, statistical mechanics, chemistry, physiology, evolutionary biology, control theory, cybernetics, information theory, and climate science for ordinary claims within those fields.

This includes conservation laws, second-law constraints, free energies and chemical potentials, exergy, chemiosmotic coupling, natural selection, reachable sets, viability kernels, robust control, geometric-mean fitness, bet hedging, Ashby's requisite variety, information-theoretic empowerment, minimum-energy control, control/architecture co-design, information thermodynamics, and measured trade-offs between microbial growth and preparedness.

None of those is a discovery of this book.

### Productive but non-universal principles

Maximum entropy production, maximum power, constructal approaches, dissipative adaptation, and similar proposals are treated as domain-dependent hypotheses, closures, heuristics, or research programs unless a stronger theorem applies under stated assumptions.

Failure of one of these principles does not threaten the second law.

### The book's conjecture

The narrow candidate contribution is the **full causal loop**:

1. a measured nonequilibrium resource is consumed;
2. part of it is invested in a specific physical constraint produced or maintained by the system;
3. that constraint changes later admissible transitions, disturbance filtering, or affordable responses;
4. the resulting viable recovery set is predicted before the future disturbance or competition outcome;
5. independently measured physical costs and recovery structure imply a quantitative environmental boundary;
6. the prediction survives ablation and matched-resource controls;
7. simpler established models do not predict the result as well with fewer assumptions.

If that loop does not add predictive value, the correct description is **interdisciplinary synthesis**, not scientific breakthrough.

## First-principles decomposition

A physical constraint can improve regulation in at least four distinct ways.

**Disturbance filtering.** A membrane, shell, buffer, or interlock prevents some perturbations from reaching essential variables. The effective disturbance set shrinks.

**Affordable action expansion.** Catalysis, storage, redundancy, or a new coupling can bring a response inside the available work/time budget.

**Response selection.** Sensors, memory, and models can improve the mapping from condition to response. Cybernetics, empowerment, information theory, and information thermodynamics already cover much of this structural territory.

**Constraint reconstruction.** In living systems, viable processes can contribute to rebuilding the membranes, regulators, enzymes, stores, and other constraints that maintain those processes. This connects directly to constraint-closure work.

The conjecture is strongest where these pieces are physically measured together rather than merely described in the same vocabulary.

## Formal package

### Book appendices

- [Appendix A — Constraint-Selective Reachability](../manuscript/appendix-a-constraint-selective-reachability.md) — definitions, dimensional analysis, limiting cases, and the minimal fluctuating-environment threshold.
- [Appendix B — Requisite Variety Under a Physical Budget](../manuscript/appendix-b-requisite-variety-under-budget.md) — cybernetic ancestry, budgeted response variety, and a finite-state example where raw reachability shrinks while robust recovery improves.

### Formal and computational audit

- [LaTeX formalization](constraint-selective-reachability.tex) — formal definitions, proposition, proof, limiting cases, and failure conditions.
- [Hierarchical proof audit](lamport-proof-reachability.md) — Lamport-style assumption/proof tree intended to expose hidden premises.
- [Threshold model](reachability_threshold.py) — dependency-free Monte Carlo validation of the Appendix-A population threshold.
- [Threshold validation](reachability-threshold-validation.md) — numerical output and explicit limits of inference.
- [Finite-state graph model](reachability_graph_model.py) — robust controller-versus-disturbance game in which a gate removes dangerous transitions at a physical cost.
- [Finite-state validation](reachability-graph-validation.md) — exact default outputs and non-claims.

### Experimental and novelty apparatus

- [Experimental protocol](reachability-experiment-protocol.md) — preregisterable path from physical architecture to competition outcome.
- [Experimental candidate ranking](experiment-candidate-ranking.md) — ranks metabolic-currency control, dormancy, synthetic compartments, active matter, and benchmark/null systems by novelty and tractability.
- [Scientific figure specifications](reachability-diagrams.md) — six figures designed to keep measured quantities, model-derived sets, and selection outcomes separate.
- [Recursive thermodynamic reachability](recursive-thermodynamic-reachability.md) — broader conjecture and implications.
- [Closest prior art](reachability-prior-art.md) — control, viability, constraint-closure, non-equilibrium-capacity, and 2025–2026 novelty guardrails.
- [Cybernetics and information prior art](cybernetics-information-prior-art.md) — Ashby, Good Regulator, empowerment, feedback thermodynamics, and sensory-capacity guardrails.
- [Source ledger](source-ledger.csv) — claim-to-source trail.

## Minimal formal object

Let system state be \(x\), environment \(e\), admissible control \(u\), and constraint architecture \(c\):

\[
\dot{x}=f(x,e,u;c).
\]

A valid model specifies in advance a state representation, viability set \(K\), physical budget \(B\), horizon \(\tau\), admissible controls, disturbance family or distribution, and the cost of constructing and maintaining \(c\).

For a disturbance family \(D\), define the survivable disturbance set

\[
S_\tau(c,B)=\left\{d\in D:\exists u\text{ such that the trajectory remains viable and respects }B\right\}.
\]

If \(\mu\) is a declared probability distribution over disturbances,

\[
s(c)=\mu(S_\tau(c,B))
\]

is the probability mass of disturbances for which a budget-admissible viable response exists under that model.

This is environment-specific. Change \(\mu\), \(B\), \(K\), or \(\tau\) and the answer can change.

That dependence is part of the claim, not a nuisance to be hidden.

## Model ladder

### Model 1: survival term entered directly

Appendix A begins with a deliberately transparent population model. Hazards arrive at rate \(\lambda\). A costly architecture pays continuous log-growth cost \(c\) and has per-hazard survival \(s_1>s_0\).

The asymptotic crossover is

\[
\lambda^*=\frac{c}{\ln(s_1/s_0)}.
\]

This threshold is not novel. It is a geometric-mean-fitness result under explicit assumptions.

The first standard-library simulation verifies only the algebra and limiting behavior.

### Model 2: survival derived from a transition graph

The finite-state graph model removes \(s_0\) and \(s_1\) as free survival knobs.

The cheap architecture possesses more raw transition branches, including unstable and lethal branches. The gated architecture pays a cost and removes those branches.

Under the default matched budget and recovery horizon:

- base robust survivable severities: \(\{1,2\}\);
- gated robust survivable severities: \(\{1,2,3,4\}\);
- \(s_0\approx0.665240956\);
- \(s_1\approx0.909969427\);
- with maintenance cost \(c=0.04\), \(\lambda^*\approx0.127688771\).

From severity 4 the base architecture has the larger raw state set, including failure, while the gated architecture has the smaller raw set and the stronger recovery guarantee.

This is the key counterexample to “more options = more capability.”

The model is still invented. It validates logic, not biology.

### Model 3: required next step

The next model must estimate the transition structure from a real physical system rather than from hand-written rules.

The required inputs are measured transition rates or reaction propensities, independently justified viability boundaries, physical action/constraint costs, a declared disturbance process, and a fitness or persistence outcome withheld until the physical model has made its prediction.

That is the first stage capable of producing scientific evidence.

## Novelty guardrails

The book must not claim to have invented:

- reachable sets or viability kernels;
- requisite variety;
- future-control channel capacity or empowerment;
- information thermodynamics of measurement and feedback;
- semantic information tied to viability;
- physical memory improving sensing/control;
- geometric-mean fitness or bet hedging;
- costly microbial preparedness, proteome reserve, growth–lag trade-offs, or anticipatory regulation;
- minimum-energy reachability or energetic resilience;
- controller/architecture co-design;
- self-maintaining constraint closure;
- non-equilibrium capacity in dormancy;
- counterfactual geometry of accessible futures;
- thermodynamic cost–controllability trade-offs in metabolic currencies.

The new name earns nothing by itself.

## Experimental ranking

The current ranking is deliberately hostile to easy stories.

**Best near-term bridge:** metabolic-currency decoupling under fluctuating demand. The 2026 PRX Life result already supplies a cost–controllability relation; the proposed extension is a predeclared viable demand/recovery set and an environmental crossover not contained in the original metric.

**Highest conceptual upside:** dormant-versus-dead latent recovery. The challenge is to predict reactivation capability before reactivation and outperform ATP, membrane-integrity, energy-inventory, and standard viability measures.

**Cleanest physics:** a fuel-maintained synthetic compartment or selective barrier that spends work to remove destructive transitions and changes the future forcing protocols from which the system can recover.

**Useful physical demonstration:** active matter with feedback-created structure, though externally imposed feedback weakens the endogeneity claim.

**Benchmark/null cases, not novelty evidence:** proteome reserve, growth–lag trade-offs, anticipatory regulation, and microbial environmental learning. Existing literature already explains those trade-offs quantitatively.

## Falsification rules

The conjecture gets no post hoc state variables, no post hoc viability boundary, no hidden-gradient rescue, no horizon changes after seeing who wins, no free construction or maintenance cost, no arbitrary state-space volume sold as biological value, and no appeal to the second law when the stronger prediction fails.

Most importantly, it must compete against the right neighboring theory.

If Ashby's requisite variety, empowerment, robust control, viability theory, information thermodynamics, resource allocation, bet hedging, or another domain model predicts the same result with equal or greater economy, then constraint-selective reachability has not earned scientific novelty in that domain.

## Publication standard

There are still two legitimate outputs.

A trade/science book can be publishable as an unusually careful synthesis even if the conjecture is ultimately redundant.

A scientific paper requires a mechanistic, out-of-sample prediction that survives the novelty guardrails above.

Until then the manuscript should use **conjecture**, **candidate mechanism**, or **research program**—never **law**, **discovery**, or **proved principle**.
