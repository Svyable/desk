# Locust explosive-sensing audit

## Why this note exists

The manuscript's central distinction is between biological discrimination and a decision-useful sensor. The 2020 locust explosive-vapor experiment is therefore unusually valuable because it tests the translation boundary directly rather than merely demonstrating that an insect receptor responds to an odor.

Primary paper: Debajit Saha et al., “Explosive sensing with insect-based biorobots,” *Biosensors and Bioelectronics: X* 6 (2020), 100050. DOI: https://doi.org/10.1016/j.biosx.2020.100050

Authoritative institutional account: Washington University in St. Louis, 14 August 2020: https://source.washu.edu/2020/08/researchers-one-step-closer-to-bomb-sniffing-cyborg-locusts/

## What the experiment establishes

The researchers recorded neural activity from *Schistocerca americana* while exposing the insects to vapors associated with chemically diverse explosive materials. Ensembles of neurons produced distinguishable activity patterns for explosive and non-explosive stimuli, including discrimination among explosive vapors. The paper reports recognition on the order of a few hundred milliseconds; the university account describes odor-specific patterns resolvable within roughly 500 milliseconds.

This is stronger than the loose statement “locusts can smell explosives.” The measured object was neural population activity, and the engineering achievement was to extract enough structure from that activity to classify stimuli.

The work was supported by U.S. Office of Naval Research grants N00014-16-1-2426 and N00014-19-1-2049. That establishes defense sponsorship of the research. It does not establish operational Navy deployment.

## What it does not establish

The experiment does not by itself establish a deployable explosive detector. Laboratory discrimination is upstream of several operational burdens:

- plume encounter and sampling in uncontrolled air;
- localization of a source rather than classification of delivered vapor;
- persistence of implanted recordings over useful mission durations;
- robustness to temperature, wind, humidity, background odors and mixtures;
- false-positive and false-negative rates in the target field environment;
- repeatability across individual animals;
- comparison against dogs, ion-mobility systems and other relevant baselines;
- an operator-facing decision rule with a known error budget.

The Washington University account itself frames field use as a future engineering problem. The researchers moved a locust through a controlled odor box to test concentration gradients; that is an important step toward localization, not evidence that free-ranging insects had located hidden explosives in operational terrain.

## The denominator the book should demand

For any later manuscript claim about “bomb-sniffing locusts,” extract at minimum:

| Layer | Required quantity |
|---|---|
| stimulus | chemical identity, vapor generation method, concentration/range, delivery geometry |
| organism | number of locusts, physiological state, implant duration, between-animal variance |
| neural readout | neurons/channels recorded, time window, signal stability |
| classifier | training/test separation, validation method, chance baseline, per-class performance |
| confounders | non-explosive odors, mixtures, background complexity, concentration dependence |
| localization | source geometry, motion protocol, success criterion, spatial error |
| field robustness | wind, temperature, humidity, competing odors, uncontrolled trials |
| operational comparison | sensitivity/specificity, time-to-alert, lifetime, cost and burden versus relevant synthetic or animal systems |

Do not let a fast neural response substitute for these denominators.

## Strongest counterargument to the book

This experiment may weaken the manuscript's proposed “translation tax” rather than illustrate a large one. The team did not merely observe a biological response; it extracted odor-specific neural patterns quickly enough for machine classification. If later work shows that modest ensembles of insects produce stable, cheap, field-robust classification and localization, biology may hand engineering an unusually short route from receptor to instrument.

That possibility should remain live. The book becomes more interesting if the translation boundary is an empirical engineering quantity rather than a philosophical inevitability.

There is an equally important contrary result inside the same logic: demonstrating classification in a controlled vapor-delivery experiment does not tell us how much performance survives the move into an uncontrolled plume. The decisive test is therefore not whether the locust brain contains target information. It is how much of that information remains after sampling, movement, individual variability, telemetry, classification and field noise are included.

## Manuscript implications

When Chapter 7 or Chapter 8 reaches this experiment, prefer the actual sequence:

1. the explosive-associated vapor enters the antennae;
2. neural ensembles produce different population patterns;
3. electronics record those patterns;
4. a classifier discriminates among stimuli;
5. controlled movement through a concentration gradient begins to address localization;
6. field deployment remains a separate claim.

That sequence is the book's thesis made physical. It also supplies a fair defeat condition: if later systems close steps 5 and 6 with strong denominators, reduce the rhetoric about living sensors being intrinsically hard to translate.

## Publication holds

- Do not write that the Navy deployed bomb-sniffing locusts.
- Do not convert Office of Naval Research funding into an operational requirement or adoption decision.
- Do not use “500 milliseconds” as a field detection time; it describes neural/classification timing under the reported experimental conditions.
- Do not say that a locust localized a hidden bomb unless a source-localization experiment actually supports that claim.
- Do not infer performance in mixtures or outdoor plumes from discrimination among controlled vapor presentations.

## Next primary-source extraction

Recover the paper's full methods, figures and supplementary material before manuscript drafting and populate the denominator table with exact sample sizes, classifier design, per-class performance, concentration conditions and localization protocol. Then look for follow-on papers from the same group that test implanted recording lifetime and uncontrolled or semi-field odor plumes. A later field result should be allowed to narrow or defeat the translation-tax thesis rather than being treated only as supporting color.