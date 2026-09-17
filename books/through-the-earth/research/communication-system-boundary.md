# Neutrino communication system boundary

## Bounded editorial finding

Chapter 1 has the right central joke — a carrier that ignores rock is also extremely hard to hear — but its submarine section can be made more rigorous by refusing to let **penetration** stand in for **communications-system advantage**. The 2012 Fermilab demonstration establishes a low-rate neutrino link under unusually favorable laboratory geometry. It does not establish a practical submarine architecture, and the strongest counterargument is not simply that the receiver was large. A useful military link has to close the entire source-to-decision budget: transmitter power and survivability, beam geometry, receiver target mass and efficiency, background, pointing/coverage, coding, latency, data rate, and what the submarine must physically carry.

This note is deliberately stacked on the initial `Through the Earth` manuscript branch and does not revise its prose concurrently.

## Primary result: what Fermilab actually demonstrated

D. D. Stancil et al., “Demonstration of Communication using Neutrinos,” *Modern Physics Letters A* 27 (2012), article 1250077, DOI 10.1142/S0217732312500770.

Fermilab-hosted manuscript: https://lss.fnal.gov/archive/2012/pub/fermilab-pub-12-073-e.pdf

The experiment established a decoded neutrino communications link at **0.1 bit/s**, with a reported **1% bit error rate**, over **1.035 km**, including **240 m of earth**. The authors explicitly name communication with submarines among the unusual applications that had motivated neutrino-communication proposals.

That is already enough for the opening. Do not inflate it into “neutrinos solved underwater communication.” The demonstrated achievement is narrower and more interesting: a deliberately modulated accelerator beam survived conversion into rare detector events well enough to recover encoded information through material opaque to ordinary radio at comparable frequencies.

DOE/Fermilab’s contemporary account adds a useful systems-scale detail: MINERvA was a roughly **170-ton particle detector**, and the test borrowed a powerful pulsed accelerator beam. DOE explicitly said communication with people under the sea would remain out of reach until beams became more intense or detectors improved.

DOE Pulse, 9 April 2012: https://web.ornl.gov/info/news/pulse/no360/story1.shtml

Use the peer-reviewed paper for final performance numbers; use the DOE account as contemporary institutional context for the apparatus and authors’ own deployment boundary.

## The stronger counterargument: a wall is only one term in a link budget

The manuscript currently contrasts neutrinos with the electromagnetic difficulty of reaching submerged submarines. That contrast is physically real, but it can become rhetorically unfair if “radio struggles with seawater” is compared with “neutrinos cross the Earth” before the complete systems are normalized.

For a submarine mission, the comparison should be made at a named task such as:

- strategic alert / bell-ringer message;
- short one-way command;
- routine one-way traffic;
- two-way traffic;
- navigation or timing assistance.

Then compare end to end:

- shore/transmitter footprint and power;
- transmitter vulnerability and availability;
- propagation/penetration at required depth;
- global or regional coverage and pointing burden;
- receiver mass, volume, power and environmental requirements aboard the submarine;
- achievable event rate / signal-to-background;
- decoded data rate and error rate;
- latency and integration time;
- whether the submarine must alter depth, speed, course, antenna posture, or other behavior to receive;
- whether acknowledgment/two-way communication is possible;
- total infrastructure already available versus purpose-built.

A neutrino system can win spectacularly on penetration while losing catastrophically on several other rows. That does not make the channel uninteresting. It prevents one exceptional physical property from becoming a complete military comparison.

## The laboratory geometry gave the receiver courtesies the ocean will not

The Fermilab experiment knew the transmitter, beam direction, receiver location, pulse timing, code and expected arrival geometry. It used an accelerator and detector already built for particle physics. Those conveniences should become explicit when Chapter 7 reaches “The Submarine Fantasy.”

A deployable system has to decide how a shore transmitter illuminates a moving receiver whose position may itself be deliberately concealed. A narrow beam helps flux at the receiver but creates pointing/coverage burden. A broad beam relaxes pointing but spends particles where no receiver exists. If the receiving platform must disclose its position to permit precise illumination, part of the strategic appeal can evaporate. If the transmitter sweeps or broadcasts broadly, the source-power/event-rate bill rises.

This is a better counterargument than “the detector is huge” because it remains relevant even if QuSeN or another detector program produces dramatic mass reductions.

## DARPA QuSeN changes the detector question, not the communication result

DARPA’s current QuSeN program says existing neutrino methods miss most neutrinos from nuclear activities and that multi-ton detector masses constrain widespread use. Its stated objective is a much lighter, more sensitive detector class enabling mobility and distributed arrays for standoff detection of nuclear reactors and nuclear materials.

Official program page: https://www.darpa.mil/research/programs/qusen

Opportunity: HR001125S0004.

This is directly relevant to the book’s detector-economics thesis, but do not let the program silently repair the 2012 communications architecture. QuSeN is publicly framed around sensing reactor/nuclear-material neutrinos, not as a demonstrated submarine communications receiver. Energy ranges, source spectra, interaction channels, backgrounds and required event timing can differ materially between sensing and an accelerator-modulated communications link.

A future chapter can legitimately ask whether a detector advance developed for one source class changes another. It must calculate the bridge rather than inherit it.

## Strongest counterargument to the counterargument

Do not dismiss neutrino communication because 2012 required a particle-physics facility. Technologies can begin with absurd infrastructure, and a military system does not need consumer bandwidth to be strategically useful. Existing submarine communication already accepts severe compromises because the mission values survivability and penetration more than ordinary throughput. A very low-rate channel could matter if it delivered a short command at depth without requiring the receiver to expose a mast or approach the surface.

That is the version the manuscript should permit to win.

The burden is quantitative: demonstrate that a plausible source plus receiver can deliver enough correctly decoded bits, at useful latency and coverage, while imposing less operational cost or vulnerability than the best conventional alternative for the **same message class**.

## Evidence ladder for the communications chapters

Keep these propositions separate:

1. neutrinos penetrate rock/water exceptionally well;
2. a modulated neutrino beam can carry encoded information;
3. a laboratory receiver can decode that information at a measured rate/error level;
4. source and receiver architectures can be made compatible with a submarine platform;
5. a moving/hidden receiver can be illuminated with acceptable pointing or broadcast cost;
6. the complete link delivers a militarily useful message at acceptable latency/reliability;
7. the link beats or complements conventional submarine communications on a named mission after total infrastructure is counted;
8. operational deployment exists.

The 2012 demonstration robustly reaches rung 3. The manuscript should not transfer evidence upward without new sources and calculations.

## Quantitative chapter requirement

Before Chapters 7–9 make a practical feasibility judgment, build one explicit link-budget example with sourced or clearly labeled assumed values:

- proton/beam power and neutrino yield;
- neutrino energy distribution;
- beam divergence / illuminated area at range;
- source-receiver baseline;
- detector target mass and interaction cross section;
- detection efficiency and usable event rate;
- background event rate in the deployment environment;
- pulse structure / symbol interval;
- coding overhead and target bit-error rate;
- decoded bits per second;
- receiver mass/volume/power;
- transmitter electrical power and facility footprint.

Then vary the terms that future technology could plausibly improve. The useful output is not one futuristic number but a sensitivity analysis showing which term actually dominates.

## Narrative opportunity

Chapter 1 already says the Fermilab apparatus knew where and when to listen. Keep that. Later, let the submarine case remove one courtesy at a time. The reader should discover that the rock really was the easy part: after penetration is solved, the engineering problem becomes how to put enough rare interactions into the right moving detector, often enough, cheaply enough, without giving away the operational advantage the channel was supposed to buy.

That progression also reduces repeated aphoristic “detection is not X” scaffolding. The argument can move through geometry and numbers instead.

## Publication holds

- Do not call neutrino submarine communication practical from the 2012 demonstration alone.
- Do not call the channel “unjammable” as an absolute; physical shielding is difficult, but a communications system can be denied through transmitter attack, receiver attack, geometry, interference/background at the inference layer, denial of pointing information, or economics.
- Do not treat QuSeN target metrics as achieved detector performance.
- Do not assume reactor-neutrino detector improvements transfer directly to accelerator-beam communications without matching energy, interaction and timing requirements.
- Do not compare neutrino data rate against ordinary consumer/radio bandwidth when the relevant conventional baseline is a survivable submarine alert/command channel; normalize by mission.
- Recover historical ELF/VLF system performance from authoritative Navy/government technical records before making exact comparative claims about depth, bitrate, antenna footprint, transmitter power or operational procedure.
