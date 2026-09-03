# Chapter 7 — The Log

The machine remembers before anyone asks it to.

A request reaches a service at 14:03:17. A model version is selected. A policy check runs. A tool call begins. The tool returns an error. The system retries. The answer arrives. Somewhere, several of those events become records.

No user requested a diary. The system created one because complex machines are difficult to operate without memory.

Logs are among the least glamorous artifacts in computing. They are lines of text, structured records, timestamps, identifiers, counters and error messages written so that somebody can understand a system after the moment has passed. They accumulate in places users rarely see and engineers frequently search only when something has gone wrong.

Artificial intelligence is turning this ordinary operational residue into a central governance problem.

The reason is straightforward. A conventional program can often be understood from code and input. An AI system may depend on a model whose internal behavior is statistical, a changing prompt, retrieved documents, tool responses, policy filters, external state and sampling. An agent can choose different paths on similar tasks. A provider can update a model without changing the application code that calls it. When a harmful or expensive action occurs, asking “What code ran?” may not be enough.

You need the trace.

The word trace is useful because a log line by itself often explains little. Modern distributed systems spread one user action across many services. A request enters an application, which calls an authentication service, a model gateway, a vector database, a model endpoint, a search API and a payment system. Each component may produce its own records. Observability systems connect logs with metrics and traces so operators can follow one transaction through the chain.

OpenTelemetry, now widely used as an open standard for telemetry, formalizes this relationship. Traces describe the path of a request through distributed work. Metrics summarize system behavior. Logs provide event detail. Correlation identifiers let engineers connect them.

AI agents make correlation even more important because the “request” can become a small story.

A coding agent receives an issue. It inspects a repository, edits a file, runs tests, reads a failure, edits another file, launches a security scan and opens a pull request. A useful trace can show which model version chose each action, what tools were available, which tool calls succeeded, which failed, what files changed and which checks ran before the result was presented.

Without that trace, a pull request is an artifact without ancestry.

This is why logs have begun to migrate from debugging into accountability. The European Union's AI Act requires certain high-risk AI systems to support automatic event logging over their lifetime and requires providers, in covered circumstances, to keep automatically generated logs for a minimum period. The goal is traceability, post-market monitoring and the ability to identify risky operation.

The law is making explicit what operators already know: a system that cannot remember enough about its own behavior is difficult to govern after the fact.

But the obvious solution—log everything—creates a second problem.

The record can be more sensitive than the action.

A user may type private information into a prompt. An agent may retrieve confidential documents. A tool response can contain account identifiers. A debugging record can capture URLs with embedded secrets. A model trace can include fragments of proprietary code. A safety system may record content precisely because it was disturbing or illegal. Authentication logs reveal which systems a person or agent accessed and when.

Operational memory concentrates context.

Attackers know this. Logs and analytics platforms can become attractive targets because they aggregate information from many services. A company that would never intentionally place all customer data in one database can accidentally approximate one through telemetry.

This is the paradox of observability. To make a complex system less mysterious, you create another complex system that knows a great deal about it.

The problem is older than AI. Security teams have wrestled with log retention, access controls and sensitive fields for years. What changes with AI is the richness of the material that can pass through the trace. Natural-language inputs are not tidy identifiers. They can contain anything a person can type. Agent tool calls can touch anything the agent is authorized to touch.

A log schema designed for HTTP status codes can become a shadow archive of human activity.

The first design discipline is therefore minimization.

A system should record what it needs to operate, secure and govern itself, not whatever is easiest to dump. This is harder than it sounds because engineers cannot always predict which fields will matter during an incident. The temptation is to preserve raw input “just in case.” Raw data is maximally flexible for future debugging and maximally expensive for privacy.

Structured events force a decision.

Instead of storing an entire prompt, perhaps the system records a request identifier, model version, input length, policy outcome, latency and a cryptographic hash. That may be enough to investigate performance and correlate an incident without preserving content. In another context, content may be essential because the task is to evaluate whether the model responded appropriately to a particular input. The correct boundary depends on purpose.

Purpose is the word that keeps logging honest.

Why is this field being kept? Which failure or obligation does it help address? Who can access it? For how long? Can a lower-risk derivative replace the raw value? What happens if the system is compromised?

These questions turn telemetry from an engineering afterthought into information governance.

Retention adds another layer.

Logs are cheap to write and expensive to forget deliberately. Storage prices encourage accumulation. Engineers like having history when a problem appears months later. Security teams use longer retention to detect slow attacks and investigate incidents. Regulators may require records. Litigation holds can override deletion schedules. Product teams want data for evaluation and improvement.

Then privacy principles push the other direction. The European data-protection framework includes data minimization and storage limitation among its core principles. Keeping personal data forever because it might be useful later is not a neutral default.

Accountability wants memory. Privacy wants forgetting.

AI sharpens the conflict because the same trace can serve both.

Suppose an automated hiring system produces a decision a person challenges six months later. If the relevant model version, input features and decision records are gone, meaningful review may be impossible. If the company keeps every applicant's raw material and detailed trace indefinitely, it creates a large repository of sensitive personal information.

The policy problem is not choosing memory or deletion. It is designing enough durable evidence to support rights and operations while deleting unnecessary content on a schedule.

That suggests separating kinds of memory.

Some data can be ephemeral: raw intermediate material needed only to complete a task. Some can be operational: detailed traces kept for days or weeks to debug active systems. Some can be security-relevant: authentication and anomaly records retained longer. Some can be accountability records: compact evidence of consequential decisions preserved according to legal requirements. Some can be aggregate: statistics that remain useful after individual-level data is removed.

A single retention period for “AI logs” is usually a sign that nobody has done this thinking.

The same separation should apply to access.

A support engineer investigating latency does not need the same data as a fraud investigator. A model evaluator may need sample content but not customer identity. A compliance officer may need proof that a control ran, not every intermediate token. Role-based access and purpose-specific views reduce the number of people who can see the richest form of the wake.

This sounds like ordinary security because it is ordinary security. AI does not make basic disciplines obsolete. It makes their absence more expensive.

There is another challenge: logs can lie without being false.

A system records what developers decided to instrument. An event not logged appears not to have happened. A field named `success=true` may mean only that an API returned a 200 status, not that the user's real objective was achieved. A trace can show that an agent sent an email while failing to show that it sent the wrong attachment. Metrics can report low error rates while users experience a category of failure the system never classified.

Observability is a model of reality, not reality itself.

This matters in audits. The existence of logs can create false assurance. An organization says an AI system is traceable because records exist. The real question is whether those records can answer the important questions.

Who initiated the action? Under whose authority? Which model and policy versions were active? What data sources influenced the result? Which external tools were called? What changed in the world? Which safety controls ran? Did a human approve the irreversible step? Was the final state verified?

If the trace cannot answer these, volume is not accountability.

The best logging designs begin from investigations rather than fields. Imagine the incidents that matter and work backward to the minimum evidence required to reconstruct them.

A financial agent sends money to the wrong recipient. What must be known? The user instruction, parsed destination, approval, credential used, payment request, response and final transaction identifier.

A coding agent introduces a secret into a repository. What must be known? The files read, generation event, change, scan result, review path and commit identity.

A customer-support model reveals confidential information. What must be known? The request context, retrieval source, model version, policy check, output and access boundary that should have prevented retrieval.

These are different traces because the risks are different.

The temptation to standardize one giant “AI observability platform” should be resisted unless the platform supports that specificity.

There is also a quality problem at scale. More agents mean more events. More events mean more storage, indexing and analyst attention. If every model thought, tool observation and intermediate token becomes a log line, the telemetry system can cost a substantial fraction of the workload it observes.

The wake can become a second machine following the first.

Engineers already confront this in distributed systems. High-volume services use sampling, aggregation and tiered storage. They keep detailed traces for unusual requests and summaries for ordinary ones. They sample a fraction of successful traffic while retaining errors. They route security events differently from performance events.

AI systems can do the same, but sampling needs caution when rare harmful behavior matters. If a dangerous event occurs once in a million interactions, one-percent random sampling has a good chance of missing it. Risk-based instrumentation should capture categories of interest deterministically where possible and sample routine background activity.

This is another way designed residue differs from accidental residue. It has selection rules.

Logs are also becoming part of machine-to-machine trust.

When agents act for people or organizations, future systems may need receipts. An agent books a flight. Another system wants evidence that the booking happened under valid authority and within policy. A procurement agent selects a vendor. An auditor wants to know which constraints were applied. A security system grants temporary access. A later investigator needs to establish who delegated what to whom.

The trace becomes a chain of custody for automated action.

This has a cryptographic dimension. Ordinary logs can be altered by administrators or attackers. In high-stakes settings, systems may need tamper-evident records, signed events or append-only storage. The goal is not to put every chatbot message on a blockchain. It is to recognize that evidence is only useful if the people relying on it have reason to trust its integrity.

Provenance standards such as C2PA in media and SLSA in software approach adjacent problems: how to preserve information about where an artifact came from and how it was produced. Logs capture events. Provenance packages selected events into claims that can travel with an artifact.

The machine wake begins to acquire structure.

This structure may change how software is reviewed. Today a developer often sees a code diff and perhaps an automated note that an agent authored it. In the future, a high-value change could arrive with a concise machine-generated provenance record: which issue authorized the work, which agent version acted, which repository state it started from, which tests passed, which security scans ran, whether dependencies changed and whether a human approved release.

The goal is not maximal surveillance of the agent. It is a useful receipt.

Receipts are a helpful analogy because commerce has long separated the object from the record. You leave a store with groceries and a small document stating what was purchased, when and at what price. The receipt is not a video of every movement through the store. It is a structured summary designed for disputes, accounting and returns.

AI needs more receipts and fewer accidental archives.

A good machine receipt should be compact enough to retain, specific enough to verify and limited enough not to expose unnecessary content. It should identify authority, material actions, relevant versions and final state. The detailed trace can remain shorter-lived unless an incident requires preservation.

This layered approach also helps human comprehension.

Nobody wants to review ten thousand raw events every time an agent performs a task. The evidence system should compress routine operations into meaningful checkpoints while preserving the ability to drill down when needed.

Again, success needs a compression algorithm.

But this time the compression cannot erase accountability.

There is a cultural change hidden here. Software organizations historically treated logs as internal operational material. AI agents acting in consequential domains may turn some trace information into something users, regulators, customers and counterparties have legitimate claims to see.

If a person is denied an opportunity by an automated system, “our logs show it worked” is not enough. If a company lets an agent spend money, the finance department may expect records comparable to human purchase approvals. If an agent modifies production code, the security team may demand evidence of checks. The wake becomes part of due process.

That does not mean universal transparency. Logs can expose trade secrets, other users' data and security-sensitive details. Disclosure must be scoped. But the default assumption that machine records belong only to the machine operator becomes harder to sustain as machines exercise delegated power.

The EU AI Act's logging provisions are one sign of this transition. NIST's AI Risk Management Framework likewise emphasizes documentation, monitoring and incident information as components of trustworthy operation. Different jurisdictions and sectors will choose different obligations. The direction is clear: “the model said so” is not a durable governance model.

The log is where mystery goes to become evidence.

Or where evidence goes to become clutter.

The difference is design.

Record less, but record the right things. Separate raw content from durable receipts. Protect telemetry as sensitive infrastructure. Give fields explicit purposes. Build deletion into the system before storage becomes permanent by inertia. Capture rare risk events deliberately. Preserve enough provenance that consequential actions can be reconstructed. Test whether the logs answer real incident questions before assuming they do.

Then treat observability cost as part of the product cost.

A machine that needs a second data center merely to store its own footprints is not necessarily well observed. It may simply be loud.

The ideal trace is not the longest history. It is the smallest history that lets the truth survive the moment.
