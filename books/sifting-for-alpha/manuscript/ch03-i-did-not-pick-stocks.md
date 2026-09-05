# Chapter 3 — I Did Not Pick Stocks

The phrase *stock picking* gives the wrong picture.

It suggests a person leaning toward a screen, developing a view about a company, and making a choice.

I like this management team.

I hate this balance sheet.

That product is going to explode.

This chart looks terrible.

Buy this. Avoid that.

The quantitative version I was working toward was almost the opposite. The goal was to make the individual company less interesting than the rule that caused it to appear.

I did not want to pick stocks.

I wanted to build a machine that could pick without remembering the story I had told myself about the company yesterday.

That sounds like semantics until survivorship bias enters the room.

## The easiest way to cheat without noticing

Imagine that you want to test a strategy on the S&P 500 over twenty years.

You download the list of companies in the S&P 500 today.

Then you ask how your strategy would have performed on those companies over the prior twenty years.

Congratulations. You have already used the future.

Today's membership tells you something about which companies survived, grew, remained liquid, avoided acquisition, avoided bankruptcy, or otherwise stayed important enough to be in the index now. A backtest built on the current list quietly removes many historical failures before the strategy even begins.

The code can be perfect and the experiment can still be contaminated.

This is one reason dynamic universe construction mattered so much in my work. If a stock was not eligible on a historical date, the strategy should not be allowed to pretend it was. If a stock became eligible later, the model should discover it later. Liquidity and membership are not decorative masks applied at the end. They determine what the strategy was allowed to know and trade.

The principle is broader than index membership:

**A backtest should have the same ignorance the strategy would have had at the time.**

That is one of the cleanest definitions of honest research I know.

## No manual picks is a design constraint

There is a practical reason to avoid manual stock selection: contest eligibility.

There is a more interesting reason: intellectual hygiene.

If I can manually exclude a company because I know its history, I can make almost any strategy look more sensible. I can remove the catastrophic names. I can choose the sector that happened to lead. I can focus on the glamour stocks that survived. I can accidentally smuggle a decade of hindsight into one innocent-looking list.

The easiest defense is not more discipline.

It is less discretion.

Make the machine do the selection.

That does not eliminate judgment. It moves judgment to a more auditable level.

Instead of saying "trade these eleven companies," I have to say something like:

- start with the eligible historical universe;
- require sufficient liquidity;
- compute the same factor definitions for every eligible asset;
- rank them according to a rule known in advance;
- allocate according to a position-sizing rule;
- repeat when new data arrives.

Now the stock can change and the method remains.

That is what makes a stock-selection *system* different from a stock list.

## The machine still contains opinions

Quants sometimes talk as if removing discretion removes subjectivity.

It does not.

Who chose the factors?

Who chose the lookbacks?

Who chose the normalization?

Who chose the rebalance frequency?

Who chose the universe?

Who chose whether to neutralize sectors, scale volatility, cap weights, or permit shorts?

The machine contains opinions everywhere. The benefit is that the opinions are explicit enough to be tested.

A discretionary investor may say, "This stock has strong momentum but looks overbought."

A quantitative investor has to decide what *strong*, *momentum*, and *overbought* mean numerically.

That precision does not make the second investor smarter. It makes the second investor easier to audit.

I could see when a rule failed. I could compare it against another rule. I could ask whether the result depended on one threshold. I could remove the factor and measure the damage. I could invert the signal. I could test a different period.

The opinion became falsifiable.

That is the real advantage.

## Selection is ranking under uncertainty

As the research became more factor-oriented, I stopped thinking of the problem as "Which stock is good?" and started thinking of it as "Which stock is better *relative to the current cross-section*, given the information I am allowing the model to use?"

That is a different mental model.

Absolute predictions are hard.

Will Company A rise 8 percent next month?

Good luck.

Relative rankings can be slightly less ambitious.

Given the current set of eligible companies, do the combined signals suggest that A is more attractive than B, C, and D?

A ranking does not need to know the future return with precision. It needs some ability to order opportunities better than chance.

That is where information coefficient becomes useful. Instead of asking whether a factor produced a beautiful standalone equity curve, ask whether high factor values tended to be associated with higher future returns, or whether the rank ordering had predictive content.

Now the factor can be judged before it becomes a full portfolio.

A weak factor might still add value if it is different from the others.

A strong factor might add little if it is just another costume for momentum.

This is why the number of indicators in a model matters less than the number of genuinely independent ideas.

Twenty indicators can be one opinion wearing twenty ties.

## The problem with a top eleven

At one point I described a Q23 approach as roughly twenty factors, ranked by information coefficient, feeding a concentrated basket of top-ranked stocks.

The surviving record refers to a top-eleven-style concentration.

That detail is interesting precisely because it raises more questions than it answers.

Why eleven?

Was eleven a robust region or one lucky integer?

Did ten behave similarly? Twelve? Twenty?

How much of the return came from the ranking method and how much came from concentration?

Did the same names dominate multiple factors?

Was the model diversified by signal but concentrated by stock?

These are the questions that turn a portfolio construction choice into research.

If a model only works at eleven and collapses at ten or twelve, I become suspicious.

If performance is broadly similar across a neighborhood of portfolio sizes, I become more interested.

Robust systems usually have plateaus.

Overfit systems have needles.

That rule alone can save enormous amounts of time.

## A stock is the output, not the thesis

Readers naturally want the names.

What did you own?

Which stock made the difference?

Was there one monster winner?

Those questions are satisfying because names are memorable. Methods are not.

But a book about the names would expire quickly. More importantly, the surviving record does not establish a definitive list of the final allocated system's live positions, and I will not reverse-engineer one from memory.

The durable idea is that each name should be treated as an output of a repeatable selection mechanism.

If the system likes Apple today, the interesting question is not whether Apple is a great company.

The interesting question is what evidence made Apple rank where it did, whether that evidence was available at the time, and whether the same rule would have selected a completely different company in a different year.

If the answer is yes, the machine may be doing research.

If the answer is "I knew Apple would win," the machine may be doing theater.

## The third sieve: remove the ticker symbol

Here is a test I wish more investors used.

Take the ticker symbols out of the research report.

Call the stocks A, B, C, and D.

Do you still like the rules?

Does the factor still make sense when you cannot see the company story?

Does the position size still look reasonable when you do not know that A is a famous technology company and D is an obscure industrial supplier?

Can you justify the signal without telling a narrative about management, products, headlines, or personal conviction?

For a systematic strategy, the answer should mostly be yes.

The ticker is where the model's abstract judgment becomes a trade.

It should not be where the research begins.

That is why I did not pick stocks.

I built rules that were forced to pick them for me.
