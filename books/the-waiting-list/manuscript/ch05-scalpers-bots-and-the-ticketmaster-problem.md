# Scalpers, Bots, and the Ticketmaster Problem

The most expensive ticket in the world is the one you thought you had a fair chance to buy.

That is what makes a failed ticket sale feel different from an ordinary high price. If a concert ticket costs $800 from the beginning, a fan may hate the price, decide it is absurd, and close the browser. The market has delivered bad news cleanly. But if the ticket is advertised for far less, access is rationed through a queue, the queue freezes, the page reloads, the seat vanishes, and the same ticket appears later on a resale site at several times the original price, the experience feels like something else.

It feels as though the line itself has been stolen.

In November 2022, millions of Taylor Swift fans tried to buy tickets for the Eras Tour through Ticketmaster’s Verified Fan presale. Ticketmaster later said that more than 3.5 million people had registered for Verified Fan, that about 1.5 million received codes, and that roughly 2 million were placed on a waiting list. The company also reported 3.5 billion system requests during the sale, four times its previous peak.

Those numbers became famous because they were attached to an unusually famous artist. Structurally, though, the event was ordinary.

A scarce good was priced below the level at which demand would have disappeared. The seller did not want the entire allocation decided by willingness to pay. Instead, access was mediated through registration, eligibility, digital identity, queue position, purchase limits, anti-bot systems, and the capacity of Ticketmaster’s infrastructure. In other words, a market had been replaced by a mechanism.

Then the mechanism failed in public.

Ticketmaster attributed the overload partly to bot attacks and to traffic from people who did not have Verified Fan codes. That explanation matters, but it should be treated as what it is: the company’s account of what happened inside its own system. The public could see the frozen queues and error messages. Ticketmaster could see the server logs, traffic patterns, account histories, and internal controls. The party with the best data was also the party explaining its own failure.

That asymmetry is one reason the Eras Tour presale became more than a bad day for a website.

It turned into an argument about who controls the line.

The modern ticket queue is not a line in the physical sense. Nobody can stand beside it and watch who arrived first. There is no rope, no numbered paper ticket, no visible clerk. The queue is software. The same company may control the registration rule, the authentication system, the queueing software, the inventory feed, the purchase limits, the payment process, and part of the resale market that follows.

The system can therefore look transparent while remaining difficult to inspect.

A fan sees a progress bar.

The platform sees an allocation problem.

That difference is the chapter.

A physical queue answers a narrow question: who came first? A digital ticketing system answers many questions at once. Who is a real person? Who is eligible? How many devices can one person use? How many tickets may one account buy? Which seats should be released now and which held back? Should some customers receive presale access because of a credit card, a fan-club membership, a season-ticket relationship, a venue arrangement, or a promotional partnership? Should prices change as demand becomes visible? Should suspicious accounts be slowed, challenged, or blocked? What happens when a user loses a seat during checkout? What happens when inventory reappears?

Every answer changes who gets in.

Verified Fan was meant to address one of the hardest parts of this problem: distinguishing ordinary fans from brokers and automated buyers competing for the same inventory. That sounds like a technical task. It is also a policy choice.

Any anti-bot system must decide what counts as suspicious behavior. A buyer who refreshes quickly, uses several devices, shares a household network, travels while purchasing, or tries repeatedly after an error can look unlike the platform’s model of an ordinary purchaser without actually being a broker. A system tuned too loosely lets professional buyers through. A system tuned too tightly can exclude legitimate fans. The platform must choose which kind of error it fears more.

The existence of bots is not speculative.

Congress passed the Better Online Ticket Sales Act in 2016, making it unlawful to circumvent security measures, access controls, or ticket-purchase rules used by online ticket issuers for covered events. In 2021, the Federal Trade Commission brought its first cases under the law against three ticket brokers. The FTC alleged that the defendants used automated ticket-buying software, concealed IP addresses, created hundreds of fictitious Ticketmaster accounts and credit cards, and evaded posted purchase limits. The defendants agreed to orders requiring millions of dollars in civil penalties, although much of the judgments was suspended based on ability to pay.

The enforcement record establishes two things at once.

First, organized circumvention is real. Professional resellers have used automation and identity tricks to acquire tickets at a scale ordinary purchasers cannot match.

Second, a law against bots does not eliminate the economic reason bots exist.

That reason is the gap between the primary price and the resale price.

Suppose an arena has 20,000 seats and 200,000 people willing to buy them. Suppose the artist and promoter choose a face value that leaves many buyers willing to pay more. The primary sale contains an embedded prize: the right to buy an underpriced asset. Whoever wins the ticket may attend the concert, give the ticket away, or resell it. If resale is possible, the difference between the original price and the market-clearing price becomes a bounty for anyone who can acquire inventory faster or more reliably than everyone else.

The bot did not create that bounty.

The bot competes for it.

This distinction is easy to miss because the scalper is visible while underpricing is not. When a $150 ticket appears for $900 on a resale site, the reseller looks like the person who caused the $750 difference. Economically, the difference already existed in the willingness of another buyer to pay $900. The reseller captured it.

That does not make botting harmless. A buyer who evades purchase limits or floods a sale with automated requests can convert a lottery-like opportunity into an arms race. The point is narrower: removing the bot does not make 180,000 disappointed buyers disappear.

Scarcity survives enforcement.

This is where the moral argument around ticketing becomes unexpectedly useful for the rest of this book.

People often want three things from a scarce-ticket system that cannot all be maximized at the same time.

They want low face values.

They want the tickets to go to genuine fans rather than professional resellers.

And they want a simple, open, fair chance to buy.

The first goal creates excess demand. The second requires the seller to define and identify a preferred kind of buyer. The third resists exactly that sort of discretion.

A pure auction would solve some of the problem. Let everyone bid. Raise the price until demand equals supply. The queue largely disappears because price does the rationing.

Many fans would consider that outcome less fair, not more.

The reason is obvious. An auction gives the best seats to the people willing and able to pay the most. It transforms a frustrating race for access into a cleaner contest of purchasing power. The mechanism becomes easier to understand and harder to game through bots, but it also abandons the idea that a teenager with $150 should have any meaningful chance against an adult willing to pay $2,000.

The dislike of dynamic pricing comes from the same place.

If a seller raises prices as demand becomes visible, some of the value that would have gone to a reseller stays with the artist, promoter, or ticketing system instead. Economists can reasonably describe this as reducing arbitrage. Fans may reasonably describe the same process as the seller discovering how desperate they are and charging accordingly.

Both descriptions can be true.

The argument is not really about whether price conveys information. It does. The argument is about whether purchasing power is the allocation principle people want for culture.

Concert tickets are not kidneys. Nobody dies because a stadium sold out. That lower moral temperature makes ticketing unusually useful as a laboratory. We can see the mechanism without being overwhelmed by the stakes.

And the mechanism has layers.

Start with the artist.

An artist may prefer prices that make attendance possible for a broad fan base, preserve a certain relationship with fans, or avoid the appearance of extracting every available dollar. The artist may also want to maximize revenue, fund an expensive production, reward fan-club members, serve sponsors, hold tickets for guests, or reserve inventory for later sales.

Then comes the promoter, which takes on financial and operational risk around the event.

Then the venue, which controls a scarce physical space and may have contractual relationships affecting ticketing.

Then the primary ticketing platform, which provides technology and distribution.

Then the secondary market, where tickets can be resold.

Sometimes these layers are owned or controlled by separate companies. Sometimes they are connected.

That connection became central to the political response after the Eras Tour failure.

On January 24, 2023, the Senate Judiciary Committee held a hearing titled “That’s the Ticket: Promoting Competition and Protecting Consumers in Live Entertainment.” The hearing did not settle what caused the presale collapse. It widened the question. Senators and witnesses examined competition in ticketing, fees, venue relationships, resale, and the position of Live Nation Entertainment, Ticketmaster’s parent company.

That distinction matters because a queue can fail for technical reasons inside a competitive market, and a dominant company can operate a technically excellent queue. Reliability and competition are related only indirectly.

It would be convenient to treat the Eras Tour crash as proof of monopoly. It is not.

A website can fail under extraordinary load because capacity planning was wrong, because defensive systems were overwhelmed, because demand was misestimated, because attackers created noise, or because several of those things happened together. Competition might create stronger incentives to improve. It might also fragment inventory across weaker systems. The observed crash alone cannot tell us which market structure caused it.

The antitrust argument was broader.

In May 2024, the U.S. Department of Justice and a group of states sued Live Nation Entertainment and Ticketmaster, alleging monopolization and other unlawful conduct across parts of the live-concert industry. The complaint described a vertically integrated company operating in concert promotion, venue relationships, and ticketing, and alleged that this position allowed it to impede competition.

Those were allegations, not findings.

That legal distinction is especially important now because the case moved again. After extensive litigation, the parties announced a settlement in March 2026. In June, the Justice Department filed a proposed final judgment and a competitive impact statement under the Tunney Act process. As of this writing, the relevant point is not that the government “proved” every allegation in the 2024 complaint. It did not take the case to a final merits judgment establishing them all. The point is that the dispute produced a negotiated set of remedies subject to judicial review.

That is a different kind of evidence.

A complaint tells us what the government believed it could prove.

A settlement tells us what the parties were willing to accept to resolve litigation, under a legal process that still requires a court to determine whether the proposed judgment serves the public interest.

For a book about allocation systems, the useful fact is not the drama of the lawsuit. It is the institutional question underneath it: what happens when the company running the queue also occupies powerful positions in the markets around the queue?

Imagine a grocery store that not only owns the checkout system but also promotes many of the products, controls access to many of the shelves, and operates a marketplace where scarce items can be resold. Even if every component is lawful and competently run, the design questions multiply. Who can switch providers? Who controls the customer data? Who sees demand first? Which rules are imposed by the store, which by suppliers, and which by regulators? Can a rival offer a genuinely different mechanism if it cannot reach the same inventory?

Ticketing is more complicated than that analogy, but the governance problem is similar.

A queue is easier to trust when the rule is visible and the institution enforcing it can be challenged.

That is why “first come, first served” survives despite its flaws. We understand it. We can often see violations. The person who arrived at 9:00 can object when the person who arrived at 9:30 is served first.

Digital allocation weakens that social audit.

When a user spends forty minutes watching a progress bar, then receives an error, there may be no intelligible explanation for what happened to the user’s priority. The person does not know how many buyers were ahead, how many were bots, whether inventory was being released in tranches, whether seats were held for other channels, whether the queue position was stable, or whether a technical retry changed anything.

The system asks for trust precisely where ordinary observation has disappeared.

That does not mean the platform should disclose its anti-fraud methods in enough detail to help brokers defeat them. Security systems cannot publish every rule. A ticketing system that announced exactly which behavior triggers bot detection would teach sophisticated resellers how to imitate legitimate buyers.

Transparency therefore has a limit.

The better question is whether a system can be auditable without being fully legible to attackers.

Banks do this. Elections do this. Online advertising systems try to do this. High-stakes allocation systems increasingly need the same distinction between public rules and protected implementation details.

A ticket seller can publish the categories of inventory, the purchase limits, the eligibility rules, the treatment of failed transactions, the existence of dynamic pricing, and the principles by which suspicious activity is handled without publishing the signature of every fraud detector. It can provide post-event reporting about sale volume, blocked traffic, queue failures, and inventory releases. Regulators can obtain more detailed information under confidentiality. Independent auditors can test claims the public cannot verify directly.

The important thing is not to confuse secrecy with sophistication.

A mechanism nobody outside the operator can inspect may be secure. It may also be arbitrary. The user cannot tell the difference from the progress bar alone.

The secondary market adds another complication because resale is both the symptom and, sometimes, the repair.

Consider a fan who buys two tickets months before a concert and later cannot attend. A resale market creates flexibility. The ticket can move to someone who values it rather than becoming an empty seat. That is socially useful.

Now consider a broker who acquires hundreds of tickets only because the broker expects scarcity to drive prices up. The same resale infrastructure becomes a channel for arbitrage.

The platform must decide whether those two uses should be treated differently.

Rules against speculative resale can protect primary allocation but also trap ordinary buyers. Strict identity-linked tickets can make resale difficult but may reduce scalping. Price caps can limit windfall profits but may push transactions to less transparent channels. Free transfer can help families and friends but also make broker inventory easier to move. Every anti-scalping rule has a constituency of legitimate users it can inconvenience.

Again, there is no neutral setting.

The easiest policy to describe is “ban the bots.” It is worth doing. Automated circumvention can make a nominally open sale meaningless.

But bot enforcement is maintenance, not mechanism design.

If demand for a scarce event remains ten times supply, the institution still has to choose how to disappoint nine people out of ten.

It can do that by price.

It can do it by lottery.

It can do it by a queue.

It can do it by membership, purchase history, geography, sponsorship, fan-club status, credit-card affiliation, or some composite score that tries to identify “real fans.”

Each method creates a different black market in advantages.

A queue rewards speed, preparation, connectivity, and sometimes automation.

A lottery rewards eligibility and luck.

A membership rule rewards prior participation or willingness to pay for membership.

A fan-score system rewards whatever behavior the platform has chosen to recognize as fandom.

An auction rewards money.

When the prize is valuable enough, people invest in the thing the rule rewards.

This is one of the deepest lessons of waiting lists: the allocation rule does not merely sort applicants. It changes their behavior before they enter the line.

If early arrival matters, people camp out.

If forms must be filed quickly, people hire help.

If purchase history matters, people buy strategically.

If identity verification blocks brokers, brokers manufacture identities.

If ticket limits bind, brokers create accounts.

If resale profits are large, software engineers are paid to find edges.

The mechanism creates an economy around itself.

That economy can become more sophisticated than the institution it is attacking.

This is why the Ticketmaster problem is not a story about one website being unable to handle Taylor Swift fans. It is a compact example of a broader design failure that appears whenever an institution tries to ration a valuable good without letting price do all the work.

The moment price is constrained, the institution must choose another scarce resource to ration by.

Time.

Luck.

Status.

Identity.

Need.

History.

Compatibility.

Some of those resources feel morally better than money. They are not costless.

A low-price ticket allocated through a three-hour digital queue is partly purchased with time. A Verified Fan system is partly purchased with data and prior engagement. A lottery is purchased with uncertainty. A resale ban is purchased with reduced flexibility. A dynamic-price system is purchased with cash and with the anger that comes from seeing the price move while you are trying to buy.

Good design makes those tradeoffs explicit.

Bad design hides them behind a spinning icon.

The most defensible ticket system may therefore be a hybrid, which is another way of saying that no single rule is good enough.

Some inventory can be sold at fixed prices through randomized access among verified buyers. Some can be auctioned or dynamically priced, making the market-clearing price visible rather than gifting the spread to intermediaries. Purchase limits can be enforced with identity controls. Resale can be permitted through an authorized channel with transparent fees and, if the artist chooses, limits on markups. Accessible seating and other protected inventory can follow separate rules. The operator can publish enough after-action data to let outsiders judge whether the system behaved as promised.

None of that guarantees that fans will like the outcome.

A mechanism can be fair and still deliver bad news.

That is another lesson the ticketing controversy tends to obscure. When ten people want one seat, nine people must lose. A system that promises universal satisfaction is lying. The realistic goal is narrower: people should understand the rule, the rule should serve a defensible objective, similarly situated people should be treated similarly, manipulation should be costly, and the institution should be able to explain what happened when the mechanism breaks.

The 2022 Eras Tour presale failed that last test in the most visible way possible.

Ticketmaster did eventually provide an explanation. Congress examined the broader market. Regulators had already shown that bot-driven circumvention was real. The Justice Department later challenged Live Nation-Ticketmaster’s market conduct and, by 2026, moved with the defendants toward a proposed settlement rather than a final trial judgment.

But even a perfectly competitive ticketing market with flawless servers would still face the original allocation problem.

There would still be more fans than seats.

That is why the scalper never really sits outside the waiting list.

The scalper is one of the creatures the waiting list produces.

So is the bot.

So is the fan club.

So is the presale code.

So is dynamic pricing.

They are all attempts to capture, protect, redistribute, or monetize priority in a line whose prize is worth more than the official price suggests.

The ticket market is noisy enough that these mechanisms look like commerce. Strip away the branding and the celebrity, though, and the underlying question is the same one that governs far more consequential systems:

When several people want the same scarce thing, what rule should decide who gets it?

Economists had been working on an answer long before a concert queue melted down.

Their most famous starting point did not involve tickets at all.

It involved marriage.