# Publication gate — Positive Control

This is an end-to-end 18-chapter manuscript, but it does **not** yet satisfy Desk's automated full-book gate. The current run prioritized a coherent argument, distinct chapter jobs and a checkable source spine rather than padding chapters to 3,000 words.

The required local command is:

```bash
python3 scripts/check-book-length.py positive-control-viking-mars --json
```

The automation container used for this drafting pass could not resolve `github.com`, so a fresh checkout and mechanical word-count run could not be completed there. Do not substitute an estimated word count for that check. The existing chapter prose is visibly below the 65,000-word minimum and multiple chapters remain below 3,000 words.

## Blocking expansion work

### 1. Reconstruct every Viking biology run

Build a cycle-by-cycle ledger for Viking 1 and Viking 2 containing:

- sample acquisition context and scoop location;
- exposed / under-rock provenance where known;
- sample mass;
- storage interval and temperature history;
- thermal-control temperature, duration, ramp and atmosphere;
- exact nutrient-addition time and volume;
- detector count time series;
- second-injection timing and response;
- mission clock / sol references;
- corresponding Gas Exchange and Pyrolytic Release operations.

The prose currently relies on peer-reviewed summaries. Publication-grade chapters should let the reader see the experiment at run resolution.

### 2. Put numbers on the competing mechanisms

Calculate, with sourced flight parameters:

- moles of labeled substrate delivered;
- amount and species of labeled gas evolved;
- minimum oxidizing capacity required by a purely abiotic account;
- plausible oxychlorine inventory implied by Mars measurements and analog work;
- radiation-production yields for candidate reactive daughter species;
- decay / thermal-inactivation timescales at 18°C, ~46–50°C and 160°C;
- biomass and metabolic turnover required by a biological account;
- corresponding biomass-carbon burden relative to Viking GCMS sensitivity.

The thesis becomes materially stronger if both biology and chemistry have to pay the same stoichiometric bill.

### 3. Rebuild the Viking GCMS record from primary instrument papers

Page-index the original GCMS papers and engineering record rather than relying on later summaries. Record:

- oven temperatures and ramps;
- sample masses;
- detection limits by compound class;
- blank and plumbing contamination history;
- original chloromethane / dichloromethane assignments;
- exact reasons the team treated those compounds as contaminants;
- later chlorobenzene reanalysis and its dependence on retrospective assumptions.

Then treat Navarro-González 2010, its 2011 correction, and Biemann's 2011 comment as one inseparable argument set.

### 4. Test site transfer instead of assuming it

Build a Mars oxychlorine ledger across Viking 1, Viking 2, Phoenix, Gale and other relevant missions. Separate:

- direct perchlorate / chlorate measurements;
- inferred chlorine phases;
- concentrations;
- mineral association;
- depth and shielding;
- radiation environment;
- temperature history.

The manuscript must never borrow Phoenix's measured concentration as though it were measured at Chryse or Utopia.

### 5. Expand the heat chapter with real kinetics

Chapter 9 should become one of the technical centers of the book. Recover the exact Viking thermal-control engineering data and compare them with measured thermal stability for leading abiotic candidates. The final chapter should show time-temperature curves and identify where biological and chemical models genuinely diverge.

### 6. Reconstruct the consensus historically

Recover mission-team correspondence, conference proceedings, oral histories and NASA program records showing how investigators actually weighted LR, GEx, PR and GCMS evidence from 1976 through the early post-Viking years. This chapter must not infer suppression or motives from later disagreement.

### 7. Build an adversarial-replication literature

Locate and compare post-Phoenix attempts to reproduce Viking biology responses with:

- perchlorate / chlorate soils;
- irradiated oxychlorine systems;
- iron and superoxide chemistry;
- Mars analog soils;
- extremophile microbial controls;
- variable water activity and nutrient concentration.

The key falsification search is whether any one abiotic system has reproduced the **full** LR flight behavior under independently justified Viking-site conditions. If so, the manuscript's unresolved-cause language must narrow accordingly.

### 8. Deepen each chapter rather than repeat the thesis

Expansion should come from flight runs, equations, instrument diagrams described in prose, conflicting interpretations, quantitative constraints, and source-specific historical scenes. Do not add generic paragraphs saying the result was ambiguous.

## Editorial gate after length

Once every chapter is at least 3,000 words and chapter-only prose exceeds 65,000 words:

1. run `scripts/check-book-length.py positive-control-viking-mars`;
2. run `scripts/check-book-cover-metadata.py positive-control-viking-mars` and the global metadata audit;
3. run `scripts/check-desk.py`;
4. read the manuscript front to back for repeated control/ambiguity language;
5. verify every numeric or instrument-specific claim against the page-indexed source ledger;
6. revise the middle chapters so Phoenix/perchlorate material does not repeat the same retrospective caveat;
7. only then consider moving the PR out of draft.

Chapter count is not completion. Passing the mechanical gate is not publication readiness.