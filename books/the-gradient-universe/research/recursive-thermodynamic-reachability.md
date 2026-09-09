# Recursive Thermodynamic Reachability

## Status after first-principles reduction

This note records the route by which the manuscript arrived at its current research question. It proposes a research program, not an established law of nature.

A crucial later correction must be stated first.

If process variables satisfy

\[
\dot{x}=f(x,c,e,u)
\]

and architecture variables satisfy

\[
\dot c=g(x,c,e,u),
\]

then the enlarged state \(z=(x,c)\) gives ordinary dynamics \(\dot z=F(z,e,u)\). Standard reachability and viability theory can therefore contain self-modifying architecture through state augmentation.

**Recursive thermodynamic reachability is not claimed as a new mathematical reachability operator.**

The scientifically meaningful residue is a coarse-graining question: whether selected work-maintained variables can be treated as a compact constraint architecture that predicts robust recovery across disturbances with measurable costs, causal intervention effects, useful compression, and transfer beyond the condition in which the variables were identified.

The companion notes [Appendix C](../manuscript/appendix-c-the-conjecture-reduced.md), [extended-state reduction](extended-state-reduction.tex), and [constraint coarse-graining criteria](constraint-coarse-graining-criteria.md) contain the stricter current formulation.

## Historical conjecture

The original central conjecture was that the most informative thermodynamic distinction among some persistent adaptive systems may not be their instantaneous entropy-production rate, power use, or energy throughput. It may instead be how measured work invested in a specific physical constraint changes the system's later *viable reachable states* under finite physical budgets and a declared disturbance process.

The proposed umbrella term was **recursive thermodynamic reachability**: the capacity of a driven system to use present free energy to construct, maintain, remove, or reconfigure constraints that alter its own future physically reachable states.

The proposed measurable effect was **reachability leverage**: a causal change in future viable reachability attributable to a specified constraint after the work and material cost of that constraint are included.

The first-principles pass narrows both phrases. There is no invariant universal “reachability leverage” scalar, and dynamic architecture can be incorporated into an augmented state. The safer primitive is a problem-specific **cost–capability relation** plus a test of whether the selected constraint variables form a useful reduced causal description.

## Why the question remains useful

The second law tells us that irreversible processes produce entropy. It does not tell us why one driven system burns through a resource immediately while another stores it, why one network maintains a selective barrier, why an organism spends energy on repair rather than growth, why a spore can remain nearly inactive yet retain the capacity to restart, or why a brain expends energy modeling futures that may never happen.

Maximum-entropy-production and maximum-power proposals try to fill part of that gap with scalar optimization principles. They are too strong as universal explanations. Batteries are useful because they do not short themselves. Insulation is useful because it reduces heat flow. Dormancy can improve survival by suppressing metabolism. Repair spends energy now to prevent future failure. Redundancy often lowers efficiency.

The better question is not “what quantity does nature maximize?”

It is:

**Which physical structures alter the recovery problem, what do they cost, and can that alteration be predicted before the disturbance occurs?**

That question is not a new law. It is an experimental program.

## Minimal physical statement

Let a system have state \(x(t)\), environment \(e(t)\), and admissible control \(u(t)\). At a chosen coarse-graining, let \(c(t)\) denote physical variables interpreted as architecture because they reshape transition rates, admissible controls, effective disturbances, or costs over the timescale of interest.

Write

\[
\dot{x}=f(x,e,u;c).
\]

Let \(K\) be a predeclared viable set, \(B\) a physical budget, \(\tau\) a horizon, and \(D\) a declared family of disturbances.

For a fixed architecture define a budgeted viable recovery or disturbance set using ordinary reachability/viability machinery. The key comparison is not the raw volume of state space. A useful gate may shrink raw reachability by deleting dangerous transitions.

The proposed empirical question is whether intervention on \(c\) changes that recovery set in the predicted direction after construction, maintenance, activation, and opportunity costs are included.

## What makes a proposed constraint scientifically useful

A candidate constraint variable should pass at least five tests.

**Intervention.** Manipulating the variable changes the relevant transition or recovery boundary.

**Independent cost.** Its physical maintenance/construction cost is measured without fitting the later outcome.

**Predictive compression.** A reduced model using it predicts held-out recovery with fewer effective degrees of freedom, less data, better identifiability, or better accuracy.

**Transfer.** The same decomposition remains useful under another disturbance or intervention not used to define it.

**Competition.** It adds something beyond the appropriate conventional variables and models.

A matched-extra-resource control is especially important. If the comparison system receives the same extra energy/material spent on the architecture and gains the same recovery advantage without the architecture itself, the architecture-specific explanation is unnecessary.

## Relation to existing work

This proposal must not be marketed by pretending its components are unprecedented.

**Reachability and viability.** These are established control-theoretic objects. Lakatos and Stumpf apply reachable-set methods to stochastic biochemical systems: https://doi.org/10.1098/rsos.160790 .

**Energy-feasible control.** Minimum-energy reachability, energetic resilience, and control/architecture co-design already study how physical/control budgets restrict state transfer.

**Cybernetics.** Ashby's requisite variety already captures structural limits on regulation. Conant and Ashby's Good Regulator theorem and later cybernetics occupy neighboring ground.

**Empowerment.** Klyubin, Polani, and Nehaniv define potential future action-to-sensation influence using information-theoretic channel capacity: https://doi.org/10.1109/CEC.2005.1554676 .

**Constraint closure.** Montévil and Mossio formalize biological organization as closure of constraints: https://doi.org/10.1016/j.jtbi.2015.02.029 .

**Viability and information.** Kolchinsky and Wolpert connect semantic information to a viability function: https://doi.org/10.1098/rsfs.2018.0041 .

**Thermodynamics of information/control.** Measurement, feedback, memory, and information flow already have stochastic-thermodynamic treatments.

**Cost versus metabolic control.** Yamagishi and Hatakeyama derive a thermodynamic cost–controllability trade-off in metabolic currency coupling and explicitly connect environmental complexity to the evolutionary value of controllability: https://doi.org/10.1103/4bqh-zhry .

**Non-equilibrium capacity and dormancy.** Hyun Youk proposes retained non-equilibrium capacity in low-activity living systems: https://doi.org/10.1016/j.newton.2025.100358 . Mechanistic dormancy studies already connect ATP and protein aggregation to resuscitation.

**Counterfactual geometry.** 2026 work already treats biological function through accessible unrealized future trajectories: https://doi.org/10.3390/e28030255 .

**Preparedness and bet hedging.** Proteome reserve, growth–lag trade-offs, anticipatory regulation, and fluctuating-environment fitness are established biological topics.

The surviving question is therefore not whether any of these phenomena exist. It is whether one constraint-oriented decomposition adds a transferable predictive compression across them or within a carefully chosen system.

## What would count as a positive result

A strong first result would not attempt to prove a universal law.

It would choose a system with a measurable architecture intervention and a credible baseline model. Before held-out perturbation:

1. define the full state description and the proposed smaller constraint subset;
2. define viability and the disturbance family;
3. measure the cost of the candidate constraint independently;
4. estimate the transition dynamics without using the final recovery/fitness outcome;
5. predict a recovery boundary;
6. ablate the constraint;
7. perform a matched-extra-resource control;
8. test a second disturbance class without redefining the constraint variables;
9. compare against the strongest ordinary domain model.

If the reduced constraint model transfers or compresses while the baselines do not, the decomposition has earned scientific interest.

If not, the appropriate conclusion is that the book supplied a useful synthesis but not a new scientific variable.

## Final status

The original ambition was to find a missing thermodynamic principle of organization.

First-principles reasoning has made that ambition smaller and more defensible.

The mathematics can already contain architecture change. The neighboring fields already contain reachability, viability, control costs, response variety, future-control information, preparation, dormancy, and constraint closure.

What remains is an empirical question about **which coarse-grained physical constraints deserve to be treated as causal architecture because doing so improves prediction of recovery**.

That is the version worth testing.