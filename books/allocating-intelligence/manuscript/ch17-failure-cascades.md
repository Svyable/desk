# Failure Cascades

Knight Capital did not need a malicious superintelligence to lose control of an automated system.

In the summer of 2012, the firm prepared software for a new New York Stock Exchange program. Code was deployed across servers, but one of eight servers did not receive the new version. Old code remained callable. On August 1, incoming orders triggered defective behavior on that server, which sent orders rapidly into the market. The problem accumulated at machine speed. The firm suffered an enormous loss in less than an hour and required rescue financing soon afterward.

The Securities and Exchange Commission’s later order described more than a software bug. Deployment procedure, review, safeguards, and operational controls all mattered.

That is what makes the event useful.

Complex systems rarely fail because one component becomes fantastically stupid. They fail because several ordinary weaknesses align and then give one another momentum.

Artificial intelligence adds new ways for momentum to form.

A model misunderstands an instruction. A tool has broader permissions than expected. An agent retries after failure. A monitoring system summarizes away the anomaly. A human reviewer receives too many escalations. Another automated system interprets the retries as demand. The changed environment produces new inputs that make the original assumption look more plausible.

No step needs to be absurd.

Propagation is enough.

This changes the unit of safety.

A model can score well on a benchmark and still sit inside a dangerous loop. A tool can behave exactly as documented and still amplify a mistake. A human reviewer can make reasonable local decisions and still become part of a system that is globally unstable.

The important question is no longer only, “How often is this component wrong?”

It is, “What can happen after it is wrong once?”

That question reveals why rate matters as much as error rate.

A person who applies a mistaken rule may make several bad decisions before someone notices. An automated process can apply the same rule across a population before the first complaint is opened. A refund of one hundred dollars sounds bounded until the system can issue one million refunds. A deletion limited to one file per action sounds narrow until the action loops. A ranking change affects one item at a time and still reshapes a marketplace.

The blast radius is consequence multiplied by repetition.

Autonomy budgets therefore need a second dimension: velocity.

How many dollars can move before a checkpoint? How many accounts can change? How many messages can leave the system? How many machines can be isolated? How much data can be exported? How many times can the system retry before a different layer notices?

Rate limits are not merely defenses against malicious abuse. They are limits on how quickly misunderstanding can become history.

Knight Capital’s failure is memorable partly because speed compressed the interval between local defect and institutional crisis. AI systems will do the same in less obvious domains. A flawed support policy can reach every customer. A model update can change how thousands of agents interpret a permission. A vulnerability assessment can cause many organizations to apply the same bad remediation. A procurement agent can repeat a mistaken preference across every purchase it touches.

The common theme is not finance.

It is authority operating faster than correction.

The August 2003 North American blackout gives the problem another shape. An electrical grid is full of sensing, automation, procedures, operators, and protective systems. Yet a sequence of technical and organizational failures allowed trouble to spread across a large interconnected network. The official investigation emphasized failures of situational awareness and reliability practices as well as physical events.

The lesson for AI is not that grids resemble language models.

It is that interconnection changes what counts as local.

A component can protect itself and harm the network. A utility can make a locally reasonable response that shifts stress elsewhere. A routing system can improve one company’s travel times and congest a shared road. A risk model can reduce one bank’s exposure while many banks doing the same thing tighten credit across an economy.

System boundaries are administrative lines drawn over interacting reality.

If the risk crosses the line, safety has to cross it too.

This is why AI systems need dependency maps that include cognition itself.

Which workflows depend on which model family? Which model API? Which retrieval store? Which cloud region? Which identity provider? Which external data source? Which agent framework? Which human specialist queue?

Two products can look independent to users and share nearly every important dependency underneath.

A single outage then becomes a broad outage.

Worse, a single plausible error can become a broad error.

Availability failures are visible. The screen goes dark. Requests time out. Operators know something is wrong.

Integrity failures can be quieter.

The system is available. It answers quickly. The language is fluent. The tools execute. The underlying judgment has shifted in a bad direction.

AI therefore requires integrity resilience, not only uptime resilience.

Can the organization detect that a system is functioning but no longer deserves its previous authority? Can it compare behavior with a baseline? Can critical tasks move to another method? Can permissions narrow while diagnosis proceeds? Can the organization fall back to a smaller model, a rule-based system, a human process, or a read-only mode?

A backup that produces the same mistake is not a backup.

This is where homogeneity becomes a systemic risk.

A thousand agents can appear diverse because they belong to different companies, departments, or users. If they rely on the same model, retrieve from the same source, use the same benchmark, and update at the same time, they may share the same blind spot.

Diversity of accounts is not diversity of failure modes.

The financial system learned versions of this lesson long before AI. Many participants following similar strategies can turn a sensible individual action into a dangerous collective action. The 2010 Flash Crash should not be reduced to a story in which “robots panicked”; the specific market structure and sequence mattered. But fast interacting systems can produce collective behavior that no single participant intended.

Agentic systems will create new interaction domains with the same property.

Procurement agents will negotiate with supplier agents. Pricing agents will react to competitors whose prices are also automated. Recruiting agents will screen applications optimized by application agents. Security agents will probe, block, isolate, and retry against other automated defenders. Personal assistants will schedule against other assistants.

The environment becomes populated by policies adapting to policies.

A system evaluated mostly against human behavior may enter production among machines and discover a different ecology.

The safety question then moves from individual model quality to interaction dynamics.

Do the agents converge? Do they oscillate? Does one defensive policy trigger another? Do they learn to exploit predictable safeguards? Does a shared model error synchronize them? Does an update alter the equilibrium even though every component’s local evaluation improved?

This is why staggered change matters.

Software culture often rewards rapid global deployment because consistency is convenient. But simultaneous change creates simultaneous exposure. A staged rollout lets reality answer on a smaller surface. A canary population can reveal behavior before everyone receives it. Shadow operation can compare a new model with the old one before the new one gets authority.

A model update should not be treated as cosmetic merely because its API stayed the same.

It can change wording, tool selection, refusal behavior, coding style, risk tolerance, interpretation of prompts, and sensitivity to context. Average scores can improve while rare behaviors shift.

Critical deployments should know when the underlying cognition changes.

They should also be able to wait.

Delay is underrated as a safety mechanism because latency is usually framed as a defect. Yet some systems become safer when consequence moves more slowly than inference.

A payment can sit in a reversible hold. A mass message can go first to a small cohort. A software change can spend time in canary deployment. A destructive action can require a short window in which another system can object. An expensive physical command can be simulated before execution.

Time creates room for disagreement.

Of course not every domain can afford it. Emergency braking cannot wait for a committee. Network defense may need to isolate a host immediately. Some failures become worse if action is delayed.

The design problem is to match the clock to the consequence.

Fast loops need fast independent constraints.

That word independent matters.

A kill switch that depends on the same model infrastructure that is failing is not a kill switch. A credential revocation that requires cooperation from the agent being stopped is not independent. An alert reviewed by the same system that generated the action may confirm the same mistake.

The breaker should be simpler than the system it stops.

Electrical systems isolate faults. Markets halt trading. Networks rate-limit. Factories stop lines. The implementations differ; the logic is shared. Sometimes the safest local action is to sacrifice continuity in order to prevent propagation.

AI needs circuit breakers at several scales.

An action can have a limit. An agent can have a cumulative budget. A model version can be paused. A credential can be revoked. A workflow can shift into a conservative mode. A provider can be removed from a critical path. Cross-system anomaly detection can recognize when many nominally separate agents begin behaving similarly.

The hardest moment is often deciding to use the breaker before the cause is fully understood.

Organizations resist interruption because interruption is expensive. A false alarm wastes time. A trading halt blocks legitimate activity. A factory stop reduces output. A deployment pause delays a feature.

That creates a cultural problem as much as a technical one.

If every unnecessary stop is treated as failure, people learn to wait for certainty.

In fast systems, certainty arrives late.

Robust organizations tolerate some false interruption because they understand that the ability to stop early is part of the safety margin. They measure whether thresholds are calibrated rather than celebrating uninterrupted operation as evidence that the system is healthy.

Near misses are especially valuable here.

A permission blocked an attempted action. Two models disagreed sharply. A user overrode a recommendation that later proved wrong. A retry loop approached a rate limit. A deployment was rolled back after a strange canary result. A specialist recognized that an alert looked different from the usual false positives.

None of these events may deserve a public incident report.

Together they reveal the pathways through which a larger failure could travel.

AI can make near misses easier to find because logs are abundant. It can cluster unusual sequences, compare incidents, identify recurring tool patterns, and summarize overrides.

But abundance of logs is not institutional memory.

Someone must review the signal. Someone must be allowed to change the system because of it. Someone must preserve why a guardrail exists after the people who remember the original event leave.

Otherwise success eats safety.

The canary starts to look wasteful. The second provider seems expensive. The manual drill feels theatrical. The cumulative limit constrains growth. The human fallback team appears underused.

A new generation inherits the friction without the memory.

Then optimization removes it.

This is how margins become mysteries.

Failure cascades therefore connect directly to institutional memory. The organization has to preserve not only what happened but why particular breakpoints were built afterward.

A guardrail without a remembered reason is vulnerable to the next efficiency review.

Cascades also punish badly designed escalation.

Many AI systems are described as safe because uncertain cases go to humans. This works while uncertainty arrives independently.

A shared shock changes the arithmetic.

A model update creates ambiguity across thousands of cases. An upstream data source disappears. A new regulation creates novel questions. An attack changes the input distribution. Suddenly every exception reaches the human queue together.

The fallback becomes the bottleneck.

Reviewers hurry exactly when scrutiny matters most. Cases time out. Managers waive controls. The organization discovers that “human in the loop” meant “human available under ordinary load.”

Fallback capacity has to be designed for correlated exceptions.

That does not mean staffing every queue for catastrophe. It means deciding what degrades when capacity disappears.

A hospital changes protocols during mass casualty events. A website may disable expensive features during overload. A financial institution can reduce position limits. An AI service can defer low-priority work, narrow the actions an agent may take, or switch to a more conservative policy.

Graceful degradation is precommitted scarcity management.

During a crisis, everyone believes their task is critical. The useful decisions are the ones made before the queue catches fire.

Recovery needs the same preparation.

Prevention receives most of the attention because it is psychologically satisfying. Build the perfect system and the incident never occurs.

Complex systems do not offer that bargain.

When prevention fails, the first hour has its own architecture. What can be rolled back? Which data can be restored? Which actions are irreversible? Who identifies affected users? Who has authority to contain the event? Who communicates externally? Which experts are protected from constant status requests so they can diagnose the problem?

Incident command structures exist partly to allocate scarce attention under uncertainty.

AI can help maintain timelines, summarize logs, draft updates, correlate evidence, and coordinate tasks. It can also generate a persuasive explanation before the evidence supports one.

Crisis creates hunger for narrative.

A mature incident system separates verified facts from hypotheses. It can act under uncertainty without pretending uncertainty has disappeared.

This matters because organizations like root causes.

“The bug caused it.”

“The model hallucinated.”

“The operator made a mistake.”

“The prompt was wrong.”

A single cause promises closure. Fix the cause and move on.

Cascades are usually less polite.

A bad deployment mattered because the deployment reached too much. A mistaken model output mattered because the agent had broad authority. The authority mattered because monitoring failed. Monitoring failed because the summary suppressed detail. The alert mattered less because the human queue was overloaded. Recovery took longer because records were split across vendors.

Remove one condition and the incident may not repeat in exactly the same form.

The architecture can remain vulnerable.

Postmortems should therefore ask a different question.

Not only, “What failed?”

“What allowed the failure to propagate?”

Why could one model affect so many accounts? Why did one deployment reach every environment at once? Why did every verifier share the same source? Why did retries increase the load? Why was there no narrow safe state? Why was the stop authority ambiguous? Why did the institution discover the problem from consequence rather than from telemetry?

Propagation turns accidents into design knowledge.

It also crosses company boundaries.

One firm may supply the model. Another provides the agent framework. Another hosts the cloud. Another owns the data. The deploying organization defines the workflow. An identity service controls credentials. An outside vendor receives the action.

When the cascade arrives, each actor can truthfully point to the layer it did not control.

Distributed causation can become distributed irresponsibility.

Cross-layer incident evidence is therefore part of resilience. Investigators need to know which model version ran, which tool call occurred, which policy allowed it, which upstream service returned data, which retry rule amplified the event, and which human or system saw the alert.

This is unglamorous interoperability work.

It may be among the most important standards work in agentic systems.

The quality of an AI institution will not be measured by whether it eliminates failure.

Every technological system eventually reveals conditions its designers did not anticipate.

The more meaningful measure is whether a local mistake stays local, whether the system reveals that it is in trouble, whether authority can contract faster than harm spreads, whether recovery is possible, and whether the institution becomes harder to fool in the same way twice.

Intelligence should make a system easier to stop before it makes the system faster to run.

The robust future is not one in which every agent is right.

It is one in which one agent can be wrong without recruiting the whole environment into the mistake.