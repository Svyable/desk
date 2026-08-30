# Source Ledger

Working source ledger for *Scaling Laws*. This is a research map, not a finished bibliography. Verify editions, page references, datasets, quoted language and current claims before publication.

| Area | Source | Use | Cautions |
|---|---|---|---|
| Biological allometry | Max Kleiber, “Body Size and Metabolism,” *Hilgardia* 6(11), 1932. https://pdodds.w3.uvm.edu/files/papers/others/1932/kleiber1932a.pdf | Historical anchor for metabolic scaling and the log-log formulation of metabolism versus body weight. | Do not present the 3/4 exponent as universally settled across organisms or conditions. |
| Experience curves | Theodore P. Wright, “Factors Affecting the Cost of Airplanes,” *Journal of the Aeronautical Sciences* 3(4), 1936. https://doi.org/10.2514/8.155 | Primary historical anchor for cost decline with cumulative aircraft production and the experience/learning-curve tradition. | Wright studied a particular industrial setting; do not treat one progress ratio as universal or infer mechanism from the fitted curve alone. |
| Technology forecasting | Béla Nagy, J. Doyne Farmer, Quan M. Bui and Jessika E. Trancik, “Statistical Basis for Predicting Technological Progress,” *PLOS ONE* 8(2), 2013. https://doi.org/10.1371/journal.pone.0052669 | Compares Wright-style cumulative-production laws, generalized Moore-style time trends and other forecasting hypotheses across 62 technologies; useful for the Wright-versus-Moore distinction. | Cumulative production and time are often strongly correlated; forecasting performance does not by itself establish causal learning-by-doing. |
| Neural scaling | Jared Kaplan et al., “Scaling Laws for Neural Language Models,” 2020. https://arxiv.org/abs/2001.08361 | Empirical power-law relationships among language-model loss, model size, dataset size and compute. | Record parameter-count convention and experimental range; later compute-optimal work revised the recommended allocation. |
| Compute-optimal scaling | Jordan Hoffmann et al., “Training Compute-Optimal Large Language Models,” 2022. https://arxiv.org/abs/2203.15556 | Chinchilla result: under the paper’s regime, compute-optimal training scales model size and training tokens together. | Do not universalize the tokens-to-parameters prescription beyond its assumptions, architecture and cost model. |
| Scaling-law sensitivity | Tim Pearce and Jinyeop Song, “Reconciling Kaplan and Chinchilla Scaling Laws,” 2024. https://arxiv.org/abs/2406.12907 | Useful for explaining why fitted scaling prescriptions can differ because of parameter definitions and experimental scale. | Secondary reconciliation paper; preserve remaining uncertainty and later evidence. |
| Modern robustness | Rylan Schaeffer et al., “Evaluating the Robustness of Chinchilla Compute-Optimal Scaling,” 2025. https://arxiv.org/abs/2509.23963 | Tests sensitivity of Chinchilla conclusions to parameter-count ambiguities and perturbations. | Preprint; status and later revisions must be checked before release. |

## Sources to add before the relevant chapters

### Cities

- Luís M. A. Bettencourt, José Lobo, Dirk Helbing, Christian Kühnert and Geoffrey B. West, “Growth, innovation, scaling, and the pace of life in cities,” *PNAS* 104(17), 2007.
- Critical and replication literature on urban boundary definitions, indicator selection and exponent stability.

### Experience curves

- Cross-industry work on learning spillovers, organizational forgetting, path dependence and how much apparent cost decline is attributable to cumulative production versus exogenous technological change.
- Industry-specific evidence for batteries, photovoltaics, semiconductors and other technologies before making numerical policy claims.

### Networks

- Original and critical treatments of Metcalfe’s Law, Reed’s Law and network-value scaling.
- Empirical platform studies that distinguish potential links from realized interactions and heterogeneous user value.

### Semiconductors

- Gordon E. Moore’s 1965 and 1975 papers/speeches on component density.
- Dennard et al. on MOSFET scaling, kept conceptually distinct from Moore’s Law.
- Industry road-map histories showing coordination effects around expected scaling cadences.

### Organizations

- James D. Thompson, *Organizations in Action*.
- Jay R. Galbraith on organization design and information-processing capacity.
- Contemporary empirical work on spans of control, communication networks and coordination costs.

### Reliability

- Standard reliability-engineering references for hazard, independent-event assumptions, common-mode failure and fault trees.
- Site reliability engineering material for error budgets and large-scale operational practice, using primary operational sources when possible.

## Claims requiring special verification

- Any numerical urban scaling exponent.
- Any claim that a specific network’s value scales as `n²`.
- Any numerical cost decline per cumulative production doubling.
- Any causal claim that cumulative production itself, rather than correlated time, R&D, scale or redesign, explains a specific technology’s cost decline.
- Contemporary frontier-model training compute, energy use or dollar cost.
- Claims about data exhaustion or synthetic-data contamination.
- Claims about legal or regulatory thresholds triggered solely by user count or scale.

## Release rule

No fitted curve should reach the finished manuscript without the source ledger recording: the observed range, the unit of analysis, the dependent and independent variables, the fitted exponent or functional form, major known counterevidence, and at least one sentence explaining why the relationship might break.
