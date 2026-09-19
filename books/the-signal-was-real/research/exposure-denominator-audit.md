# Exposure denominator audit

Bounded research pass for **THE SIGNAL WAS REAL**. This note audits the opening chapter's most important quantitative hinge: what the 1967 correction to the Moscow Signal's power density actually establishes, and what it does not.

## The memorable number is a ceiling, not the exposure history

The National Security Archive's indexed copy of Joseph Johnston's 25 September 1967 CIA memorandum records a materially more precise distinction than the opening currently makes. Johnston wrote that revised TUMS measurements gave “reasonable certainty” that the power level was **not over 50 microwatts/cm²**, but put the **average high level closer to 2 microwatts/cm²**. He also distinguished the first monkey experiment, conducted under the earlier overestimate, from subsequent experiments at the adjusted lower level, which produced no behavioral effects.

Source and document trace: National Security Archive, *The Moscow Signals Declassified: Microwave Mysteries: Projects PANDORA and BIZARRE*, Document 7, CIA/Joseph Johnston, “Aid Memoir [sic],” 25 September 1967:
https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave

The companion 27 September 1967 ARPA progress report says new on-site measurements had been completed and that a primate experiment using the corrected level showed no overt performance degradation. The Archive identifies the underlying source as Richard S. Cesaro, “Project BIZARRE,” Top Secret, Document 8.

Same collection, Document 8:
https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave

### Editorial consequence

Do **not** let `0.05 mW/cm²` become “the Moscow exposure.” It is the 1967 reported upper bound in this source chain: 0.05 mW/cm² = 50 µW/cm². Johnston's same memorandum says the average high level was closer to 2 µW/cm². Later Moscow exposure regimes also changed. Every manuscript number therefore needs a date, location/configuration, duty cycle and status—ceiling, average, measured value, estimate or experimental setting.

This distinction improves the opening's central point. The scientific correction was not merely “one number became a smaller number.” A single dramatic ceiling can itself erase the exposure distribution if repeated without its denominator.

## The first monkey experiment was not a simulation of the corrected embassy field

The Archive's summary says the early positive-looking primate experiment used CIA readings of roughly **0.5–1 mW/cm²**, while the later on-site estimate was no greater than **0.05 mW/cm²**. Its indexed 1966 PANDORA memorandum describes 28 noncontinuous days of exposure at **5 mW/cm²** for the initial primate work. These are different quantities and should not be collapsed into one “Moscow-level” experiment.

Primary-document trace: ARPA, “Project PANDORA — Initial Test Results,” 20 December 1966; the Archive's collection reconstructs the subsequent correction and outside review:
https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave

Before Chapter 3 states an exposure multiple, recover the underlying protocol and resolve at least: carrier frequency/band; modulation; incident versus absorbed field; animal position; 5 mW/cm² test setting; duration; task scoring; sham/control schedule; and how the 0.5–1 mW/cm² intelligence estimate informed that 5 mW/cm² laboratory choice.

Publication hold: **do not write that the monkey was simply exposed at the CIA's mistaken 0.5–1 mW/cm² estimate.** The located source trail indicates an initial laboratory setting of 5 mW/cm². The relation between the intelligence estimate and the chosen experimental dose must be reconstructed rather than inferred.

## Later embassy measurements do not retroactively replace the 1967 regime

The exposure history was not stationary. A 31 January 1976 Embassy Moscow cable records joint U.S.-Soviet measurements and states that radiation inside the chancery was several orders of magnitude above typical U.S.-city background and above background in U.S. Moscow residences away from the chancery. The cable also records the contemporaneous U.S. medical position that prolonged exposure at the levels then measured constituted a potential health hazard.

Primary record: Embassy Moscow telegram 1437, “Moscow Signal—Approach to Gromyko,” 31 January 1976, Secret, National Security Archive:
https://nsarchive.gwu.edu/document/28822-document-14-embassy-moscow-telegram-1437-state-department-moscow-signal-approach

By July 1976, however, a State Department fact sheet for employees said medical experts found no present cause for health-hazard concern and that no causal relationship had been established between the transmissions and health problems among personnel. That is a documented change in official health framing, not proof that the physical exposure vanished or that either assessment was definitively correct.

Primary record: State Department telegram 166451, “[R]elease of Moscow Signal Fact Sheet,” 3 July 1976, National Security Archive:
https://nsarchive.gwu.edu/document/28835-document-27-state-department-telegram-166451-embassy-moscow-release-moscow-signal

The eventual exposure table should therefore be time-indexed. At minimum separate the pre-1967 TUMS estimate, corrected 1967 TUMS measurements, the additional/stronger mid-1970s signals, shielding/countermeasure changes, and whatever exposure proxy the 1978 epidemiology actually used.

## Strongest counterargument

A low average or a corrected negative primate test does **not** settle every biological question. Peak fields, modulation, spatial heterogeneity, chronic duration and a later changed signal regime could matter, and animal task performance is not a universal health endpoint. Conversely, the existence of those unclosed variables does not rescue the first positive-looking monkey result: it was generated under a laboratory exposure materially above the subsequently measured embassy regime and later PANDORA reviews found the behavioral evidence scientifically inadequate.

The fair inference is narrower in both directions. The 1967 correction strongly weakens any attempt to treat the first primate performance change as a direct demonstration of an embassy-level behavioral effect. It does not establish that every exposure configuration, endpoint or later Moscow signal was harmless.

## Counterevidence that must stay in the book

The Archive's indexed 1969 RAND review concluded that PANDORA's data did not provide evidence of behavioral change from the special signal within reasonable scientific criteria, while allowing that observed changes could arise from other causes or measurement error. A 1971 review of a later primate/rabbit contract found no scientifically credible material and documented serious experimental and animal-care defects. These are not generic skeptical reactions; they are contemporaneous reviews inside the program's own evidentiary chain.

Source trace: National Security Archive collection, Documents 12 and 13:
https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave

The strongest version of the narrative is therefore not “the government found an effect and then corrected it away,” nor “the government proved nothing happened.” It is that a real foreign signal triggered a reasonable research question; an early experiment appeared alarming under a badly mismatched exposure setting; improved field measurement changed the experiment's relevance; subsequent work failed to produce robust behavioral evidence; and later changes in the embassy signal kept the exposure question from collapsing into one timeless number.

## Manuscript migration targets

When this note is migrated into prose, prefer the Johnston sequence over the current simplified `0.5–1 → 0.05 mW/cm²` sentence: **≤50 µW/cm² ceiling, ~2 µW/cm² average high level, then a separate experimental dose/protocol.** That gives the reader an actual metrology story instead of a cleaner but less informative before/after number.

Keep the units explicit. `0.05 mW/cm²` and `50 µW/cm²` are the same power density; changing prefixes must not create an apparent discrepancy. Do not compare either number with a safety standard until the relevant standard's averaging interval, frequency dependence, occupational/public scope and date are recovered from primary technical material.

No manuscript prose should migrate from this note until the parent draft's current wording is rechecked, because this PR is intentionally stacked on the active book branch rather than editing it concurrently.