# Research audit — what certified randomness can and cannot test

## Scope

This note tests one bounded claim in *THE SMALLEST FORCE*: that modern device-independent randomness certification supplies a useful adversarial language for micro-PK experiments. The comparison is promising, but the current manuscript risks letting `certified randomness` sound like a universal detector for hidden causal influence. It is not.

## What the primary literature establishes

### Bierhorst et al. 2018

Peter Bierhorst and colleagues reported certified randomness from a photonic Bell experiment. Their protocol extracted **1,024 bits** that were uniform to within **10^-12** under stated assumptions. The important assumptions are part of the result: the claimed unpredictability applies against adversaries constrained by physical theories that prohibit superluminal signalling and assumes independent measurement choices.

Primary source: Peter Bierhorst et al., “Experimentally generated randomness certified by the impossibility of superluminal signals,” *Nature* 556 (2018), 223–226. https://doi.org/10.1038/s41586-018-0019-0

This is stronger than characterizing an ordinary RNG by inspecting its output distribution. The Bell correlations constrain classes of explanations without requiring a trusted internal model of the devices. But `device-independent` does not mean assumption-free, mechanism-independent in every conceivable sense, or immune to arbitrary physical influence.

### Pironio et al. 2010

The earlier proof-of-concept by Pironio and colleagues used Bell-inequality violation to certify new randomness without trusting the devices’ internal implementation. Their experiment guaranteed **42 new random numbers with 99% confidence** under the protocol’s assumptions.

Primary source: S. Pironio et al., “Random numbers certified by Bell’s theorem,” *Nature* 464 (2010), 1021–1024. https://doi.org/10.1038/nature09008

This paper is useful historically because it makes the conceptual shift explicit: a physical RNG cannot simply be called unpredictable because its output looks noisy. Certification is a statement derived from an experimental protocol plus physical assumptions.

### Liu et al. 2018

A separate 2018 device-independent quantum RNG experiment explicitly framed security against both quantum and classical adversaries and used a loophole-free Bell architecture. It reinforces the point that `random` is not one property with one test; the guarantee is indexed to an adversarial model, protocol, loophole structure, and security statement.

Primary source: Yang Liu et al., “Device-independent quantum random-number generation,” *Nature* 562 (2018), 548–551. https://doi.org/10.1038/s41586-018-0559-3

## The boundary the manuscript should preserve

The useful transfer to micro-PK is **experimental posture**, not a ready-made proof system.

A historical intention experiment asks whether the distribution of recorded outputs differs between conditions. A device-independent randomness protocol asks whether observed correlations, under explicit physical assumptions, certify a lower bound on unpredictability against a defined adversary. Those are not the same null hypothesis.

If a purported psychokinetic interaction were real, it might enter a Bell-based setup in several conceptually different places:

- by influencing the physical outcome at an entropy source;
- by influencing setting choices;
- by creating an ordinary environmental coupling between nominally separate apparatus;
- by affecting detection, timing, electronics, or data acquisition;
- or, under a much stronger and presently unsupported claim, by violating an assumption such as measurement independence or no-superluminal signalling.

A failed randomness-certification test would therefore not automatically identify `mind` as the cause. A passed certification test would not automatically exclude every imaginable mind–matter hypothesis either. It would exclude or bound classes of models under the protocol’s stated assumptions.

That is still extremely useful. It forces the extraordinary claim to specify where it enters the apparatus.

## A stronger experimental bridge

The book can make the comparison concrete without pretending Bell certification directly tests PEAR.

A serious future intention experiment could borrow the security mindset:

1. Define the physical entropy source and every transformation from raw event to published statistic.
2. Commit target assignments and the analysis before data collection, preferably with cryptographic commitments whose timestamps and hashes can be independently checked.
3. Separate the participant, target generator, physical RNG, acquisition system, and analysis pipeline enough to make ordinary information leakage and environmental coupling testable.
4. Publish raw event-level data, calibration runs, exclusions, stopping rules, and all prespecified endpoints.
5. Run matched no-intention and sham conditions through the identical pipeline.
6. Replicate on independently built hardware and, where the hypothesis permits, on materially different entropy sources.
7. State the adversarial model explicitly: which conventional couplings have been bounded, which remain possible, and what observation would distinguish the proposed mind–matter interaction from them.

The gain is not that cryptography makes psi impossible to fake. The gain is that a claim has fewer places to hide without saying where it moved.

## Strongest counterargument

The bridge may be mostly rhetorical.

Device-independent quantum randomness was developed to certify unpredictability from Bell correlations under explicit physical assumptions. Historical micro-PK experiments generally test a different proposition: whether an intention condition changes a generator’s output distribution. If the strongest psi hypothesis does not predict a Bell-test signature, does not specify a coupling, and merely predicts a small condition-dependent bias, importing Bell terminology can decorate the experiment without increasing discriminatory power.

That counterargument should be allowed to win. The manuscript’s `adversarial-randomness bridge` earns a chapter only if it yields concrete protocol changes or exclusion bounds that ordinary preregistration, blinding, independent hardware, calibration, and open data do not already supply.

A useful defeat test is therefore simple: write the proposed future experiment twice—once using ordinary rigorous experimental controls, once using concepts specific to device-independent randomness. If the second design cannot identify an additional failure mode, quantitative bound, or hypothesis distinction, cut the Bell-certification material back to a short analogy.

## Publication holds

- Do not write that device-independent randomness is `assumption-free`.
- Do not write that a certified random bitstream proves that no external physical influence affected the apparatus.
- Do not imply that Bell certification retrospectively invalidates classical PEAR-style RNG experiments; it answers a different question.
- Do not use `quantum RNG` as a synonym for `certified RNG`. A quantum entropy source can still require trusted-device assumptions.
- Do not claim that a failed Bell/randomness certification result would identify psychokinesis rather than an ordinary loophole or coupling.
- Keep the 1,024-bit / 10^-12 Bierhorst result attached to its stated physical assumptions and protocol, not as a generic measure of RNG quality.

## Editorial use

The strongest eventual prose move is probably not another named framework. It is a scene-level change in the engineering section: let the reader watch the word `random` become conditional. The old experiment asks whether a box drifts while someone intends it to drift. The modern experiment asks what an adversary would have to know or control before the output stops being certifiably unpredictable. The difference forces the micro-PK claim to stop treating the RNG as a black box and name the physical interface it proposes to perturb.

That is narrower than saying modern randomness science can settle psychokinesis. It is also more useful.