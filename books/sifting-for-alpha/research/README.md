# Research brief — Sifting for Alpha

## What is verified strongly enough to state as fact

1. Quantiacs identifies Q23 as an **S&P 500 Long-Short** stock contest.
2. The published contest period was **September 1, 2025 through January 1, 2026**.
3. Quantiacs' published winner history lists **Svyable** in the fourth allocation slot for Q23.
4. Quantiacs' prize schedule assigns **$100,000** to fourth place.
5. Quantiacs describes contest ranking as based on live-period **Sharpe ratio**, subject to eligibility rules.
6. Public Quantiacs community material documents Q23 disqualifications/rejections involving manual asset selection and/or high correlation with standard templates, and Quantiacs support emphasized the full S&P 500 universe requirement.
7. A public social-media search result preserves a Sven Hardy Benson post saying he had moved to fourth after disqualifications and secured a $100K allocation. The post mislabels the contest universe as Nasdaq 100; the official Quantiacs records should control on that point.

## Research lineage recovered from prior work

These are useful as the development trail, not automatically as attributes of the final allocated Q23 submission.

- Early S&P 500 work tested a **9-day SMA versus 9-day EMA crossover** with liquidity filtering and normalized weights.
- A recorded 2006-01-01 through 2024-12-27 backtest of that early experiment had **Sharpe -0.3590555553**, equity **0.408446**, max drawdown **-0.666063**, volatility **0.128482**, average turnover about **0.31246**, and average holding time about **6.58 days**.
- Other work explored **50-day versus 200-day moving averages**, RSI, ROC, ATR, realized volatility, multi-horizon momentum, mean reversion, and long/short overlays.
- Some strategy designs used **10% per-asset caps** and Quantiacs liquidity filters such as `is_liquid`.
- One prior long-short research concept blended **5-day momentum** with a **20-day z-score mean-reversion** signal, used top/bottom cross-sectional buckets, and volatility scaling.
- A later contemporaneous Q23 description referred to roughly **20 factors**, information-coefficient ranking, and a concentrated top-stock basket. The surviving note does not prove that this was the exact finally allocated system.
- The user later described having been "so close to winning Q23" and believed the strategy had the highest gross return, **20.6%**. Treat this as the author's contemporaneous claim, not as the contest's ranking metric.

## Fact-check queue before publication

These should be filled only from primary records, exports, notebooks, or Quantiacs pages—not memory.

- Exact ID and title of the finally allocated Svyable Q23 strategy.
- Final contest Sharpe ratio.
- Final live-period equity return according to Quantiacs.
- Max drawdown and turnover of the allocated strategy.
- Exact count and names of factors in the allocated strategy.
- Whether the allocated strategy was long-short in realized positions or merely eligible for a long-short contest.
- Exact mechanism by which other higher-ranked strategies were disqualified and the dates the official allocation ordering became final.
- Exact payout history after allocation; do not confuse a $100,000 capital allocation with guaranteed prize cash.

## Editorial red lines

- Do not call the fourth-place allocation a $100,000 cash prize. It was an allocation under Quantiacs' funding model.
- Do not state that the final Q23 system used a specific historical experiment unless a primary record ties it to that submission.
- Do not list supposed live stock picks without a portfolio export.
- Do not use today's S&P 500 membership as a proxy for the historical eligible universe.
- Do not imply that fourth place proves persistent investable alpha.
- Do not turn contest disqualifications into accusations of wrongdoing by named competitors; describe the published rule process neutrally.

## Book thesis to protect

**Alpha is what remains after weak explanations, fragile signals, hindsight, concentration, and rule-breaking shortcuts have been sifted away.**

The fourth-place finish matters because it gives the thesis friction. The story contains good models and bad models, a live contest, post-contest eligibility, and a rank that was excellent without being mythically perfect.
