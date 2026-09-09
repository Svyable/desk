# Reachability Threshold — Computational Sanity Check

## Status

This is a validation of the **toy model's algebra and implementation only**.

It is not empirical evidence for recursive thermodynamic reachability, constraint-selective reachability, a new law of biology, or a new law of thermodynamics.

The model and derivation are documented in:

- `manuscript/appendix-a-constraint-selective-reachability.md`
- `research/constraint-selective-reachability.tex`
- `research/lamport-proof-reachability.md`
- `research/reachability_threshold.py`

## Default test case

The toy disturbance severity is exponentially distributed with mean 1.

The cheap architecture is assigned a recoverable severity threshold

`h0 = 0.3`.

The constraint-bearing architecture is assigned

`h1 = 1.2`.

Therefore

` s0 = 1 - exp(-0.3) = 0.2591817793 `

and

` s1 = 1 - exp(-1.2) = 0.6988057881 `.

The additional architecture pays a continuous log-growth cost

`c = 0.05` per unit time.

Under the Poisson-hazard model, the analytic crossover is

`lambda* = c / ln(s1/s0)`

which gives

`lambda* = 0.05041119428` hazards per unit time.

## Monte Carlo check

The check below uses 5,000 replicates at each hazard rate, a time horizon of 500, and deterministic seeds `42 + index`. Hazard counts are sampled using a standard-library implementation of Knuth's Poisson sampler.

| Hazard rate λ | Theory Δg | Simulated mean Δg | Fraction of finite runs where architecture 1 wins | Mean hazard count |
|---:|---:|---:|---:|---:|
| 0.010082239 | -0.040000000 | -0.039999443 | 0.0000 | 5.0414 |
| 0.030246717 | -0.020000000 | -0.019909461 | 0.0078 | 15.1690 |
| 0.045370075 | -0.005000000 | -0.004642217 | 0.2872 | 22.8654 |
| 0.050411194 | 0.000000000 | -0.000019831 | 0.4678 | 25.1956 |
| 0.060493433 | +0.010000000 | +0.010104904 | 0.8074 | 30.2996 |
| 0.090740150 | +0.040000000 | +0.039928042 | 0.9988 | 45.3338 |

The largest absolute difference between the theoretical and simulated mean log-growth difference in this run is below the script's default tolerance of `0.003`.

The finite-run win fraction is not expected to be exactly 0.5 at the analytic crossover because the Poisson hazard count is discrete and the condition `delta > 0` is strict. What matters for this check is that the **mean** difference approaches zero at the predicted crossover and changes sign on opposite sides.

## What has actually been validated

The calculation confirms, for the stated assumptions:

1. dimensional consistency of the crossover expression;
2. the analytic sign change in long-run log-growth difference;
3. the standard-library Monte Carlo implementation;
4. the limiting behavior that cheap control wins when hazards are sufficiently rare and costly robust control wins when hazards are sufficiently frequent, provided its per-hazard survival factor is higher.

## What remains completely unvalidated

The important quantities in a real experiment are not yet known:

- the correct biological state variables;
- the viable set `K`;
- the correct disturbance family and distribution;
- the construction and maintenance work of a candidate constraint;
- the correct physical budget;
- whether a reachable/viable-set calculation predicts recovery probabilities better than direct empirical survival curves;
- whether the reachability model adds predictive value beyond bet hedging, geometric-mean fitness, metabolic-control analysis, resilience metrics, minimum-control-energy models, or control/architecture co-design;
- whether a constraint-selection crossover predicted from those physical quantities is observed experimentally.

The toy model therefore belongs at **evidence level A: algebraic/computational sanity**, not at the level of experimental support.

## Reproduction

From the repository root:

```bash
python3 books/the-gradient-universe/research/reachability_threshold.py
```

Optional CSV output:

```bash
python3 books/the-gradient-universe/research/reachability_threshold.py \
  --csv /tmp/reachability-threshold.csv
```

No third-party Python packages are required.
