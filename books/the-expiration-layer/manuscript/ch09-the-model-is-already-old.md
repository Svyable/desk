# The Model Is Already Old

A model begins aging before it is deployed.

The data was collected in the past. The labels describe past outcomes. The features encode a world that has already moved. Training takes time. evaluation takes time. approvals take time. integration takes time. By the moment a model begins making real decisions, every empirical claim supporting it has a vintage.

This is not a defect unique to artificial intelligence. Every statistical estimate is historical. Every map is drawn from observations made before someone uses it. Every medical guideline rests partly on patients treated earlier. Every financial forecast begins from old data.

Machine learning makes the temporal problem operational because a model can act repeatedly without feeling the age of its evidence.

A person who remembers an old price may notice when the store shelf disagrees. A deployed model does not experience surprise unless someone built a way to measure it.

Researchers have studied versions of this problem for decades under terms such as dataset shift and concept drift. The distribution encountered after deployment may differ from the distribution represented in training. Relationships between inputs and outcomes can change. The population can change. Measurement can change. behavior can adapt to the model itself. A once-useful variable can lose meaning. A new product, law, pathogen, fraud strategy, economic shock, competitor, or social norm can move the environment.

The model remains mathematically intact.

Its authority decays.

This is one of the clearest places to apply expiration as an evidence boundary.

A model approval should not be interpreted as “the model is valid.” It should be interpreted as “given these tests, on this data, for this use, under these conditions, the organization has evidence sufficient to deploy it now.”

The sentence is longer because reality is longer.

The approval should carry a review horizon appropriate to the consequences and volatility of the domain. More important, it should carry triggers that can end authority earlier when monitored evidence changes.

NIST’s work on AI risk management and post-deployment monitoring reflects the underlying difficulty. Performance measured before deployment does not guarantee performance afterward. Deployed systems need observation of outputs, failures, environment, user behavior, incidents, and other signals relevant to the risk. Monitoring itself is difficult because ground truth can arrive late, populations can shift, feedback can be biased, and the act of deployment can change behavior.

Those limitations make expiration more useful, not less.

If continuous monitoring were perfect, a system could revoke model authority at the instant the model became inappropriate. In real systems, monitoring is incomplete. A scheduled revalidation date is a backstop against silent drift.

The same dual architecture that works for certificates appears again.

Events can revoke trust early.

Expiration prevents trust from lasting forever in the absence of events.

The first temptation is to choose a universal interval. Review every model annually. retrain quarterly. recertify monthly. These rules are easy to audit and often weakly connected to actual risk.

A weather model and a mortgage default model do not age on the same clock. A model identifying defects in a manufacturing line may need reconsideration when machinery changes. A medical model may be sensitive to clinical practice, disease prevalence, coding, and patient mix. A fraud model faces adversaries actively adapting to it. A language model used to summarize a fixed historical archive may retain usefulness for years, while the same model answering current regulatory questions can become stale within days.

The relevant half-life is a property of the relationship between model and environment.

Sometimes that relationship can be observed directly. Error rates rise. calibration worsens. inputs move outside familiar ranges. user corrections increase. downstream outcomes change. the model abstains more often. safety incidents appear.

Sometimes the most important changes occur upstream. A hospital changes laboratory equipment. A government changes a benefit definition. A company modifies a product taxonomy. An employer changes a hiring process. The model’s numeric performance may not immediately reveal that its meaning changed.

This is why model governance must include dependency on context, not merely metrics.

A model should know what events invalidate assumptions.

If a credit model depends on a field whose collection method changes, review should trigger. If a medical model was validated only for adults at certain institutions, deployment to children or a new care setting should not inherit approval. If an agent relies on a tool whose API semantics change, prior evaluations may no longer cover the behavior. If a model was tested with one system prompt, policy layer, retrieval corpus, or tool set, substantial changes to those components can produce a new operating system even when the base weights are identical.

Generative AI makes the idea of “the model” especially slippery.

A deployed assistant is often a composition: base model, instructions, retrieval, memory, tools, user context, safety filters, routing, post-processing, and external services. Any component can change without changing the name shown to users.

What exactly expires?

Not necessarily the weights. The thing requiring renewal is the claim that this configuration is acceptable for this use.

That claim can have a shorter lifetime than the artifact itself.

A model checkpoint can remain archived indefinitely for reproducibility. A benchmark result can remain historically true. A safety evaluation can remain part of the record. None of those facts requires the system to keep serving current users under the old approval.

Again, memory and authority separate.

This matters economically because organizations naturally resist repeated validation. Evaluation consumes data, expert time, compute, product attention, and sometimes external review. A model that is “working” creates pressure to leave it alone.

Yet the cost of revalidation should be compared with the cost of silent degradation multiplied by the scale of automated action.

A human analyst can make twenty judgments in a day. A model can make millions. Small changes in error rate can become large numbers of affected people, transactions, messages, or decisions. The higher the volume and consequence, the weaker the case for indefinite approval.

The argument does not require alarmism about AI. Ordinary software also fails at scale. Models add uncertainty because they infer from statistical patterns and because their operating distributions can move.

The relevant design question is boring: what evidence would we require today if we were deciding whether to deploy this system for the first time?

If the answer differs materially from the evidence we possess, renewal is due.

This reframes retraining.

Retraining is often treated as the obvious response to age. But a model does not need to be retrained merely because time passed. Retraining can make performance worse, introduce new bias, break downstream behavior, destroy comparability, or absorb bad data. A stable model in a stable domain may remain good. Conversely, a newly retrained model can be inappropriate immediately if the training process misunderstood the environment.

Expiration should apply to trust, not mechanically to weights.

At the review point, continuation may be the right outcome.

This is important because organizations can confuse activity with governance. A scheduled retraining pipeline looks disciplined. If nobody examines whether the data remains representative, whether the target still matters, whether feedback loops distort labels, or whether the use case changed, the pipeline simply automates recency.

Fresh is not the same as valid.

The inverse is also true. Old is not the same as invalid.

A physical law does not become stale because the paper describing it is old. A model of a well-controlled industrial process may remain useful for a long time. A language model’s ability to transform prose or analyze a fixed codebase can remain valuable even if its knowledge of recent events is outdated. A historical risk relationship can persist for decades under stable institutions.

The expiration layer is valuable precisely because it does not require the crude claim that age equals wrongness.

It says age changes the burden of evidence.

At first deployment, an organization already did the work of justification. As time and change accumulate, the gap between original evidence and current use widens. At some point, continuation should require fresh support.

That point can be dynamic.

A model operating in a stable environment with strong monitoring may earn a longer interval. A model in a volatile domain or one exposed to strategic adaptation may need shorter review. An incident can reset the clock. A major feature change can require immediate revalidation. Repeated stable reviews can justify extending intervals. Deteriorating signals can shorten them.

This is closer to maintenance engineering than annual compliance.

Airplanes are not made safe by replacing every part every January. Maintenance schedules reflect usage, component characteristics, inspections, known failure modes, and operating conditions. Some components are replaced after specified intervals. Others are inspected. Others remain in service until measured condition changes. The system combines clocks, events, and evidence.

AI governance should be at least that temporal.

The analogy should not be pushed too far. Physical components have failure processes that can often be measured more directly than social models. But the discipline is useful: do not ask a calendar to do a sensor’s job, and do not ask a sensor to replace a maximum service interval when uncertainty remains.

Model expiration also creates a governance record.

Suppose a system denies loans, prioritizes inspections, recommends medical follow-up, detects fraud, or ranks job applicants. Years later, someone asks why the model was still operating at a particular time. A mature record can show which version ran, what it was approved to do, when it was last validated, what monitoring existed, which incidents occurred, and what evidence supported renewal.

Without expiration events, model governance can become a document from launch day.

That is insufficient for systems that learn indirectly through changing inputs even when they do not update their weights.

The language of “deployment” encourages a false sense of completion. Software is deployed and then maintained. A model is deployed into a relationship with the world.

The relationship continues changing on both sides.

Users learn how to interact with the model. attackers learn how to evade it. employees learn how to satisfy it. institutions change policy because of its outputs. vendors change upstream data. economic conditions move. sensors are replaced. prompts evolve. downstream tools change. the model may be routed only the cases another model cannot handle.

A performance estimate from the beginning of that relationship eventually describes a different system.

This is particularly dangerous when models affect the data used to evaluate them.

A fraud detector blocks transactions it considers suspicious. The observed future dataset contains fewer successful frauds of the type the model catches. A predictive policing system can direct attention toward places where more incidents are then observed. A recommendation system changes what people consume, producing new engagement data shaped by its own prior recommendations. A hiring model changes the composition of workers whose future performance becomes training data.

The model participates in manufacturing its evidence.

Expiration does not solve feedback loops, but scheduled revalidation creates opportunities to ask whether the evidence still means what it once meant.

The question becomes even sharper for autonomous agents. An agent may run for days, weeks, or indefinitely, carrying goals, memories, permissions, and strategies forward. Its base model may be unchanged while its accumulated state becomes increasingly specific to past interactions.

What is the approval object now?

A one-time evaluation of the base model cannot fully justify a long-running agent whose environment and memory have evolved far beyond the test conditions. Authority may need to attach not only to model versions but to agent states, tasks, tool permissions, and operating windows.

A long-running agent can be periodically checkpointed, reviewed, or required to reacquire authority. High-consequence permissions can expire faster than low-consequence memory. Goals can have deadlines. budgets can close. tool grants can lapse. a task can require renewed confirmation if it persists beyond the horizon a user reasonably contemplated.

The temporal layer becomes part of alignment.

An agent should not assume that because a user wanted something yesterday, the user wants it forever.

That principle is so obvious in human relationships that its absence in software is revealing. A personal assistant does not ordinarily interpret “Please handle the flowers for my anniversary” as standing authority to buy flowers every year for the rest of the client’s life. Context supplies an implied lifetime.

Software tends to preserve instructions because preservation is technically easy.

As AI systems acquire memory, the implied expiration of human intention must become explicit enough for machines to respect.

The same applies to organizational instructions. A CEO’s emergency directive during an outage should not become a permanent agent policy. A temporary sales incentive should not remain in a procurement agent’s objective. A compliance exception should not become part of a model’s enduring memory simply because the system stored the conversation.

Models do not only age because the world changes.

They can preserve a world that was never meant to last.

The expiration layer gives governance a way to say: this system may remain capable, available, and archived, but its permission to make this class of decision must be renewed.

That separation is more useful than a blanket model expiration date.

A model can be old and excellent.

An approval can be recent and foolish.

The thing that needs a clock is the claim connecting one to the other.