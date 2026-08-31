# Chapter 20 research — The Second Order

## Claim map

### Policy changes can alter the behavioral relationships used to evaluate policy

- Robert E. Lucas Jr., “Econometric Policy Evaluation: A Critique,” *Carnegie-Rochester Conference Series on Public Policy* 1 (1976), pp. 19–46.
  - https://doi.org/10.1016/S0167-2231(76)80003-6

Use: anchors the concluding claim that relationships estimated under one decision regime should not automatically be treated as invariant when a policy changes expectations and behavior. The chapter uses this as one member of a broader family of feedback mechanisms, not as proof that every parameter is unstable.

### Consequential measures can change the organizations and people they measure

- Wendy Nelson Espeland and Michael Sauder, “Rankings and Reactivity: How Public Measures Recreate Social Worlds,” *American Journal of Sociology* 113(1), 2007, pp. 1–40.
  - https://doi.org/10.1086/517897
- Donald T. Campbell, *Assessing the Impact of Planned Social Change*, 1976.
  - https://eric.ed.gov/?id=ED303512

Use: supports the synthesis that public measures can become part of organizational decision-making and thereby alter later observations. The chapter deliberately avoids collapsing all behavioral response into corruption or gaming.

### Intervention can make post-deployment outcomes differ from untreated natural history

- Rich Caruana et al., “Intelligible Models for HealthCare: Predicting Pneumonia Risk and Hospital 30-day Readmission,” KDD 2015.
- Mark Sperrin et al., “Explicit causal reasoning is needed to prevent prognostic models being victims of their own success,” *Journal of the American Medical Informatics Association* 26(12), 2019, pp. 1675–1676.
  - https://doi.org/10.1093/jamia/ocz197

Use: supports the medical example in which treatment policy is braided into the observed outcome record. The conclusion does not claim that ordinary prognostic models require complete causal identification; forecasting under a stable care regime can remain useful.

### Selective observation can create feedback in data collection

- Kristian Lum and William Isaac, “To predict and serve?” *Significance* 13(5), 2016, pp. 14–19.
  - https://doi.org/10.1111/j.1740-9713.2016.00960.x
- Danielle Ensign, Sorelle A. Friedler, Scott Neville, Carlos Scheidegger, and Suresh Venkatasubramanian, “Runaway Feedback Loops in Predictive Policing,” FAT* 2018.
  - https://doi.org/10.1145/3287560.3287589

Use: anchors the claim that model-directed search can alter which events are discovered and therefore which labels enter later training data. The chapter retains the distinction between police-discovered incidents and independently reported events.

### Deployed prediction can induce distribution change through strategic or performative response

- Moritz Hardt, Nimrod Megiddo, Christos Papadimitriou, and Mary Wootters, “Strategic Classification,” ITCS 2016.
  - https://doi.org/10.1145/2840728.2840730
- Juan C. Perdomo, Tijana Zrnic, Celestine Mendler-Dünner, and Moritz Hardt, “Performative Prediction,” ICML 2020.
  - https://proceedings.mlr.press/v119/perdomo20a.html

Use: supports the chapter's general distinction between a prediction function and the response process induced by deployment. The conclusion avoids treating convergence to a stable point as proof that the resulting equilibrium is normatively optimal.

### Multitask incentives explain why measured dimensions can crowd out unmeasured work

- Bengt Holmström and Paul Milgrom, “Multitask Principal-Agent Analyses: Incentive Contracts, Asset Ownership, and Job Design,” *Journal of Law, Economics, & Organization* 7, special issue, 1991, pp. 24–52.
  - https://doi.org/10.1093/jleo/7.special_issue.24

Use: supports the concluding design claim that attaching strong incentives to one measurable dimension can redirect effort away from other valuable tasks. The book's recommendation is plural evidence and careful incentive design, not measurement abandonment.

### Independent or exploratory evidence channels can reveal blind spots created by targeting

- Chapter 19's aviation and high-reliability research trail supplies the institutional evidence for confidential anomaly reporting, multiple information channels, and deliberate attention to weak signals.
- Chapter 17's performative-prediction and stateful-system research supplies the formal background for evaluating systems whose actions alter future data.

Use: supports the concluding recommendation to preserve at least some evidence that is not selected entirely by the current model. No universal random-audit percentage or exploration rate is asserted.

## Counterevidence / boundary conditions

1. Many prediction problems remain close enough to passive observation that first-order evaluation is entirely appropriate. The chapter explicitly gives physical examples where a forecast does not materially alter the underlying process.
2. Behavioral response can improve the true objective. Successful treatment, preparation, deterrence, instructional alignment, and useful recommendation are not failures merely because deployment changes outcomes.
3. Stable operating equilibria can be valuable. The chapter argues only that stability is not by itself evidence of optimality or causal validity.
4. Transparency has competing effects. It can improve accountability and contestability while also making strategic gaming or adversarial evasion easier.
5. Independent measurement is costly and itself subject to incentives, selection, and institutional decay. More dashboards do not automatically create epistemic independence.
6. Not every observed correlation in a deployed system is generated by the model. Feedback can amplify or reshape real underlying differences without making them fictitious.

## Falsification note

The book's central claim would be materially weakened if consequential predictions, rankings, metrics, and decision rules routinely left behavior, treatment, search, reporting, selection, and future data generation unchanged even when affected actors could perceive and respond to the incentives. It would also be weakened if post-deployment data could generally be interpreted as passive samples of the same process that generated pre-deployment data without conditioning on the interventions induced by the model.

Evidence in the other direction matters just as much. If well-designed feedback systems routinely improve the underlying objective while preserving reliable independent measurement, that supports the book's narrower thesis rather than refuting it: response is not inherently corrupting. The durable claim is that response belongs inside the model of the system.
