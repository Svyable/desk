# The Thing That Wouldn’t Die

A security review in a mature company often turns up a peculiar kind of artifact: an account that still works but no longer has a clear owner.

It may belong to a person who changed teams three years ago. It may have been created for a migration, a vendor integration, a temporary data export, an emergency debugging session, or a contractor whose name appears nowhere in the current directory. Nobody remembers why the permission was granted. Nobody is eager to remove it, either, because the one thing more frightening than an unexplained permission is the possibility that some invisible production process still depends on it.

So it stays.

The account is not malicious. The original decision may have been perfectly sensible. The danger enters later, through persistence. A temporary exception quietly changes category. It stops being a decision and becomes part of the environment.

Organizations are full of these things. A meeting created for a crisis remains on the calendar after the crisis. A spreadsheet becomes an operating system because people keep adding columns. A rule written to solve one scandal governs a different world twenty years later. A subscription renews because silence is interpreted as assent. A database preserves a person’s old address, old risk score, old employer, old accusation, old preference, old diagnosis, old credit event, or old mistake because storage is cheaper than deciding what should be forgotten. A forecasting model keeps producing numbers after the population it learned from has changed. A machine-learning system remembers training influence that a user later asks to remove. A public authority receives emergency power for a temporary event, then discovers that temporary powers have constituencies too.

None of these cases is identical. Some should persist. Some should not. But they share an asymmetry that is easy to miss: continuation is usually cheaper than reconsideration.

That asymmetry has become one of the defining characteristics of modern life.

For most of human history, keeping something alive required work. Buildings decayed. paper burned or rotted. memories faded. organizations dissolved. messages traveled slowly and disappeared. A merchant who wanted a relationship to continue had to maintain it. A government that wanted to enforce a rule needed clerks, paper, local knowledge, and physical reach. Information persistence was expensive enough that forgetting happened automatically.

Digital systems changed the economics. Copying approached zero cost. Storage became abundant. Databases made old records instantly retrievable. Cloud systems made snapshots routine. Search made archives operational rather than merely historical. Software could carry forward a configuration forever unless somebody changed it. Then automation made persistence active. An old rule no longer had to sit quietly in a binder. It could execute.

Artificial intelligence pushes that shift further. A stale instruction in a filing cabinet is inert until a person reads it. A stale instruction attached to an autonomous system can become a continuing source of action. A model trained on yesterday’s world can make thousands of decisions before anyone notices that yesterday stopped being representative. A remembered preference can become a standing order. A permission granted to an agent can be exercised at machine speed. A mistaken fact stored in memory can be retrieved repeatedly and presented with the confidence of familiarity.

The problem is often described as one of updating. Keep your records current. rotate credentials. retrain models. review policies. clean up access. cancel unwanted subscriptions. repeal obsolete rules. Each recommendation is individually reasonable, and together they miss something important.

They place the burden on the person who wants the old thing to stop.

That is the architecture of persistence by default. A permission exists until revoked. A rule exists until repealed. A subscription continues until canceled. Data remains until deleted. A model remains deployed until replaced. A committee keeps meeting until somebody is willing to be rude. The past has incumbency advantage.

There is another architecture.

On the internet, some information travels with a clock.

The Domain Name System, the distributed directory that helps translate names such as a website address into the information computers need to reach it, allows resource records to specify a time-to-live. A resolver may cache an answer for that period. When the period ends, it is supposed to consult the source again rather than assuming that yesterday’s answer remains authoritative. The point is not that the old answer becomes false at a magical second. The point is that its right to be trusted without revalidation expires.

That distinction is the heart of this book.

Expiration is often confused with destruction. In ordinary speech, an expired thing sounds dead: spoiled milk, an invalid passport, a lapsed coupon, a useless ticket. But many of the most valuable expiration mechanisms do something more subtle. They change the burden of proof.

Before the deadline, continuation is automatic. After the deadline, continuation requires a new act.

A leased network address can be renewed. A certificate can be reissued. A license can be extended. A law can be reenacted. A prescription can be rewritten. A temporary permission can be granted again. A cache can fetch the same answer and start a new clock. Expiration does not necessarily say no. It says ask again.

That is a small procedural change with large consequences.

Consider the difference between two access systems. In the first, an employee receives administrator privileges and keeps them until someone removes them. In the second, the employee receives the same privileges for four hours and must request them again if the work continues. The second system may produce more requests, more automation, and more visible friction. It also changes the meaning of forgotten state. In the first system, forgetting preserves power. In the second, forgetting removes it.

The same logic appears in public-key certificates. A certificate is a statement, signed by a trusted authority, that binds an identity to a cryptographic key under specified conditions. The Web once tolerated relatively long certificate lifetimes. The direction of travel has been toward shorter ones. Let’s Encrypt built its service around ninety-day certificates and automation, arguing that shorter lifetimes reduce the window of damage from compromised keys or mistaken issuance and make automated renewal necessary rather than optional. The CA/Browser Forum has adopted a schedule that reduces the maximum validity of publicly trusted TLS server certificates to forty-seven days by 2029.

There is an engineering philosophy embedded in that change. Trust is not treated as a possession acquired once. It is treated as a claim that must be refreshed.

The same philosophy can be found in finance, where an option contract is defined partly by its expiration date. The time limit is not a defect attached to the instrument. It is one of the things that gives the instrument its meaning. The right to buy or sell at a specified price is not eternal because an eternal option would be a different economic object. Time is part of the contract.

Medicine provides a different version. A drug expiration date does not represent metaphysical knowledge that every molecule changes character at midnight. It marks the period for which stability data support the product’s strength, quality, and purity under labeled storage conditions. The date is an evidence boundary. Beyond it, the claim is no longer the same claim.

That is closer to what many institutional decisions need.

A forecast should not simply say what is expected. It should say how long the expectation deserves to travel without review. A model should not merely have a version number. It should have an operating context and a reconsideration horizon. A permission should not only specify who may do what. It should specify for how long, under what continuing conditions, and what must happen before renewal. A rule should not merely state a requirement. It should disclose the conditions that justified it and the point at which those conditions should be examined again.

We already do pieces of this. Governments use sunset clauses. Security teams use short-lived tokens. Privacy laws impose storage limitation. Courts apply statutes of limitation. Professional licenses require renewal. Companies run access reviews. Scientific guidelines are updated. Credit-reporting law limits how long much negative information may remain reportable. Clean-slate laws in a growing number of American states automate the clearing of some criminal records. These mechanisms differ in purpose and moral weight, but all of them reject the idea that elapsed time is irrelevant.

The surprising part is not that expiration exists. The surprising part is how selectively we use it.

Technology has made the cost of remembering collapse while leaving the cost of reconsideration stubbornly high. That combination favors accumulation. Every organization can cheaply keep another policy, another record, another credential, another model, another dashboard, another recurring charge, another API key, another exception. The individual cost is tiny. The system cost appears later as complexity, attack surface, unfairness, contradiction, administrative drag, and decisions built on facts whose context has disappeared.

Permanence has become a default setting disguised as neutrality.

It is not neutral.

A rule that persists privileges the coalition that won once over the coalition that would have to win again. A subscription that renews privileges the seller’s past consent over the buyer’s present attention. A stored accusation privileges the fact that information was once collected over the possibility that its continuing use is unjust. A permission that survives privileges operational convenience over current necessity. A model that remains deployed privileges the environment in which it was trained over the environment in which it now acts.

Sometimes those privileges are correct. Property rights need stability. Contracts would be useless if every obligation dissolved by default. Archives protect society against convenient amnesia. Constitutional rights should not disappear because an office forgot to renew them. Scientific evidence should remain accessible even when conclusions change. A pension should not vanish because an elderly recipient missed an email. Permanence can protect people from arbitrary power precisely because it makes authority work harder to take something away.

So the argument cannot be “make everything expire.” That slogan would be memorable and wrong.

The more useful proposition is this: persistence should be earned when persistence itself creates risk.

The phrase contains two judgments.

First, some things become riskier simply by continuing. Credentials accumulate exposure. stale data misdescribe people. old models drift away from the world. emergency powers normalize. temporary exceptions become permanent loopholes. recurring charges exploit inattention. rules designed for one technology can distort another. The mere passage of time changes the relationship between the original justification and the current reality.

Second, earning persistence does not always require a human committee. One reason expiration has become so powerful in computing is that renewal can be cheap, observable, and automated. A certificate can renew because a machine proves control of a domain. A service credential can be reissued because workload identity is freshly verified. A DHCP client can renew its lease because it is still present. A cache can refresh an answer because the authoritative source still says the same thing.

Automation changes the politics of review. The old objection to expiration was often administrative: if everything must be renewed, bureaucracy explodes. That remains true when renewal means paperwork. It is less true when renewal means fresh evidence.

This points toward a larger design principle. Good expiration systems do not merely attach dates. They attach dates to renewal conditions.

The weak version of expiry is a calendar reminder. Somebody must remember to inspect the thing.

The stronger version asks what would justify continuation and makes that evidence part of the mechanism. Is the person still employed in the relevant role? Is the domain still controlled by the same entity? Is the underlying risk still present? Has the model’s error rate remained within bounds? Does the customer still affirmatively want the service? Is the data still necessary for the purpose for which it was collected? Is the emergency still an emergency? Has the scientific recommendation survived new evidence?

A deadline without a renewal rule can become theater. A renewal rule without a deadline can be indefinitely postponed. The useful design combines them.

There is another reason to care now. The world is becoming more agentic.

For decades, software mostly waited. It displayed information, stored records, calculated, routed, searched, and responded when called. Modern software increasingly acts: it sends messages, buys things, changes code, schedules work, opens tickets, moves money, deploys services, negotiates with other systems, and makes decisions based on remembered context. The cost of leaving stale state in an active system is higher than leaving it in a passive one.

An old phone number in an address book is mostly an inconvenience. An old bank account stored in an automated payment agent can move money to the wrong place. A forgotten preference in a recommendation system can be annoying. A forgotten instruction in an autonomous procurement agent can become a recurring purchase. A stale list of authorized users in a document system creates exposure; the same list attached to an agent capable of exporting the corpus creates a different class of exposure.

As action gets cheaper, stale authorization gets more expensive.

That is why the expiration layer belongs beside the other layers we already know how to discuss. We talk about identity, security, privacy, reliability, observability, governance, and alignment. Underneath each is a temporal question: how long does this claim remain good?

Who are you? For how long is the answer valid?

May you do this? Until when?

Is this data accurate? As of what date?

Does this model work? On which population, measured when?

Does this rule solve the problem? Has the problem changed?

Does this customer consent? Is last year’s silence evidence of today’s desire?

Is this memory useful? Should it still be allowed to influence action?

A system that cannot answer those questions does not merely lack good housekeeping. It lacks a theory of time.

The internet developed one out of necessity. Distributed systems cannot afford to believe every old answer forever. Networks change. machines disconnect. names move. routes fail. keys leak. owners rotate. A world of permanently cached truth would eventually become a world of confidently wrong truth.

Human institutions have always changed too, but slowly enough that we could often hide temporal errors inside procedure. The clerk knew that the form was obsolete. The experienced manager knew which policy nobody followed. The judge could distinguish an old precedent from a new circumstance. The doctor could notice that a guideline had been superseded. Informal human correction sat on top of formal persistence.

Automation removes some of that cushioning. Systems execute what is written.

That makes old state visible in a new way. A rule that survived because everyone quietly ignored it becomes dangerous when software enforces it exactly. A permission that nobody remembered becomes useful to an attacker. A record that sat unread in a cabinet becomes a feature in a prediction model. A vague organizational preference becomes a standing agent instruction. Cheap execution turns institutional sediment into active code.

The expiration layer is a response to that transition.

It begins from a simple observation: the future should not always have to defeat the past in order to change it.

Sometimes the past should have to renew.