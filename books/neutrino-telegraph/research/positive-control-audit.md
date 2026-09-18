# Positive-control audit: the mountain was not the hard part

This is one bounded research pass for *Neutrino Telegraph*. It strengthens Chapter 1's governing positive control without changing manuscript prose while the author branch is open.

## What the 2012 experiment actually demonstrated

Stancil et al. reported a digital neutrino link over 1.035 km, including 240 m of earth, using Fermilab's NuMI beam and the MINERvA detector. The decoded rate was 0.1 bit/s with a 1% bit-error rate.

Primary publication: D. D. Stancil et al., “Demonstration of Communication Using Neutrinos,” *Modern Physics Letters A* 27 (2012), DOI:
https://doi.org/10.1142/S0217732312500770

Author preprint:
https://arxiv.org/abs/1203.2847

The contemporaneous Department of Energy account supplies an important system-level fact that the abstract alone does not: MINERvA was a 170-ton particle detector, and the neutrino telegraph occupied the powerful pulsed accelerator beam for a couple of hours. DOE also explicitly warned that undersea or space communication remained out of reach without more intense beams or better detectors.

Source: DOE/ORNL Pulse, 9 April 2012:
https://web.ornl.gov/info/news/pulse/no360/story1.shtml

The full paper/preprint gives the denominator that Chapter 1 should eventually exploit rather than merely calling the link slow. The communication system did not send eight letters once and receive eight letters. It repeatedly transmitted a coded 25-pulse frame and inferred bits statistically from sparse detected interactions. The useful narrative object is therefore not just the mountain. It is the enormous asymmetry between particles launched and useful events counted.

## The stronger positive control

The current chapter correctly says that neutrinos' penetration and their detectability are the same engineering problem viewed from opposite sides. The research burden can now be made more exact:

1. **Source:** recover protons on target per NuMI pulse, proton energy, neutrino yield and energy spectrum during the communication run.
2. **Channel:** preserve the 1.035 km baseline and 240 m earth path, but do not treat the rock as the dominant loss mechanism; ordinary matter is precisely what the neutrinos mostly ignore.
3. **Receiver:** record MINERvA active/fiducial mass used by the communications analysis rather than casually equating the entire 170-ton apparatus with effective communications mass.
4. **Counts:** recover the mean selected signal events per beam pulse, background counts in an equivalent no-pulse interval, decision threshold and resulting raw-bit error probability.
5. **Coding:** reconstruct the 25-pulse frame, repetitions, error-correcting or synchronization structure, elapsed beam time and distinction between raw and decoded bit rate.
6. **Borrowed infrastructure:** distinguish infrastructure already sunk for high-energy physics from incremental equipment needed for the communications demonstration. This matters to the industrial-shadow thesis: the experiment proves physical feasibility, not the cost of a purpose-built communications system.

The chapter should eventually let the reader see the link budget collapse numerically from accelerator pulse to detected event to decoded bit. “0.1 bit/s” is memorable; the event-count denominator explains *why*.

## A complication the book should welcome

A poor 2012 link is not a timeless lower bound. The manuscript already says this, but the counterargument can be sharpened.

Neutrino communication is unusual because source intensity, particle energy, interaction cross-section, detector efficiency, target mass, background rejection, coding gain and acceptable latency can trade against one another. A future system does not have to shrink every component by the same factor. It could spend more energy to buy detector mass, use a different interaction channel, tolerate one-way low-rate command traffic, exploit a fixed transmitter while moving only the receiver, or accept intermittent rather than continuous contact.

That means “Fermilab needed a 170-ton detector” cannot become a universal claim that every useful receiver must weigh 170 tons. The defensible inference is conditional: any proposed compact receiver must show where the missing interaction statistics come from.

## Strongest counterargument to the industrial-shadow thesis

The 2012 demonstration may actually overstate the infrastructure required for a narrowly useful military link because it was not optimized as one. NuMI and MINERvA were particle-physics instruments pressed into communications service. A military requirement could be dramatically easier than ordinary broadband communications: a submarine might need only a few authenticated bits—surface, abort, change patrol box—delivered slowly and one-way. Patrick Huber's 2009 proposal is important precisely because it explores a different architecture: a high-energy neutrino beam from a muon storage ring and hull-mounted detection of interaction-produced muons or Cherenkov light.

Source: Patrick Huber, “Submarine neutrino communication,” 2009:
https://arxiv.org/abs/0909.4554

This does not defeat the book. It improves the test. The right comparison is not neutrinos versus a smartphone. It is neutrinos versus the minimum command channel the mission actually requires, including survivability, receiver size, pointing, transmitter conspicuousness, latency and probability of message receipt.

## Publication holds

Do not write that the 2012 experiment required 170 tons of *active communications target* unless the paper's fiducial selection supports that wording. The DOE article describes MINERvA as a 170-ton detector; effective mass for the selected communication events is a separate quantity.

Do not convert the reported 0.1 bit/s decoded rate into a simple “time to send NEUTRINO” calculation without reconstructing repetitions, framing and elapsed beam time. Contemporary summaries differ in how they describe repetitions and duration; use the primary paper for the final number.

Do not argue that rock caused the low rate. The central physics is almost the reverse: weak interaction lets the beam cross rock and also makes useful detection rare.

Do not use Fermilab's borrowed infrastructure as a direct cost estimate for a purpose-built military system. Use it to identify quantities a replacement system must supply.

## Narrative opportunity

Chapter 1 already ends with the right reversal: “The mountain was easy. Catching the message was hard.” The eventual revision can earn that line quantitatively.

The reader should first see the impossible-looking achievement: a word goes through 240 meters of rock. Then the accounting begins. The rock scarcely participates. The real drama happens at the receiver, where an accelerator's immense particle production becomes a tiny number of useful interactions and those interactions have to be accumulated into a bit decision.

That is more surprising than another paragraph about giant machinery. It also gives the whole book a reusable method: whenever a technology is described by the barrier it defeats, look for the bottleneck it creates somewhere else.

## Next source recovery

Before changing Chapter 1's quantitative prose, extract directly from arXiv:1203.2847 the NuMI pulse structure, protons on target, selected event rate per pulse, background, threshold, frame/repetition scheme and MINERvA fiducial selection. Then reproduce the reported BER and decoded rate from those quantities. If that reconstruction fails, preserve the published result but do not invent an explanatory link budget.