# Models Trained on the Past

Every predictive model is a memory arranged to make a guess.

The memory may contain millions of transactions, images, medical records, clicks, weather observations, or examples of language. The mathematics can be elaborate and the interface can feel immediate. None of that changes the bargain underneath: patterns observed before are being asked to say something useful about a case that matters now.

Most of the time, this is not a defect. Prediction works because the future is not completely new. Diseases have mechanisms. Physical systems have continuity. Language has regularity. Organizations develop habits. People repeat themselves, sometimes despite heroic efforts not to. The past carries signal.

The trouble begins when a model keeps its shape while the problem around it changes.

Machine-learning practitioners divide this into several kinds of shift. The incoming population can change. The relationship between an input and an outcome can change. The way an outcome is measured can change. A new regime can appear that was barely represented in training. People can learn that a model exists and alter their behavior around it. The vocabulary matters technically, but the institutional problem is simpler: the model can continue executing perfectly after the reason for trusting its output has weakened.

That is freshness debt with a score attached.

Consider a credit-risk model. Its historical data contains more than borrowers. It also contains an economy: interest rates, employment patterns, underwriting rules, consumer habits, available products, reporting practices, and the particular population that applied for credit during that period. Validation can be excellent because the validation sample belongs to much the same world.

Then the world moves. A recession changes household cash flow. A policy changes incentives. A new kind of income becomes common. The applicant pool shifts. A proxy that once carried useful information begins carrying something else. The model has not forgotten how to calculate. Its relationship to the decision has aged.

This is why the serious work starts again after deployment.

In March 2026, NIST's Center for AI Standards and Innovation published a report devoted to the difficulty of monitoring deployed AI systems. The interesting part is not that NIST recommends monitoring; that is hardly a revelation. It is how unfinished the problem remains. The report identifies performance degradation and drift as practical barriers, but also fragmented logging, human-AI feedback loops, uncertain monitoring cadence, immature methods, and the difficulty of deciding what should be monitored in the first place. Pre-deployment evaluation happens in a controlled setting. Deployment introduces users, incentives, changing inputs, organizational workarounds, and consequences that the test set did not contain.

That distinction changes the usual picture of model risk. A model does not simply have an accuracy number that decays like milk in a refrigerator. Its environment can move along several axes at once, and some of those movements are caused by the system itself.

Suppose a predictive system marks certain cases or places as higher risk. An organization directs more scrutiny there. More observations are collected there. The resulting data contains more detected incidents from the places that received more attention. When the model is retrained, the new dataset appears to confirm the old allocation.

The map has helped produce the evidence that validates the map.

That mechanism has been studied in domains such as predictive policing, but it is not confined to policing. Fraud systems change which transactions receive investigation. Recommenders change what people see and therefore what they click. Hiring filters change who reaches an interview and therefore who can later appear in performance data. Content moderation changes what remains observable on a platform. Once a model participates in the process that generates its future training data, "use newer data" stops being a complete maintenance strategy.

Recent data may be more current and more endogenous at the same time.

This is the first correction to a naive theory of freshness: **newer is not the same as more independent.** Sometimes an older dataset preserves information from before an intervention. Sometimes that makes it useful; sometimes it makes it badly unrepresentative. Choosing between them requires causal judgment, not a timestamp sort.

The second correction concerns monitoring itself.

It is easy to write that a responsible organization should watch input distributions, track outcomes, test subgroup performance, recalibrate, retrain, roll back, and retire models. Those verbs fit nicely in a governance document. In production they belong to different people with different incentives. Data scientists may detect drift without authority to change the business process. A compliance team may require review before a model changes. Operations may depend on stable outputs. Product teams may fear a retraining that changes user experience. Legal teams may care about consistency with earlier decisions. A vendor may control the model while the customer sees only an API.

NIST's current AI Risk Management Framework playbook makes the same point in less literary language: deployed systems can shift in performance and trustworthiness over time, and monitoring is supposed to detect that drift. Yet NIST's 2026 monitoring report is explicit that validated methods and common practice are still nascent. The existence of a monitoring requirement does not mean an organization knows what signal should trigger intervention, how much evidence is enough, or who is allowed to pull the plug.

Freshness therefore has an owner, or it has a meeting.

Continuous learning is often proposed as the technical escape hatch. Let the model ingest new observations and adapt automatically. In some settings that is exactly the right architecture. A system facing rapid but measurable change may be better served by controlled online adaptation than by waiting six months for a retraining committee.

But adaptation creates its own clock. New observations can be noisy, strategically manipulated, or biased by earlier model decisions. A continuously changing model can become harder to reproduce after an incident. Fast adaptation can trade away stability. Poisoning attacks become an update problem rather than merely a training problem. A self-updating model still needs an answer to a stubbornly human set of questions: which observations count, how quickly should they matter, what change is large enough to justify action, and what happens when the update was a mistake?

The update problem has not disappeared. It has moved inside the machine.

Generative AI makes the temporal mismatch unusually easy to miss because its surface is always new. A language model can compose a sentence this second about evidence learned months or years ago. The grammar arrives in the present tense even when the knowledge does not.

A paper encyclopedia advertised its age. Its binding wore out; a new edition appeared with a year on the spine. A generative model produces a pristine new paragraph on every request. Novel wording can disguise old evidence.

Retrieval helps by letting a model consult external sources at the time of the request. This is a genuine improvement, not merely a patch. Durable knowledge can remain in the model while perishable claims are checked against fresher material. The architecture can support several clocks at once.

It also reveals that search was never the whole problem.

"Who wrote Hamlet?" and "Who runs this company?" do not have the same half-life. Neither does "What is the boiling point of water at sea level?" and "Is this flight delayed?" A system that retrieves everything pays latency and can introduce weak sources into questions that did not need them. A system that retrieves nothing answers fast-moving questions from memory. The useful capability is temporal judgment: recognizing which claims are perishable enough to require a fresh encounter with evidence.

And retrieval does not retrieve the present. It retrieves documents.

A company's old press release can remain highly ranked after a regulatory filing changes the situation. A page can be recently edited while describing an old event. A cached product listing can look live. A breaking post can be minutes old and wrong. An older official document can remain the governing authority. Publication date, event date, effective date, authority, revision history, and retrieval time are different fields because they answer different questions.

Freshness and trust are separate dimensions. So are freshness and relevance.

This matters because generative systems increasingly sit between a user and the source. The model may merge durable background knowledge, retrieved material of different ages, and its own inference into one fluent answer. Unless the system preserves enough provenance for the user to tell which claims came from where, a current source can lend an undeserved present-tense sheen to a stale conclusion.

The temptation is to solve this with more automation: let the model decide when to search, rank the sources, reconcile conflicts, monitor itself, and update its own memory. Some of that will work. The strongest counterargument to this chapter is that modern AI systems can become *more* current than human institutions precisely because machines can monitor large streams continuously, retrieve on demand, and update far faster than a committee or textbook. A model trained on the past need not be condemned to the past.

That counterargument is right as far as it goes.

The point is not that machine learning is uniquely stale. Humans carry ancient assumptions around with impressive portability. A well-designed model with live measurements can notice change before a manager does. Automated drift detection can expose a moving population that ordinary intuition misses. Retrieval can replace a confident memory with a current primary source in seconds.

The narrower claim is that speed of updating does not establish quality of contact with reality. A system can refresh quickly from a contaminated stream, optimize against a proxy whose meaning changed, or monitor a metric that no longer captures the consequence people care about. Faster revision is valuable only when the evidence entering the revision still deserves authority.

That is also why fairness problems can hide inside apparently stable aggregate performance. A model may remain accurate overall while deteriorating for a subgroup whose behavior, access, representation, or treatment changed. A national average can stay calm while a neighborhood moves underneath it. The same is true of proxies. ZIP code, device type, purchasing pattern, educational credential, job title, browser behavior, and language use do not have fixed meanings. A field can remain perfectly populated while the inference attached to it expires.

The input is current. The relationship is historical.

Humans make this error without software. We observe a fresh address, accent, job title, school, brand, or habit and attach an old story to it. Machine learning can industrialize the move. It can also make the relationship measurable enough to challenge, which is an advantage if the institution actually looks.

A deployed model therefore needs more than a launch score. It needs a falsification path. What would tell us that the relationship has weakened? Which outcomes arrive late enough to make monitoring deceptive? Which populations can move without showing up in the aggregate? What external event should force review even if the dashboard looks normal? How quickly can the model be disabled, and what takes over when it is?

It also needs an end-of-life plan. Organizations are remarkably good at adding models and much less enthusiastic about removing them. An old score remains because a downstream process expects the field. A new model runs beside it. Someone maintains a translation layer. Historical reports still depend on the old definition. Appeals refer to prior thresholds. Documentation separates from the thing it describes.

Freshness eventually becomes migration.

This is where Chapter 14's problem begins. A system can retire a model and still preserve its conclusions in databases, profiles, caches, features, and downstream decisions. The old inference may survive the mechanism that produced it. Updating the predictor is one problem; deciding what authority its old outputs should retain is another.

The deepest mistake is to imagine that intelligence frees a system from maintenance. Intelligence makes maintenance more consequential because more decisions can be made, at greater speed, from the relationships the system carries forward.

Reality remains outside the model. The engineering achievement is not to eliminate that distance. It is to keep building credible routes back across it.

Every model is trained on the past. The mature question is what evidence would make us stop trusting the past we chose.