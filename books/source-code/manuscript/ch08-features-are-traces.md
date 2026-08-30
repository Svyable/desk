# Features Are Traces, Not Folders

A common onboarding question is, “Where is the code for subscriptions?”

In a mature system, the correct answer is usually: everywhere that matters.

Subscriptions may have a billing adapter, an entitlement table, a webhook consumer, a settings page, a checkout flow, a cancellation job, a tax calculation, a permission gate, an analytics event, an email sequence, a ledger entry, and a support override. There may be one folder called `subscriptions`, but the folder is unlikely to contain the whole feature in any useful behavioral sense.

No directory is the feature.

The feature is the trace through the system.

This sounds obvious once stated, yet a great deal of code intelligence still assumes that understanding software means locating the right files. Semantic search retrieves a cluster of likely files. An IDE suggests a package. A developer points to the service “that owns” the functionality. These are useful starting points, but they confuse organizational ownership with behavioral completeness.

The difference becomes obvious when someone asks a question slightly more demanding than “where is the main implementation?”

What happens when a customer pauses a subscription?

Now “subscriptions” is too broad and the service folder is too narrow.

Begin from what the user can observe. There is probably a pause control, a visible status, perhaps a date on which service resumes, perhaps an explanation of billing consequences. Those observations give you vocabulary: pause, resume, suspended, paused-until, renewal, entitlement, invoice, billing cycle.

Search broadly. Do not open everything yet. First classify the results.

There may be a settings component and a client hook. There may be an API route and a request schema. There may be a domain service that calculates the transition. A migration may have added a `paused_until` field. A scheduled job may resume expired pauses. A provider webhook may overwrite local status. An entitlement service may disable some capabilities during pause but preserve others. Tests may describe what happens to already-issued invoices. An email template may reveal language the rest of the code never uses.

Before reading deeply, the agent has already learned something important: pause is distributed.

Now the large model can ask the questions that define the contract.

What exactly changes at pause time? Does the external billing provider pause, or does the company keep billing state unchanged and only alter internal entitlement? Are existing invoices collectible? Is the next renewal date moved? What wakes the subscription back up? Is resume idempotent? What happens when the provider sends a late webhook describing an earlier state? Can support override the pause? Does the UI derive its status from the same source that enforcement uses?

Those questions are the feature.

The files are evidence for answering them.

This reversal matters because it changes how AI systems should represent software knowledge. The natural temptation is to build summaries of modules: this file does X, this service owns Y, this package is responsible for Z. Module summaries can help with orientation. They decay badly as a model of product behavior because features cut across them.

A stronger representation is question-shaped.

For a feature, the system should be able to reconstruct entry points, state, transitions, guards, side effects, observability, tests, failure handling, compatibility paths, and unknowns.

Not as a form to be filled out mechanically, but as the recurring dimensions along which product behavior becomes real.

Entry points answer how the behavior can begin. A pause might be initiated by a customer, an administrator, an API client, a support agent, an automated risk process, or a provider webhook. If the agent finds only the customer endpoint, it does not yet know the feature.

State answers how the behavior persists. One field may appear authoritative until a second table, provider status, or feature flag enters the picture. Some state is durable, some cached, some derived, some carried in tokens, some reconstructed from events.

Transitions answer how the state changes. Pause, resume, cancel, renew, fail, retry, expire. Mature features are usually state machines even when nobody wrote them as one.

Guards answer who and what is allowed to trigger the transitions. Permissions, plans, flags, validation, account state, geography, provider capability, limits, regulatory conditions.

Side effects answer what else happens. Charges, refunds, messages, jobs, emails, analytics, audit records, cache invalidation, index updates, external calls.

Observability answers how the system tells operators what happened. Logs, traces, metrics, audit events, status fields, support views.

Tests answer which portions of the contract someone considered important enough to make executable.

Failure handling answers what happens when the middle of the transition fails.

Compatibility answers what old clients, old rows, old providers, old names, and old promises are still alive.

Unknowns answer where the repository stops proving reality.

A feature description that lacks these dimensions may still be useful documentation. It is not yet a behavioral model.

Consider “delete account.” The product surface makes it sound singular. Press delete. Confirm. Account goes away.

The trace may include authentication, legal retention, billing cancellation, data-export eligibility, email suppression, object storage, search indexes, analytics identity, support records, audit logs, API keys, sessions, team ownership transfer, background jobs, and third-party processors. Some data must disappear. Some must remain. Some must become inaccessible but preserved. Some deletion happens immediately. Some is scheduled. Some can be reversed during a grace period. Some cannot.

Asking “where is account deletion implemented?” hides the real work.

Asking “what trace turns an active account into a legally and operationally deleted one?” reveals it.

That question invites search by transition rather than by folder.

Find the initial entry points. Find the state that marks deletion requested. Find every reader of that state. Find jobs scheduled by the transition. Find services that delete or anonymize user-associated data. Find cancellation logic. Find session revocation. Find retention exclusions. Find audit behavior. Find tests around restore, legal hold, and retry. Find what happens if one cleanup step fails after another succeeds.

The agent is reconstructing an execution story.

That story is especially important before feature changes because new functionality almost always collides with old traces.

Suppose the company wants to add “pause account deletion for seven days.” A design written from the ticket might introduce a new status and a resume button. A design written from the trace notices that some downstream cleanup currently begins immediately and is irreversible. The feature cannot be implemented safely by changing only the visible state. The new seven-day period must move or gate the irreversible work.

Search discovers that constraint before the patch creates a paradoxical product: an account that the UI says can be restored even though some of its data has already been destroyed.

This is one of the deepest connections between bug work and feature work.

A bug asks which real trace produced an outcome we did not want.

A feature asks which real traces must change to produce an outcome we do want.

Both require the same repository cognition.

The product organization often separates these activities. Bugs go to incident response or engineering. Features go to planning and design. The source does not respect the distinction. In both cases, correctness depends on identifying actual paths through actual state.

This is why an agent capable of strong bug diagnosis but weak feature tracing is incomplete. It may be good at following symptoms backward but poor at following proposed changes forward.

For feature work, the analyst should ask counterfactual questions.

If we add this state, who will ignore it?

If we remove this flag, which path still assumes the old default?

If we change this field, which serialized client contract changes with it?

If we make this operation asynchronous, which caller assumes immediate visibility?

If we make this action retryable, which side effects are not idempotent?

If we add a permission guard here, which alternate entry point remains unguarded?

If we rename this concept, which old vocabulary remains in provider adapters or analytics?

These questions turn a feature request into a search program.

Small models can run that program cheaply. One enumerates state writers. Another follows events. Another checks client contracts. Another searches tests. Another finds old names. Another inspects admin tooling. The large model collects the evidence and constructs the feature trace.

The result can be compact enough to be useful in planning.

Imagine a dossier that says the pause-subscription feature has four entry points: customer settings, enterprise admin API, support console, and provider webhook reconciliation. Local state is represented by `paused_until` and a provider status; entitlement reads local state, while billing reconciliation can overwrite it from the provider. Customer and admin paths call the same domain service; support writes directly. Resume occurs synchronously for manual action and asynchronously at expiry. Existing invoices remain collectible. A late provider webhook can reopen a locally paused subscription unless an override marker is present. Tests cover customer pause and timed resume but not support override plus late webhook.

That paragraph is more useful than a hundred-file dump because it predicts where change is dangerous.

It also tells the agent what it still does not know.

A good feature trace preserves uncertainty. Maybe the repository cannot prove whether a provider sends a particular webhook after a pause. Maybe production flag configuration lives elsewhere. Maybe an external data-retention contract determines deletion timing. The dossier should state the edge rather than fill it with a plausible guess.

This is another advantage of regenerating feature knowledge from source rather than treating documentation as a monument.

Traditional documentation ages because it is expensive to maintain. A feature page is written during launch, perhaps revised once, then becomes progressively more aspirational. New paths arrive. Flags become permanent. Old clients remain. Support gets an override. A migration introduces a compatibility field. The document continues describing the clean version.

A source-grounded dossier can be regenerated for the question being asked.

That does not make durable documentation obsolete. Some knowledge does not live in code: why a tradeoff was accepted, what the business promises contractually, which behavior is temporary, which external rule governs a decision, what the team intends to remove. Human context remains valuable.

The point is to stop making static prose carry the entire burden of describing executable behavior.

Keep the durable human context. Reconstruct the changing mechanical truth.

This changes onboarding as well.

A new engineer should not have to memorize the whole architecture before becoming useful. They can begin with a feature question and let the source reveal the relevant cross-section. How does inviting a user work? What controls export access? What happens when a payment fails? How does a project become archived? Each question produces a trace through several layers, and repeated traces gradually build a richer mental model of the system.

The architecture is learned through behavior rather than recited before behavior.

Agents make this practical because the cost of reconstructing a trace can become low enough to do repeatedly.

That is the larger shift.

In the old world, teams wrote architecture maps partly because reconstructing behavior from source was expensive. The map was a compressed artifact meant to save future reading. In the agentic world, some maps can become ephemeral. The system can produce the relevant map for the question, from current evidence, then discard or refresh it when the repository changes.

The unit of comprehension becomes less “the repository” and more “the behavior I need to reason about now.”

That is a healthier unit because software is too large to be held whole and too dynamic to be summarized once.

A feature is not a folder waiting to be opened.

It is a trace waiting to be reconstructed.