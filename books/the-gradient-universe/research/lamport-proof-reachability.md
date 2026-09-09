# Hierarchical Proof Audit — Constraint-Selective Reachability

This is a Lamport-style proof/assumption tree for auditing the conjecture. It is not a proof of a new law. Its purpose is to make hidden assumptions visible enough that they can be attacked one by one.

## ⟨0⟩ Reduction test: is there any new mathematical object here?

Suppose process variables satisfy

`dx/dt = f(x,e,u;c)`

and the physical architecture itself changes according to

`dc/dt = g(x,e,u;c)`.

Define the enlarged state `z = (x,c)` and the enlarged dynamics

`dz/dt = F(z,e,u) = (f,g)`.

Then ordinary reachability, viability, stochastic control, and cost-function methods can in principle be applied directly to `z`.

### ⟨1⟩0.1 Consequence

Changing one's own architecture is **not by itself a new reachability formalism**. The recursion can be absorbed into the state description.

**Novelty failure condition:** if recursive thermodynamic reachability is only ordinary reachability on an enlarged state vector, the book must describe it as a modeling perspective or synthesis, not a new mathematical principle.

### ⟨1⟩0.2 The remaining claim is a coarse-graining claim

The only stronger possibility is that separating some state variables into slower, work-maintained **constraint variables** yields a reduced model with useful causal and predictive properties.

That decomposition must earn its status empirically.

Required tests:

- intervention on the candidate constraint changes the relevant transition law or recovery boundary;
- the constraint's physical cost is measured independently;
- the variable persists or acts across enough faster transitions to compress the dynamics at the scale of interest;
- a reduced model using the constraint predicts held-out recovery with useful compression or accuracy;
- the same decomposition transfers across more than one disturbance protocol;
- the model adds predictive value beyond established domain quantities.

**Failure condition:** the “constraint” label merely partitions an ordinary state vector without improving prediction, compression, transfer, or causal interpretation.

## ⟨1⟩1 Claim under test

For a specified driven system, environment process, viable region, physical budget, and time horizon, a physically maintained constraint can change the set of future disturbances or targets that remain viable and reachable. If a constraint-oriented coarse-graining predicts that change independently and the resulting benefit is large enough under the actual environmental distribution, the constraint can be selected despite lowering instantaneous growth, power, or dissipation.

This statement does not assert a new force, a new state-space ontology, or a universal objective.

### ⟨2⟩1.1 Required objects are defined before outcomes are observed

Define:

- full state representation `Z`;
- proposed process variables `x` and candidate constraint variables `c`;
- environmental state/process `E`;
- comparison architectures `c0`, `c1` or interventions on `c`;
- admissible control/action sets;
- viable region `K`;
- horizon `tau`;
- disturbance family `D` and distribution `mu`;
- physical budget `B`;
- construction and maintenance costs;
- recovery/target criterion.

**Failure condition:** any of these is altered after observing which architecture wins, unless the altered analysis is clearly exploratory and independently retested.

### ⟨2⟩1.2 The candidate constraint is physically instantiated

Show that `c` corresponds to a material or dynamical difference: membrane permeability, enzyme localization, regulatory coupling, reserve pool, channel state, compartment, repair machinery, or another measurable architecture.

**Failure condition:** the alleged constraint is only a semantic relabeling of the outcome.

### ⟨2⟩1.3 Intervention on the constraint changes relevant dynamics

Demonstrate that changing `c` changes

`f(x,e,u;c)`,

the admissible action set, transition probabilities, effective disturbances, transition costs, or the viability/recovery boundary in a way measurable independently of long-run fitness.

**Failure condition:** after matched resource accounting, manipulating the proposed constraint has no causal effect on the transition structure relevant to the prediction.

### ⟨2⟩1.4 The constraint decomposition compresses rather than decorates

Compare a conventional/full model against the proposed reduced constraint-oriented model on held-out perturbations.

**Failure condition:** the constraint decomposition merely renames variables while matching or worsening predictive performance at equal or greater complexity.

## ⟨1⟩2 Thermodynamic accounting is complete enough for the comparison

### ⟨2⟩2.1 Construction cost is counted

Measure or estimate work/material requirements needed to create the constraint.

### ⟨2⟩2.2 Maintenance cost is counted

Measure or estimate the continuing resource draw required to keep the constraint functional over the declared horizon.

### ⟨2⟩2.3 Control cost is counted

Include the energetic cost of using the added control authority, not merely owning it.

### ⟨2⟩2.4 Opportunity cost is not silently ignored

If resources invested in the constraint could otherwise have supported growth, reproduction, storage, or another measured activity, include that penalty separately.

### ⟨2⟩2.5 Matched-extra-resource control

Give the cheaper architecture, where experimentally possible, the same extra material/energy spent by the costly architecture without giving it the architecture itself.

**Failure condition:** the apparent architecture effect is reproduced by extra resource alone.

## ⟨1⟩3 Viable recovery changes causally because of the constraint

### ⟨2⟩3.1 Baseline survivable disturbance set is computed

Compute or estimate `S_tau(c0,B0)` from physical transition dynamics.

### ⟨2⟩3.2 Constraint-bearing survivable disturbance set is computed

Compute or estimate `S_tau(c1,B1)` after charging construction, maintenance, and use.

### ⟨2⟩3.3 The difference is predicted before outcome

Identify at least one perturbation class or recovery target predicted to differ before running the persistence/competition assay.

### ⟨2⟩3.4 Ablation reverses the predicted effect

Remove, disable, or bypass the constraint while keeping other variables as matched as practical.

### ⟨2⟩3.5 Reconstruction restores the effect when feasible

Restore or allow the system to rebuild the constraint and test whether the recovery boundary moves back in the predicted direction.

**Failure condition for ⟨1⟩3:** recovery differences do not track causal interventions on the proposed constraint.

## ⟨1⟩4 Raw reachability is not confused with viable control

### ⟨2⟩4.1 Unsafe transitions are allowed to disappear

The theory permits `c1` to reduce the number or geometric volume of raw reachable states.

### ⟨2⟩4.2 The claimed benefit concerns a declared viable/recovery subset

A gate can improve control by deleting dangerous branches.

### ⟨2⟩4.3 Cybernetic ancestry is acknowledged

Ashby's requisite variety already describes structural limits on regulation; empowerment already provides an information-theoretic measure of potential future control; robust control and viability already distinguish safe from unsafe futures.

**Novelty failure condition:** the proposed result is only a restatement of one of these established quantities.

## ⟨1⟩5 No universal scalar is manufactured from incompatible dimensions

### ⟨2⟩5.1 Work remains a physical cost

Report work or resource expenditure in physically meaningful units.

### ⟨2⟩5.2 Reachability remains set-valued or distribution-specific

Use set inclusion, target reachability, recovery cost, or probability under a declared disturbance distribution.

### ⟨2⟩5.3 Scalarization requires an external criterion

Engineering may supply a design objective. Evolution may supply long-run reproductive growth. Neither comes from the second law alone.

**Failure condition:** a universal “future options per joule” score is asserted without an invariant mapping.

## ⟨1⟩6 Minimal fluctuating-environment proposition

Assume:

- benign log-growth rate `r` for both architectures before constraint cost;
- continuous cost `c > 0` for architecture 1;
- Poisson hazard rate `lambda`;
- per-hazard lineage multipliers `s0`, `s1`, with `0 < s0 < s1 <= 1`;
- `s0` and `s1` are predicted from a physical recovery model rather than fit from competition outcome.

Then

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

Take logarithms and divide by `t`; for a Poisson process, `N(t)/t -> lambda` almost surely; subtract the limiting growth rates.

### ⟨2⟩6.2 Dimensional check

- `c`: inverse time;
- `lambda`: inverse time;
- `ln(s1/s0)`: dimensionless;
- therefore `lambda*` has units inverse time.

### ⟨2⟩6.3 Novelty guardrail

This is a standard multiplicative-fitness consequence under the stated model. The candidate scientific contribution, if any, lies upstream: independent prediction of `s1/s0` from the physical constraint decomposition.

## ⟨1⟩7 Finite-state robust-control toy result

The second committed toy model derives survival coverage from an explicit controller-versus-disturbance graph rather than entering `s0` and `s1` directly.

Under its default parameters:

- base robust survivable severities are `{1,2}`;
- gated robust survivable severities are `{1,2,3,4}`;
- the base architecture has *more* raw reachable states from severity 4 because it includes harmful/lethal branches;
- the gated architecture has fewer raw states but better robust recovery.

This validates a logical possibility only.

**Failure condition:** presenting an invented graph as empirical support for biological constraint structure.

## ⟨1⟩8 Limiting cases

### ⟨2⟩8.1 No capability gain

If `s1 = s0` and `c > 0`, architecture 1 loses.

### ⟨2⟩8.2 No cost

If `c -> 0` with `s1 > s0`, the crossover hazard rate tends to zero.

### ⟨2⟩8.3 No hazards

If `lambda -> 0`, the cheaper architecture wins.

### ⟨2⟩8.4 Harmful constraint

If `s1 < s0`, the added architecture is harmful under the declared disturbance model.

### ⟨2⟩8.5 Correlated/state-dependent hazards

The Poisson result no longer applies directly. Replace it with an appropriate long-run multiplicative-growth/Lyapunov calculation.

### ⟨2⟩8.6 Event-triggered cost

If the controller pays only when activated, continuous `c` is the wrong cost term.

### ⟨2⟩8.7 Finite populations and extinction

Demographic stochasticity and bottlenecks can dominate asymptotic large-population predictions.

### ⟨2⟩8.8 No useful timescale/coarse-graining

If candidate constraints fluctuate on the same scale as every other variable and no reduced architecture description preserves prediction, the constraint decomposition may have no special value.

## ⟨1⟩9 Competing explanations are tested

Compare predictive performance against, as appropriate:

- energy/ATP inventory;
- current dissipation;
- benign growth rate and lag time;
- direct geometric-mean fitness;
- bet-hedging and resource-allocation models;
- metabolic control analysis;
- ordinary resilience/recovery metrics;
- viability/robust-control models without the special constraint decomposition;
- minimum-control-energy models;
- Ashbian requisite-variety measures;
- empowerment or other channel-capacity measures;
- mutual information/sensory capacity;
- control/architecture co-design;
- direct empirical survival curves.

**Failure condition:** a simpler established model predicts held-out outcomes equally well or better.

## ⟨1⟩10 Evidence ladder

### ⟨2⟩10.1 Level A — algebraic sanity

Code reproduces toy results and limiting cases.

### ⟨2⟩10.2 Level B — mechanistic simulation

A separately specified reaction/control model predicts recovery sets from physical parameters.

### ⟨2⟩10.3 Level C — constraint coarse-graining test

Interventions on a candidate constraint move held-out recovery boundaries as predicted while matched-resource controls fail to reproduce the effect.

### ⟨2⟩10.4 Level D — reduced-model value

The constraint decomposition provides useful compression, transfer, or prediction relative to conventional models.

### ⟨2⟩10.5 Level E — evolutionary/operational prediction

A preregistered persistence/selection boundary derived from upstream physical measurements is observed.

### ⟨2⟩10.6 Level F — replication/domain transfer

The same modeling rule succeeds in a second system without redefining the important variables after the fact.

## ⟨1⟩11 Conclusion of the audit

What can currently be claimed:

Physical constraints can alter transition laws, affordable actions, and effective disturbances. Standard reachability and viability theory can represent those effects, including architecture dynamics, by enlarging the state space. Physical architecture has measurable cost. A useful constraint-oriented coarse-graining may shrink raw reachability while improving robust recovery. Under explicit population assumptions, an independently predicted survival advantage can overcome a maintenance cost above a calculable hazard rate.

What cannot currently be claimed:

- a new fundamental force;
- a new general reachability mathematics;
- a universal law maximizing reachability or viability;
- a universal conversion between energy and optionality;
- a thermodynamic derivation of natural selection;
- experimental confirmation that the proposed constraint decomposition adds predictive value.

The research program now succeeds only if the coarse-graining earns itself in data. The mathematics can already contain the recursion. Only intervention, prediction, compression, and transfer can justify treating the selected variables as a scientifically useful constraint architecture.