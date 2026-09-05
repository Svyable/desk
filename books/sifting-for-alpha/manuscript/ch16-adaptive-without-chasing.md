# Chapter 16 — Adaptive Without Chasing

A static model makes one arrogant claim:

The relationship I found will keep working.

An adaptive model makes a different arrogant claim:

I will know how to change when it stops working.

The second sounds more sophisticated.

It can be more dangerous.

My research lineage included adaptive ideas: let factor influence change with recent evidence, use information coefficients to judge signal quality, or update weights in the direction that recent errors suggest. In machine-learning language you can think about gradient-style updates. In portfolio language you can think about rotating toward signals that appear to be working.

The intuition is attractive because markets change.

The trap is attractive because markets are noisy.

Adapt too slowly and the model becomes obsolete.

Adapt too quickly and the model chases randomness.

That tension is the chapter.

## The market does not announce regime changes

If regimes came with timestamps, adaptive investing would be easy.

**TREND REGIME BEGINS MONDAY.**

**MEAN REVERSION ENDS FRIDAY.**

**LOW-VOLATILITY FACTOR TEMPORARILY BROKEN.**

Instead, we observe data and infer that something may have changed after it already has.

Every adaptive rule therefore faces a detection problem.

Was the recent factor weakness a regime change?

Noise?

A drawdown inside the same regime?

Crowding?

A one-off event?

If the model treats every loss as a regime shift, it will constantly abandon factors near their local lows.

This is the automated version of performance chasing.

The machine is not immune to human bias. It can encode it perfectly.

## Recent success is a noisy teacher

Suppose Factor A had the highest information coefficient over the last month.

Should its weight rise?

Maybe.

Ask how much data produced that estimate.

Ask how variable the factor's IC has historically been.

Ask whether Factor A's improvement was independent or simply the result of one sector move.

Ask whether the same adaptive rule improved out-of-sample performance in prior windows.

The meta-signal—"recent IC predicts future IC"—must itself be tested.

This recursive idea is essential.

A model that dynamically weights factors contains a factor about factors.

That meta-factor needs a sifter too.

## Forgetting is a parameter

Adaptive systems need memory.

More precisely, they need a rule for forgetting.

Use too much history and the model barely adapts.

Use too little and yesterday becomes destiny.

An exponentially weighted estimate makes this explicit. Recent observations get more influence, older ones decay.

But the decay rate is not a technical footnote. It is a theory of how quickly the market changes.

A half-life of ten days says something different from a half-life of one year.

Whenever a parameter has an economic interpretation, use it.

Do not choose the decay rate because 37 days had the best backtest.

Ask what range of forgetting speeds makes sense, then look for robust behavior across the range.

The neighborhood screen applies to memory too.

## Adaptive gradient, bounded ego

One way to imagine factor updates is as a gradient.

The model has current weights.

New data arrives.

Some factors were aligned with subsequent returns; others were not.

Adjust the weights a little in the direction that would have improved the objective.

The word *little* is doing enormous work.

An unconstrained update can let one recent winner seize the portfolio.

A bounded update says: new evidence matters, but I do not suddenly know everything.

Useful controls include:

- a maximum change per rebalance;
- a cap on any one factor's weight;
- a floor that prevents complete abandonment after a short bad spell;
- shrinkage toward an equal-weight or prior allocation;
- a minimum evidence window;
- regularization against excessive turnover.

Each control is an admission of estimation error.

That is healthy.

The adaptive model should be allowed to learn without being allowed to panic.

## The turnover tax on intelligence

Every adaptive decision can create trades.

Change factor weights and stock ranks change.

Change stock ranks and portfolio weights change.

Change portfolio weights and turnover appears.

A faster-learning model may look smarter before costs and dumber after them.

This creates a beautiful constraint: **adaptation must pay for itself.**

If dynamic factor weighting improves gross Sharpe by a tiny amount while doubling turnover, the adaptation may have discovered a broker subsidy rather than alpha.

The more responsive the model, the more carefully transaction costs belong inside the objective.

This is true even in a contest environment where the exact cost model may differ from a real account. The direction is universal.

Intelligence that cannot afford its own actions is not very intelligent.

## Static models are useful opponents

Every adaptive system should fight a static baseline.

Equal factor weights.

Fixed weights chosen from a broad hypothesis rather than tuned to the last decimal.

A simple rolling rebalance without meta-learning.

If the adaptive version cannot beat the static version outside the development sample, the intelligence may be ornamental.

This is one of my favorite tests because complexity hates it.

A sophisticated model feels entitled to outperform.

The baseline does not care about feelings.

## Adapt the model or adapt the risk?

There are two ways to respond to uncertainty.

Change what you believe.

Or change how much you bet on what you believe.

The second is often underappreciated.

Instead of aggressively rotating factor weights when recent performance weakens, the strategy can reduce total risk, widen diversification, or lower gross exposure while waiting for more evidence.

This separates **forecast adaptation** from **risk adaptation**.

Forecast adaptation says the expected-return model changed.

Risk adaptation says confidence in the expected-return model changed.

Those are not the same claim.

Sometimes the more honest response to a confusing regime is not to invent a new forecast.

It is to bet less.

## The sixteenth sieve: make adaptation earn complexity

To justify an adaptive layer, I want evidence on four things.

First, persistence: does the state being adapted to have enough persistence that reacting is useful?

Second, speed: can the state be estimated before it changes again?

Third, cost: does adaptation improve net performance after the turnover and implementation it creates?

Fourth, robustness: does the adaptive rule work across reasonable memory lengths and update speeds rather than one optimized setting?

Fail those tests and the static model wins by default.

Simplicity is not the absence of intelligence.

It is the prior that complexity has to beat.

## The paradox of adaptive discipline

The best adaptive systems are often less visibly adaptive than people expect.

Weights move slowly.

Caps remain.

Priors matter.

One bad week does not trigger a philosophical crisis.

The model changes, but it changes with embarrassment about how little it knows.

That is exactly how I want a learning system to behave.

Markets change.

We should change too.

Just not at the speed of our latest regret.
