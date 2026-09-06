# Chapter 2 — A Contest Is a Laboratory

A trading contest looks like a market with a scoreboard attached.

It is more accurate to think of it as a laboratory with a market attached.

The distinction matters because laboratories have protocols.

Q23 had a defined universe, a submission process, a live period, a ranking metric, eligibility rules, allocation tiers, and practical constraints on what code could do. Those things did not sit outside the investment problem. They *were* part of the investment problem.

This is easy to underestimate when you first arrive at a platform like Quantiacs. The interface invites the fun part. Load data. Write a strategy. Run a backtest. Watch an equity curve appear. Improve it. Submit.

The administrative details feel secondary.

Then the administrative details decide who gets funded.

## Every objective function creates a species

Give a room full of smart people a metric and enough time, and they will evolve toward it.

That is not cynicism. It is optimization.

If a contest ranks eligible systems by live Sharpe ratio, contestants will search for systems that can generate attractive live Sharpe. If only a limited number of submissions can enter, researchers will build portfolios of strategies as well as portfolios of stocks. If strategies must pass historical performance thresholds before submission, researchers will care about those thresholds. If manual asset selection creates an eligibility problem, universe construction becomes part of the model rather than an afterthought.

The rules shape the population of strategies that survive.

This is true far beyond contests.

Bank capital rules shape bank portfolios.

Index inclusion rules shape flows.

Compensation plans shape executives.

Quarterly reporting shapes corporate behavior.

A benchmark shapes a fund manager even when the fund manager insists it does not.

When you measure performance, you do not merely observe a system. You alter what the system wants to become.

Q23 made that visible.

## The market problem and the contest problem

There were two problems to solve.

The first was the obvious one:

> Can I produce a portfolio from S&P 500 data whose future returns are better than random in a way that survives risk adjustment?

The second was less glamorous:

> Can I produce such a portfolio while satisfying the contest's definition of an eligible strategy?

These are related problems. They are not identical.

A strategy can be a fascinating research object and a bad contest submission.

A strategy can be a clever contest submission and a bad real-money portfolio.

A strategy can even have a wonderful live return and fail an eligibility rule that has nothing to do with whether its predictions were profitable.

You have to know which problem you are solving at every step.

One of the most persistent mistakes in optimization is assuming the objective is obvious. It rarely is.

"Make money" is not an objective function.

Make how much money? Over what horizon? With what volatility? With what drawdown? Using what capital? Under what liquidity? With what leverage? Against what benchmark? Subject to what legal, operational, tax, mandate, and behavioral constraints?

The moment those questions are answered, a different strategy may become optimal.

## Why live periods are cruel and necessary

Backtests are generous hosts. They allow you to keep returning to the kitchen.

You can change the window. Add a filter. Remove a filter. Try a different normalization. Decide 10 stocks were too few and 20 were too many. Discover that 11 is charming. Change the start date. Change the rebalance frequency. Add a volatility control. Remove it. Blend momentum with mean reversion. Change the blend.

Every choice can be reasonable.

The cumulative freedom is deadly.

If you test enough reasonable choices on one historical record, history will eventually tell you exactly what it wants to hear.

A live contest period removes the kitchen.

Yesterday closes.

You may have a model that was designed using everything known before the period. Then new data arrives one day at a time. The strategy has to behave. No researcher can travel backward and make last Tuesday's parameter slightly less embarrassing.

This is why live performance is not merely another sample. It is a different epistemic category.

It contains fewer escape hatches.

That does not make a four-month live period a proof of permanent alpha. Four months can be lucky. A regime can favor one style. One concentrated position can dominate. A risk factor can masquerade as stock selection.

But live data does something historical data cannot do: it freezes your past decisions.

That makes it expensive information.

## Submission limits change research behavior

Quantiacs allows many running submissions but only a subset to participate in a contest. During Q23, public support discussion described the system as allowing up to 50 running strategies while only 15 could be selected for a contest.

That creates an unusual second-order problem.

You are not only selecting stocks.

You are selecting strategies that select stocks.

Imagine 50 candidate systems. Some are momentum-heavy. Some are mean-reversion-heavy. Some trade broadly. Some concentrate. Some are highly correlated with one another. Some have stronger historical Sharpe. Some are newer and less explored. You have 15 seats.

Which systems deserve them?

If you choose the 15 highest backtest Sharpes, you may accidentally select 15 versions of the same idea.

If you choose for diversity, you may leave a historically strong system outside.

If the platform auto-selects by a metric, then your research process has to anticipate what auto-selection will favor.

This begins to resemble ensemble design.

A contest with submission limits teaches the researcher a lesson that ordinary backtesting can hide: **ideas compete for capital before stocks do.**

Every new signal consumes attention, complexity budget, validation time, and eventually portfolio capacity.

The question is not "Does this signal work?"

The question is "Does this signal deserve a seat?"

## The rulebook is part of the dataset

Quant researchers are trained to treat price, volume, fundamentals, and metadata as data.

Rules are data too.

A universe rule tells you which assets can legally enter a portfolio.

A survivorship-bias rule tells you which historical reconstruction is considered valid.

A concentration limit changes the payoff distribution.

A runtime limit affects which models can be deployed.

A correlation rule changes the value of originality.

A live scoring metric changes what kind of risk is rewarded.

This is not paperwork. It is state.

If a strategy does not model the relevant state of its environment, the strategy is incomplete.

The Q23 aftermath made this painfully clear. Public discussion on the Quantiacs forum documented strategies being rejected over manual asset selection or high correlation concerns. Support emphasized that the contest was intended to trade the full S&P 500 universe rather than quietly becoming a Nasdaq-100 contest through filtering choices.

You can debate the interpretation. Contestants did.

But the larger lesson is harder to debate: a strategy does not get to choose the rules by which it is judged after the result appears.

Neither does a business.

Neither does an investor.

Neither does a model in production.

## Contests expose hidden incentives

There is a healthy discomfort in saying, "I optimized for a contest."

Good.

Keep it.

The discomfort reminds you that not every form of alpha transfers.

Suppose the allocation ladder jumps sharply between ranks. A rational contestant may accept more uncertainty for a small chance of leaping several positions. A personal retirement portfolio should not automatically copy that behavior.

Suppose a four-month Sharpe ranking rewards smoothness over raw return. A contest strategy may prefer a certain balance of concentration and volatility that differs from a ten-year capital-growth objective.

Suppose the contest has no transaction-cost model that fully resembles the account you would actually trade. Turnover has a different meaning.

The laboratory gives you clean conditions by simplifying reality. The simplification is what makes an experiment possible. It is also what limits the conclusion.

A good scientist leaves the laboratory knowing both things.

## My favorite thing about the laboratory

The best feature of a contest is not the prize.

It is embarrassment at scale.

You can be wrong in private for years. A private backtest can always be one parameter away from greatness.

A contest forces the model into a public-ish sequence of deadlines and outcomes. The leaderboard does not care how persuasive the notebook looked. The eligibility review does not care how attached you are to a universe filter. The live period does not care how many historical regimes the strategy conquered in a Jupyter cell.

A laboratory gives reality a structured way to answer back.

That is why I would enter another one.

Not because fourth place proves contests are easy.

Because fourth place proves they are uncomfortable enough to teach you something.
