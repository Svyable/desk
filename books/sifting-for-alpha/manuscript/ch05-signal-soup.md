# Chapter 5 — Signal Soup

The dangerous moment in quantitative research is not when you have no ideas.

It is when you have twelve.

One indicator is easy to distrust. Twelve indicators arranged in a matrix look like intelligence.

Momentum says up.

RSI says overbought.

Rate of change says accelerating.

The long moving average says trend.

The short moving average says hesitation.

Volatility says danger.

Mean reversion says opportunity.

ATR says the opportunity is wearing steel-toed boots.

By the time enough columns exist, you can explain almost any trade.

This is signal soup.

The ingredients may all be respectable. The soup can still be nonsense.

## Indicators are not ideas

A technical indicator is a transformation of data.

That is all.

RSI transforms recent gains and losses into a bounded oscillator. ROC transforms price change into a rate. Moving averages smooth. ATR summarizes a range-based notion of volatility. A z-score expresses distance relative to a recent distribution.

None of those transformations arrives with a guarantee that tomorrow cares.

The indicator becomes an idea only when you specify a relationship you expect to persist.

High recent return may continue because investors underreact.

Very short-term extremes may revert because liquidity shocks overshoot.

High volatility may reduce expected risk-adjusted attractiveness or may identify a regime in which another signal becomes less reliable.

A moving-average relationship may proxy for persistent trend.

Now there is something to test.

Without the relationship, an indicator is merely a new coordinate system for the same old price history.

This was important as my work moved from simple crossovers toward combinations of RSI, ROC, ATR, volatility, momentum, reversal, and ranking. The number of calculations was increasing faster than the number of truly independent hypotheses.

That is how soup happens.

## Three ways twenty factors become two

Suppose a model contains twenty factors.

That sounds diversified.

Now inspect them.

Five are versions of momentum over different windows.

Four are moving-average relationships.

Three are rate-of-change measures.

Three are volatility adjustments.

Two are RSI-like oscillators.

Three are combinations of the others.

You do not have twenty ideas.

You might have trend, reversal, and risk.

This is not necessarily bad. Multiple measurements of one latent effect can make a model more stable. If one momentum horizon is noisy, a blend of horizons can reduce dependence on a single window.

The problem begins when factor count is mistaken for conceptual diversity.

If all twenty factors fail when momentum reverses, the portfolio is twenty-factor in a spreadsheet and one-factor in a drawdown.

That is the distinction I started caring about: **formula diversity versus failure-mode diversity.**

The second is what matters.

## Correlation is not redundancy, but it is an interrogation

Two signals can be correlated and still contribute different information.

Two signals can look uncorrelated historically and still be the same trade in the one crisis that matters.

Correlation is not a verdict. It is an interrogation light.

When I see two factors moving together, I ask:

Are they measuring the same underlying behavior?

Do they differ only in horizon?

Does one work when the other fails?

Does combining them improve out-of-sample ranking or merely smooth the in-sample chart?

Does either survive after neutralizing the common exposure?

If removing one changes almost nothing, the removed factor was probably not carrying much unique information.

A model does not get smarter because every indicator has a different acronym.

## Momentum plus mean reversion: an argument inside the model

One research concept blended short-horizon momentum with a twenty-day z-score mean-reversion signal.

At first glance that is contradictory.

Momentum says: what has been moving tends to keep moving.

Mean reversion says: what has moved too far tends to come back.

Which is it?

Both can be true at different horizons, magnitudes, and regimes.

Markets are not obligated to have one personality.

The useful question is not which slogan wins. It is whether the two signals provide complementary information after being made comparable and tested honestly.

A momentum signal can identify persistent cross-sectional strength. A reversal signal can punish extreme short-term dislocations. A blend may prevent the strategy from blindly chasing the most stretched names or blindly fading durable trends.

But the blend introduces a new freedom: the weight.

Sixty-forty?

Fifty-fifty?

Seventy-thirty?

Now the researcher has another knob.

And every knob must be charged rent.

If 60/40 is brilliant and 55/45 is terrible, the model is not revealing a law of finance. It is revealing the fingerprint of the sample.

## Normalize before you philosophize

Signals measured in different units cannot be responsibly combined by intuition alone.

A five-day return, an RSI value, and ATR do not inhabit the same numerical world. Add them raw and the largest scale wins, not the most informative factor.

So the model needs some way to make the inputs comparable: ranks, z-scores, volatility normalization, robust scaling, or another transformation consistent across the universe and time.

This is a mundane engineering detail with philosophical consequences.

Once signals are normalized, a combination means something clearer. A one-unit contribution from momentum can be compared with a one-unit contribution from reversal. Factor weights start resembling opinions about relative information rather than accidents of measurement scale.

A surprising amount of "alpha" disappears when unit mistakes are fixed.

Good.

The sifter is working.

## A factor should survive being embarrassed

I like factors that survive hostile tests.

Invert it.

Lag it.

Change the window.

Drop the best year.

Test different market regimes.

Remove the largest positions.

Change the portfolio size.

Make the universe historical instead of static.

Add realistic constraints.

If the factor remains directionally useful, my interest rises.

If it transforms from genius to garbage when one month is removed, my interest falls.

This style of research feels pessimistic. It is actually optimistic in the right place.

I am pessimistic about the backtest so that I can be more optimistic about what survives it.

## The fifth sieve: name the latent bet

For every factor in a model, finish this sentence:

> This factor makes money if __________ continues to be true.

Not "if RSI works."

What has to be true about market behavior?

For momentum: some component of return continuation must persist.

For reversal: some component of short-term overreaction or liquidity pressure must reverse.

For low-volatility scaling: risk-adjusted returns must benefit from reducing exposure to unstable assets or periods.

For a liquidity filter: implementable opportunities must differ from apparent opportunities in thin names.

If you cannot fill in the blank, you may not have a factor. You may have a feature.

Features are cheap.

Alpha is expensive.

The entire game is learning the difference.

## Soup can become a recipe

The answer is not to reject combinations.

The answer is to make the combination legible.

A good multifactor system should allow you to explain, at least approximately, why each family exists, how it is normalized, how much incremental information it contributes, how correlated it is with the others, and what kind of regime could make it fail.

Then twenty factors can be useful.

Not because twenty is impressive.

Because the factors have been sifted into roles.

Trend.

Reversal.

Risk.

Liquidity.

Maybe quality, value, sentiment, fundamentals, or alternative data in another system.

The labels are less important than the discipline.

Do not let a crowded notebook impersonate a diversified mind.

Signal soup becomes a recipe only when you know what each ingredient is doing there.
