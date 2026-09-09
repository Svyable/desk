# The Memory of Machines

A credit bureau can remember a missed payment more faithfully than the person who missed it.

That is useful. It is also why American law puts a clock on some kinds of memory.

The Fair Credit Reporting Act does not require a credit bureau to pretend an accurate delinquency never happened. In most ordinary cases, it does something more interesting: it limits how long negative information can continue to appear in a consumer report. The Consumer Financial Protection Bureau's current guidance says most negative information can generally be reported for seven years, while bankruptcies can remain for up to ten. The bureau may still keep the information in its files after the reporting period ends.

The archive and the decision therefore run on different clocks.

That distinction is a useful place to begin because machines do not merely remember more than we do. They make old information cheap to retrieve, cheap to copy, and easy to put back into circulation. A fact can remain historically true long after its relevance to a present decision has weakened. The hard problem is not storage. It is temporal authority: how much power should an old fact retain now?

Human memory is unreliable in ways that are usually described as defects. We forget names, blur dates, compress conversations and reconstruct events. Machines were built partly to escape those limits. Databases preserve fields. Logs preserve events. Version histories preserve changes. Sensors create records no person could retain. Backups keep a copy after the first copy disappears.

This is one of modern civilization's great achievements. Corruption investigations depend on records. Science depends on archives. Finance depends on ledgers. Medicine depends on history. Security depends on logs. Families keep photographs because lives matter.

But machines forget badly.

A human acquaintance may stop thinking of you as the person who made one embarrassing mistake ten years ago. A database can retrieve the mistake before it retrieves the decade. A worker can acquire new skills while a profile still ranks them by an old role. A neighborhood can change while a risk model keeps carrying historical structure forward. A child can grow up while adults have already created a searchable archive of the person the child used to be.

Nothing in those examples requires the old record to be false. Staleness is more troublesome than that. The record can be accurate and the inference drawn from it can still be wrong for today.

Storage used to impose friction. An old fact might be public in principle but difficult to find in practice: somebody had to know which courthouse, which newspaper archive, which filing cabinet, which clerk. Digital systems collapsed much of that retrieval cost. A local event can become globally searchable. A photograph can return in seconds. A decade-old article can sit one query away from the present.

Chronological distance and retrieval distance have separated.

That is why the credit-reporting rule is conceptually richer than a simple right to deletion. The system can preserve history while limiting one channel through which history acts. The record survives; its permission to influence a particular class of decisions changes with time.

We already use versions of this idea elsewhere. Courts preserve files while some legal consequences expire. Medical records can preserve a past condition while marking it resolved. A newspaper archive can keep an article without requiring every later system to treat the article as a current assessment. The point is not that seven years is a universal moral constant. It plainly is not. The Fair Credit Reporting Act itself contains exceptions, and different kinds of records carry different obligations. The useful principle is narrower: preservation and present-tense decision weight do not have to be the same thing.

Personalization systems make the problem harder because they do not simply retrieve records. They learn from them.

Watch a video, buy a product, search a topic, visit a place, skip a song, follow an account. The service builds a profile. When the past predicts the present, this feels like convenience. When the user changes, memory becomes inertia.

A recommender can make taste look more stable than it is. It serves what it already believes the person likes; the person engages with what is available; the engagement becomes new evidence for the old belief. The machine's memory has begun manufacturing some of the data that confirms it.

This is not merely a recommendation problem. It is an identity problem.

If a platform learned you during a difficult year, how long should that version of you influence what it shows? If you searched extensively for a medical condition on behalf of somebody else, when should the inferred interest decay? If your financial behavior changed after a crisis, what evidence is enough for a model to notice?

The user rarely sees the decay function. The platform chooses it.

Long memory has real advantages. A system that forgets too quickly can become unstable, easier to game, worse at fraud detection and incapable of recognizing slow patterns. A medical system that discards history in the name of freshness can become dangerous. A security system that forgets yesterday's intrusion because yesterday is stale has misunderstood its job. The strongest argument against aggressive forgetting is not bureaucratic laziness. Some old facts remain highly predictive, some obligations require retention, and some archives exist precisely because powerful people would prefer inconvenient history to expire.

The design question is therefore not how to make machines forget like people. Human forgetting is hardly a gold standard. The question is how to separate durable evidence from durable authority.

Digital systems complicate that separation by creating copies. A single field can travel into a primary database, analytics warehouse, backup, cache, vendor system, machine-learning dataset, export, audit log and user interface. Correction becomes harder than creation. Change the source and another copy may persist. Delete the visible account and operational backups may remain. Correct a record and a model trained on the old version can still carry statistical traces.

Digital memory branches.

Freshness becomes a lineage problem: where did the information travel, which copy is authoritative, which is historical, which downstream system should receive a correction, and which use is allowed to preserve the original for audit while ceasing to act on it?

Organizations often discover that they cannot answer these questions cleanly. A field was collected for one purpose, reused for another and incorporated into a system whose original owner has left. Years later, deletion feels dangerous because nobody is certain what depends on it. Retention becomes the safe default because forgetting requires knowledge.

A system can remember data precisely because the organization has forgotten why it has the data.

Cheap storage made this easier. When keeping information was expensive, institutions had to make choices. As the price of storage fell, the cost moved elsewhere: breach exposure, legal discovery, stale features, conflicting versions, correction requests and the governance burden of deciding what still deserves to act.

The byte became cheap. The memory did not.

This matters especially for machine-generated inference. A binary field such as `has defaulted: yes`, `was arrested: yes`, `had diagnosis: yes` or `failed course: yes` can preserve a historical fact while discarding trajectory. For many present decisions, trajectory is the interesting part. When did the event happen? Under what conditions? What happened afterward? Has the underlying behavior changed? Is the original event still relevant to the risk being estimated?

A model can become stale without containing a single false source record. The user changes; the relationship learned from history does not.

That is harder to correct than a misspelled address. There may be no false fact to dispute. The error lives in the continuing weight assigned to a true one.

Version control offers a useful analogy. A software repository can preserve every commit while making the current version unmistakable. Nobody argues that the first commit should run in production because it is historically authentic. Human records are often less disciplined. Old titles, addresses, allegations, preferences and classifications can appear beside current information without enough temporal structure for a reader—or a model—to know which one should govern.

A freshness-aware system would make time part of meaning. It would distinguish current, historical, superseded, disputed and unknown. It would preserve provenance. It would expose when an inference was last re-evaluated, not merely when the underlying data was collected. It would allow some records to remain immutable for audit while preventing those same records from silently retaining infinite decision weight.

This is not cosmetic metadata. An outdated address in a primary field means something different from the same address under `previous addresses`. A past diagnosis marked resolved means something different from one shown as active. A cached headline without a visible date can turn an old event into an apparent new one. Interfaces decide whether a database feels like an archive or a present-tense assertion.

Artificial intelligence raises the stakes because it can synthesize history into a compact judgment. A model can read years of records and produce a sentence, score or recommendation. Compression makes temporal choices less visible. An old problem and a recent one can arrive in the same paragraph. A durable preference and a passing experiment can become one profile. The user sees the conclusion, not the weighting that made the past present again.

Long-context personal assistants will face this directly. A useful assistant may remember projects, purchases, routines, relationships and preferences over years. Maximal memory will be tempting because every remembered detail can look like product improvement. But a good assistant also has to notice when the remembered person has changed. It should know when to infer, when to ask, when to preserve a record and when to stop using that record as a prediction.

The ideal memory is not maximal memory. It is memory with a theory of relevance and a way to revise that theory.

That brings the chapter back to power. Who can see the machine's memory of you? Who can correct the source record? Who can challenge an inference? Who knows where a correction must propagate? Who decides how long an old event remains predictive? Who can tell whether the system has actually reconsidered you rather than merely appended another fact to the file?

The twentieth century built important rights around records in credit, health, education and government. Those rights were designed largely for information that could be pointed to: an account, a date, a diagnosis, a line in a report. Machine inference makes the next problem less tidy. The stale thing may be a relationship learned from thousands of accurate observations.

Freshness rights will eventually have to confront that distinction. Factual correction is necessary but insufficient. Some consequential systems will also need periodic re-evaluation, visible temporal provenance and limits on the continuing authority of old inferences.

Machines gave us memory without fatigue. The harder invention is memory that can keep history without confusing history for the present.