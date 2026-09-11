# Common-Mode Failure

Two backups are not two backups if they break for the same reason.

The physical versions are easy to see. Two generators fed from the same flooded fuel tank. Two data centers behind the same substation. Two escape routes that cross the same bridge. The second object exists; the second way out does not.

AI makes this harder because the duplicate often looks different. Another logo, another interface, another model name, another team. Underneath, the alternatives may still share a cloud account, an identity service, a retrieval corpus, an evaluation set, a model family, a reviewer pool, or simply the same assumption about what a good answer looks like. The visible diversity survives right up to the moment the shared dependency fails.

This is the chapter where robustness stops being a count of backups and becomes a question about independence.

## The second path

A company worried about model dependence integrates a second provider. The architecture diagram gains another box and the risk review gets easier to read.

Then the primary service fails. Traffic moves to the secondary model, which is healthy, but the request still has to pass through the same internal gateway and identity layer. Or the second provider answers, but the application has quietly grown dependent on the first provider's tool schema, memory behavior, context conventions, or orchestration layer. Or both models work perfectly and retrieve the same stale policy document.

The company had a second model. What it lacked depended on the case: a second service path, a second execution path, or a second source of evidence.

This is not merely an AI problem. Reliability engineering has spent decades learning that redundancy above a shared bottleneck can create a comforting diagram without creating much resilience. What is newly useful in 2026 is that the same problem is showing up in official work on the architectures now being built around AI.

NIST's August 2026 initial public draft on multi-cloud security is a useful counterweight to the casual advice to "use multiple clouds." Its working group identified twenty-three consolidated challenge areas created or amplified when organizations orchestrate controls across autonomous cloud silos. Multi-cloud can reduce some concentration risks, but it also creates new problems in identity, policy consistency, visibility, governance, and operational coordination. More providers can buy independence at one layer while manufacturing complexity at another.

That is the first correction to the easy robustness story: diversification is not free, and it is not automatically diversifying.

## Independence has a price

True independence is often irritatingly expensive because the expensive part is the separation.

A fallback route may need a different region and a different provider. A second review path may need a source that was collected independently. A backup evaluator may need people who did not build the system being evaluated. A consequential human reviewer may need to form a judgment before seeing the model recommendation. A migration rehearsal may have to bypass the abstraction layer whose whole purpose is to make providers look interchangeable.

Organizations naturally economize on these costs. Sometimes they should. Shared tooling improves security operations. Common platforms reduce training burden. Central models make evaluation easier. Standard workflows lower coordination cost. A low-consequence drafting task does not deserve an expensive cathedral of independent failure domains.

The useful question is therefore not how much diversity an organization can accumulate. It is where correlated failure would be expensive enough to justify buying independence.

That framing also prevents a familiar mistake: treating any shared component as evidence of bad architecture. Complex systems always share something. The job is to know what they share, what happens when it disappears, and whether the remaining path has ever been exercised without it.

## The monoculture can be cognitive

The more interesting common mode may sit above infrastructure.

Imagine a thousand employees making independent mistakes. One overlooks a clause, another misreads a chart, another trusts a weak source. The organization suffers many small errors, but the errors are noisy.

Now give all thousand people the same excellent assistant, configured from the same organizational corpus. Average work may improve dramatically. That is a real benefit, not a prelude to a warning label. But the shape of error changes. When the assistant carries a blind spot, the blind spot can travel farther than any one employee's mistake could have traveled.

A more accurate system can therefore create a more concentrated failure mode. There is no contradiction. Average accuracy and systemic robustness measure different things.

The same effect appears in reasoning. A good assistant supplies competent defaults: the standard market segmentation, the conventional security threat model, the expected structure of a memo, the familiar arguments on each side. Those defaults save time. They also make it easier for language, sources, and frames to converge before anyone has independently considered the problem.

Ten people may agree. The agreement means less if all ten began from closely related machine-generated priors.

That matters in places where independent agreement is itself evidence: forecasting, incident diagnosis, scientific interpretation, investment judgment, security review. In those settings, preserving disagreement for a while can be a measurement technique. Let one analyst see the primary evidence before the consensus summary. Let separate teams frame the problem before exchanging drafts. Ask a reviewer for a provisional judgment before revealing the model's recommendation. The point is not to fetishize dissent. It is to avoid destroying the information contained in independent convergence.

## When the test becomes part of the failure

Evaluation can acquire the same common mode.

A company builds a strong eval set. Teams use it to compare models, tune prompts, select providers, promote agents, and improve guardrails. This is exactly what a serious organization should do.

Then success changes the object being measured. The organization gets very good at the cases represented in the test. The product expands. Customers change behavior. Fraudsters adapt. New tools are connected. Rare incidents arrive from parts of the distribution the benchmark never contained. A durable eval suite has preserved memory so well that it begins to preserve yesterday's boundary too.

NIST's March 2026 report on monitoring deployed AI systems is useful here because it refuses the fantasy that pre-deployment evaluation settles the matter. The report identifies performance degradation and drift, fragmented logging across distributed infrastructure, human-AI feedback loops, uncertain monitoring cadence, and still-immature guidance as live post-deployment problems. It also asks how automated monitoring should be balanced with human-validated monitoring. Those are not reasons to abandon evals. They are reasons to stop treating the eval as an oracle.

A robust test system needs some way for reality to surprise it: fresh incidents, untouched holdouts, randomly sampled live cases, adversarial cases designed outside the workflow team, and periodic checks that the metric still represents the consequence the organization cares about.

The eval should remember failure without freezing the world that produced it.

## Agreement is not provenance

Retrieval creates another deceptive form of redundancy. Multiple models can independently produce the same answer because all of them retrieved the same bad record.

A policy document contains an obsolete exception. A customer field is mislabeled. A research corpus contains ten articles repeating a statistic that originated in one weak estimate. The models agree, the citations multiply, and confidence rises.

But the agreement is downstream of one observation. It is a data echo.

This problem predates AI. Three newspapers can repeat one wire report; five analysts can rely on one vendor forecast. AI simply makes the compression faster and the resulting prose more self-assured.

For consequential work, the question is not only whether the answer has citations. It is whether the evidence has lineage. How many observations are actually independent? Which sources are copies, summaries, or derivatives of another? Did the evidence-producing process share the same bias as the decision system? A pile of references can still have a sample size of one.

This is where "use another model" becomes weak advice. If the models share the same evidence, evaluation assumptions, and operating environment, changing the model may diversify very little of what matters.

## The human can share the same mode

"Have a human review it" sounds like an independent defense until the interface makes independence impossible.

The reviewer sees the recommendation first. It is fluent and usually correct. The citations look plausible. The queue is long. The human confirms. Two agents participated, but there was one reasoning path and a signature.

Historical human-factors research gives good reason to take automation bias and complacency seriously, while the transfer to modern generative systems should not be treated as automatic. The practical point does not require claiming that every reviewer anchors in the same way. If independent judgment is the reason the human is there, the workflow should make some effort to preserve it.

That can mean asking for a decision before revealing the recommendation, showing evidence before conclusions, sending a sample to blind review, or treating disagreement as a trigger for inspection rather than a defect to be smoothed away. None of this is free. For ordinary work, it may be absurdly expensive. For access, money, safety, or other high-consequence decisions, a nominal second look that inherits the first look's frame may be cheaper than the independence the organization thinks it purchased.

## Audit the shared cause

A useful common-mode audit starts with an annoying question: what single thing could make several of our safeguards fail together?

The answer might be a cloud account, identity layer, retrieval corpus, labeling process, evaluator, policy interpretation, reviewer pool, model family, executive forecast, or code path. The exercise becomes useful only after the noun is named. If that dependency disappears or turns out to be wrong, what still works? For how long? At what quality? Who notices? Who owns recovery? When did the supposedly independent path last run without the shared component?

Sometimes the result will be a deliberate decision to accept the common mode. Good. A business can rationally prefer one deeply integrated provider to several shallow ones. It can standardize on one model family because the operational simplicity is worth more than the marginal resilience of another. It can centralize evidence because provenance controls are stronger in one place. Robustness does not require maximal heterogeneity.

What it does require is refusing to count decorative alternatives as independent ones.

The distinction becomes especially important as AI systems gain tools and act across more infrastructure. NIST's 2026 agent-security work treats access to diverse data, tools, and applications as a security problem requiring identification, authorization, auditing, monitoring, and constraints on the deployment environment. The stronger an agent becomes, the less useful it is to ask only whether there is another model waiting in reserve. The relevant object is the whole path from evidence to authority to execution to recovery.

One provider with a tested manual degraded mode can be sturdier than five providers behind one brittle orchestration layer. One expert who reaches the primary evidence independently can add more information than ten reviewers reading the same generated memo. One fresh holdout can reveal more than a thousand familiar benchmark cases.

Robustness lives in the failure graph, not the component count.

Trace the shared causes. Buy independence where correlated failure would be costly. Accept shared dependencies where the economics justify them, but name them honestly.

Two backups are not two backups if they break for the same reason.
