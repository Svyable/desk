# Alarm burden audit

This note carries the strongest quantitative work from the consolidated *Five Days Before* draft into the canonical manuscript now bearing that title. Its purpose is narrow: keep the book from turning a retrospective association into a prospective warning by grammar alone.

## The title is not the VLF lead time

Němec, Santolík and Parrot's 2009 DEMETER analysis used more than 3.5 years of measurements. For the emphasized subset—nighttime observations near earthquakes of magnitude at least 5 and depth below 40 km—the reported VLF decrease was concentrated **0–4 hours before** the main shock near 1.7 kHz. The detailed bin contained 2,068 measurement points from 64 earthquakes and corresponded to about a 2.4 dB mean decrease. The effect was displaced roughly 2° west of epicenters.

Primary source: F. Němec, O. Santolík & M. Parrot, “Decrease of intensity of ELF/VLF waves observed in the upper ionosphere close to earthquakes: A statistical study,” *Journal of Geophysical Research: Space Physics* 114 (2009), DOI 10.1029/2008JA013972. https://doi.org/10.1029/2008JA013972

An earlier 2008 analysis used more than 2.5 years of data and roughly 9,000 M≥4.8 earthquakes, reporting a 4–6 dB nighttime decrease 0–4 hours before intense shallow events. The later analysis should carry more of the quantitative burden because it uses the larger archive and revised method.

Primary source: F. Němec et al., “Spacecraft observations of electromagnetic perturbations connected with seismic activity,” *Geophysical Research Letters* 35 (2008), DOI 10.1029/2007GL032517. https://doi.org/10.1029/2007GL032517

Píša et al. later used the full ~6.5-year nighttime DEMETER archive and again reported a weak decrease within 440 km of M≥5 earthquakes 0–4 hours before main shocks, at about 2.3 standard deviations. The analysis is still organized around known earthquake times and locations.

Primary source: D. Píša et al., “Additional attenuation of natural VLF electromagnetic waves observed by the DEMETER spacecraft resulting from preseismic activity,” *Journal of Geophysical Research: Space Physics* 118 (2013), DOI 10.1002/jgra.50469. https://doi.org/10.1002/jgra.50469

**Editorial consequence:** *Five Days Before* can remain the title because the manuscript also treats Yan, Parrot and Pinçon's ion-density result, whose strongest reported statistical effect sits around that interval. The title must not be allowed to imply that DEMETER's repeatedly reported VLF result was a usable five-day warning. For that line of evidence, the repeatedly reported concentration is hours, not days.

## Reverse the conditioning

A retrospective precursor analysis can ask: given that an earthquake occurred here at time T, did preceding measurements near that place and time differ from a constructed background?

A warning system has to answer the reverse problem: given an unusual measurement now, where and when should an earthquake be expected, with what probability, and how often does the same rule alarm when no qualifying earthquake follows?

That reversal supplies the missing denominator. For each candidate precursor, reconstruct both directions when the data permit:

1. earthquake → precursor frequency;
2. precursor → subsequent-earthquake probability.

A high value for the first can coexist with a useless value for the second when target earthquakes are rare or the candidate signal is common.

## Parkfield supplies an operational control

The Parkfield experiment matters because prediction left a retrospective plot and acquired an alarm protocol. USGS records that the 1985 experiment grew from a forecast assigning a 95% chance to an approximately M6 earthquake before 1993. In October 1992, an M4.7 event triggered the experiment's highest alert: a **72-hour public warning with a stated 37% chance of an M6 event**. No such earthquake followed. The eventual M6.0 Parkfield earthquake arrived on September 28, 2004.

Primary/authoritative sources:

- E. Roeloffs & J. Langbein, “The earthquake prediction experiment at Parkfield, California,” *Reviews of Geophysics* 32 (1994), DOI 10.1029/94RG01114. https://www.usgs.gov/publications/earthquake-prediction-experiment-parkfield-california
- USGS, “The Parkfield, California, Earthquake Experiment”: https://earthquake.usgs.gov/learn/parkfield/

Parkfield also limits broad electromagnetic-precursor rhetoric. Long-term electrical monitoring captured clear **coseismic** voltage changes during the 2004 M6.0 event and its M>5 aftershocks, while Park et al. reported no evidence of a precursory electrical signal in that experiment. This does not directly refute a satellite-ionosphere VLF effect. It does prevent the manuscript from treating “electromagnetic precursor” as one interchangeable phenomenon.

Primary source: S. K. Park et al., “The 2004 Parkfield earthquake: Test of the electromagnetic precursor hypothesis,” *Journal of Geophysical Research: Solid Earth* 112 (2007), DOI 10.1029/2005JB004196. https://doi.org/10.1029/2005JB004196

## Make the alarm burden quantitative

A prospective precursor claim should eventually be represented by an explicit alarm rule. At minimum record the target magnitude/depth/geography, alarm footprint and duration, fraction of monitored space-time under alarm, target earthquakes inside alarm windows, misses, alarms without target earthquakes, baseline event rate, probability gain or another stated skill measure, and the decision cost attached to false alarms and misses.

Molchan-style evaluation is one established way to expose the tradeoff by plotting miss rate against the fraction of space-time occupied by alarm. The editorial point is not allegiance to one score. A system can “predict” many earthquakes by leaving much of the monitored world under alarm; a narrow alarm can look selective while missing most events. Both axes belong in the story.

Method source: J. Zechar & T. Jordan, “Testing alarm-based earthquake predictions,” *Geophysical Journal International* 172 (2008), 715–724. https://academic.oup.com/gji/article/172/2/715/626740

## Strongest counterargument

A weak precursor need not be a useful standalone alarm to be physically real. DEMETER sampled a moving, noisy ionosphere with limited spatial-temporal coincidence near large earthquakes. A real coupling mechanism could survive retrospective aggregation while remaining too weak, intermittent or nonunique for prediction. Operational failure therefore does not prove the underlying physical association nonexistent.

That model should be allowed to win. It pays a linguistic price: once a claim retreats from prediction to weak physical coupling, the manuscript must narrow language about warnings, “signals before earthquakes,” and decision value accordingly.

The skeptical model must remain equally capable of winning: background construction, correlated measurements, analytical flexibility, environmental or cultural confounders, and chance can generate apparent associations. The decisive test is not another earthquake-centered significance plot alone but a frozen rule run prospectively or genuinely out of sample against **all** candidate measurements.

## Proposed adversarial test

Before examining a held-out interval, freeze the instrument/channel and preprocessing, anomaly threshold, spatial footprint, lead-time window, earthquake magnitude/depth target, geomagnetic and cultural-noise exclusions, missing-data policy, scoring rule, and decision-cost assumptions. Then run the detector continuously. Every alarm counts. Every qualifying earthquake counts. If the detector is retuned after seeing the holdout, that interval becomes development data and a new holdout is required.

The cleanest transformation from anomaly science to forecast science is simple to state and difficult to satisfy: stop asking only what the ionosphere looked like before known earthquakes and ask what happened after every ionospheric alarm.

## Publication holds

- Do not describe the Němec/Píša VLF result as a five-day precursor; preserve the reported 0–4 hour concentration unless a different primary result supports another window.
- Do not use Parkfield as a universal falsification of ionospheric precursor hypotheses; its negative result concerns the electromagnetic measurements and hypothesis tested there.
- Do not call statistical significance prediction skill.
- Do not report a hit rate without the alarm-space/time denominator and miss rate when evaluating an operational rule.
- Before making claims about present CSES performance, recover current mission and peer-reviewed prospective validation rather than extrapolating from DEMETER-era studies.