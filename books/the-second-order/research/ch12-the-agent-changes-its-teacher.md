# Chapter 12 research — The Agent Changes Its Teacher

## Argument to support

Once a learned policy acts sequentially, it changes the states and observations that become its future data. Iterative learning can exploit this productively, but self-generated or policy-selected data require provenance and an independent error signal; otherwise the learner can progressively narrow the evidence from which it learns.

## Sources checked

### Ross, Gordon, and Bagnell — DAgger

Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, “A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning,” AISTATS 2011 / arXiv:1011.0686.

Use: foundation for the chapter opening. Behavioral cloning from expert trajectories faces compounding error because the learned policy visits states induced by its own mistakes. DAgger iteratively collects states visited by the learner and obtains expert actions for those states, aggregating them into the training data.

Claim boundary: DAgger is evidence that endogenous data collection can improve learning when the new states retain an expert labeling signal. It is not evidence that all iterative self-training is unstable.

### Shumailov et al. — recursive generated-data collapse

Ilia Shumailov, Zakhar Shumaylov, Yiren Zhao, Nicolas Papernot, Ross Anderson, and Yarin Gal, “AI models collapse when trained on recursively generated data,” Nature 631, 755–759 (2024), DOI 10.1038/s41586-024-07566-y. Published 24 July 2024. Nature records an author correction published 21 March 2025 correcting a symbol in the theoretical-intuition section.

Use: concrete evidence for the danger of indiscriminately allowing model-generated samples to replace the original data distribution across generations. The paper reports early loss of distribution tails and later degradation in generational learning experiments spanning GMMs, VAEs, and language models.

Important qualification: the paper does not establish that synthetic data are generally harmful. Its results depend on recursive generated-data regimes, and its experiments show that preserving original data can mitigate degradation. The manuscript therefore avoids the slogan that models trained on model output inevitably collapse.

Primary source: https://www.nature.com/articles/s41586-024-07566-y
Correction: https://www.nature.com/articles/s41586-025-08905-3

## Counterevidence and limiting cases

- DAgger itself is counterevidence to a blanket anti-feedback thesis: allowing the learner to determine which states receive expert labels is precisely what makes the dataset more useful for the deployed policy.
- Self-play can create superhuman systems where rules and outcomes provide an external verifier. Generated experience is not inherently circular if the scoring signal is independent of the generator.
- Synthetic examples can be valuable when filtered, verified, mixed with original data, or targeted toward known weaknesses. The relevant variable is not simply whether a model generated an example, but what independent constraints survive in generation, selection, labeling, and evaluation.
- Human feedback is not automatically independent or truthful. Humans can share a model’s framing, reward presentation over correctness, and respond to incentives. The chapter therefore distinguishes independent signal from circular signal rather than human from machine.

## Falsification note

The chapter’s strong form would be weakened if deployed sequential policies could generally be trained from their own selected/generated traces without either preserved external data, exploration, independent labels, formal/environmental verification, or measurable loss of coverage/calibration. Evidence that recursive generated-data pipelines reliably preserve tails and out-of-distribution competence across many generations without such anchors would directly challenge the argument.

The narrower claim survives many successful self-training systems: once policy output affects future training input, provenance and the feedback mechanism become part of the learning problem.