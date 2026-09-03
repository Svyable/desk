# The Cost of Forever

The cheapest button in a database is usually Save.

The most expensive button is often Delete.

That difference is not visible in the price of storage. A gigabyte costs almost nothing compared with the salary of the person deciding whether a record must be retained, whether another system depends on it, whether litigation requires preservation, whether a customer asked for erasure, whether a regulatory exception applies, or whether the old thing is still needed by a process nobody fully understands.

So organizations save first and decide later.

Later rarely comes.

This is one of the quieter ways technology changes institutions. When storage was scarce, forgetting happened as a consequence of economics. Filing cabinets filled. warehouses charged rent. tape had to be rotated. paper deteriorated. searching an archive required labor. A record could technically survive while becoming practically inaccessible.

Digital storage removed much of that friction without removing the obligations that come from retention. The result is a strange abundance: organizations can cheaply keep more state than they can cheaply understand.

The excess appears in many forms. Data is the obvious one, but the larger category is state: anything the system carries forward because some prior event caused it to exist.

A cloud resource created for an experiment remains running. A firewall exception survives the project that required it. A feature flag stays in code after the rollout is complete. An internal mailing list keeps former members. A shared folder accumulates permissions. A vendor integration remains authorized because disconnecting it might break something. A customer account retains old addresses, devices, consent records, saved cards, and support notes. A government form asks for a field because the field has always been there. A recurring meeting survives because removing it requires someone to challenge the social fact of the calendar.

Each item has a story. Together they create a tax.

The tax is not primarily disk space. It is ambiguity.

Every retained object creates questions about ownership, relevance, correctness, access, dependency, and liability. The organization must either answer those questions or tolerate uncertainty about them. At small scale, people remember. At large scale, they stop knowing which unknowns matter.

Security makes the cost easiest to see. An unused account is not neutral. It is another credential that can be compromised, another identity whose behavior must be monitored, another path into systems. An old service account may have broad permissions precisely because it was created before current security practices. A forgotten server may miss patches. A dormant application may contain a vulnerability. A vendor integration may retain access after the business relationship weakens.

Attack surface is partly the inventory of things nobody felt enough pain to remove.

The same dynamic appears in privacy. Retained data can be breached, subpoenaed, sold, repurposed, inferred from, joined with other data, or used by future employees for reasons the original collectors never imagined. The marginal cost of keeping another row is tiny. The marginal future use may look positive. The downside is diffuse and delayed.

That asymmetry biases systems toward memory.

The GDPR’s storage-limitation principle exists because “we might need it someday” is an almost infinitely expandable rationale. A purpose-based retention rule tries to tie persistence to justification. The precise legal obligations are more complicated than a slogan: organizations can have statutory retention duties, public-interest reasons, research exceptions, legal-claim needs, and other bases for keeping information. But the conceptual move is important. Storage is not automatically legitimate just because storage is inexpensive.

Software engineering has its own version of the problem in technical debt. A code path created for a special case can become permanent architecture. Engineers often know that a temporary workaround should eventually be removed, but removal is risky because the workaround may have acquired dependents. The code becomes older, less understood, and more expensive to change. The original shortcut stops being temporary not because anyone declared it permanent but because it survived long enough to attract context.

Institutional rules behave similarly.

A policy added after an incident often has a clear rationale on the day it is created. Five years later, the incident may be forgotten while the policy remains. New policies are written around it. Employees learn workarounds. Software is configured to enforce it. Audit checklists include it. Removing the policy would now require proving that none of those dependents need it.

This is path dependence with a clerical face.

The longer a thing persists, the more evidence of necessity its persistence itself seems to create.

That can be rational. A bridge used every day has demonstrated usefulness. A legal institution that coordinates millions of expectations should not be lightly discarded. An old standard may be valuable because everyone has built around it. Longevity can be evidence.

But longevity can also be camouflage.

A process may be used because it is mandatory. A meeting may be attended because it is scheduled. A report may be produced because someone once requested it. A license may be renewed because people have adapted to needing it. A database may be queried because it exists. Continuation can create demand for continuation.

This is why asking “Is anyone using it?” is not always enough. Usage can be downstream of the original decision rather than evidence that the original decision remains wise.

A stronger question is counterfactual: if this thing did not already exist, would we create it today under current conditions?

That question is uncomfortable because it removes incumbency advantage.

It is also the question that expiration forces.

A sunset clause makes lawmakers confront some version of it. A certificate renewal asks whether the identity-key relationship can still be proved. An expiring permission asks whether current work still requires the access. A model review asks whether current performance still justifies deployment. The expiration mechanism creates a scheduled opportunity for the present to compete with the past.

Without such a mechanism, the contest is lopsided.

Creating something often requires one concentrated decision. Ending it requires an inventory of every dependency that has formed since.

This helps explain why old systems become sticky even when their original purpose is gone. A form may be obsolete, but a training manual references it. A reporting requirement may be redundant, but a dashboard ingests the report. A credential may be unnecessary, but an automation silently uses it. A regulation may have an outdated threshold, but contracts are written around it. The thing is no longer just a thing. It has become a junction in a network of adaptations.

Expiration works best when it arrives before those adaptations harden.

A temporary permission with a four-hour lifetime has little time to become infrastructure. A pilot program with a clear end date can still attract dependents, but those dependents know they are building on provisional ground. A feature flag carrying an owner and removal date is easier to eliminate before developers forget why it exists. A trial data collection with a defined retention period gives downstream teams notice that indefinite reuse is not available by default.

The clock prevents sediment.

That does not mean short duration always minimizes cost. Constant renewal creates its own burden. If every employee’s ordinary building access expired every morning, the security desk would become the organization’s largest department. If every customer had to reconfirm every harmless preference each week, most would abandon the service. If every law expired annually, legislatures would spend their time reenacting the legal system rather than governing.

The cost of forever must be compared with the cost of asking again.

The balance changes as asking again becomes cheaper.

This is one of the reasons automation should alter our intuitions about permanence. A twentieth-century organization could reasonably issue long-lived credentials because identity verification was manual and expensive. A modern system can often issue short-lived credentials continuously from fresh machine identity. A government may have required citizens to repeatedly mail proof of eligibility because agencies could not share or verify data efficiently; a better system may be able to renew eligibility automatically while preserving appeal rights. A company may have run annual access-review spreadsheets because there was no reliable way to derive permissions from current roles; modern identity infrastructure can do much of that work continuously.

When revalidation becomes cheap, long persistence becomes harder to justify.

The reverse is also true. A system should be cautious about adding expiry where renewal is fragile or inaccessible. The harms of bureaucratic expiration tend to fall on people least able to absorb them. Someone with an assistant, flexible work hours, reliable internet, legal counsel, and organized records experiences renewal as inconvenience. Someone working two jobs, caring for children, missing documents, moving frequently, or struggling with a government portal can experience the same renewal as exclusion.

A cheap clock can impose an expensive human burden.

That is why the expiration layer cannot be built merely by adding dates to forms.

It should begin by identifying where persistence accumulates hidden cost and where renewal can be tied to relevant evidence with low friction.

Unused cloud resources are an easy case. A development environment can be labeled temporary, given an owner, and automatically shut down after a period unless activity or an explicit extension justifies it. The resource can be recreated if necessary. The cost of a mistaken shutdown is bounded.

Fundamental rights are the opposite case. Their persistence is supposed to constrain the power of current officials. Making them expire unless periodically renewed would invert their purpose. The hidden cost of permanence is not the relevant risk; arbitrary removal is.

Between those poles lies most of institutional life.

Take data. Some records have legal or operational reasons for long retention. A bank cannot delete every transaction immediately after settlement. A hospital cannot erase clinically important history merely because storage creates exposure. An archive may need to preserve records for accountability. Yet a marketing system does not need to retain every inferred interest forever. A customer-support recording collected for quality review may not need to become permanent training material. A location history useful for a one-time service may not deserve indefinite reuse.

Retention decisions become better when the data’s future authority is separated from its archival existence.

A record can be retained under restricted access for audit while removed from recommendation systems. It can be pseudonymized for research while deleted from an operational profile. It can be preserved as evidence while no longer surfaced in routine decision-making. It can be placed behind a legal hold without remaining available to every analyst.

The binary choice between “keep” and “delete” is often too crude.

The real design space includes demotion.

State can lose privileges as it ages. A fresh fact may be usable automatically. An older fact may require confirmation. A very old fact may remain visible only for history. A credential may begin with broad access and narrow as its context disappears. A model may continue generating suggestions after formal approval lapses but be prevented from making autonomous decisions. A policy may remain in an archive after losing operative force.

This resembles how human memory already works when it works well. We do not erase every old belief. We change how much confidence we place in it.

Digital systems are often worse because they preserve value without preserving doubt.

A database field from 2019 and a field updated yesterday can look identical to the program reading them. A policy marked “current” may have no visible record of when its assumptions were last examined. A model endpoint may return a prediction without exposing the age of its validation. A subscription database knows the original consent event but may not distinguish active desire from years of inertia.

Cheap persistence strips away the natural fading that once warned people about old information.

A paper memo from twenty years ago looks old. A line in a database does not.

A faded sign invites a question. A software rule executes with the same precision on day one and day ten thousand.

A human recollection often carries uncertainty. A retrieved digital record arrives perfectly legible.

That durability is one of technology’s miracles. It is also why we need explicit temporal design.

The future cost of forever will rise as systems become more capable of acting on whatever they retain. An old customer preference in a passive database is modest risk. The same preference in an agent with purchasing authority can trigger an order. An obsolete vendor permission in a file-sharing application exposes data. The same permission attached to an automated agent may enable bulk extraction. A stale rule in a manual may be ignored by experienced staff. The same rule encoded in a decision engine can deny thousands of people consistently.

Action multiplies the cost of stale state.

Artificial intelligence adds another wrinkle because it blurs stored data and learned behavior. A model may be influenced by information that is not straightforwardly retrievable as a record. Removing a source from a database does not necessarily remove its contribution from trained parameters. Machine unlearning is an active research field precisely because deletion in learned systems is not equivalent to deleting a row. The cheaper it becomes to absorb information into models and memories, the more important it becomes to decide retention before every piece of data acquires many downstream forms.

The best expiration policy is often the one attached at creation.

Who owns this permission? Why does it exist? What event should end it? How will renewal be proved? What data must survive for audit after authority ends? What dependents are allowed to form? Which uses are temporary even if the underlying record is permanent?

Answering those questions when context is fresh is cheap compared with reconstructing them years later.

This is the economic case for expiration.

It is not about making institutions forgetful. Forgetful institutions repeat mistakes, destroy accountability, and lose accumulated knowledge. The goal is to prevent memory from silently turning into authority.

Forever is expensive because every persistent thing asks the future to carry its context.

When the context disappears, the thing remains.

Expiration is a way to make the thing ask for context back.