# Experimental Candidate Ranking

The question is no longer “which system best illustrates future reachability?” Too many neighboring fields already explain costly preparedness, control variety, energy-feasible reachability, information-based control, and self-maintained structure.

The right question is:

> Which experiment can discriminate a useful **constraint coarse-graining** from standard domain models?

That changes the ranking.

## Tier 0 — adversarial benchmarks first

Before claiming novelty, the formalism should be applied to systems where strong quantitative explanations already exist.

### Proteome reserve and growth–lag trade-offs

Mori et al. quantified the benefit and cost of bacterial proteome reserve in fluctuating famine–feast environments:

https://doi.org/10.1038/s41467-017-01242-8

Basan and colleagues measured a broad growth–lag trade-off:

https://doi.org/10.1038/s41586-020-2505-4

A 2026 PRX Life paper models evolutionary learning of environmental transition statistics through proteome allocation:

https://doi.org/10.1103/rqj5-pqvt

These are excellent **null tests**. If the constraint decomposition cannot reproduce their known trade-offs, it is poorly formulated. If it can, that demonstrates consistency, not novelty.

### Anticipatory regulation

Laboratory evolution has already produced anticipatory regulation in *E. coli*, and contemporary resource-allocation models explicitly study preparation for statistically structured future environments.

One useful experimental record is:

https://pmc.ncbi.nlm.nih.gov/articles/PMC8787300/

Again, reproducing preparedness does not establish a new principle.

## Tier 1 — strongest discriminating experiment: causal architecture intervention under matched resource

The best first *new* experiment should be chosen for causal separation, not biological grandeur.

Construct or identify two otherwise comparable physical architectures where one contains a measurable persistent constraint that changes the transition graph: a selective barrier, catalytic localization, regulated coupling, or another structure whose effect can be independently characterized.

The experiment should have four arms:

1. baseline architecture;
2. constraint-bearing architecture;
3. constraint ablation;
4. baseline architecture plus the same extra resource spent on the constraint, but without the constraint itself.

Before exposing any arm to held-out disturbances, estimate the transition model and predict its recovery boundary.

The result is interesting only if the architecture changes recovery after the resource quantity is matched.

**Why this ranks first**

It attacks the central causal claim directly: organization of resource, not merely amount of resource, changes which recovery paths remain viable.

**Novelty risk**

Moderate. Robust control and architecture co-design already contain the engineering analogue. The system should ideally construct or maintain the relevant constraint through its own driven chemistry rather than receive an externally installed valve.

## Tier 2 — fuel-maintained synthetic selective barrier or compartment

Synthetic chemistry offers unusually clean physical bookkeeping.

But chemically fueled compartments, transient assemblies, vesicular nanoreactors, coacervates, and active transport already form an active literature. “Fuel maintains a compartment” is not novel.

A useful experiment would instead ask:

- how much fuel/work maintains the barrier;
- which transitions the barrier suppresses or enables;
- which preregistered forcing protocols remain recoverable under a matched total fuel budget;
- whether the recovery boundary follows from independently measured permeability/kinetic parameters;
- whether matched extra fuel without the barrier fails to reproduce the effect.

**What would be new enough**

A quantitative work → self-maintained constraint → held-out recovery-boundary prediction, not another demonstration of dissipative assembly.

## Tier 3 — dormant-versus-dead reduced recovery model

Dormancy remains conceptually powerful because present throughput can be tiny in both dormant and dead cells.

However, the mechanistic literature is already rich. ATP concentration, protein aggregation, chaperone-mediated disaggregation, membrane state, NAD-related metabolism, and other variables are connected to dormancy depth and resuscitation.

Relevant examples include:

- ATP-dependent dynamic protein aggregation and dormancy depth: https://doi.org/10.1016/j.molcel.2018.10.022
- ATP-mediated resuscitation pathways in VBNC cells: https://doi.org/10.1016/j.jare.2023.08.002
- ATP concentration as a regulator of bacterial cell fate: https://doi.org/10.1128/jb.00208-24

**Scientific opportunity**

Not “latent reachability exists.” The stronger test is whether a small constraint-oriented state description predicts recovery across multiple held-out perturbation protocols earlier, more compactly, or more transferably than ATP, membrane integrity, aggregate state, and ordinary viability measures.

**Novelty risk**

High, because a good conventional physiological model may already win. That makes this an excellent adversarial test.

## Tier 4 — metabolic-currency coupling as a very close extension

Yamagishi and Hatakeyama's 2026 PRX Life result is extremely close:

https://doi.org/10.1103/4bqh-zhry

Their model already links thermodynamic cost, metabolic-currency balance, controllability, and environmental complexity. A simple claim that complex environments favor costly controllability is therefore not available as this book's contribution.

A reachability extension is worth pursuing only if it predicts something their controllability measure does not—for example, a specific finite-time recovery boundary for time-dependent demand vectors under a measured metabolite/work budget.

**Novelty risk**

Very high.

**Value**

Excellent benchmark against the closest known thermodynamic-control result.

## Tier 5 — active matter with feedback-created structure

Active matter offers careful dissipation accounting and controllable collective states. A feedback or memory architecture could be evaluated by which perturbations the collective state recovers from under matched microscopic fueling.

A modern thermodynamic baseline is:

https://doi.org/10.1103/PhysRevX.15.021050

If the feedback is externally programmed, however, the result is largely robust control applied to active matter. Endogenous construction or maintenance of the constraint would make the case stronger.

## Tier 6 — sensory memory and cognition

This is scientifically crowded and should come late.

Relevant prior art includes:

- empowerment: https://doi.org/10.1109/CEC.2005.1554676
- continuous information thermodynamics: https://doi.org/10.1103/PhysRevX.4.031015
- sensory capacity and memory: https://pubmed.ncbi.nlm.nih.gov/26986297/
- semantic information and viability: https://doi.org/10.1098/rsfs.2018.0041

A memory experiment is informative only if the proposed constraint variables predict a physical recovery/control boundary not already captured by channel capacity, mutual information, prediction error, or standard control performance.

## Recommended sequence

### Step 1 — benchmark the decomposition

Use published microbial preparedness data if sufficiently reusable. Ask whether a constraint-oriented reduced model recovers known behavior without outcome-driven definitions.

Expected result: little or no novelty. The purpose is calibration.

### Step 2 — run the causal matched-resource architecture test

Choose the simplest system in which the physical constraint can be manipulated independently, its cost measured, and its transition effect estimated before the held-out disturbance.

This is the first experiment that directly tests the revised claim.

### Step 3 — test transfer

Do not stop after one successful perturbation. Hold the decomposition fixed and predict a second disturbance class.

Failure to transfer is evidence that the “constraint variable” was merely a local fit.

### Step 4 — only then connect to fitness or selection

Once the physical recovery model is independently validated, use it upstream of a competition/persistence experiment. Do not fit the constraint model to the evolutionary result it is supposed to explain.

## Decision rule

A candidate experiment deserves priority only if:

1. candidate constraint variables can be intervened on;
2. their physical costs can be measured independently;
3. viability/recovery can be defined before the outcome;
4. transition dynamics can be estimated without fitting final fitness;
5. matched-extra-resource and ablation controls are feasible;
6. a credible existing model makes a distinguishable prediction;
7. held-out disturbances allow a transfer test.

The most impressive system is not automatically the best test.

The best test is the one that gives the conjecture the fewest places to hide.