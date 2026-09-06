# Back Matter — The Sifter Scorecard

This is the part of the book meant to get dirty.

Print it. Copy it into a notebook. Turn it into a pull-request template. Use it before a strategy earns live capital.

The scorecard is intentionally not numerical. A false 8.7 out of 10 is worse than an honest sentence.

## 1. Hypothesis

**What is the proposed source of predictive information?**

Write one paragraph without showing a chart or mentioning the backtest result.

**What would make the hypothesis stop being plausible?**

If the answer is "nothing," this is a belief, not a hypothesis.

## 2. Historical ignorance

- Does the universe use membership information available at each historical date?
- Are liquidity and eligibility dynamic through time?
- Are fundamental or alternative data lagged to realistic publication dates?
- Does any preprocessing accidentally use future observations?
- Is the assumed execution price knowable when the trade decision is made?

**Red flag:** any current list of "good" assets being projected backward.

## 3. Feature audit

For every factor:

| Factor | Latent bet | Horizon | Normalization | Expected sign | Failure regime |
|---|---|---:|---|---|---|
| Example: medium momentum | continuation / underreaction | 60d | cross-sectional rank | + | sharp reversal |

Then ask:

- Which factors are measuring the same latent bet?
- Which factor can be removed with little change?
- Which factor adds information after the others?

## 4. Predictive audit

Before portfolio construction, inspect:

- cross-sectional information coefficient;
- rank monotonicity;
- IC through time;
- IC by regime;
- lag decay;
- top-versus-bottom spread;
- factor correlations;
- incremental value.

Do not let the portfolio hide a factor that knows nothing.

## 5. Parameter neighborhood

For every important parameter, test a sensible neighborhood.

Record whether performance is:

- a broad plateau;
- a gentle slope;
- unstable;
- a single needle.

Needles require extraordinary justification.

## 6. Portfolio audit

- How many names are held?
- What is the maximum single-name weight?
- What are gross and net exposures?
- What are sector and factor exposures?
- How much return comes from the largest contributor?
- Does equal weighting perform similarly to optimized weighting?
- What happens under a 10% per-asset cap?
- What happens when the best stock is removed?

## 7. Risk audit

Report at least:

- total/annualized return;
- Sharpe;
- maximum drawdown;
- drawdown duration;
- volatility;
- turnover;
- concentration;
- exposure ranges;
- worst relevant period;
- out-of-sample performance.

Always include one metric you wish were better.

## 8. Hostility test

Re-run with intentionally worse assumptions:

- higher costs;
- delayed execution;
- stricter liquidity;
- lower position caps;
- reduced leverage;
- a shifted rebalance day;
- the best period removed;
- the largest contributor removed.

A strategy needs margin between its theoretical edge and reality.

## 9. Outside-time test

Before seeing the period, record:

- frozen code hash/version;
- frozen data definitions;
- primary metric;
- acceptable range;
- kill/review criteria;
- allowed adaptive behaviors.

Then do not rewrite yesterday.

## 10. Operational audit

- Does the code run reliably within required limits?
- Can every position be traced to a deterministic data path?
- Does universe selection comply with the mandate or contest rules?
- Is the strategy free of prohibited manual asset selection?
- Are data dependencies reproducible?
- Is expected capacity compatible with intended capital?
- Are logs sufficient to reconstruct decisions later?

## 11. Narrative audit

Write two summaries.

### The pitch

Why should anyone believe this strategy deserves another test?

### The prosecution

Why might the result be overfit, lucky, crowded, fragile, or operationally invalid?

Do not write the prosecution as a straw man. Make it strong enough that you would hesitate before allocating capital.

If the strategy survives both documents, proceed.

---

# Minimal alpha-sifter pseudocode

The following is conceptual pseudocode, not the Q23 winning submission and not a trading recommendation.

```python
# 1. Load a historically valid universe.
data = load_historical_universe()
eligible = historical_membership(data) & historical_liquidity(data)

# 2. Compute candidate signals using information available at t.
features = {
    "momentum_short": momentum(data, horizon="short"),
    "momentum_medium": momentum(data, horizon="medium"),
    "reversal": mean_reversion(data),
    "rsi": rsi(data),
    "roc": rate_of_change(data),
    "volatility": realized_volatility(data),
}

# 3. Normalize cross-sectionally and remove invalid observations.
features = robust_rank_or_zscore(features, eligible)

# 4. Measure factor usefulness only on past observations.
quality = trailing_information_coefficient(features)

# 5. Combine simply first; adaptive weighting must beat this baseline.
score_static = equal_weight(features)
score_adaptive = bounded_quality_weight(features, quality)

# 6. Rank assets; do not manually pick ticker symbols.
rank = cross_sectional_rank(score_static)

# 7. Convert ranking into a diversified portfolio.
weights = portfolio_from_rank(rank)
weights = volatility_scale(weights, data)
weights = apply_position_cap(weights, max_abs_weight=0.10)
weights = weights * eligible
weights = normalize_exposure(weights)

# 8. Audit before believing.
assert no_future_information(features)
assert historical_universe_is_valid(eligible)
run_cost_stress(weights)
run_parameter_neighborhoods()
run_out_of_sample_test()

# 9. Freeze before live evaluation.
write_manifest(code_hash, data_schema, parameters, objective, kill_criteria)
```

The point is not the functions.

The point is the order.

Universe before signal.

Signal before portfolio.

Portfolio before celebration.

Hostility before capital.

Timestamp before live data.

---

# Research questions worth carrying into the next contest

1. Does recent factor IC contain enough persistence to justify adaptive weighting after turnover?
2. Is a concentrated tail portfolio genuinely harvesting stronger rank information, or merely amplifying sample luck?
3. How much of historical performance survives sector and common-factor neutralization?
4. How stable is the strategy if the exact rebalance day is shifted?
5. How much performance disappears under conservative execution assumptions?
6. Does the model's advantage come from ranking, sizing, or market exposure?
7. What is the empirical optimism gap between the research pipeline's in-sample and out-of-sample Sharpes?
8. Which failed models keep being rediscovered under new names?
9. At what capital level does liquidity turn the edge into impact?
10. What would have to happen for us to admit the underlying hypothesis is no longer true?

---

# Acknowledgments

To every strategy that looked wonderful until a better test was invented: thank you for your service.

To the ugly backtests: you were cheaper than overconfidence.

To the live market: rude, but useful.

And to fourth place: close enough to be thrilling, imperfect enough to remain educational.

---

# Disclaimer

This book describes quantitative-research methods, historical experiments, and a past contest result. It is educational material, not individualized investment advice, an offer to manage money, or a recommendation to buy or sell any security. Historical and contest performance do not guarantee future results. Examples and pseudocode are simplified and may omit transaction costs, taxes, financing, market impact, borrow availability, corporate actions, and other real-world constraints unless explicitly stated.
