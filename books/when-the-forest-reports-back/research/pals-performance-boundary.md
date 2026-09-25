# PALS performance boundary — research audit

## Why this note exists

The opening currently uses an oyster as its first concrete biological sensor, then moves into DARPA's Persistent Aquatic Living Sensors (PALS) architecture. That image is memorable, but the public PALS record checked here names goliath grouper, black sea bass, snapping shrimp, bioluminescent organisms, microorganisms, and reef communities—not oysters—as the program's performer organisms. Unless a performer-level source establishes oysters, the opening should not let the reader infer that DARPA actually built an oyster-based PALS system.

The more important opportunity is to replace the generic biological-sensing premise with PALS's real experimental progression: first prove that an organism responds differently to a vehicle than to confounders; then build the detector that can turn that response into a remote alert; then ask whether the combined system is useful enough to compete with conventional sensing.

## Primary / authoritative record checked

### DARPA PALS program page

https://www.darpa.mil/research/programs/persistent-aquatic-living-sensors

DARPA describes a two-stage architecture. Marine organisms first sense an underwater vehicle or confounder and produce an observable response. A man-made detector then observes, records, interprets, and transmits the response as a distilled alert. The page explicitly requires discrimination between target vehicles and debris or other marine organisms to limit false positives. It also now marks the program complete.

This supports the manuscript's strongest systems insight: the organism is not the whole sensor. But it also narrows the claim. DARPA's stated ambition—greater lifetime, range, discretion, and lower logistical footprint—is a program goal, not demonstrated comparative field performance.

### DARPA, 15 February 2019 — five performer approaches

https://www.darpa.mil/news/2019/detect-undersea-activity

The official announcement identifies five approaches: Northrop Grumman on snapping-shrimp acoustics and bioluminescent organisms; Naval Research Laboratory on natural microorganisms responding to magnetic signatures; Florida Atlantic University on goliath-grouper vocalizations; Raytheon BBN on snapping shrimp as sources of opportunity for bistatic sonar; University of Maryland Center for Environmental Science on instrumented black-sea-bass behavior; plus a Naval Undersea Warfare Center reef-acoustics effort.

This is useful because “living sensor” covered materially different architectures. In some cases the organism's behavior was the signal. In the Raytheon approach, biological sound was closer to an opportunistic illuminator for conventional acoustics. The book should not flatten these into one mechanism.

### DARPA, 28 September 2020 — Phase 2 transition

https://www.darpa.mil/news/2020/pals-program-second-phase

DARPA says Phase 1 performers demonstrated that marine organisms could sense the presence of an underwater vehicle **or confounder** and produce an observable response, while identifying measurable signals against background noise. Phase 2 then moved to man-made detector systems and complete-system discrimination. DARPA also says the continuing teams had met Phase 1 metrics and showed a path toward later metrics.

This is stronger than merely documenting a research question, but weaker than operational validation. “Met Phase 1 metrics” should not silently become detection range, false-alarm rate, deployment endurance, or submarine-classification performance unless those metrics and results are recovered.

## Performer-level result checked

Altaher et al., “Detection and localization of Goliath grouper using their low-frequency pulse sounds,” *Journal of the Acoustical Society of America* 153 (2023), 2190–2202. DOI: https://doi.org/10.1121/10.0017804 ; PubMed: https://pubmed.ncbi.nlm.nih.gov/37092909/

The paper demonstrates automated detection and localization of **grouper pulse-like calls** with a six-hydrophone array. The abstract reports an intrinsic localization error of about 2 m for an array spanning 50 m. This is a concrete piece of the readout chain.

It does **not**, by itself, demonstrate that the fish reliably detected an underwater vehicle, that its call discriminated a military target from divers/predators/other disturbances, or that a complete PALS system achieved operationally useful false-alarm and missed-detection rates. Those are separate rungs.

That distinction is narratively useful. A machine can become very good at locating the fish before the system has proved that the fish knows what the military wants to know.

## Evidence ladder for the PALS chapters

Do not transfer evidence upward without a source:

1. organism produces a measurable behavior or physical signal;
2. signal changes under a controlled target or perturbation;
3. response differs from specified confounders;
4. detector automatically reads the biological response;
5. complete system localizes/classifies the target at useful range;
6. field performance survives environmental variation;
7. false-alarm and missed-detection rates are competitive for a named mission;
8. persistence/logistical cost beats an appropriate conventional baseline;
9. operational deployment or adoption is documented.

The public material checked here reaches different rungs for different performers. Do not describe PALS as a single demonstrated capability.

## Strongest counterargument to the book's infrastructure thesis

Biology may be doing less infrastructural work than the rhetoric suggests. A PALS installation still needs hydrophones/cameras or other readout hardware, processing, communications, power, calibration, maintenance, and a model robust enough to distinguish target-induced behavior from ecology. If those conventional layers dominate cost, failure, or detectability, “self-sustaining sensor” becomes a misleading accounting choice: the organism is a transducer embedded inside an otherwise ordinary surveillance system.

The clean control is DARPA's own Ocean of Things program, which pursued persistent maritime awareness with thousands of inexpensive conventional floats. Official page: https://www.darpa.mil/research/programs/ocean-of-things . That program explicitly targeted roughly year-long float persistence and distributed cloud analytics. A later PALS chapter should compare like with like: area covered, useful lifetime, power/logistics burden, communications, false alarms, calibration, ecological constraints, replacement cost, and mission-specific information gained.

The biological architecture wins only if the organism removes enough hardware/logistics burden or adds enough sensing information to outweigh the new ecological uncertainty. That proposition should remain at risk.

## Editorial consequences for the next prose pass

- Verify or remove the opening oyster/PALS implication. If oysters remain as a general example of biological monitoring, label them as such and do not let DARPA carry the fact.
- Replace “biology is almost offensively good at sensing” with a narrower observation tied to a particular organism/task; the present sentence universalizes precisely where the book's evidence ladder demands specificity.
- Let the grouper case carry Chapter 3 as a sequence: territorial animal → distinctive low-frequency call → target/confound problem → machine learns to detect/localize the call → unresolved question of whether the call contains enough target information.
- Treat the 2020 Phase 1 announcement as institutional evidence that performer metrics were met, not as independent validation of operational efficacy.
- Recover performer reports/papers before giving numerical detection range, sensitivity, false-positive rate, target-class discrimination, or persistence claims.
- Compare PALS against a real conventional distributed-sensor baseline rather than against a caricature of battery-powered boxes.

## What would change the argument

The infrastructure thesis strengthens if performer-level records show complete PALS systems achieving durable field discrimination at useful ranges with materially lower logistics or better mission information than conventional alternatives. It weakens if biological response is mostly an interesting front-end whose variability forces enough conventional sensing, calibration, and computation that the total system loses its supposed persistence or cost advantage.
