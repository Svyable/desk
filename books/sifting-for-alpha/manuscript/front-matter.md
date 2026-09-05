# Sifting for Alpha

## How I Won Fourth Place in the Q23 Quantiacs Stock-Picking Contest

### Sven Hardy Benson

---

## Author's Note

Fourth place is an awkward place to write a victory book from.

Perfect.

First place invites mythology. The winner gets to point at the scoreboard and work backward, turning every experiment into foresight and every lucky break into process. Fourth place does not offer that luxury. Fourth place sits close enough to the top to be taken seriously and far enough away to leave questions.

Those questions are the book.

The public result is simple. Quantiacs' published winner table for its Q23 S&P 500 Long-Short contest lists the account **Svyable** in the fourth allocation slot. That slot carried a **$100,000 allocation**. The contest's live period ran from September 1, 2025, through January 1, 2026.

Everything interesting happened before, during, and after that sentence.

I did not begin with a secret factor delivered on a stone tablet. I began the way most quantitative projects begin: with a growing pile of things that might work. Moving averages. Relative strength. Rate of change. Volatility. Filters. Ranking rules. Position caps. Long signals. Short signals. Different universes. Different lookbacks. Combinations that made intuitive sense. Combinations that made mathematical sense. Combinations that made no sense but produced a pretty backtest anyway.

The problem was never a shortage of ideas.

The problem was deciding what to throw away.

That is why this book is called *Sifting for Alpha* rather than *Finding Alpha*. Finding implies there is a nugget buried in the dirt and your job is to locate it. Sifting is more humiliating. Most of what passes through your hands is dirt. You do not get rewarded for how exciting a signal looked on Tuesday night. You get rewarded for what remains after leakage checks, universe checks, liquidity checks, portfolio constraints, out-of-sample disappointment, live trading, competition rules, and the discovery that markets have no obligation to respect your thesis.

I eventually came to think of the process as an **alpha sifter**: a sequence of gates designed less to prove an idea than to make it earn the right to survive another round.

That distinction matters. Quantitative research becomes dangerous when the researcher behaves like a defense attorney for a beloved model. Every new parameter becomes an argument for acquittal. Every bad period gets explained away. Every good period becomes evidence of genius. The backtest turns from an experiment into a hostage negotiation.

A sifter behaves differently. It is built to reject.

Does the idea have an economic or behavioral reason to exist? Reject it if not.

Does it depend on information that would not have existed at the time? Reject it.

Does it survive a changing stock universe rather than a list of today's survivors? Reject it if it cannot.

Does the return disappear when position size is capped? Good. You just learned what the "alpha" was made of.

Does it survive outside the period that inspired it? Does it survive a different regime? Does it survive liquidity constraints? Does it survive being combined with other signals? Does it survive the live period, where yesterday can no longer be rewritten?

Most ideas should die somewhere in that sequence.

Mine did.

Many times.

One early S&P 500 experiment used a nine-day simple moving average against a nine-day exponential moving average. The backtest from 2006 through late 2024 was not merely mediocre; it was bad enough to be useful. The Sharpe ratio was negative, equity had deteriorated badly, and drawdown was severe. That result taught more than a beautiful equity curve would have. Two almost identical short-horizon trend measures were mostly measuring noise against noise. The strategy was trading the argument between cousins.

Later research became richer: RSI, ROC, volatility, ATR, multi-horizon momentum, mean reversion, long-short ranking, dynamic liquidity, factor combinations, and eventually an approach I described as roughly twenty factors ranked by information coefficient. The models became more elaborate. The central job did not change.

Keep sifting.

The contest itself added another sieve. Quantiacs did not simply ask for the best historical chart. Strategies had to satisfy submission rules, survive live scoring, fit the eligible universe, avoid prohibited stock selection practices, and live with a limited number of contest entries. During Q23, disqualifications changed the final ordering. The public winner table that emerged from that process put Svyable fourth.

I am not going to pretend that this makes the fourth-place system a universal recipe. A contest is a strange market ecology. It has deadlines, scoring rules, allocation tiers, eligibility filters, and a leaderboard. Those incentives matter. Optimize too aggressively for them and you may win a contest while building something you would never fund with your own money. Ignore them and you may build something interesting that never qualifies.

So this is not a cookbook whose final page says BUY THESE ELEVEN STOCKS.

It is a book about building a machine that can say no.

No to the seductive backtest.

No to the factor that exists only because you stared at enough factors.

No to the hand-picked universe that quietly imports hindsight.

No to the giant position that turns one lucky name into a strategy.

No to the assumption that a high Sharpe ratio is the same thing as truth.

And, eventually, no to the comforting story that rank alone tells you what happened.

I once described myself as being "so close to winning Q23" and believed I had the highest gross return, about 20.6 percent. That statement belongs in this story, but so does the scoreboard. Gross return was not the scoring system. Rank was not awarded for the best anecdote. The contest had its own definition of success.

That gap—between the number you want to brag about and the number the system actually rewards—is where a surprising amount of investing wisdom lives.

Fourth place taught me to look there.

---

## A note on reconstruction

This manuscript is built from surviving research conversations, code concepts, backtest notes, public Quantiacs records, and contemporaneous descriptions. The historical trail is incomplete. In particular, the surviving material does not yet establish the exact final winning submission name, its final contest Sharpe ratio, or a definitive list of positions held during the live period.

Those facts are therefore not invented here.

Where the book describes an earlier model—a moving-average experiment, a volatility-scaled long-short portfolio, a factor-ranking concept—it is presented as part of the research lineage unless the surviving record explicitly connects it to the allocated Q23 system.

That limitation is not an embarrassment. It is consistent with the thesis.

Good research begins by refusing to turn missing data into a story.
