# Experimental Candidate Ranking

The reachability conjecture should not be tested first in whichever system makes the story sound best. It should be tested where the measurement is clean, the competing theories are strong, and failure would be informative.

This note ranks candidate systems after the first-principles and prior-art passes.

## 1. Metabolic-currency decoupling under variable demands — strongest near-term theory/experiment bridge

**Why it is promising**

Yamagishi and Hatakeyama's 2026 PRX Life result already provides a thermodynamic cost–controllability trade-off for coupled metabolic currencies such as ATP, GTP, and NAD(P)H:

https://doi.org/10.1103/4bqh-zhry

That gives the cost side of the problem unusually strong footing. The open extension is to expose differently coupled architectures to a declared family of time-varying demands and calculate which demand vectors remain viable/recoverable under a finite metabolite and work budget.

The reachability question becomes concrete:

- Which combinations of ATP/GTP/redox demand can each architecture recover from?
- What additional entropy-production or pool-maintenance cost buys that independent controllability?
- Does the calculated viable demand set predict a crossover in persistence or growth under fluctuating demand statistics?

**Novelty risk**

Moderate. The 2026 paper is extremely close. Any result that merely restates “more controllability costs more” is not novel.

**What would be new enough**

A preregistered environmental/demand threshold derived from measured thermodynamic cost plus a robust viable reachable-set calculation, validated by perturbation or competition data and not predicted equally well by the original controllability metric alone.

**Tractability**

High for theory; moderate for wet lab depending on the metabolic architecture chosen.

## 2. Dormant-versus-dead latent recovery geometry — highest conceptual upside

**Why it is promising**

A dormant viable cell and a dead cell can both have extremely low present throughput. Hyun Youk's non-equilibrium-capacity proposal already identifies retained latent capacity as important:

https://doi.org/10.1016/j.newton.2025.100358

The reachability program can earn something only if it predicts that latent capacity *before* reactivation.

A strong experiment would measure a small physiological state vector in dormant cells, apply bounded pulses of nutrients/electron acceptors/temperature/osmotic conditions, and calculate whether a viable reactivation trajectory exists within an independently measured energy budget. The output would be a perturbation/recovery map, not a post hoc survival label.

**Novelty risk**

Moderate. “Dormant systems retain capacity” is occupied territory. Operationalizing that capacity as budgeted viable recovery may still add value.

**What would be new enough**

A pre-reactivation reachability metric that separates dormant viable cells from irreversibly dead or moribund cells better and earlier than ATP level, membrane integrity, bulk energy inventory, or standard viability assays.

**Tractability**

Moderate. Measurement and state definition are difficult, but the result would matter beyond this book.

## 3. Fuel-driven synthetic compartment or selective barrier — cleanest first-principles physics

**Why it is promising**

A synthetic chemical system can isolate the exact causal loop without evolutionary history. Compare two fuel-driven reaction systems. One consumes part of the input to construct or maintain a selective compartment/barrier; the other does not. The barrier must physically suppress harmful transitions or create a coupling that changes which future forcing protocols can be recovered from.

The experiment can directly measure:

- fuel/work spent on constructing or maintaining the barrier;
- permeability or reaction-rate changes caused by the barrier;
- disturbance protocols recoverable with and without it;
- total dissipation and current throughput.

This is the clearest test of the claim that lower raw transition variety can coexist with higher robust viable recovery.

**Novelty risk**

Lower conceptually, but only if a genuinely self-produced or fuel-maintained constraint is used. An externally installed valve would collapse the result into ordinary engineering/control theory.

**What would be new enough**

A demonstrated work-to-constraint-to-recovery causal chain in a driven chemical system, with the recovery set predicted before perturbation and a matched-fuel control.

**Tractability**

Moderate to low experimentally; high conceptual clarity.

## 4. Active matter with feedback-created structure — good physics, weaker endogeneity

Active matter is attractive because dissipation can be measured carefully and collective states are experimentally accessible. Bebon, Robinson, and Speck's 2025 PRX treatment provides a modern thermodynamic baseline:

https://doi.org/10.1103/PhysRevX.15.021050

One could compare systems with matched microscopic fueling but different feedback or structural memory, then measure the set of macrostates or disturbances from which each recovers.

**Novelty risk**

Moderate to high. If the feedback architecture is externally programmed, the result is mostly robust control plus active matter.

**Usefulness**

Excellent as a physical demonstration that dissipation rate and viable recovery repertoire need not order systems the same way. Weaker as evidence for endogenous biological constraint construction.

## 5. Proteome reserve and growth–lag trade-offs — benchmark, not novelty target

This should be treated as a null/benchmark domain.

Mori et al. already quantitatively modeled the benefit and cost of bacterial proteome reserve in fluctuating famine–feast environments:

https://doi.org/10.1038/s41467-017-01242-8

Basan and colleagues reported a broad growth–lag trade-off across *E. coli* and other respiro-fermentative organisms:

https://doi.org/10.1038/s41586-020-2505-4

A 2026 PRX Life accepted paper models evolutionary learning of environmental transition statistics through proteome pre-allocation:

https://doi.org/10.1103/rqj5-pqvt

These systems already demonstrate that paying present growth costs for preparedness can be favored in fluctuating environments.

**Conclusion**

If constraint-selective reachability cannot reproduce these results, it is probably wrong or poorly formulated. If it can reproduce them, that is a consistency check—not evidence of novelty.

## 6. Anticipatory regulation — another benchmark/null case

Experimental evolution has already produced anticipatory regulation in *E. coli* under a cyclical sequence of cues:

https://pmc.ncbi.nlm.nih.gov/articles/PMC8787300/

Recent proteome-allocation work also models anticipatory pre-expression under fluctuating stress.

The book must not imply that it discovered the idea that organisms can pay present costs to prepare for statistically predictable future conditions.

This domain is useful for testing whether the reachability formalism adds predictive value beyond existing regulatory/resource-allocation models. The prior expectation should be that it may not.

## 7. Sensory memory and information processing — powerful but crowded

Information thermodynamics, sensory capacity, semantic information, predictive control, and empowerment already cover much of the territory.

Relevant examples:

- empowerment: https://doi.org/10.1109/CEC.2005.1554676
- continuous information thermodynamics: https://doi.org/10.1103/PhysRevX.4.031015
- sensory capacity: https://pubmed.ncbi.nlm.nih.gov/26986297/
- semantic information and viability: https://doi.org/10.1098/rsfs.2018.0041

A memory experiment is worth pursuing only if the outcome variable is a physically budgeted recovery boundary that cannot be reduced to channel capacity, mutual information, prediction error, or standard control performance.

## Recommended research sequence

**Paper 0 / adversarial benchmark:** apply the formalism to published proteome-reserve or growth–lag data. Expect little or no novelty. Use the exercise to discover whether the definitions are operational.

**Paper 1 candidate:** metabolic-currency demand perturbations. Build the robust demand/recovery set on top of the 2026 cost–controllability model and derive a threshold not already present in that work.

**Paper 2 candidate:** dormant-versus-dead latent recovery. Attempt a pre-reactivation prediction from measured physical state and energy-limited recovery dynamics.

**Physics demonstration:** a fuel-driven synthetic compartment/barrier if an experimentally realizable system can be identified where the constraint is produced or maintained by the driven system itself.

## Decision rule

Do not choose a system because it gives a dramatic story.

Choose it if:

1. the constraint's physical cost can be measured;
2. the transition dynamics can be identified independently of the final fitness result;
3. viability can be defined without looking at who wins;
4. the disturbance distribution can be controlled;
5. at least one established competing model makes a distinguishable prediction;
6. ablation or matched-resource controls can isolate the constraint's causal contribution.

If those conditions are not available, the experiment may illustrate the book but cannot validate the conjecture.
