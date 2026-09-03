# Chapter 9 — Synthetic Sediment

The internet remembers copies better than origins.

A sentence is written on one site, quoted on another, scraped into a database, summarized in a newsletter, pasted into a forum, translated, rewritten, indexed and eventually encountered by someone who has no practical way to tell where it began.

This was true before generative artificial intelligence. The web has always been a copying machine.

AI changes the rate at which new material can enter the copying system and the ease with which that material can imitate forms we once associated with expensive human effort.

A thousand product descriptions can be generated before lunch. A network of sites can publish variations of the same article. Support forums can fill with plausible answers written by nobody who experienced the problem. Images can depict events that never happened. Audio can reproduce the sound of a person who never spoke the words. Code can be created, forked and embedded in other projects before anyone establishes where the first version came from.

The machine wake settles into the information environment.

Sediment is a useful metaphor because the problem is not simply that synthetic material exists. Rivers carry sediment naturally. Some sediment builds fertile deltas. Too much can clog channels, bury habitat or alter navigation. The consequence depends on volume, composition and where material settles.

Synthetic information works the same way.

Generated text can be excellent. It can translate knowledge, draft routine material, summarize complex sources, create examples, personalize instruction and help people communicate. Synthetic data can train models in settings where real data is scarce, sensitive or expensive. Generated code can accelerate software work. The category itself is not contamination.

The problem begins when origin stops mattering even though the next use depends on origin.

A reader deciding whether a poem is moving may not care who wrote the first draft. A scientist using a measurement does care whether it came from an instrument, a simulation or a model that predicted what the instrument might have said. A future model trainer cares whether a corpus contains independent observations of the world or repeated synthetic descendants of earlier models. A court cares whether an image is evidence of an event. A maintainer cares whether code was copied from a licensed project or generated from a model with uncertain provenance.

Information quality is purpose-dependent.

Generative systems blur categories faster than institutions can label them.

One version of this problem appears in model training. In 2024, researchers including Ilia Shumailov published a paper in *Nature* showing that models trained recursively on model-generated data can undergo forms of model collapse. When generated material replaces the tails and irregularities of the original data distribution, later generations can lose information and become distorted. The result is often summarized as “AI trained on AI gets worse.”

That slogan is too broad.

Synthetic data can be useful when it is deliberately generated, filtered, mixed with real data and validated. Researchers continue to study conditions under which synthetic data improves training rather than degrading it. The important distinction is between curated synthetic material used as a tool and uncontrolled recursive reuse that mistakes the model's previous outputs for fresh reality.

The machine can learn from its own work. It should not forget that it is doing so.

This is where provenance becomes important.

A piece of information has content and history. The content answers, “What does this say?” The history answers, “Where did this come from?” For much of everyday web use, content has dominated because history is inconvenient. Screenshots strip metadata. Copy and paste breaks chains. Social platforms recompress images. Search engines surface excerpts detached from context.

Generative media increases the value of preserving history because visual or linguistic plausibility no longer gives reliable clues.

The Coalition for Content Provenance and Authenticity, or C2PA, has developed technical specifications for content credentials that can carry signed provenance information with digital media. The approach does not attempt to prove that content is true. It can help prove facts about its origin and editing history when participating tools preserve and verify the metadata.

This distinction is essential.

A genuine photograph can document a misleadingly framed scene. A signed news image can be captioned falsely. An AI-generated illustration can be entirely appropriate and honestly labeled. Provenance tells you something about the artifact's chain, not whether the claim attached to it deserves belief.

Trust systems fail when they promise more than they can establish.

The opposite problem is that provenance can be removed. Research and standards discussions around synthetic-content transparency acknowledge that watermarks and metadata can be stripped, altered or lost in ordinary workflows. A screenshot can flatten a richly signed artifact into pixels. A platform can discard fields. An attacker can intentionally remove signals.

So absence of provenance cannot become proof of fraud.

This is a recurring difficulty in authenticity systems. A strong positive signal is valuable: this artifact came through a known chain. A missing signal is ambiguous: perhaps the artifact is false, perhaps the chain was broken, perhaps the creator used a tool that never added credentials.

The information environment will therefore contain layers of certainty rather than one universal authentic-or-fake bit.

That is manageable if institutions adapt.

Journalists can preserve original files and source chains for important media. Government agencies can sign official publications. Businesses can authenticate communications through known channels. Families can establish verification habits for urgent requests. Software systems can attach build and source provenance. The goal is not to label every joke on the internet. It is to strengthen origin where origin carries stakes.

The machine wake creates verification demand where verification used to be optional.

This demand has a cost.

Every organization that communicates publicly may have to spend more effort protecting its identity. Brands monitor impersonation. Executives warn employees about cloned voices. Banks teach customers not to trust caller ID. Government agencies publish scam alerts. Platforms invest in detection, moderation and provenance systems. Individuals learn to verify surprising messages through a second channel.

The cost of cheap generation appears in other people's authentication budgets.

We will return to this in the chapter on reputation. For now, the point is ecological: once synthetic material is cheap, the surrounding information environment adapts to its presence.

Search provides a useful example.

A search engine historically indexed pages created because someone had enough reason to publish them. The quality was wildly uneven, but publication imposed some friction. Generative systems lower that friction. Sites can produce thousands of narrowly targeted pages designed to capture queries. The search engine responds with quality systems, spam classifiers, authority signals and perhaps AI-generated answers of its own.

Generation creates sediment. Ranking becomes dredging.

Then the ranking system influences what gets generated next. Publishers optimize for what search rewards. Models are trained on what publishers produce. Search summarizes those pages. New pages summarize the summaries. The information ecosystem becomes recursive.

Recursion is not automatically decay. Human culture has always been recursive. Writers read writers. Scientists build on papers. Lawyers cite cases that cite earlier cases. Teachers use textbooks derived from scholarship. The difference is that human institutions developed conventions for attribution, citation, peer review, authorship and error correction because copying without lineage creates problems.

Synthetic information needs equivalent institutions at machine speed.

Citation is one of the oldest forms of provenance. It says: this claim did not appear from nowhere; go look here.

Generative systems can make citation easier by inserting links and tracing claims. They can also fabricate citations or cite sources they have not actually used. A trustworthy research system therefore needs retrieval records and verification beneath the prose. The formatted citation is only the visible receipt.

This book itself depends on that distinction. It can mention a study because a source ledger exists behind the chapter. The prose is readable because the evidence trail is stored elsewhere. That is an example of designed sediment: enough record remains that a future reader or editor can reconstruct the empirical basis without turning every paragraph into a bibliography.

The same pattern can be used in generated corporate work.

An AI-written market report should carry source references. A medical summary should distinguish patient records from external knowledge and model inference. A legal draft should preserve the authorities it relied on. A coding agent should record which repository state it read and which tests it ran. Generated material becomes safer when its ancestry remains accessible.

The challenge is keeping ancestry through transformation.

Suppose an agent reads five reports and produces a summary. Another agent reads that summary and makes a presentation. A third turns the presentation into a memo. By the end, a particular number may be three transformations away from its original source. If the provenance system merely says “AI-generated,” it has lost the useful part.

The chain needs claim-level or artifact-level references that survive compression.

This is technically and socially difficult. Fine-grained provenance creates overhead. People edit machine output. Sources change. URLs break. Some knowledge is common enough that citation is unnecessary. Confidential sources cannot always be exposed. A perfect lineage graph for every sentence would make communication unbearable.

So the design problem is selective again.

Preserve origin where error, ownership or authenticity matters.

This may lead to a future in which important digital objects carry compact histories the way packaged food carries ingredients and expiration dates. Not a complete autobiography. Enough to make informed use possible.

There is another kind of synthetic sediment: duplicates.

When generation is cheap, the same basic idea can appear in thousands of slightly different forms. This makes quantity a poor proxy for independent support. If one false claim is paraphrased by ten thousand generated pages, a naive system counting agreement can mistake replication for consensus.

The internet already has versions of this problem through syndication and coordinated publishing. AI can amplify it dramatically.

Future research systems will need to infer source independence.

Ten articles that ultimately cite one press release are one evidence lineage, not ten. Five model answers trained on overlapping data are not five independent expert judgments. A thousand social posts generated from one script are not a thousand independent witnesses.

Consensus without lineage is vulnerable to synthetic multiplication.

This matters for markets and politics, but it also matters for mundane product decisions. A shopping agent might search reviews and find hundreds of near-duplicate generated opinions. A business analyst might estimate customer sentiment from posts that were created by a marketing campaign. A model evaluator might test on questions that leaked into training through synthetic republishing.

The wake can bend measurement.

This is why dataset construction has become an increasingly difficult craft. Researchers need to know what is in a benchmark, where examples came from and whether the model being tested has seen them. As generated content spreads, contamination detection becomes harder. A benchmark question may be copied into blogs, forums and synthetic study guides, then scraped into future training data.

The test enters the training environment.

NIST's recent AI evaluation programs use controlled and sequestered test environments partly to reduce this problem. Blind data becomes more valuable when public data is easily absorbed and reproduced.

The information ecosystem starts to need reserves of uncirculated reality.

That phrase sounds strange, but the idea is familiar in science. Holdout samples, blinded trials and undisclosed test sets exist because measurement fails when the subject has access to the answer key. AI evaluation expands the demand for fresh, independent material that models have not already consumed.

Human-generated data becomes valuable not because humans are magically pure but because independence matters.

Even then, a human can use AI while producing the supposedly human material. Origin becomes layered. Was the essay written by a person with machine editing? Was the image captured by a camera and then heavily generated? Was the code written by a developer who accepted a model suggestion?

Binary labels will often be inadequate.

This is another reason provenance should record processes rather than moral categories. “AI-generated” can mean fully synthetic, lightly assisted, transformed, translated, cleaned or merely routed through a tool. What matters depends on the use.

Copyright provides one example. The legal significance of human authorship and machine assistance can turn on details that a simple label cannot capture. Scientific integrity provides another. A researcher may legitimately use AI to edit prose while the underlying data remains measured. In journalism, using AI to transcribe an interview is different from inventing an image of the event.

The wake needs vocabulary.

Without it, debates collapse into “real” and “fake,” categories too crude for hybrid production.

There is also a preservation problem. Digital archives may eventually contain enormous amounts of material whose production context is unknown. Historians studying the early AI era will have to distinguish firsthand human documents, machine-generated simulations, marketing artifacts and automated commentary. The present is creating source-criticism problems for the future.

Libraries and archives have always handled provenance. A manuscript has a collection history. A photograph has a date, photographer and catalog record. Digital abundance tempts us to think storage alone equals preservation. It does not. A billion files without context can be less useful than a smaller collection with reliable metadata.

Sediment becomes geology only when layers can be read.

This suggests that some of today's most boring metadata standards may become tomorrow's historical infrastructure.

A content credential, a signed timestamp, an original URL, a model version, a source citation—each looks small. At scale, they preserve distinctions that generation would otherwise wash away.

The danger is that provenance itself becomes a luxury available only to large institutions. If major platforms can sign content while independent creators cannot, authenticity signals could become confused with institutional status. Open standards and accessible tools matter because trust infrastructure should not require permission from one company.

The same is true for detection.

AI-content detectors have repeatedly struggled with false positives, evasion and changes in model behavior. NIST's 2026 evaluation work on generated text explicitly studies the gap between generation and detection. Some generated summaries in earlier pilots fooled every detector tested. A world that relies entirely on statistical detection will produce mistakes, especially when ordinary people are accused of generating work they actually wrote.

Provenance is generally stronger when available because it records process rather than guessing from style. Detection still has a role when provenance is absent, but uncertainty must be communicated.

The machine wake teaches a broader rule: evidence created at production time is usually better than forensic guessing later.

If an important artifact can carry trustworthy origin when it is made, do that. Do not assume a future classifier will reconstruct the truth from pixels or prose.

This does not solve the flood.

Cheap generation will still create more material than people can read. Some of it will be useful. Some will be spam. Much will be mediocre and harmless. The scarce resources will be attention, verification and curation.

In that environment, restraint becomes a production skill.

A system that generates only what will be used leaves a smaller informational wake than one that produces thousands of speculative artifacts because storage is cheap. An agent that summarizes sources without republishing them verbatim creates less duplicate material. A company that deletes abandoned synthetic experiments instead of indexing them into every internal search system reduces future confusion.

The principle resembles physical waste management: do not create material merely because disposal feels free.

Information disposal is never completely free because copies escape. Once public, synthetic material can be scraped, archived and quoted beyond the creator's control. Deleting the original does not recall the downstream versions.

The wake becomes permanent through replication.

That fact should raise the threshold for publishing more than for generating privately. It is reasonable to create ten drafts and keep one. It is less reasonable to publish all ten simply because machines made them cheaply.

The old internet rewarded publication. The AI internet may need to rediscover editing.

Editing is a sediment-control technology.

It removes duplicates, rejects weak claims, preserves stronger evidence, adds context and decides that some things need not be released. Human editors have done this for centuries. Machines can help, but the function remains necessary because generation and selection are different economic acts.

The future information environment will not be ruined merely because machines write in it. It will be shaped by whether we preserve distinctions machines make cheap to erase: source and copy, observation and simulation, independent evidence and repetition, private draft and public artifact, authentic origin and plausible imitation.

A river can carry enormous material and remain navigable if its channels are understood and maintained.

The web now needs its dredgers, surveyors and sediment maps.
