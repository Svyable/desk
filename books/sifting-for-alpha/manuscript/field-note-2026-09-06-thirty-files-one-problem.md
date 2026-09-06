# Field Note — September 6, 2026: Thirty Files, One Problem

The Q25 chapter said the next page was blank.

A day later, the archive got twenty files thicker.

The conclusion did not change.

That is the point of this field note.

Twenty additional Q25 candidates were recovered into self-contained notebook and Python pairs. Added to the original ten-file pack, the working archive now had thirty portable candidate files for local preparation.

Every one of the twenty additional candidates cleared the historical Sharpe-above-one hurdle in the frozen replay.

All twenty passed the local implementation audit.

Sixteen passed the internal preparation screen.

Four remained research-only.

That sounds like a flood of alpha.

It was mostly a flood of overlap.

## Twenty strategies are not twenty ideas

Here are the twenty additional names:

1. Calm
2. StaticBlend
3. MomentumCore
4. FlowBreakout
5. AdaptiveTrend
6. ResidualMomentum
7. OnlineExperts
8. DownsideConvexity
9. DefensiveVolume
10. TailAsymmetry
11. Breakout63
12. LowMarketBeta
13. PeakResilience
14. DefensiveMix
15. TailSafety
16. LowVolatility
17. LowDownsideVol
18. LowPriceImpact
19. HighLiquidity
20. SmallNotional

On paper, that is variety.

In returns, it was much less varied.

StaticBlend was strongly overlapping with an existing dispersion strategy.

MomentumCore clustered with an existing trend strategy.

FlowBreakout and ResidualMomentum leaned heavily toward V10.

AdaptiveTrend and OnlineExperts were very close to the existing factor-balance family.

Several tail and low-volatility models clustered with CoCrash126.

LowPriceImpact and HighLiquidity were almost the same return stream despite different labels.

The correlation was **0.994** over the full comparison period and **0.997** in the reused recent window.

Two formulas.

One behavior.

That is a useful correction to the language of strategy research.

A strategy name is not an independent bet.

A code file is not an independent bet.

A different equation is not necessarily an independent bet.

The return stream gets the final vote.

## More strategies reduced the diversity statistic

The original ten-strategy correlation matrix had a participation ratio of about **2.62**.

After adding the twenty recovered streams, the thirty-strategy matrix had a participation ratio of about **1.77**.

This is only a descriptive concentration measure. It is not an effective-trials estimate, not a probability of winning, and not a sponsor statistic.

But the direction is instructive.

Adding twenty strategies made the collection look *less* diversified by that measure.

This should feel paradoxical only if diversification is being counted by filenames.

Imagine a choir with ten singers.

Then add twenty more singers who are all singing nearly the same note.

You now have thirty people.

You do not necessarily have more harmony.

Quant portfolios can make the same mistake with greater mathematical dignity.

## The sixteen passes

The internal preparation screen required more than the Q25 contest's historical Sharpe hurdle.

A candidate had to satisfy:

- historical Sharpe above 1;
- Sharpe of at least 0.6 under the internal 12%-of-ATR14 cost stress;
- maximum drawdown no worse than -50%;
- positive Sharpe in each of three broad pre-2025 folds;
- nonnegative calendar-2025 Sharpe;
- nonnegative combined post-2024 Sharpe.

The last two windows were already observed elsewhere in the research program.

They were therefore adverse diagnostics, not pristine holdouts.

Sixteen candidates passed that preparation screen.

Passing did not make them official Q25 entries.

It did not make them sponsor-approved.

It did not make them independent alphas.

It meant only that they survived this particular internal preparation gate strongly enough to justify further inspection.

That distinction is tedious.

It is also the difference between a research note and a sales brochure.

## Four failures stayed failures

The four research-only candidates were:

**DefensiveVolume** — failed calendar 2025 and combined post-2024 nonnegative gates.

**LowMarketBeta** — failed the combined post-2024 nonnegative gate.

**DefensiveMix** — failed the combined post-2024 nonnegative gate.

**SmallNotional** — failed calendar 2025 and combined post-2024 nonnegative gates.

All four had historical Sharpes above one.

DefensiveVolume had a full-period Sharpe around **1.61**.

LowMarketBeta was around **1.77**.

DefensiveMix was around **1.68**.

SmallNotional was around **1.26**.

If historical Sharpe had been the only gate, all four would have looked acceptable.

The more interesting statistic is that the process still said no.

This is what a gate is for.

It is not a decoration around the candidates you already want.

## Calm became interesting for the least glamorous reason

The candidate that drew the most attention was not the one with the highest Sharpe.

It was Calm.

Calm's frozen replay showed approximately:

- Sharpe: **1.273**;
- CAGR: **6.70%**;
- maximum drawdown: **-8.03%**;
- 10%-ATR stress Sharpe: **1.117**;
- 12%-ATR stress Sharpe: **1.064**;
- worst broad pre-2025 fold Sharpe: **0.927**;
- calendar-2025 Sharpe: **0.500**;
- reused post-2024 Sharpe: **0.387**.

None of those numbers made Calm the historical champion.

Its value was different.

Among the twenty additions that passed the internal screen, Calm had one of the lower maximum pre-2025 correlations to the original ten.

Its maximum pre-2025 correlation to the original ten was about **0.786**.

Its maximum reused-recent correlation was lower, about **0.688**.

That still counts as overlap under the internal descriptive labels.

But it was less redundant than most of the twenty-file expansion.

This is what "one family, one seat" looks like in practice.

The model with the biggest backtest number is not automatically the model that improves the roster.

Sometimes the useful reserve is the one that knows a slightly different song.

## Calm also contains a warning

Earlier Calm research showed why recent diagnostics need disciplined labels.

One prior Q25 preview slice for Calm was slightly negative, around **-0.058 Sharpe**, even while its longer historical and validation evidence looked respectable.

That is not a reason to secretly retune Calm until the preview turns positive.

It is a reason to carry uncertainty forward.

The correct sentence is not:

"Calm is good because its long history is good."

Nor is it:

"Calm is bad because one short preview is negative."

The correct sentence is:

"Calm survived the frozen preparation screen, appears less redundant than most recovered reserves, and still requires hosted checks and genuinely forward evidence."

Longer sentence.

Better noun discipline.

## The top historical Sharpes were not the obvious roster winners

Several additional candidates had historical Sharpes materially above Calm:

- ResidualMomentum: about **1.90**;
- MomentumCore: about **1.88**;
- StaticBlend: about **1.87**;
- OnlineExperts: about **1.86**;
- FlowBreakout: about **1.77**.

Many of them also remained strong under the aggressive internal cost stress.

The problem was redundancy.

StaticBlend's full-period maximum correlation to the original ten was about **0.93**.

AdaptiveTrend was about **0.94**.

OnlineExperts was about **0.94**.

Their recent overlap was often even higher.

This is a good example of why portfolio research cannot stop at single-strategy metrics.

A 1.9 Sharpe strategy that reproduces an existing exposure may add less roster value than a 1.27 Sharpe strategy with a genuinely different failure mode.

The portfolio does not get paid for the number of impressive backtests in the folder.

It gets paid for the behavior of the combined capital.

## The audit found mechanical problems too

The twenty-file recovery was not only a performance exercise.

It exposed implementation issues that had to be preserved rather than erased from the story.

A deterministic export assertion caught a provenance-order mismatch.

A restored runtime produced a startup bus error and had to be repaired at the same version.

An import path needed correction.

Several event models exposed rolling-skew warnings on historically absent asset columns.

Two strategies violated the declared common 25% per-name policy in their raw recovered form:

- FlowBreakout reached roughly 28%;
- AdaptiveTrend reached roughly 27%.

The export boundary clipped those targets to the already-declared 25% policy and kept the difference as cash.

That changed expressed portfolio targets.

It did not change the alpha formulas.

The distinction was recorded.

Why include this in a book about alpha?

Because an implementation discrepancy is part of the alpha evidence.

A strategy that cannot survive translation into the intended portfolio constraints has not survived the research process.

## Causality became something we test, not something we claim

All twenty final exports were rebuilt against the recovered original sources.

The audit ran **100 sampled prefix comparisons** across the twenty strategies.

After the documented masks and declared name caps, target drift was exactly zero in those sampled comparisons.

The return-accounting cross-checks also matched the independent translation to machine precision.

Maximum name weight was 25%.

Maximum gross exposure was 95%.

Forbidden exposure was zero.

Those are implementation facts from the local audit.

They are not Quantiacs hosted certification.

The distinction remains important.

The files still require fresh sponsor-data execution, hosted multipass, account-level eligibility, and sponsor correlation/uniqueness review before any claim of official readiness.

A local causal test does not get to impersonate a hosted contest check.

## Thirty files did not replace the core

This is the most important decision in the entire exercise.

After twenty additional historically qualifying files were recovered, the established first-line research priority remained:

1. **V10**
2. **corrected V11**
3. **C165**

The twenty-file packaging exercise did not establish a reason to replace them.

It did not establish twenty new alphas.

It did not trigger twenty submissions.

It did not even establish that the sixteen preparation-screen passes should all be used as reserves.

That restraint is the result.

A research process that discovers twenty new models and immediately needs all twenty has learned almost nothing from Q24.

A research process that can discover twenty plausible models and still say "the core remains unchanged" is at least trying to separate novelty from evidence.

## The new denominator is thirty

The archive now contains thirty portable candidate files in this particular package.

That is not the full historical search denominator.

The real research family is much larger.

This matters because it would be easy to perform a new statistical correction as if these twenty recovered files were twenty fresh independent trials.

They are not.

They were reconstructed from an already-used research archive.

The 2025 and 2026 periods have already influenced earlier campaigns.

Many return streams are highly correlated.

Any clean-looking "twenty trial" significance adjustment would be precision theater.

The honest statement is less satisfying:

The search history is large, dependent, and partially reconstructed.

Therefore future independent evidence matters more, not less.

## The September 6 sieve

The twenty-file exercise adds six practical rules to the book.

### 1. Count return streams, not filenames

Different code can express the same economic bet.

Correlation does not prove identity, but it is an excellent detector of duplicated stories.

### 2. A pass is not a promotion

An internal preparation gate only means the candidate survives that gate.

It does not confer sponsor approval, contest admission, or capital.

### 3. Redundancy can make a larger roster less diverse

More strategies can reduce effective variety when the additions cluster around the same latent exposures.

### 4. Keep mechanical failures in the evidence

Runtime repairs, mask bugs, cap corrections, warning fixes, and provenance issues belong in the record.

Deleting them creates fake cleanliness.

### 5. Let a weaker standalone metric win on portfolio usefulness

The best reserve may be the least redundant acceptable candidate, not the largest historical Sharpe.

### 6. Do not reset the denominator when you repackage old research

Recovered strategies are not fresh trials.

Observed recent data does not become fresh because it appears in a newly generated report.

## Thirty files, one problem

The problem is not finding more strategies.

The problem is finding more independent evidence.

Q23 taught me that one strategy could earn an allocation.

Q24 taught me that many good-looking backtests could fail to transfer.

Q25 is now teaching me that even a large library of acceptable historical systems can collapse into a surprisingly small number of distinct bets.

The next useful improvement may not be strategy thirty-one.

It may be a genuinely different information source.

Or it may be time.

Time has one enormous advantage over another backtest transformation.

You cannot optimize the future after it has already happened.

That makes it expensive.

It also makes it valuable.
