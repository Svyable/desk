# Goliath grouper audit — localization is not target discrimination

This is a bounded evidence audit for *The Ocean Is Already Listening*. It tests the cleanest public bridge from DARPA's PALS program description to a later peer-reviewed result from the Florida Atlantic University team.

## What DARPA said in 2020

DARPA's 28 September 2020 Phase 2 announcement says Phase 1 teams had demonstrated that marine organisms could sense an underwater vehicle **or confounder** and produce an observable response. Phase 2 was supposed to add man-made systems that would observe, interpret, and transmit those responses. DARPA stated a stronger eventual burden explicitly: complete PALS systems would have to discriminate target vehicles from other stimuli, including debris and other marine organisms, in order to limit false positives.

The announcement names Florida Atlantic University's Goliath grouper team as one of four Phase 2 efforts. It does not publish the Phase 1 metric values, target/confounder denominators, probability of detection, false-alarm rate, or an operational evaluation.

Primary source: DARPA, “PALS Program Enters Second Phase,” 28 September 2020:
https://www.darpa.mil/news/2020/pals-program-second-phase

## What the 2023 grouper paper actually demonstrates

Altaher et al. (2023), *Detection and localization of Goliath grouper using their low-frequency pulse sounds*, is a real technical advance but answers a different question from target discrimination.

The paper implements a two-stage acoustic system. An adaptive matched filter identifies and times low-frequency grouper pulses recorded on hydrophones; a time-difference-of-arrival algorithm then estimates the source location. Applied to a six-hydrophone array spanning roughly 50 m, the authors report an intrinsic localization error of about 2 m. The stated use is automated processing of large acoustic datasets and fine-scale mapping of the movements of sound-producing organisms.

The abstract does **not** report discrimination between an underwater vehicle and ecological confounders, a target-detection probability, a false-alarm rate for vehicle alerts, or an end-to-end PALS contact report.

Primary record: Altaher et al., *Journal of the Acoustical Society of America* 153(4), 2190 (2023), DOI 10.1121/10.0017804; PubMed record and abstract:
https://pubmed.ncbi.nlm.nih.gov/37092909/

## The evidentiary ladder the manuscript needs

The grouper case should be kept in separate rungs:

1. **The organism emits a measurable signal.** Goliath grouper produce low-frequency pulse-like calls.
2. **The observing hardware can detect that biological signal.** The matched-filter system can identify the pulses in hydrophone recordings.
3. **The system can localize the organism.** The 2023 paper reports about 2 m intrinsic error over the approximately 50 m array.
4. **The organism changes measurably in response to a relevant stimulus.** DARPA says Phase 1 performers met program metrics involving a vehicle or confounder, but the public announcement does not expose the grouper experiment-level denominator.
5. **The biological response discriminates target from confounders.** This is the crucial operational claim and remains unestablished by the 2023 localization paper.
6. **An end-to-end system produces useful remote alerts.** Public evidence located in this pass does not establish deployed operational performance.

Do not collapse rungs 1–3 into 5. Being able to hear and locate a fish is necessary infrastructure for using its behavior as a sensor. It is not evidence that the fish knows why it moved or called.

## Strongest counterargument

This distinction can be pushed too far. The 2023 paper was not necessarily intended as the complete PALS performance report. A detector/localizer is exactly the sort of subsystem Phase 2 required before behavioral responses could be converted into machine-readable observations. DARPA's 2020 announcement also says the teams had already met Phase 1 metrics, so it would be wrong to imply that the program had demonstrated nothing beyond ordinary fish bioacoustics.

The defensible conclusion is narrower: **the accessible 2023 peer-reviewed grouper localization result should not be cited as public proof of target-versus-confounder discrimination.** If a PALS final report, conference paper, BAA metric table, contract deliverable, thesis, or later publication supplies that discrimination result, the manuscript should promote the claim accordingly.

## Why this matters to the book's central argument

Chapter 1 already contains the right conceptual sentence: “You have to know what the sensor means.” The grouper evidence can make that sentence concrete rather than philosophical.

A hydrophone hears a pulse. Software says it came from a grouper two meters over there. Those are impressive solved problems. The military question begins one rung later: did the fish respond because a target vehicle passed, or because of another fish, a predator, a diver, weather, reproductive behavior, habitat change, or something else?

That is the book's most interesting engineering inversion. Biology may supply persistence and local coupling, but the human system inherits a semantic-classification problem. The 2023 result shows how much machinery can be required merely to establish **where the biological response came from** before anyone can responsibly say what caused it.

## Publication hold

Until experiment-level PALS performance is recovered, do not write that the Goliath grouper work demonstrated reliable detection of underwater vehicles, vehicle classification, or target/confounder discrimination.

Safe claims from the public record are narrower:

- DARPA selected the FAU Goliath grouper effort for PALS Phase 2.
- DARPA said Phase 1 teams met program metrics involving organism responses to underwater vehicles or confounders, without publishing the full grouper denominator in the 2020 announcement.
- A DARPA-supported 2023 FAU-led paper demonstrated automated acoustic detection and localization of Goliath grouper calls, with about 2 m intrinsic localization error for a roughly 50 m six-hydrophone array.
- That paper does not by itself establish end-to-end vehicle discrimination.

## Next source targets

Search specifically for the PALS BAA metric definitions, FAU contract/final-report material, conference proceedings, theses and later papers connecting grouper calls or movements to controlled UUV passages. Extract target passes, confounder passes, blind/known labels, environmental conditions, response latency, probability of detection, false alarms, and whether the classifier generalized beyond the collection site.
