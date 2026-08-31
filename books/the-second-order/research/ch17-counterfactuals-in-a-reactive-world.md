# Chapter 17 research — Counterfactuals in a Reactive World

## Core evidence

### Juan Perdomo, Tijana Zrnic, Celestine Mendler-Dünner, and Moritz Hardt — performative prediction

- **Source:** Juan C. Perdomo, Tijana Zrnic, Celestine Mendler-Dünner, and Moritz Hardt, “Performative Prediction,” *Proceedings of the 37th International Conference on Machine Learning*, PMLR 119, 2020, pp. 7599–7609.
- **Record:** https://proceedings.mlr.press/v119/perdomo20a.html
- **PDF:** https://proceedings.mlr.press/v119/perdomo20a/perdomo20a.pdf
- **Supports:** the chapter's central mechanism that deployed predictions can change the distribution of future data through the decisions they induce. The paper formalizes performative prediction, performative stability, and conditions under which repeated retraining converges in the presence of model-induced distribution shift.
- **Caution:** the formal framework abstracts heavily from institutional details and should not be treated as an empirical estimate of how large deployment effects are in any specific application.

### John P. Miller, Juan C. Perdomo, and Tijana Zrnic — stability is not optimality

- **Source:** John P. Miller, Juan C. Perdomo, and Tijana Zrnic, “Outside the Echo Chamber: Optimizing the Performative Risk,” *Proceedings of the 38th International Conference on Machine Learning*, PMLR 139, 2021, pp. 7710–7720.
- **Record:** https://proceedings.mlr.press/v139/miller21a.html
- **Supports:** the chapter's distinction between a performatively stable fixed point and a desirable policy. The authors show that stable solutions can be far from optimal when evaluated by performative risk and develop methods for optimizing the consequences of deployment more directly.
- **Caution:** the result concerns formal optimization under structural assumptions; it does not imply that every stable deployed model is substantively bad.

### Gavin Brown, Shlomi Hod, and Iden Kalemaj — stateful performativity

- **Source:** Gavin Brown, Shlomi Hod, and Iden Kalemaj, “Performative Prediction in a Stateful World,” *Proceedings of The 25th International Conference on Artificial Intelligence and Statistics*, PMLR 151, 2022, pp. 6045–6061.
- **Record:** https://proceedings.mlr.press/v151/brown22a.html
- **Supports:** the chapter's claim that reactive counterfactuals can involve trajectories rather than one-step responses. Their framework lets population response depend on both the deployed classifier and the current population state, including settings where groups acquire resources and information at different rates.
- **Caution:** this is a theoretical framework. The chapter uses it to clarify the importance of path dependence, not as direct evidence about a particular lending, hiring, medical, or policing system.

### Robert E. Lucas Jr. — policy-regime dependence

- **Source:** Robert E. Lucas Jr., “Econometric Policy Evaluation: A Critique,” *Carnegie-Rochester Conference Series on Public Policy* 1, 1976, pp. 19–46.
- **DOI:** https://doi.org/10.1016/S0167-2231(76)80003-6
- **Supports:** the chapter's broader causal analogy: relationships estimated under one regime cannot automatically be projected into another when agents change behavior in response to the policy rule. This is the macroeconomic predecessor of the book's recurring warning against treating historically observed conditional relationships as invariant after deployment.
- **Caution:** Lucas's critique concerns macroeconomic policy evaluation and does not itself establish the performative-prediction results used elsewhere in the chapter.

## Falsification / counterevidence note

The chapter should weaken if deployed predictions generally leave future data distributions unchanged, if repeated retraining reliably converges to outcomes that are also substantively optimal, or if policy-induced missing labels and behavioral adaptation are negligible in the consequential systems discussed here.

The opposite evidence also matters. Many predictive tasks remain useful without full causal identification when the deployment effect is small, the policy regime is stable, or the explicit goal is to forecast outcomes under the existing regime. The durable claim is therefore not that prediction requires solving every counterfactual. It is that once a model materially changes decisions, observability, incentives, or population state, post-deployment outcomes cannot by themselves identify what would have happened under a different sequence of models and actions.
