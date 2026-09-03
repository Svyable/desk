# Trust on a Timer

The lock icon in a browser looks permanent.

It is not.

Behind the familiar sign of an encrypted connection is a chain of claims that exists for a limited time. A website presents a certificate. The certificate contains, among other things, names, a public key, an issuer, and a validity period. The browser decides whether the certificate fits the rules of a trust system that reaches back toward authorities the browser or operating system already accepts.

The system works because nobody has to personally meet the website operator.

It also works because the evidence is not trusted forever.

That second part is becoming more important.

Publicly trusted TLS certificates have been getting shorter. Under the CA/Browser Forum’s current Baseline Requirements, subscriber certificates issued from March 15, 2026 until March 15, 2027 may not exceed 200 days of validity. From March 15, 2027, the maximum drops to 100 days. From March 15, 2029, it drops to 47 days.

The same schedule tightens how long certain validation data may be reused. By 2029, domain-name and IP-address validation data used for issuance will have a maximum reuse period of ten days.

These are not aesthetic changes. They express a view of trust.

A certificate is not simply a cryptographic object. It is the product of checks performed at a point in time. The issuing authority has established, through approved methods, that a requester controls or is authorized with respect to a domain or address. The certificate packages the result into something millions of clients can evaluate automatically.

The older the certificate becomes, the older the evidence behind it becomes.

That does not mean the evidence is wrong. It means the system has gone longer without asking again.

Long certificate lifetimes once had an obvious operational appeal. Obtaining and installing a certificate could be manual, awkward, expensive, and easy to neglect. If the credential remained valid for years, administrators did not have to revisit the process often. The low renewal frequency reduced work.

It also created a long period during which mistakes and changes could persist.

A domain might change control. A private key might be copied. Validation practices could improve. A certificate could contain information that was correct when issued and less reliable later. Revocation mechanisms exist, but revocation on the public web has always been operationally more complicated than the simple word suggests. A system that relies entirely on finding and revoking every stale credential asks a lot of detection, distribution, and client behavior.

Short validity provides another defense.

Even if nobody revokes a credential, time eventually does.

The argument resembles the logic of a lease. You can grant temporary authority and periodically re-establish the basis for it rather than trusting an original decision indefinitely.

That sounds like an unambiguous security improvement until somebody has to renew millions of certificates.

The web did not become capable of much shorter certificate lifetimes because human administrators suddenly became more attentive. It became capable because renewal could be automated.

The Automatic Certificate Management Environment, standardized as ACME, turned certificate issuance and renewal into a protocol rather than an office ritual. Software can create an account with a certificate authority, demonstrate control in prescribed ways, request certificates, install them, and renew them without a person manually repeating every step.

Let’s Encrypt built its service around this idea and made ninety-day certificates normal for a huge portion of the web long before industry-wide maximums reached the schedule now being adopted. The short lifetime and the automation were not separate policies. They were one design.

Remove the automation and the ninety-day credential becomes an administrative nuisance.

Remove the short lifetime and the automation loses part of its security value because old credentials can remain accepted for much longer.

Together they change the meaning of renewal.

This is where expiration begins to look less like a date and more like a sampling rate.

The system is asking, at intervals, whether the basis for trust still holds.

In older administrative systems, the cost of asking dominates. Renewing a paper license might require a form, a clerk, a fee, a photograph, a stamp, a trip, and days of processing. Institutions stretch lifetimes because every renewal is expensive.

Software can make asking almost free.

Almost.

The last word matters because the question still has to be answered by something real. A validation server must be reachable. DNS or HTTP challenges must work. Account credentials must be managed. Automation must be correctly configured. Renewal has to happen early enough that a transient failure does not reach the expiration boundary. Monitoring has to notice failures. New certificates have to be deployed to the right machines. Old ones have to stop being used. The system must survive changes in topology, ownership, firewalls, proxies, APIs, storage, permissions, and software versions.

The human task did not disappear. It moved from performing each renewal to maintaining the renewal machine.

That is usually an enormous improvement. It is also a concentration of responsibility.

A company with ten thousand certificates no longer needs ten thousand successful manual reminders. It needs an automated system that keeps working.

When it stops, the clock becomes very loud.

Certificate outages have an almost comic quality to people outside infrastructure teams because they can take down systems that are otherwise perfectly healthy. The application is running. The server is connected. The database is available. The code is correct enough. Yet users receive warnings or clients refuse to connect because a time-bounded trust object crossed its boundary.

The outage feels artificial.

In one sense, it is. Humans chose the boundary.

In another sense, that artificiality is the entire point. Security systems consist largely of artificial rules designed to constrain what computers are willing to accept. A browser that cheerfully ignored an expired certificate because the server “seems fine” would discard one of the few reliable limits built into the credential.

The frustration at expiration day is really frustration with an earlier maintenance failure.

A certificate that expires at noon rarely creates an outage because noon is inherently dangerous. It creates an outage because the system reached noon without completing a transition that should have happened sooner.

This makes certificates an unusually clear example of good expiration design.

The intended operating state is overlap.

The current certificate remains valid while the next certificate is obtained and installed. The replacement can be tested before the old one stops working. The expiry date is the back wall, not the appointment time.

Human systems often get this wrong. They treat the expiration date as the day renewal begins.

Anyone who has discovered a passport is too close to expiry for an upcoming trip recognizes the difference. So does a driver whose license renewal notice disappeared in the mail. So does a benefits recipient who learns after a missed deadline that a case has closed. In those systems, renewal may be possible in advance, but the interface, reminders, processing time, and human habits do not always make early transition the default.

Machines are better at being nagged continuously.

That is one reason short-lived machine credentials can be humane in a way that short-lived human credentials are not. A daemon does not resent renewing every day. It does not have a sick child. It does not lose a letter under a pile of unopened mail. It does not have to take unpaid time off work to visit an office.

Automation changes the moral character of expiration because it changes who pays the renewal cost.

When the holder is software, shorter lifetimes can reduce stale authority without repeatedly taxing human attention.

This is especially important for delegated permissions.

Imagine an application that needs temporary access to a user’s files. Giving it a credential that never expires means the user’s old consent can remain operational long after the reason for the access has disappeared. A time-limited token narrows the period. The application can obtain another token through an approved mechanism if the relationship continues.

The same logic appears in cloud infrastructure. Workloads can receive short-lived credentials rather than long-lived static secrets embedded in files. Temporary access can be scoped to a task. A compromised credential may remain useful to an attacker for a shorter period. The system can rotate authority instead of treating keys as heirlooms.

Again, the benefit is conditional.

If the renewal mechanism quietly grants a new credential forever without rechecking anything meaningful, the short lifetime has reduced the usefulness of a stolen old token while doing little to reconsider the underlying authorization. That can still be worthwhile. But it is a different claim from saying the system has refreshed trust.

Fresh credential material and fresh authorization are not the same thing.

This distinction is easy to blur because both happen during renewal.

A certificate authority can issue a new certificate after revalidating domain control while reusing some other previously collected information under applicable rules. An identity system can issue a new access token because a refresh token remains valid. A cloud service can rotate keys while leaving the attached permissions unchanged. A professional license can be reprinted with a new date after a fee is paid even if competence was never examined.

The timestamp is new.

The evidence may not be.

That is why the CA/Browser Forum’s schedule addresses not only certificate validity but validation-data reuse. Shortening the visible certificate lifetime while allowing the underlying proof to be recycled for years would weaken the claim that the system is asking again.

The design is moving two clocks.

One clock limits how long a particular certificate can be presented.

Another limits how long prior evidence can substitute for fresh validation.

This is a sophisticated form of expiration because it recognizes layers. The outer object can be new while the inner claim is old.

Human institutions often renew the outer object and leave the inner evidence untouched.

A card gets a new date. A permit gets a new sticker. A program receives another annual authorization. A contract rolls forward. The ritual creates administrative freshness without substantive freshness.

Sometimes that is fine. There is no reason to perform a full investigation every time a low-risk object is renewed. Reusing reliable evidence saves effort.

The problem begins when the institution starts pointing to the fresh date as proof that the underlying state received fresh scrutiny.

Certificates show how to be more honest about that.

Different facts can have different reuse periods.

Different risks can have different clocks.

The whole trust relationship does not need to be treated as a single object that is either ancient or newly born.

This matters beyond the web.

A professional credential might require identity information to be reverified rarely, continuing education to be demonstrated more frequently, and disciplinary status to be monitored continuously. A benefits program might know income automatically from recent records while needing an address update only when it changes. A drug’s packaging might remain intact while its chemical stability becomes the limiting factor. An immigration system might distinguish the durability of legal status from the validity of the document used to prove it.

One date is often a convenience placed over several rates of change.

Technical systems increasingly have the ability to separate them.

The result can feel more complicated. It is also more accurate.

A certificate is not one thing becoming old. It is a container for claims, keys, identities, validation events, policy requirements, and trust relationships that age differently.

The move toward forty-seven-day maximum certificates is therefore not simply a preference for smaller numbers. It is a bet that the web has enough automation to make shorter evidence windows practical and that the reduction in stale trust is worth the operational demands.

That bet will be tested.

There will be organizations with fragile renewal pipelines. There will be appliances that do not expect certificates to rotate so often. There will be monitoring failures, vendor assumptions, and emergency exceptions. Every shortening of a lifetime exposes systems that had quietly treated renewal as rare maintenance.

That exposure is not automatically a reason to stop.

It is evidence that the cost of expiration does not vanish merely because software performs the keystrokes.

Some of the strongest objections to short certificate lifetimes come from exactly this concern: reliability is a security property too. A credential regime that produces avoidable outages can push operators toward dangerous workarounds, broad exceptions, or private trust arrangements that are harder to govern. A security measure that users routinely bypass is not secure simply because the policy text is strict.

The balance is subtle.

Shorter credentials reduce the period during which a stale or compromised certificate can remain valid on time alone. They force more frequent interaction with issuance systems. They encourage automation. They also make automation indispensable.

The expiration date has moved from a calendar reminder to a continuous systems dependency.

That transition tells us something important about the future of institutions.

As more administrative processes become machine-readable and automatable, durations that once reflected clerical cost can shrink. A company can reassess certain permissions nightly. A platform can issue task-specific credentials lasting minutes. A data system can apply retention policies continuously. A machine agent can receive authority only for the expected duration of a job.

The technical possibility will create pressure for human institutions to imitate machine cadence.

That should make us cautious.

A browser can evaluate a certificate every connection without feeling burden. A person cannot re-prove citizenship, disability, professional competence, residence, income, and identity every morning. The fact that a government can build an automated renewal system does not mean the person’s circumstances can be accurately or fairly revalidated at machine speed.

The lesson of web certificates is not “make everything shorter.”

It is more precise.

If the thing you fear is stale trust, shorten the period only when you can also make renewal meaningful, reliable, and cheap enough that the cure does not become the larger failure.

The web’s trust system is moving toward more frequent questions because software has made the questions affordable.

The next chapter is about what happens when the holder of the credential is a human being who gets tired of answering.
