# Chapter 17 research — Verification Becomes the Bottleneck

## Research spine

- U.S. Food and Drug Administration, “The Drug Development Process” and linked discovery/preclinical pages. Authoritative regulatory overview. Used for the sequential architecture from discovery through preclinical work, clinical research, FDA review, and post-market monitoring, and for the bounded claim that early-stage candidate pools narrow as evidence requirements become more demanding. Re-verified on 2026-08-30.
- Nathan J. Szymanski et al., “An autonomous laboratory for the accelerated synthesis of inorganic materials,” *Nature* 624 (2023), pp. 86–91, DOI 10.1038/s41586-023-06734-w. Primary research. Used for the gap between computational screening and experimental realization and for the A-Lab example. The paper reports 353 experiments in 17 days of closed-loop operation and successful realization of 36 of 57 target inorganic crystalline solids. Verified against the Nature paper on 2026-08-30.
- National Institute of Standards and Technology, Assessing Risks and Impacts of AI (ARIA) materials and ARIA 0.1 pilot report, NIST AI 700-2 (2025), DOI 10.6028/NIST.AI.700-2. Authoritative evaluation framework and report. Used to support the distinction among model testing, red-teaming, and field testing, and the broader point that evaluation of deployed systems requires context beyond benchmark performance. Re-verified against NIST on 2026-08-30.
- NIST AI Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1 (2024; NIST page updated 2026), DOI 10.6028/NIST.AI.600-1. Authoritative guidance. Used as background for lifecycle-based measurement and evaluation of generative AI risks rather than as evidence for a specific performance statistic. Re-verified against NIST on 2026-08-30.

## Claims kept deliberately narrow

The drug-development discussion is structural rather than statistical. The chapter does not use a universal “one in N compounds succeeds” figure because attrition varies by therapeutic area, modality, development stage, and cohort definition.

The A-Lab example is described as automation of portions of a physical propose-test-update loop, not as proof that experimental verification has become free or fully autonomous. The chapter emphasizes that physical synthesis still consumes time, apparatus, reagents, energy, characterization capacity, and human-defined objectives.

ARIA is used to illustrate layered evaluation. The chapter does not imply that NIST’s program proves all AI systems require identical test regimes or that model testing, red-teaming, and field testing exhaust the possible evaluation layers.

## Falsification / counterevidence note

The strongest counterargument is that verification can itself be accelerated by automation. Static analysis, formal methods, simulation, automated test generation, learned evaluators, robotics, and high-throughput experimentation can all move the bottleneck. The chapter incorporates that directly and frames “verification becomes the bottleneck” as a moving constraint rather than a permanent human-only task.

A second counterpoint is that stronger verification standards can suppress useful experimentation or create barriers to entry. The chapter therefore argues for consequence-sensitive verification: cheap, reversible experiments should face less friction than high-consequence or irreversible deployments. This preserves the tradeoff rather than treating more verification as automatically better.
