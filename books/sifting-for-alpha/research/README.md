# Research brief — Sifting for Alpha

## Q23 — verified strongly enough to state as fact

1. Quantiacs identifies Q23 as an **S&P 500 Long-Short** stock contest.
2. The published contest period was **September 1, 2025 through January 1, 2026**.
3. Quantiacs' published winner history lists **Svyable** in the fourth allocation slot for Q23.
4. Quantiacs' prize schedule assigns **$100,000** to fourth place.
5. Quantiacs describes contest ranking as based on live-period **Sharpe ratio**, subject to eligibility rules.
6. Public Quantiacs community material documents Q23 disqualifications/rejections involving manual asset selection and/or high correlation with standard templates, and Quantiacs support emphasized the full S&P 500 universe requirement.
7. A public social-media search result preserves a Sven Hardy Benson post saying he had moved to fourth after disqualifications and secured a $100K allocation. The post mislabels the contest universe as Nasdaq 100; the official Quantiacs records should control on that point.

## Q24 — verified contest result

Quantiacs identifies Q24 as a **Crypto Top-10 Long-Only** contest with a submission deadline of **March 31, 2026** and live contest period of **April 1 through July 31, 2026**.

The public Q24 leaderboard currently records Svyable's best displayed contest result as:

- **Q24_PARAOU_v3** — rank **30**, contest Sharpe **1.50**, in-sample Sharpe **2.23**, max drawdown **-25.62%**, average turnover **4.56%**, no allocation.

The same public leaderboard records multiple Svyable entries whose in-sample Sharpe was strong but contest Sharpe was much weaker, including:

- `Q24_torchy_v22`: IS **2.13**, contest **0.50**.
- `Q24_JPv1`: IS **1.89**, contest **0.12**.
- `Q24_COMBO`: IS **2.59**, contest **-0.24**.
- `Q24_HYBRIDVIPERv21`: IS **1.99**, contest **-0.66**.
- `Q24_TORCHYv1`: IS **2.46**, contest **-1.03**.
- `Q24_ICv69`: IS **2.02**, contest **-1.09**.

This is the strongest evidence for the first epilogue's thesis: Q24 turned the in-sample/out-of-sample distinction into a visible family-level experiment. Do not imply that a high local or platform in-sample Sharpe was the contest result.

Author research archives also contain pre-live and later Q24 research runs with local Sharpes around or above two, including a March 26 Hybrid VIPER + guard-sleeve run at about **2.532 Sharpe / -16.55% max drawdown**. These local research configurations are **not mapped one-for-one to public Q24 strategy IDs** in the surviving record and must be described only as research lineage.

## Q25 — status as of September 5, 2026

Q25 is another **Crypto Top-10 Long-Only** contest. Quantiacs' current published schedule is:

- submissions: **April 1 through September 30, 2026**;
- live contest: **October 1, 2026 through January 31, 2027**;
- maximum running submissions: **50**;
- maximum contest entries: **15**;
- in-sample Sharpe must be **strictly greater than 1 since January 1, 2016**;
- long-only, historical Crypto Top-10 eligibility, positive live performance, and sponsor uniqueness/eligibility checks apply.

There is **no Q25 live contest result yet**. Any public September leaderboard values are submission-period preview/OOS diagnostics, not contest Sharpe and not final rank.

The latest author research archive as of **September 4, 2026**, using data through **August 20, 2026**, keeps a deliberately small active research slate:

1. `V10` — AQR ensemble, Pareto mode.
2. `V11_balanced` — new-only event ensemble.
3. `C165` — mobility / consensus risk.

Specialized alternates:

- `V12` — signed-volume diffusion.
- `CoCrash126` — defensive co-crash shelter.

Ten other names remain conditional or redundant reserves. These are **research priorities, not official platform approvals**.

The matched equal-weight three-name core showed selection Sharpe about **2.461** and post-2024 diagnostic Sharpe about **1.111**, versus about **2.217 / 0.581** for the full fifteen-name inventory. This is descriptive research evidence, not an official Q25 statistic.

The most important Q25 process result is rejection volume:

- Rounds 34–37: **800** preregistered hypotheses, **104** frozen finalists, **7** performance passes, **0** complete qualifications.
- Rounds 38–41: another **800** preregistered hypotheses, **104** frozen finalists, **9** performance passes, **3** originality passes, **0** complete qualifications.

Across those eight late research rounds: **1,600 new hypotheses, 208 frozen finalists, zero additions to the active slate**.

The latest Round 41 session-decomposition family produced genuine pre-2025 near-misses but failed the post-2024 diagnostic veto. Do not rescue a candidate by selecting a different regime variant after seeing that inversion; the archive explicitly treats post-2024 data as reused, veto-only diagnostics rather than fresh validation.

## Research lineage recovered from prior work

These are useful as the development trail, not automatically as attributes of the final allocated Q23 submission or later public Q24/Q25 entries.

- Early S&P 500 work tested a **9-day SMA versus 9-day EMA crossover** with liquidity filtering and normalized weights.
- A recorded 2006-01-01 through 2024-12-27 backtest of that early experiment had **Sharpe -0.3590555553**, equity **0.408446**, max drawdown **-0.666063**, volatility **0.128482**, average turnover about **0.31246**, and average holding time about **6.58 days**.
- Other work explored **50-day versus 200-day moving averages**, RSI, ROC, ATR, realized volatility, multi-horizon momentum, mean reversion, and long/short overlays.
- Some strategy designs used **10% per-asset caps** and Quantiacs liquidity filters such as `is_liquid`.
- One prior long-short research concept blended **5-day momentum** with a **20-day z-score mean-reversion** signal, used top/bottom cross-sectional buckets, and volatility scaling.
- A later contemporaneous Q23 description referred to roughly **20 factors**, information-coefficient ranking, and a concentrated top-stock basket. The surviving note does not prove that this was the exact finally allocated system.
- The author later described having been "so close to winning Q23" and believed the strategy had the highest gross return, **20.6%**. Treat this as the author's contemporaneous claim, not as the contest's ranking metric.
- Q24 research expanded into online/meta-allocation, risk controls, VIPER/HELIOS variants, Supertrend, residual/IC approaches, blockchain-data experiments, and long-only Crypto Top-10 portfolio construction. Public contest IDs should control whenever the prose describes actual Q24 ranking.
- Q25 research became substantially more formal: preregistered factories, pre-2025 selection freezes, stress-cost ladders, archive-correlation gates, hash-locked evidence, prefix-invariance checks, roster marginal tests, and explicit no-promotion decisions.

## Fact-check queue before publication

### Q23

- Exact ID and title of the finally allocated Svyable Q23 strategy.
- Final contest Sharpe ratio.
- Final live-period equity return according to Quantiacs.
- Max drawdown and turnover of the allocated strategy.
- Exact count and names of factors in the allocated strategy.
- Whether the allocated strategy was long-short in realized positions or merely eligible for a long-short contest.
- Exact mechanism by which other higher-ranked strategies were disqualified and the dates the official allocation ordering became final.
- Exact payout history after allocation; do not confuse a $100,000 capital allocation with guaranteed prize cash.

### Q24

- Preserve a dated export or screenshot of the final Q24 leaderboard in case Quantiacs later changes historical display fields.
- Recover exact source hashes / account strategy IDs linking major local Q24 research families to their final public submissions where possible.

### Q25

- Final selected account IDs and source hashes before October 1.
- Official cleaner/checker/multipass results for the selected entries.
- Official sponsor correlation/uniqueness status.
- Final live-period contest Sharpe, rank, and allocation after January 31, 2027.
- Do not rewrite this pre-live epilogue after the result; add a dated post-contest coda so the precommitment remains visible.

## Editorial red lines

- Do not call the Q23 fourth-place allocation a $100,000 cash prize. It was an allocation under Quantiacs' funding model.
- Do not state that the final Q23 system used a specific historical experiment unless a primary record ties it to that submission.
- Do not list supposed live holdings without a portfolio export.
- Do not use today's index membership as a proxy for a historical eligible universe.
- Do not imply that one contest result proves persistent investable alpha.
- Do not turn contest disqualifications into accusations of wrongdoing by named competitors; describe the published rule process neutrally.
- Do not call Q25 preview or OOS display values "live contest performance" before October 1, 2026.
- Do not convert local Q24/Q25 research metrics into official platform metrics.
- Do not promote a Q25 candidate using post-2024 data that has already been observed repeatedly by the research program.

## Book thesis to protect

**Alpha is what remains after weak explanations, fragile signals, hindsight, concentration, search bias, duplicated factor families, and rule-breaking shortcuts have been sifted away.**

Q23 proves the process can produce a funded result. Q24 proves that a successful process can still fail to place when the asset class and live period change. Q25, before the live bell, shows the process learning to reject more of its own output rather than treating every historically attractive model as another source of alpha.
