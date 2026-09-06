# Chapter 10 — Position Size Is an Opinion About Ignorance

A ranking says, "I prefer this stock."

A position size says, "Here is how wrong I am willing to be."

The second statement is more important.

Quant research becomes intoxicated by selection. We spend hours improving the score that decides which asset ranks first. Then we can undo all that sophistication with one careless allocation rule.

If rank one gets 70 percent of the portfolio, the model is no longer mainly a ranking system. It is a concentrated bet with a research department.

That is why per-asset caps appeared in my earlier work. A 10 percent cap was used in several strategy concepts. The exact number is less important than what the cap represented: a refusal to let conviction become mathematically unlimited.

## Every weight is a confidence interval in disguise

Suppose a model assigns Stock A the highest composite factor score.

What does that mean?

It does not mean A will go up.

It does not mean A will outperform by 20 percent.

It does not mean the model knows A's future better than the market knows A's future.

It means the available evidence caused A to rank highly under the model.

That is a much weaker statement than the portfolio weight can make.

If you put half your capital into A, you have converted a relative statistical preference into a claim of enormous confidence.

Position sizing is where modest signals become immodest portfolios.

A cap is one way to keep the language consistent.

## Concentration makes backtests prettier

There is a structural reason optimization loves concentration.

If the historical top-ranked names happened to perform extremely well, the optimizer can improve the result by giving them more weight.

In sample, this looks like intelligence.

Out of sample, it may look like variance.

Concentration magnifies both signal and selection error.

If the ranking has real edge, concentration can increase return.

If the ranking is noisy, concentration increases the price of being wrong.

The key quantity is not conviction. It is the signal-to-noise ratio of the ranking.

Most financial signals are weak.

Weak signals deserve humility in position size.

## Why equal weight refuses to die

Equal weighting is offensively simple.

It ignores differences in score magnitude.

It ignores market capitalization.

It ignores estimated expected return.

And yet it is a stubborn benchmark because it makes so few estimation claims.

If the model can identify a basket of attractive stocks but cannot reliably distinguish how much more attractive rank one is than rank eleven, equal weight may be rational.

Sophisticated weighting should have to prove that score magnitude contains stable information, not merely ranking information.

This parallels factor weighting.

First prove that the order means something.

Then prove that the distance means something.

Do not assume both at once.

## Volatility scaling is a different kind of humility

Several research concepts used realized-volatility scaling.

The intuition is straightforward: a raw signal in a highly volatile stock creates more portfolio risk than the same raw signal in a stable stock. Scale positions inversely with volatility and the risk contributions can become more balanced.

This can improve risk-adjusted performance without claiming better stock forecasts.

That is attractive.

But volatility scaling has assumptions too.

Recent volatility must contain useful information about near-future volatility.

The estimate must respond fast enough to risk and slowly enough to avoid thrashing.

Sudden jumps will still surprise it.

Low-volatility stocks can become dangerously crowded.

A volatility scaler is not a shield. It is a way of expressing the belief that one unit of forecast should not automatically mean one unit of capital.

Again: sizing is an opinion about ignorance.

## Long-short doubles the sizing problem

A long-short portfolio seems balanced because longs and shorts can offset market exposure.

That can be true while gross risk quietly becomes large.

Ten percent long in five stocks and ten percent short in five stocks produces zero net exposure and 100 percent gross exposure.

Increase both sides and net can remain near zero while leverage rises.

Net exposure is not risk.

Gross exposure is not risk either, but it reveals how much capital is working on both sides.

Then factor exposure matters. A dollar-neutral portfolio can still be long growth, short value, long technology, short defensives, or accidentally short volatility.

Sizing has layers:

asset weight;

gross exposure;

net exposure;

sector exposure;

factor exposure;

volatility exposure.

The portfolio can be neutral in one language and screaming in another.

## The tenth sieve: cap first, optimize second

One of the easiest ways to test whether performance depends on concentration is to impose the cap before tuning the rest of the model.

Do not optimize an unconstrained strategy into greatness and then discover that real-world limits destroy it.

Begin with the limits you intend to live with.

Then ask what the signal can do inside them.

This is a powerful change in research order.

Constraints stop being penalties applied after the alpha is found.

They become part of the search space.

The resulting strategy may have a lower historical return.

It may also be a strategy you could actually hold.

## The best position size admits uncertainty

Investors often speak of conviction as a virtue.

Sometimes it is.

But conviction is not a substitute for calibration.

A model that is right 53 percent of the time with a small ranking edge should not allocate as if it is right 95 percent of the time because the researcher loves the thesis.

The portfolio should express what the evidence can support.

No more.

That is what a cap really does.

It says:

I like this idea.

I may even like it best.

I do not know enough to let it own me.
