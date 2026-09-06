# Chapter 6 — The First Bad Backtest

A beautiful backtest is an invitation.

A terrible backtest is a teacher.

One of the surviving early experiments in my research history ran from January 1, 2006 through December 27, 2024. The idea was simple: compare a nine-day simple moving average with a nine-day exponential moving average and use the relationship to generate trades across an S&P 500 framework with liquidity handling and normalized weights.

The numbers were ugly.

Sharpe: about **-0.36**.

Ending equity: about **0.41** relative to the starting unit.

Maximum drawdown: about **-66.6%**.

Volatility: about **12.8%**.

Average turnover was roughly **0.31** in the recorded statistic, and average holding time was around **6.6 days**.

There are more sophisticated ways to lose money.

This one had the virtue of clarity.

## When inversion is not insight

The first instinct when a strategy is consistently bad is deliciously dangerous:

Invert it.

If long loses, go short.

If the fast average above the slow average is bad, trade the opposite.

A negative signal must be a positive signal wearing its coat backward.

Sometimes inversion is worth testing. A genuine relationship may have been assigned the wrong sign.

But there is a trap. A bad strategy can be bad because it contains no stable information at all. Flip noise and you get noise with a minus sign.

The question is not "Did the original lose?"

The question is "Was the loss systematic for a reason that should persist?"

The two nine-day averages were measuring nearly the same thing. Their difference was small and twitchy. A crossover between them could create frequent regime changes without exposing a meaningful economic distinction.

In that setting, inversion does not magically create information. It can simply move the whipsaw to the other side of the ledger.

This became a recurring principle:

**Never confuse anti-performance with alpha.**

A strategy that loses beautifully is not automatically a short strategy.

## The backtest is allowed to say no

Researchers often approach backtests with the emotional posture of applicants waiting for a decision.

Please approve my idea.

A healthier posture is to treat the backtest as a bouncer.

The default answer should be no.

No, the intuition is not enough.

No, the chart is not enough.

No, the factor name is not enough.

No, the strategy does not get into the club because it worked for three years.

The purpose of a test is not to validate the idea. It is to expose reasons to reject it.

That change in posture makes bad backtests easier to love.

The moving-average experiment killed a weak formulation quickly. It told me that a tiny timing difference between two short-horizon smoothers was not a sufficient basis for a serious system.

The loss was cheaper than belief.

## Drawdown is a research statistic

Sharpe gets the attention because it compresses return and volatility into one familiar number.

Drawdown tells a different story.

A maximum drawdown near two-thirds is not merely emotionally unpleasant. It asks whether the model's risk is qualitatively different from what the headline volatility implies.

Two strategies can have similar volatility and radically different drawdown paths.

One distributes losses in small, recoverable pieces.

The other produces a long trench.

If a strategy's expected edge is modest, a deep drawdown can destroy the practical ability to hold it long enough for the edge to matter.

This is where real investors enter the equation.

A model is not deployable because a spreadsheet eventually recovers. It is deployable if a human or institution can remain solvent, compliant, and psychologically intact while the spreadsheet is underwater.

The sifter therefore needs more than return and Sharpe.

Look at drawdown depth.

Drawdown duration.

Turnover.

Exposure concentration.

Regime sensitivity.

Recovery time.

The tail of the distribution is often where the strategy admits what it really is.

## Turnover can reveal an argument with noise

Short holding periods are not inherently bad. Some real edges are fast.

But turnover deserves interrogation when the signal itself is built from small differences in noisy variables.

If two nearly identical moving averages repeatedly cross, the portfolio may trade not because the market has changed but because the measurement has vibrated.

That is an important distinction.

Every trade should correspond, in some approximate way, to new information or a meaningful change in the model's state.

When turnover is high because a threshold is too brittle, the strategy is paying to express numerical indecision.

You can often diagnose this by adding hysteresis, smoothing the signal, widening the decision boundary, lengthening the horizon, or converting binary rules into ranks.

But those fixes should follow a hypothesis.

Do not add complexity merely to rescue a bad curve.

Sometimes the correct optimization is deletion.

## Long horizons can expose short stories

The backtest began in 2006.

That matters.

A strategy tested across nearly two decades has to pass through different monetary regimes, volatility regimes, crises, recoveries, technology cycles, rate environments, and market leadership patterns.

A long sample does not eliminate overfitting. A researcher can overfit twenty years with enough parameters.

But it creates more ways for a shallow story to break.

That is useful.

One of my later rules became: if an idea is supposed to represent a broad market behavior, test it where that behavior had opportunities to fail.

Trend should face choppy periods.

Mean reversion should face runaway trends.

Volatility targeting should face sudden gaps.

Long-short systems should face factor squeezes.

A strategy that only sees its favorite weather is not robust. It is on vacation.

## The sixth sieve: keep the embarrassing test

Do not delete the ugly notebook.

Keep it.

Write down what it taught you.

The temptation to clean a research history is strong, especially after a later success. The losing versions feel like clutter around the heroic final model.

They are the opposite.

They show the path was not predetermined.

They preserve evidence against hindsight bias.

They remind you what kinds of ideas failed under what conditions.

They protect future-you from rediscovering the same bad strategy with a new variable name.

In software, a regression test preserves a bug that once existed so it does not quietly return.

Quant research needs conceptual regression tests too.

The nine-day crossover is one of mine.

Whenever a future model starts depending on tiny differences between closely related transformations, I know what question to ask:

Am I measuring information—or merely measuring the disagreement between two ways of smoothing the same past?

That question came from a bad backtest.

It was worth far more than the strategy.
