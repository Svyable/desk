# Permission Has a Half-Life

A permission is easiest to understand at the moment it is granted.

Someone needs access to a database because a migration is underway. A contractor needs a repository because a project begins Monday. A finance employee needs approval authority because another person is on leave. An engineer needs production access because a service is failing. A software agent needs permission to send messages because the user has asked it to coordinate a meeting.

The reason is close at hand. The people involved remember the task. The scope feels obvious.

Six months later, the permission still exists and the reason has become archaeology.

Security teams have names for the resulting accumulation: privilege creep, standing access, dormant accounts, orphaned identities, excessive entitlements. The terminology varies with the system, but the shape is familiar. Organizations are much better at adding permissions in response to work than subtracting them when the work changes.

This is not usually because nobody cares about security. It is because access and work move on different clocks.

A person changes roles today. A directory updates tonight. A cloud policy may be reviewed next quarter. A vendor portal may never be told. A shared folder has no owner. A credential sits in a script. A local administrator group contains names inherited through another group whose original purpose disappeared. The organization knows the current person and the current job, but pieces of the technology estate continue believing earlier relationships.

The traditional response is periodic access review. Managers receive a list of people and permissions and are asked to certify that everything is still correct. This can work, especially for high-value systems with manageable scopes. At scale, it can also produce the familiar pathology of compliance work: long lists, little context, and a strong incentive to approve what is already there.

The reviewer is being asked to disprove the past.

Short-lived authorization changes the question.

Instead of granting an engineer permanent production access and hoping someone removes it later, a system can grant access for the duration of a task. Instead of storing a long-lived cloud key in configuration, a workload can obtain temporary credentials from an identity service. Instead of giving an autonomous agent broad standing authority, a user can delegate a bounded capability for one transaction, one budget, one counterparty, or one period.

The permission becomes a lease.

Modern zero-trust architecture pushes in this direction, though “zero trust” has been stretched by marketing far beyond the precise meaning of any single standard. NIST’s Zero Trust Architecture begins from the idea that trust should not be implicitly granted because of network location or ownership. Authentication and authorization are evaluated in relation to resources, identities, devices, and policy. The later NIST guidance for cloud-native access control emphasizes service identities, fine-grained policy, and the usefulness of short-lived credentials rather than static secrets.

A short-lived credential does not eliminate compromise. It changes the value of compromise over time.

If an attacker steals a credential valid for a year, revocation becomes urgent and the window of possible abuse is large. If the attacker steals a token valid for fifteen minutes, the token can still be damaging, but time is working for the defender. The system will require another successful issuance to continue.

That sounds so obviously safer that it tempts a bad conclusion: make everything expire as quickly as possible.

Security history offers a warning.

For years, many organizations forced users to change passwords on a fixed schedule. Thirty days. Sixty days. Ninety days. The intuition was similar: if a password leaks, shorter validity should shorten the attacker’s opportunity.

People adapted. They changed Summer1 to Fall1, or incremented digits, or chose patterns easier to remember under repeated forced changes. The policy created predictable human behavior while doing little to address the more important questions of password strength, reuse, phishing resistance, credential stuffing, compromise detection, and multi-factor authentication. Current NIST guidance says verifiers should not require periodic password changes unless there is evidence the authenticator has been compromised.

The lesson is not that expiration failed.

The lesson is that clocks must match threats.

A bearer token has value precisely because possession permits action. Reducing its lifetime directly reduces how long that particular stolen object remains useful. A memorized password is different. Forcing the human to replace it repeatedly can create worse secrets and more predictable transformations. The same policy shape—“change this every ninety days”—acts differently because the underlying object and renewal process are different.

This distinction becomes crucial outside cybersecurity, where “review annually” is often treated as evidence of seriousness regardless of what annual review accomplishes.

A useful permission clock asks what changes with time.

The employee may leave. The task may end. The device may become noncompliant. The contract may terminate. The risk level may change. The system may discover compromise. The user may withdraw delegation. The agent may complete the action. The budget may be spent.

Those events provide natural boundaries.

Some permissions should therefore expire on events rather than dates.

A contractor’s repository access can end when the contract ends. A temporary administrator role can end when the incident ticket closes. A purchasing authority can end when the approved amount is reached. An AI agent’s right to use a travel website can end when the trip is booked. A document share can end when a transaction closes. A medical proxy’s authority can depend on a clinical condition rather than the calendar.

Time remains useful because events are not always observed reliably. A four-hour limit can serve as a backstop even if the incident ticket remains open accidentally. The strongest design often combines event and time: access ends when the task ends or when the maximum duration arrives, whichever comes first.

This is how engineers think about failure. Do not rely on one signal when two independent boundaries can limit harm.

Human institutions often think about permission as a binary property. Authorized or unauthorized. The more useful model is a bundle of dimensions: what action, on which resource, under what conditions, for whose benefit, with what budget, from which identity, and for how long.

Artificial intelligence makes the missing dimensions harder to ignore.

When software only displayed information, broad account access was dangerous but familiar. When software can act on behalf of a person, permission becomes executable intention.

Suppose a user tells an assistant, “Handle my travel.” That sentence might authorize research. It might authorize booking. It might authorize spending up to a limit. It might allow the assistant to cancel an existing reservation. It might allow sharing passport information with an airline. It probably does not mean the assistant may continue arranging future travel indefinitely after the immediate trip is finished.

Natural language is rich enough to express purpose and poor at automatically defining boundaries.

The safe implementation must turn the request into temporal authority.

What does the agent need now? For how long? What should require a fresh confirmation? What can be done autonomously within the window? What happens if the task pauses overnight? Does an authorization to spend $1,500 survive after the first booking fails? Does it survive if prices change? Does the agent retain the card, passport, and loyalty information after the trip?

These are permission questions with clocks hidden inside them.

The same problem appears in enterprise agents. A system may receive access to email, documents, issue trackers, cloud consoles, code repositories, customer records, or financial tools. If that access is granted as standing permission because the agent is considered equivalent to an employee, the organization inherits every familiar privilege-creep problem at machine speed.

An agent can exercise forgotten access far more thoroughly than a person. It does not tire. It can enumerate. It can revisit. It can combine permissions across systems. It can act at two in the morning. A broad entitlement that a human employee never noticed may become operational the first time an agent discovers a way to use it.

This suggests that agentic systems should move authorization closer to intent.

A model should not possess every permission its user possesses merely because it runs under the user’s account. It should receive capabilities relevant to the current task and lose them when the task ends. Persistent agents may need durable identity, but durable identity does not require durable authority.

That is the same distinction cloud security has been learning for service identities. A workload can be continuously recognized without holding a secret that remains useful forever.

Renewal matters again.

Short-lived permissions are practical only when legitimate users can obtain them reliably. If every production incident requires a vice president to wake up and manually reapprove access every fifteen minutes, teams will find a way around the policy. They will create emergency accounts, share credentials, extend lifetimes, or keep sessions alive artificially.

Friction migrates.

The question is therefore not “How short can we make the credential?” It is “How cheaply can we re-establish the facts that justify the credential?”

For a workload, fresh machine identity may be enough. For an employee, current employment, device condition, role, and ticket association may be checked automatically. For a high-risk action, a human confirmation may still be appropriate. For an autonomous agent, a budget and task context might allow many low-risk actions while escalation is reserved for irreversible ones.

This is where expiration and least privilege become complements.

Least privilege asks for no more authority than necessary.

Expiration asks for no longer than necessary.

A permission can be narrow in action and still dangerous if it lasts forever. It can be brief and still dangerous if it is broad enough to destroy a system in one minute. Good authorization needs both dimensions.

The interaction becomes even more important when systems compose.

A user gives an agent permission to read email. The agent reads a message containing a link to a shared drive. The drive grants access to a spreadsheet with credentials. Those credentials provide access to another system. Each step may be individually permitted. Together they create a path nobody explicitly approved.

Standing permissions make these paths durable.

Short-lived capabilities cannot eliminate transitive risk, but they reduce the chance that yesterday’s path remains available tomorrow simply because nobody closed it. They also make logs more meaningful. If a permission was issued for a specific task at a specific time, later actions can be compared with that context.

A long-lived account says only, “This identity was once trusted.”

A short-lived grant can say, “At 14:03 this identity proved these conditions and received this authority for this purpose until 18:03.”

That is better evidence for both prevention and audit.

There is, however, a danger in turning every permission into surveillance. A system that continuously revalidates employment, location, device posture, biometrics, behavior, and risk score can become more invasive than the standing credentials it replaces. Zero trust can be implemented as disciplined authorization or as an excuse to observe everything.

The temporal argument does not settle that tradeoff.

Fresh evidence should be proportional to the action. A low-risk permission does not justify collecting intimate data merely to renew it. Sometimes a simple cryptographic proof is enough. Sometimes the better choice is a longer-lived grant with clear revocation rather than continuous monitoring.

Expiration reduces one form of trust and can increase another: trust in the renewal authority.

Who gets to decide that the conditions are still met? What happens if the identity provider fails? Can a malicious administrator deny renewal? Is there an offline fallback? Can a worker appeal a mistaken device-risk score? Can a customer recover access if the automated system refuses to reissue a credential?

A permission architecture is also a power architecture.

That becomes obvious in government. A professional license that expires every year may ensure current qualifications. It may also give an agency repeated opportunities to impose fees, paperwork, or discretionary conditions. A welfare benefit that requires frequent recertification may keep eligibility current while increasing the number of eligible people who lose coverage for procedural reasons. A visa, permit, or status with a renewal clock can make a person’s life depend on administrative continuity.

The moral value of expiry depends partly on which side is vulnerable to the clock.

In cybersecurity, the party inconvenienced by short-lived credentials is often the operator seeking access, while the protected party is the organization whose systems are at risk. The asymmetry can be acceptable because access is a delegated power.

In social benefits, the party inconvenienced may be the person entitled to essential support, while the government already possesses much of the relevant information. Repeated expiry can function less like security and more like attrition.

A useful rule begins to emerge: be more willing to expire power than protection.

Permissions to act on other people, move their money, read their data, command infrastructure, enforce emergency rules, or make consequential automated decisions deserve more aggressive temporal limits than rights to due process, earned benefits, archives, or basic protections.

The rule is not absolute. Some powers need continuity. Some benefits legitimately depend on changing conditions. But it identifies the direction in which expiration tends to be safest.

Power should have to renew its warrant.

That principle also changes how we think about revocation. Revocation is usually treated as the emergency brake: a credential remains valid unless someone actively cancels it. Expiration makes revocation the exceptional path for immediate termination while time handles the ordinary cleanup.

This is operationally attractive because revocation systems are hard. Every relying system must receive and honor the signal quickly. Cached permissions can persist. offline devices may not hear. stale sessions may remain open. The longer a credential’s natural lifetime, the more the system depends on perfect revocation.

Short lifetimes reduce that dependency. If revocation is delayed, the grant still dies.

Again, the clock does not solve the system. It limits the consequences of imperfection.

That is why permission has something like a half-life even when no policy acknowledges it. The further a grant travels from the moment it was justified, the more likely its context has changed. The original employee may have moved. The task may have ended. The device may have been replaced. The vendor may have been acquired. The agent may be working on a different objective. The organization may have reorganized. The threat environment may have changed.

Time is not proof that permission is wrong.

It is evidence that the original proof is old.

A mature authorization system should know the difference.

The future will contain more identities, not fewer: people, services, devices, models, agents, temporary processes, autonomous organizations, and software acting for software. It will be impossible to govern that population by granting every legitimate identity durable access to everything it may someday need.

Identity can persist.

Authority should often be rented.