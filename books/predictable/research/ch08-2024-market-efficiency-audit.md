# Chapter 8 research note: accuracy is not efficiency

## Claim under review

Chapter 8 uses the 2024 election to make a useful distinction: prediction markets can update quickly and still be wrong. The post-election evidence now lets the chapter make a sharper distinction.

A market can be **well calibrated in aggregate**, **correct on many contracts**, and still be **locally inefficient, thin, stale, or vulnerable to a small order moving the displayed price**. Those are different properties. Treating any one of them as proof of the others gives the quoted probability more authority than the mechanism has earned.

This matters because the chapter currently moves from Kalshi's presidential-market success, to Iowa's popular-vote miss, to a general discussion of liquidity and manipulation. The sequence is directionally sound, but the strongest post-2024 evidence suggests that the contrast should be framed around market structure rather than around which venue happened to call one headline outcome correctly.

## 1. The Iowa miss is real, but its own record contains the mechanism

Thomas Gruca and Thomas Rietz's account of the 2024 Iowa Electronic Markets is unusually useful because it was published online on October 15, 2024, before Election Day, so the forecast cannot be reconstructed after the result.

On September 29:

- the thinly traded vote-share market implied a **9-point Democratic popular-vote margin**;
- the more heavily traded winner-takes-all market implied an **85.7% probability of a Democratic popular-vote win**;
- combining the markets produced a **6–7 point Democratic margin** and an **87.0% probability of a Democratic popular-vote win**.

Donald Trump ultimately won the popular vote.

The useful part is not merely that an 85.7% forecast lost. Probabilistic forecasts are supposed to lose sometimes. The paper also documents a concrete microstructure failure before the election. In late August, one trader submitted large Democratic bids as much as ten cents above then-current prices, exhausted part of the ask queue, created an arbitrage opportunity, and left stale last-trade prices behind after bids and asks had recovered. The authors explicitly describe stale prices as a weakness of the thin vote-share market and show that a method using standing bids and asks produced a more reasonable forecast during the episode.

**Source:** Thomas S. Gruca and Thomas A. Rietz, “Iowa Electronic Markets: Forecasting the 2024 U.S. Presidential Election,” *PS: Political Science & Politics* 58(2), published online October 15, 2024.

https://doi.org/10.1017/S1049096524000921

The chapter should preserve the distinction between the two Iowa contracts. Calling “the Iowa market” wrong is convenient but imprecise: one contract was explicitly thin; another was more actively traded; and their joint forecast still assigned a nontrivial probability to the eventual outcome.

## 2. A cross-platform 2024 postmortem complicates the victory story

Joshua Clinton and TzuFeng Huang's 2026 post-election study examines political contracts across the Iowa Electronic Markets, Kalshi, PredictIt, and Polymarket. The latest public abstract reports roughly 2,200 actively traded political markets and more than $3.2 billion in platform-reported volume during the final nine weeks of the campaign.

Their top-line result is favorable to markets: **86% of the actively traded contracts performed better than a coin flip, and prices were generally well calibrated**.

But much of that apparent accuracy came from easy-to-classify contracts. About **66% of markets were priced below $0.20 or above $0.80 on the eve of Election Day**, and 96% of that group resolved in the direction the price favored. Only about **12%** of markets sat between $0.40 and $0.60; among those genuinely close contracts, the priced favorite won only **55%** of the time.

The study also separates calibration from efficiency. Related contract prices tended to move together in level, but daily changes were much less synchronized, and presidential winner-take-all contracts offered recurring cross-platform arbitrage opportunities. In other words, a collection of markets can look sensible in aggregate while equivalent claims temporarily carry different prices depending on where they trade.

**Source:** Joshua D. Clinton and TzuFeng Huang, “Prediction Markets? The Accuracy and Efficiency of Political Prediction Markets in the 2024 Presidential Election,” SocArXiv / Center for Open Science, revised 2026.

https://doi.org/10.31235/osf.io/d5yx2

This is a working paper rather than a final peer-reviewed verdict. It should be treated as strong new empirical evidence, not as the last word on market performance.

## 3. The strongest counterevidence: large-scale Kalshi data show real calibration

The chapter should not use the 2024 inefficiency evidence to imply that quoted market probabilities are mostly decorative.

Kalshi's research group published a large calibration study in August 2026 using the exchange's complete history of resolved markets from launch through mid-2026: **2,243,741 markets across eleven categories**. The authors report that calibration improves markedly as resolution approaches. Excluding the platform's “Exotics” category, the reported Brier score falls from roughly **0.08–0.09 at a three-month horizon to about 0.02 at close**, while reliability curves increasingly track the ideal calibration line. They also report better calibration as trading volume and the number of participating traders rise.

**Source:** Kalshi Research, “Calibration In Prediction Markets — Theory and Evidence,” August 2026.

https://kalshi.com/research/publications/calibration

This is valuable counterevidence because it directly supports the chapter's positive mechanism: deeper participation can sharpen a price, and a well-functioning market can behave probabilistically in aggregate.

It also needs a source-boundary sentence. Kalshi is studying its own exchange, and aggregate calibration is not the same thing as showing that every individual market is efficient, manipulation-proof, or based on diverse information. Near-resolution calibration is also an easier standard than long-horizon forecasting because much of the underlying uncertainty has already disappeared.

The right conclusion is therefore not “the 2024 postmortem debunks prediction markets” or “Kalshi proves market prices are probabilities.” The evidence supports a conditional claim: **market prices can be impressively calibrated when participation, liquidity, contract design, and time-to-resolution are favorable, while local prices can still be wrong or temporarily inefficient.**

## 4. Current 2026 evidence makes liquidity more than a hypothetical caveat

The chapter's present manipulation discussion uses the familiar thought experiment of a rich partisan trying to push an election price away from other traders' beliefs. New midterm-cycle evidence makes that issue more concrete, although the source should be handled carefully.

The Anti-Corruption Data Collective reported in August 2026 that it examined **7,466 markets** tied to 2026 U.S. House and Senate races across Kalshi, Polymarket, and Polymarket US, with data through August 10. It found that **87%** of those markets were either low-volume (under $10,000 wagered) or high-volume but concentrated among very few traders. On Polymarket, the top 1% of wallets accounted for 68% of midterm trading volume, and only ten wallets accounted for 17% of total volume across the markets ACDC analyzed.

**Source:** Anti-Corruption Data Collective, “A Handful of Bettors Are Setting the Odds on the 2026 Midterms, New Analysis Finds,” August 17, 2026.

https://acdatacollective.org/work/a-handful-of-bettors-are-setting-the-odds-on-the-2026-midterms-new-analysis-finds/

A September 9 follow-up, reported by Reuters, found that relatively small orders could move the displayed odds substantially in many congressional markets. Kalshi and Polymarket rejected the implication that such a move would create durable mispricing, arguing that an artificially attractive price recruits traders to take the other side and can self-correct rapidly.

**Independent reporting:** Reuters, “Prediction markets shift US election odds on small bets, researchers say,” September 9, 2026.

https://www.reuters.com/legal/government/prediction-markets-shift-us-election-odds-small-bets-researchers-say-2026-09-09/

The rebuttal is substantive and should stay with the claim. **Movability is not the same as manipulability.** Showing that one order can move a thin book does not show that a false price can be held there cheaply once profit-seeking traders respond. But temporary movability still matters when journalists, campaigns, social feeds, or other markets treat the displayed price as an informational signal before correction occurs.

## Strongest counterargument

A critic of the chapter's skepticism can make a strong case:

Prediction markets do not need every contract to be efficient every minute. Ordinary financial markets contain stale quotes, cross-venue arbitrage, concentrated informed traders, and occasional manipulation attempts too. If election-market prices are broadly calibrated, improve with participation, and reward traders for correcting errors, then local imperfections may be evidence that the mechanism is working rather than evidence against it. The Iowa miss is especially weak evidence by itself: an event priced at 85.7% is supposed to fail about one time in seven if the probability is honest.

That objection substantially narrows what the manuscript should claim. The chapter should not present an election miss as a refutation of prediction markets. It should ask a different question: **what evidence would let a reader know whether a particular displayed price deserves the reliability implied by the decimal?**

The answer requires information the number itself hides: depth, spread, concentration, contract wording, time to resolution, related-market consistency, and whether an apparent move survives arbitrage.

## Editorial implication

A later prose pass can sharpen Chapter 8 without making it longer.

The best revision is probably to replace several generic paragraphs about “deep” versus “shallow” markets with the August 2024 Iowa order-book episode, then use the cross-platform 2024 evidence to separate four concepts that the public often collapses:

1. **directional accuracy** — did the priced favorite win?
2. **calibration** — do events priced near 70% occur about 70% of the time across many comparable contracts?
3. **efficiency** — does available information, including equivalent prices elsewhere, get incorporated quickly enough to remove exploitable discrepancies?
4. **robustness** — can a modest order or concentrated trader move the displayed probability far from the price that would prevail in a deeper book?

The conceptual payoff is cleaner than “markets good” or “markets bad.” A prediction price is a measurement produced by a market. Before treating the measurement as knowledge, inspect the instrument.

That sentence should not become a sloganized chapter ending. The useful work is the concrete mechanism above it: one trader, a thin queue, a stale last price, an arbitrage opportunity, and a number that looked more precise than the order book underneath it.
