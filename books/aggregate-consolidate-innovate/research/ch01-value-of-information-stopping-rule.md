# Chapter 1 research audit — collection, stopping, and value of information

Checked: 2026-09-13

## Why this chapter needs a harder boundary

Chapter 1, “The Collector’s Fallacy,” has a strong practical intuition: collection becomes waste when another unit of information is unlikely to change what you do. But the current prose risks making repetition itself the stopping criterion. That is too easy. Ten sources can repeat one another because they share the same blind spot, while a costly eleventh measurement can be worth obtaining precisely because the decision is close, irreversible, or exposed to a large downside.

Decision analysis gives the chapter a more rigorous version of its own idea: information has value to the extent that it can improve a decision under uncertainty. The relevant comparison is not “more information versus less information,” but expected improvement in the decision versus the cost of obtaining the information, including delay.

## Authoritative research checked

### National Academies — Environmental Decisions in the Face of Uncertainty

National Research Council, *Environmental Decisions in the Face of Uncertainty* (2013), chapter on incorporating uncertainty into decision making:

https://www.nationalacademies.org/read/12568/chapter/7

The report explains expected value of information as the expected improvement available from resolving decision-relevant uncertainty. Its practical boundary is directly useful here: if no possible result from additional information would change the decision, the expected value of that information is zero. It also explicitly treats delay and research expense as costs to compare against the expected value of information.

This is a better formal anchor for the chapter than the current unsourced stopping-rule paragraph.

### Thompson & Beranek — imperfect forecasts

Howard E. Thompson and William Beranek, “The Efficient Use of an Imperfect Forecast,” *Management Science* 13(3), 1966, 233–243:

https://doi.org/10.1287/mnsc.13.3.233

The paper is useful because real research is not perfect information. It develops the value of an imperfect forecast and asks when a forecast is worth using, what it is worth paying for, and when improving forecast accuracy is worth the effort. That supports the chapter’s broader point while preventing a false binary between ignorance and certainty.

## Strongest counterargument

The chapter currently implies that once recent credible sources mostly repeat one another, continued collection is probably wasteful. That heuristic can fail badly.

Repeated agreement is not the same thing as low decision uncertainty. Sources can be dependent, derived from the same dataset, subject to the same measurement error, or simply irrelevant to the variable that could reverse the decision. Conversely, even when the current best action is unlikely to change, more information can still be valuable if it affects implementation, risk limits, contingency planning, monitoring, or the size of the bet.

A stronger formulation is therefore conditional:

> Stop collecting when the expected decision improvement from the next credible information is smaller than its acquisition and delay costs—not merely when the pile has begun to sound repetitive.

That formulation also preserves an important exception: where downside is catastrophic or a decision is difficult to reverse, a small probability of changing the action can still justify expensive investigation.

## What the evidence does *not* establish

- Value-of-information analysis does not make every real decision numerically tractable.
- A researcher usually cannot assign defensible dollar values or probabilities to every uncertainty.
- “Would this change the decision?” remains a useful heuristic, but it should be treated as an approximation to a decision problem rather than a universal law.
- Information can have option value beyond choosing among the immediately visible alternatives: it can reveal a new action, change implementation, or expose that the decision model itself is wrong.
- Delay is not always a cost. In some decisions, waiting preserves options or allows the environment to reveal information cheaply.

## Editorial opportunity

A future prose pass should keep Chapter 1’s warehouse/workshop metaphor and human texture, but replace the three semicolon-heavy stopping rules with one developed distinction between **repetition** and **decision value**. The National Academies treatment gives Sven a compact factual spine: information is worth gathering when plausible results could improve the choice enough to pay for the research and the wait.

This also creates a useful counterexample to the collector caricature. The serious collector is not the person who always stops early. Sometimes seriousness means paying for one more test because the downside is large and the unresolved variable is exactly the one that can reverse the decision.

## Falsification / narrowing condition

The book’s practical stopping-rule claim should narrow further if empirical work shows that simple value-of-information heuristics systematically cause premature stopping in the kinds of creative, scientific, or strategic search the book addresses because important information primarily changes the available option set rather than rankings among known options. In that case Chapter 1 should distinguish **decision research** from **exploratory search** instead of treating one stopping logic as general.