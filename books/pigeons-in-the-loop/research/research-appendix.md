# Research Appendix

## Quantitative reconstruction required for publication-length draft

### Bird-level dataset

For every identifiable bird/trial in Project Pigeon or ORCON, capture:

- bird identifier
- breed/source if available
- training start/date
- deprivation/feeding state
- target class
- image scale/aspect
- movement pattern and speed
- session duration
- peck count/rate
- spatial error
- target-loss event
- reacquisition time
- disturbance condition
- exclusion/retraining note
- operator/trainer
- apparatus version

### Guidance-loop reconstruction

For each apparatus version:

- optical path and field of view
- target image size versus angular displacement
- response plate dimensions
- peck-to-plate mechanics
- pneumatic/electrical pickup geometry
- filtering/averaging behavior
- servo interface
- control-surface command relation
- estimated loop latency
- missile/airframe dynamic assumptions

### Reliability model

Do not use a single `accuracy` number. Separate:

1. target acquisition;
2. continuous track maintenance;
3. correct directional error output;
4. transducer operation;
5. servo response;
6. airframe response;
7. terminal miss distance.

Estimate common-mode failure separately from independent bird error.

## Comparator reconstruction

### Bat

Build dated milestones rather than comparing final Bat against early Pigeon:

- seeker concept maturity by quarter/year
- stabilization maturity
- prototype flight tests
- failure modes
- production readiness
- operational deployment
- cost/weight/power where available

### Radio-command / television guidance

Add Fritz X, Hs 293 and relevant U.S. command/television weapons only where they illuminate the same mission constraints. Avoid turning the chapter into a catalog.

## Archival targets

- NDRC/OSRD guided-missile committee minutes and summary technical reports.
- General Mills wartime research contract, engineering notebooks and correspondence.
- Skinner archival project correspondence, especially letters with sponsors and engineers.
- NRL ORCON report and underlying project files.
- Pelican and Bat development chronology through NBS/Navy records.

## Chapter expansion map

Each chapter remains below Desk's 3,000-word floor in this architecture-first pass. Expansion should come from the following evidence rather than repeated thesis language:

- Ch 1: object-level forensic description, accession history, apparatus comparison.
- Ch 2: Skinner's prewar laboratory trajectory and dated origin correspondence.
- Ch 3: 1942–45 guidance technology map and mission requirements.
- Ch 4: optics/transduction reconstruction with diagrams expressed in prose and equations where source-supported.
- Ch 5: actual three-bird combining logic and correlated-failure treatment.
- Ch 6: training notebooks and quantitative shaping schedules.
- Ch 7: Pelican/General Mills integration history.
- Ch 8: contract and NDRC decision record.
- Ch 9: demonstration films as both evidence and persuasion; exact protocols.
- Ch 10: dated Bat comparison rather than final-state hindsight.
- Ch 11: full ORCON reconstruction from NRL records.
- Ch 12: reliability distributions and mission-chain math.
- Ch 13: environmental operating envelope.
- Ch 14: animal logistics, qualification, welfare and military pigeon infrastructure.
- Ch 15: institutional filtering and documented reactions, avoiding generic innovation rhetoric.
- Ch 16: industrial/ecosystem comparison with electronics.
- Ch 17: proposition-by-proposition audit of what was actually demonstrated.
- Ch 18: synthesis only after the quantitative record is built.

## Mechanical gate before shared Desk registration

Run:

`python3 scripts/check-book-length.py pigeons-in-the-loop`

Then run:

`python3 scripts/check-desk.py`

Do not synchronize catalog, Reader, feedback dropdown, `llms.txt`, sitemap or index until the one-shot length gate and prose pass are clean.