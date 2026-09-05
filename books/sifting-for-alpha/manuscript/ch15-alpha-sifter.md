# Chapter 15 — The Alpha Sifter

By now the pattern should be obvious.

The best thing I built was not a signal.

It was a sequence of ways to say no.

I call that sequence the **Alpha Sifter**.

A candidate idea enters at the top full of promise. It leaves at the bottom smaller, slower, less impressive, and more believable.

Most ideas should not make it through.

That is the design.

The sifter has ten screens.

## Screen 1 — The hypothesis screen

Before code, finish the sentence:

> This should predict because...

The answer can be behavioral, structural, risk-based, microstructural, or statistical. It does not need to sound like an economics paper.

It does need to exist independently of the backtest.

"Because RSI below 30 worked" is not a hypothesis.

"Because short-horizon forced selling may push liquid stocks away from a price that later partially recovers" is a hypothesis.

"Because medium-horizon winners may continue as information diffuses" is a hypothesis.

If the only reason for the rule is that a chart looked good, the idea stays above the screen.

## Screen 2 — The ignorance screen

Reconstruct what the model could have known at each date.

Historical membership.

Historical liquidity.

Data publication timing.

Corporate actions.

Feature lags.

Rebalance timing.

Execution price assumptions.

This screen hunts lookahead bias, survivorship bias, and any other form of time travel.

The core rule is simple:

**Yesterday's model may not know today's winners.**

This is where many stock-picking backtests die, and they should.

## Screen 3 — The unit screen

Check that every feature has a sensible scale and every operation means what you think it means.

Returns versus prices.

Percent versus decimal.

Daily versus annualized volatility.

Raw factor values versus ranks.

ATR in dollars versus ATR as a percentage of price.

A shocking number of miracles are unit errors.

Normalize signals before blending them. Inspect distributions. Look for infinities, stale values, missing data, and clipping artifacts.

If a model's alpha depends on a spreadsheet misunderstanding 5 percent as 5.0, we have discovered accounting, not investing.

## Screen 4 — The lonely-factor screen

Test each factor before the portfolio can hide it.

Information coefficient.

Rank monotonicity.

Stability through time.

Decay with lag.

Behavior across regimes.

Incremental value after related factors.

A factor does not need to win alone. It does need to explain why it deserves to consume complexity inside the ensemble.

If removing it changes nothing, remove it.

Do not keep decorative intelligence.

## Screen 5 — The neighborhood screen

Move the parameters.

If the strategy uses a 20-day lookback, test 15, 18, 22, 25, and 30.

If it holds eleven stocks, test eight through fifteen.

If a threshold is 1.5, inspect the region around it.

You are looking for plateaus.

A robust idea often works over a neighborhood.

An overfit idea often lives on a needle.

The exact performance can vary. The direction of the behavior should not require one sacred integer.

This screen is devastating to pretty backtests.

Excellent.

## Screen 6 — The hostility screen

Make the strategy's life worse.

Delay execution.

Increase transaction costs.

Tighten liquidity.

Cap positions.

Reduce leverage.

Remove the best year.

Remove the best stock.

Start the test later.

Change the rebalance day.

If mild hostility destroys the edge, the edge did not have enough margin for the real world.

A strategy should be profitable in the simulator by more than the simulator's generosity.

## Screen 7 — The concentration screen

Ask what actually produced the return.

Was it the cross-sectional signal or three heroic names?

Was it the factor blend or one factor?

Was it alpha or market beta?

Was it a sector bet?

Was it a volatility regime?

Run contribution analysis.

Cap individual positions.

Neutralize exposures where appropriate.

Compare equal weight with optimized weight.

A diversified-looking strategy can have a concentrated explanation.

Find it.

## Screen 8 — The outside-time screen

The model needs a period it did not negotiate with.

Holdout data.

Walk-forward evaluation.

A later market regime.

Eventually, live data.

Freeze the model before the test. Preserve the timestamp. Do not improve yesterday after seeing tomorrow.

This screen is where many high-Sharpe strategies become ordinary.

Ordinary out of sample is not necessarily failure.

It may be the first honest estimate you have seen.

Track the decay between development performance and outside-time performance. That gap measures the optimism of your research process.

## Screen 9 — The operational screen

Can the system be run, governed, and defended?

Does the code complete reliably?

Does the asset-selection process comply with the mandate?

Is the data path auditable?

Can each position be traced to a rule?

Can the strategy meet runtime and memory constraints?

Can a human explain what happens when data is missing?

Can the portfolio be executed at the intended capital size?

This is where the contest rulebook belongs.

A model that cannot survive operations is still a research result. It is not a production strategy.

## Screen 10 — The narrative screen

This is the last and hardest one.

Write the performance report as if you were trying to talk yourself *out* of investing.

What metric looks worst?

What regime hurt?

What assumption is most fragile?

What part of the result may be luck?

What would falsify the thesis?

Which fact are you tempted to omit?

If the story still sounds worth testing after the unflattering version is written, the idea may have earned capital.

This screen exists because the researcher is part of the model.

Our incentives can overfit too.

## The sifter is not a scoring formula

Do not turn these ten screens into a fake precision machine.

Hypothesis: 8.2 out of 10.

Liquidity: 7.4.

Narrative honesty: 9.1.

That would be funny and useless.

Some screens are binary for a given mandate. Lookahead bias is not something a high Sharpe can compensate for. A contest rule violation is not offset by a strong information coefficient.

Other screens require judgment. How stable is stable enough? How much out-of-sample decay is acceptable? How hostile should cost assumptions be?

The purpose of the sifter is not to eliminate judgment.

It is to force judgment to show its work.

## What passes through gets smaller

This is the counterintuitive effect of serious research.

The better the validation, the less impressive the strategy often becomes.

Start with a gorgeous gross backtest.

Apply historical universe membership.

It shrinks.

Add liquidity.

It shrinks.

Cap positions.

It shrinks.

Add costs.

It shrinks.

Move outside the development sample.

It shrinks.

Run live.

It becomes human.

Researchers can experience this as failure because every improvement to realism seems to destroy alpha.

I see it differently now.

The early alpha was not all yours.

Some belonged to hindsight.

Some belonged to concentration.

Some belonged to execution assumptions.

Some belonged to sample luck.

The sifter returns those pieces to their rightful owners.

What remains is smaller.

That is the point.

## The gold-dust fallacy

The metaphor of sifting can create one wrong impression: that the dirt is useless and the gold is a permanent substance waiting to be found.

Markets are stranger.

The "gold" can decay.

Other researchers discover it.

Capital crowds it.

Market structure changes.

Regulation changes.

Technology changes.

Behavior changes because participants learn.

An alpha sifter therefore cannot be a one-time mining operation.

It must keep running.

A surviving strategy returns to the screens periodically. Not because we want to overreact to every drawdown, but because the assumptions themselves age.

The sifter is maintenance.

## What Q23 changed

Before Q23, I mostly thought of strategy development as finding better rules.

After Q23, I thought more about building better rejection mechanisms.

The difference is profound.

Finding better rules depends on creativity.

Rejecting weak rules depends on discipline.

Creativity creates a larger search space.

Discipline prevents the search space from turning into self-deception.

You need both.

Most quantitative platforms make creativity easy. Data is abundant. Python is expressive. Indicators are one function call away. Machine learning libraries can produce models more complex than the problem deserves before breakfast.

The scarce skill is not generating another candidate.

It is killing the one you already love.

That is the Alpha Sifter.

It is not the algorithm that won fourth place.

It is the process I would trust to try again.
