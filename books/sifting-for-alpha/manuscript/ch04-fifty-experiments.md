# Chapter 4 — Fifty Experiments, Fifteen Seats

At some point quantitative research stops looking like stock selection and starts looking like breeding fruit flies.

You have versions.

So many versions.

Version 1 changes a lookback. Version 2 adds volatility. Version 3 reverses the short rule. Version 4 removes it. Version 5 keeps the signal but changes the universe. Version 6 uses a different normalization. Version 7 exists because Version 6 threw an error. Version 8 is Version 7 with one line that should not matter and somehow matters a lot.

Soon the names become archaeological layers.

FILTERv1.

FILTERv2.

FILTERv2(41).

SMAv2.

2026v1.

The naming conventions are not literature. They are evidence that research is an evolutionary process.

During Q23, public Quantiacs discussion noted that the Svyable account had a large number of strategies displayed. Quantiacs support explained the architecture: a user could have up to 50 running submissions, while only 15 strategies could be selected to participate in a contest.

This turns experimentation into a portfolio problem of its own.

Fifty experiments.

Fifteen seats.

The question becomes: which ideas get on the plane?

## More variants do not mean more knowledge

A researcher can mistake activity for information.

If I run 100 backtests, I feel productive. If one has an extraordinary Sharpe ratio, I feel rewarded.

But the number of tests changes the meaning of the best result.

If 100 people flip coins 100 times, one of them may look like a genius. The same problem appears when one person runs enough strategy variants. The maximum backtest becomes a statistic about the search process as well as the strategy.

This is the multiple-testing problem with a user interface.

Every knob expands the search space.

Lookback length.

Signal blend.

Portfolio size.

Volatility window.

Entry threshold.

Exit threshold.

Long-short balance.

Position cap.

Rebalance frequency.

Universe filter.

Multiply the choices together and the number of plausible models becomes absurd before lunch.

The solution is not to stop experimenting.

The solution is to charge each experiment rent.

## The experiment ledger

A good research process needs memory.

Not human memory. Human memory is a press secretary.

It remembers the promising models. It forgets the twenty nearby variants that failed. It remembers that you "always liked" the factor that later worked. It forgets that you tried inverting it two weeks earlier.

An experiment ledger does not flatter you.

For every material variant, record:

- the hypothesis;
- what changed;
- why it changed;
- the period tested;
- the metric you cared about *before* seeing the result;
- the result;
- the reason the experiment was kept or killed.

The ledger transforms a cloud of notebooks into a research history.

That history lets you ask questions a single backtest cannot answer.

Does performance improve smoothly as a parameter changes, or is there one magic number?

Do related models fail in the same periods?

Did the best model emerge from a sensible progression or from random parameter fishing?

How often did a change improve in-sample performance while hurting out-of-sample performance?

Which ideas keep reappearing under different names?

Without the ledger, fifty experiments create fifty opportunities to fool yourself.

With it, they can create a map of the landscape.

## The fifteen-seat problem

Suppose you have to choose fifteen systems from fifty.

One approach is obvious: rank by historical Sharpe and take the top fifteen.

That may be exactly what an automated selector does.

It is not necessarily what I would do with real capital.

Why?

Because the top fifteen may all be siblings.

Imagine fifteen strategies that differ only in whether momentum uses 19, 20, or 21 days; whether volatility uses 18, 20, or 22 days; and whether the portfolio holds 10, 11, or 12 stocks. Their equity curves may look slightly different. Their future mistakes may be identical.

A collection of strategies is not diversified merely because it has fifteen file names.

You have to diversify *failure modes*.

A useful selection process might ask:

Which systems depend on trend?

Which depend on reversal?

Which depend on cross-sectional ranking?

Which depend on volatility regimes?

Which trade many names and which concentrate?

Which have similar drawdown dates?

Which have high output correlation?

Which fail when the market gaps?

Which fail when breadth narrows?

Now the problem resembles portfolio construction one level up.

Signals allocate to stocks.

Researchers allocate to signals.

Contests allocate to researchers.

The hierarchy is fractal.

## Killing ideas is the hard part

Adding a factor feels like progress.

Deleting one feels like surrender.

This is backwards.

A factor that does not improve the system after costs, correlation, robustness, and complexity should be removed even if it has a compelling name.

There is no prize for the number of indicators in the notebook.

Complexity creates hidden leverage. Not financial leverage—explanatory leverage.

The more components a model has, the more reasons you can invent for why it behaved a certain way. A simple model can be wrong in three places. A complex model can be wrong in thirty and still look sophisticated.

The best research question is often not "What should I add?"

It is "What can I remove without losing the behavior I care about?"

This is model pruning as philosophy.

If twenty factors become twelve with little loss, the missing eight were not eight independent sources of alpha. They were eight invoices.

If twelve become five, keep going.

The goal is not minimalism for its own sake. Some markets are too complex for one factor. The goal is to make every component earn its complexity.

## Failed experiments are negative knowledge

One of the most valuable outputs of fifty strategies is not the winner.

It is the graveyard.

A negative-Sharpe moving-average crossover tells you something.

A version whose performance disappears under a 10 percent cap tells you something.

A model that only works on today's index members tells you something.

A strategy with an absurd in-sample Sharpe and no out-of-sample persistence tells you a great deal.

The research process improves when failures become reusable assets.

I started to think of them as **negative knowledge**: things I no longer had to believe.

That sounds modest. It compounds.

If you permanently eliminate a class of fragile ideas, the next fifty experiments begin from a better prior.

You stop asking whether the nine-day SMA should cross the nine-day EMA at exactly the same place.

You start asking whether momentum should be measured across multiple horizons, whether reversal contributes independent information, whether factor ranks persist, whether the universe rule is clean, whether concentration is carrying the backtest.

The questions become better because the bad answers stay dead.

## The fourth sieve: would you spend one of fifteen seats on it?

This became a useful mental test even outside the contest.

Pretend every strategy idea has to consume one of fifteen scarce seats.

Would you spend one on this?

Not "Is the backtest positive?"

Not "Is the Sharpe above one?"

Not "Did it work last year?"

Would this idea deserve one of only fifteen opportunities to face live data?

Scarcity clarifies judgment.

It forces you to compare ideas against one another rather than against zero. A mediocre strategy can look attractive when the alternative is cash. It looks less attractive when it displaces a more robust strategy from the plane.

This is how serious portfolios behave too. Capital is finite. Attention is finite. Risk budget is finite. Engineering time is finite.

Every new position, factor, or model displaces something.

The cost of an idea is not merely the losses it can produce.

It is the better idea you did not fund.

Fifty experiments taught me how easy it is to generate possibilities.

Fifteen seats taught me to care about selection.
