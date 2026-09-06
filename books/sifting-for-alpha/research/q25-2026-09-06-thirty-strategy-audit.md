# Q25 research audit — September 6, 2026

This note records the provenance behind the manuscript field note **Thirty Files, One Problem**.

It is a research snapshot, not a Quantiacs contest result and not sponsor approval.

## Primary recovered research artifact

Author research archive: `twenty_strategy_report.md`, created September 6, 2026.

Cached sponsor OHLCV in that audit ends **August 20, 2026**. The measured period is January 1, 2016 through August 20, 2026 with one-bar execution and 4% of ATR14 costs unless otherwise labeled.

## What the audit establishes

- Twenty additional self-contained notebook/Python strategy pairs were recovered, extending the prior ten-file pack to thirty candidate files.
- All 20 additional candidates passed the local implementation audit.
- All 20 exceeded historical Sharpe 1 in the frozen replay.
- 16 of 20 passed the internal preparation screen.
- 4 remained explicitly research-only.
- No candidate was submitted, promoted as new independent alpha, or cleared by the sponsor uniqueness service as part of this audit.
- The established first-line research priority remained **V10, corrected V11, and C165**.

## Internal preparation screen

The frozen preparation screen required:

- historical Sharpe > 1;
- Cost12 Sharpe >= 0.6, where Cost12 means an internal stress of 12% of ATR14;
- maximum drawdown >= -50%;
- positive Sharpe in each of 2016–18, 2019–21, and 2022–24;
- nonnegative calendar-2025 Sharpe;
- nonnegative combined post-2024 Sharpe.

Only the historical Sharpe hurdle is tied directly to the contest-specific threshold. The other criteria are internal research gates.

The 2025/2026 periods had already been observed by the broader research program and are therefore adverse/reused diagnostics, not a fresh holdout.

## Research-only candidates

- **DefensiveVolume** — failed calendar-2025 and combined post-2024 nonnegative gates.
- **LowMarketBeta** — failed combined post-2024 nonnegative gate.
- **DefensiveMix** — failed combined post-2024 nonnegative gate.
- **SmallNotional** — failed calendar-2025 and combined post-2024 nonnegative gates.

Their historical Sharpes remained above one; the research-only label exists because the wider frozen gate stack was not satisfied.

## Redundancy result

Different formulas were often strongly correlated with the prior ten strategy streams.

Examples:

- LowPriceImpact / HighLiquidity: full correlation 0.994; reused-recent correlation 0.997.
- Breakout63 / PeakResilience: full 0.977; reused recent 0.993.
- MomentumCore / OnlineExperts: full 0.975; reused recent 0.987.
- StaticBlend / OnlineExperts: full 0.969; reused recent 0.977.

The thirty-stream correlation-matrix participation ratio was **1.77**, versus **2.62** for the original ten.

This is a descriptive concentration statistic only. It is not an effective-trials estimate, sponsor rule, or probability of contest success.

Among additions passing the preparation screen, **Calm, TailSafety, and LowVolatility** had the lowest maximum pre-2025 correlations to the original ten and were identified as more useful candidates to inspect if the goal is a less redundant reserve.

## Calm snapshot

The September 6 frozen replay reported for **Calm**:

- historical Sharpe: 1.273;
- CAGR: 6.70%;
- max drawdown: -8.03%;
- Cost10 Sharpe: 1.117;
- Cost12 Sharpe: 1.064;
- worst broad pre-2025 fold: 0.927;
- calendar-2025 Sharpe: 0.500;
- reused post-2024 Sharpe: 0.387;
- maximum pre-2025 correlation to original ten: about 0.786;
- maximum reused-recent correlation to original ten: about 0.688.

Earlier Round 2 research had shown a short Q25-preview Sharpe around -0.058 for Calm. That preview was a warning, not a fresh validation result and not a contest Sharpe.

## Implementation audit

The final twenty exports were re-audited after documented preparation fixes.

- 20 independent source comparisons passed.
- 100 sampled causal-prefix comparisons showed exactly zero target drift after the documented observed-price/liquidity mask and declared name cap.
- 80 exact cost-accounting comparisons agreed with the independent translation to machine precision (maximum daily disagreement 4.44e-16).
- Maximum name weight was 25%.
- Maximum gross exposure was 95%.
- Forbidden exposure was zero.
- Default notebook behavior performed no external correlation call or contest submission.

Two recovered strategies originally exceeded the declared common 25% name-cap boundary: FlowBreakout and AdaptiveTrend. Their exported targets were clipped to the already-declared policy and excess retained as cash. This was recorded as a sizing-policy correction, not alpha-formula identity.

Other mechanical incidents — provenance ordering, runtime repair, import-path correction, and rolling-skew handling on absent columns — were retained in the audit rather than erased.

## What remains unverified

This local September 6 audit did **not** establish:

- fresh hosted current-data results;
- official `qnt.output` hosted clearance for every file;
- hosted multipass status;
- account-level contest eligibility;
- sponsor correlation/uniqueness clearance;
- Q25 submission status for these twenty additional files;
- live Q25 performance.

Q25 live scoring is scheduled to begin October 1, 2026 and end January 31, 2027. Submission-period preview/OOS displays before October 1 are not live contest results.

## Editorial use

Use this audit to support the following claims in the book:

1. more historically qualifying strategy files did not imply more independent alpha;
2. the expanded archive was heavily redundant;
3. internal preparation passes were not treated as automatic promotions;
4. failed recent gates remained visible;
5. local implementation/causality evidence was kept distinct from sponsor-hosted clearance;
6. the established V10 / corrected V11 / C165 priority was not displaced merely because twenty additional files were recovered.
