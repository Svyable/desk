# Chapter 15 Audit — From Signal to Operational Forecast

This audit freezes the transition the manuscript requires before any proposed earthquake precursor can be described as operationally useful.

## 1. Four different objects

Keep these separate:

1. **Signal** — a change in measured data.
2. **Precursor** — a signal statistically associated with a future earthquake under a defined event class.
3. **Forecast** — a probability distribution over future time, space and magnitude.
4. **Warning / action** — a policy decision made using the forecast plus a loss function.

A case-control association does not directly produce an absolute probability because the study design conditions on selected cases and controls rather than the real prevalence of imminent-earthquake windows.

## 2. Current operational control case: USGS aftershock forecasting

Authoritative pages:

- USGS Aftershock Forecast Overview: https://earthquake.usgs.gov/data/oaf/overview.php
- USGS scientific background: https://earthquake.usgs.gov/data/oaf/background.php
- USGS 2026 OAF product/software documentation: https://www.usgs.gov/software/pdl-products-operational-aftershock-forecasting

USGS operational aftershock forecasts expose the structure a precursor model would eventually need:

- magnitude thresholds;
- explicit future windows (day / week / month / year);
- probability of one or more target events;
- expected counts;
- tectonic-region priors / generic parameters;
- sequence-specific updating;
- model parameters and machine-readable output;
- scheduled updates as the sequence evolves.

The statistical framework is built from Reasenberg–Jones aftershock-rate models and, in some products, ETAS-style models. Generic tectonic-region behavior can serve as a prior; observations from the active sequence update productivity estimates.

### Dated 2026 example

USGS forecast for the M5.0 event 83 km SSW of Unalaska, Alaska, issued August 29, 2026:

https://earthquake.usgs.gov/earthquakes/eventpage/aka2026lpwwmi/oaf/forecast

Probability of at least one M5+ aftershock:

- **1 day:** about 1 in 30,000
- **1 week:** about 1 in 4,000
- **1 month:** about 1 in 1,000
- **1 year:** about 1 in 200

The value of the example is not the specific sequence. It is the format: probability, magnitude, time and region are all explicit enough to score.

## 3. Prospective test architecture: CSEP

CSEP exists to test earthquake forecasts prospectively rather than letting algorithms define success after observing the target catalog.

- SCEC CSEP overview: https://southern.scec.org/research/csep
- Taroni et al. 2018 prospective Italy evaluation: https://doi.org/10.1785/0220180031

The Italy experiment tested forecasts over one-day, three-month and five-year windows on earthquakes that occurred after model submission. This is the relevant architecture for precursor claims.

A serious precursor experiment should ask:

> Given the baseline seismicity forecast available at time t, does adding the candidate precursor improve prospective probability estimates for future space–magnitude–time bins under a proper scoring rule?

That formulation forces several questions that case-control papers can postpone:

- What is the baseline event rate?
- What spatial region counts as a hit?
- What magnitude threshold counts?
- What future window counts?
- How are repeated alarms scored?
- How are false alarms penalized?
- Does the precursor add information beyond aftershocks / foreshocks / ordinary seismicity?
- Is the probability calibrated?
- Does performance survive another region without retuning?

## 4. QuakeFinder / Google 2022 boundary

Heavlin et al. 2022 should remain classified as a held-out **association / existence test**, not an operational forecast.

The study's 10 training and 9 test earthquakes provide a stronger temporal boundary than most retrospective precursor work, but the case-control design does not itself estimate continuous-time absolute earthquake probability.

A next-generation test should freeze the 2022 feature family, run continuously on genuinely future magnetometer data, combine it with a seismicity-only forecast, and score incremental probability gain without retraining on the target ruptures.

## 5. Defeat condition

The manuscript's optimistic precursor synthesis should weaken substantially if a candidate electromagnetic feature repeatedly shows case-control separation but fails to improve prospective probabilistic forecasts beyond seismicity-only baselines under independent regional testing.

That failure would mean the signal may be physically real or rupture-associated yet operationally redundant.

A real signal is not entitled to become a warning.