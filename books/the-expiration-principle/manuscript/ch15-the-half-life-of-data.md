# The Half-Life of Data

Digital storage changed a basic human problem.

For most of history, forgetting happened cheaply. Paper burned, ink faded, files were misplaced, clerks retired, boxes filled basements, photographs disappeared in moves, institutions ran out of room. Preserving information required effort.

Computers inverted the cost.

Copying became cheap.

Storage became cheap.

Search became cheap.

Deletion became the action that required policy.

This inversion created a new kind of stale state.

A company can retain an address after the customer moved, a risk score after the behavior changed, a location history after the purpose ended, a job application after the position disappeared, a customer-service recording after the dispute was resolved, a photograph after the account closed, or an old allegation long after later facts changed its meaning.

The bits remain perfectly intact.

Their relationship to the present decays.

Data protection law has developed an explicit response. Article 5 of the European Union’s General Data Protection Regulation includes the principle of storage limitation: personal data should be kept in identifiable form no longer than necessary for the purposes for which it is processed, subject to important exceptions and safeguards for uses such as public-interest archiving, scientific or historical research, and statistics.

The rule does not supply a universal number.

Seven years.

Thirty days.

One decade.

There is no GDPR master retention period because the right duration depends on purpose.

That is exactly what makes the principle interesting.

The clock belongs to the reason for keeping the data.

A payroll record may need to remain for legal and accounting reasons after an employee leaves. A security log may need a different period. An unsuccessful job application may deserve another. A medical record, tax record, customer chat transcript, facial image, fraud investigation, scientific dataset, and public archive do not share one useful lifetime.

The question is not how old the file is.

It is why the institution still has it.

The United Kingdom Information Commissioner’s Office summarizes the practical consequence in language any systems engineer would recognize: organizations should be able to justify how long they keep personal data, set standard retention periods where possible, review what they hold, and erase or anonymize data when it is no longer needed.

A retention schedule is a TTL for institutional memory.

That analogy is close enough to be useful and dangerous enough to require care.

A DNS record can be safely refreshed by asking an authoritative server again.

Human history cannot always be reconstructed after deletion.

That asymmetry changes everything.

Delete a cache entry too early and the system can query the source again.

Delete the only surviving record of discrimination, contamination, abuse, a financial transaction, a scientific observation, a government decision, or a war crime and there may be no authoritative source left.

Some memory is renewable.

Some is not.

This is why data expiration sits between privacy and accountability.

The privacy case for deletion is strong.

Old personal data can be hacked, leaked, misused, misunderstood, repurposed, sold, subpoenaed, combined with new datasets, or fed into automated decisions the subject never anticipated. A company cannot expose what it no longer possesses. Reducing stored data reduces the attack surface and the number of future decisions that can rely on stale information.

Accuracy matters too.

A database remembers with inhuman confidence. The entry looks as crisp after ten years as it did the day it was written. The field does not yellow with age. The font does not fade. Unless the interface surfaces the date, a stale record can look current.

This gives digital memory a false timelessness.

An old address can route a notice to the wrong place. An old risk assessment can shape a new decision. An obsolete affiliation can remain attached to a person. A decades-old minor event can dominate a search result because storage preserved it better than the context that once made it understandable.

Forgetting can restore proportionality.

The accountability case for retention is equally serious.

Organizations sometimes discover the value of records only after something goes wrong. An employee alleges discrimination. A patient questions treatment. A regulator investigates. A product defect emerges. A scientific result becomes contested. A government changes hands. A historian asks how a decision was made. A family searches for what happened to someone.

The record that looked like useless old data becomes evidence.

Deletion can protect privacy.

Deletion can also protect the powerful from memory.

That is why authoritarian and corrupt institutions have always understood the politics of records. Destroy the archive and you do not merely save storage. You shape what can later be proved.

Data-retention policy is therefore an allocation of future knowledge.

Who might need to know this later?

Who might be harmed if it remains?

Who benefits if it disappears?

Who gets to decide the purpose has ended?

These questions are more difficult than the technical problem of executing a deletion job.

Software can delete on schedule very efficiently.

The danger is teaching it the wrong schedule.

This is a recurring feature of automation. Once a judgment has been converted into a rule, the rule becomes cheap to apply at scale. A retention policy saying “delete after thirty days” can remove billions of records with no further human reflection. The administrative consistency is appealing.

So is a records policy saying “keep forever.”

That rule is even easier.

Do nothing.

The asymmetry is important. Retention is often the default because deletion requires an explicit process. Data copies proliferate across production systems, analytics warehouses, backups, laptops, exports, logs, vendor systems, and email. An organization can write a retention policy and still discover that the same personal data survives in half a dozen places the policy owner forgot existed.

Expiration is harder for copies than for originals.

This is the data version of distributed cache invalidation.

The organization does not merely need a date. It needs an inventory of where the information lives and a mechanism for propagating the end.

The ICO’s guidance recognizes some of this operational reality. Taking data offline is not necessarily the same as deletion; storing personal data in a less accessible system can reduce risk, but the organization still holds it and must still justify the retention. Backups complicate erasure. Pseudonymized data may still permit identification and therefore remain personal data under the relevant legal framework.

The endpoint is not “we stopped showing it in the app.”

The endpoint is a meaningful change in what the institution can do with the information.

This brings us to anonymization.

Sometimes the identifiable link can expire while the informational value remains.

A dataset useful for statistics or research may not need names, addresses, account numbers, or other direct identifiers. If the data can be genuinely anonymized so that individuals are no longer identifiable under the applicable standard, the institution can preserve aggregate knowledge while reducing personal exposure.

The idea is elegant.

The practice is difficult.

Modern datasets can be re-identifiable through combinations of attributes. Rare characteristics, location traces, dates, and external information can reconnect a supposedly anonymous record to a person. Pseudonymization improves security and governance but often does not remove the data from the category of personal data because the link can still be restored.

Expiration can operate at several layers.

Delete the direct identifier.

Restrict access.

Remove fine-grained detail.

Aggregate.

Anonymize if possible.

Delete the raw record later.

Preserve a public-interest archive under stricter rules.

The single “delete date” becomes a lifecycle.

This is a better model for memory because information can change purposes as it ages.

A customer support chat may be needed immediately to resolve a case. Later it may be retained for a defined legal period. Later still, perhaps only aggregated statistics are useful. The personally identifiable transcript can expire before the knowledge derived from many transcripts does.

The same pattern appears in science.

Raw participant-level data may require strict controls. Derived results can be published. De-identified or aggregated datasets can support replication. Some records may need long-term preservation because scientific value increases when studies can be revisited with new methods.

The right lifetime changes by layer.

We saw the same pattern with status and cards.

The durable thing does not have to share the same expiration date as the proof.

Data systems can separate durable knowledge from temporary identifiability.

This is more nuanced than the slogan “the internet never forgets.”

The internet forgets constantly.

Links die. Domains disappear. services shut down. drives fail. formats become unreadable. social platforms delete accounts. companies collapse. cloud bills go unpaid. The real problem is selective memory.

Some information we desperately wish would disappear remains copied everywhere.

Other information we later need was stored in the one place that got deleted.

A good retention system cannot maximize forgetting or memory.

It has to preserve the right kind of evidence for the right purpose while limiting unnecessary identifiability and access.

That requires purpose to be more than a legal phrase.

If an organization collects data “to improve services,” how long does that purpose last?

Forever is easy to defend if the purpose is infinitely broad. Every old record might conceivably help improve something someday.

Storage limitation therefore pushes against vague purpose statements. If purpose determines lifetime, purpose has to be narrow enough that an ending can exist.

This is philosophically significant.

An institution that cannot say when it will stop needing a piece of personal data may not know why it collected the data in the first place.

Expiration becomes a test of purpose clarity.

Security engineers encounter a similar test with permissions. If nobody can say when an access right should end, the permission may be too broad or too detached from a specific job. Contract lawyers see it in open-ended obligations. Regulators see it in emergency powers. Patent law solves it by setting an outer term regardless of continuing usefulness.

A lifetime forces a claim about purpose.

Data retention also exposes the danger of “just in case.”

Organizations love optionality. A dataset kept today might become valuable tomorrow. New machine-learning methods could extract patterns nobody currently knows how to see. A future business model could use old behavior. A future investigation could need the record.

The option value is real.

So is the cost imposed on the people whose information remains available for unknown future uses.

Keeping data preserves institutional optionality by denying the subject finality.

The person cannot know what an old record will mean in a future system.

This trade becomes sharper in the age of artificial intelligence because previously inert archives can become queryable and actionable. A company might have kept old documents for compliance or backup reasons. A model or agent can suddenly make the archive operational by searching, summarizing, correlating, and acting on it at machine speed.

Old data acquires new power.

The retention decision made when the information was expensive to use may look different when analysis becomes cheap.

This is one reason expiration policies need to be revisited after technological change.

The risk of stored information is not fixed at collection.

Better search, cheaper computation, new linkage methods, facial recognition, language models, and automated decision systems can increase what old data can do.

A lifetime chosen in 2010 may reflect a world in which nobody imagined the record would be instantly searchable by autonomous software in 2030.

The data did not become newer.

Its actionability became greater.

Expiration is therefore not only about staleness.

It is about latent power.

Deleting old personal data can prevent future actors from using a past moment as a permanent claim on the person.

Preserving selected archives can prevent future actors from denying that the past happened.

Those goals conflict in a way no universal retention period can solve.

The GDPR’s storage-limitation principle contains the conflict inside its language. Keep identifiable personal data no longer than necessary for the processing purpose, but permit longer storage for public-interest archiving, scientific or historical research, and statistics subject to safeguards.

Forget the person when continued identification is unnecessary.

Remember the world when memory itself serves a durable public purpose.

That is not a contradiction.

It is a theory of what should survive.
