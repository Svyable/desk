# VIIRS observing-window audit — WHITE WATER

## Editorial target

Chapter 1's `instrument lag` idea is promising, but `the instrument exists` is still too binary. A low-light sensor can exist and still have a narrow opportunity to see a particular phenomenon. The manuscript should distinguish **instrument existence** from **usable observing opportunity** before generalizing milky seas to other anomaly domains.

## What the 2021 search actually establishes

Miller et al. (2021) used the VIIRS Day/Night Band to identify 12 candidate milky-sea events from 2012–2021, including the >100,000 km² Java event. The paper is the primary anchor for the modern category confirmation and should remain so.

Primary source:
- Miller et al. (2021), *Scientific Reports*, DOI: https://doi.org/10.1038/s41598-021-94823-z

The stronger inference is not `VIIRS existed, therefore milky seas were continuously observable`. VIIRS is a polar-orbiting instrument with finite spatial/temporal sampling, and low-light visible measurements have environmental and instrumental constraints. The absence of a detection outside a usable viewing opportunity therefore cannot be treated as equivalent to an observed negative.

## The sensor has its own weather

NOAA's current VIIRS instrument documentation lists the Day/Night Band at roughly 0.8 km nadir field of view and describes VIIRS as a multi-band polar-orbiting imager rather than a continuous stare. That matters for rare events whose boundaries and duration may evolve between overpasses.

Authoritative instrument source:
- NOAA/NESDIS STAR, VIIRS instrument specifications: https://www.star.nesdis.noaa.gov/jpss/VIIRS.php

The DNB is also sensitive enough to measure several kinds of faint nighttime radiance, which creates a classification problem rather than a magic anomaly detector. NOAA-supported work documents reflected moonlight, airglow, artificial light, fires and other nighttime signals in DNB imagery. Straylight can raise recorded radiance as a gray haze; dedicated correction methods are required.

Authoritative / primary technical sources:
- Qiu et al. (2017), straylight assessment, DOI: https://doi.org/10.1080/01431161.2017.1338786
- Cao et al. (2019), lunar-radiance calibration/inter-consistency, DOI: https://doi.org/10.3390/rs11080934
- NOAA/NESDIS VIIRS documentation: https://www.star.nesdis.noaa.gov/jpss/VIIRS.php

The manuscript can use this without turning Chapter 1 into an instrument manual. One sentence can do the conceptual work: **coverage is a product of sensor × orbit × darkness × cloud × competing radiance × event duration, not a yes/no property of the satellite.**

## A better denominator for `instrument lag`

Before using nondetection to weaken a rare-phenomenon claim, ask:

- Was a capable sensor operating?
- Did its orbit/pointing cover the relevant place while the event existed?
- Was the signal above that sensor's practical detection floor under those conditions?
- Did cloud, lunar illumination, straylight, artificial light or another radiance source compromise classification?
- Was the search actually performed, with a method capable of distinguishing the target morphology from false positives?

Call the intersection of those conditions the **effective observing window** if a compact term is useful. Do not promote it into a branded framework unless it recurs and earns compression.

This sharpens the existing defeat condition for `instrument lag`: mature instrumentation only counts strongly against a phenomenon when the relevant event class repeatedly occurs *inside effective observing windows* and produces clean nondetections.

## Strongest counterargument

Do not overcorrect into `the sensor might have missed it`, which can become an unfalsifiable escape hatch. The 2021 result itself shows that VIIRS DNB can detect geographically coherent, persistent low-light ocean features. Long-lived, very large milky seas offer repeated orbital opportunities; for events of comparable radiance, scale and duration, a mature archive can therefore become a meaningful negative control.

The book should demand the denominator rather than assume it cuts in the anomaly's favor. If a reconstruction shows repeated cloud-free, appropriately dark, low-contamination overpasses with adequate sensitivity and no feature where a claimed event should have been, that nondetection deserves real evidentiary weight.

## Manuscript consequence

The current line `After the instrument exists and covers the event, the evidentiary situation changes` is directionally right but underspecified. Later revision should make `covers` do measurable work. A satellite passing over coordinates is not automatically an observation; nor is every missing feature a non-observation.

This gives Chapters 7, 10 and 12 a concrete scientific job:

- Chapter 7 can explain what DNB made newly observable.
- Chapter 10 can establish what DNB still cannot distinguish or measure.
- Chapter 12 can explain why rarity plus narrow observing windows slows science without romanticizing witness testimony.

## Publication holds

- Do not describe VIIRS as continuously monitoring a milky sea.
- Do not treat every orbit over an event's coordinates as an equally sensitive observation.
- Do not use cloud/moon/straylight constraints as generic excuses; quantify them for a particular claimed event before using them to discount a nondetection.
- Do not infer biology from low-light radiance alone.
- Do not generalize the milky-sea observing denominator to UAP, psi, cryptozoology or other anomaly classes without specifying the signal, sensor, coverage and false-negative process for that domain.
