# The Addressable World

A link to nowhere is not a link.

Before the Web could connect documents, it needed a way to name them that could survive outside the local machine on which they happened to live. That requirement sounds less glamorous than hypertext because naming is usually treated as administrative work. Engineers name files, computers, domains, variables, database rows, and devices so that other systems can find them. Naming feels like preparation for the interesting part.

At global scale, naming is the interesting part.

A usable name lets strangers coordinate around something they do not jointly own.

Street addresses are an old example. A building can be owned by one family, taxed by a municipality, delivered to by a private courier, visited by a friend, inspected by a fire department, mapped by software, and mentioned in a court filing. None of those institutions needs to share a database with the others. They coordinate because the address gives them a common handle on the place.

Telephone numbers do similar work for endpoints in a communication system. ISBNs give books identifiers that travel among publishers, libraries, booksellers, distributors, and readers. Bank routing and account numbers let institutions coordinate payments. Vehicle identification numbers allow cars to remain the same object across factories, dealers, insurers, repair shops, owners, and registries.

Names become infrastructure when they are portable across contexts.

The Web's Uniform Resource Identifiers belong to this lineage.

The terminology changed and the specifications matured over time. URLs became the familiar public face; URI became the more general architectural term. For ordinary readers, the distinction rarely matters. What matters is the abstraction: a sequence of characters can identify a resource in a shared information space, allowing another party to refer to it without possessing it.

The address makes the edge possible.

That order is easy to reverse because the hyperlink is visible and the identifier is often hidden. A person sees “read the report” and clicks. The browser sees an address. The source author needed the address before the phrase could become an operable relation.

The address is where local reality gets translated into public continuity.

A server may store a document in `/var/www/reports/final2-revised.pdf`. A database may generate a page from several tables. A content-management system may assign an internal numeric key. A company may migrate from one programming language to another. A university may move its site to new hardware. None of those implementation details needs to appear in the public identifier.

This separation is one of the Web's quiet strengths.

The public name can remain while the machinery changes behind it.

It does not always remain. In fact, publishers routinely expose implementation details in URLs and then break external links when those details change. File extensions become obsolete. directory structures are reorganized. content systems are replaced. marketing teams rename sections. acquisitions move sites between domains. identifiers vanish because nobody inside the organization realized strangers had built relationships around them.

The architecture permits persistence.

Institutions decide whether to practice it.

Tim Berners-Lee's famous advice that “cool URIs don't change” is memorable because it treats persistence less as a technical trick than as an organizational responsibility. There is no protocol that can force a company to renew a domain after bankruptcy. No browser can require a newspaper to preserve every article address forever. No standards body can stop a government agency from redesigning its site without redirects.

A stable identifier is a promise made by the publisher to unknown future users.

The unknown part is crucial.

When you create an internal database key, you may know which applications depend on it. When you publish a Web address, you cannot know who will build on it later.

A teacher may put it in a syllabus.

A court may cite it.

A researcher may include it in a paper.

A customer may bookmark it.

A search engine may index it.

An archive may crawl it.

A developer may hard-code it into software.

A journalist may place it in an article that outlives the site redesign that breaks it.

The public identifier accumulates dependencies you cannot see.

This is the social meaning of addressability.

To make something addressable is to allow other people to form commitments around it.

That does not mean every digital object deserves a permanent public address. Temporary resources are legitimate. Private resources need access control. Dynamic states can be impossible or undesirable to preserve. Security sometimes requires revocation. Personal information sometimes needs to disappear. The point is not universal permanence.

The point is that the address creates the possibility of external dependence.

Systems that expose stable identifiers become platforms even if nobody calls them platforms.

A platform, in the broadest sense, is something other actors can build upon without asking it to anticipate every use.

Wikipedia articles are a platform for teachers, journalists, search engines, students, translators, fact-checkers, and countless other works because each article can be referred to. Git commits are a platform for deployment and audit because a commit can be named. Scientific papers become part of a durable scholarly graph when identifiers survive changes in hosting. Government records become more usable when individual items can be linked rather than merely placed behind a search form.

The granularity of the names determines the granularity of the ecosystem.

Imagine a newspaper whose website has one public URL: the home page. Every article can be read by navigating from there, but individual stories cannot be stably addressed. The newspaper is technically on the Web but structurally resistant to the Web's linking model. A critic cannot point directly to the disputed article. A teacher cannot assign it. Search engines struggle to treat it as an independent resource. Archives cannot refer to it cleanly. Social sharing degenerates into instructions: go to the site, search this phrase, then click the third result.

Now give every article its own address.

The publication changes without changing a word of prose.

Every article becomes a potential node in external systems.

Give each paragraph an address and the change continues. A reader can cite a precise passage. A collaborative annotation system can attach discussion to it. A legal argument can point to exactly the sentence in dispute. A machine can reference a fragment rather than an entire page.

Fine-grained addressability increases composability.

It also increases maintenance obligations.

If paragraphs move, what happens to the links? If an article is corrected, does the old fragment still identify the same claim? If a user deletes a comment, should the address continue to resolve to a tombstone? If a database record changes identity after a merger, who owns the old URI?

Naming creates governance because names create expectations.

This is true outside the Web as well. Renaming a street inconveniences everyone whose records use the old address. Changing a company's ticker symbol propagates through financial systems. Reassigning a telephone number can expose a new owner to messages intended for the old one. Identifier reuse is dangerous because the name carries history.

The Web multiplied these problems by making identifiers global and cheap.

Cheap naming is extraordinarily productive.

A hobbyist can create a page and, in seconds, give it a public coordinate. No standards committee needs to allocate an identifier for the particular essay. The publisher controls the path under a domain and can create names at will.

That delegated naming structure is one reason the system scales.

No central authority has to understand every resource before it receives an identifier.

Control is hierarchical at one layer and decentralized at another. Domain-name systems establish authority over portions of the namespace. Within those spaces, publishers create more specific identifiers. The result is not anarchic. It is distributed administration.

This matters because truly global flat naming systems often encounter allocation and governance problems. Somebody has to decide who gets which name. Hierarchical delegation lets local authorities create identifiers without consulting the whole network.

The Web's addresses therefore encode a political fact: somebody controls the namespace under a domain.

That control can be empowering and fragile.

Owning a domain gives a publisher substantial freedom to create a durable public structure. Losing the domain can destroy that structure overnight. A company acquisition can redirect old addresses. A government can seize a domain. A registrar dispute can interrupt access. An expired domain can be purchased by somebody who has no relation to the original publisher.

The same stable name that supports long-term trust can become a vector for long-term confusion when control changes.

This is another reminder that identifiers do not contain truth.

They contain coordination.

The user sees a familiar address and may infer continuity. The underlying authority may have changed.

Links inherit that ambiguity.

A ten-year-old article can contain a link whose domain name is unchanged but whose content is now controlled by a different organization. From the source document's perspective, the link still “works.” From the author's original meaning, it may be catastrophically broken.

This phenomenon is usually discussed as content drift or link rot, and it exposes a distinction that matters throughout the book: resolving an address is not the same as preserving a relation.

A relation includes context.

When I link to a page as evidence for a claim, I am not merely asserting that a server will answer. I am asserting that the target material I encountered has some relationship to my sentence. If the target changes, the syntactic link can survive while the semantic relation dies.

Persistence therefore has at least two layers.

The identifier can remain stable.

The meaning associated with it can remain stable enough for the old edge to make sense.

Those goals sometimes conflict. News pages get corrected. Product pages change inventory. live dashboards update. encyclopedias improve. documentation follows new software releases. A useful resource may be valuable precisely because its content changes while its address remains stable.

The Web solves this imperfectly through additional naming patterns: versioned paths, date-stamped archives, fragment identifiers, content hashes, persistent identifiers, snapshots, redirects, and metadata that distinguish current from historical representations.

Again, the thin base layer is not enough for every domain.

It is enough to let stronger systems build above it.

Software development provides a revealing contrast. A branch name such as `main` is designed to move. It identifies the current tip of a line of work. A commit hash is designed to identify a specific state. Both are useful because they answer different questions.

The Web often asks one URL to serve both roles.

An article address may mean “the current version of this article” while a researcher wants “the exact version I read on March 3.” Archives and versioning systems exist because those are different identities.

The future of trustworthy hypertext may depend on becoming more explicit about this difference.

A link could point to the living resource and also preserve a verifiable snapshot of the representation that justified the link. A citation interface could expose both. Readers could see what the source says now and what the author saw then.

That is technically feasible in many cases.

The obstacle is institutional cost, rights, privacy, storage, and convention.

The Web has always been a machine for turning technical possibility into social obligation more slowly than technologists expect.

There is another aspect of addressing that the visible Web hides: identifiers can be meaningful without being human-friendly.

People often praise readable URLs such as `/books/hypertext/chapter-7` and distrust strings full of random characters. Human readability has benefits. It helps people predict what they are visiting and remember addresses. But globally useful naming does not require every identifier to be aesthetically pleasing.

Machines care about uniqueness and resolvability.

Humans care about meaning and trust.

The most durable systems separate those concerns carefully.

A DOI can identify a scholarly object even when the publisher changes. A content hash can identify bytes even when the file moves. A database primary key can remain stable even if the title changes. A public slug can remain readable while resolving to an internal identifier.

Hypertext sits at the boundary between human semantics and machine identity.

The anchor text says what the author wants the reader to expect.

The address says where the machine should attempt to go.

Those two layers can reinforce one another or betray one another.

“Annual report” may point to the annual report.

“Annual report” may point to a login page.

“Annual report” may point to malware.

The visual label does not determine the target.

This separability became a security problem because human trust attaches to language while software action attaches to the identifier.

It also became a design strength because the ugly address could disappear behind meaningful prose.

That trade is everywhere in interfaces. We hide machine identifiers behind human names. Contacts hide phone numbers. Maps hide coordinates behind place names. file browsers hide inode numbers. banking apps hide account routing complexity behind recipient names.

The hyperlink did the same for the Web.

The reader could think in concepts while the machine acted on names.

Once this became ordinary, addressability spread beyond documents.

Maps exposed locations through URLs.

Online stores exposed products.

Search engines exposed queries.

Calendars exposed events.

Video services exposed moments inside recordings.

Code forges exposed files, commits, issues, review comments, and diffs.

Applications exposed states that had never existed as standalone documents.

The Web became less like a library of pages and more like a universal coordinate system laid over software.

This is why deep linking became politically important.

If an app or site exposes only its front door, the owner controls the reader's journey from that point onward. If every meaningful internal object has an address, outsiders can construct paths the owner did not design.

Search can send a user directly to the relevant product instead of the store's home page.

A critic can link to a specific policy clause instead of the corporate landing page.

A friend can share a particular location instead of saying “open the map app and search for it.”

Addressability weakens the monopoly of the front door.

That does not eliminate platform control. The owner still decides what is public, which addresses remain stable, whether authentication is required, and how the target behaves after arrival. But the existence of stable internal names gives outsiders more precision.

Precision is a form of power.

A vague accusation is easier to deflect than a link to the exact filing.

A general recommendation is less actionable than a link to the exact product.

A broad bug report is harder to investigate than a link to the exact line, revision, and failing test.

A memory is more useful when it has an address.

The Web's identifiers turned precision into something people could pass around.

That is why the URL deserves a different cultural status from the ugly string it became.

It is not merely where a page lives.

It is the boundary object that lets one institution say to another, one person say to another, or one machine say to another: this is the thing I mean.

After that, the link can say something more consequential.

Go there.