# Publication gate

This branch contains the full 18-chapter argument, not an outline. It is **not yet a Desk release candidate** and must not be represented as satisfying the one-shot 3,000-words-per-chapter / 65,000 chapter-word standard until a mechanical check passes.

## Quantitative gate

Run in a fresh checkout:

```bash
python3 scripts/check-book-length.py below-hearing-infrasound --json
```

The current connector-only environment cannot clone `github.com` by DNS, so the local validator could not be run during this pass. GitHub branch comparison confirms all 18 numbered chapter files are present, but line counts are not being misreported as word counts.

## Exact next research/expansion work

1. **Treaty/verification architecture:** page-index CTBT Protocol Part I and Annex 1; distinguish treaty-required, certified, operating, and planned facilities; reconstruct IDC products relevant to infrasound without implying public access to restricted operational products.
2. **Pre-CTBT history:** recover primary U.S., U.K., French, Soviet/Russian and academic records on long-range acoustic monitoring of atmospheric nuclear tests. Avoid a triumphalist lineage unless the documentary chain is explicit.
3. **Array physics:** add worked beamforming/PMCC examples with array aperture, time delays, back azimuth, apparent velocity, filter bands and wind-noise-reduction geometry. Matoza et al. 2013 and 2017 provide a strong public technical spine.
4. **Atmospheric propagation:** build representative effective-sound-speed profiles for tropospheric, stratospheric and thermospheric returns; quantify travel times and seasonal wind reversals; include a sudden-stratospheric-warming case if the primary literature supports one cleanly.
5. **Microbaroms:** reconstruct source theory from interacting ocean waves and use De Carlo et al. 2021’s seven-year IMS comparison to quantify global model performance instead of treating microbaroms generically as noise.
6. **DPRK:** build a test-by-test table for 2006, 2009, 2013, January/September 2016 and 2017 separating seismic, infrasound, hydroacoustic and radionuclide observations. Preserve CTBTO’s crucial boundary that the 2017 mechanical event was consistent with a man-made explosion while nuclear classification requires nuclear-specific evidence; note that no radioactivity from the 2017 event was detected by the IMS.
7. **Chelyabinsk:** reproduce the station-by-station Pilger et al. detection/nondetection analysis, including trajectory-relative directivity and diurnal noise effects; compare infrasound energy inversion with optical and seismic estimates.
8. **Volcanoes:** reconstruct Cleveland’s twenty explosions and the 2005–2010 Matoza global search denominator. Add Popocatépetl/Stromboli source-directionality work where it changes interpretation, not as a case catalog.
9. **Hunga:** separate Lamb wave, gravity wave, acoustic-gravity and infrasound observations; page-index Wright et al. 2022, Podglajen et al. 2022 and the CTBTO global analysis; quantify repeated circumnavigations without blurring different wave bands.
10. **Industrial explosions / rockets:** add only events with direct public technical records and independent source constraints. Do not infer classified-source performance from public analogs.
11. **Data governance:** document the vDEC history and access contract, including delayed scientific access where applicable, and distinguish scientific availability from real-time treaty data distribution to States Signatories.
12. **Adversarial anomaly appendix:** design a blinded classification exercise mixing nuclear-test-like, chemical, volcanic, bolide, rocket and microbarom cases to make the book’s source-discrimination thesis falsifiable.
13. **Whole-book revision:** deepen chapters with measurements, records and disagreements; then run the human-prose anti-slop pass and paragraph pass. Cut repeated formulations about “noise becoming signal” wherever the chapter has not advanced the mechanism.

## Defeat condition for the book-level synthesis

If primary records and technical histories show that natural/industrial source studies are mostly a scientific sidecar with negligible feedback into verification models, algorithms or analyst competence, narrow the central claim from *coupled observatory* to *scientific spillover from durable treaty infrastructure*. The book should not preserve a stronger feedback thesis merely because it is elegant.
