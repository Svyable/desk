# The Link Is a Verb

The first links looked like reading.

The later links looked like software.

Click a word in an early hypertext document and another document appears. The metaphor is literary: one passage leads to another. As the Web developed, the destination stopped needing to behave like a document at all.

A link could search.

A link could download.

A link could open an email draft.

A link could start a phone call.

A link could subscribe to a feed.

A link could identify a location on a map.

A link could open a specific product inside an installed application.

A link could carry enough state to recreate part of a software session.

The visual grammar remained almost unchanged while the operational consequences expanded.

This is one reason the word link gradually became less precise. A hyperlink is formally a relation from one resource to another. In ordinary speech, people use link to mean the visible text, the URL, the relation, or the act itself. “Link me to it.” “Send the link.” “The link is broken.” “That account is linked.” The noun became a verb because the relation began doing work.

The underlying architecture helps explain how this happened.

A URI identifies a resource. Identification does not, by itself, dictate every interaction that will occur. The scheme, protocol, client, server, browser, operating system, application, and current state all participate in interpreting what the user means by following the identifier.

That separation created room for evolution.

The same act—activate this relation—could be mapped onto increasingly complicated behavior without requiring the reader to learn a new interface language for every new behavior.

Click still meant go.

“Go” became a larger verb.

A modern shopping link may lead to a page generated from live inventory, location, account state, pricing experiments, recommendation logic, and fraud controls. The user experiences a destination. The system performs a computation.

A calendar invitation link may authenticate the user, select an event, open a native app, fetch remote data, and display a state that did not exist as a static document anywhere.

A password-reset link may contain a time-limited token that authorizes one narrow action. The address is not merely a location. It is part of a capability.

A payment link may encode a recipient or checkout session.

A map link may resolve differently depending on device, installed software, and region.

A music link may open a browser for one person and an app for another.

The visible link becomes an instruction handed to an interpreter.

That is a major expansion from hypertext's literary origin.

It is also one of the reasons security became inseparable from linking.

When following a link merely displays another public text, the primary risk is informational. The target may be false, offensive, or misleading. When following a link can initiate authentication, expose tokens, trigger software, select accounts, or open privileged applications, the edge becomes part of an execution path.

The user sees an invitation.

The system sees an operation.

The gap between those two views is exploitable.

A phishing message says “review invoice.” The underlying link leads to a counterfeit login page.

A shortened URL hides the destination entirely.

A redirect chain begins at a familiar domain and ends somewhere hostile.

A deep link opens a sensitive screen inside an application.

A malicious page attempts to exploit the software that interprets the destination.

The Web's simplest action—follow this relation—became a security boundary because so much authority accumulated behind it.

This history complicates the common phrase “it's just a link.”

There is no such thing as just a link once the environment gives links consequences.

At the same time, the link's thin interface is what made those consequences usable.

Imagine if every possible action required a distinct ritual.

To read a page, copy a host name into one program.

To send email, manually transfer an address into another.

To open a map, type coordinates.

To launch an app, locate it and navigate through several screens.

To redeem a password reset, type a token.

To join a video call, configure a server and meeting identifier separately.

Humans can do these things. They do not do them willingly at scale.

The hyperlink became a universal handoff.

One context can say: continue this task over there.

That handoff crosses software boundaries elegantly because the address carries enough information for another component to decide what to do next.

The operating system increasingly participates in the decision.

Apple's Universal Links and Android App Links are revealing examples. Both allow ordinary-looking HTTP or HTTPS addresses associated with a website to open corresponding content inside a native application when the app is installed and verified. If the app is not available, the same address can fall back toward the Web.

This arrangement emerged after native mobile applications had appeared to fracture the Web's linking model.

The early smartphone app was often an island.

You could install it. You could open it. You could navigate inside it. But a friend could not always send you a durable address that opened the exact state she was discussing. Search engines and websites could identify the app generally without identifying its internal objects reliably. The app recreated the pre-Web problem of the front door.

Deep linking tried to restore addressability.

The interesting part is that the Web address remained useful as the bridge.

The operating system verifies that a domain and an application are legitimately associated, then routes a familiar Web identifier into native software. The link survives while the rendering environment changes.

That is an architectural vote of confidence in the identifier.

Browsers were not the final destination of the URL.

URLs became a cross-application language for saying which thing should open.

The mechanism is less permissionless than ordinary Web linking. The app owner and domain owner need to establish a verified relationship. The operating system mediates the route. User preferences and installation state matter. Platform policies matter.

But the continuity is striking.

The Web address remains a public handle even after the content acquires a native-app incarnation.

This is what mature infrastructure looks like. The abstraction survives while implementations change underneath.

The telephone number survived the move from landlines to mobile networks to internet telephony because “reach this subscriber or endpoint” remained useful even as the physical route changed.

The street address survived changes in transportation because “deliver or navigate to this place” remained useful.

The URL survived the move from static pages to applications because “refer to this networked resource or state” remained useful.

The link turns the identifier into a transition.

That transition can be composed into workflows.

A customer receives an email containing a link to an order. The order page links to tracking. The tracking page links to a map. The map can open a navigation app. A support article links to a chat. The chat links to a return label. The label links to a carrier's drop-off locations.

No single system owns the entire path.

The customer experiences one task moving across several institutions.

This is hypertext as workflow orchestration.

It works because the edges are cheap enough that different organizations can hand the user off without integrating every internal function into one giant system.

The weakness of the handoff is visible too.

The user may arrive unauthenticated.

The destination may not know the source context.

The link may expire.

The target may have changed its interface.

The transition may drop state.

A mobile app may intercept the link unexpectedly.

A user may have several accounts and land in the wrong one.

The elegant edge can conceal messy continuity problems.

Software companies often respond by making links carry more state.

Query parameters identify campaigns, languages, filters, return paths, experiments, customer accounts, and referral sources. Signed tokens encode authorization. fragments select positions. tracking identifiers follow users across systems. redirect parameters tell one service where to send the user after login.

The address begins to resemble a tiny program.

This can make workflows smoother.

It can also make addresses brittle, revealing, and dangerous.

A copied URL may leak a document identifier or access token.

A shared link may contain tracking data tied to the original user.

A long query string may expose internal assumptions about an application.

A redirect parameter can become an open-redirect vulnerability.

A temporary capability URL can accidentally be posted publicly.

The more action we ask the link to carry, the more carefully we have to distinguish identification from authority.

This distinction is one of the mature lessons of Web architecture.

Knowing the address of a thing should not always mean having permission to use it.

A public newspaper article can treat address and access as nearly the same. A bank account cannot. A corporate document should not. A medical record must not.

Authentication and authorization therefore sit around the link.

The link says what the user is trying to reach.

Other systems decide whether the user may reach it.

Capability-style links deliberately blur that boundary in controlled cases. A password-reset link or “anyone with this link” sharing mode gives possession of a hard-to-guess URL some authorization value. This is convenient because it packages identity of the resource and a narrow permission into something the user can pass around.

Convenience creates risk because links are unusually easy to pass around.

They can be forwarded.

Logged.

Saved in browser history.

Captured in screenshots.

Copied into analytics systems.

Included in referrer information under some conditions.

Pasted into chats.

Indexed accidentally if exposed publicly.

A mechanism optimized for shareability is a dangerous place to hide secrets unless the system understands the trade.

The link as verb therefore forces a security question: what authority travels with the transition?

The first hypertext systems did not need to carry the full burden of global identity, payments, account recovery, app routing, and authentication. The Web inherited those concerns as links became pathways into software rather than documents.

The same expansion changed commerce.

An affiliate link is a relation with an economic memory. The destination can recognize that the visitor arrived through a particular publisher and may credit a later purchase. The link does not merely route attention; it establishes a claim about referral.

A campaign link does something similar for advertising. Parameters let the destination attribute traffic to a source, creative, message, or campaign. The Web's graph becomes measurable because edges can carry labels.

Once edges carry labels, they become accounting instruments.

This is a profound shift from Bush's associative trail.

Bush imagined a trail because two items mattered together in a person's thought.

The commercial Web asks whether one edge caused a transaction.

The answer is never perfectly clean. A buyer may see several advertisements, search independently, read a review, click a link, leave, return later, and purchase on another device. Attribution systems attempt to allocate credit across a path that is partly visible and partly hidden.

The link becomes evidence in a causal argument about money.

That incentive changes the graph again.

Publishers place links where they earn revenue.

Marketers optimize anchor text and destination pages.

Platforms instrument outbound clicks.

Browsers and privacy systems restrict tracking.

Regulators scrutinize disclosures.

The edge becomes contested territory because it no longer simply says “go there.”

It says “go there, and remember how you got there.”

This accumulation of meaning can make the Web feel less elegant than the early ideal. URLs become littered with tracking parameters. Redirectors wrap clean destinations. Platform safety systems replace direct links with intermediaries. Native apps intercept routes. authentication layers bounce users among domains. Cookie banners and consent flows interrupt transitions.

The click remains one gesture.

The institutional path underneath becomes baroque.

Yet that baroque stack demonstrates the primitive's durability.

Rather than invent a completely new interaction for every cross-system transition, industries keep attaching new meaning to the link.

The relation is cheap enough to keep reusing.

This is what it means to call the link an executable relation.

Executable should not be read narrowly as “contains code.” Most links do not. The point is that the relation is represented in a form a system can act upon. It can convert a statement of connection into a transition through a larger environment.

A footnote says another work matters.

A hyperlink can ask the machine to retrieve it.

A deep link can ask the machine to open it in the right app.

A capability link can ask the machine to grant narrow access.

A payment link can ask the machine to initialize a commercial state.

An agent can interpret a link as one possible next action among many.

The edge becomes operational.

That operational character is the hinge between hypertext and modern software.

The action hidden behind a link also changes what it means for an interface to be predictable.

A reader looking at underlined text in a document has a relatively narrow expectation: another representation will probably appear. A user tapping a modern link may trigger a browser, a native application, an authentication flow, a download, a meeting client, a payment state, or an operating-system chooser. The visible affordance stayed compact while the action space widened.

This creates an asymmetry between interface simplicity and consequence complexity.

The user still makes one gesture.

The system may perform many transitions.

Good software manages that asymmetry by keeping high-consequence actions distinguishable from low-consequence navigation. A link can take a user to the page where a purchase can be confirmed; the final purchase should not be indistinguishable from ordinary browsing. A password-reset link can establish a special session; the system should constrain what that session is allowed to do. A file link can initiate a download; the browser can expose the file type and apply security checks.

The Web's history is full of moments when implementers discovered that friction belongs at the boundary of consequence rather than at every edge.

If every link produced a warning, users would learn to ignore warnings.

If no link ever produced a warning, hostile transitions would inherit too much trust.

The design problem is selective friction.

This is another way to distinguish navigation from authority. Navigation should remain cheap because cheap traversal is the point. Authority changes should become explicit when the action meaningfully alters state, grants access, spends money, sends information, or crosses another important boundary.

Agents make the principle even more important because they can follow many transitions without a human seeing each one.

A human browser can rely partly on the user's perception: this page looks unfamiliar; this button says delete; this checkout shows a total. An agent needs structural signals about which edge is merely informational and which edge leads toward an irreversible effect.

That suggests a future in which action-capable links are accompanied by richer machine-readable context.

Not because every link should become a formal API.

Because software acting for a person needs to know which transitions deserve confirmation, which require credentials, which may expose information, and which are safe to explore speculatively.

The underlying architecture already contains a clue: identification and interaction are separate concepts. An identifier tells the system what resource is being referred to. The method, protocol, application, permissions, and surrounding state determine what interaction is available.

Treating the URL itself as the whole action model collapses too much.

A mature agentic Web should preserve the link's universality while refusing to treat every reachable destination as an authorized operation.

This is exactly the lesson humans learned through capability URLs. A secret-bearing link can be convenient, but possession of the link becomes part of the security model. The system must decide whether that is acceptable for the consequence involved.

A shared photo album may tolerate it.

A bank transfer should demand more.

A one-time account-recovery flow can use it under expiration and additional controls.

A permanent administrative credential should not be casually encoded in something optimized for forwarding.

The link's greatest strength—portability—is a liability when portability is not what the authority should have.

Commerce created a different kind of portability. Referral information could travel from publisher to merchant, allowing value to be attributed across institutional boundaries. That is why affiliate linking became so powerful: two businesses did not need to become one company to share the economics of a transaction. The edge itself became the handoff point for attribution.

This is structurally similar to the Web's broader coordination model.

Keep the systems separate.

Carry enough state across the boundary to continue the task.

The difficult question is always how much state counts as enough.

Too little and the user has to reconstruct context manually.

Too much and the link becomes fragile, revealing, or dangerous.

A clean product URL is durable and shareable. A URL containing a long session token may reproduce the exact state but should not be shared. A search URL can preserve a query usefully. A checkout URL can preserve a cart state whose meaning may expire quickly. A signed download address may intentionally work only for minutes.

All are links.

Their time horizons and authority differ.

This is why the future of hypertext depends partly on recognizing that not every edge should be judged by the same standards of persistence. Chapter seven argued that durable public identifiers are valuable because strangers build dependencies on them. Here the complementary point is that action links sometimes should expire because their power is contextual.

Persistence is good for identity.

Expiration can be good for authority.

Confusing the two creates security and usability failures.

A strong system may therefore expose more than one identifier around the same object: a stable public address for the resource, a temporary authenticated route for a particular action, and an immutable identifier for a historical version. Humans may see one interface. Machines can understand the distinctions beneath it.

This layered design preserves the hyperlink's essential economy. The source can still say “continue there.” The surrounding systems can decide what *there* permits.

That is how the noun became a verb without becoming one universal command language.

The link did not need to contain every action.

It needed to be the handoff through which another system could take over.

Once machines could perform that handoff reliably, they could do something else with the same edges: ignore the human action entirely and study the pattern.

A user asks, “Where does this go?”

A search engine asks, “Why did all these people point here?”