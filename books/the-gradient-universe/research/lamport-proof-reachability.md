# Hierarchical Proof Audit — Constraint-Selective Reachability

This is a Lamport-style proof/assumption tree for auditing the conjecture. It is not a proof of a new law. Its purpose is to make hidden assumptions visible enough that they can be attacked one by one.

## ⟨1⟩1 Claim under test

For a specified driven system, environment process, viable region, physical budget, and time horizon, an endogenously constructed physical constraint can change the set of future disturbances or targets that remain viable and reachable. If that change produces a sufficiently large fitness benefit under the actual environmental distribution, the constraint can be selected despite lowering instantaneous growth, power, or dissipation.

### ⟨2⟩1.1 Required objects are defined before outcomes are observed

Define:

- state space `X`;
- environmental state/process `E`;
- constraint architectures `c0`, `c1`;
- admissible control/action sets `U_c`;
- viable region `K`;
- horizon `tau`;
- disturbance family `D` and distribution `mu`;
- physical budget `B`;
- construction and maintenance costs of the constraint;
- recovery/target criterion.

**Failure condition:** any of these is altered after observing which architecture wins, unless the altered analysis is clearly labeled exploratory and independently retested.

### ⟨2⟩1.2 The constraint is physically instantiated

Show that `c1` corresponds to a material or dynamical difference: membrane permeability, enzyme localization, regulatory coupling, reserve pool, channel state, compartment, repair machinery, or another measurable architecture.

**Failure condition:** the alleged constraint is only a semantic relabeling of the outcome.

### ⟨2⟩1.3 The constraint changes the dynamics or admissible controls

Demonstrate that

`f(x,e,u;c1)` differs from `f(x,e,u;c0)`

or that `U_c1` differs from `U_c0` in a way measurable independently of long-run fitness.

**Failure condition:** the architectures have identical transition/control structure after matched resource accounting.

## ⟨1⟩2 Thermodynamic accounting is complete enough for the comparison

### ⟨2⟩2.1 Construction cost is counted

Measure or estimate work/material requirements needed to create the constraint.

### ⟨2⟩2.2 Maintenance cost is counted

Measure or estimate the continuing resource draw required to keep the constraint functional over the declared horizon.

### ⟨2⟩2.3 Control cost is counted

Include the energetic cost of using the added control authority, not merely owning it.

### ⟨2⟩2.4 Opportunity cost is not silently ignored

If resources invested in the constraint could otherwise have supported growth, reproduction, storage, or another measured activity, the comparison must include the resulting penalty in the fitness model.

**Failure condition for ⟨1⟩2:** the regulated architecture receives a physically useful structure for free.

## ⟨1⟩3 Viable reachability changes causally because of the constraint

### ⟨2⟩3.1 Baseline survivable disturbance set is computed

Compute or estimate

`S_tau(c0, B0)`.

### ⟨2⟩3.2 Constraint-bearing survivable disturbance set is computed

Compute or estimate

`S_tau(c1, B1)`

after charging the architecture for construction, maintenance, and use.

### ⟨2⟩3.3 The difference is preregistered

Identify at least one perturbation class or recovery target predicted to be viable under one architecture and not the other.

### ⟨2⟩3.4 Ablation reverses the predicted advantage

Remove, disable, or bypass the constraint while keeping other variables as matched as practical.

**Failure condition:** the predicted reachable-set difference persists after the supposed causal constraint is removed.

## ⟨1⟩4 Raw reachability is not confused with viable reachability

### ⟨2⟩4.1 Unsafe transitions are allowed to disappear

The theory permits `c1` to reduce the total number or geometric volume of reachable states.

### ⟨2⟩4.2 The claimed benefit concerns a declared viable/recovery subset

A gate that closes five lethal routes and one harmless route can be beneficial even though total reachability contracts.

**Failure condition:** the argument declares any increase in state-space volume beneficial without regard to viability.

## ⟨1⟩5 No universal scalar is manufactured from incompatible dimensions

### ⟨2⟩5.1 Work remains a physical cost

Report work or resource expenditure in physically meaningful units.

### ⟨2⟩5.2 Reachability remains set-valued or distribution-specific

Use set inclusion, target reachability, recovery cost, or a probability under a declared disturbance distribution.

### ⟨2⟩5.3 Scalarization requires an external criterion

Engineering may supply a design objective. Evolution may supply long-run reproductive growth. Neither comes from the second law alone.

**Failure condition:** a universal “future options per joule” score is asserted without an invariant mapping.

## ⟨1⟩6 Minimal fluctuating-environment proposition

Assume:

- benign log-growth rate `r` for both architectures before constraint cost;
- continuous cost `c > 0` for architecture 1;
- Poisson hazard rate `lambda`;
- per-hazard lineage multipliers `s0`, `s1`, with `0 < s0 < s1 <= 1`;
- `s0` and `s1` are predicted from the physical reachability model rather than fit from the competition outcome.

Then asymptotic log-growth rates are

`g0 = r + lambda * ln(s0)`

and

`g1 = r - c + lambda * ln(s1)`.

Hence architecture 1 wins exactly when

`lambda > c / ln(s1/s0)`.

### ⟨2⟩6.1 Derivation

Population abundance after time `t` is

`P0(t) = P0(0) exp(r t) s0^N(t)`

and

`P1(t) = P1(0) exp((r-c)t) s1^N(t)`.

Take logarithms and divide by `t`.

For a Poisson process, `N(t)/t -> lambda` almost surely.

Subtract the two limiting growth rates.

### ⟨2⟩6.2 Dimensional check

- `c`: inverse time;
- `lambda`: inverse time;
- `ln(s1/s0)`: dimensionless;
- therefore `lambda* = c / ln(s1/s0)` has units inverse time.

### ⟨2⟩6.3 Novelty guardrail

The threshold is a standard multiplicative-fitness consequence under the stated model. It is not the novel proposition.

The candidate new contribution is the independent derivation of `s1/s0` from measured thermodynamic budget plus architecture-specific viable reachability.

## ⟨1⟩7 Limiting cases

### ⟨2⟩7.1 No capability gain

If `s1 = s0` and `c > 0`, architecture 1 loses.

### ⟨2⟩7.2 No cost

If `c -> 0` with `s1 > s0`, the crossover hazard rate tends to zero.

### ⟨2⟩7.3 No hazards

If `lambda -> 0`, the cheaper architecture wins.

### ⟨2⟩7.4 Harmful constraint

If `s1 < s0`, the added architecture is not adaptive under this disturbance model.

### ⟨2⟩7.5 Correlated or state-dependent hazards

The Poisson result no longer applies directly. Replace it with the appropriate long-run multiplicative-growth/Lyapunov calculation.

### ⟨2⟩7.6 Event-triggered cost

If the controller pays only when activated, continuous `c` is the wrong cost term.

### ⟨2⟩7.7 Finite populations and extinction

Demographic stochasticity and bottlenecks can dominate asymptotic large-population predictions. The experiment must model them if they are relevant.

## ⟨1⟩8 Competing explanations are tested

Compare predictive performance against:

- benign growth rate alone;
- measured geometric-mean fitness without reachability modeling;
- microbial bet-hedging models;
- metabolic control analysis;
- ordinary resilience/recovery-time metrics;
- minimum-control-energy models;
- control/architecture co-design metrics;
- direct empirical survival curves.

**Failure condition:** a simpler established model predicts the crossover equally well or better with fewer fitted quantities.

## ⟨1⟩9 Evidence required to strengthen the conjecture

### ⟨2⟩9.1 Level A — algebraic sanity

The code reproduces the analytic toy-model threshold and all limiting cases.

### ⟨2⟩9.2 Level B — mechanistic simulation

A separately specified reaction/control model predicts survivable disturbance sets from physical parameters.

### ⟨2⟩9.3 Level C — controlled experiment

Measured architecture costs and disturbance-recovery behavior agree with the predicted survivable sets without fitting to competition outcome.

### ⟨2⟩9.4 Level D — evolutionary/selection prediction

The preregistered crossover in environmental variability is observed near the predicted boundary.

### ⟨2⟩9.5 Level E — replication and domain transfer

The same formalism succeeds in a second system without redefining viability or the core variables after the fact.

## ⟨1⟩10 Conclusion of the audit

What can currently be claimed:

A physical constraint can change admissible transitions. Those changes can be represented using established reachability and viability tools. Building and using the constraint can carry measurable thermodynamic cost. In fluctuating environments, a costly survival advantage can overcome a benign-growth penalty above a calculable threshold under explicit assumptions.

What cannot currently be claimed:

- a new fundamental force;
- a universal law maximizing reachability;
- a universal conversion between energy and optionality;
- a thermodynamic derivation of natural selection;
- experimental confirmation of recursive thermodynamic reachability.

The research program succeeds only if the physical reachability model predicts something independently useful before the biological outcome is known.
