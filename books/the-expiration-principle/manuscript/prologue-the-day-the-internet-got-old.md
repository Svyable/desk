# The Day the Internet Got Old

On September 30, 2021, an old certificate reached the end of its life.

Nothing had happened to the mathematics inside it. No attacker had cracked its key that morning. No cable had been cut. No server room had flooded. The certificate had not become physically defective during the night. It was the same sequence of digital information at 9:59 UTC that it had been at 10:01.

At 10:01, however, one of the dates inside it was in the past.

The certificate was called DST Root CA X3. It belonged to a chain of trust used by Let’s Encrypt, the nonprofit certificate authority that had helped make encrypted web connections ordinary rather than exceptional. For years, Let’s Encrypt had arranged its certificates so that a vast collection of browsers, phones, computers, appliances, and other devices could find a trusted path from a website’s certificate back to a root certificate already installed on the device. DST Root CA X3 was part of that compatibility story.

Then the root expired.

For most people using modern software, the web did not suddenly disappear. Let’s Encrypt had its own newer root, ISRG Root X1, and current operating systems and browsers knew how to trust it. The transition had been planned. Compatibility work had been done. There were technical details that made the story more complicated than the simple sentence “the root expired and old devices broke.” Some clients could still build a valid chain in ways that surprised people who understood the textbook version of certificate validation. Others could not. The point was not that the entire internet failed at once.

The revealing part was narrower.

There were devices that could still speak the language of the web, still reach the server, still receive the bytes, still perform the cryptographic operations, and yet could no longer accept the proof they were being shown. The content had not necessarily changed. The server had not necessarily changed. The relationship between the device and the claim had changed because time had passed.

A date had become a security event.

Engineers who manage certificates know this feeling too well. Outside that world, expiration is easy to mistake for clerical housekeeping. A certificate is issued; eventually somebody renews it. The expiration date seems like a label attached to the real object.

It is not.

The date is part of the object.

A digital certificate is a claim with a lifetime. It says, roughly, that a certain public key is associated with a certain identity or domain, and that the issuing authority is willing to stand behind that binding during a defined interval. The dates do not prove the claim is false after the interval. They say the old proof is no longer sufficient. If you want the trust relationship to continue, somebody has to produce fresh evidence in an acceptable form.

That distinction is easy to miss because human beings are accustomed to things expiring for physical reasons. Milk spoils. Batteries discharge. Flowers wilt. Steel rusts. Bodies age. The world is full of processes that degrade without consulting a calendar.

A certificate does not rot.

We make it expire.

We do that because the world around the certificate can change even when the bits do not. A private key can be stolen. Control of a domain can change hands. A validation procedure can turn out to have been inadequate. A company can disappear. A certificate authority can make a mistake. Cryptographic practice can improve. A piece of evidence collected years ago can become a poor basis for a decision today.

Time does not damage the certificate. Time damages our confidence that the circumstances behind the certificate are still the same.

That is a very different idea.

It also turns out to be everywhere.

The Domain Name System, one of the basic pieces of the internet, lets information be cached for a specified period called a time to live. A resolver that has recently learned where a domain name points does not have to ask the authoritative source again immediately. Remembering saves time and traffic. Remembering forever would be a disaster. Addresses change. Servers move. Records are corrected. The cached answer is useful precisely because it is allowed to become too old to trust.

Networks lease addresses to devices. Authentication systems issue access tokens that expire. Web sessions end. Cloud credentials rotate. Temporary files disappear. Caches evict old entries. Distributed systems use leases to decide whether another machine still has the right to act as a leader or hold a lock. In each case, the clock is doing work that could otherwise require a perfect revocation system or permanent global memory.

The same design move appears outside computing, but it hides behind different words.

A patent has a term. An option has an expiration date. A lease ends unless extended. A passport remains valid for a period and then must be replaced. An emergency declaration may require periodic continuation. A gift card may be protected from expiring too quickly. A drug receives an expiration date supported by stability testing. A regulator can require records to be retained for a period and then destroyed. A professional license can require renewal. A temporary immigration document can expire even when the underlying legal status is more complicated than the date printed on the card.

These do not all mean the same thing. The expiration of a carton of food, the expiration of a constitutional emergency power, and the expiration of a cryptographic credential are not one phenomenon merely because English uses the same word. Their consequences differ too much for that.

But they share a design question.

How long should an old answer continue to count?

The answer is rarely obvious.

A longer lifetime reduces the burden of renewal. It also increases the period during which a stale condition can survive. A shorter lifetime forces the system to ask again more often. That can improve freshness, but only if asking again actually discovers something new.

Password policy offers a useful warning. For years, many organizations required employees to change passwords every thirty, sixty, or ninety days. The rule had an intuitive logic. If an attacker had somehow learned a password without anyone noticing, the stolen secret would eventually stop working.

The trouble was human behavior. People asked to invent and memorize new secrets on a schedule did what people often do when a security policy repeatedly imposes a cost on them: they adapted to the policy rather than to the threat. They made small predictable changes. They chose memorable patterns. They wrote passwords down. They complied.

Modern guidance from the U.S. National Institute of Standards and Technology no longer recommends arbitrary periodic password changes when there is no evidence of compromise. The current logic is almost an inversion of the old one. If you know or reasonably suspect that the secret has been compromised, change it. Otherwise, forcing a change merely because a date arrived can create work without creating security.

The calendar is not a substitute for information.

This is the first limitation on the expiration principle, and perhaps the most important one. A system improves itself through renewal only when renewal rechecks something that matters. If the same weak claim is rubber-stamped every year, the date is ceremony. If the same policy is automatically renewed because nobody wants the political cost of ending it, the sunset clause is a label. If a person must repeatedly prove an eligibility condition that almost never changes, the renewal may be little more than an administrative obstacle course.

Dates can discipline institutions. They can also discipline the people who depend on them.

That becomes clearer when the clock moves from software into government.

Under the United States National Emergencies Act, a national emergency can terminate on an anniversary unless the president publishes and transmits a notice continuing it within the required period. On paper, this is exactly the kind of mechanism a person worried about permanent emergency power might want. Authority does not simply continue forever through inertia. The executive must take an affirmative step.

In practice, repeated renewal can become normal. The existence of a termination mechanism does not guarantee that the underlying decision receives deep reconsideration. A date can force somebody to sign a document. It cannot force somebody to think.

The same gap appears in less dramatic settings. A professional may renew a license by paying a fee and completing a requirement that meaningfully confirms continuing competence. Or the renewal may mostly confirm that the professional can navigate the renewal process. A benefits recipient may still satisfy every substantive eligibility rule and nevertheless lose assistance after missing a form. A corporation may own intellectual property that remains legally alive because maintenance fees were paid, even if the invention no longer matters commercially. A subscription may renew because a customer forgot rather than because the customer made a fresh choice.

Renewal is often presented as the opposite of inertia. Sometimes it is simply inertia with paperwork.

Still, the idea is powerful enough that engineers are deliberately making some important lifetimes shorter.

The public web has been moving toward shorter certificate validity periods. The CA/Browser Forum, the industry body whose baseline requirements shape publicly trusted TLS certificates, adopted a schedule reducing maximum certificate lifetimes in stages. Certificates issued beginning March 15, 2026 face a maximum validity of 200 days under the new schedule. That maximum falls further in later stages, reaching 47 days for certificates issued from March 15, 2029 onward.

A forty-seven-day maximum would have been operationally painful in a world where certificates were obtained through occasional manual rituals. In a world with automated issuance protocols such as ACME, it becomes plausible.

Automation changes the economics of expiration.

If renewal costs ten minutes of a human administrator’s time and a sequence of brittle manual steps, shortening a lifetime from a year to a month multiplies labor and the number of chances for somebody to forget. If software can renew automatically after revalidating control, the human burden falls. The system can afford to ask more often whether yesterday’s proof should still count.

But automation does not erase the tradeoff. It moves it.

The renewal service now has to work. The account must remain reachable. The validation path must remain functional. Clocks must be correct. Permissions must be sufficient but not excessive. Monitoring must catch failures early enough to repair them. What was once a rare clerical event becomes a continuous operational dependency.

The shorter certificate limits stale trust. It also shortens the time available to recover from broken renewal.

This is why expiry is not simply the virtue of things ending. It is a way of allocating risk through time.

A system that never expires a permission accepts more risk from old permissions that should have died. A system that expires permissions aggressively accepts more risk from renewal failures. A data-retention rule that keeps records forever accepts growing privacy, security, and accuracy risks. A deletion rule that destroys them quickly accepts the risk that future investigators, scientists, courts, historians, or victims will need evidence that no longer exists. A patent term that lasts longer can strengthen the reward for an inventor while delaying competition. A shorter term can increase circulation while weakening some investment incentives. An emergency power that dies quickly can protect against entrenchment while making long-term crisis response harder.

There is no date that solves these tensions for every system.

What the date can do is expose them.

It forces somebody to answer a question that permanent systems are allowed to postpone: when should the old state stop being the default?

That question has an unusual history because it is both ancient and newly important. Human beings have always created temporary arrangements. Seasons, debts, reigns, leases, terms of office, truces, harvest contracts, apprenticeships, and military commissions all put time around obligations and authority. Yet digital systems can now make expiration cheap, granular, and automatic at a scale that paper institutions could not.

A medieval charter could contain a term. It could not revalidate a million permissions every hour.

Software can.

That changes what is practical. It also creates a temptation to put clocks on everything merely because we can.

The temptation should be resisted.

Some things become more valuable through continuity. Historical records do not become false because they are old. Constitutional rights should not disappear because a citizen forgot to renew them. A conservation commitment protecting a slow-growing ecosystem may need to outlast the political cycle that created it. Scientific data can become more valuable decades later when new methods make old observations newly useful. A court judgment, land record, or record of state violence can matter precisely because somebody preserved it after the people originally involved had gone.

Forgetting can be a form of hygiene. It can also be a form of erasure.

The useful distinction is not temporary versus permanent. It is between states that deserve continuing presumption and states that deserve periodic proof.

That sounds abstract until a date fails.

Then the abstraction becomes a phone that cannot open a website, a prescription discarded, a family discovering that a benefit stopped, a company racing to renew a credential, an investor watching an option collapse toward expiry, a generic-drug maker waiting for exclusivity to end, a traveler standing at an airport counter with a passport that will be valid throughout the trip but not long enough for the destination’s entry rule, or a government deciding whether an emergency declared years ago should continue for one more year.

Different systems. Different stakes. The same uncomfortable question.

Why should yesterday’s permission still be good today?

On September 30, 2021, some old devices found themselves on the wrong side of that question. Their software still knew how to communicate. Their hardware still functioned. The world had simply moved its trust forward without them.

The certificate had done exactly what it had been designed to do.

It ended.
