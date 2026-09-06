# Appendix — The Alpha Sifter Research Protocol

The Alpha Sifter began as a set of questions.

After Q23, Q24, and the pre-live Q25 work, it became something closer to a protocol.

Not a guarantee.

Not a certification.

Not a machine that converts enough computing into alpha.

A protocol is simply a way to make it harder to lie to yourself accidentally.

This appendix turns the ideas in the book into an operational sequence that can be reused for a contest, research notebook, model review, or capital-allocation decision.

The order matters.

A strategy that reaches Stage 9 before Stage 2 is not advanced.

It is out of order.

---

## Stage 0 — Declare the game

Before loading data, write down the objective.

At minimum:

- mandate;
- eligible universe;
- long-only / long-short rules;
- capital or gross-exposure constraints;
- position caps;
- rebalance assumptions;
- ranking metric;
- contest or deployment dates;
- execution convention;
- cost model;
- disallowed information or data sources.

Why first?

Because otherwise the strategy can slowly redefine the game around whatever it already does well.

### Required sentence

> This system is being evaluated for ______ under ______ rules, using ______ as the primary metric over ______.

If that sentence cannot be completed cleanly, the research target is not yet defined.

---

## Stage 1 — Write the hypothesis before the result

The hypothesis should explain why the signal might exist without mentioning its Sharpe.

A usable hypothesis names:

- the information being measured;
- the behavioral or structural mechanism;
- the expected direction;
- the horizon;
- the conditions under which the effect should weaken.

### Bad

"This factor works because the backtest has a Sharpe of 2.1."

### Better

"Assets with unusually persistent cross-sectional momentum may continue outperforming because market participants update gradually, but the effect should weaken during abrupt reversals and crowded deleveraging."

### Kill question

What observation would make the economic story less plausible even if the backtest remained attractive?

A hypothesis with no conceivable disconfirming evidence is not helping the sifter.

---

## Stage 2 — Freeze the data boundary

Record what information is available at each timestamp.

For every data field ask:

- when was it actually observable?
- is historical membership dynamic?
- is liquidity defined using contemporaneous data?
- does preprocessing use future values?
- are rolling calculations causal?
- are missing assets treated consistently through history?
- is the assumed execution price knowable after the signal timestamp?

### Manifest fragment

```text
DATA_START=
DATA_END=
UNIVERSE_DEFINITION=
LIQUIDITY_DEFINITION=
FEATURE_LAGS=
EXECUTION_PRICE=
MISSING_DATA_POLICY=
```

For a contest with a dynamic eligible universe, today’s membership list should never be projected backward unless the contest itself explicitly defines it that way.

---

## Stage 3 — Separate discovery from evaluation

Define the time windows before looking at the final diagnostics.

A simple structure is:

- development;
- validation;
- recent diagnostic;
- live / forward.

The exact dates depend on the problem.

The labels do not.

Once a period has influenced feature design, parameter choice, promotion, or weighting, stop calling it fresh holdout data.

### Evidence labels

Use explicit labels in every report:

**Development** — used to invent or materially shape the model.

**Validation** — used to choose among coarse alternatives.

**Reused diagnostic** — previously observed; may warn, but should not be treated as pristine confirmation.

**Forward** — arrives after the relevant decisions are frozen.

**Live contest** — official performance during the sponsor-defined contest window.

**Allocated / capital** — performance after the system has real economic consequences.

Do not let a number migrate upward through these labels because it looks good.

---

## Stage 4 — Define the denominator

Record the size of the search.

Not only the finalists.

Count, where possible:

- hypotheses considered;
- parameter families;
- feature variants;
- weighting variants;
- universe variants;
- portfolio variants;
- regenerated or revived historical models;
- manually inspected charts that influenced choices.

If the true historical denominator is no longer recoverable, say so.

Do not replace an unknown large denominator with a convenient small one.

### Denominator warning

A strategy selected from 2,000 related trials should not be discussed as though it emerged from a clean three-model bakeoff.

The point is not to punish exploration.

The point is to remember that selection creates optimism.

---

## Stage 5 — Test the signal before the portfolio

Before sophisticated sizing, ask whether the signal itself knows anything.

Useful checks include:

- information coefficient;
- rank IC;
- top-minus-bottom spread;
- monotonicity across quantiles;
- horizon decay;
- sign stability;
- regime behavior;
- cross-sectional breadth;
- factor correlation;
- incremental predictive content after known factors.

The portfolio can create the illusion that a weak signal is good because risk controls and market exposure are doing the work.

Separate those components.

### Required comparison

For each major factor, compare:

1. factor alone;
2. simple equal combination;
3. proposed combined model.

If the sophisticated combination wins only because it reallocates toward one dominant factor, say so.

---

## Stage 6 — Search neighborhoods, not needles

For each important parameter, test a sensible nearby grid.

Examples:

- lookback length;
- rebalance interval;
- selection count;
- position cap;
- volatility target;
- threshold;
- decay horizon;
- regime gate.

Classify the result:

- plateau;
- slope;
- unstable;
- needle.

A needle is not automatically invalid.

It is evidence that the result needs stronger outside-time confirmation.

### Neighborhood note

Record the worst nearby result you would still have considered economically equivalent before seeing the numbers.

This prevents the neighborhood from being defined after the peak is found.

---

## Stage 7 — Make execution uglier

A strategy should have margin between theoretical edge and plausible friction.

Stress at least:

- transaction costs;
- execution lag;
- rebalance timing;
- liquidity constraints;
- position caps;
- gross exposure;
- turnover;
- data gaps;
- removal of the best contributor;
- removal of the best period.

The exact stress should fit the asset class.

A 12%-of-ATR stress in one crypto research process is not a universal transaction-cost assumption.

It is an internal hostility level.

Always label stress assumptions with their units.

### The hostility rule

If the strategy only survives under the most flattering plausible execution assumption, it has not passed hostility.

---

## Stage 8 — Audit the family, not just the winner

A top backtest is partly a statistic about the search that produced it.

Keep the sibling strategies visible.

Compare:

- in-sample rank;
- validation rank;
- forward rank;
- live rank;
- factor exposure;
- return correlation;
- failure regime.

Q24 made this screen unavoidable: several Svyable strategies had strong in-sample Sharpes and much weaker contest Sharpes.

One survivor cannot tell you whether the family was robust or whether one member got lucky.

The siblings help answer that.

---

## Stage 9 — Measure originality in returns

A new formula is not automatically new alpha.

Compare the candidate's matched daily return stream with:

- the active core;
- close archived families;
- known benchmarks;
- defensive sleeves;
- trend sleeves;
- residual sleeves;
- market beta.

Use correlations as a diagnostic, not a metaphysical definition of sameness.

Then ask:

**If this strategy enters the roster, what new failure mode or payoff shape does it add?**

### One family, one seat

When two candidates are highly correlated and differ mainly in implementation detail, treat them as one family unless there is strong evidence they fail differently enough to justify separate capital.

### The roster test

Evaluate the portfolio with and without the candidate.

A candidate with a lower standalone Sharpe may be more valuable if it improves the combined portfolio's independence, drawdown behavior, or regime coverage.

---

## Stage 10 — Prove causality mechanically

Do not rely on code inspection alone.

Run prefix tests.

For multiple historical cutoff dates:

1. run the strategy on the full history;
2. rerun using only data available through the cutoff;
3. compare the overlapping target weights or signals;
4. require exact or explainable numerical agreement.

Also test:

- deterministic repeatability;
- missing-data behavior;
- invalid schema rejection;
- no exposure to ineligible assets;
- cap enforcement;
- gross-exposure limits;
- output cleaning;
- NaN / infinite handling.

### Causality statement

A report should say what was tested, how many prefixes were tested, and the maximum observed drift.

"The code is causal" is too vague.

---

## Stage 11 — Preserve implementation identity

The strategy reviewed should be the strategy submitted.

Record:

- source file;
- source hash;
- notebook hash;
- dependency versions;
- data schema;
- parameter manifest;
- output-cleaning behavior;
- platform strategy ID once created.

If a later repair changes targets or return behavior, record it as a behavioral revision.

If a repair only changes numerical-domain handling without changing outputs, record that too.

Do not erase either class of change.

### Platform identity rule

Local research metrics, hosted backtest metrics, submission-preview metrics, live contest metrics, and allocation metrics are different nouns.

Never let one silently substitute for another.

---

## Stage 12 — Freeze the promotion rule

Before opening the most sensitive diagnostic period, define what counts as:

- pass;
- reserve;
- research-only;
- reject;
- kill;
- revisit later.

Include both performance and operational requirements.

### Example structure

```text
historical_sharpe > threshold
stressed_sharpe >= threshold
max_drawdown >= floor
all_major_folds_positive = true
recent_diagnostic >= veto_floor
causal_prefix_drift <= tolerance
eligible_exposure_violations = 0
platform_checks = pass
```

The exact thresholds are strategy-specific.

The structure is the important part.

A failed criterion should have a predeclared consequence.

Otherwise it is not a gate.

---

## Stage 13 — Quarantine reused recent data

Once recent data has been inspected repeatedly, downgrade its epistemic status.

A useful policy is:

- recent reused data may veto a candidate under predefined risk rules;
- recent reused data may not rescue a candidate that failed frozen selection rules;
- no new parameter is chosen because it looks best in the reused window;
- any post-reveal adaptation becomes a new hypothesis that needs new forward evidence.

This asymmetry is deliberate.

It reduces the temptation to use the same period as both judge and coach.

---

## Stage 14 — Let empty seats exist

Capacity is not a quota.

If a contest permits fifteen entries, that does not mean fifteen strategies deserve entry.

Before adding a candidate ask:

- does it pass the minimum evidence gate?
- does it add independent roster value?
- is it less redundant than the current reserve?
- are its implementation and source identity clean?
- would I still submit it if the contest allowed only five entries?

If the answer is no, leave the slot empty.

Scarcity can improve research judgment.

Artificial abundance can destroy it.

---

## Stage 15 — Run the prosecution

Every candidate that reaches promotion review gets two documents.

### The case for

Include:

- economic mechanism;
- strongest evidence;
- stress resilience;
- originality;
- portfolio role;
- expected failure mode.

### The case against

Include:

- search depth;
- reused diagnostics;
- correlated siblings;
- fragile parameters;
- weak periods;
- implementation uncertainty;
- regime dependence;
- market exposure;
- reasons the backtest may be optimistic.

The prosecution should be strong enough to change the decision.

If it cannot, it is theater.

---

## Stage 16 — Record the decision before the next data arrives

For every candidate, write one of:

**Promote** — ready for the next formal platform or forward-evidence stage.

**Reserve** — acceptable, but not currently more useful than the active core.

**Research-only** — interesting enough to preserve, failed at least one active gate.

**Reject** — do not spend further validation budget without a genuinely new hypothesis.

**Killed** — the economic premise or operational implementation failed materially.

Then timestamp the decision.

This creates a record that cannot be silently rewritten by the next chart.

---

# The Alpha Sifter manifest

A compact manifest for a serious candidate can look like this:

```yaml
strategy_name:
research_family:
version:
source_hash:
created_at:

mandate:
universe:
position_constraints:
execution_assumption:
primary_metric:

hypothesis:
expected_failure_regimes:

development_window:
validation_window:
reused_diagnostic_window:
forward_window:

search_denominator_known: true|false
search_denominator_notes:

historical_sharpe:
stressed_sharpe:
max_drawdown:
turnover:
max_weight:
max_gross:

closest_archive_strategy:
max_return_correlation:
portfolio_marginal_effect:

prefix_tests_run:
max_prefix_drift:
forbidden_exposure_count:

promotion_rule:
failed_gates:
status:

hosted_check_status:
sponsor_uniqueness_status:
contest_entry_id:

next_allowed_change:
kill_criteria:
```

The manifest should be boring.

Boring is good.

Boring means fewer places for memory to improve the story later.

---

# A minimum reproducibility packet

For any strategy important enough to appear in a book, contest, investor memo, or allocation decision, preserve:

1. source code;
2. environment/dependency file;
3. input-data provenance;
4. frozen parameter manifest;
5. exact backtest output;
6. transaction-cost assumptions;
7. fold/period breakdown;
8. return series;
9. correlation / originality analysis;
10. causal-prefix results;
11. implementation audit;
12. decision log;
13. hosted/platform results when available;
14. final contest or capital outcome.

A chart alone is not a reproducibility packet.

A notebook alone is not a reproducibility packet.

A leaderboard screenshot alone is not a reproducibility packet.

The packet is the chain connecting the idea to the claimed result.

---

# The five nouns rule

Before publishing any quantitative result, identify which noun it belongs to:

### 1. Research

Local historical calculation.

### 2. Platform

Official hosted backtest or checker output.

### 3. Preview

Submission-period or recent diagnostic shown before the live contest.

### 4. Live contest

Performance during the official contest window under the sponsor's rules.

### 5. Allocation / capital

Economic outcome after funding or allocation.

If a sentence contains a number without one of these nouns being clear, rewrite the sentence.

This rule would have prevented several of the most tempting exaggerations in the history covered by this book.

---

# The three-denominator rule

Whenever a strategy looks unusually good, report three denominators if known:

### Search denominator

How many related hypotheses or variants were considered?

### Family denominator

How many sibling strategies shared the same broad economic exposure?

### Capital denominator

How many strategies actually received scarce live or allocated capital?

A 2.5 Sharpe selected from 2,000 variants is a different claim from a 2.5 Sharpe produced by the first frozen hypothesis.

Both may be useful.

They are not the same evidence.

---

# The stop rule

A mature research program needs a stopping rule.

Stop searching the same data axis when:

- most new candidates are highly correlated with the archive;
- incremental financed returns repeatedly fail;
- apparent novelty comes mainly from parameterization;
- recent diagnostics keep being reused as selection data;
- the search denominator becomes too large to interpret cleanly;
- the next improvement requires increasingly ornate explanations for small changes.

At that point, choose one of three actions:

1. wait for genuinely forward evidence;
2. obtain a genuinely different information source;
3. reduce the research objective to robustness and implementation rather than alpha discovery.

More transformations are not always more research.

Sometimes they are just more opportunities to get lucky.

---

# The publication rule

When writing about a result later:

- preserve the pre-live prediction or decision;
- append later evidence rather than rewriting the old judgment;
- keep failed variants in the archive;
- distinguish author recollection from primary platform records;
- attach the correct noun to every financial number;
- state what remains unknown.

A book about quantitative research should be auditable by its own philosophy.

That is the final purpose of the Alpha Sifter.

Not to make every strategy good.

To make bad evidence harder to promote.
