# Chapter 10 — Search Without Keywords

For most of the history of search, the safest way to find a document was to know the words inside it.

If the page said **refund policy**, the query should probably say **refund policy**.

If the database contained **termination clause**, searching for **ending my contract early** might work only if someone had anticipated the synonym, expanded the query or written the right rules.

Words were not just meaning.

Words were addresses.

Modern embedding systems loosen that requirement.

A user can ask:

> Can I get my money back if I cancel after two weeks?

and the system can retrieve a passage titled:

> Subscription reimbursement terms

without depending on exact lexical overlap.

The query and the passage can meet because their vectors are nearby.

Meaning has become an index.

That sounds like a feature.

It is more than a feature.

It changes what it means for information to be findable.

The central idea of this chapter is:

> **Search no longer needs to begin with shared words. It can begin with shared geometry.**

But geometry does not abolish keywords.

It adds another retrieval language beside them.

Understanding the difference is the key to building search systems that are powerful without becoming credulous about what similarity means.

---

## The old bargain: say the right words

Classical text retrieval became extraordinarily good at a specific problem.

Given a query and a large corpus, find documents whose terms provide evidence of relevance.

The machinery is elegant.

Documents are tokenized.

Terms are indexed.

Common words can be discounted.

Rare terms can carry more weight.

Queries can be matched against an inverted index without reading every document at search time.

Systems such as BM25 became strong baselines because lexical evidence is often exactly what matters.

A product code should match the product code.

A person's name should match the person's name.

A legal citation should often match the legal citation.

An error message should often match the error message.

Words can be brittle addresses.

They can also be wonderfully precise ones.

The weakness appears when two pieces of language express the same intent using different surface forms.

**heart attack** and **myocardial infarction**.

**car** and **automobile**.

**how do I stop paying every month?** and **subscription cancellation**.

Humans bridge these gaps almost automatically.

A purely lexical system needs help.

Thesauri.

Stemming.

Synonym tables.

Query expansion.

Handwritten rules.

Learned sparse expansion.

Or a different representation entirely.

---

## The query becomes a point

Dense retrieval begins with a move we now know well.

Encode the query into a vector.

Encode each document or passage into a vector.

Then compare them in the learned space.

If the training objective has done its job, semantically relevant query-document pairs tend to receive higher similarity scores than irrelevant pairs.

Now retrieval becomes nearest-neighbor search.

The query is not just a bag of words.

It is a location—or, more precisely, a vector produced from the query by a particular model under a particular representation scheme.

The corpus becomes a cloud of candidate locations.

Search asks:

Which stored vectors lie nearest to this new one?

This is why dense retrieval felt like such a conceptual break.

The system does not need the query to contain the same tokens as the answer passage.

It needs the training process to have placed paraphrases, related questions and relevant answers into useful geometric relationships.

The index has moved from vocabulary space toward learned representation space.

---

## Retrieval is inference over an index

This deserves emphasis.

Search is sometimes described as though the system simply “understands” the question and finds the answer.

That skips the machinery.

A dense retriever usually separates the problem into two stages.

Before the user arrives, documents are encoded and their vectors are stored.

When the query arrives, it is encoded separately.

The system searches the vector index for nearby candidates.

This architecture is powerful because expensive document encoding can happen offline.

The query must be processed online, but the corpus does not need to be re-read from scratch.

This is the same strategic move we saw with embeddings generally:

convert expensive interpretation into reusable coordinates.

The representation becomes infrastructure.

Once a document has a vector, many queries can navigate toward it.

---

## Search is no longer only matching

Keyword retrieval asks a question like:

Which documents contain strong lexical evidence for these terms?

Dense retrieval can ask something closer to:

Which documents occupy the region associated with this intent?

That difference changes the kinds of queries a system can answer well.

Natural-language questions become more useful.

Messy paraphrases become less fatal.

Users do not need to know the vocabulary used by the document author.

A customer can describe a problem in ordinary language.

An employee can search an internal knowledge base without knowing the title of the policy.

A researcher can retrieve passages related to a concept even when terminology varies.

An agent can convert a goal into a vector and retrieve memories whose wording differs from the current situation.

This is why semantic search becomes foundational later in this book.

It is not merely a better search box.

It is one of the bridges between vectors and memory.

---

## But “semantic” is a dangerous compliment

The phrase **semantic search** can make the system sound more authoritative than it is.

The retriever does not consult meaning in the abstract.

It computes similarity inside a learned representation.

That space inherits the objective, examples, architecture and data that created it.

So the more precise phrase would be:

**search by learned representational similarity**.

Less catchy.

More accurate.

A query can be close to a passage for the wrong reason.

Shared topic.

Shared style.

Shared entities.

Shared sentiment.

Shared background vocabulary.

A document can be semantically related without answering the question.

Ask:

> What medications should not be taken with Drug X?

A dense system may retrieve a highly related page about Drug X's side effects.

Related is not relevant enough.

This is one of the most important distinctions in retrieval:

> **Similarity generates candidates. Relevance is a stronger claim.**

---

## The nearest passage can still be wrong

Chapter 6 warned that nearest does not mean good.

Search makes that warning operational.

A vector index will usually return something.

If asked for the nearest five passages, it can return five passages even when none is useful.

The geometry only establishes relative proximity among the available candidates.

It does not guarantee an absolute level of relevance.

This is why robust systems often add thresholds, rerankers, lexical constraints, metadata filters or abstention behavior.

A search system should sometimes say:

I do not have a good result.

Top-k is not confidence.

Nearest is not enough.

---

## The compression problem

A document can contain hundreds or thousands of ideas.

A single vector has finite dimensionality.

Encoding an entire document into one vector therefore compresses many possible relationships into one representation.

That compression can be useful.

It can also blur details.

Suppose a long employee handbook contains policies on travel, harassment, parental leave, security, expenses and resignation.

One vector for the entire handbook must somehow represent all of them.

A query about reimbursement may be close to the document overall, but the system still needs to locate the relevant passage.

This is why chunking becomes so important.

Instead of embedding the whole document, divide it into passages.

Each passage receives its own vector.

Now the search can retrieve a more precise unit.

But chunking is another design choice.

Too large, and unrelated ideas are compressed together.

Too small, and context is fragmented.

A sentence may depend on the paragraph before it.

A policy exception may live just outside the chunk boundary.

A heading may carry the meaning of several lines beneath it.

There is no universally correct chunk size.

The retrieval unit should match the information task.

---

## The index is part of the model

People often speak as though the embedding model alone determines search quality.

In practice, the index and retrieval configuration matter too.

Which vectors are stored?

How are they normalized?

Which distance or similarity function is used?

How many candidates are retrieved?

Is search exact or approximate?

How aggressively is memory compressed?

Which metadata filters run before or after vector search?

How frequently is the corpus re-embedded?

Which documents are excluded by permissions?

How are duplicates handled?

What happens to deleted content?

The deployed search system is the combination.

An excellent embedding inside a poor index can produce a poor product.

A fast index cannot rescue a geometry that does not express the task.

The representation and the retrieval system form one instrument.

---

## Approximate search makes scale possible

If the corpus contains a few thousand vectors, comparing a query against every vector may be acceptable.

At millions or billions, exhaustive comparison becomes expensive.

Approximate nearest-neighbor methods trade some exactness for speed and memory efficiency.

The system builds structures that allow it to avoid inspecting every candidate.

That is how vector search scales.

But the word **approximate** matters.

The mathematically nearest neighbor can exist in the index and still fail to be returned.

Now search quality depends on two distinct forms of approximation:

1. **Representation approximation** — the vector is only a compressed learned representation of meaning or relevance.
2. **Index approximation** — the retrieval algorithm may not return the exact nearest vectors under that representation.

These errors can compound.

A semantic search system is therefore not one act of understanding.

It is a pipeline of approximations.

That is not an insult.

All practical information retrieval is approximate in some sense.

The important thing is knowing where approximation enters.

---

## Dense retrieval changed the first stage

Traditional neural ranking often worked like this:

First use a fast lexical system to retrieve candidates.

Then use a more expensive neural model to rerank them.

The neural model could read the query and candidate together, allowing rich interactions between their tokens.

But it could not afford to compare the query against every document in the corpus.

Dense dual-encoder retrieval changed that tradeoff.

The query and document could be encoded independently.

Their vectors could be compared cheaply enough for first-stage retrieval.

This made learned semantic similarity usable much earlier in the pipeline.

The price was compression.

If each query and passage becomes one vector, detailed token-to-token interaction is postponed or discarded.

The architecture gains retrieval speed by restricting how query and document can interact at search time.

Once again:

Representation is a bargain.

You preserve some relationships so that computation becomes cheap.

---

## Late interaction splits the difference

There is more than one way to turn language into searchable geometry.

Some systems represent an entire passage with one vector.

Others preserve multiple token-level or sub-passage vectors and perform a richer interaction after retrieval begins.

Late-interaction approaches such as ColBERT occupy an important middle ground.

They precompute document representations, preserving much of the efficiency advantage, but retain finer-grained interactions between query and document representations.

This complicates the simple story that semantic search means “one vector per document.”

That story is pedagogically useful.

It is not the whole field.

The deeper pattern is:

> **Retrieval architectures choose where to spend interaction.**

Spend almost none at query time and search becomes fast but heavily compressed.

Spend more and relevance can become more expressive at greater computational cost.

The system designer is allocating intelligence across stages.

---

## Keywords did not die

Dense retrieval inspired an easy narrative:

old search matched words;

new search understands meaning;

therefore keywords are obsolete.

Reality refused to cooperate.

Across heterogeneous retrieval benchmarks, lexical systems such as BM25 have remained strong and surprisingly robust baselines.

Dense systems can excel in some domains and generalize poorly in others.

Late-interaction and reranking systems can outperform simpler approaches but cost more.

Learned sparse systems have also shown that neural models can expand and reweight lexical representations rather than abandoning them.

The field did not move from keywords to vectors.

It developed more retrieval languages.

This matters because exact lexical identity carries information geometry can blur.

Consider:

`CVE-2026-12345`

`ERR_CONNECTION_RESET`

`Section 17(b)(4)`

`AB- negative`

`RX-4087`

A product SKU.

A person's exact surname.

A quoted phrase.

A rare gene symbol.

A version number.

Semantic similarity may be actively unhelpful if it retrieves something that looks conceptually related but is not exactly the requested identifier.

Keywords are not primitive remnants.

They are one high-precision sensor.

---

## Hybrid search is sensor fusion

Once you stop treating retrieval methods as ideological camps, hybrid search becomes obvious.

Lexical retrieval contributes evidence from exact or weighted term overlap.

Dense retrieval contributes evidence from learned semantic geometry.

Sparse neural methods can contribute learned lexical expansion.

Rerankers can contribute deeper query-document interaction.

Metadata contributes structured constraints.

Recency contributes time.

Permissions contribute access policy.

Popularity may contribute behavioral evidence.

The final ranking can combine several signals.

This is not an admission that embeddings failed.

It is recognition that relevance is multidimensional.

> **Hybrid retrieval is not compromise. It is sensor fusion.**

A robust search system often benefits from independent ways of being right.

---

## Search begins before the query

A surprising amount of search quality is determined before any user types anything.

Which corpus was indexed?

Which version of each document?

How was boilerplate removed?

How were tables represented?

Were images converted to text or embedded separately?

What was chunked together?

What metadata was retained?

What was excluded?

Which embedding model encoded the corpus?

Which language versions were supported?

Which documents had enough context to be interpretable?

The query cannot retrieve what the index did not preserve.

This gives us a broader principle:

> **Retrievability is designed upstream.**

If a fact is buried in an unindexed attachment, semantic sophistication does not help.

If a table was shredded during parsing, geometry cannot reconstruct the original relationships reliably.

If permissions removed a document from the candidate set, similarity is irrelevant.

The map can only contain what the mapping process admitted.

---

## The query encoder interprets the user

When a user submits a query, the embedding model compresses that query into coordinates.

That is an act of interpretation.

Consider:

> jaguar speed

Does the user mean the animal?

The car?

A sports team?

A software project?

A processor?

Context may resolve the ambiguity.

Without context, a single vector still has to go somewhere.

A search engine may use query history, surrounding conversation, locale or other signals to make the representation more specific.

Now the query vector contains more than the literal string.

This can improve retrieval.

It also raises governance questions.

Which context is appropriate to use?

What privacy assumptions apply?

Could personalization trap users inside familiar neighborhoods?

Could a representation trained on dominant interpretations suppress minority meanings?

Search without exact keywords increases expressive power.

It also increases the amount of interpretation performed by the system.

---

## Relevance can be asymmetric

Similarity metrics are often symmetric.

If vector A is close to vector B, vector B is equally close to vector A under the same symmetric metric.

Relevance is not necessarily symmetric.

A short query can be relevant to a long document even when the reverse framing makes little sense.

A question seeks an answer.

An answer does not seek a question in the same way.

A job applicant may match a job requirement differently from how the job matches the applicant's preferences.

A user may want a product that fits a need, while the seller optimizes for conversion.

This is one reason retrieval systems often learn separate query and document encoders or use asymmetric training pairs.

The geometry is engineered around a directional task even if the final similarity operation looks symmetric.

The vector space inherits the asymmetry from how its points were produced.

---

## Negative examples teach what not to retrieve

The previous chapter showed how embedding objectives create geometry.

Search gives that abstraction teeth.

A retriever needs positive examples:

this query should retrieve this passage.

It also needs negative evidence:

this passage may look plausible, but it should rank lower.

Easy negatives teach broad distinctions.

Hard negatives teach boundaries.

A passage about subscription pricing may be topically similar to a query about subscription cancellation but still irrelevant.

If training includes only obviously unrelated negatives, the model may learn topic matching rather than answer relevance.

Search quality therefore depends on the curriculum of confusions presented during training.

> **A retriever learns relevance partly from the mistakes it is forced to distinguish.**

This is why hard-negative mining became important in dense retrieval.

The difficult near-misses define the shape of the decision surface.

---

## False negatives distort the map

Hard negatives introduce their own risk.

A passage labeled negative may actually contain a valid answer.

Now training pushes a relevant item away.

In a large corpus, multiple passages can legitimately answer the same query.

Annotation may identify only one.

This means the training geometry can punish redundancy even when redundancy is useful.

The lesson generalizes beyond retrieval.

Labels describe what the dataset knows, not everything that is true.

A negative example is a claim about the world.

Treat it accordingly.

---

## Search quality is partly a recall problem

Suppose a perfect reranker waits at the end of the pipeline.

It can identify the best passage with flawless accuracy.

But the first-stage retriever fails to include that passage in its candidate set.

The perfect reranker is powerless.

This is why recall matters so much in retrieval.

The early stage determines what later intelligence is allowed to consider.

The implication reaches far beyond search.

In retrieval-augmented generation, the generator cannot reason over a document it never receives.

In agent memory, the model cannot remember an episode that retrieval fails to surface.

In recommendation, the ranker cannot select an item excluded during candidate generation.

Candidate generation is a gate on cognition.

> **What does not enter the candidate set may as well not exist for the next stage.**

That is an extraordinary amount of power for an index.

---

## Retrieval creates an epistemic horizon

Imagine an AI assistant connected to a company's knowledge base.

The organization may contain millions of documents.

The model cannot place all of them into working context.

Retrieval chooses which few become visible.

Those retrieved passages shape the answer.

The search layer therefore helps determine the assistant's effective knowledge at that moment.

Not everything stored is equally knowable.

Some information is easy to retrieve.

Some lives in dense semantic neighborhoods with clear phrasing.

Some is isolated by unusual terminology.

Some is hidden behind poor chunking.

Some is excluded by access controls.

Some has an embedding that does not align well with likely queries.

The result is an epistemic horizon:

what the system can readily bring into view from where the query stands.

This is one of the most important consequences of vector search.

> **Search does not merely find knowledge. It helps define what knowledge is practically available.**

---

## Rank is attention

A search engine rarely returns one document.

It returns an ordered list.

That means retrieval geometry becomes attention allocation.

Rank 1 is more visible than rank 20.

Rank 20 is more visible than rank 2,000.

A small score difference can produce a large difference in exposure.

We have seen this transformation before:

continuous geometry → discrete ordering → unequal attention.

This is where technical ranking choices become institutional choices.

For a company knowledge base, rank affects which policy employees see.

For scientific search, rank affects which papers enter a researcher's awareness.

For legal retrieval, rank affects which precedents receive attention.

For public search, rank can affect which sources become culturally salient.

The embedding does not decide alone.

But it can become part of the machinery that decides visibility.

---

## Relevance is not truth

A retriever can be excellent and still retrieve false information.

If a misleading document is highly relevant to the query, relevance scoring may correctly rank it highly.

Search answers:

Which items appear relevant under the system's evidence?

It does not automatically answer:

Which claims are true?

Which source is authoritative?

Which document is current?

Which policy supersedes another?

Which study replicated?

Which statement is safe to act on?

Those require additional signals.

Source quality.

Authority.

Recency.

Provenance.

Cross-checking.

Verification.

This matters enormously for retrieval-augmented AI.

Adding retrieval does not turn generation into truth.

It changes the evidence available to generation.

If retrieval supplies bad evidence efficiently, the system can become confidently well-informed about the wrong thing.

---

## Time is another dimension the vector may not know

A document can be semantically perfect and operationally obsolete.

A pricing policy from last year.

An expired security procedure.

An outdated medical guideline.

A deprecated API reference.

A previous version of the law.

Embeddings often encode content much more directly than temporal validity.

A search system that ignores recency can retrieve the right topic from the wrong time.

This is why metadata filtering and ranking signals remain essential.

The relevant geometry is not always purely semantic.

Sometimes the correct answer is:

nearby **and** current.

nearby **and** authorized.

nearby **and** in stock.

nearby **and** applicable in this jurisdiction.

The vector is one coordinate system inside a larger decision space.

---

## Model upgrades move the corpus

Suppose a company embeds ten million documents with Model A.

Months later, Model B is released and produces much better retrieval quality.

Can the company simply start encoding new queries with Model B?

Usually not safely.

The old documents live in Model A's coordinate system.

The new queries live in Model B's.

Even if both vectors have the same dimensionality, the coordinates are not automatically compatible.

The organization may need to re-embed the corpus.

That is a migration project.

Compute.

Index rebuilds.

Versioning.

Evaluation.

Rollback.

Dual-running systems.

Cache invalidation.

Consistency during transition.

This is the operational consequence of Chapter 4's basis lesson.

Coordinates need provenance.

At scale, representation changes become infrastructure changes.

---

## Search without keywords is search with assumptions

Removing dependence on exact wording does not remove assumptions.

It changes where they live.

In lexical search, assumptions appear in tokenization, weighting, expansion and ranking.

In dense search, they also appear in training pairs, embedding objectives, negative sampling, corpus construction, vector dimension, normalization and metric choice.

In hybrid systems, assumptions appear in how signals are fused.

There is no assumption-free search.

There is only search whose assumptions are more or less visible, testable and appropriate to the task.

That is a more useful standard.

---

## A search system should be evaluated by failure mode

Average retrieval scores can hide important operational differences.

Two systems may achieve similar average performance while failing on different queries.

One misses rare identifiers.

Another overweights lexical overlap.

One performs poorly on long questions.

Another struggles with short ambiguous queries.

One generalizes weakly to a new domain.

Another fails on minority languages.

One retrieves topically related but non-answering passages.

Another retrieves precise passages but misses paraphrases.

The right evaluation therefore includes deliberate failure sets.

Exact names.

Numbers.

Negation.

Rare entities.

Paraphrases.

Domain shifts.

Temporal queries.

Long-tail language.

Adversarial wording.

Permission boundaries.

Empty-answer cases.

Search should be tested not only on how often it succeeds but on **how it fails**.

---

## The best retrieval architecture depends on the cost of being wrong

For a shopping catalog, a slightly irrelevant result may be tolerable.

For legal research, missing the controlling authority may be serious.

For medical guidance, retrieving a semantically related but inapplicable passage can be dangerous.

For code search, exact symbols may matter more than topic similarity.

For an internal wiki, broad semantic recall may be the main problem.

For an agent's memory, retrieving an approximate past situation may be exactly what we want.

There is no universally best retrieval geometry because relevance itself depends on the task.

The correct system is built backward from the cost structure of error.

What is worse:

missing a relevant item,

or retrieving an irrelevant one?

How expensive is reranking?

How large is the corpus?

How often does it change?

How exact are the identifiers?

How heterogeneous are the domains?

How important is explanation?

How strict are latency requirements?

Those questions determine architecture more reliably than fashion.

---

## The phrase “search without keywords” is intentionally incomplete

Keywords still matter.

Language still matters.

Structure still matters.

Metadata still matters.

The title points to a capability, not a replacement.

A machine can now retrieve across lexical distance.

That is the breakthrough.

The user no longer needs to guess the author's vocabulary.

The document no longer needs to contain the query's exact phrasing.

Meaning can create an address where wording did not.

But the address exists only inside a learned space.

And a learned space is designed.

---

## From search to memory

Something profound happens when semantic retrieval is attached to a generative model.

The vector index stops looking like a search product.

It starts looking like memory.

A query is produced from the current context.

The system retrieves nearby external representations.

Those retrieved items enter working context.

The model behaves as though relevant information has been recalled.

This is not biological memory.

But functionally, the analogy becomes useful.

Storage alone is not memory.

Memory requires retrieval.

A fact that exists in the database but can never be found is practically absent from cognition.

Later we will return to this directly.

For now, the key transition is enough:

Search used to be a destination.

You typed words into a box and received pages.

In AI systems, search becomes an internal cognitive primitive.

Agents search memories.

Models search documents.

Recommendation systems search candidates.

Multimodal systems search across images and text.

The retrieval step may happen without a human seeing a search interface at all.

---

## The invisible search box

This may be the largest consequence of semantic retrieval.

Search is disappearing into systems.

A user asks a question.

Behind the interface, the system may create several queries.

Rewrite them.

Embed them.

Search multiple indexes.

Filter candidates.

Rerank passages.

Retrieve supporting evidence.

Then generate an answer.

The user sees no search results page.

But retrieval still determines which evidence enters the model's field of view.

Search has become invisible infrastructure.

And invisible infrastructure deserves more scrutiny, not less.

When a visible search engine ranks ten blue links, users can inspect alternatives.

When an AI system silently retrieves three passages and synthesizes one answer, the candidate set disappears behind the response.

The geometry becomes harder to audit precisely as it becomes more consequential.

---

## Ask what was not retrieved

When a retrieval-augmented system produces a wrong answer, people naturally inspect the answer.

A better debugging habit begins one stage earlier.

What did the retriever see?

What did it miss?

Was the relevant document indexed?

Was it chunked correctly?

Did the query representation capture the intended meaning?

Did lexical search find something dense search missed?

Did metadata filters remove the correct result?

Did approximate search fail to surface it?

Did the reranker demote it?

Was an obsolete document ranked above the current one?

Was the top-k too small?

The absence may explain the generation.

> **Before asking why the model said the wrong thing, ask what evidence the retrieval system made available to say anything at all.**

That is the operational habit this chapter is trying to teach.

---

## The new retrieval literacy

Search without keywords requires a new set of questions.

What is the embedding model optimized to consider similar?

What is the retrieval unit?

What metric is used?

Are vectors normalized?

How are negatives selected during training?

Which domains were represented in the training data?

What exact identifiers must remain lexically searchable?

Is BM25 or another lexical signal retained?

How are dense and sparse scores combined?

How many candidates are retrieved?

Is the nearest-neighbor search approximate?

What recall is lost for the latency gained?

Is there a reranker?

What happens when no result is good?

How are time, permissions and provenance represented?

How is the corpus re-embedded after model upgrades?

Which failure cases are tested separately from averages?

And always:

What information is difficult to retrieve from this part of the space?

---

## The map becomes a gate

We began this book with an arrow.

Then coordinates.

Then distance.

Then neighborhoods.

Then words became places.

Then we watched the embedding machine construct those places.

Now the map begins to control access.

A query enters the space.

Some documents become near.

Others become far.

The near ones enter the candidate set.

The far ones disappear from consideration.

Ranking converts geometry into attention.

Retrieval converts attention into available evidence.

Available evidence shapes decisions.

This is the first moment in the book where vector geometry becomes unmistakably institutional.

The system is no longer merely representing meaning.

It is deciding which meaning gets surfaced.

That is why semantic search matters beyond search.

It is a prototype for a larger pattern:

**represent → compare → rank → expose → act.**

We will see that pattern again in recommendation, multimodal systems, memory and agents.

The vectors do not remain coordinates for long.

Once a system can navigate the space, coordinates become choices about what enters view.

Search without keywords is therefore not the end of keywords.

It is the beginning of something larger.

A world in which meaning itself can be indexed.

And once meaning can be indexed, it can be retrieved before anyone remembers the words.
