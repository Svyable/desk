# Epilogue II — Q25: Before the Bell

Q25 has not started yet.

That is precisely why it belongs in the book.

The submission period runs through September 30, 2026. The live contest begins October 1 and ends January 31, 2027. As I write this epilogue, there is no Q25 contest Sharpe for Svyable, no final rank, no allocation, and no legitimate sentence beginning with "I won."

There is only the work before the bell.

And the work looks different now.

Q23 was about discovering that a pile of experiments could be sifted into a funded strategy.

Q24 was about discovering that the same researcher could bring a shelf of impressive in-sample systems into a live contest and still finish outside the money.

Q25 is about what happened to the research process after both lessons were allowed to remain true.

The result is less glamorous.

It is also much harder to fool.

## The new objective is not to fill fifteen seats

Quantiacs allows up to fifty running submissions and fifteen contest entries.

Earlier in the book I treated that as a selection problem: fifty experiments, fifteen seats.

Q25 added a more important possibility.

Leave seats empty.

By late August, my research archive contained enough historically qualifying strategy variants to make a fifteen-name roster look easy. A first pass could have filled all fifteen and called the abundance diversification.

The review did the opposite.

It identified a much smaller first-line core:

`V10` — the AQR-style Pareto ensemble.

`V11_balanced` — a new-only event ensemble.

`C165` — a mobility / consensus-risk construction.

Two more systems survived as specialized alternates:

`V12` — signed-volume diffusion.

`CoCrash126` — a defensive co-crash shelter.

Ten other names remained conditional or redundant reserves.

The language matters.

Not "fifteen alphas."

Not "fifteen entries."

A research inventory of fifteen, with three first-line candidates.

That may be the largest philosophical change between Q23 and Q25.

In Q23, scarcity meant deciding which good-looking systems deserved the available slots.

In Q25, scarcity became something I imposed on myself.

A slot had to remain empty unless a strategy added evidence, not just another filename.

## Three beat fifteen

The matched research evidence gave that restraint a number.

The equal-weight three-strategy core—V10, V11 Balanced, and C165—had a **selection-period Sharpe of about 2.46** and a **post-2024 diagnostic Sharpe of about 1.11**.

The equal-weight full fifteen-strategy inventory had a lower selection Sharpe, about **2.22**, and a much weaker post-2024 diagnostic Sharpe, about **0.58**.

More strategies produced less convincing evidence.

This is not a universal theorem that three is better than fifteen.

It is a concrete example of something investors say and rarely operationalize:

**Diversification by count is not diversification by source of return.**

If several models are variations of the same trend, quality, residual-momentum, or risk-control idea, adding all of them can dilute the distinct signals while preserving the shared failure mode.

Q25's research archive made those relationships visible.

V10 and one related latency family were highly correlated.

C165 and another mobility router were essentially the same source of return under different packaging.

Several institutional-style controls were close enough to one another that treating each as a separate alpha would have been accounting fraud against the concept of diversification.

So the sifter learned a new phrase:

**One family, one seat.**

## V10 is what a survivor looks like before it is official

The strongest historical first-line candidate in the late-August review was V10 AQR Ensemble — Pareto.

Its local execution-translation research stream showed a full-history Sharpe around **2.26**, maximum drawdown around **-30.9%**, and a stressed Sharpe around **1.97** under the research program's aggressive `0.12 × ATR14` cost assumption.

Those numbers sound submission-ready.

They are not the same as official clearance.

The source itself says so.

The platform engine still has to run the exact code. Multipass causality has to pass. Output cleaning has to pass. Sponsor correlation and uniqueness have to pass. The exact account strategy ID has to correspond to the exact source hash that was reviewed.

This is Q24's influence on Q25.

Before Q24, I might have described V10 as a 2.26-Sharpe strategy.

After Q24, I describe it as a research candidate whose local historical evidence is strong enough to justify official precheck.

The second sentence is less marketable.

It is much more valuable.

## A 2.85 preview does not get to vote twice

V11 Balanced creates an even better test of discipline.

Its historical full Sharpe in the late-August review was only around **1.26**, and its 12%-ATR stressed Sharpe fell below one at about **0.90**. Yet one warm-state slice of the Q25 preview showed a Sharpe around **2.85**.

It would be extremely easy to let that recent result rescue every concern.

That would be holdout mining.

The preview has already been observed. It cannot remain both the test set and the reason to choose the model.

This is a subtle problem because recent data feels more real than historical data. It *is* more recent. It may be closer to the regime that matters for October.

But once you use it repeatedly to decide what to keep, how to weight, which threshold to prefer, or which model to promote, it stops being independent evidence.

Q25 forced me to name that contamination explicitly.

Post-2024 data became **veto-only** for newly searched candidates.

A candidate could be rejected because recent behavior collapsed.

It could not be promoted because recent behavior looked fantastic after the model had already been exposed to the period through the wider research program.

That asymmetry feels unfair to the model.

Good.

The model does not need fairness.

It needs evidence.

## Sixteen hundred new ideas, zero new qualifiers

The strongest evidence that the sifter changed is not any strategy's Sharpe.

It is the number zero.

In Rounds 34 through 37, the research program preregistered **800** new long-only hypotheses across liquidity-share migration, impact replenishment, peer-implied fair value, and residual-jump excitation. It froze **104** finalists using only the pre-2025 selection record.

Seven passed the frozen performance stack.

Zero passed the originality stack strongly enough to become complete qualifiers.

Then Rounds 38 through 41 tested another **800** preregistered hypotheses across pooled residual microstructure, liquidity lifecycle, dispersion-risk transfer, and session decomposition.

Another **104** finalists were frozen.

Nine passed the performance stack.

Three passed the originality stack.

Zero passed everything.

Sixteen hundred ideas.

Two hundred eight frozen finalists.

Zero additions to the active slate.

A younger version of my research process would have found a way to celebrate one of them.

A Sharpe of 1.55 here.

A residual Sharpe of 0.55 there.

A cost-stressed Sharpe above 1.2.

A clever new economic story about liquidity tenure, response delays, residual microstructure, or overnight versus intraday information.

The new process asked a harder question:

Did the candidate clear *all* the gates without asking us to reinterpret a failure after seeing it?

No.

Then no promotion.

That is what a functioning sifter sounds like.

Mostly no.

## Round 41 and the temptation to cheat elegantly

The most interesting near-miss came from session decomposition.

The idea was to separate information arriving in different parts of the daily bar and ask whether overnight and intraday behavior carried distinct cross-sectional structure.

Two candidates, S045 and S090, passed every frozen pre-2025 performance and originality gate. Their neighboring parameterizations formed a plausible plateau rather than one miraculous cell.

Then the post-2024 diagnostic was opened.

Both weakened.

S045's post-2024 residual Sharpe was about **-0.51**.

S090's was about **-0.89**.

A third candidate, S059, showed the mirror image: excellent post-2024 residual behavior, around **0.92**, but weaker pre-2025 evidence and a negative incremental contribution before the reveal.

The elegant cheat would be obvious.

Blend them.

Use S045 when history looks like the old regime and S059 when history looks like the new one.

Build a router.

Call it adaptive.

Show the improved full-period chart.

The sifter says no.

S059 became attractive *because we saw the diagnostic inversion*. Using that discovery to repair the candidate would convert the diagnostic period into training data while still talking about it as validation.

This is how overfitting evolves in sophisticated research.

It stops looking like changing a moving-average window.

It starts looking like regime intelligence.

The mathematical vocabulary improves.

The epistemic mistake stays the same.

## Q25 has a saturation problem

After thousands of OHLCV ideas, another uncomfortable conclusion emerged.

The research archive itself had become a market.

New signals had to compete not only against zero but against **652 archived return streams from fifteen hash-locked files**. A new candidate could have a perfectly acceptable standalone Sharpe and still fail because it reconstructed an exposure the archive already contained.

This was the originality screen.

It changed what "new alpha" meant.

A factor was not new because its formula was new.

It was new if its return stream added something the existing inventory did not already know how to do.

That is a much higher bar.

Rounds 34 through 40 repeatedly found historically profitable structures that collapsed under that definition. Liquidity migration could produce standalone performance. Impact replenishment could produce standalone performance. Peer-implied fair value could produce standalone performance.

But once financed relative to the existing core, stress-tested, and compared against the archive, the incremental evidence weakened.

This is why the latest research note ended with a surprising recommendation:

Stop remixing daily bars so aggressively.

The next credible information axis may need to come from genuinely different data—exchange microstructure, funding, basis, liquidations, depth, signed trade flow, or permissible on-chain/exchange-flow information—rather than a 1,601st transformation of the same OHLCV history.

The sifter can become saturated too.

When it does, the answer is not a finer mesh.

It may be different dirt.

## The public Q25 leaderboard is not the live leaderboard

This point deserves its own section because the interface makes temptation easy.

During the submission period, Quantiacs displays in-sample and out-of-sample or preview-style statistics for candidate strategies. Public snapshots have already shown Svyable entries with attractive recent numbers. `Q25_Grok_V10` and `Q25_Fable_v2`, for example, have appeared with positive displayed preview statistics, while other Svyable entries have shown sharply negative recent figures.

None of those values is the Q25 contest Sharpe.

The live period has not begun.

A preview is useful for diagnostics. It can reveal that a strategy is behaving strangely before the contest. It can expose a data problem. It can tell you that the recent regime is hostile to a model family.

It is not a trophy you win in September for a contest that starts in October.

Q24 should make that impossible to forget.

## The Q25 sieve

Q25 added another six screens to the process.

### 1. One family, one seat

Correlated variants do not become diversified because they have different names.

Choose the best representative unless there is evidence the variants fail differently enough to deserve separate capital.

### 2. Empty seats are allowed

Fifteen is a maximum, not a commandment.

The objective is not to maximize the number of submissions.

It is to maximize the quality and independence of the evidence exposed to the live period.

### 3. Post-reveal data can veto but not rescue

Once a diagnostic period has influenced the research program, stop pretending it is untouched validation.

Let catastrophic recent behavior kill a candidate if your risk policy requires it.

Do not let beautiful recent behavior promote one that failed the frozen selection rules.

### 4. Originality is a return-stream property

A new formula is not necessarily a new alpha.

Compare the candidate against the archive and the financed core. Ask what incremental return remains after the known strategies have been accounted for.

### 5. Count complete qualifications, not promising ideas

Sixteen hundred new hypotheses sounds productive.

Zero complete qualifiers sounds disappointing.

The second number is the better research statistic.

### 6. Know when the data source is exhausted

At some point more transformations of the same daily bars produce search, not knowledge.

The next alpha may require a different information axis rather than another parameterization.

## What success looks like before a contest

There is a paradox in this epilogue.

I do not know how Q25 will end.

The book is stronger because I do not know.

This is the only chapter whose final result cannot contaminate the lesson yet.

What can I say as of September 2026?

I can say the research process has become more selective.

I can say the active slate is smaller than the inventory.

I can say the strongest current research core is V10, V11 Balanced, and C165, with V12 and CoCrash126 held as specialized alternates rather than automatic additions.

I can say thousands of candidate ideas have been rejected under rules written before their most flattering statistics were revealed.

I can say recent preview data has already been reused too much to deserve the label "fresh holdout."

I can say no new Rounds 34–41 candidate earned a place in the core.

I can say the live period has not begun.

That last sentence is the most important.

Q25 is still capable of humiliating every conclusion in this chapter.

Excellent.

That is why we run it live.

## The next page is blank

Q23 ended with fourth place.

Q24 ended with no allocation and a best Svyable rank of thirty.

Q25 begins with three preferred research candidates, two specialized alternates, a saturated archive, and a process that has become increasingly willing to reject its own inventions.

I do not know whether that produces first place, fiftieth place, or nothing at all.

If the Alpha Sifter is worth anything, it should not require me to know.

Its job is not to guarantee that I win the next contest.

Its job is to make sure that whatever happens next becomes evidence instead of mythology.

The bell rings October 1.

Until then, the most honest position is cash.
