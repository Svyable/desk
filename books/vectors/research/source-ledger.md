# Source Ledger

Working source ledger for *Vectors*. This is a research map, not a finished bibliography. Verify editions, benchmark details, model versions, quoted language and contemporary claims before publication.

| Area | Source | Use | Cautions |
|---|---|---|---|
| Word vectors | Tomas Mikolov, Kai Chen, Greg Corrado and Jeffrey Dean, “Efficient Estimation of Word Representations in Vector Space,” 2013. https://arxiv.org/abs/1301.3781 | Historical anchor for efficient dense word representations learned from large corpora. | Do not overstate the robustness or universality of analogy arithmetic. |
| Global word vectors | Jeffrey Pennington, Richard Socher and Christopher D. Manning, “GloVe: Global Vectors for Word Representation,” 2014. https://nlp.stanford.edu/pubs/glove.pdf | Connects vector geometry to global co-occurrence statistics and documents useful similarity structure. | Results depend on corpus, preprocessing, dimensionality and evaluation. |
| Multimodal representation | Alec Radford et al., “Learning Transferable Visual Models From Natural Language Supervision,” 2021. https://arxiv.org/abs/2103.00020 | Primary source for CLIP-style contrastive alignment of image and text representations at scale. | A shared training objective does not imply a perfectly unified or bias-free semantic space. |
| Similarity search | Jeff Johnson, Matthijs Douze and Hervé Jégou, “Billion-scale similarity search with GPUs,” 2017. https://arxiv.org/abs/1702.08734 | Engineering anchor for large-scale exact/approximate similarity search and FAISS. | Separate indexing speed/recall tradeoffs from embedding quality and semantic relevance. |

## Sources to add before the relevant chapters

### Linear algebra

- A standard linear algebra text covering vector spaces, bases, linear transformations, inner products, norms, orthogonality and projection.
- A numerical linear algebra source for conditioning, floating-point effects and high-dimensional computation.

### Early neural language models

- Yoshua Bengio et al., “A Neural Probabilistic Language Model,” 2003.
- Follow-on work clarifying distributed representations and language-model training objectives.

### Contextual representations

- Ashish Vaswani et al., “Attention Is All You Need,” 2017.
- Jacob Devlin et al., “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” 2018/2019.
- Later work distinguishing static embeddings, contextual hidden states and sentence-level embedding models.

### Dense retrieval

- Karpukhin et al., “Dense Passage Retrieval for Open-Domain Question Answering,” 2020.
- Comparative and hybrid-search work pairing dense retrieval with lexical retrieval such as BM25.

### Recommendation

- Yehuda Koren, Robert Bell and Chris Volinsky, “Matrix Factorization Techniques for Recommender Systems,” 2009.
- Modern two-tower and sequence recommender literature, with explicit separation between latent-factor recommendation and general semantic embeddings.

### Bias and association

- Bolukbasi et al., “Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings,” 2016.
- Caliskan, Bryson and Narayanan, “Semantics derived automatically from language corpora contain human-like biases,” 2017.
- Critical literature on the limits of intrinsic embedding-bias metrics and links to downstream harms.

### Representation analysis

- Probe-methodology literature warning that decodability does not prove causal use.
- Mechanistic-interpretability work on distributed features, superposition and causal interventions.

### Steering

- Primary papers on activation steering, representation engineering and related interventions.
- Replication and robustness studies across prompts, models, layers and tasks.

### Agent memory and RAG

- Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks,” 2020.
- System papers distinguishing external retrieval, working context, episodic memory and parameterized knowledge.

## Claims requiring special verification

- Any claim that two concepts occupy a single stable direction across different models.
- Any claim that cosine similarity directly measures human semantic similarity.
- Any vector-database performance comparison that does not control for recall, hardware, dimensionality and index parameters.
- Any claim that a two-dimensional visualization reveals the true structure of a high-dimensional representation.
- Any statement that an embedding-bias score directly predicts discrimination or social harm.
- Any claim that activation steering provides robust, general behavioral control.
- Contemporary embedding dimensionalities, context windows, retrieval benchmarks and vendor-specific architecture claims.

## Release rule

No consequential similarity, bias or steering claim should reach the finished manuscript without the source ledger recording: how the vectors were produced, their dimensionality when known, the comparison metric, whether normalization was used, the evaluation task, major baseline methods, and at least one plausible way the observed geometry could mislead.
