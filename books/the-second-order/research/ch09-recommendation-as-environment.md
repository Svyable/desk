# Chapter 9 research — Recommendation as Environment

## Core evidence

### Allison J. B. Chaney, Brandon M. Stewart, and Barbara E. Engelhardt — algorithmic confounding

- **Source:** “How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility,” *Proceedings of the 12th ACM Conference on Recommender Systems* (RecSys 2018), pp. 224–232.
- **DOI:** https://doi.org/10.1145/3240323.3240370
- **Open manuscript:** https://oar.princeton.edu/bitstream/88435/pr1zc2c/1/RecSystemsUtility.pdf
- **Supports:** the chapter's central feedback claim. The authors model repeated recommendation/retraining cycles in which interaction data are already confounded by prior recommendations and report increasing behavioral homogenization and utility losses, distributed unevenly across users.
- **Caution:** this is simulation evidence across specified recommender models, not proof that every deployed recommender homogenizes users or reduces welfare.

### Paul Covington, Jay Adams, and Emre Sargin — large-scale YouTube recommendation architecture

- **Source:** “Deep Neural Networks for YouTube Recommendations,” *Proceedings of the 10th ACM Conference on Recommender Systems* (RecSys 2016), pp. 191–198.
- **DOI:** https://doi.org/10.1145/2959100.2959190
- **Supports:** the chapter's description of a large recommender as a multi-stage production system, including candidate generation followed by ranking, rather than a single universal score over all available items.
- **Caution:** the paper describes YouTube's system at publication time. It should not be treated as a description of YouTube's current architecture or objectives.

### Homa Hosseinmardi et al. — counterevidence on YouTube recommendation and partisan consumption

- **Source:** “Causally estimating the effect of YouTube's recommender system using counterfactual bots,” *Proceedings of the National Academy of Sciences* 121(8), 2024.
- **DOI:** https://doi.org/10.1073/pnas.2313377121
- **Preprint:** https://arxiv.org/abs/2308.10398
- **Supports:** the chapter's counterevidence that observed extreme or partisan consumption cannot automatically be attributed to recommendation. The authors construct counterfactual bots and report that, in the period studied, exclusive reliance on recommendations produced less partisan consumption on average than the observed behavior of highly partisan users. They also report adaptation toward moderate recommendations after changes in viewing behavior.
- **Caution:** this does not establish that recommendation is harmless, does not cover all content domains or historical versions of the system, and depends on the counterfactual design used.

### Roger Zhe Li, Julián Urbano, and Alan Hanjalic — mainstream bias

- **Source:** “Leave No User Behind: Towards Improving the Utility of Recommender Systems for Non-mainstream Users,” 2021.
- **Preprint:** https://arxiv.org/abs/2102.01744
- **Supports:** the narrower claim that collaborative recommendation can provide systematically different utility for mainstream and non-mainstream users and that system design can mitigate some of that disparity.
- **Caution:** the chapter uses this as evidence of a known recommendation-design problem, not as a universal estimate of disadvantage across production systems.

## Falsification / counterevidence note

The chapter's argument should weaken if recommendation exposure has little causal effect on subsequent observed behavior, if repeated retraining on recommendation-shaped interaction histories does not meaningfully alter model estimates or exposure, or if robust counterfactual evaluation shows that offline interaction prediction reliably transfers across substantially different recommendation policies without explicit treatment of exposure.

Evidence against simplistic amplification claims matters equally. The Hosseinmardi et al. result is included because user selection can dominate or reverse the apparent effect of a recommender in some settings. The chapter therefore does not claim that recommendation determines preference, that users are passive, or that every feedback loop produces narrowing. Its narrower claim is that a recommender selects part of the environment in which behavior becomes observable, so interaction logs cannot be interpreted as preference samples independent of the exposure policy that generated them.
