# Chapter 10 research — A/B Testing a Moving Population

## Core evidence

### Larsen et al. — modern online experimentation and its statistical limits

- **Source:** Nicholas Larsen, Jonathan Stallrich, Srijan Sengupta, Alex Deng, Ron Kohavi, and Nathaniel T. Stevens, “Statistical Challenges in Online Controlled Experiments: A Review of A/B Testing Methodology,” *The American Statistician* 78(2), 2024.
- **Record:** https://www.tandfonline.com/doi/full/10.1080/00031305.2023.2257237
- **Supports:** the chapter's baseline claim that online controlled experiments are widely used for causal product evaluation, while also requiring special methods for heterogeneous and long-term effects, optional stopping, interference, novelty/primacy effects, and violations of the usual no-interference assumptions.
- **Caution:** the review is evidence that these complications are recognized and tractable methodological problems, not evidence that ordinary A/B tests are generally invalid.

### Kohavi, Longbotham, Sommerfield, and Henne — controlled experiments on the web

- **Source:** Ron Kohavi, Roger Longbotham, Dan Sommerfield, and Randal M. Henne, “Controlled Experiments on the Web: Survey and Practical Guide,” *Data Mining and Knowledge Discovery* 18, 2009, pp. 140–181.
- **DOI:** https://doi.org/10.1007/s10618-008-0114-1
- **Supports:** the chapter's treatment of randomized online experimentation as a practical decision technology rather than merely a statistical classroom exercise, including the importance of trustworthy implementation, metric choice, and interpretation.
- **Caution:** the field has developed substantially since 2009; the chapter uses this source for foundations, not as a complete statement of current methodology.

### Bojinov and Gupta — scaling online experimentation

- **Source:** Iavor Bojinov and Somit Gupta, “Online Experimentation: Benefits, Operational and Methodological Challenges, and Scaling Guide,” *Harvard Data Science Review* 4(3), 2022.
- **DOI:** https://doi.org/10.1162/99608f92.a579756e
- **Record:** https://hdsr.mitpress.mit.edu/pub/aj31wj81/release/1
- **Supports:** the chapter's counterevidence and institutional framing: large-scale experimentation can materially improve decision quality, but organizations need operational and methodological discipline rather than treating randomization infrastructure as sufficient by itself.
- **Caution:** this is a broad methodological and organizational review; specific claims about interference and carryover are anchored separately below.

### Hu and Wager — switchback experiments and temporal carryover

- **Source:** Yuchen Hu and Stefan Wager, “Switchback Experiments under Geometric Mixing,” arXiv:2209.00197, 2022.
- **Record:** https://arxiv.org/abs/2209.00197
- **Supports:** the chapter's account of switchback designs as a response to cross-unit interference and of temporal carryover as a serious source of bias. The paper shows that burn-in periods can substantially improve estimation in systems where treatment effects persist after switching.
- **Caution:** the results depend on a formal Markovian/geometric-mixing setting and should not be read as a universal quantitative law for every marketplace or platform.

## Falsification / counterevidence note

The chapter should weaken if ordinary individual-level randomization remains reliably transportable to full deployment even in settings with substantial cross-user competition, shared inventory, network spillovers, persistent learning, or treatment-induced changes in population composition. It should also weaken if novelty, primacy, and temporal carryover are usually too small to matter for practical decisions.

Counterevidence is central rather than incidental: online randomized experiments are among the strongest causal tools available to product organizations, and the modern literature documents many settings where standard A/B testing works extremely well. The chapter's narrower claim is that randomization identifies the effect of a particular assignment under a particular experimental environment; when the treatment changes that environment, the population, or the future state of the system, design and interpretation must account for those changes rather than assuming the measured world stayed fixed.