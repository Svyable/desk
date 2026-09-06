# Chapter 11 — Live Means Yesterday Is Locked

The most important feature of live trading is not that the prices are current.

It is that yesterday becomes read-only.

A backtest lets you walk through history with a pencil.

A live period uses ink.

Q23's four-month live window began September 1, 2025. Whatever I believed about the model before that date had to meet data I had not yet seen. Every new observation closed one more door behind me.

This is where research changes emotionally, even if the code does not change at all.

In a notebook, a bad week is diagnostic.

Live, a bad week is also a bad week.

There is no rerun button that makes the capital path unhappen.

## Frozen decisions are valuable data

Imagine two identical strategy results.

The first was produced by a model that was specified before the test period.

The second was produced after the researcher saw the whole period and adjusted the model until it matched.

The equity curves can be identical.

The evidence is not.

The first contains a prediction.

The second contains an explanation.

Both can be useful. Only one tells you how the model behaved when the future was unknown.

This is why live records are precious even when they are short. They preserve the sequence of ignorance.

You knew this much on Monday.

Then Tuesday happened.

You did not get to move Tuesday's close because Thursday was inconvenient.

Markets rarely offer controlled experiments. Live evaluation is one of the closest approximations we get to a clean temporal boundary.

## The desire to intervene

When a model enters live evaluation, the researcher discovers how much discretionary investor remains inside the quant.

The strategy goes down.

You think the regime changed.

A factor starts failing.

You think it should be reweighted.

One position looks absurd.

You know a news story the model does not know.

This is where systematic investing stops being a coding style and becomes a behavioral commitment.

If you intervene every time you disagree with the output, you do not have a systematic strategy. You have a quantitative consultant advising a discretionary trader.

That may be a perfectly good investment process.

It is simply a different one.

For a contest, the distinction matters. The submitted system is the object being tested. The live period is not the time to keep teaching it the answers.

## When adaptation is legitimate

This does not mean a live strategy must be static.

A model can contain adaptive rules.

Factor weights can evolve.

Volatility estimates can update.

The eligible universe can change.

Ranks can change daily.

Positions can enter and leave.

The crucial distinction is whether the *rule for adapting* existed before the data it reacts to.

That is the line between adaptation and intervention.

A pre-specified adaptive algorithm says, "When this observable state changes, update the model this way."

A researcher who changes the rule after seeing a loss says, "I do not like what just happened."

Both can improve future performance.

Only one preserves the integrity of the original experiment.

## Leaderboards create a second market

A live contest has two price feeds.

The first is the actual market.

The second is the leaderboard.

Watching rank move can be more psychologically destabilizing than watching P&L.

A 1 percent loss feels different if everyone else lost 2 percent.

A 3 percent gain feels terrible if three competitors gained 6 percent.

Suddenly the objective becomes relative in the most visible possible way.

This creates the temptation to trade the contest rather than trade the model.

Take more risk because you dropped a few places.

Protect the rank because you moved up.

Favor strategies that are different from the current leader.

Change behavior near the end of the period.

If those tactics were not part of the original system, they contaminate the experiment.

The leaderboard is information about the competition.

It is not automatically information about expected stock returns.

## Four months is both long and short

Four months is long when you are watching every day.

It is short when you are making statistical claims.

This contradiction should shape how contest results are interpreted.

A four-month period can contain a lot of trades and still represent a narrow slice of market regimes. A strong live Sharpe can be meaningful evidence without being a guarantee. A weak live period can expose a problem or simply be a period in which the edge was out of favor.

The disciplined response is neither dismissal nor worship.

Update your belief.

Do not replace it with certainty.

Bayesian language is useful even if you never write an equation. You had a prior belief based on research. The live period produced new evidence. The posterior belief should change in proportion to how informative that evidence was.

A four-month contest is more informative than another backtest tweak.

It is less informative than ten years of live capital through multiple regimes.

Both statements can be true.

## The eleventh sieve: preserve the timestamp

When a model enters a real test, freeze the artifacts.

The code.

The parameters.

The data definitions.

The intended objective.

The assumptions.

The reason each factor is included.

Then when the test ends, compare what happened with what you expected.

This sounds like laboratory housekeeping. It is one of the best defenses against rewritten memory.

Without timestamps, the researcher gradually absorbs outcomes into the original thesis.

"Of course the strategy was supposed to struggle in that regime."

Was it?

Show me where you wrote that before the struggle.

"I always expected the factor to rotate away."

Did you?

Show me the rule.

A timestamp turns confidence into something falsifiable.

## Yesterday is the asset

Most people think a live track record is valuable because it shows returns.

I think its deeper value is that it preserves an uneditable past.

The strategy said what it said.

The market did what it did.

The sequence exists.

That makes live history harder to manipulate than backtest history and therefore more valuable per observation.

The market's great cruelty is that tomorrow is unknown.

The researcher's great opportunity is the same thing.

Unknown tomorrows are the only ones that can teach you whether the model knew anything.

Live means yesterday is locked.

That lock is not a nuisance.

It is the experiment.
