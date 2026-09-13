# Publication Gate

This run completes the 18-chapter argument and associated evidence scaffolding, but it is **not a release candidate** and does **not claim the Desk automated full-book length gate**.

The repository's `docs/book-brief-standard.md` requires, for an automated one-shot full-book drop:

- at least 18 chapters;
- at least 3,000 words per chapter;
- at least 65,000 chapter-only words;
- a research trail proportional to that scope;
- matching rights metadata;
- objective length validation with `python3 scripts/check-book-length.py <book-slug>`.

The GitHub connector environment used for this run cannot execute the repository's local Python validators, and the current chapters are visibly below 3,000 words. No line-count or commit-addition proxy is used to pretend otherwise.

## Frozen substantive expansion pass

Before this manuscript can satisfy the one-shot scope or be considered for release, expand by evidence rather than repetition:

1. **Reconstruct the 1972–77 CIA/SRI origin at contract level.** Page-index the originating CIA records, sponsor decisions, SCANATE terminology, target protocols, subject selection and the handoff away from direct CIA sponsorship.
2. **Rebuild the 1974 *Nature* experiment trial by trial.** Capture target pools, randomization, judging rules, raw transcripts where recoverable, statistical analysis, and exactly which criticisms by Marks/Kammann applied to which experiment generation.
3. **Create a protocol-generation ledger.** Separate early SRI, Army/GRILL FLAME, CENTER LANE, SRI 1980s, SAIC 1990s and operational tasking. Record what methodological criticism each generation was designed to fix.
4. **Quantify the judge problem.** Reproduce rank-order scoring and show with worked examples how free-response descriptions can create matches. Distinguish closed-set rank tasks from open-world search mathematically.
5. **Build a positive/null session denominator.** Select a bounded archival series and record every session, target, feedback status and official evaluation rather than sampling famous successes and failures.
6. **Reconstruct Tehran.** Page-index the hostage-related tasking, complete transcripts, what was known at the time, target feedback, and any documented action. Do not infer operational success from later resemblance.
7. **Audit celebrated Soviet technical-target cases.** For every submarine/facility/crane story used in prose, reconstruct contemporaneous tasking → blind conditions → full response → conventional intelligence chronology → feedback → action. Drop cases whose chains cannot be established.
8. **Reconstruct CENTER LANE / SAP governance.** Identify exact transfer authorities, access restrictions, sponsors and evaluation mechanisms. Separate legitimate security compartmentation from speculative claims about hidden scientific success.
9. **Trace the Soviet/Russian/Chinese threat spine to primary material.** Identify the foreign programs and papers actually cited by U.S. analysts; distinguish real state interest, disputed efficacy, translation problems and possible deception incentives.
10. **Rebuild the training claim.** Compare the 1984 DIA statement that training can improve remote viewing with the 1989 SRI statement that quantitative evidence did not support the training hypothesis. Recover cohort sizes, selection/attrition and longitudinal results.
11. **Normalize the SRI/SAIC statistics.** Reproduce effect-size definitions, independence assumptions, target dependencies, experimenter effects, multiple analyses, stopping rules and any publication-bias corrections. Put later positive and negative syntheses on common terms where possible.
12. **Page-index Utts and Hyman.** Build a two-column agreement/disagreement map directly from the 1995 AIR report rather than relying on later summaries.
13. **Reproduce the operational AIR tables.** Verify exact numbers of tasks, reports, accuracy ratings, value ratings, requesting organizations and dates. Explain why retrospective accuracy can coexist with low prospective value.
14. **Develop calibration quantitatively.** Construct hypothetical and, where data permit, historical reliability curves: confidence versus target correspondence, specificity versus hit rate, and lead-generation cost versus verification burden.
15. **Separate search from description.** Reconstruct map-dowsing/search experiments and open-world target location attempts. Treat successful description of a known target as a different capability from locating an unknown one.
16. **Deepen independent replication.** Map research groups outside the SRI/SAIC lineage, including unsuccessful replication attempts, and distinguish remote viewing from adjacent ganzfeld/anomalous-information paradigms.
17. **Build the modern preregistered test as an executable protocol.** Specify sample sizes, power assumptions, cryptographic target commitment, target-pool generation, simultaneous independent labs, blind transcript handling, scoring, exclusions, stopping rules, operational simulation, and defeat thresholds.
18. **Whole-book prose pass.** After evidence expansion, remove repeated signal/capability formulations, vary chapter architectures, deepen a smaller number of cases, and verify that the middle does not read as eighteen independent versions of the same epistemic argument.

## Objective checks still required

When the expansion is complete in a local Desk checkout:

```bash
python3 scripts/check-book-length.py the-intelligence-that-couldnt-be-tasked
python3 scripts/check-book-cover-metadata.py the-intelligence-that-couldnt-be-tasked
python3 scripts/check-desk.py
```

The first pass must meet the repository's actual 65,000-word chapter-only standard, not the lower conversational shorthand of 54,000 words.

## Shared surfaces

Root catalog, Reader, release-state and Shelf surfaces are intentionally untouched in this working PR. Add them only when the manuscript has passed the objective scope, metadata and whole-book editorial gates in accordance with the current Author-agent working pattern and repository instructions.