# Keys That Must Die

A secret can be stolen without disappearing.

That is the security problem expiration is unusually good at.

If someone takes a physical key from your pocket, its absence can tell you something happened. If someone copies a cryptographic key, the original remains where it was. Systems continue working. Logs may look normal. The legitimate holder can keep using the same secret while an attacker quietly possesses another perfect copy.

Nothing about possession announces exclusivity.

Security engineers therefore learned to distrust forever.

NIST uses a blunt and useful term: cryptoperiod. It is the span of time during which a cryptographic key is authorized for use. The key can remain mathematically valid outside that period. The bits do not rot. The algorithm does not necessarily stop producing correct outputs. The system simply refuses to let yesterday's secret retain authority indefinitely.

This is expiration stripped of almost every distraction.

There is no packaging freshness. No photograph. No bargaining negotiation. No public monopoly. No manufacturing defect. The reason for the clock is exposure.

A key may be compromised without discovery. Limiting its authorized life limits how long that unknown compromise can continue to matter.

The logic is similar to compartmentalization in other forms of security. A watertight door does not prevent damage to one compartment; it limits spread. A circuit breaker does not eliminate electrical faults; it limits how far a fault can propagate. A fire door does not prevent ignition; it buys time and contains consequences.

A cryptoperiod turns time into a compartment.

If a secret is copied during one period, expiration can eventually force the system to move to another secret. The attacker must compromise the replacement or lose access.

This does not solve theft.

An attacker who steals a credential can use it immediately. A key can be exfiltrated minutes after rotation. A badly protected root credential can mint new temporary credentials indefinitely. Automated renewal can faithfully reproduce a compromised state. Short lifetimes cannot rescue a system whose deeper trust chain is broken.

But they can change the economics of compromise.

A permanent stolen key is an asset.

A temporary stolen key is an asset with decay.

That distinction matters because defenders and attackers both operate under uncertainty. The defender rarely knows exactly when compromise will happen. The attacker rarely knows exactly when discovery will happen. Expiration gives the defender a clock that runs even in ignorance.

This is the inverse of revocation.

Revocation says: when we learn the secret is compromised, stop trusting it.

Expiration says: even if we learn nothing, stop trusting it eventually.

The two mechanisms belong together because each covers the other's weakness. Revocation can respond immediately to known compromise. Expiration covers some portion of unknown compromise. Neither should be asked to replace the other.

Key management adds another reason for temporary trust: cryptanalysis.

The longer a key remains in service, the more material may be produced under it and the longer an adversary may have to study the environment. Algorithms themselves age. Computing power changes. implementation weaknesses are discovered. Standards evolve. A key that was adequate under yesterday's assumptions may deserve less confidence later even if nobody can point to a single moment of compromise.

Security therefore makes expiration dynamic in spirit even when the policy uses a fixed number.

The interval is a bet about how long the current protection remains worth relying upon.

That bet depends on the job the key performs.

A key used to protect high-value long-lived information may deserve different treatment from one used for low-value ephemeral traffic. A key exposed in a hostile environment may deserve a shorter period than one protected inside specialized hardware. A key that encrypts enormous volumes of material may create a larger concentration of risk than one used sparingly. Some keys protect other keys, making their compromise disproportionately important.

There is no meaningful universal statement that keys should expire every X days.

The design comes from exposure, use, environment, algorithm, implementation, and operational capability.

This makes cryptoperiods a surprisingly mature model for thinking about expiration elsewhere.

The question is not “how old is it?”

The question is “how much risk accumulates while we continue relying on the same thing?”

Age is only a proxy.

That is the hidden equation behind many clocks in this book. The passport photo may become less representative. The permit's assumptions may drift. The drug's stability evidence eventually reaches its supported horizon. The professional's initial training recedes into the past. The borrower's financing environment changes. The cryptographic key accumulates exposure.

Time matters because something else can happen during time.

The most elegant security systems make renewal cheap enough that the system can choose short validity without imposing human pain.

This is where temporary cloud credentials enter the story.

Amazon Web Services describes temporary security credentials that can last from minutes to hours. When they expire, AWS no longer recognizes them for access. The workload does not have to stop existing. A deeper identity or role can obtain new temporary credentials if it remains authorized. The credential dies while the principal continues.

This is the passport distinction accelerated almost beyond human perception.

Entity persists.

Evidence expires.

Fresh evidence is issued.

Software can perform the cycle so quickly that users barely know it happens.

OAuth access tokens use the same temporal grammar. A server can tell a client how many seconds an access token remains valid. Applications refresh or reacquire authority according to the protocol and deployment.

Seconds are a startling unit when compared with licenses and passports.

Yet the short interval works because the renewal cost can be tiny.

A human cannot visit a government office every hour. A server can request a new token many times a day.

This suggests one of the book's most important design relationships: the cheaper renewal becomes, the shorter trust can become without paralyzing the system.

That is not the same as saying shorter is always better.

Rotation has operational cost even when humans are not involved. Every renewal path is another thing that can fail. Time synchronization can fail. Automation can break. dependencies can be unavailable. permissions can drift. Secrets can be stored incorrectly. A certificate-renewal job that quietly stops running can cause an outage when the old certificate finally expires.

The stricter the clock, the more reliable the renewal machinery must be.

Security history is full of systems that were made theoretically safer by expiration and practically unavailable by failed renewal.

Availability is part of security.

A hospital system, payment network, control system, or communications service that rejects everyone because a certificate expired may have preserved one property of trust while destroying another property users depend upon.

This is why mature credential systems are designed around overlap.

A new key can be introduced before the old one disappears. Certificates can be renewed ahead of time. Systems can trust both during a migration window. applications can refresh tokens before the final second. Automation can monitor remaining lifetime and alert long before the boundary.

The expiration date still matters, but the safe operational behavior occurs before it.

This pattern appears everywhere once recognized.

Debt gets refinanced before maturity.

Passports get renewed before they become unusable for travel.

Permits are applied for before expiration.

Leases are renegotiated before the term ends.

Patents shape competitive planning before exclusivity disappears.

Food nearing a quality date can be discounted before it becomes waste.

The boundary organizes anticipatory action.

Security simply performs that anticipation at machine speed.

There is another reason keys are a useful model: they force precision about what exactly has expired.

A cryptographic system contains many layers. The algorithm may still be approved. The key may still exist. A certificate binding a key to an identity may expire. A token derived from authentication may expire sooner. A session may persist through refresh. The user account may remain active. The organization's right to operate may remain unchanged.

Different clocks can protect different layers.

This layered approach is often better than giving one credential a very long life because users need continuity.

Continuity can exist above repeated expiration.

Think of a hotel. A guest stays for three nights. The room remains “the guest's room” for the duration of the reservation, but the digital key in a phone could theoretically be reissued or revalidated beneath that experience. The stable relationship does not require every technical artifact supporting it to be equally durable.

Software is especially good at this separation because it can regenerate artifacts cheaply.

Human institutions are beginning to learn the same trick.

A person can have durable citizenship while the passport document is temporary. A professional can have a durable education while the permission to practice is periodically reviewed. A company can own a facility while an operating permit is time-limited. A bank account can persist while login tokens expire in minutes.

The mistake is to attach the longest-lived thing's duration to every layer below it.

Long-lived relationships do not require long-lived authority at every step.

This matters as society becomes more digital because software inherits old institutional habits. A government digitizing a ten-year physical credential may be tempted to give the digital bearer artifact the same ten-year life. That could be unnecessary and dangerous if digital renewal is cheap. Conversely, a technologist accustomed to one-hour tokens may underestimate how destabilizing hourly revalidation would be for a human legal status.

The right clock belongs to the layer.

Keys also teach a harsher lesson: expiration can be necessary because people forget.

Organizations are bad at deleting old authority.

Employees leave. Vendors change. projects end. systems are abandoned. Credentials survive in configuration files. Accounts persist in forgotten databases. The person who understood why a key existed leaves the company, while the key continues functioning because nobody wants to risk breaking something by removing it.

Permanent authority is friendly to neglect.

Expiration is hostile to neglect.

A credential that must be renewed eventually forces someone or something to demonstrate continued need. If nobody can, the authority disappears.

This is an extraordinary property in large organizations because no central administrator can perfectly know the purpose of every artifact. The clock provides decentralized garbage collection.

Unused trust dies.

The analogy to computer memory is apt. Systems that never reclaim unused resources eventually fill with abandoned objects. Garbage collection exists because humans cannot be relied upon to free everything perfectly. Expiring credentials perform a related function for authority.

The comparison should not be pushed too far. A permission can be socially consequential in ways memory allocation is not. Accidental expiry can hurt people and interrupt critical systems. But the structural problem is real: a growing organization accumulates stale state faster than its operators can manually audit it.

Time can clean.

The cost is that living things must periodically prove they are not garbage.

That sentence contains the moral problem of expiration in one line.

For machine credentials, the burden can be trivial. For people, it may not be.

Security engineering benefits from being able to automate renewal. The user does not have to remember a new token every hour. Software obtains it. The system can make trust temporary without making the user's relationship temporary.

Human institutions should envy this property and fear it.

If renewal can be made nearly invisible, governments and companies may be tempted to expire more things more often. Sometimes that will improve safety and reduce stale data. Sometimes it will create constant hidden eligibility checks that people cannot see or contest.

The future could become a world of permanent relationships supported by invisible streams of temporary permission.

Bank accounts, vehicles, workplaces, homes, medical systems, devices, and public services could all continuously mint short-lived authority based on deeper identity and policy.

That world would be secure in one sense.

It would also make the system that performs renewal extraordinarily powerful.

The cryptographic key remains a useful guide because good key management never assumes that one layer deserves absolute trust. Root keys are protected differently. subordinate keys have different purposes. access tokens are scoped. lifetimes vary. Rotation and revocation coexist. The architecture acknowledges that compromise is not one event but a chain of possible failures.

Expiration works because it is specific.

This key.

This use.

This period.

When institutions become vague—“your account expires,” “your eligibility expires,” “your identity must be renewed”—they risk hiding which layer actually needs fresh evidence.

The precision of security language offers a better habit.

Do not ask whether the person should expire.

Ask whether this bearer credential should remain useful for another hour.

Do not ask whether the company should be continuously relicensed in the abstract.

Ask which operating assumptions can become stale and how often they deserve review.

Do not ask whether every secret should rotate every ninety days.

Ask how compromise occurs, how it is detected, how renewal happens, and what damage an undetected copy can do while it remains valid.

A key must die because secrets have afterlives.

Once copied, they can continue acting long after the legitimate holder forgot they existed.

The clock is not there because time breaks the mathematics.

It is there because time gives hidden compromise room to work.
