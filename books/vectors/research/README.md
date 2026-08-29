# Research Brief

## Thesis under test

*Vectors* asks how vector representations became a practical language for machine intelligence and what follows when text, images, products, users, memories and goals are represented in spaces where proximity and direction can be computed.

The strong claim — that vectors reveal an objective geometry of meaning — is false. Representations depend on data, objectives, architecture, preprocessing, dimensionality, similarity metric and training dynamics. Different models can organize the same objects differently while remaining useful for their tasks.

The narrower claim worth testing is this:

> Vector representations are powerful because they preserve selected relationships in a form that supports efficient comparison, retrieval, clustering, composition and optimization; their usefulness comes from the geometry they induce, not from the numbers having intrinsic semantic meaning.

A second claim follows:

> As vector systems mediate more consequential decisions, representational choices become governance choices: what counts as near, relevant, typical, anomalous or aligned can affect what people see and what machines do.

The manuscript therefore treats vectors at three levels at once: elementary linear algebra, learned representation, and institutional consequence.

## What would weaken the argument?

Evidence that should materially change the book includes:

- domains where vector representations offer little advantage over symbolic, lexical or structured methods once cost and interpretability are included;
- evidence that high-dimensional similarity is too unstable or context-dependent to support reliable retrieval at practical scale;
- cases where vector-space bias measurements do not correlate with downstream behavior or impact;
- evidence that learned representation geometry is largely epiphenomenal and does not help explain model behavior beyond task performance;
- failures of multimodal embedding spaces to preserve useful cross-modal relationships outside narrow benchmarks;
- evidence that model-steering directions are too brittle across prompts, layers, models or contexts to justify directional interpretations;
- retrieval systems where embedding similarity systematically underperforms lexical or structured search for important user needs;
- strong evidence that vector databases are mostly an implementation convenience rather than a durable architectural primitive.

Counterexamples should remain in the manuscript rather than being treated as exceptions to a predetermined story.

## Evidence lanes

### Linear algebra foundations

Use standard linear algebra references for vector spaces, bases, linear transformations, norms, dot products, cosine similarity, projection, orthogonality and eigenstructure. Keep geometric intuition distinct from the formal conditions under which it applies.

### Distributional language representations

Use early neural language-model work, word2vec and GloVe to show the shift from sparse symbolic representations toward dense learned vectors. Avoid implying that famous word analogies prove a universal algebra of language.

### Contextual representation

Use transformer and contextual-embedding literature to explain why one fixed vector per word is insufficient. Distinguish token embeddings, hidden states, pooled sentence representations and task-specific embeddings.

### Semantic similarity and retrieval

Use information-retrieval literature plus modern dense-retrieval work. Compare dense vector search with lexical approaches such as BM25 and with hybrid systems. Relevance is not the same thing as geometric closeness.

### Approximate nearest-neighbor systems

Use FAISS and related ANN literature for the engineering tradeoffs among exact search, quantization, graph indexes, latency, memory and recall. Do not imply that vector databases change the underlying mathematics of nearest-neighbor search.

### Multimodal embeddings

Use CLIP and later multimodal work to show how paired data can align representations from different modalities. Be careful with claims that image and text representations occupy one perfectly unified semantic space.

### Recommendation

Use matrix factorization, collaborative filtering and modern recommender-system literature. Separate user/item latent-factor models from general-purpose language-model embeddings.

### Bias and representation

Use work on embedding associations, representational harms and downstream fairness. Treat geometric bias tests as diagnostics with limitations, not direct measures of social harm.

### Representation interpretability

Use mechanistic-interpretability and representation-analysis literature to distinguish individual dimensions from distributed features and directions. Avoid equating a probe’s success with proof that a concept is cleanly represented or causally used.

### Steering and activation directions

Treat this as time-sensitive. Re-verify activation steering, representation engineering and related model-control techniques before release. Distinguish correlational directions, causal interventions and robust behavioral control.

### Agents, memory and retrieval

Use primary system papers and documentation for retrieval-augmented generation and agent memory. Distinguish episodic storage, semantic retrieval, working context and model parameters.

## Source discipline

- A vector is always defined relative to a space and representation process; avoid saying an object “is” its embedding.
- Name the similarity metric when it matters. Euclidean distance, cosine similarity and dot product are not interchangeable by default.
- Record whether vectors are normalized before comparing similarity.
- Distinguish exact nearest-neighbor search from approximate indexes.
- Distinguish token, sentence, document, image, user and item embeddings.
- Do not infer semantic causality from a visually compelling two-dimensional projection such as t-SNE or UMAP.
- When discussing bias, state what association test measures and what it does not establish about downstream impact.
- Do not treat famous vector analogies as universally robust across corpora and embedding methods.
- For contextual models, avoid language suggesting that one stable vector permanently represents a word or concept.
- For model steering, distinguish a direction that correlates with a behavior from an intervention proven to control that behavior reliably.
- Re-check contemporary embedding models, retrieval benchmarks, vector-database claims and steering methods immediately before a Shelf release.

## What would make the whole book false?

The book's strongest conclusion would weaken substantially if learned vector spaces turned out to be a short-lived implementation detail — useful for a narrow generation of machine-learning systems but not a durable substrate for retrieval, multimodal representation, recommendation, memory or control — or if their internal geometry proved too unstable to support meaningful analysis beyond raw task performance.

The manuscript should remain open to that possibility. Its claim is not that geometry is meaning. It is that representing relationships geometrically has become one of computing's most consequential ways of making complicated things comparable, searchable and actionable.
