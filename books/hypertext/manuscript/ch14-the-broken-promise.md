# The Broken Promise

In 1998, an ordinary web link could feel permanent for the same reason a young city feels permanent.

Everything around it was new.

A university put a report online. A newspaper linked it. A researcher bookmarked the page. The address looked precise enough to be durable: institution, directory, filename. Nobody involved needed to think about what the server would look like twenty years later.

Twenty years is a long time for a URL.

The university redesigns its site. The directory disappears. The report moves into a content-management system. The institution changes names. The employee who maintained the old section retires. The server is decommissioned. The domain redirects to a new homepage. The newspaper's link still sits inside an article, blue and underlined, preserving the shape of a relationship whose destination has vanished.

The link broke without the source changing.

This is one of hypertext's most important failures because it reveals what the link was quietly promising all along.

A hyperlink does not merely say another resource existed when the author wrote the sentence.

It invites a future reader to retrieve it.

The invitation contains a time assumption.

Writers rarely experience the assumption as a contract. They copy an address, publish, and move on. The protocol makes no guarantee that the target will remain there. Yet the rhetorical function of the link depends on enough persistence that the reader believes following it will still be meaningful.

When the target disappears, we call the result link rot.

When the address still resolves but the material behind it changes so substantially that the original relation no longer means what it meant, researchers often call the result content drift.

The distinction matters.

A dead link announces failure.

A drifting link can lie politely.

Suppose an article from 2007 links to a government page as evidence that a program had a particular rule. In 2026, the same URL may display the current program policy, not the policy the article's author saw. The click works. The evidence does not.

Or a company is criticized in an old article and later loses its domain. A different owner acquires the address and publishes unrelated material. The old link remains technically valid while the semantic relationship becomes absurd.

Or a product page is repurposed for a newer model under the same URL. Reviews, forum posts, and recommendations created for the old product now appear to point at the new one.

The address survived.

The referent did not.

This is not a corner case in an ephemeral medium. Researchers at Harvard Law School examining New York Times links through mid-2019 found substantial link rot and content drift across the paper's archive. More than half of articles containing at least one URL contained a dead link, and manual examination found additional deterioration even among links that still responded.

The exact rates depend on corpus, age, methodology, and what counts as failure. The larger finding is hard to dispute: the Web is better at creating relations than preserving them.

That imbalance has consequences for history.

A printed newspaper can survive in an archive even if the businesses advertised in it disappear. The text and the advertisement remain physically together on the page. A digital article can survive while its evidentiary neighborhood evaporates around it.

The article becomes an island.

Its claims remain readable. Its sources become inaccessible. Its outbound references point to homepages, errors, parked domains, replacement content, and server failures.

The historical record loses connective tissue before it loses the document itself.

This is a different preservation problem from keeping files.

Archivists know how to preserve an object. Hypertext asks them to preserve a relationship among objects that may live under different owners, update on different schedules, and have different legal or technical constraints.

The source may be preservable.

The target may be preservable.

Preserving the meaning of the edge requires knowing which state of the target the source intended.

That is temporal provenance.

The Web's basic link does not record it.

A URL alone usually says where, not when.

This is why Web archives became such consequential institutions. An archive can capture representations of pages at particular times and provide a new address for those captures. The archive does not repair the original Web. It builds a parallel temporal layer over it.

The resulting object is not identical to the original service.

Dynamic applications may not replay correctly. personalized pages may not be captured. paywalled or private material may be inaccessible. scripts can fail. external resources may be missing. legal requests can limit access. The original site's behavior, account state, or database cannot always be frozen meaningfully.

Still, the archive restores something the link alone omitted: a dateable witness to what was there.

Perma.cc takes a more targeted approach to the same problem. Built by Harvard Law School Library and partners, it helps authors and institutions create archival records of cited Web material so that legal and scholarly references remain usable after the live Web changes.

The service exists because citation needs stronger guarantees than ordinary navigation.

A shopper linking to a daily sale can tolerate impermanence. A court opinion citing evidence should not.

This is one of the key lessons of the broken link: different relations need different durability.

The Web's default relation is general-purpose. It cannot know which links are casual and which are evidentiary.

Institutions must add preservation where stakes demand it.

The same pattern appears in software package management.

A human browsing documentation may be content with a link to “latest.” A reproducible build cannot be. It needs a version or immutable artifact. A researcher visiting a dataset may want the newest release. A paper citing the dataset needs to identify the exact version used for the analysis.

Dynamic and historical reference are different operations.

A mature information system provides both.

The public Web often provides one URL and asks users to infer which operation they are getting.

Berners-Lee's advice that cool URIs do not change was partly a plea to publishers to separate public naming from internal implementation. If the company changes file systems, the public identifier should not have to change. If the organization restructures its server, old links should keep working through redirects or compatibility layers.

The advice sounds simple until the organization has lived long enough to accumulate thousands of redesign decisions.

Persistence is expensive because it requires remembering old promises.

A new content team sees an old directory structure and wants to clean it up.

An engineer sees obsolete routes and wants to delete them.

A marketer wants shorter slugs.

A legal team wants old material removed.

A security team wants an outdated application retired.

An acquisition moves content between brands.

A publisher changes vendors and discovers the new system cannot reproduce the old URL scheme cleanly.

Every internal improvement competes with external continuity.

The outsiders depending on old URLs are mostly invisible.

That creates a classic organizational asymmetry.

The cost of preserving an old redirect is borne inside the institution.

The benefit is distributed among unknown external users.

Organizations systematically underinvest in benefits they cannot see.

The broken link is therefore often an institutional failure rather than a technical one.

The server knows how to redirect.

The organization did not remember to do it.

This is why durable identifiers are cultural infrastructure.

Libraries, scholarly publishers, standards bodies, and archival institutions develop practices around persistence because their missions force them to value future readers. Commercial websites often optimize for current users because current users pay the bills.

Neither behavior is irrational.

The result is a Web with uneven time horizons.

Some addresses are maintained for decades.

Others expire with a campaign.

Some domains become part of civilization's bibliographic memory.

Others are disposable marketing surfaces.

A reader cannot always tell which is which from the URL.

This uncertainty weakens the link as citation.

If the evidence may disappear, writers begin preserving screenshots, PDFs, local copies, archive links, content hashes, DOIs, and other references beside the ordinary URL. They create redundancy because the single edge is not trusted to survive.

Redundancy is one of civilization's oldest answers to fragile memory.

Libraries keep multiple copies.

Legal systems maintain reporters and dockets.

Banks maintain ledgers and backups.

Distributed version-control systems copy history.

Archives replicate collections.

The Web's original metaphor encourages the opposite intuition: if I can link to the thing, why copy it?

Linking is efficient because it avoids duplication.

Preservation sometimes requires duplication because ownership can disappear.

This creates a rights tension.

A preservation service may need to copy material whose publisher did not explicitly ask to be copied. A source may later be removed for privacy, safety, legal, or ethical reasons. The desire to preserve evidence conflicts with the right or need to change what remains public.

Permanent hypertext sounds attractive until the thing linked is a mistake a person has a legitimate reason to remove.

Ted Nelson's richer visions of persistent literary relation become complicated when applied to a world that includes personal data, abuse, copyright, legal takedowns, and vulnerable people.

Permanence is not always good.

Ephemerality is not always bad.

The problem is hidden mismatch.

A reader treats a link as durable evidence when the publisher treated the page as temporary.

The source and target have different assumptions about time.

A stronger link system would make those assumptions more explicit.

A page could advertise a persistent identifier separate from its current location. A citation tool could automatically archive the representation being cited where rights permit. A link could include an integrity hash that lets future readers detect whether the content changed. A research system could record both the live URL and the exact archived version. Publishers could expose version histories for important documents.

These patterns already exist in specialized domains.

The challenge is not invention.

It is adoption and cost.

The broken promise also appears at smaller scales than decades.

News websites update stories during developing events. A link sent at 10:00 may resolve to a materially different article by noon. Software documentation changes with releases. A collaborative document can be edited between the moment one person reads it and another person opens the shared link. A dashboard displays live data. A search result is regenerated on every request.

Modern links often point not to documents but to processes that produce representations.

That makes “what did this link mean?” a harder historical question.

A static file has a state.

A dynamic service has behavior.

Preserving behavior is much harder.

Imagine a link to a route-planning service used in a report about evacuation planning. Years later, the same address may calculate a different route because roads changed, algorithms changed, traffic data changed, or the service no longer exists. A screenshot can preserve the output but not the interactive logic that produced it.

The Web's transition from documents to applications therefore deepens the preservation problem.

A broken page can sometimes be copied.

A broken service may require emulation, archived code, data, dependencies, and infrastructure.

The hyperlink's promise gets larger as destinations become more complex.

This matters for the future of AI systems too.

A generated answer may cite live web sources. If those sources change, the answer's provenance can become unreconstructable. A model may summarize a page that later disappears. An agent may act based on a service response that cannot be reproduced exactly.

Trustworthy machine systems will need temporal linking practices stronger than ordinary browsing.

What did the agent see?

Which version of the policy did it use?

Which API response justified the decision?

Which representation was available at that time?

These questions are not exotic audit requirements. They are the machine-age version of a scholar asking which edition was cited.

Hypertext compressed the spatial problem of reference.

The next maturity problem is time.

A stable edge across space is not automatically stable across years.

The Web taught us how to say there.

Archives, version systems, and persistent identifiers are teaching us how to say there, then.

That second coordinate may become essential as machines consume links faster than humans can inspect them.

There is an irony in all of this.

The hyperlink made the Web feel less dependent on ownership because a source could point to material without copying it.

Link rot reveals the dependency that remained.

The source depends on the target's institution continuing to honor the address.

The relationship crosses ownership boundaries, but it cannot escape ownership entirely.

The target can move.

The target can change.

The target can vanish.

The source has no protocol-level power to prevent it.

That fragility is part of what makes the open Web open. The target remains autonomous.

Durability requires new institutions willing to remember what autonomy allows others to forget.

The broken link is therefore not merely a 404 page.

It is the mark left when two independent histories stop lining up.