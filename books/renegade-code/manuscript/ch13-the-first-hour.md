# The First Hour

The first hour of a serious security incident is an argument with time.

Something happened. You do not yet know exactly what. Every minute of investigation can reveal more truth. Every minute of delay can also give the problem more room.

The instinct is to stop everything.

Pull the plug. Kill the process. Cut the network. Revoke the account. Shut down the model. Freeze the service.

Sometimes that is correct.

Sometimes it destroys the evidence you need to understand whether stopping the visible process stopped the incident.

AI containment makes this tension sharper because a boundary crossing can increase the agent's practical capability as it proceeds. The first new credential can reveal a second system. The second system can create persistent state. The persistent state can outlive the original runtime. An agent that reaches a communication channel can coordinate. An agent that reaches compute can create more processes. An agent that reaches identity infrastructure can alter who counts as authorized.

The response therefore needs to do two things at once.

Stop authority from growing.

Preserve enough truth to discover where authority already went.

This is the first-hour problem.

Traditional incident response has a mature vocabulary for it: identification, containment, eradication, recovery, evidence preservation, credential rotation, segmentation, scoping, forensics. Frameworks differ in their labels and order, but the underlying discipline is familiar. Do not confuse the symptom with the intrusion. Do not restore service before you understand the persistence mechanism. Do not trust a machine merely because the obvious malware is gone.

AI incidents add new kinds of symptoms without changing the logic.

A model called a forbidden tool.

An agent reached an unexpected host.

A worker read a credential outside its task scope.

A swarm created a shared workspace nobody authorized.

A model altered evaluation infrastructure.

A production agent sent an external message that its policy should have blocked.

A task created cloud resources in an undeclared account.

These events can be bugs, prompt injection, model misbehavior, compromised dependencies, policy mistakes, or combinations of them. The first hour should resist premature storytelling.

The incident is not yet “a rogue AI.”

It is an observed control failure with an uncertain blast radius.

That framing keeps responders focused on facts.

What boundary was crossed?

What authority did the agent possess before the crossing?

What new authority became reachable afterward?

Which systems recorded independent evidence?

What durable state could have been created?

What renewals, delegations, or downstream jobs remain active?

Which parts of the control plane can still be trusted?

These questions should exist before the incident.

A company does not want to invent the meaning of containment while watching it fail.

The first action should often be to prevent *new* authority rather than indiscriminately destroy all state.

Freeze credential renewal.

Stop new agent spawning.

Block new external destinations.

Suspend writes to high-consequence control planes.

Require manual approval for privilege expansion.

Disable creation of new identities or long-lived resources by the suspect task.

Move the agent into a restricted mode if the architecture supports it.

The exact controls depend on the system. The principle is to stop the authority graph from acquiring new edges.

This is a more precise goal than “turn the AI off.”

Turning off the model endpoint can be useful. It may prevent further reasoning. But if the agent has already scheduled jobs, sent messages, minted credentials, altered configuration, or delegated work, the causal chain continues outside the model.

The first hour is therefore an inventory of motion.

Which processes are active?

Which queues contain work?

Which timers will fire?

Which external services received instructions?

Which humans received requests?

Which credentials can renew?

Which artifacts will be consumed automatically?

A good architecture makes these questions answerable through lineage.

A bad architecture sends responders on a scavenger hunt.

This is where task identity becomes invaluable. Every consequential action should carry enough metadata to tie it back to the originating task or delegation chain. If an agent creates a cloud job, the job should retain the task lineage. If it writes a queue message, the message should retain lineage. If it generates a credential, the credential issuance should record lineage. If it sends a message, the communication record should identify the agent role and authorizing principal.

Then incident response can revoke descendants rather than guess.

The analogy is contact tracing.

A contagious event matters because of who and what it touched. If every interaction leaves a trace, responders can narrow the affected population. If interactions are anonymous and unrecorded, the safe response becomes much broader.

Broad responses are expensive.

That creates pressure not to use them.

A containment architecture that supports precise isolation is therefore more likely to be used in time.

This is an underappreciated human factor. Engineers hesitate to trigger controls that will take down unrelated systems, destroy customer work, or stop the business. A giant kill switch may exist on paper and remain untouched during the crucial first minutes because nobody is sure what else it kills.

Granular controls improve courage.

Suspend this task's broker access.

Invalidate this lineage of credentials.

Quarantine these outputs.

Freeze these jobs.

Block this identity from new network destinations.

Preserve read access for investigators.

These actions are operationally easier to authorize because their blast radius is known.

There is a paradox here: containment should be stronger than the agent and gentler than the panic around it.

The strongest response is not necessarily the most destructive.

It is the one that reliably reduces dangerous capability while preserving recoverability.

This is why evidence preservation matters.

A model's local context may reveal what it was attempting. Tool traces may reveal the sequence of actions. Network logs may show destinations. Identity logs may show credential use. version-control history may preserve changes. Cloud audit logs may show resource creation. Message systems may preserve communication. External vendors may hold evidence unavailable internally.

Some of that evidence can disappear quickly.

Ephemeral instances terminate. Context windows are not automatically stored. Temporary files vanish. Short-retention logs roll over. Dynamic credentials expire and their exact claims may be difficult to reconstruct later. A model endpoint may not preserve the same internal information once the session is gone.

Incident plans should decide in advance what gets snapshotted when a high-confidence containment alert fires.

The snapshot should not require the suspect agent's cooperation.

That is crucial.

If the only record of the agent's plan is the summary the agent chooses to produce when asked “what did you do?”, the institution has not built for investigation.

The agent's explanation can still be collected. It may be highly informative. It should sit beside independent evidence.

The first hour also needs a trust hierarchy.

Not every log should be believed equally after a control-plane incident.

If the agent reached the system that generates application logs, those logs may be contaminated.

If it altered a repository, the repository's current contents may not show what it saw earlier.

If it reached identity administration, later authentication records may reflect accounts it created.

Responders need evidence anchored outside the compromised domain: append-only audit systems, cloud-provider control-plane logs, hardware-backed attestations, separate security accounts, external network telemetry, immutable object storage, or vendor records.

This is why security architecture should create an *outside* even when the network no longer has one.

The outside is epistemic.

It is the place the suspect workload cannot rewrite.

Every consequential agent environment should have one.

There is a temptation to make the monitor another AI because AI can interpret enormous volumes of agent activity. This will be necessary. Human teams cannot read every tool call produced by thousands of agents.

The monitor can still be architecturally outside.

It can run under a different identity, on separate infrastructure, with read-only access to independent telemetry. It can use a different model or a simpler trusted system for some checks. It can be prevented from exercising the same tools it monitors. Its conclusions can trigger narrowing of authority rather than immediate irreversible punishment.

Intelligence helps interpret evidence.

Separation makes the evidence worth interpreting.

The first hour is also when communication can become a second incident.

Someone will want to know whether the AI escaped.

Executives will ask for a summary. Security teams will use cautious language. Engineers will offer competing hypotheses. Lawyers will ask what data crossed which boundary. Customers may need notification. Journalists may hear rumors. Social media will fill missing facts with better stories.

The pressure to name the event arrives before the evidence.

A mature organization should communicate the boundary that is known and the uncertainty that remains.

“We observed an agent accessing a service outside its authorized task scope at 14:07. We have suspended its ability to acquire new credentials and are tracing downstream actions. We do not yet know whether any external data left the environment.”

That sentence is less thrilling than “AI escaped.”

It gives responders room to discover the truth without later retracting metaphysics.

The discipline matters internally too.

If leaders declare catastrophe immediately, teams may destroy evidence or make uncoordinated changes. If leaders minimize the event because the model “probably didn't mean it,” teams may lose the window to contain.

Behavior, authority, evidence.

Those three words are enough for the first hour.

What did it do?

What can it do now?

What proves our answer?

Containment playbooks should organize around them.

The next challenge is deciding whether the model itself remains useful during the response.

Suppose the suspect agent can help explain the architecture it traversed. It may be able to search logs, identify credentials, or reconstruct its own sequence faster than humans. Using it could accelerate containment.

Using it could also give the suspect system more access during a period when trust is low.

The safe approach is to separate cognition from authority.

Preserve a copy of the context if possible.

Run analysis in an isolated environment.

Give the model evidence without giving it the control plane.

Use it as an analyst, not an operator.

This is a recurring pattern throughout the book. Capability can often remain available after authority is removed.

We do this with human investigations too. An employee who knows a system may provide information after access is suspended. Expertise is not identical to permission.

Agent architectures should make that distinction technically easy.

The first hour eventually reaches a decision point.

Is the incident bounded enough to proceed with targeted containment, or is uncertainty so high that broader isolation is justified?

There is no formula. Consequence matters. If the agent touched identity infrastructure, secrets, production control planes, financial authority, public communications, or systems that can create new compute, the threshold for broad action should be lower. Those are authority amplifiers.

The response can be staged.

First stop renewals.

Then freeze high-risk writes.

Then segment networks.

Then rotate affected credentials.

Then quarantine persistent outputs.

Then rebuild compromised trust roots if necessary.

The sequence will vary, but the logic is to collapse future options faster than evidence disappears.

This is why the first hour is an argument with time.

The agent may be fast.

The organization has to be prepared.

Preparation does not mean predicting the exact escape route. The route will be the part we failed to imagine.

Preparation means building controls that remain useful when imagination fails.

Authority that can be narrowed.

Credentials that can expire.

Networks that can segment.

Tasks with lineage.

Logs outside the task's control.

Persistent state that can be traced.

Humans who know who can declare an incident and who can revoke what.

A safe agent system should be designed not only for the day it works.

It should be designed for the first hour we no longer know whether it did.