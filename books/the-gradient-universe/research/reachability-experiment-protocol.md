# Experimental Protocol — Constraint-Selective Reachability

## Purpose

Design one experiment capable of making the reachability conjecture lose.

The target result is not “regulated cells survive stress better.” That is already ordinary biology.

The target result is stronger and more specific:

1. measure the physical cost of an added, self-produced constraint architecture;
2. predict from mechanism which perturbations remain viably recoverable under that architecture and a matched budget;
3. convert that predicted recovery difference into a preregistered environmental crossover;
4. observe whether selection changes near that crossover;
5. compare the prediction against simpler established models.

## Preferred first system

Use an engineered microbial system in which a regulatory or storage architecture can be added, removed, or tuned without changing large numbers of unrelated traits.

Good candidate classes include:

- inducible reserve/storage pathways;
- stress-response regulators with measurable expression cost;
- alternative electron-acceptor or carbon-source switching circuitry;
- controllable membrane transport or ion-homeostasis modules;
- synthetic compartment/localization systems;
- regulatory separation between two metabolic currency pools.

The exact system should be chosen with a domain laboratory because the cleanest genetic perturbation matters more than rhetorical fit with the book.

## Architecture pair

Define:

`A0`: low-cost baseline architecture.

`A1`: architecture containing one additional constraint/control feature.

Requirements:

- the structural difference must be physically identifiable;
- its energetic/material cost must be measurable or tightly bounded;
- it must change a known transition, control input, transport route, or recovery mechanism;
- it must be possible to ablate or disable the feature without rebuilding the entire organism.

## System boundary

Declare the physical system boundary before data collection.

For a microbial chemostat or turbidostat experiment, the boundary should specify whether the accounting includes:

- cellular ATP turnover;
- substrate uptake;
- secreted metabolites;
- oxygen or alternative electron acceptors;
- maintenance respiration;
- biomass synthesis;
- regulatory protein production;
- medium replacement and dilution.

Do not change the boundary after discovering an inconvenient cost.

## Viable region

Define the viable state region `K` from independent measurements.

Possible coordinates:

- membrane potential;
- ATP/ADP or adenylate energy charge;
- intracellular pH;
- NADH/NAD+ or another redox ratio;
- osmotic state;
- growth resumption within a fixed time;
- membrane integrity;
- a preregistered damage marker.

A state counts as recovered only if it meets the declared criteria.

Colony formation alone may be too coarse for the mechanistic phase, though it can remain an ultimate fitness measurement.

## Disturbance family

Choose a perturbation with a continuously tunable severity so the recovery boundary can be mapped rather than merely classified.

Examples:

- oxidative stress dose;
- osmotic shock;
- transient pH shift;
- nutrient deprivation duration;
- electron-acceptor withdrawal;
- temperature pulse;
- membrane depolarization pulse.

Let disturbance severity be `a`.

Before evolutionary competition, estimate for each architecture the set

`D_i = {a : a viable recovery trajectory exists within the declared resource budget}`.

The experiment should test points below, near, and above the predicted boundary of each `D_i`.

## Cost accounting

Estimate at least three costs separately.

### Construction cost

Resources required to synthesize the added regulator, transporter, reserve polymer, membrane component, compartment, or other architecture.

### Maintenance cost

Steady resource draw needed to preserve the architecture when no perturbation occurs.

### Activation/control cost

Additional expenditure during stress response or recovery.

Convert these to a common physical currency where possible, such as ATP equivalents or substrate-derived free energy. Also measure the benign-condition growth penalty directly.

Do not assume those two measurements are interchangeable. The mapping from energetic expenditure to reproductive cost is itself biological.

## Reachability model

Construct the smallest mechanistic model that can predict recovery.

Depending on the system this may be:

- a stochastic reaction network;
- a flux-balance or kinetic metabolic model with explicit constraints;
- a Markov jump model;
- a low-dimensional ODE model;
- a hybrid control model.

The model must generate `D_0` and `D_1` without using the eventual competition result.

For each disturbance severity, ask whether there exists an admissible trajectory that:

1. remains inside or returns to `K` according to the preregistered recovery rule;
2. respects the physical budget;
3. uses only controls actually available to that architecture.

## Disturbance distribution

Choose a family of environmental schedules characterized by a hazard rate `lambda` or switching timescale.

Keep the **mean resource supply** as matched as practical across treatments while varying temporal structure.

This is important. Otherwise a regulated architecture might win simply because its environment contains more food on average.

If disturbance severities follow a distribution `mu`, predict

`s_i = mu(D_i)`.

The simple Poisson-hazard model then predicts

`lambda* = c / ln(s1/s0)`

when the two architectures have equal pre-cost benign growth and `c` is the continuous log-growth penalty of `A1`.

If the real system violates those assumptions, derive the appropriate long-run multiplicative-fitness model before running the selection experiment.

## Preregistered predictions

At minimum preregister:

1. the direction and magnitude of the benign-condition cost of `A1`;
2. the predicted recovery boundary `D_0`;
3. the predicted recovery boundary `D_1`;
4. the predicted survival/recovery probabilities under each disturbance distribution;
5. the predicted crossover `lambda*` or switching-timescale boundary;
6. the tolerance interval within which the model will count as successful;
7. the competing models and evaluation metric.

## Competition phase

Compete `A0` and `A1` across environmental schedules spanning both sides of the predicted crossover.

Use enough independent populations to estimate uncertainty rather than relying on one trajectory.

Track genotype/architecture frequencies over many environmental cycles.

The key result is the long-run multiplicative growth or selection coefficient, not the short-term population spike after one favorable interval.

## Ablation test

Disable the added constraint in `A1` while preserving as much of the genetic and experimental background as possible.

The predicted extension of `D_1` should contract toward `D_0` or otherwise change in the preregistered direction.

If it does not, the supposed constraint is probably not the causal source of the reachability effect.

## Matched-budget test

A particularly strong control is to give `A0` the resources that `A1` spends on its constraint without giving it the constraint itself.

If extra energy inventory alone reproduces the recovery advantage, the reachability interpretation is unnecessary.

The conjecture becomes interesting when architecture matters after resource quantity is matched.

## Competing models

The reachability model must be compared against at least:

- benign growth-rate difference;
- direct empirical survival curves;
- geometric-mean-fitness models;
- microbial bet-hedging or phenotype-switching models when applicable;
- standard metabolic-control analysis;
- recovery time or other ordinary resilience metrics;
- minimum-control-energy calculations;
- architecture/control co-design metrics where applicable.

The new framework earns value only if it improves out-of-sample prediction or yields a useful mechanistic variable those models omit.

## Strong failure results

Treat the following as informative failures, not inconveniences:

- `D_1` is not larger or more favorable than `D_0` in the preregistered region;
- the constraint's cost exceeds the predicted benefit at every tested schedule;
- ablation leaves the recovery repertoire unchanged;
- the crossover moves when state coordinates are rescaled because the metric depended on arbitrary volume;
- a matched extra-energy control reproduces the entire effect;
- a simple survival curve predicts selection as well as the physical reachability model;
- the predicted `lambda*` is not observed within the declared tolerance;
- the theory works only after redefining viability, the horizon, or disturbance distribution.

## Strong success result

The most convincing first result would look modest.

A physical model predicts that an added self-produced constraint extends the budget-admissible recovery set from `D_0` to `D_1`.

Independent metabolic measurements establish its cost.

Those two measurements imply a crossover in environmental switching rate.

The competition experiment crosses near that boundary.

Ablation removes the effect.

Matched extra fuel does not reproduce it.

And simpler established models do not predict the crossover as accurately without fitting the competition outcome.

That would not prove a universal law.

It would establish one clean instance in which present thermodynamic expenditure on a physical constraint predicts future viable control and its evolutionary value.
