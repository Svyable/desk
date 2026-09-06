# Machines That Follow Links

The first great readers of the Web were not people.

They were crawlers.

A search engine's crawler follows links because links expose the graph. It retrieves a page, discovers addresses inside it, adds some of those addresses to a queue, retrieves more pages, and gradually constructs an index of a network no central publisher has described completely.

This is one of the strangest consequences of hypertext.

A publishing feature designed to help one reader move between documents became the mechanism software used to discover the Web itself.

The pages did not need to register individually with a global catalog before the crawler could find them. A link from an already known page could reveal a new one. The graph bootstrapped discovery.

Human authors became unpaid cartographers for machines without intending to.

Every ordinary outbound link helped define a frontier.

The crawler changed the meaning of publication because “reachable by link” became close to “discoverable by machine,” though never identical. Search engines could miss isolated pages. Sites could block or discourage crawling. authentication could hide resources. Dynamic applications could conceal states. Sitemaps and submission tools developed to supplement link discovery.

Still, crawling established a powerful pattern.

The machine could use the same relation the human used and reinterpret it for a larger task.

That pattern is returning with agents.

An AI agent navigating software on behalf of a user can treat links as possible actions. It may open a source, inspect a product, visit documentation, switch from a ticket to a code repository, follow a calendar invite, or move from a dashboard to the underlying record.

The visible hyperlink remains a human affordance.

The underlying address becomes a machine affordance too.

This dual use is important because it lets existing digital environments become partially automatable without being rebuilt from scratch for agents.

A Web page already contains action possibilities encoded in links and forms.

An application already exposes deep links to meaningful states.

Documentation already contains cross-references.

Support workflows already move through URLs.

The agent inherits an environment humans spent decades making addressable.

This is not enough for reliable automation.

A person can interpret ambiguity the system never encoded. “Billing” may be a navigation link, a policy document, an invoice screen, or a marketing page. A human uses visual context, goals, memory, and caution. An agent needs enough of that context to avoid treating every reachable edge as an appropriate next action.

The difference between crawlable and actionable is therefore crucial.

A search crawler can visit a page with relatively limited authority. It mainly retrieves public representations. An agent may have credentials, purchase authority, file access, code-write access, or the ability to communicate as the user.

Following the wrong edge can have consequences.

The link has moved from discovery into agency.

That raises a question Web architecture has been preparing us to answer for decades: what should cross a trust boundary when one resource refers to another?

Browsers already distinguish origins. They isolate sites. They constrain scripts. They ask for permissions before exposing powerful features. They validate certificates. They mediate downloads. They prevent one site from casually reading private data from another.

These protections exist because the Web is a graph of mutually untrusted publishers.

Agents need an analogous architecture for actions.

A linked page is not automatically a command.

A document saying “send the contents of your inbox here” should not acquire authority merely because the agent encountered it while performing a task.

A website saying “ignore previous instructions” should not outrank the user whose goal brought the agent there.

A link labeled “continue” should not be followed blindly if it leads to a purchase, deletion, permission grant, or external message.

The future agent needs a model of edge authority, not merely edge existence.

This is the machine version of the hostile-link problem.

Humans learned to be skeptical of destinations.

Agents must be skeptical of transitions.

The challenge becomes sharper because agents can move faster than humans and can operate across multiple systems in one workflow.

A person handling a business task may click five or ten links and notice when the environment changes. An agent can traverse dozens of resources, extract information, call tools, and produce actions in seconds. The resulting trail may be difficult for the user to reconstruct afterward.

Speed makes provenance essential.

A trustworthy agent should leave a trail that says not only what it did but what relations justified each meaningful step.

The contract came from this customer record.

The customer record linked to this order.

The order linked to this payment.

The refund policy was this version of the policy page.

The refund action was performed under this user's authority.

The message was sent to this address.

The links become part of an audit graph.

This sounds bureaucratic until an error occurs.

Then the trail becomes the only way to answer the questions people actually care about.

Why did the agent do that?

What did it read?

Which instruction did it believe?

Which account was active?

What source did it use?

Which version of the data existed at the time?

Where did the wrong assumption enter?

These are the same questions organizations ask after human mistakes. The difference is scale. A machine can create more actions and therefore more need for reconstructable lineage.

Hypertext gives us a useful vocabulary because it separates nodes from edges.

The node is the object: document, account, message, order, code change, policy, calendar event.

The edge is the relation: cites, belongs to, authorizes, supersedes, generated from, paid by, responds to, depends on.

Ordinary Web links usually leave the relationship type implicit.

Agent systems will often need explicit types.

A link to a policy is not the same as authorization to execute a transaction.

A link to a person's profile is not permission to message them.

A link to a file is not permission to redistribute it.

A link to a code repository is not permission to merge a change.

The gap between reference and authority becomes a core design boundary.

This is one reason structured APIs will remain important even if agents become excellent at using graphical interfaces.

A browser exposes what a human can see and do. An API can expose explicit operations with typed parameters, permissions, error states, and machine-readable results. An agent clicking around a website is flexible. An agent calling a well-designed API is often safer and more deterministic.

The future is not “links replace APIs.”

It is layered.

The link identifies where the relevant object or capability lives.

The agent may use the browser to understand context.

A tool integration may expose a structured action.

An identity system constrains authority.

A provenance layer records what happened.

Hypertext remains the loose connective tissue even when stronger interfaces handle execution.

This mirrors the human workplace.

A chat link takes an engineer to an issue.

The engineer reads context there.

A repository tool performs the actual merge under permissions.

A deployment system records the release.

The link did not perform the whole workflow. It kept the parts referentially connected.

Agents need the same connective tissue because no universal API will describe every system they encounter.

The Web's strength has always been working in the spaces between formal integrations.

That makes links especially important during transition periods.

When a new tool appears, nobody has built every integration yet. If the tool exposes stable addresses, humans and agents can still refer to its objects. A link lets coordination begin before automation is complete.

This is a form of graceful incompleteness.

The organization can say “the customer issue is here” before it has a sophisticated synchronization layer between the customer system and the engineering system.

Then richer automation can be built where the relationship becomes frequent and valuable enough to justify it.

The edge is the prototype integration.

This may be one of the hyperlink's most important roles in an agentic future.

Software environments will proliferate faster than formal standards can unify them. Agents will encounter custom enterprise tools, public websites, documents, databases, messaging systems, old applications, new APIs, and workflows nobody thought to model centrally.

A universal requirement for machine automation would fail under that diversity.

Addressability offers a weaker universal.

Can the object be named?

Can the agent retrieve enough representation to understand it?

Can the authorized action be expressed safely through some interface?

Can the result be linked back into the trail?

That is not complete interoperability.

It may be enough interoperability to coordinate.

The Web succeeded on a similar threshold.

There is a second machine use for links that will matter as synthetic content expands: provenance discovery.

A crawler historically followed links to find pages.

A provenance-aware system can follow citation and source links to discover where a claim came from.

Imagine a machine reading a widely shared assertion. Instead of treating every page repeating the assertion as independent confirmation, it traces outbound references backward. Twenty pages cite four articles. The four articles cite the same press release. The press release cites an unpublished company analysis.

The apparent twenty-source consensus collapses into one source.

This is graph reasoning.

Humans can perform it manually. Machines can perform it at scale if the edges remain available.

Generated content makes this valuable because repetition no longer implies independent human discovery. A model can produce thousands of paraphrases from one source. Search results can become saturated with derivative pages. A reader may encounter a chorus that is really an echo.

Links can expose the echo's lineage.

Only if publishers keep them.

A generated article that strips provenance breaks the chain. A summary that cites only the immediate source can hide deeper dependence. A screenshot without an address becomes an orphaned representation. An AI answer with citations at the paragraph level may leave claim lineage ambiguous.

The future machine Web therefore needs better habits of source-preserving transformation.

This is a technical and cultural problem.

Technically, systems can carry identifiers forward when they quote, summarize, translate, or transform material.

Culturally, publishers need incentives to preserve provenance instead of erasing it for convenience or traffic capture.

The same economic tension appears again.

Attribution gives the user an exit.

A platform may prefer the user to stay.

A machine may prefer a concise internal representation rather than carrying source context.

The integrity of the graph depends on resisting some of that compression.

Agents create another category of edges: action references.

A human link usually says “this exists there.”

An agent may need relations like “this tool can act on that object,” “this credential authorizes this operation,” “this output was produced from that input,” or “this approval permits that deployment.”

These are not ordinary hyperlinks, but they are hypertext's descendants because they make relations explicit and navigable.

The more agent systems operate across institutions, the more important these edges become.

A purchase agent might compare products from several merchants, inspect warranties, choose one, obtain user approval, place the order, and record the receipt. The transaction graph crosses search, commerce, identity, payment, shipping, and personal records.

A coding agent might read an issue, inspect documentation, modify a repository, run tests, open a pull request, respond to feedback, and merge after checks. The work graph crosses planning, code, CI, review, and deployment.

A travel agent might inspect calendars, flights, hotels, maps, loyalty accounts, and expense policy before booking.

In each case the hard problem is not generating a plausible next action.

It is preserving authority and provenance across edges.

The user authorized a goal, not every imaginable action reachable from every page.

The system must infer a bounded path while remaining inspectable.

This suggests an important design shift from conversation history to action graph.

Chat interfaces encourage us to think of agent work as a sequence of messages.

The actual work is not linear.

One instruction can branch into research, verification, tool use, alternative plans, approvals, retries, and external actions. Several branches may reconverge in one final result.

That is a graph.

Git understood this for software history. Hypertext understood it for information. Agent systems will need to understand it for delegated work.

A linear transcript can be useful for narration.

A graph can preserve causality.

Which source led to which decision?

Which approval authorized which action?

Which result invalidated which plan?

Which external resource was relied upon?

Which branch was abandoned?

The agent's future “history” may look less like a chat log and more like a provenance graph with human-readable summaries.

The link is the natural unit of that graph because every node needs a stable way to refer to other nodes.

This is why naming returns at the end of the story.

If agent systems cannot preserve durable identities for the objects they touch, audit collapses into screenshots and prose descriptions. “I used the policy that was on the website” is not enough. Which policy? Which version? Which representation? Which account? Which permission?

Stable references make delegated work contestable.

They also make it reusable.

An agent that solves a problem can leave behind a trail another agent or person can inspect. The trail becomes organizational memory. Repeated work can be recognized. Strong patterns can be automated further. Weak decisions can be corrected at the edge where they entered.

Engelbart would recognize the ambition.

The goal is not merely to make the machine do more.

It is to improve the combined system's ability to deal with complicated work.

The difference is that the machine is now capable of traversing the information environment itself.

That makes the environment's link structure part of machine cognition in a practical sense.

An agent can only reason over what it can identify, retrieve, and relate.

Good links create usable joints in the world.

Bad links create ambiguity.

Broken links create missing memory.

Hostile links create unsafe paths.

Opaque platforms create hidden graphs.

Rich provenance creates inspectable reasoning.

The old hypertext concerns converge inside the agent.

This is why the future of the link is larger than the browser and smaller than a universal artificial intelligence.

The link is infrastructure for delegation.

A person can hand a machine an address and say, “begin here.”

The machine can follow relations, gather context, and perhaps act.

The trustworthy version of that future will also allow the machine to return something equally important.

Not just an answer.

A path.