# Finite-State Reachability Validation

This note records the expected output and interpretation of `reachability_graph_model.py`.

The model is intentionally simple enough to inspect by hand. It is not empirical evidence and it is not a calibrated model of a cell.

## Default parameters

- total per-hazard recovery budget: `4.5`
- gated activation/construction cost charged against that budget: `0.5`
- gated continuous maintenance cost used only in the population threshold: `0.04` log-growth units per unit time
- recovery horizon: `5` control steps
- disturbance severities: integers `1..6`
- severity probability: truncated discrete exponential with scale `2.0`

The probability masses are approximately:

| Severity | Probability |
| ---: | ---: |
| 1 | 0.414085440 |
| 2 | 0.251155515 |
| 3 | 0.152333520 |
| 4 | 0.092394951 |
| 5 | 0.056040370 |
| 6 | 0.033990203 |

## Robust recovery result

For the **base** architecture, robust recovery is guaranteed only from severities

`{1, 2}`.

For the **gated** architecture, after paying the activation charge, robust recovery is guaranteed from

`{1, 2, 3, 4}`.

The resulting disturbance-coverage probabilities are

\[
s_0 = 0.665240956
\]

and

\[
s_1 = 0.909969427.
\]

With continuous maintenance cost

\[
c=0.04,
\]

the Appendix-A population bridge gives

\[
\lambda^*=\frac{0.04}{\ln(s_1/s_0)}\approx0.127688771
\]

hazards per unit time.

## Raw reachability moves in the opposite direction

The point of the model is not simply that the gated architecture survives more disturbances. It is that it does so while allowing **fewer raw outcomes**.

Starting from severity 4 under the default budget and horizon, the base architecture can reach

`{0, 1, 2, 3, 4, 5, 6, failure}`

through some sequence of controller choices and uncontrolled branches.

The gated architecture can reach only

`{0, 1, 2, 3, 4}`.

The gate therefore reduces raw state variety while increasing robust viable disturbance coverage.

That is the first-principles counterexample to any version of the conjecture that equates adaptive capability with the number or volume of reachable states.

## What is actually being validated

The code checks four logical claims:

1. a finite physical budget can make an abstractly available response practically unavailable;
2. removing dangerous uncontrolled branches can shrink raw reachability while increasing robust recovery;
3. a survivable-disturbance probability can be derived from the transition model instead of entered as a free survival parameter;
4. that model-derived probability can feed the already-established fluctuating-environment growth threshold.

The code does **not** validate:

- that real cells have this transition graph;
- that severity is exponentially distributed in a biological environment;
- that the chosen state labels correspond to a sufficient physiological state description;
- that the maintenance and activation costs are realistic;
- that natural selection uses the simplified population assumptions;
- that constraint-selective reachability is more predictive than robust control, viability theory, Ashby's requisite variety, empowerment, or a domain-specific biological model.

## The next mathematical upgrade

The graph should next be generalized from a hand-built toy to a data-estimated stochastic control model.

For a candidate biological system, the required inputs are:

- measured state-transition rates or reaction propensities;
- experimentally justified failure/viability boundaries;
- energy/material costs for actions and maintained constraints;
- a declared disturbance process;
- an independently measured fitness or persistence outcome used only after the physical model has made its prediction.

The key statistical test is out-of-sample prediction of the recovery/selection boundary.

If the transition model is fit using the same competition outcome it is supposed to predict, the exercise is circular.
