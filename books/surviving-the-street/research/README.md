# Research Trail — Surviving The Street

This folder is the evidence trail for *Surviving The Street: Leveraging Analytics, Information, and Behavior to Beat the Market*.

The book should read quickly and check slowly. Its claims need to survive contact with filings, datasets, market rules, academic evidence, and the inconvenient fact that many strategies look strongest immediately before their weaknesses are understood.

## Evidence rules

1. Separate **market arithmetic** from empirical claims. Drawdown math, compounding, and payoff geometry can be derived directly. Claims about what investors, funds, markets, factors, or institutions actually did need sources.
2. Prefer primary sources for events: SEC filings, exchange notices, regulatory reports, court records, Federal Reserve releases, fund letters when authentic, and contemporaneous company disclosures.
3. Prefer original datasets or established research libraries for quantitative claims. Record definitions, sample windows, revisions, survivorship treatment, transaction-cost assumptions, and the difference between in-sample and out-of-sample evidence.
4. A backtest is evidence about a rule applied to a dataset, not proof that the rule was tradable, known in advance, robust, or profitable after costs.
5. A famous trade is a case, not a prevalence estimate. Do not turn Michael Burry, GameStop, LTCM, Renaissance, Berkshire Hathaway, Archegos, or any other vivid example into evidence for a universal rule.
6. Treat the efficient-market argument as a real competing explanation. If a proposed edge disappears after costs, publication, crowding, revised data, or better controls, the manuscript should narrow the claim rather than rescue it rhetorically.
7. Distinguish information advantage from illegal or nonpublic information. This book is about lawful research, interpretation, timing, structure, and behavior.
8. Preserve uncertainty. If the public record cannot establish a trader's motive, exact P&L, position, or causal mechanism, do not invent it.
9. Keep the book educational. No chapter should imply a guaranteed return, a universal allocation, or a personalized recommendation.

## Core public-data sources

These are starting points, not automatic authorities for every claim.

- SEC EDGAR filings search: https://www.sec.gov/search-filings
- Federal Reserve Economic Data (FRED): https://fred.stlouisfed.org/
- Federal Reserve FOMC calendars, statements, minutes, and projections: https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm
- CFTC Commitments of Traders public reporting: https://publicreporting.cftc.gov/stories/s/r4w3-av2u
- FINRA margin rules and customer margin-balance statistics: https://www.finra.org/rules-guidance/key-topics/margin-accounts
- Kenneth R. French Data Library: https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html
- U.S. Bureau of Labor Statistics: https://www.bls.gov/
- U.S. government open-data catalog: https://data.gov/

## Research lanes

### Survival, leverage, and forced selling

Develop sourced cases where the investment thesis and the financing structure diverged. Candidate cases include Long-Term Capital Management, Archegos, levered volatility products, broker margin episodes, and funds that were directionally right but unable to carry the position. The purpose is not a museum of blowups. Each case should isolate a different mechanism: leverage, liquidity mismatch, concentration, path dependency, margin, or counterparty behavior.

### Analytics

Test the gap between a persuasive historical relationship and a usable investment rule. Use factor datasets, published anomalies, replication work, transaction-cost literature, revisions to accounting data, and examples of signals that weakened after publication or crowding. Keep the distinction between statistical significance, economic significance, and investability visible.

### Information

Follow the path from raw disclosure to market reaction. SEC filings, earnings releases, conference calls, economic releases, exchange notices, and positioning data are useful because they make timing observable. The chapter on information half-life should ask not only whether a fact is public, but when it became machine-readable, widely distributed, interpreted, and incorporated into price.

### Behavior

Use behavioral-finance research carefully. Avoid a greatest-hits catalog of cognitive biases. The useful question is how a known tendency changes an actual investing decision: position sizing, averaging down, selling a winner, refusing to update, joining a squeeze, or abandoning a process after a drawdown.

### Market structure

Develop concrete explanations of order books, spreads, liquidity, market impact, auctions, options positioning, short interest, borrow constraints, and forced flows. Market structure should appear when it changes the meaning of price, not as technical decoration.

## Candidate narrative cases

These require source development before they enter manuscript prose.

- The 1998 Long-Term Capital Management rescue as a leverage/liquidity case.
- The 2021 GameStop episode as a market-structure, crowd, options, short-interest, and forced-flow case.
- Archegos in 2021 as a concentration, derivatives, disclosure, and prime-broker risk case.
- The 2008 crisis for the difference between being early, being right, and being financeable.
- Factor crowding and post-publication decay as an analytics case.
- Corporate filings where the decisive fact was public before it became a headline.
- FOMC days and scheduled economic releases as examples of information clocks rather than information surprises alone.
- Sven Hardy Benson's documented Quantiacs research, where useful, as a first-person test of backtest discipline rather than as proof of a universal strategy.

## Falsification questions

The manuscript should be willing to answer these against itself:

- If markets are highly efficient, what exactly remains for the individual investor to exploit?
- Does a claimed behavioral edge survive transaction costs, taxes, latency, and capacity?
- Is a signal genuinely predictive, or is it compensation for bearing a risk that occasionally becomes intolerable?
- Is the information advantage actually interpretation, or merely hindsight about which public fact mattered?
- Can a process be followed during a drawdown large enough to threaten the investor's financial life?
- Does the book confuse "beating the market" with taking more hidden risk than the benchmark?
- Would the strategy still look attractive if the best decade, sector, or handful of names were removed?

## Relationship to Sifting for Alpha

*Sifting for Alpha* is an existing Desk book built around Sven Hardy Benson's documented Q23 Quantiacs result and the research process around quantitative contest strategies.

*Surviving The Street* should not retell that book. It may reuse verified facts or research artifacts when they illuminate a general mechanism, but its center of gravity is different: how an investor creates and protects decision quality across analytics, public information, market structure, and behavior. The Quantiacs material is one laboratory among many, not the plot.


## Drafted section source notes

- [Part I — Survival source notes](part-i-source-notes.md)
