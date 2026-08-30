# Chapter 11 research — The Benchmark Becomes the Product

## Core evidence

### Raji et al. — construct validity and benchmark overreach

- **Source:** Inioluwa Deborah Raji, Emily M. Bender, Amandalynne Paullada, Emily Denton, and Alex Hanna, “AI and the Everything in the Whole Wide World Benchmark,” NeurIPS 2021 Datasets and Benchmarks track.
- **Record:** https://doi.org/10.48550/arXiv.2111.15366
- **Supports:** the chapter's claim that influential AI benchmarks can become stand-ins for much broader constructs than their finite, contextual datasets can justify, producing a construct-validity problem when benchmark performance is treated as evidence of general capability.
- **Caution:** the paper is a position/analysis paper about benchmark interpretation; it does not imply that benchmark datasets are useless or that benchmark gains are never meaningful.

### Wang et al. — GLUE and SuperGLUE saturation

- **Source:** Alex Wang, Yada Pruksachatkun, Nikita Nangia, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, and Samuel R. Bowman, “SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems,” NeurIPS 2019.
- **Record:** https://ai.meta.com/research/publications/superglue-a-stickier-benchmark-for-general-purpose-language-understanding-systems/
- **Supports:** the chapter's concrete account of benchmark saturation: the authors explicitly motivate SuperGLUE by noting that GLUE, introduced only a little over a year earlier, had seen rapid progress and performance beyond a non-expert human baseline, leaving limited headroom for further research.
- **Caution:** benchmark saturation can represent genuine capability progress; it is not itself evidence of gaming or invalidity.

### Wang et al. — GLUE as shared evaluation infrastructure

- **Source:** Alex Wang, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, and Samuel R. Bowman, “GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding,” 2018 EMNLP Workshop BlackboxNLP.
- **DOI:** https://doi.org/10.18653/v1/W18-5446
- **Supports:** the chapter's account of benchmark value as coordination infrastructure: a common multi-task suite enables reproducible comparison across systems and reduces the freedom to report only favorable isolated tasks.
- **Caution:** GLUE was designed for a particular generation of language-understanding systems and should not be treated as a timeless measure of general language capability.

### Larsen et al. — evaluation as a changing methodological environment

- **Source:** Nicholas Larsen, Jonathan Stallrich, Srijan Sengupta, Alex Deng, Ron Kohavi, and Nathaniel T. Stevens, “Statistical Challenges in Online Controlled Experiments: A Review of A/B Testing Methodology,” *The American Statistician* 78(2), 2024.
- **Record:** https://www.tandfonline.com/doi/full/10.1080/00031305.2023.2257237
- **Supports:** the broader second-order analogy used in the chapter: repeated optimization and institutional use can change the evidentiary environment around a measure, requiring attention to changing distributions, long-term effects, and assumptions rather than treating one static score as permanently self-interpreting.
- **Caution:** this source concerns online experimentation rather than ML benchmark design directly; it supports the book's general measurement logic, not specific claims about GLUE or AI leaderboards.

## Falsification / counterevidence note

The chapter should weaken if heavily optimized public benchmarks continue to retain stable construct validity, strong discriminating power, and reliable transfer to independent real-world tasks even after long periods of leaderboard attention, widespread methodological adaptation, and repeated exposure. It should also weaken if benchmark saturation usually tracks broad capability gains closely enough that replacement tests add little new information.

Counterevidence is essential: shared benchmarks have accelerated machine-learning progress, improved reproducibility, reduced reliance on curated demos, and created common evidence available to small and large labs alike. The chapter's narrower claim is that a benchmark's scientific value changes once it becomes a consequential target. Optimization can produce real capability gains and benchmark-specific adaptation at the same time, so claims should remain scoped to what fresh, independent evidence can support.