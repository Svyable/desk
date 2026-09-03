# Who Audits the Algorithm

The easiest way to trust an algorithm is not to look too closely.

The screen is clean.

The score arrives instantly.

The ranking looks exact.

There is no visible argument, no tired committee member, no handwritten note in a margin, no obvious favoritism. A number appears where judgment used to be.

That appearance is powerful.

It is also dangerous.

Every allocation system in this book has needed a rule.

The medical match needs preferences and capacities.

A kidney exchange needs compatibility information and chain logic.

A school-choice system needs priorities.

A housing lottery needs eligibility rules and a randomizer.

A college admissions office needs criteria, legal boundaries, and institutional goals.

An algorithm does not escape those choices.

It freezes some of them into software.

That can make the choices easier to reproduce.

It can also make them easier to mistake for facts.

Suppose an employer uses software to rank applicants.

The vendor says the tool is objective.

The employer says it saves time.

Applicants see a portal, maybe an assessment, maybe a chatbot, maybe nothing at all except a rejection.

Who knows whether the tool is doing what it is supposed to do?

The obvious answer is: audit it.

That answer sounds more settled than the field actually is.

An algorithm audit can mean several different things.

A statistical test for unequal outcomes.

A technical review of model behavior.

A check that required documentation exists.

An examination of training data.

A security assessment.

A governance review.

A legal compliance exercise.

A study of whether humans can meaningfully override the system.

A comparison between the rule the institution describes and the rule that actually operates in practice.

These are related.

They are not interchangeable.

The distinction matters because an institution can pass one kind of audit while failing another kind of reality.

New York City offers one of the clearest current examples.

Local Law 144 requires employers and employment agencies using covered automated employment decision tools to meet several conditions. The tool must have undergone a bias audit within the prior year. A summary of the audit results must be made publicly available. Candidates and employees must receive specified notice.

Enforcement began in July 2023.

This is important because it turns a previously optional question into a recurring obligation.

Did anyone check the tool?

When?

Using what data?

What did the results show?

Can the public see a summary?

Those are useful questions.

They create evidence where there might otherwise be only a vendor promise.

But a bias audit under a defined law is not a certificate that the system is fair in every meaningful sense.

That is the first lesson.

A legal audit has a scope.

The New York regime asks for specific calculations related to selection rates and impact ratios for covered categories.

Those measurements can reveal patterns worth investigating.

They cannot prove the absence of every kind of discrimination.

They cannot tell you whether a blind applicant was screened out because an assessment was inaccessible.

They cannot tell you whether a supposedly neutral variable is acting as a proxy for something the institution should not use.

They cannot tell you whether a manager routinely ignores the tool for favored candidates.

They cannot tell you whether the model ranks people consistently for a criterion that has nothing to do with job performance.

A narrow audit can be competently performed and still leave the larger system poorly understood.

That does not make the audit useless.

It makes scope visible.

This is a recurring problem in regulation.

Once a metric becomes mandatory, organizations begin to treat the metric as the problem.

If the required number is acceptable, the work feels done.

If it is not, the organization tries to improve the number.

The danger is that compliance quietly becomes the definition of fairness.

That is too small.

The Equal Employment Opportunity Commission has long treated hiring as a process rather than a single test.

Its guidance on employee selection procedures predates modern machine learning by decades, which is exactly why it is useful here.

The old framework asks us to look at the total selection process.

An employer may use an application screen, a written test, an interview, a background check, and a final manager decision.

The combined system matters.

An AI tool can simply become another stage in that sequence.

This helps correct the tendency to think the word algorithm announces an entirely new moral problem.

Hiring has always been an allocation mechanism.

The algorithm changes how some judgments are made, recorded, and scaled.

It does not invent the fact that some people advance and others do not.

The right audit therefore needs to ask what role the tool plays inside the whole process.

Does it eliminate applicants?

Does it rank them?

Does it recommend?

Does a human review the result?

Can the human override it?

Does the human know why the score is high or low?

Does the next stage treat the algorithmic score as advice or as destiny?

These questions often matter more than the model architecture.

A simple threshold can create enormous consequences.

A complicated model can create modest ones if a knowledgeable human uses it cautiously.

Risk comes from function, not sophistication alone.

This is one reason the phrase human in the loop deserves suspicion.

It sounds reassuring.

A person remains involved.

Therefore the system is not fully automated.

Therefore the system is safer.

None of those conclusions necessarily follows.

A human reviewer may receive a recommendation with no explanation and almost always follow it.

A human may technically have override authority but be punished for moving too slowly.

A manager may inherit the same biased information the model used.

A reviewer may trust the software precisely because it looks more objective than personal judgment.

A human stage can correct the machine.

It can also rubber-stamp it.

That is auditable.

How often are recommendations overridden?

In which direction?

For which groups?

Under what circumstances?

Are overrides documented?

Does a reviewer need a reason?

Is the reason later examined?

An institution that cannot answer these questions does not have meaningful human oversight merely because a person clicks the final button.

The same principle applies to disability.

A statistical group audit may show acceptable race and sex impact ratios while the tool still creates unlawful barriers for applicants with disabilities.

The EEOC and Justice Department warned employers about this problem in 2022.

Software can disadvantage a qualified applicant because of how a disability interacts with an assessment, interface, timed test, speech-analysis system, or other screening method.

A reasonable accommodation may be necessary.

This exposes a deeper limitation of aggregate metrics.

Fairness has more dimensions than the audit table.

A system can look balanced in one summary and remain inaccessible to particular people.

No finite audit measures everything.

The answer is not to demand an infinite checklist.

It is to be honest about what each test can establish.

This sounds modest.

It is surprisingly difficult.

Institutions like conclusive language.

Passed.

Certified.

Validated.

Compliant.

Independent.

These words compress uncertainty into a label.

An audit report often resists that compression if you actually read it.

What data were available?

How old were they?

Which applicant groups were large enough to analyze?

Was the tool tested in the employer's own population or in the vendor's pooled data?

Did the model change after the audit?

Did the employer change its threshold?

Did the surrounding workflow change?

Were people who dropped out of the process counted?

Did the audit examine only selection or also job performance later?

Each answer changes what the result means.

This is why independence matters but does not solve the problem.

An independent auditor can reduce a conflict of interest.

That is valuable.

A vendor grading its own homework should make us skeptical.

But an independent auditor is not omniscient.

The auditor still works inside a scope.

The auditor still needs data.

The auditor still chooses or follows methods.

The auditor may see only what the client provides.

The law may ask a narrow question.

The system may have harms outside that question.

Independence can improve credibility.

It cannot turn partial evidence into total knowledge.

There is another complication.

Algorithms change.

A conventional physical machine can often be inspected against a stable design.

Software lives differently.

A vendor updates a model.

An employer changes a threshold.

The applicant population changes.

A new labor market changes who applies.

A résumé parser receives new formats.

A model trained on yesterday's language encounters today's behavior.

A business unit begins using the tool for a different job family.

The surrounding process changes after a merger.

A human team develops informal workarounds.

A one-time audit captures one point in this moving system.

The law may require annual review.

Good governance often needs more than waiting for the calendar.

A serious institution needs to know what changes should trigger re-evaluation.

New model version?

New population?

New purpose?

New threshold?

New data source?

Unexpected complaint pattern?

Sudden shift in outcomes?

The concept is familiar outside AI.

A bridge is inspected after unusual stress.

A drug label changes when new safety evidence appears.

A bank monitors a portfolio after market conditions move.

Allocation mechanisms deserve similar attention because the environment around them changes even when the code does not.

This is where the National Institute of Standards and Technology takes a broader approach.

NIST's AI Risk Management Framework is voluntary.

That point matters.

It is not a federal law that every AI system must follow.

But its structure is useful because it treats risk management as an ongoing organizational practice rather than a single pass/fail examination.

Govern.

Map.

Measure.

Manage.

The words are dry.

The idea is not.

Govern means somebody has to own the risk.

Map means the institution has to understand the context in which the system operates.

Measure means gathering evidence.

Manage means doing something about what the evidence shows.

An audit that ends at measurement is incomplete in this sense.

It can tell the institution there is a problem and leave the institution perfectly capable of ignoring it.

A mature system needs remediation authority.

Who can pause deployment?

Who can change a threshold?

Who can demand more data?

Who can override a business unit that wants to keep using the tool?

Who tracks whether the fix worked?

Governance sounds bureaucratic until the moment a risk is discovered.

Then governance means knowing who has the power to act.

This is another way algorithm audits resemble all the other waiting lists in the book.

The design is not merely technical.

It is institutional.

A stable matching algorithm can be mathematically elegant and still fail if the institution cannot enforce participation rules.

A kidney exchange can be theoretically sound and still depend on hospitals sharing information and honoring commitments.

A school-choice system can be strategy-proof in a narrow formal sense and still operate inside unequal school quality.

A bias audit can be statistically competent and still fail if nobody is responsible for remediation.

Mechanisms live inside organizations.

That is where their moral consequences become operational.

The European Union is building a more formal regulatory architecture around this idea.

The AI Act became generally applicable in August 2026, but its obligations arrive on different schedules.

That timeline matters because it is easy to speak about the Act as though one giant switch flipped across Europe.

It did not.

Some transparency rules are already live.

Other high-risk obligations for sensitive uses, including areas such as employment and education, are scheduled later under the current implementation timeline.

The architecture points toward several requirements that are useful beyond Europe: risk assessment, data quality, logging, documentation, deployer information, human oversight, robustness, cybersecurity, and accuracy.

Notice how different this is from asking for one fairness ratio.

The regulator is trying to make the system inspectable across its life cycle.

Logs matter because without records, later investigation becomes guesswork.

Documentation matters because an authority cannot evaluate a system whose purpose and limits are undefined.

Human oversight matters because automation should not become an excuse for institutional helplessness.

Risk management matters because a consequential system should not be deployed and forgotten.

This broader architecture still faces the same fundamental problem.

Rules have to become practice.

An organization can produce documentation nobody reads.

A human-oversight plan can exist on paper.

Logs can be collected without being monitored.

Risk registers can become compliance furniture.

The existence of governance artifacts is evidence of process.

It is not proof of effectiveness.

Auditors will have to distinguish the two.

Colorado shows another side of the problem: the rules themselves can move.

The state's original 2024 AI law was revised in 2026. New automated-decision provisions are scheduled to take effect in January 2027, while the Attorney General develops implementing rules.

For an organization trying to comply, this is not an abstract constitutional discussion.

It affects what data to collect, what notices to prepare, what assessments to run, which vendors to question, and how to document decisions.

The regulator is designing an audit regime while companies are designing systems that may later be audited under it.

This makes the compliance environment itself a moving target.

There is a temptation to interpret that instability as evidence that regulation should wait until technology settles down.

Technology rarely settles down on command.

There is an opposite temptation to write extremely detailed rules early and freeze immature assumptions into law.

That can be just as dangerous.

A metric chosen because it was convenient in 2026 can become the target every company optimizes for in 2030.

This is Goodhart's law in regulatory clothing: when a measure becomes a target, people reorganize around the measure.

If the audit asks only for one ratio, the organization may become excellent at producing that ratio.

The system may still be bad.

That does not mean metrics are useless.

It means a good audit regime needs several layers.

Quantitative outcomes.

Process evidence.

Documentation.

Version control.

Complaint channels.

Access for regulators or qualified reviewers.

Triggers for re-audit.

A way to remediate.

And enough flexibility to notice a harm the original checklist did not imagine.

There is also a privacy problem.

The strongest form of transparency would be to publish everything.

Every feature.

Every weight.

Every threshold.

Every applicant record.

Every model version.

Every reviewer action.

That would be absurd.

Applicants have privacy rights.

Security matters.

Trade secrets can be legitimate.

Some details would make gaming easier.

A system can therefore be accountable without being fully public.

This requires access design.

Who gets to see what?

The public may receive aggregate summaries.

Regulators may receive more detail.

Independent auditors may receive protected data under contractual and legal restrictions.

Internal risk teams may receive operational logs.

Affected individuals may receive notices or explanation rights.

Different audiences need different visibility.

Opacity is not one thing.

Neither is transparency.

The question is whether the right people can inspect the right evidence when it matters.

This distinction becomes especially important when the system is proprietary.

A company may argue that revealing the full model would expose intellectual property.

That claim can be legitimate.

It can also become a shield against scrutiny.

The answer is not necessarily public source code.

A regulator can inspect confidential material.

An auditor can work under nondisclosure obligations.

An institution can publish outcome summaries and governance details without exposing every technical secret.

Mechanism design again offers the useful frame.

Accountability is itself an allocation problem.

We are allocating access to information.

Too little access creates unaccountable power.

Too much access can create privacy, security, and gaming costs.

The system needs a rule.

There is one more counterargument worth taking seriously.

Algorithms may sometimes be more auditable than humans.

This is uncomfortable because criticism of automated systems often compares them with an imaginary human process full of wisdom, nuance, and accountability.

Real human institutions are messier.

A hiring manager may have an intuition and no record of how it formed.

A committee may remember the same discussion differently.

A reviewer may apply a standard inconsistently from morning to afternoon.

A supervisor may quietly favor referrals from friends.

A paper process may produce almost no data useful for later analysis.

Software can create logs.

A model version can be frozen.

A threshold can be documented.

Historical decisions can be replayed.

A statistical pattern can be measured.

These are real advantages.

The lesson is not that humans are safer.

It is that traceability has value.

A good automated system may be easier to interrogate than a bad manual one.

The relevant comparison is mechanism against mechanism.

Does this process create better evidence about itself than the alternative?

That is a more productive question than whether algorithms are good or bad.

Auditing also forces us to confront a problem that appeared in the college admissions chapter.

Some institutions want discretion because rigid rules can be gamed and because context matters.

Audits want regularity because irregular judgment is difficult to test.

Those goals can conflict.

A fully standardized process is easy to audit and may be stupid.

A richly contextual process may be humane and difficult to audit.

There is no universal answer.

But the tradeoff should be visible.

If an institution chooses discretion, it inherits a greater burden to document how that discretion is constrained.

Who may override?

For what reasons?

How are reasons recorded?

How are patterns reviewed?

If an institution chooses a rigid rule, it inherits a different burden.

Why this rule?

Why these features?

Why this threshold?

What happens at the boundary?

Does the rule still make sense as conditions change?

Auditing is the discipline of refusing to let either kind of system hide behind its preferred excuse.

The human process cannot say, trust our judgment.

The automated process cannot say, trust the math.

Both need evidence.

This brings us back to the central question.

Who audits the algorithm?

Sometimes an independent firm.

Sometimes a regulator.

Sometimes an internal risk team.

Sometimes researchers.

Sometimes journalists.

Sometimes plaintiffs in litigation.

Sometimes affected workers or applicants who notice that the outcomes do not match the story they were told.

A healthy system should not depend on one heroic auditor.

It should create several routes for challenge.

Complaint channels matter because aggregate monitoring will miss individual failures.

Public summaries matter because outside scrutiny can reveal patterns insiders normalize.

Regulatory access matters because some evidence cannot be public.

Internal governance matters because waiting for enforcement after harm is expensive.

Versioning matters because today's system may not be yesterday's.

The architecture of accountability should be redundant.

That sounds inefficient.

It is.

So are smoke detectors, financial controls, medical second opinions, and appeals courts.

Some redundancy exists because the cost of one unnoticed failure is high.

Allocation systems deserve the same seriousness when they decide who gets a job, school place, loan, home, transplant opportunity, or other scarce good.

The audit should still be proportional to the stakes.

A playlist recommendation does not need the same regime as a hiring screen.

A low-risk convenience tool does not need the same documentation as a system deciding access to critical infrastructure or public benefits.

This is why risk-based regulation is appealing.

The challenge is classification.

A tool can look trivial until it becomes a gatekeeper.

A résumé parser seems administrative until every applicant must survive it.

A fraud score seems protective until it freezes someone's benefit.

A school ranking seems informational until families reorganize their applications around it.

Risk follows institutional role.

The final principle is simple enough to state.

An allocation mechanism deserves confidence only when the people operating it can produce evidence about how it behaves in practice.

Not just the specification.

Not just the marketing language.

Not just the policy manual.

Not just the fairness metric chosen by law.

Evidence from the deployed system.

Who was affected?

What changed?

What was measured?

What was missed?

What complaints appeared?

What version ran?

Who overrode it?

What happened after the audit?

The point is not to eliminate uncertainty.

That would be another false promise.

The point is to make uncertainty inspectable.

Every line in this book has asked people to trust a rule.

First come, first served asks us to trust time.

A lottery asks us to trust chance.

A priority system asks us to trust the categories.

A market asks us to trust price.

A stable match asks us to trust the algorithm.

An audit asks us to trust evidence about the rule.

That makes the audit one more mechanism.

It needs design too.

The final chapter asks what that design should aim for.

Once we can see the queue, the lottery, the priority rule, the matching algorithm, and the audit around them, what makes one waiting list better than another?

The answer cannot be fairness alone.

Fairness has too many meanings.

It cannot be efficiency alone.

Efficient systems can distribute suffering with impressive speed.

It cannot be transparency alone.

Transparent rules can still be cruel.

The better question is whether the mechanism can explain its values, survive scrutiny, adapt when evidence changes, and make scarcity less arbitrary without pretending scarcity has disappeared.

That is where the book ends.
