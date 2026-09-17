# Alarm burden audit

This note sharpens the book's central distinction between a retrospective precursor association and a prospective warning. It is deliberately stacked on the initial `Five Days Before` manuscript branch and does not revise manuscript prose concurrently.

## The DEMETER result is narrower than “five days before”

Němec, Santolík and Parrot's 2009 JGR analysis used more than 3.5 years of DEMETER measurements. For the subset emphasized in the paper—nighttime observations near earthquakes of magnitude at least 5 and depth below 40 km—the reported VLF decrease was concentrated **0–4 hours before** the main shock near 1.7 kHz. The authors describe the effect as very small but statistically significant. In the detailed result, the relevant bin contained 2,068 measurement points from 64 earthquakes and corresponded to about a 2.4 dB mean decrease. The effect was not centered directly over epicenters but about 2° westward.

Primary source: F. Němec, O. Santolík & M. Parrot, “Decrease of intensity of ELF/VLF waves observed in the upper ionosphere close to earthquakes: A statistical study,” *Journal of Geophysical Research: Space Physics* 114 (2009), DOI 10.1029/2008JA013972. https://doi.org/10.1029/2008JA013972

The earlier 2008 GRL study used more than 2.5 years of data and roughly 9,000 M≥4.8 earthquakes, reporting a 4–6 dB nighttime decrease 0–4 hours before intense shallow events. This is useful chronology, but the later analysis should carry the quantitative burden because it uses the larger archive and revised method.

Primary source: F. Němec et al., “Spacecraft observations of electromagnetic perturbations connected with seismic activity,” *Geophysical Research Letters* 35 (2008), DOI 10.1029/2007GL032517. https://doi.org/10.1029/2007GL032517

Píša et al. later used the full ~6.5-year nighttime DEMETER archive and again reported a weak decrease within 440 km of M≥5 earthquakes 0–4 hours before main shocks, at about 2.3 standard deviations. The paper reports two statistical tests and two control datasets. This is a useful persistence result, but it still does not by itself answer the forecast question: the analysis is organized around known earthquake times and locations.

Primary source: D. Píša et al., “Additional attenuation of natural VLF electromagnetic waves observed by the DEMETER spacecraft resulting from preseismic activity,” *Journal of Geophysical Research: Space Physics* 118 (2013), DOI 10.1002/jgra.50469. https://doi.org/10.1002/jgra.50469

### Editorial consequence

The title can remain *Five Days Before*, but the book should not let the title silently become the strongest empirical result. At least for the VLF line above, the most repeatedly reported window is hours, not five days. A five-day search window is part of the analysis geometry; it is not equivalent to a five-day usable precursor.

That distinction is narratively productive. A satellite can search five days of ionospheric history and discover that the statistically unusual part is four hours wide. The hard problem then begins: could an observer who did **not** already know the earthquake's time and epicenter have recognized the same event prospectively?

## Reverse the conditioning

Most retrospective precursor plots ask something like:

> Given that an earthquake happened here at time T, did the preceding measurements near that place and time look unusual relative to a constructed background?

A warning system has to answer the reverse problem:

> Given an unusual measurement now, where and when should an earthquake be expected, with what probability, and how often will the same rule alarm when no qualifying earthquake follows?

Those are not equivalent questions. The second requires the denominator that the first can largely avoid: all the ordinary satellite passes, ionospheric disturbances and candidate anomalies that occur when no target earthquake follows.

This should become a governing test throughout the book. For every claimed precursor, reconstruct both conditional directions when the data permit:

1. earthquake → precursor frequency;
2. precursor → subsequent-earthquake probability.

A high value for the first can coexist with a useless value for the second when earthquakes are rare or the candidate signal is common.

## Parkfield supplies the operational control

The Parkfield experiment is useful not because it disproves every electromagnetic precursor hypothesis, but because it shows what happens when prediction leaves a retrospective plot and acquires an alarm protocol.

USGS records that the 1985 Parkfield experiment grew from a forecast assigning a 95% chance to an approximately M6 earthquake before 1993. The dense monitoring program included seismic, geodetic and other precursor networks. In October 1992, an M4.7 event triggered the experiment's highest alert: a **72-hour public warning with a stated 37% chance of an M6 event**. No such earthquake followed. The eventual M6.0 Parkfield earthquake arrived on September 28, 2004.

Primary/authoritative sources:

- E. Roeloffs & J. Langbein, “The earthquake prediction experiment at Parkfield, California,” *Reviews of Geophysics* 32 (1994), DOI 10.1029/94RG01114. USGS record: https://www.usgs.gov/publications/earthquake-prediction-experiment-parkfield-california
- USGS, “The Parkfield, California, Earthquake Experiment”: https://earthquake.usgs.gov/learn/parkfield/

Parkfield also provides unusually strong counterevidence for broad electromagnetic-precursor rhetoric. Long-term electrical monitoring captured clear **coseismic** voltage changes during the 2004 M6.0 event and its M>5 aftershocks, while Park et al. reported no evidence of a precursory electrical signal in that experiment. That does not directly refute a satellite-ionosphere VLF effect; it does prevent the book from treating “electromagnetic precursor” as one interchangeable phenomenon.

Primary source: S. K. Park et al., “The 2004 Parkfield earthquake: Test of the electromagnetic precursor hypothesis,” *Journal of Geophysical Research: Solid Earth* 112 (2007), DOI 10.1029/2005JB004196. https://doi.org/10.1029/2005JB004196

## The alarm burden must be quantitative

A prospective precursor claim should eventually be represented by an explicit alarm rule, not only a significance test. At minimum record:

- target earthquake definition: magnitude, depth and geography;
- alarm spatial footprint;
- alarm duration;
- fraction of monitored space-time placed under alarm;
- qualifying earthquakes occurring inside alarm windows;
- missed qualifying earthquakes;
- alarms not followed by qualifying earthquakes;
- baseline earthquake rate over the same monitored domain;
- probability gain or another stated skill measure;
- decision cost attached to false alarms and misses.

Molchan-style evaluation is one established way to make the tradeoff visible by plotting miss rate against the fraction of space-time occupied by alarm. The important editorial point is not allegiance to one score. It is that an algorithm can “predict” many earthquakes by leaving a large fraction of the world under alarm, just as a narrow alarm can look impressively selective while missing most events. Both axes belong in the story.

Method source: J. Zechar & T. Jordan, “Testing alarm-based earthquake predictions,” *Geophysical Journal International* 172 (2008), 715–724. https://academic.oup.com/gji/article/172/2/715/626740

## Strongest counterargument to the book's skeptical frame

A weak precursor need not be a good standalone alarm to be physically real. DEMETER sampled a moving, noisy ionosphere with limited spatial-temporal coincidence near large earthquakes. A real coupling mechanism could therefore survive retrospective aggregation while remaining too weak, intermittent or nonunique for useful prediction. Operational failure would not prove the underlying physical association nonexistent.

The manuscript should allow that model to win. But it must pay a price: once the claim retreats from prediction to weak physical coupling, language about warnings, “signals before earthquakes,” or decision value has to narrow accordingly. A physical effect and a forecast product are different scientific achievements.

The strongest skeptical model should also remain capable of winning: the reported associations may reflect background construction, correlated measurements, multiple analytical choices, environmental/cultural confounders, or chance. The decisive next step is therefore not another earthquake-centered significance plot alone. It is a frozen rule tested prospectively or genuinely out of sample against **all** candidate measurements.

## Proposed adversarial test

Before examining the held-out period, freeze:

- instrument/channel and preprocessing;
- anomaly threshold;
- spatial displacement/footprint;
- lead-time window;
- earthquake magnitude/depth target;
- exclusions for geomagnetic and cultural contamination;
- treatment of missing data;
- scoring rule and decision-cost assumptions.

Then run the detector continuously over a held-out interval. Every alarm counts. Every qualifying earthquake counts. Report misses and false alarms alongside any probability gain. If tuning is needed after seeing the holdout, that period becomes development data and a new holdout is required.

This is the book's cleanest transformation from anomaly science to forecast science: stop asking only what the ionosphere looked like before earthquakes and start asking what happened after every ionospheric alarm.

## Publication holds

- Do not describe the Němec/Píša VLF result as a five-day precursor; preserve the reported 0–4 hour concentration unless a different primary result supports a different window.
- Do not use Parkfield as a universal falsification of ionospheric precursor hypotheses; its strong negative result concerns the electromagnetic measurements and hypothesis tested there.
- Do not call statistical significance “prediction skill.”
- Do not report a hit rate without the alarm-space/time denominator and miss rate when evaluating an operational rule.
- Before making claims about present CSES performance, recover current mission/peer-reviewed prospective validation rather than extrapolating from DEMETER-era studies.