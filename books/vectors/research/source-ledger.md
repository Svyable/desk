# Source Ledger

Working source ledger for *Vectors*. This is a research map, not a finished bibliography. Verify editions, benchmark details, model versions, quoted language and contemporary claims before publication.

| Area | Source | Use | Cautions |
|---|---|---|---|
| Early neural language representations | Yoshua Bengio, Réjean Ducharme, Pascal Vincent and Christian Jauvin, “A Neural Probabilistic Language Model,” *Journal of Machine Learning Research* 3, 2003. https://jmlr.csail.mit.edu/papers/v3/bengio03a | Primary anchor for learning distributed word representations jointly with a language model so nearby representations support generalization to unseen sequences. | This is an early feed-forward neural language model, not a modern contextual embedding model; do not collapse its representation scheme into later word2vec, transformer or sentence-embedding systems. |
| Word vectors | Tomas Mikolov, Kai Chen, Greg Corrado and Jeffrey Dean, “Efficient Estimation of Word Representations in Vector Space,” 2013. https://arxiv.org/abs/1301.3781 | Historical anchor for efficient dense word representations learned from large corpora. | Do not overstate the robustness or universality of analogy arithmetic. |
| Negative sampling | Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg Corrado and Jeffrey Dean, “Distributed Representations of Words and Phrases and their Compositionality,” *Advances in Neural Information Processing Systems* 26, 2013. https://arxiv.org/abs/1310.4546 | Primary anchor for Skip-gram extensions including subsampling and negative sampling; supports the chapter’s claim that the construction of positive and negative training examples helps determine learned geometry. | Negative sampling is one training method for a specific family of word representations, not a universal description of all embedding objectives. Do not infer that every sampled non-observed pair is semantically opposite. |
| Global word vectors | Jeffrey Pennington, Richard Socher and Christopher D. Manning, “GloVe: Global Vectors for Word Representation,” 2014. https://nlp.stanford.edu/pubs/glove.pdf | Connects vector geometry to global co-occurrence statistics and documents useful similarity structure. | Results depend on corpus, preprocessing, dimensionality and evaluation. |
| Sentence contrastive learning | Tianyu Gao, Xingcheng Yao and Danqi Chen, “SimCSE: Simple Contrastive Learning of Sentence Embeddings,” *EMNLP*, 2021, pp. 6894–6910. https://aclanthology.org/2021.emnlp-main.552/ | Concrete example of how positive construction, dropout augmentation and hard negatives shape sentence-embedding quality and geometry under a contrastive objective. | Model- and benchmark-specific; do not generalize SimCSE’s anisotropy, dropout or hard-negative findings to every sentence encoder or contrastive method. |
| Dense passage retrieval | Vladimir Karpukhin et al., “Dense Passage Retrieval for Open-Domain Question Answering,” *EMNLP* 2020. https://arxiv.org/abs/2004.04906 | Primary evidence that learned dual-encoder dense representations can support first-stage passage retrieval without relying on lexical overlap as the only retrieval signal. | Results are task-, corpus- and training-regime-specific. Do not generalize the reported QA gains into a claim that dense retrieval universally beats BM25 or eliminates lexical search. |
| Late interaction | Omar Khattab and Matei Zaharia, “ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT,” *SIGIR* 2020. https://arxiv.org/abs/2004.12832 | Anchor for the chapter’s point that retrieval architectures choose where to spend query-document interaction; ColBERT preserves token-level contextual representations while precomputing document-side work. | Performance and efficiency depend on implementation, hardware, index settings and benchmark. Do not treat late interaction as universally superior to single-vector or reranking architectures. |
| Retrieval robustness | Nandan Thakur et al., “BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models,” *NeurIPS Datasets and Benchmarks* 2021. https://arxiv.org/abs/2104.08663 | Cross-domain evidence that BM25 remains a robust lexical baseline and that dense, sparse, late-interaction and reranking systems exhibit different effectiveness/generalization tradeoffs. | Benchmark averages hide dataset-specific behavior and later methods have improved. Use BEIR to reject simple “dense replaces lexical” narratives, not as a permanent leaderboard. |
| Learned sparse retrieval | Thibault Formal, Benjamin Piwowarski and Stéphane Clinchant, “SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking,” *SIGIR* 2021. https://arxiv.org/abs/2107.05720 | Evidence that neural retrieval can learn sparse lexical expansion and weighting, illustrating that the field is not cleanly divided into old keywords versus new dense vectors. | Sparse effectiveness and efficiency depend on regularization, index implementation and training. Do not equate learned lexical expansion with traditional BM25 or assume one sparsity setting is optimal. |
| Multimodal representation | Alec Radford et al., “Learning Transferable Visual Models From Natural Language Supervision,” 2021. https://arxiv.org/abs/2103.00020 | Primary source for CLIP-style contrastive alignment of image and text representations at scale. | A shared training objective does not imply a perfectly unified or bias-free semantic space. |
| Similarity search | Jeff Johnson, Matthijs Douze and Hervé Jégou, “Billion-scale similarity search with GPUs,” 2017. https://arxiv.org/abs/1702.08734 | Engineering anchor for large-scale exact/approximate similarity search and FAISS. | Separate indexing speed/recall tradeoffs from embedding quality and semantic relevance. |
| Contrastive geometry | Chungpa Lee, Sehee Lim, Kibok Lee and Jy-Yong Sohn, “On the Similarities of Embeddings in Contrastive Learning,” ICML 2025. https://proceedings.mlr.press/v267/lee25v.html | Current theoretical evidence that positive/negative sampling and batch structure shape cosine-similarity geometry in contrastive representation learning. | One theoretical framework and experimental regime; do not universalize its batch-size conclusions to all contrastive objectives. |
| Multimodal geometry | Meir Yossef Levi and Guy Gilboa, “The Double-Ellipsoid Geometry of CLIP,” ICML 2025. https://proceedings.mlr.press/v267/levi25b.html | Evidence that a widely used CLIP representation has nontrivial global geometry, including modality-specific ellipsoid shells and nonzero centers. | Model-family specific; geometry can differ across CLIP variants, training sets and later multimodal encoders. |

## Sources to add before the relevant chapters

### Linear algebra

- A standard linear algebra text covering vector spaces, bases, linear transformations, inner products, norms, orthogonality and projection.
- A numerical linear algebra source for conditioning, floating-point effects and high-dimensional computation.

### Contextual representations

- Ashish Vaswani et al., “Attention Is All You Need,” 2017.
- Jacob Devlin et al., “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” 2018/2019.
- Later work distinguishing static embeddings, contextual hidden states and sentence-level embedding models.

### Embedding objectives

- Comparative work on contrastive losses, metric learning, hard-negative mining, false negatives and batch composition across text, vision and multimodal settings.
- Evidence on pooling strategies, normalization, dimensionality and objective mismatch before making broad claims that any one recipe creates generally useful semantic embeddings.
- Embedding-version migration and production-evaluation literature linking model changes to index rebuilds, threshold drift and downstream retrieval behavior.

### Dense retrieval

- Hybrid-search studies that directly measure dense + lexical fusion across exact identifiers, paraphrases, rare entities, domain shift and multilingual queries.
- Production evidence on chunking, corpus refresh, access-control filtering and embedding-version migrations rather than assuming benchmark retrieval maps directly to deployed knowledge systems.
- Robustness work on hubness, anisotropy, multilingual retrieval symmetry and metric corrections, with replication before broad claims.

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
- Any claim that analogy arithmetic is a universal or stable property of word embeddings rather than a model-, corpus- and evaluation-dependent phenomenon.
- Any claim that negative sampling or contrastive negatives correspond to true semantic opposites rather than training contrasts.
- Any claim that one hard-negative recipe, temperature, batch size or augmentation policy is generally optimal across embedding families.
- Any claim that dense retrieval generally replaces lexical retrieval, or that semantic relevance makes exact identifiers, names, numbers and quotations unimportant.
- Any retrieval comparison that omits corpus, domain, top-k, relevance labels, query type, candidate generation, reranking and out-of-domain evaluation.
- Any claim that top-k nearest neighbors are sufficiently relevant without an absolute quality threshold or explicit empty-answer behavior.
- Any claim that approximate nearest-neighbor index recall is equivalent to embedding-model recall.
- Any claim that hubness or anisotropy is the dominant explanation for retrieval failures across embedding families without model-specific evidence.
- Any vector-database performance comparison that does not control for recall, hardware, dimensionality and index parameters.
- Any claim that a two-dimensional visualization reveals the true structure of a high-dimensional representation.
- Any statement that an embedding-bias score directly predicts discrimination or social harm.
- Any claim that activation steering provides robust, general behavioral control.
- Contemporary embedding dimensionalities, context windows, retrieval benchmarks and vendor-specific architecture claims.

## Release rule

No consequential similarity, bias or steering claim should reach the finished manuscript without the source ledger recording: how the vectors were produced, their dimensionality when known, the comparison metric, whether normalization was used, the evaluation task, major baseline methods, and at least one plausible way the observed geometry could mislead.
