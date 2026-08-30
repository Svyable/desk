# Chapter 13 — Adversaries Read the Model

## Argument

A deployed classifier can change the population it classifies when people or adversaries learn how to obtain favorable decisions or evade unfavorable ones. The chapter distinguishes three cases that should not be collapsed: hostile evasion, strategic gaming of consequential classifiers, and desirable adaptation in which the rule induces real improvement in the underlying objective.

## Sources checked

### Dalvi et al. — adversarial classification

Nilesh Dalvi, Pedro Domingos, Mausam, Sumit Sanghai, and Deepak Verma, “Adversarial Classification,” KDD 2004, DOI 10.1145/1014052.1014066.

The paper explicitly challenges the assumption that the data-generating process is independent of the classifier in spam, fraud, intrusion detection, surveillance, and related domains. It models classification as a game between classifier and adversary and reports spam-domain experiments in which anticipating optimal adversarial response can outperform ordinary classification.

Use in chapter: historical and conceptual anchor for the claim that deployment can induce purposeful input manipulation.

### Hardt et al. — strategic classification

Moritz Hardt, Nimrod Megiddo, Christos Papadimitriou, and Mary Wootters, “Strategic Classification,” ITCS 2016, DOI 10.1145/2840728.2840730; arXiv:1506.06980.

The authors model a sequential game in which a classifier is chosen and a strategic individual can then alter observable attributes at a cost to obtain a preferred classification. They provide efficient near-optimal algorithms for certain separable cost functions while showing harder cases for general costs.

Use in chapter: basis for separating static predictive accuracy from performance after strategic response. The chapter treats the cost-function setup as a useful abstraction, not a literal model of heterogeneous human adaptation.

### Goodfellow, Shlens, and Szegedy — adversarial examples

Ian J. Goodfellow, Jonathon Shlens, and Christian Szegedy, “Explaining and Harnessing Adversarial Examples,” ICLR 2015; arXiv:1412.6572.

The paper studies intentionally chosen small perturbations that cause machine-learning models to misclassify with high confidence, argues for a linear explanation of the vulnerability, and demonstrates a fast method for generating adversarial examples. It also reports that training on such examples can reduce test error in their experimental setting.

Use in chapter: contrast between perturbations intended to preserve the task’s semantic label and strategic human responses that can change both observable features and the underlying target. It also supplies counterevidence to a fatalistic robustness story: adversarial pressure can become useful training data.

## Counterevidence and boundaries

The chapter should not imply that every strategic response is gaming. Some rules deliberately induce beneficial behavior. Paying down debt, acquiring a real skill, slowing a vehicle, reducing emissions, or strengthening a building can improve both the measured signal and the underlying objective.

Nor should it imply that secrecy is the only or best defense. Consequential rules may require transparency and appeal, and repeated interaction can reveal decision boundaries even without source-code access. Robust optimization, adversarial training, randomized inspection, mechanism redesign, delayed outcome measurement, and red-team evaluation can all improve performance under adaptation.

Formal strategic-classification models simplify heterogeneous costs, incomplete information, social learning, and unequal resources. Their value here is structural: they make the actor’s response part of the prediction problem.

## Falsification note

The chapter’s broader claim would weaken if consequential classifiers routinely retained their pre-deployment error properties after affected actors learned or experienced the rules, or if observed strategic changes in inputs had negligible effects on model performance and downstream outcomes. Evidence that ordinary static validation reliably predicts long-run performance in adversarial and strategically responsive domains would cut directly against the argument.

The chapter’s normative distinction would also weaken if beneficial and evasive responses could not be distinguished even retrospectively by their relationship to underlying outcomes. In that case, the proposed focus on aligning score-improving behavior with objective-improving behavior would be less operationally useful than the chapter suggests.