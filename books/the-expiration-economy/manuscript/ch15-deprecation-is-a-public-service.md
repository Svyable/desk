# Deprecation Is a Public Service

The internet is full of promises made by dead software.

A protocol survives because routers still speak it.

A cryptographic option survives because old devices still need it.

A browser behavior survives because somebody built a site around it fifteen years ago.

A programming interface survives because changing it would break applications whose authors may no longer be reachable.

Compatibility is one of computing's great social achievements.

It lets strangers coordinate across time.

The developer who writes software today can depend on interfaces maintained by people they will never meet. The user can upgrade one part of a system without replacing every other part. Businesses can invest because standards and platforms make some behavior durable.

Then durability becomes exposure.

In 2021 the Internet Engineering Task Force published RFC 8996, formally deprecating Transport Layer Security versions 1.0 and 1.1. The document described security weaknesses, the existence of stronger protocol versions, and the operational benefit of removing support for obsolete versions. Continuing to support old protocols was not harmless compatibility. It could expand attack surface, enable downgrade paths, create misconfiguration risk, and impose maintenance burden.

The internet had learned enough to withdraw a promise.

That is what deprecation means at its best.

It is not deletion by surprise.

It is public preparation for incompatibility.

The concept deserves more respect than it receives because deprecation looks negative from the outside. A feature is no longer recommended. A protocol is being retired. A version has reached end of support. The announcement sounds like a vendor taking something away.

Sometimes that is exactly what is happening.

Vendors can misuse deprecation to force upgrades, abandon customers, or remove functionality that competes with a new business model. A platform can declare an interface obsolete before developers have a reasonable alternative. “Security” can become a convenient justification for commercial churn.

Good deprecation is different.

It tells a community that continuing to depend on old behavior now imposes costs or risks that exceed the value of preserving it indefinitely, and it provides enough information and transition time for dependency to move.

That is a public service because shared infrastructure cannot modernize if every historical behavior becomes a permanent right.

The internet's success makes this difficult. A protocol deployed widely can remain in equipment nobody actively maintains. Embedded devices can live for years. Corporate systems can use configurations that are invisible until a change breaks them. A bank, hospital, factory, government agency, or household appliance may depend on behavior whose original designers assumed would be temporary.

Scale turns edge cases into constituencies.

A one-in-a-million legacy dependency becomes thousands of real users when the installed base reaches billions.

This creates the final-one-percent problem.

Moving the first ninety percent of users can be easy. They are active. They receive updates. They have engineering teams. They care about performance and security. The last ten percent may contain neglected equipment, small organizations, specialized systems, and devices whose vendors disappeared.

The last one percent can be harder than the first ninety-nine.

Yet indefinite support for that one percent can constrain everyone.

This is where retirement becomes political even in technical standards.

Who gets stranded?

Who pays for the upgrade?

How serious is the risk of continued support?

How serious is the risk of breaking compatibility?

Can old behavior be isolated rather than preserved universally?

Can gateways translate between generations?

Is the remaining usage genuine or merely traffic from forgotten automation?

Technical bodies answer these questions through evidence, consensus processes, deployment data, security analysis, implementation experience, and argument. The process can be messy because interoperability is a collective property. No single party owns the whole transition.

That makes standards an especially useful model for the expiration economy.

A private company can shut down its own internal service if leadership accepts the consequences.

Nobody can simply order the internet to stop using a protocol.

Retirement must propagate through a network of independent actors.

Artificial intelligence will create more systems with this property.

Open models can be downloaded and operated after the original developer withdraws support. Agent protocols can be implemented by many vendors. Model context formats, tool interfaces, identity standards, evaluation schemas, and data exchange conventions can become shared infrastructure.

The creator may lose the ability to complete the ending.

A published artifact can acquire an afterlife outside its publisher.

This already happens with open-source software. A maintainer can archive a project and announce that it is no longer supported. Forks may continue. Package registries may still distribute old versions. Other programs may remain dependent. Security researchers may discover vulnerabilities after the original project effectively died.

The code is immortal enough to outlive stewardship.

Open source makes exit possible for users because the artifact can be forked. It also makes ending harder for creators because release cannot be fully revoked.

That is not a contradiction.

It is the bargain.

A public artifact transfers some lifecycle control to the public.

The responsible ending therefore shifts from destruction to communication.

Mark the project archived.

Document the last supported version.

Explain known risks.

Point to maintained alternatives or successors where appropriate.

Clarify whether forks are expected or welcome.

Transfer ownership when a credible steward exists.

Remove secrets and infrastructure that should not remain active.

Preserve enough history for users to understand what happened.

The creator cannot erase every copy.

The creator can stop pretending maintenance continues.

That honesty matters because unsupported software can be worse than obviously dead software. Users interpret silence as stability. A repository that has not changed in three years may be mature or abandoned. A package that installs successfully may contain dependencies nobody monitors. A model checkpoint may still run perfectly while its safety assumptions, licenses, or deployment guidance are obsolete.

Status is information.

Deprecation creates status.

A good status signal lowers coordination cost because users do not have to infer intent from inactivity.

This principle extends to organizations. A policy can be marked superseded. A dataset can be marked historical. A dashboard can be marked no longer authoritative. A model can be removed from an approved catalog while remaining available for audit. An API can reject new registrations while serving existing users during migration.

The system moves through states instead of jumping from active to vanished.

Staged endings are useful because dependency itself needs time to die.

One pattern is to block new dependence first.

Do not let new applications call the old API.

Do not let new users choose the old plan.

Do not let new projects use the old cryptographic protocol.

Do not create new accounts with permanent credentials.

This caps the future tail while existing users migrate.

The intervention is powerful because it stops growth before forcing removal.

A system can be allowed to age without being allowed to reproduce.

That may be the safest transition state in many domains.

The biological metaphor almost writes itself, which is reason to be careful. Technical systems are not organisms. The practical point is simply that new dependencies determine future retirement cost.

Freeze creation and the problem becomes finite.

This is why package managers, platform policies, and security scanners often treat deprecated components differently from merely old ones. Old means time passed. Deprecated means the community changed its recommendation.

Age is a fact.

Deprecation is governance.

Governance needs credibility.

If every deprecation deadline is extended, users learn not to migrate. If vendors announce dates without stable alternatives, users resist. If “end of support” products receive updates forever, the boundary becomes meaningless.

A deadline that nobody believes is worse than no deadline because it creates planning theater.

Credibility often requires tolerating some pain.

At some point the old interface must stop.

That can cause incidents. A customer will discover a forgotten integration. A device will fail. An executive will ask why one more exception cannot be granted. The retirement team will face the asymmetry described throughout this book: everyone benefits from a smaller support surface, while the stranded user experiences the cost directly.

The temptation is to make the exception.

Sometimes the exception is right.

A hospital should not lose a critical capability because an arbitrary migration target mattered more than patient safety. A public service cannot casually abandon people without resources to upgrade. A safety-critical industrial system may require a specialized bridge.

The mature question is whether the exception remains local.

Can the old protocol be isolated behind a gateway rather than enabled everywhere?

Can one customer receive an extended-support environment without keeping the feature in the main product?

Can archival access be preserved without keeping full production operation?

Containment allows compassion without universalizing legacy burden.

This is an underrated form of design.

The system can acknowledge that the tail exists without forcing the entire future to carry it.

Markets create specialized support businesses around this need. Companies maintain old software, provide extended security patches, emulate legacy environments, repair discontinued equipment, and help customers migrate. The expiration economy does not eliminate the long tail.

It gives the tail a price.

That price can improve decisions. A customer who truly needs ten more years of support may be willing to pay for the specialized service. A customer who merely prefers not to migrate may change behavior when continuation is no longer subsidized by every other user.

Pricing turns hidden cross-subsidy into choice.

The principle has limits in public goods and rights. Essential services cannot always be allocated by willingness to pay. Still, the economic structure is worth noticing.

Indefinite backward compatibility often means current users subsidize old dependence through slower development, larger security surfaces, and greater complexity.

Deprecation is the process by which the subsidy is questioned.

This will become especially important in AI because model behavior itself can become a compatibility surface.

Users can build workflows around how a particular model responds. Prompts encode quirks. Agents depend on output formats. Companies validate applications against specific failure patterns and thresholds. A new model can be objectively better on broad evaluations and still break a downstream system because the old model's behavior became part of the interface.

Model retirement will therefore resemble protocol retirement.

The provider cannot say only: the new model is smarter.

It has to ask: what did people depend on?

Structured output?

Latency?

Context length?

Refusal behavior?

Tool-call format?

Pricing?

Specific errors they learned to route around?

Behavior is an API even when nobody documented it as one.

This creates a danger for AI providers. Supporting every historical model indefinitely could become enormously expensive and unsafe. Replacing models too quickly could destabilize customers and erase user trust.

Deprecation is the middle institution.

Announce change.

Document behavior.

Provide overlap.

Measure migration.

Preserve auditability.

Stop new dependence.

Set a credible end.

The sequence does not need to become a branded framework. It is simply what responsible withdrawal looks like when other people built on your promise.

The internet survived decades of change partly because technical communities developed norms for making change legible. Versions, standards tracks, obsolescence notices, deprecation warnings, compatibility modes, migration guides, feature detection, and negotiated transitions all exist because permanence was never fully possible.

Artificial intelligence is often presented as if it arrived outside that history.

It did not.

The more AI becomes infrastructure, the more it inherits infrastructure's oldest problem.

How do you stop supporting yesterday without breaking tomorrow?

Deprecation is one of the few institutions that answers honestly.

It says the old thing still exists.

It also says the future no longer owes it immortality.

RFC 8996 is especially useful because the document preserves the costs on both sides. TLS 1.0 and 1.1 carried technical limitations into modern security stacks: older cipher requirements, lack of support for newer recommended cipher constructions, reliance on SHA-1 in parts of legacy operation, and an expanded set of behaviors that implementations and administrators had to keep configuring correctly. Removing the versions could simplify products and reduce attack surface.

Yet the RFC also acknowledged that systems unable to support TLS 1.2 or later would stop interoperating with endpoints that followed the deprecation. The ending had a constituency.

That is what makes deprecation more than a security announcement. It is a decision about whose compatibility cost the ecosystem will continue to socialize.

Imagine a large software library that keeps three old protocol versions enabled by default because a shrinking installed base still needs them. Every current user receives the enlarged code path. Every administrator receives more configuration states. Every security review has to ask whether older behavior remains enabled. The last users enjoy compatibility whose cost is distributed across people who may never use the old protocol.

Turning support off reverses the distribution. The ecosystem becomes smaller and safer to maintain; the remaining legacy users receive concentrated migration pain.

Neither distribution is neutral.

Good deprecation makes the choice visible enough to debate.

Commercial vendors often fail at exactly this point because they control both the evidence and the timetable. A company can announce that an old product creates unbearable maintenance burden without showing enough information for customers to judge the claim. It can set a short deadline because the new product has higher margins. It can call a pricing migration a security migration. The language of lifecycle management becomes convenient cover for extracting value from captivity.

That is why public-service deprecation needs credibility beyond the vendor's desire to move on.

The reasons should be legible. The replacement should be real. The notice should match the difficulty of migration. Data or state should be portable where the product permits it. Essential users should not discover the ending from an outage. Exceptions, if granted, should not quietly recreate indefinite universal support.

The quality of the ending is evidence about the quality of the original promise.

Standards bodies provide one model because they write down the incompatibility rather than hiding it. A deprecation document can say, in effect: this old behavior has costs; these systems will be affected; the ecosystem should move. The record survives after the protocol's recommended life ends, giving future implementers a reason rather than an unexplained absence.

That last property is easy to overlook. Deprecation produces memory about why support ended.

Without it, a future engineer can rediscover the old capability and wonder why it was removed. A new vendor can re-enable an unsafe option because the historical rationale vanished. A model-retirement team can repeat an old failure because the evaluation that justified withdrawal was not preserved.

Good endings leave reasons.

The reason is not an active dependency. It is part of the archive.

This will matter enormously for AI models because behavior changes can be hard to describe completely. A model may be retired for safety, reliability, cost, licensing, infrastructure, product strategy, or the existence of a superior successor. Downstream users need more than a date. They need enough behavioral and operational information to understand what migration means.

A model provider that says “use the new version” without preserving testable documentation of the old one forces every customer to rediscover compatibility risk independently. A provider that retains evaluation artifacts, migration notes, and a period of overlap makes retirement a shared engineering process.

The expiration economy does not ask technology companies to love the past.

It asks them to take responsibility for the dependencies their past success created.

There is a useful difference between deprecated and obsolete.

Deprecated means the authority or community responsible for the system is telling users not to create new dependence. Obsolete means the thing has fallen far enough out of the supported future that continued use should no longer be treated as normal. The terms are not universal across every standard or product, but the distinction in state matters.

A system can be deprecated for years while still operating safely enough for migration. It can remain preserved indefinitely after it becomes obsolete as an active choice. The transition is about authority, not physical disappearance.

That makes deprecation one of the rare institutions able to separate “still exists” from “still endorsed.”

AI needs that separation badly.

A model checkpoint can remain downloadable after the developer no longer recommends it. A benchmark can remain historically important after it stops measuring frontier capability. A prompt pattern can remain documented after the provider stops guaranteeing the behavior it relied on. A model can remain in an audit archive after production access is revoked.

Without visible state, users infer endorsement from availability.

That inference becomes dangerous when distribution is cheap. A model file, package, or protocol can remain one command away from use long after the surrounding institution stopped maintaining the assumptions that made it safe.

Future tooling should therefore carry deprecation status as seriously as version number. Registries can surface it. Dependency scanners can warn on it. Agent builders can refuse new dependence on it by policy. Procurement systems can treat it as a lifecycle event. Historical systems can preserve the artifact while active systems stop normalizing it.

The most important effect is cultural.

Deprecation gives creators permission to say something difficult before the shutdown date: this still works, and we are still asking you to leave.

That sentence respects reality better than either extreme.

It does not pretend the old system already vanished.

It does not pretend working today creates a right to work forever.