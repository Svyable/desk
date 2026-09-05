# Chapter 7 — From Indicators to Information Coefficients

A factor can look intelligent because the portfolio built from it made money.

That is a very late place to begin asking whether the factor knew anything.

As my research moved toward multi-factor ranking, I became more interested in a smaller question:

**Did the signal order stocks in a way that had any relationship to what happened next?**

That is the territory of the information coefficient.

You do not need the term to understand the idea. Take the cross-section of eligible stocks on a date. Give each one a factor score. Later, observe the returns. Ask whether higher scores tended to line up with higher subsequent returns—or lower returns, if the factor is intended to be contrarian.

The relationship will be noisy.

That is expected.

The stock market is not a spelling test. A useful factor does not need to put every name in the correct order. It needs a small, repeatable tendency to rank opportunities better than chance after all the ways we can accidentally cheat have been removed.

Small is enough if small is real.

## Why rank prediction is humbler than price prediction

Predicting a price target sounds decisive.

Company A will return 12 percent.

Company B will return 4 percent.

Company C will fall 7 percent.

The precision is mostly theater unless the model is extraordinary.

Ranking asks less.

A appears more attractive than B.

B appears more attractive than C.

The expected return spread between the top and bottom of the ordering may be enough to build a portfolio even if every absolute forecast is wrong.

This is a useful form of humility.

The model does not need to know what the market will do.

It needs to know a little about *who may do better than whom*.

That is still hard. It is simply better aligned with the information many cross-sectional factors actually contain.

## The seduction of average IC

Suppose a factor has a positive average information coefficient.

Good.

Now ruin the celebration.

How stable is it through time?

Does one extraordinary period carry the mean?

Does the sign flip in different regimes?

Is the effect concentrated in tiny stocks?

Does it survive a liquidity screen?

Does it survive sector neutralization, if sector exposure is not the intended bet?

Does it decay immediately after formation?

How correlated is its rank with the ranks from other factors?

Does the top decile behave differently from the middle, or is the relationship roughly monotonic?

An average is the beginning of the investigation.

If a factor works only because the top one percent of observations explode upward, it may require a completely different portfolio architecture from a factor with a smooth cross-sectional gradient.

If the IC is positive only in bull markets, it may be a disguised beta-timing signal.

If it vanishes after a one-day lag, implementation becomes part of the alpha.

The sifter keeps asking what the summary statistic is hiding.

## Ranking the rankers

A surviving description of my Q23 research referred to roughly twenty factors and ranking them by information coefficient.

That phrase contains an important shift.

The stocks are being ranked.

Then the factors are being ranked according to how useful they have been at ranking stocks.

Now the model has two levels of selection.

This is powerful and dangerous.

Powerful because factor effectiveness is not constant. A signal that helped in one environment may weaken in another. Giving more influence to factors with better recent predictive behavior can make a model adapt.

Dangerous because recent predictive behavior is noisy too.

If I chase whichever factor just had the best month, I have built a performance-chasing allocator inside the strategy.

The same behavioral mistake investors make when they buy last year's best fund can be automated at machine speed.

Adaptive factor weighting therefore needs friction.

A minimum history.

Smoothing.

Caps on how fast weights can change.

Regularization toward equal weighting.

Out-of-sample tests of the weighting procedure itself.

The meta-model deserves every suspicion applied to the model.

## Equal weight is a worthy opponent

Sophisticated weighting schemes should have to beat something embarrassingly simple.

Equal weight.

If twenty filtered factors all have some independent evidence of usefulness, an equal-weight blend is difficult to overfit. It makes very few claims about which factor will be best tomorrow.

A dynamic IC-weighted scheme makes more claims.

It says recent or estimated predictive strength contains information about future predictive strength.

Maybe it does.

Prove it.

The adaptive method should not be judged against zero. It should be judged against the simpler blend it replaces.

This benchmark discipline prevents sophistication from awarding itself a trophy for complexity.

If equal weights perform nearly as well with less turnover and more stability, equal weight may be the better model.

If IC weighting improves behavior robustly across windows and regimes, then it has earned its complexity.

## Factor democracy and factor monarchy

There are two extremes in multifactor design.

Factor democracy gives every signal a vote.

Factor monarchy lets one apparently superior factor dominate.

Both can fail.

Democracy can dilute the useful signal with weak features.

Monarchy can convert one temporary anomaly into the entire portfolio.

The interesting design space lies between them: allow evidence to change influence without allowing recent luck to seize the government.

This is where caps and shrinkage become philosophical tools.

A factor weight cap says: I may believe you are best, but I do not believe I know that with infinite confidence.

Shrinkage toward an equal-weight prior says: new evidence matters, but the burden of proof rises as you move farther from simplicity.

The mathematics is risk management for our certainty.

## Concentration after ranking

Once the model produces a composite score, another decision appears.

How much of the ranking should become a portfolio?

Trade everything with graduated weights?

Trade the top and bottom deciles?

Trade the top eleven?

Every choice converts information into concentration.

If the information coefficient is weak but broad, a diversified portfolio may harvest it better.

If the signal is concentrated in the extremes, a smaller basket may be sensible.

But narrower baskets increase idiosyncratic risk and make each ranking error more expensive.

There is no free concentration.

A top-eleven portfolio is not merely a selection rule. It is a statement about confidence.

It says the separation between rank 11 and rank 12 matters enough to withhold capital from the latter.

That statement should be tested.

If the return spread between ranks 1–11 and 12–22 is unstable, the cutoff may be cosmetic.

If the strongest predictive relationship truly lives in the tail, concentration may be justified.

The model has to earn the right to care about eleven.

## The seventh sieve: test the ranking before the portfolio

Portfolio backtests mix several decisions together:

signal quality;

factor weighting;

stock selection;

position sizing;

risk scaling;

turnover;

market exposure.

A good final result can hide a weak signal that was rescued by another layer.

So separate the questions.

First: can the factor rank future returns at all?

Second: is that ranking stable enough to combine with others?

Third: does the combined ranking improve?

Fourth: what portfolio expression captures the information without asking for more precision than the signal contains?

This ordering matters.

Do not start by asking which portfolio made the most money.

Start by asking whether the model knew anything before you gave it leverage, concentration, and a scoreboard.

That is how indicators become information.
