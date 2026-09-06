# Epilogue I — Q24: The Backtest Is Not the Contest

Q23 gave me a dangerous gift.

Evidence that the process could work.

Fourth place in an S&P 500 contest, a $100,000 allocation, and a public result with my account name on it were enough to make the next problem feel deceptively familiar. I had built strategies before. I had survived a live period before. I had watched a leaderboard move before.

Then Q24 changed the asset class.

Crypto.

Top ten by market capitalization.

Long only.

No hiding on the short side when the market turns ugly. No hand-selected favorite coins. The eligible universe changed with historical liquidity. The system had to earn its positions inside the platform's dynamic Crypto Top-10 definition.

The submission deadline was March 31, 2026. The live contest ran from April 1 through July 31.

By the end, my best public Svyable result was not fourth.

It was thirtieth.

`Q24_PARAOU_v3` finished with a contest Sharpe of **1.50**. Its displayed in-sample Sharpe was **2.23**. Its maximum drawdown was **-25.62%** and average turnover **4.56%**. It received no allocation.

That result may be the most valuable page in this book.

Because Q24 did something Q23 could not.

It showed me what happens after a good research process has enough success to become confident in itself.

The answer is: reality finds a new screen for the sieve.

## A 2.23 Sharpe can finish thirtieth

Read that sentence again.

Not because a Sharpe of 2.23 is bad.

Because it was not the contest Sharpe.

It was the in-sample statistic.

This sounds obvious now because we are looking backward. Before a live period, a high in-sample Sharpe feels like evidence with a capital E. It feels earned. The code has been cleaned. The universe is valid. The signal survives. The position rules make sense. The historical curve has lived through several crypto regimes.

A number above two starts to feel less like a backtest and more like a personality trait.

Q24 corrected that feeling.

The strategy that looked like 2.23 in sample produced 1.50 under the contest's live scoring. That was still respectable. It was nowhere near enough to win.

The separation between those two numbers is not a rounding error.

It is the entire problem of quantitative finance.

You observe history.

You build from history.

You select from history.

Then the future asks whether anything survived the selection process besides your ability to explain history.

Q24's answer was: some things survived. Less than I hoped.

## The leaderboard became an experiment ledger

The most revealing part of Q24 is not the best Svyable entry.

It is the family.

The public leaderboard preserves several Svyable systems whose in-sample statistics looked strong and whose contest statistics did not.

`Q24_torchy_v22`: in-sample Sharpe **2.13**, contest Sharpe **0.50**.

`Q24_JPv1`: in-sample **1.89**, contest **0.12**.

`Q24_COMBO`: in-sample **2.59**, contest **-0.24**.

`Q24_HYBRIDVIPERv21`: in-sample **1.99**, contest **-0.66**.

`Q24_TORCHYv1`: in-sample **2.46**, contest **-1.03**.

`Q24_ICv69`: in-sample **2.02**, contest **-1.09**.

Those numbers are not an indictment of quantitative research.

They are quantitative research.

This is what the experiment looks like when the losing variants remain visible.

A cleaned-up memoir would delete them. Keep `PARAOU_v3`, mention the positive 1.50 live Sharpe, explain that crypto was competitive, and move on.

That would waste the evidence.

The failed and mediocre live results tell us something the best one cannot: **in-sample excellence was common enough in my research program that it was not, by itself, discriminating evidence.**

A 2-plus Sharpe was not rare enough to deserve belief.

That is a brutal upgrade to the sifter.

## Q24 made the multiple-testing problem visible

Earlier in the book I wrote that the best result from a large search is partly a statistic about the search itself.

Q24 put names next to that idea.

If one strategy has a high historical Sharpe, maybe you found something.

If ten strategy variants have high historical Sharpes, maybe you found a robust family.

Or maybe you have built a factory capable of producing high historical Sharpes.

Those are not the same achievement.

The more variants you generate, the more important the outside-time screen becomes. Historical ranking among your own strategies can become noisy because all of them were born from the same data, the same research habits, the same factor vocabulary, and often the same broad regime assumptions.

That is why Q24 changed my interpretation of a crowded research archive.

Before, fifty strategies looked like optionality.

After, fifty strategies also looked like fifty lottery tickets whose winning in-sample statistics needed a search-adjustment haircut.

The live contest was the haircut.

## The private models looked better

The contrast was even sharper inside the research archive.

Before Q24 went live, one Hybrid VIPER plus guard-sleeve research run through March 26 reported a Sharpe around **2.53** with a maximum drawdown around **-16.6%**. Later variants in the VIPER family also produced local research Sharpes around two.

Those were real calculations in the research environment.

They were not the public Q24 result.

I cannot prove that those local configurations map one-for-one to any final contest strategy ID, so I will not pretend they do. The useful comparison is at the process level: the research machine was capable of producing extremely persuasive historical models while the public Svyable contest slate produced a much wider range of live outcomes.

That is exactly the distinction the Alpha Sifter is supposed to preserve.

**Research metric. Platform metric. Live metric. Final allocation. Different nouns.**

Q24 made me stop letting them borrow credibility from one another.

## Crypto exposed the risk-control paradox

Long-only crypto creates a strange incentive.

Risk controls are essential because the underlying assets can move violently.

Risk controls can also keep you out of the exact bursts that create most of crypto's upside.

Cash is safety.

Cash is also tracking error when the market rips upward.

A crash brake can save a backtest in one regime and lag the recovery in another.

A slow market-trend filter can reduce drawdown and surrender the first part of a rebound.

A volatility target can keep the portfolio civilized while a less civilized competitor wins the leaderboard.

This is not an argument against risk control.

It is an argument for understanding what the risk control is optimizing.

Q24 reinforced something that fourth place in Q23 could hide: a contest is not merely a test of alpha. It is a test of the interaction between alpha, risk, regime, and the scoring function.

A system can be more survivable and less competitive.

A system can be more aggressive and win a four-month race while being less attractive for permanent capital.

The word *better* is incomplete without an objective.

## The best Svyable strategy did not prove the others were useless

It is tempting to rank the Q24 Svyable strategies by final contest Sharpe and declare the top one the truth.

That would repeat the same mistake at a different layer.

`PARAOU_v3` was the best public Svyable Q24 result under the contest's live scoring.

That does not prove every design decision inside it was superior.

It does not prove its factor family is permanently stronger than VIPER, TORCHY, IC variants, or the combination models.

A four-month live period is evidence, not eternity.

The lower-ranked systems may contain components that become useful in another regime. The correct response is not to resurrect them because they once had a high backtest. It is to treat their live failures as new data about the conditions under which those components deserve capital.

This is the difference between an archive and a graveyard.

A graveyard says dead forever.

An archive says: do not forget why this failed.

## The Q24 sieve

Q24 added five screens to my mental model.

### 1. Search-adjust the historical hero

The better the winning backtest looks after hundreds of trials, the more suspicious the raw statistic becomes.

Not because the model is fraudulent.

Because selection is information leakage from the research process into the result.

### 2. Compare the whole family live

One strategy's live performance can be luck.

A family of related strategies all degrading out of sample tells you something about the shared assumptions.

Q24 supplied that family evidence.

### 3. Preserve platform identity

Do not let a local research file silently become the same thing as a public contest submission.

If the mapping is not recorded, call it lineage.

This sounds pedantic until you are writing a book two contests later and trying to remember which version actually ran.

### 4. Make risk controls state their objective

Are they trying to maximize Sharpe?

Reduce maximum drawdown?

Preserve capital through crypto winters?

Win a four-month contest?

Those can demand different behavior.

### 5. Treat no allocation as a result

No prize is not missing data.

It is data.

The process that reached fourth in Q23 reached thirtieth at best in Q24.

That variance belongs in the model of the researcher.

## The most important Q24 number

I could choose 1.50.

I could choose rank 30.

I could choose the 2.59 in-sample Sharpe that became a negative contest Sharpe for `Q24_COMBO`.

The number I care about most is simpler.

**Zero allocations.**

Not because zero is satisfying.

Because it prevented Q23 from becoming a personal theory of inevitability.

A good process had a good contest.

Then a good process had a bad contest.

Now we had a research program.

The purpose of a methodology is not to guarantee the next outcome.

It is to improve what you learn from the outcome you get.

Q24 taught the lesson more cleanly than another top finish could have:

The backtest is not the contest.

The contest is not the future.

And one success is not a license to stop sifting.
