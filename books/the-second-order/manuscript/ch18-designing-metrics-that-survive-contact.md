# Designing Metrics That Survive Contact

A metric is easiest to design before anyone cares about it.

The analyst has a dataset. The objective seems clear. A measure is chosen because it correlates with the thing the institution wants: test scores with learning, arrests with enforcement, clicks with interest, repayment with credit quality, throughput with productivity, infection rates with safety, benchmarks with model capability.

Then the number enters a meeting.

A budget is tied to it.

A promotion depends on it.

A school is sanctioned because of it. A hospital is ranked by it. A team is paid against it. A city department is praised for improving it. A model is selected because it scores higher on it.

At that moment the metric changes jobs.

It is no longer only measuring performance.

It is directing behavior.

This book has spent seventeen chapters examining what happens next.

People learn the rule. Organizations allocate effort toward the visible dimensions. Rankings reorganize competition. Tests reshape curriculum. Clinical predictions alter treatment. Police deployment changes the data available to the next prediction. Recommendation systems change attention. Experiments change populations. Benchmarks become product requirements. Agents change the data that train them. Adversaries search for weak points. Markets react to forecasts. Policy creates memory. Public signals coordinate crowds. Counterfactuals become harder to observe because the decision system has changed the world being evaluated.

The obvious response is to design a better metric.

That is correct as far as it goes.

It does not go very far.

The central design mistake is to treat metric quality as a property of the formula alone.

A metric that works well as a descriptive statistic can fail as an incentive. A metric that works as a low-stakes diagnostic can fail as a ranking. A metric that works in one institution can fail in another because actors have different opportunities to manipulate, substitute, delay, classify, or hide. A metric can remain mathematically unchanged while its meaning deteriorates because the organization around it has learned how to optimize the observed slice.

Metric design is therefore mechanism design in miniature.

The designer is choosing not only what to count, but what kinds of behavior will become valuable once counting has consequences.

Donald Campbell understood this before modern dashboards existed. His work on social indicators warned that when quantitative measures become consequential in social decision-making, they become exposed to corruption pressures and can distort the processes they were intended to monitor. The point is often compressed into a slogan now associated with his name, but the underlying mechanism is more useful than the slogan: consequences change behavior, behavior changes the indicator, and the indicator may stop meaning what it meant before the consequences arrived.

The first principle of durable metric design follows from that mechanism.

Assume response.

Do not ask whether people will adapt to the metric.

Ask how.

This sounds pessimistic only if adaptation is confused with cheating.

Most adaptation is ordinary management.

A sales team learns which accounts count toward quota. A teacher learns which standards appear on an exam. A hospital learns which diagnoses affect reimbursement. A researcher learns which publications matter for promotion. A factory learns which defects are recorded. A police unit learns which response times attract scrutiny. A software team learns which latency percentile appears on the executive dashboard.

These people are doing their jobs.

The measurement system has told them what the organization values.

A robust design starts by listing the easiest ways a reasonable, non-malicious actor could improve the measured outcome.

Which of those behaviors improve the underlying objective?

Which merely improve the proxy?

Which shift effort away from valuable but unmeasured work?

Which change classification rather than reality?

Which transfer costs to another team or time period?

Which can be repeated without limit?

Which create irreversible consequences before anyone notices?

This exercise should happen before the metric is attached to money, status, access, or punishment.

The second principle is to treat unmeasured work as part of the system.

Bengt Holmstrom and Paul Milgrom made this point formally in their 1991 work on multitask principal-agent problems. When workers or organizations divide effort among multiple tasks and some tasks are easier to measure than others, strong incentives on the measurable tasks can distort effort away from activities that matter but are hard to observe.

That explains a puzzle that simple incentive theory misses.

If performance pay motivates effort, why not make every contract highly contingent on measurable output?

Because the measured output may represent only part of the job.

A teacher produces testable knowledge and harder-to-measure intellectual habits.

A police officer answers calls and exercises judgment.

A physician completes documented procedures and makes subtle decisions about when not to intervene.

A manager hits quarterly targets and develops people who may become valuable years later.

A research lab publishes papers and also builds instruments, datasets, tacit knowledge, and young researchers.

A strong incentive on one visible task changes the relative price of every invisible task.

The metric does not have to be bad for this to happen.

It has to be incomplete.

All scalable metrics are incomplete.

That means metric design should not begin with the question “How accurately does this measure the objective?”

It should also ask “What happens to the rest of the objective when this dimension becomes expensive to ignore?”

The third principle is to avoid single points of failure in measurement.

A single dominant metric invites concentrated optimization.

If one number determines the outcome, the organization can build itself around that number.

Multiple measures can help because they make substitution harder. But adding metrics mechanically creates another failure mode: the dashboard becomes so large that nobody can tell which tradeoffs matter, and organizations learn to satisfy formal reporting requirements rather than exercise judgment.

The answer is not infinite measurement.

It is plural evidence.

Plural evidence means using measures that fail differently.

A high-stakes school test can be compared with a differently designed low-stakes assessment.

A hospital quality indicator can be checked against patient outcomes, audit data, and clinical review.

A recommender's engagement metric can be compared with long-term retention, user surveys, and randomized holdouts.

A fraud model can be audited with sampled transactions that would normally have been blocked.

A hiring system can preserve some independently reviewed decisions outside the dominant model.

The purpose is not to average every signal into one super-score.

That simply creates a new target.

The purpose is to retain disagreement among evidence channels.

Disagreement is diagnostic.

When the primary metric rises while an independent measure stays flat, the gap is information.

When a benchmark improves while downstream usefulness does not, the gap is information.

When arrest counts rise while victimization reports do not, the gap is information.

When engagement rises while satisfaction falls, the gap is information.

A mature institution does not hide those gaps by forcing them into one composite number.

It investigates them.

The fourth principle is to preserve measurement channels that actors cannot cheaply optimize.

This is difficult because any repeated audit can become another target.

The moment an institution publishes the audit rubric, people can prepare for the audit.

The moment a benchmark becomes famous, teams train against it.

The moment a compliance sample follows a predictable schedule, firms learn the schedule.

So robust systems rotate some measurement.

They sample.

They hold back some items.

They use periodic external review.

They compare outcomes at longer horizons.

They preserve evidence from domains not used directly for incentives.

This does not mean using secret criteria to govern people indefinitely.

Opacity has costs: it makes expectations harder to understand, can invite arbitrary power, and limits contestability. A system cannot solve gaming simply by making the rules unknowable.

The design goal is narrower.

Keep some independent evidence about the objective that is not fully consumed by the incentive loop.

The fifth principle is to make classification movements visible.

Many apparent improvements occur at category boundaries.

A hospital can alter coding.

A school can change retention or special-education classification.

A police department can change how incidents are recorded.

A platform can redefine an active user.

A company can change what counts as a qualified lead.

A bank can alter which loans enter a portfolio.

These changes may be legitimate.

Definitions need updating. New information should change categories. Better classification can improve a metric.

But category changes are dangerous because they can produce large measured gains without equivalent change in the underlying phenomenon.

A durable measurement system therefore tracks the denominator, not only the numerator.

Who became eligible?

Who disappeared from the population?

Which cases were excluded?

Which events changed label?

Which activity moved into an unmeasured channel?

The metric should be accompanied by enough accounting of population flow to distinguish improvement from sorting.

The sixth principle is to look for cliffs.

Thresholds create discontinuities in incentives.

A school just below a proficiency target can value one additional passing student differently from a student far below the line. A salesperson close to quota faces a different marginal incentive in the final week of the quarter. A hospital just above a ranking cutoff may reorganize effort around crossing it. A borrower just below an approval score experiences a binary outcome from a small numerical difference.

The underlying objective may be smooth.

The institution has created a cliff.

Cliffs concentrate optimization around boundaries.

Sometimes they are unavoidable. Eligibility requires thresholds. Budgets have limits. Decisions are discrete.

But designers should expect bunching, threshold targeting, and local gaming around any consequential cut point.

That expectation changes what should be monitored.

Do outcomes improve broadly or only near the threshold?

Do classifications pile up just on the favorable side?

Do resources migrate toward marginal cases while severe cases are neglected?

Do people delay actions until the next measurement period?

A cliff is not merely an administrative convenience.

It is an incentive generator.

The seventh principle is to price manipulation into the design.

Every metric has an attack surface.

Some manipulations are costly and visible. Others are cheap and nearly indistinguishable from genuine improvement.

A good metric makes the cheap path align as much as possible with the real objective.

If a call center can improve response time only by staffing more effectively, the metric may be useful.

If it can improve response time by hanging up on difficult callers, the metric is fragile.

If a school can improve scores mainly by teaching mathematics better, the test is more robust than one whose gains come mostly from predictable item coaching.

If a content platform can improve a quality score by satisfying users, that is better than a score that can be raised by manipulating session definitions.

The metric designer should therefore ask a red-team question: what is the lowest-cost way to make this number look better without improving the thing we care about?

Then test whether the system makes that path profitable.

The eighth principle is to make the horizon match the objective.

Short-term metrics are attractive because they provide feedback quickly.

They also encourage temporal substitution.

A firm can pull sales forward from next quarter. A maintenance team can defer repairs. A platform can increase immediate engagement at the cost of long-term trust. A hospital can reduce length of stay while increasing readmission risk. A school can concentrate test preparation in ways that fade quickly.

If the objective is durable, at least some evaluation should be durable too.

Long horizons are not automatically superior.

They make learning slow and attribution difficult.

The design challenge is to combine fast operational signals with slower outcome measures that can reveal whether local optimization accumulated hidden costs.

The ninth principle is to distinguish diagnostic metrics from incentive metrics.

An organization often wants one number to do both jobs.

That is convenient.

It can also destroy information.

A diagnostic measure is valuable because it reveals weakness honestly.

An incentive measure becomes valuable to the person being evaluated when it looks strong.

Once consequences attach, data-generating behavior can change.

The same metric may still serve both roles, but designers should not assume its diagnostic meaning survives unchanged.

This suggests a useful separation.

Some measures can be used primarily to learn.

Others can be used to allocate rewards or sanctions.

If every diagnostic observation becomes immediately consequential, actors learn to manage every observation.

The institution loses a place where reality can speak without first passing through the incentive system.

The tenth principle is to weaken incentives when measurement is weak.

This can feel like cowardice.

Leaders want accountability. A metric exists. Why not use it strongly?

Holmstrom and Milgrom's multitask logic gives a disciplined answer: when one dimension is measured much more accurately than other important dimensions, strong incentives can distort effort toward what is measurable. Sometimes muted incentives are not a failure of management. They are a response to measurement limits.

This is one reason professional discretion survives in medicine, research, teaching, management, and law despite repeated attempts to replace judgment with scorecards.

Judgment is noisy.

It can hide bias, favoritism, and incompetence.

Metrics can improve accountability by making outcomes visible.

But when the task is multidimensional and the measure is narrow, replacing judgment completely with a target can simply exchange one error for another.

The design problem is to combine evidence and discretion while making both contestable.

The eleventh principle is to preserve local knowledge.

Central metrics travel well because they compress complexity. That is their advantage.

It is also their danger.

A national school score cannot contain everything a teacher knows about a student. A hospital dashboard cannot contain everything a bedside team knows about a patient. A platform metric cannot contain every reason a user leaves. A corporate KPI cannot contain every constraint at a plant.

Local exceptions should not automatically override measurement.

That becomes an excuse for ignoring bad results.

But a robust institution needs a channel for local evidence to challenge the metric when the proxy and objective visibly diverge.

Otherwise the number wins simply because it is portable.

The twelfth principle is to study metric failures as product failures.

Organizations often treat gaming as misconduct by the people being measured.

Sometimes it is.

Fraud should be called fraud.

Cheating should be called cheating.

But when thousands of ordinary employees independently discover the same distortion, the measurement architecture deserves scrutiny too.

The UK Home Office's 2015 review of targets in policing is useful because it did not reduce the problem to bad officers. It documented concerns about target-chasing, gaming, manipulation, bureaucracy, and distorted priorities while also recognizing legitimate roles for performance management.

That is the right level of analysis.

A metric failure can be an interaction between incentive, proxy, organizational pressure, and opportunity.

Punishing the most visible manipulator without changing the system can leave the mechanism intact.

The thirteenth principle is to make revision normal.

A metric that survives first contact will still face second contact.

People become more skilled at optimizing it. Technology changes. Data collection improves. The population shifts. New legal constraints arrive. Competitors copy tactics. What was once expensive to manipulate becomes cheap.

Metrics therefore need version histories.

Why was the measure introduced?

What behavior was it meant to encourage?

What evidence would show it had stopped working?

Which known loopholes have appeared?

What changes were made and why?

Institutions often preserve metrics long after their original rationale has been forgotten because longitudinal comparability becomes valuable. Comparability is valuable.

It can also become a trap.

A broken measure should not be preserved forever merely because changing it would interrupt the chart.

The fourteenth principle is to measure the metric's effects.

This sounds circular.

It is essential.

After deployment, examine behavior around the measure itself.

Did time allocation change?

Did people cluster around thresholds?

Did classifications move?

Did unmeasured outcomes deteriorate?

Did variance collapse suspiciously?

Did independent evidence diverge?

Did the metric become easier to predict from superficial features?

Did organizations begin investing in specialists whose main role is managing the score?

A metric is an intervention.

Evaluate it like one.

The fifteenth principle is to state the objective in words before encoding it in numbers.

This sounds elementary.

It is often skipped.

A metric becomes dangerous when the organization forgets the sentence it was supposed to abbreviate.

“Reduce average emergency-room wait time” is not the same objective as “provide timely and appropriate emergency care.”

“Increase publication count” is not the same as “produce reliable and important research.”

“Maximize watch time” is not the same as “help users find worthwhile entertainment.”

“Raise test proficiency” is not the same as “educate children.”

The metric may be a useful operational slice of the objective.

The words preserve the missing dimensions.

Institutions need those words when the number starts behaving strangely.

The final principle is the hardest.

Be willing to lose the metric.

Organizations become attached to measures because measures accumulate infrastructure and identity. Dashboards are built. Targets are negotiated. Historical series become familiar. Careers become associated with improvement. External stakeholders learn the number. Replacing it feels like destroying institutional memory.

Sometimes the measure can be repaired.

Sometimes it needs to be demoted.

Sometimes it needs to be removed from incentives but kept for diagnosis.

Sometimes a new independent measure has to be introduced.

Sometimes the organization must admit that the objective cannot be compressed into one stable number without unacceptable distortion.

That admission is not the end of accountability.

It is a more mature form of it.

A metric survives contact not when nobody can game it.

That standard is impossible.

It survives when the easiest responses mostly improve the underlying objective, when important unmeasured work remains protected, when independent evidence can reveal divergence, when classification and threshold effects are visible, when the institution studies behavioral response, and when revision remains possible before the proxy becomes the mission.

The goal is not a perfect number.

It is an institution that remembers the number is a tool.

That distinction is small on a dashboard.

In practice, it is the difference between measurement that helps an organization learn and measurement that quietly teaches the organization to perform for the measurement.