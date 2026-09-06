# Nonsequential Writing

Ted Nelson distrusted the page before most people had encountered a computer that could display one convincingly.

The problem, as he saw it, was not that books were bad. Nelson loved literature enough to be offended by the idea that electronic writing should merely imitate paper. A computer screen could do things a printed sheet could not. Why should the new medium inherit the old medium's fixed sequence, fixed boundaries, and awkward methods of reference simply because people already knew how to print?

In 1965, at a national computer conference, Nelson published work describing file structures for material that was complex, changing, and indeterminate. The language sounds technical because the problem was technical, but the ambition was literary. A person thinking, writing, revising, and connecting material does not always know the final shape in advance. The system should tolerate branching, rearrangement, overlap, and change.

Nelson gave a name to the larger idea: hypertext.

He later described it, in one durable formulation, as nonsequential writing.

The phrase is often repeated so quickly that its challenge disappears.

Nonsequential does not mean random.

It means the sequence is no longer the only structure that matters.

A printed novel may depend on sequence so strongly that reading chapter twelve before chapter two destroys the intended experience. A reference work, legal archive, technical manual, scholarly literature, or personal notebook behaves differently. There may be a preferred route, but useful reading often branches. An unfamiliar term sends you to a definition. A disputed claim sends you to evidence. A citation sends you backward in time. A later revision sends you sideways toward comparison. A contradiction sends you into another author's work.

The page can represent those relationships symbolically. The computer can make them operational.

Nelson did not stop with the operational link.

This is one reason his work remains so useful for understanding the Web. He wanted more than the Web eventually delivered, and the distance between the two systems exposes choices that otherwise look inevitable.

Project Xanadu, Nelson's decades-long vision for a global hypertext publishing system, pursued ideas such as durable connections, fine-grained reference, transclusion, version relationships, and richer treatment of authorship and reuse. The details changed over time and the project passed through many implementations and collaborators, which makes it dangerous to summarize Xanadu as if it were a single finished specification waiting for history to notice.

But the recurring concerns are clear enough.

What happens to authorship when writing becomes connected?

What happens to quotation when a document can include material from somewhere else without merely copying an inert snapshot?

What happens to provenance when text can be reused across contexts?

What happens to a reader's freedom when the author no longer controls a single mandatory path?

What happens to ownership when pieces of documents participate in larger structures?

These are not side questions to hypertext. They are what hypertext becomes once the link is treated as part of publishing rather than decoration.

The modern Web answered many of them with an astonishingly effective shrug.

A link would point.

A browser would follow.

The rest could be somebody else's problem.

That is an unfair simplification of the engineering behind the Web, but it captures the institutional contrast. The ordinary hyperlink does not guarantee that the target survives. It does not automatically inform the target that it has been linked. It does not preserve a quoted fragment if the source changes. It does not pay the author. It does not prove that the source endorses the target. It does not manage versions. It does not promise that the relationship will continue to make sense tomorrow.

Nelson's dissatisfaction with such thin linking was not eccentric nostalgia for an alternate future.

He was noticing real losses.

The Web became so successful that people often evaluate earlier hypertext systems by asking why they failed to become the Web. That question points in the wrong direction. A research system can teach us something precisely because it optimized for a different goal.

Nelson wanted electronic literature to remember more of its relationships.

The Web wanted independently controlled machines to connect without asking too much of one another.

Those goals overlap. They also pull apart.

To understand the tension, consider quotation.

On paper, an author copies a passage from another work and places it inside a new one. The copy becomes part of the new document. Its relationship to the source is expressed through quotation marks, citation, typography, and scholarly convention. If the source is later corrected, revised, or retracted, the quotation in the new work does not automatically change. That stability is useful because it preserves what the author actually encountered. It can also separate the quotation from the living state of the source.

In a richer hypertext system, reuse can be represented as a continuing relation rather than a one-time copy. Nelson used the term transclusion for forms of inclusion by reference. The idea is deeper than embedding a remote image in a page. It treats the reused material's connection to its source as part of the structure.

The Web adopted inclusion by reference in many places, but inconsistently. An HTML page can load images, stylesheets, scripts, frames, media, and other resources from elsewhere. Those inclusions can create security risks, performance dependencies, tracking opportunities, and strange questions about who really controls the rendered page. Ordinary quoted prose, meanwhile, is usually copied.

The result is a medium in which some dependencies remain live and others become snapshots.

That distinction now shapes daily life.

A news article embeds a social-media post. The post is deleted. The article now contains an absence.

A website loads a JavaScript library from a remote service. The service changes or fails. The page behaves differently.

A document quotes a statistical claim from a report. The report is corrected later. The quote remains, perhaps without notice.

A product page hotlinks an image hosted elsewhere. The image owner replaces it. The product page changes without the publisher editing the page.

The question “copy or reference?” is not clerical. It determines which system controls the future.

Hypertext made that question unavoidable because references could become live dependencies.

Nelson's larger vision took the relation seriously enough to demand infrastructure around it.

The Web's genius was to let many relations remain cheap and weak.

Cheap and weak won distribution.

Rich and controlled kept winning specialized domains.

You can see the pattern everywhere after the Web. Version-control systems preserve history because software developers cannot tolerate the ambiguity of a document whose prior states disappear. Scientific publishing built persistent identifiers because ordinary URLs were not enough for scholarly citation. Content-management systems track revisions because the public page alone does not reveal how it changed. Package managers record dependencies because a mere link to “latest” would make builds impossible to reproduce. Blockchains, whatever else one thinks of them, became popular partly because they offer strong, inspectable relationships among records under a shared protocol.

The open Web stays comparatively loose because its scope is enormous.

This is the engineering version of a political problem.

The more guarantees a shared system offers, the more rules participants must accept.

If every Web link required the target to acknowledge the source, targets would have more information about incoming relations. They would also gain a veto point. A government could refuse links from critics. A company could refuse links from comparison sites. A publisher could refuse links from archives. The relationship would become more informative and less permissionless.

If every link guaranteed preservation of the target's referenced state, somebody would have to store that state. Who pays? Who has the right to preserve it? What if it contains personal information later removed? What if the target is dynamic? What if the source has no right to copy it?

If every quotation remained live to the current source, historical accountability would become strange. An author could appear to have quoted words that did not exist when the work was written. If every quotation froze forever, corrections might never propagate.

Rich relations create rich disputes.

Thin relations postpone the disputes.

The Web postponed brilliantly.

Nelson forced them into view.

His concept of reader freedom also deserves more attention than the familiar phrase “choose your own path.” Hypertext changes authorship because a linked text acknowledges that the reader's sequence may differ from the author's sequence.

That can be liberating. It can also be exhausting.

A purely branching text can become a maze. Every link creates a decision. Every decision consumes attention. A reader who follows every source may never return. A writer who links every term may produce a document that feels less like an argument than a map with no recommended route.

Linear writing has an advantage that advocates of nonlinearity sometimes understate: it reduces choice.

That reduction can be a gift.

A good author has done the work of deciding what comes next.

The reader can surrender temporarily to the sequence.

Hypertext introduces optional exits without removing the author's responsibility for the road.

The best Web writing often depends on that balance. The main text remains coherent if the reader ignores every link. The links provide depth, evidence, definition, contradiction, attribution, or continuation for readers who want more. The sequence carries the argument; the graph carries the surrounding world.

This is a more modest form of nonsequential writing than Nelson imagined, but modesty helped it become a habit rather than a genre.

The hyperlink disappeared into ordinary prose.

That disappearance is easy to mistake for conceptual victory. In fact, many of Nelson's complaints remain unresolved.

Backlinks had to be reinvented by search engines and analytics systems because ordinary Web links were one-way. Webmentions and trackbacks tried to create explicit notification mechanisms. Wiki software made internal backlinks more visible. Knowledge tools now advertise “bidirectional links” as if they were a fresh discovery. Users who spend years inside the open Web can still be surprised by the experience of opening a note and immediately seeing every other note that refers to it.

Versioning remained largely outside the basic hyperlink. A URL may show the latest version, an old version, or a completely different resource depending on how the publisher manages it. Archives, version-control systems, content hashes, timestamped snapshots, and persistent identifiers emerged to supply stronger temporal guarantees where they mattered.

Provenance remains fragile. Copy-and-paste is still easier than preserving a structural relation to the source. Screenshots detach content from origin. Reposts travel without context. Generated summaries can absorb claims from many sources while making the path back to each source uncertain.

Payment remains external. Links can carry affiliate identifiers or lead to subscription flows, but the Web did not implement Nelson's dream of a universal publishing economy in which reuse and compensation were native properties of the document system.

These are not proofs that the Web was badly designed.

They are evidence that the Web solved a narrower problem spectacularly.

It made heterogeneous information reachable through a common architecture.

That narrowness created room for other systems to grow around it.

The history of technology is full of standards that win by doing less than their competitors and ecosystems that spend decades rebuilding the missing features above the winning layer.

Internet Protocol does not guarantee that an application succeeds. TCP does not understand the meaning of a bank transfer. Ethernet does not know whether a packet contains poetry. The lower layer becomes reusable precisely because it refuses to absorb every concern of the higher layers.

The hyperlink's thinness follows the same logic.

A general-purpose relation cannot know in advance whether it will be used for citation, criticism, commerce, navigation, identity, fraud, preservation, or software control.

The cost of generality is ambiguity.

Nelson wanted to recover more meaning.

The Web tolerated less meaning in exchange for more reach.

Neither side of that tension has disappeared.

Contemporary AI makes it sharper.

A language model can generate a sentence that synthesizes material from many sources. If the output includes only a flat list of citations, the relation between each claim and each source may be vague. Richer interfaces can attach citations at the claim level, preserve quoted spans, expose provenance, and let users inspect the exact source material. The design problem sounds new because the generator is new.

The underlying question is Nelson's question.

How much of the relationship between texts should the system remember?

If a machine transforms, summarizes, quotes, recombines, and translates material, what survives of the source relationship?

A bare link says where to go.

A richer hypertext system tries to say what happened between here and there.

That difference may define the next generation of publishing.

The Web trained us to celebrate reach. It became possible to connect almost anything to almost anything else. The next problem is legibility: can we understand the connections after machines begin creating and traversing them at a scale no human reader can follow?

Nelson's insistence that electronic documents could be more than pages looks less like a complaint from computing's prehistory and more like unfinished business.

He wanted readers to move freely.

He wanted authorship to survive recombination.

He wanted relationships to remain visible.

He wanted electronic literature to exploit the machine rather than cosplay paper.

The Web delivered enough of that dream to change civilization and omitted enough to keep the argument alive.

Before leaving Nelson, it helps to look at another part of the hypertext lineage because it keeps the history from collapsing into one charismatic personality. At Brown University, Andries van Dam and collaborators worked on early hypertext systems including the Hypertext Editing System. Their work belongs to a research tradition in which electronic text was not merely imagined but implemented, used, revised, and taught.

That distinction matters because implementation forces abstractions to encounter users.

A theorist can say that a text should be nonsequential. A working system has to decide how the reader sees a link, how an author creates one, how destinations are identified, what happens when material changes, how large documents are navigated, and how the machine responds when the structure becomes complicated.

Every one of those choices converts a philosophy of connection into an interface.

This is where hypertext stopped being only a metaphor for associative thought and became an engineering discipline.

The engineering discipline quickly learned that nonlinearity has costs.

A graph can preserve relationships that a sequence hides, but a graph can also make orientation difficult. Readers need cues about where they are, where they came from, and whether following one branch will make it hard to recover the original context. Later Web users would recognize the symptoms as too many open tabs, lost scroll position, forgotten origins, and the mild panic of not remembering which path produced the useful page now on screen.

The problem is not peculiar to bad interfaces. It follows from increasing the number of possible routes.

A highway network provides more freedom than one road and creates more opportunities to become lost.

Hypertext systems therefore need navigation aids in addition to links. History, breadcrumbs, maps, backlinks, overviews, visited-link states, search, and structural views are all ways of answering a question the edge itself cannot answer: where am I in relation to the rest?

The Web's familiar visited-link styling was a tiny response to that problem. The browser could visually distinguish a destination the user had already traversed. The convention was imperfect and became less reliable as styling and privacy concerns changed, but the underlying need is obvious. A reader navigating a network benefits from memory about prior movement.

This is a practical version of Bush's trail.

Nelson's richer vision pushed even harder on the idea that relationships should remain inspectable. If a quotation came from somewhere, the system should be able to retain the connection. If a document changed, the system should not pretend earlier relationships never existed. If an author reused another author's work, the reuse should have structural meaning.

The Web usually left those concerns to application layers.

That decision made the Web easier to adopt and made the application layer permanently busy.

Wikis added revision history.

Version-control systems made states immutable enough to compare.

Content-management systems added canonical URLs and redirects.

Archives created temporal snapshots.

Citation systems added persistent identifiers.

Knowledge tools added backlinks.

Social systems added mentions and notifications.

Publishing platforms added embeds and attribution.

Each can be read as an attempt to thicken one relationship the universal hyperlink kept thin.

The important lesson is not that Nelson was right and the Web was wrong, or the reverse. The useful lesson is architectural: the richer the guarantee, the narrower the community that can realistically agree to maintain it.

A university research group can define a sophisticated document model because its users operate inside one environment. A global Web connecting governments, companies, hobbyists, schools, newsrooms, laboratories, and individuals has to tolerate participants that share almost nothing except a few protocols and naming conventions.

The Web won the large network by lowering the semantic admission price.

Nelson keeps asking what was lost at the border.

One loss is reciprocal visibility.

If I link to you on the ordinary Web, your server does not automatically receive a durable semantic statement saying that my document now refers to yours. You may discover the link through logs, analytics, search crawlers, notification protocols, or outside services. But the base relation is authored on my side.

That asymmetry is part of what makes the link permissionless. It also means that the target's view of its own neighborhood is incomplete.

A knowledge tool with bidirectional links can answer “what refers here?” immediately because all nodes participate in one managed graph. The open Web requires reconstruction because no single owner sees every edge.

The missing backlink is therefore not merely a feature omission. It is the cost of decentralized authorship.

Another loss is explicit version identity. If I point to a living page, the target can change beneath my link. A richer system can bind the relation to a particular version while also exposing the current one. The Web can do this through versioned URLs, hashes, archives, and application-specific mechanisms, but not every publisher does.

Again the omitted guarantee creates later institutional work.

This pattern is important for the AI era because machine-generated text puts pressure on exactly the properties earlier hypertext researchers cared about.

When a system summarizes ten sources into one answer, provenance is a relationship problem.

When a model quotes or transforms material, transclusion's old concern with reuse reappears in new form.

When a generated document changes continuously, version identity becomes important.

When one agent's output becomes another agent's input, the ability to inspect relationships across transformations becomes an audit problem.

The old hypertext questions did not fail because the Web simplified them.

They waited above the winning layer.

That is what makes Nelson more than a colorful prehistory figure. His ambition is a standing reminder that reach and intelligibility are different achievements.

The Web achieved reach beyond anything the early hypertext community could demonstrate at comparable scale.

The next generation of knowledge systems has to recover intelligibility without surrendering that reach.

That will require richer relations selectively, not a universal bureaucracy around every link.

A casual reference can remain cheap.

A consequential transformation should remember more.

A public link can remain permissionless.

A claim used for a medical, legal, scientific, or financial decision may need versioned provenance.

A reader can remain free to branch.

A system helping the reader should preserve enough orientation that branching does not become amnesia.

That layered compromise is less pure than either extreme.

It is probably how useful infrastructure matures.

The next major figure in the story approached the same territory from another direction.

Douglas Engelbart was less interested in liberating literature than in improving what groups of people could accomplish together when problems became too complicated for unaided minds.

For him, links would not merely connect texts.

They would become part of a system for collective intelligence.