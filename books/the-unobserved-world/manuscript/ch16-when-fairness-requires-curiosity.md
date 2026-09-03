# When Fairness Requires Curiosity

Fairness is usually discussed as a property of decisions.

Did two similar applicants receive similar treatment? Are error rates different across groups? Does a score use protected characteristics? Does a policy impose unequal burdens? Is the allocation rule transparent? These are essential questions.

There is another fairness question that arrives one step earlier.

Who has been observed enough for the system to know what “similar” means?

The hiring study from Chapter 6 makes the problem concrete. In the Fortune 500 recruiting setting studied by Danielle Li, Lindsey Raymond, and Peter Bergman, a conventional supervised-learning model would have selected a much smaller share of Black and Hispanic applicants for interviews than human recruiters did. An exploration-oriented upper-confidence-bound model would have selected a much larger share. The mechanism was not a separate demographic target. The exploration model valued uncertainty, and underrepresented groups were less densely represented in the historical training data.

Historical exclusion had an epistemic afterlife.

The firm knew less about some applicants because people with similar backgrounds had received fewer opportunities to generate the labels the firm used.

This creates a fairness problem that static parity metrics do not fully capture.

Suppose two groups receive identical thresholds today, but one group's score estimates are based on abundant historical evidence and the other's on sparse evidence created by earlier exclusion. Formally equal treatment of the point estimates may preserve unequal uncertainty.

The system can say, “We use the same rule for everyone,” while applying the rule with very different knowledge.

Curiosity becomes relevant because one way to reduce that inequality is to generate better evidence.

This idea is dangerous if stated lazily. People from underrepresented groups are not research subjects whose purpose is to improve an employer's model. A company cannot justify discriminatory burden by calling it exploration. Fairness law and ethics do not disappear when information has value.

The claim is more constrained.

When an institution is already allocating scarce but beneficial opportunities among plausible candidates, and when historical selection has created uneven information, a policy that always exploits current point estimates can perpetuate the informational effects of past exclusion. An exploration-aware policy may sometimes improve both learning and access.

The action matters.

An interview is a good example because it is an opportunity and an information-gathering stage. Offering more interviews to plausible but uncertain candidates can benefit those candidates while teaching the firm. A dangerous medical intervention would be completely different. Uncertainty about a group would not justify exposing that group to extra risk for the sake of evidence.

The fairness of exploration depends on whether the exploratory action itself is beneficial, burdensome, risky, or scarce.

This distinction prevents a common mistake in algorithmic ethics: treating every domain as though the same mathematical correction carries the same moral meaning.

In lending, expanding credit to poorly understood applicants can widen access but can also create debt harm. In education, a more ambitious placement can open opportunity but can also set a student up for an avoidable struggle if support is absent. In recommendation, showing unfamiliar content is low stakes. In clinical trials, informed consent and equipoise are central. In research funding, a lottery distributes opportunity among proposals already judged worthy.

Same exploration logic. Different ethics.

Fairness also requires attention to who pays for information.

If a platform explores by showing a user a slightly less relevant song, the user pays a few seconds. If a firm explores by assigning an uncertain employee to a stretch project, the employee may gain opportunity but also carry career risk. If a government pilots a policy in one community, residents may bear costs that later communities avoid.

A system can create collective learning by concentrating burden on individuals.

That is not automatically fair just because the experiment improves future decisions.

The history of research ethics exists partly because societies learned this lesson brutally. Scientific value cannot be used as a blanket justification for treating people as means. Modern experimentation requires consent, review, risk limits, and special protections in many settings.

The unobserved-world thesis must live inside that inheritance.

There are, however, many fairness gains available without imposing extra risk.

One is to distinguish uncertainty from negative evidence. If a model has low confidence because a population is poorly represented, the system can route cases to human review, collect additional noninvasive information, use work samples, widen an interview stage, or seek external data rather than automatically rejecting.

Another is to audit outcome coverage. Which groups have labels? Which groups disappear at each gate? Does a model's apparent accuracy vary because some outcomes are less observable? Are there populations for whom the system mainly records rejection and rarely records downstream performance?

Coverage is a fairness metric hiding in plain sight.

An institution cannot evaluate error equally where it does not observe outcomes equally.

This is especially important in algorithm audits. Analysts often compare false positives and false negatives across groups. To compute those rates, ground truth must be available. If labels are selectively observed, the audit can inherit the selection problem.

The fairness evaluation itself may be blind where the decision system was blind.

That does not make auditing futile. It means auditors should examine label generation as part of the system.

Who received follow-up? Who was tested? Who was hired? Who obtained the product? Which rejected cases later produced external outcomes? Are missing labels correlated with the protected groups under review? What assumptions are required to estimate performance outside the observed sample?

These questions are less visually appealing than a fairness dashboard.

They are often more fundamental.

The education experiment in Chapter 9 demonstrates why. Selective labels materially affected prediction error for English in the studied colleges but had almost no effect for math. An auditor who assumes the same missingness problem has the same size everywhere could overcorrect one domain and undercorrect another.

Fairness requires curiosity about the mechanism, not only commitment to a metric.

This is one reason algorithmic fairness can become frustratingly plural. Different definitions conflict. Equalized error rates, calibration, demographic parity, individual fairness, procedural fairness, and causal notions answer different questions. There is no single mathematical switch that produces justice in every setting.

The temptation is to retreat into technical nihilism: if fairness is complicated, perhaps nothing can be done.

That would be a mistake.

Complication means institutions must state which harms they are trying to prevent and which uncertainties remain.

The exploration perspective adds a temporal dimension. Fairness is not only whether today's decisions satisfy a condition. It is whether today's decisions create a world in which tomorrow's system can know more fairly.

A static policy can be fair by its metric and still freeze historical ignorance.

Imagine an employer removes race and gender from a model and applies one threshold to everyone. The system satisfies a formal notion of identical treatment. If historical data on some backgrounds is sparse, the model's errors may remain uneven. Because the model continues to select mainly familiar candidates, the data imbalance persists.

The policy is procedurally uniform but epistemically stagnant.

An exploration-aware system could create more observations in uncertain regions. That can reduce uncertainty over time. The policy may begin with unequal information and move toward more equal information.

This is fairness as learning.

The idea has an uncomfortable implication: sometimes treating everyone identically today can preserve unequal knowledge inherited from yesterday.

That sentence can be misused to justify arbitrary preferences, so it needs discipline. Any departure from equal treatment should have a lawful, transparent, evidence-based rationale. The institution should be able to explain the objective, the boundary, the duration, and the measure of success. Exploration should not become a permanent loophole.

A learning policy should learn enough to change.

If an exploration bonus remains attached to a group forever, either the institution is failing to learn or the bonus is serving another policy goal that should be named honestly.

The goal is not permanent uncertainty.

It is to stop uncertainty from being self-reproducing.

This is where fairness and efficiency can align more often than public debate suggests. In the hiring study, the exploration model did not simply trade quality for demographic diversity. The authors' analyses found that the machine-learning approaches identified candidates with stronger estimated hiring potential than human recruiters, and they found no evidence that the exploration model's diversity gains came at a substantial cost in hiring yield relative to the supervised model.

Again, this is one firm's data. It should not be generalized carelessly.

But the mechanism makes sense. If historical underrepresentation means the firm has overlooked some high-quality candidates, exploration can find both diversity and value.

Fairness can reveal market inefficiency.

This possibility is particularly important because opponents of fairness interventions often assume every gain for an underrepresented group must be paid for through lower performance. That assumption treats the historical selection process as already efficient.

If the old process had blind spots, there can be gains left on the table.

The reverse is also possible. Exploration may reveal real performance gaps under the current environment. A serious institution then has to ask whether the gap reflects preparation, job design, evaluation bias, unequal support, or something else. The evidence may justify changing recruiting, changing training, changing the workplace, or changing the model.

Exploration supplies a question. Governance chooses the response.

There is a second fairness issue beyond group representation: the right to be legible on terms other than historical similarity.

Prediction systems naturally reward people whose histories resemble known success. A person with a novel background can be disadvantaged because the institution has no category for them. This is not always a protected-class problem. It affects immigrants, career changers, self-taught workers, people with interrupted careers, founders from new industries, patients with rare presentations, and students from uncommon educational pathways.

Modern societies celebrate mobility while building prediction systems from stable categories.

That tension deserves attention.

A fair society should have some institutions capable of evaluating people through direct evidence rather than pedigree alone.

Work samples do this. Exams can do it, though they have their own limits. Auditions do it. Trials and probationary stages can do it when properly designed. Portfolios do it. Open competitions do it. These mechanisms create fresh labels closer to the capability of interest.

They reduce dependence on historical proxies.

The more powerful predictive models become, the more valuable these direct-observation channels may be. Otherwise, a model can infer likely performance from background so efficiently that the institution has less incentive to actually test performance.

Prediction can replace audition.

That is efficient until the proxies become the gate and the gate prevents the institution from discovering people who violate the proxies.

Curiosity is the counterweight.

It asks for one more measurement before a permanent conclusion when the cost is reasonable and the evidence is thin.

It asks whether a group is scoring poorly or merely poorly observed.

It asks whether a fairness audit can see outcomes outside the selected sample.

It asks who bears the cost of learning.

It asks whether today's equal rule is helping tomorrow's evidence become more equal.

These questions do not settle political disagreements about fairness. They improve the factual ground on which those disagreements occur.

A fair system cannot promise that everyone will receive the same outcome.

It can do better than converting the consequences of past exclusion into a permanent claim about future potential.
