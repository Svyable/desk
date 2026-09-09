# Benchmark Data Access — Proteome Reserve

The first adversarial benchmark chosen for the constraint-coarse-graining program is Mori et al. (2017), **“Quantifying the benefit of a proteome reserve in fluctuating environments.”**

Primary article:

https://doi.org/10.1038/s41467-017-01242-8

## Why this is a good null test

The paper already does much of what a weak version of the book's conjecture would try to claim.

It quantifies a present proteome-allocation cost, measures excess ribosomal capacity, models transition kinetics after a nutrient upshift, and derives a trade-off between present resource allocation and future response. The paper reports a parameter-free comparison for the relation

\[
\lambda_0=\phi_R^i\frac{\lambda_f}{\phi_R^f},
\]

where the initial R-sector fraction predicts the initial post-upshift growth acceleration using independently measured final-state quantities.

That makes it an unusually strong benchmark. A new constraint-oriented model should not be allowed to “discover” that ribosome reserve helps future adaptation.

## Data-access result

The public article states:

> The data that support the findings of this study are available from the corresponding author on request.

The electronic supplementary information contains Supplementary Table 2 with the ten nutrient-upshift conditions and fitted transition-rate values, but the article does not expose the full underlying time-series dataset as a public machine-readable data package.

The manuscript research process should therefore **not** digitize plotted points and treat them as clean source data.

Figure digitization would mix plotting resolution, image transforms, and extraction error into a benchmark whose purpose is to test model discrimination. That is avoidable because the corresponding author can be asked for the data.

## What can already be checked without requesting data

The published text supplies several independently stated quantities useful for a preliminary algebraic audit:

- pre-shift growth rates span approximately `0.06/h` to `0.91/h` across ten upshifts;
- final rich-medium growth rate is reported as `2.45 ± 0.2 /h`;
- final R-sector mass fraction is reported as `0.50 ± 0.01`;
- the implied slope `lambda_f / phi_R^f` is reported as `4.9 ± 0.4 /h`;
- for the slow aspartate condition, `lambda_i = 0.06 ± 0.03 /h` and fitted `lambda_0 = 0.52 ± 0.07 /h`;
- the R-sector offset rate is reported near `0.43/h`.

These values are sufficient to verify the paper's stated dimensional relationships and order of magnitude. They are **not** sufficient for a fair out-of-sample model-comparison exercise across all conditions.

## Data request needed for the real benchmark

For a legitimate benchmark, request at minimum:

1. the ten upshift time series used to fit `lambda_0`;
2. the corresponding pre-shift R-sector fractions and uncertainties;
3. pre- and post-shift growth-rate measurements;
4. replicate-level data if available rather than only condition means;
5. any metadata needed to reproduce the fitting procedure in Eq. (7);
6. the famine–feast data used for the reserve/fitness trade-off analysis if those data are separate.

The benchmark should then be preregistered before looking at the held-out conditions.

## Proposed benchmark design once data are available

Split conditions or replicates into fitting and held-out sets.

Fit/estimate:

- the conventional published proteome-allocation/transition model;
- a generic data-driven predictive model with comparable complexity;
- the proposed constraint-oriented reduced model, where R-sector reserve is treated as a candidate maintained architecture variable.

Then compare:

- held-out transition-kinetic prediction;
- parameter count/effective complexity;
- calibration uncertainty;
- transfer from one nutrient-shift severity to another;
- whether the constraint vocabulary produces any prediction not already present in the published resource-allocation model.

## Expected outcome

The prior expectation should be that the original domain model wins or ties.

That is why this is a good benchmark.

If constraint-selective language merely reproduces Mori et al.'s mechanism, it has passed a consistency test and earned no novelty.

If it fails even to reproduce the known relation, the formalism needs revision before it is applied to harder systems.

## Research-integrity rule

Do not reconstruct benchmark observations from plotted pixels when the source data are available on request and model discrimination depends on small quantitative differences.

A negative result caused by clean data is useful.

A positive result caused by digitization artifacts is not.