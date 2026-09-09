# Dormancy Constraint Benchmark

## Status

This note defines a benchmark before any reanalysis of source-data spreadsheets. It is not evidence for the book's constraint coarse-graining conjecture.

The benchmark is motivated by two recent *Escherichia coli* results that make simple energy-inventory explanations insufficient in specific persistence/dormancy regimes:

- Bollen et al. (2025), *Composition and liquid-to-solid maturation of protein aggregates contribute to bacterial dormancy development and recovery*: https://doi.org/10.1038/s41467-025-56387-8
- Taher et al. (2026), *Mechanism of persister formation in response to nitrogen starvation*: https://doi.org/10.1038/s41467-026-75914-9

A useful contemporary caution is Orman, Ngo, and Mohiuddin (2026), *Beyond metabolic dormancy: metabolic rewiring in bacterial persistence*: https://doi.org/10.1038/s41467-026-71427-7

The working question is not whether ATP matters. It plainly does in many cellular processes and in some persistence mechanisms. The question is narrower:

> In a declared dormancy/recovery experiment, do physically interpretable structural or pathway-state variables predict future recovery beyond what present energy/activity measures predict, and do interventions on those variables move the recovery boundary as predicted?

## Why this is a hard benchmark

Bollen et al. report a progression in which protein aggregates first behave as more liquid-like condensates and later mature toward more solid states. Aggregate maturation impedes dissolution and growth resumption. Their interpretation is especially relevant because the transition from persister-like recoverability toward the viable-but-nonculturable condition is associated with aggregate material state rather than simply another decrease in cellular activity.

Taher et al. provide a complementary case. Under nitrogen limitation, persister abundance rises sharply without a corresponding decline in ATP. Single-cell and perturbation evidence implicates low PyrBI, a pyrimidine-biosynthesis enzyme; increasing PyrBI expression decreases persistence. This gives a case in which a pathway bottleneck and expression-state distribution matter even though bulk ATP does not supply the discriminating variable.

The two studies should not be collapsed into one mechanism. Their value is the opposite: they demonstrate that similar high-level labels such as `persister`, `dormant`, or `low growth` can arise through different physical state variables.

A successful constraint framework has to tolerate that heterogeneity.

## Primary prediction problem

At an observation time `t0`, predict whether an individual cell or a predeclared cell class will successfully return to sustained growth after a specified recovery stimulus within a fixed horizon `tau`.

The outcome must be defined before model fitting. Examples include:

- first completed division within `tau`;
- sustained increase in biomass or cell length over a declared interval;
- return to a specified growth-rate threshold;
- colony-forming recovery under a fixed culture protocol.

Different datasets may support different operational outcomes. They must not be mixed after inspection merely to improve performance.

## Baseline models

The constraint-oriented model must beat strong simple baselines rather than ignorance.

### Baseline A: present energy/activity only

Candidate predictors, where available:

- ATP concentration or ATP proxy;
- proton-motive-force or membrane-potential proxy;
- respiration/activity proxy;
- current growth rate;
- bulk metabolic-state label.

### Baseline B: generic damage / viability assay

Candidate predictors, where available:

- membrane integrity;
- gross morphology;
- total damage marker;
- standard live/dead or culturability assay.

### Baseline C: best study-specific mechanistic model

For Bollen-type data, this must include the aggregate-state model supported by the original paper rather than pretending it does not exist.

For Taher-type data, this must include the study's nitrogen/PyrBI mechanism rather than comparing only against ATP.

If the original study's mechanistic model already predicts the held-out outcome as well as the proposed coarse-graining with fewer assumptions, the benchmark counts against novelty.

## Candidate constraint variables

Candidate variables must be selected for physical reasons before the held-out recovery outcome is inspected.

For the aggregate benchmark these may include:

- aggregate count or burden;
- aggregate spatial organization;
- independently measured material-state proxy such as liquidity/solidification or dissolution kinetics;
- abundance/activity of disaggregation machinery where measured;
- ATP or energy variables retained as covariates rather than excluded.

For the nitrogen-starvation benchmark these may include:

- PyrBI abundance or activity proxy;
- relevant precursor or pathway-state variables;
- nitrogen availability;
- ATP retained as a covariate;
- cell-growth state and other study-supported confounders.

The aim is not to discover a universal `constraint coordinate`. It is to test whether a small mechanistically interpretable set predicts a specific recovery problem.

## Required train / test separation

At least one prediction must be genuinely held out.

Preferred splits, in descending order of strength:

1. train on one perturbation condition and predict a second perturbation condition;
2. train on early dormancy times and predict later times;
3. train on one genetic/background condition and predict another without redefining variables;
4. when only one experiment is available, use a predeclared nested cross-validation split while keeping model-selection data separate from final evaluation.

Randomly splitting neighboring observations from one highly correlated trajectory is not strong transfer evidence.

## Causal tests

Prediction alone does not establish that a variable is a causal constraint.

### Ablation / direct perturbation

Manipulate the candidate structural or regulatory variable while holding other conditions as closely matched as possible.

For aggregate-state hypotheses, the intervention should alter formation, maturation, fluidity, or dissolution through a mechanistically justified perturbation.

For the PyrBI case, the published overexpression result already supplies an important causal anchor. A new model should predict the direction and, ideally, the magnitude or threshold of the recovery/persistence change before using that result for evaluation.

### Matched-resource control

This is mandatory for the book's stronger thermodynamic claim.

If maintaining or repairing the candidate architecture consumes a measurable resource, give a comparison system the equivalent additional resource without restoring the architecture itself.

If extra ATP/substrate/resource alone reproduces recovery, then the architecture-specific interpretation has failed that test.

If resource addition does not restore recovery but targeted restoration of the structure/pathway does, the case for a constraint variable strengthens.

## Cost accounting

A proposed work-maintained constraint must have an independently measured or bounded cost.

Possible cost components include:

- ATP turnover associated with chaperone/disaggregation activity;
- protein-expression and proteome-allocation cost;
- maintenance of proton motive force;
- synthesis/degradation cost of regulatory proteins;
- substrate opportunity cost;
- repair cost during reactivation.

No universal conversion from these costs to `amount of future capability` is assumed. Cost and recovery remain separate axes unless a specific fitness or design objective supplies the scalarization.

## Statistical comparison

The primary scientific question is incremental prediction and transfer, not whether one fitted model can explain its training data.

Report, as appropriate:

- held-out log loss / likelihood;
- Brier score for binary recovery;
- calibration curves;
- AUROC or precision-recall only as secondary discrimination summaries;
- time-to-recovery likelihood or concordance for survival-style outcomes;
- confidence intervals from biological replicates rather than pseudo-replication of cells from one culture;
- model complexity / effective degrees of freedom.

Compare nested models:

`M_energy`: energy/activity variables only.

`M_structure`: candidate structural/pathway variables only.

`M_joint`: energy/activity + candidate constraint variables.

`M_domain`: strongest study-specific conventional model.

The conjecture receives support only if the constraint variables add held-out predictive value and causal intervention behaves as predicted. A higher in-sample R-squared is insufficient.

## Strong failure results

Any of the following should count against the proposed framework rather than be explained away:

- ATP/activity alone predicts recovery as well as the richer model on held-out data;
- aggregate/PyrBI variables lose predictive value after controlling for ordinary physiological covariates;
- intervention on the proposed constraint does not move recovery in the predicted direction;
- matched extra resource restores the same recovery without the architecture;
- the chosen variables do not transfer to a second perturbation;
- the full microscopic/study-specific model is simpler or more predictive than the proposed reduced description;
- the variable set must be redefined for each outcome after inspection.

## Source-data integrity

Bollen et al. provide source-data files through a Zenodo deposit associated with the paper. The current research environment has verified the deposit metadata but has not obtained the spreadsheet bytes in a form suitable for reproducible analysis. No result in the book should be described as a reanalysis until the original tables are actually loaded and checked.

Do not digitize plotted points and present them as source measurements.

Taher et al. provide figure-level quantitative reporting in the open article, including ATP measurements and single-cell PyrBI analyses. Those published summaries are useful for defining the benchmark, but they are not a substitute for a cell-level source dataset when fitting a predictive model.

## What a positive result would mean

A successful benchmark would not establish a new force or law.

It would establish something narrower and useful: in at least one biological recovery problem, present energetic state is not the sufficient low-dimensional description, while a small physically interpretable structural/regulatory variable set carries transferable predictive information and responds causally to intervention.

That would justify asking whether the relevant variable is a useful work-maintained constraint coordinate for recovery.

## What a negative result would mean

If conventional energetic, damage, or study-specific models already predict recovery as well as possible, the book should say so.

The variable problem would remain real in general, but this proposed decomposition would have failed its first empirical benchmark.

That is a worthwhile result.