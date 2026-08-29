# Research Brief

## Thesis under test

*The Reliability Tax* asks why organizations repeatedly cut redundancy during calm periods and rebuild it after failure.

The strong claim — that efficiency is inherently dangerous and redundancy inherently wise — is false. Lean systems, standardization, specialization, cloud concentration, financial leverage and high asset utilization can produce real welfare gains. Resilience measures can become expensive rituals, create moral hazard, hide incompetence or protect obsolete incumbents.

The narrower claim worth testing is this:

> Organizations systematically underprice options whose cost is visible in normal operation and whose benefit appears primarily as avoided or contained failure. This bias becomes most dangerous when dependencies are correlated, recovery takes longer than expected, or local efficiency exports systemic risk to others.

The book treats reliability as an economic good rather than a moral virtue. The central empirical questions are where markets successfully price it, where they do not, and which design choices make optionality cheaper.

## Falsification and counter-evidence

Evidence that should change the argument includes:

- Industries in which very high utilization does not meaningfully worsen recovery or waiting under realistic variability.
- Cases where concentrated suppliers or infrastructure providers demonstrably invest enough in internal redundancy to outperform more distributed alternatives on both cost and resilience.
- Evidence that regulation intended to increase resilience creates larger net risks through complexity, reduced competition, moral hazard or risk migration.
- Supply chains where inventory reduction improves resilience by surfacing quality problems and shortening feedback loops.
- Systems where forecasting quality becomes strong enough that physical buffers can be safely reduced without increasing tail losses.
- Cases where diverse vendors or technologies create operational complexity that produces more failures than the diversity prevents.

Each chapter should preserve these counterexamples rather than treating every disruption as proof that more slack was needed.

## Evidence lanes

### Reliability engineering

Use engineering literature on fault tolerance, common-cause failure, defense in depth, graceful degradation, redundancy and maintainability. Distinguish component reliability from system reliability and apparent duplication from independent failure domains.

### Queueing and operations

Use operations research on utilization, variability, queueing delay, capacity buffers and lean production. Avoid caricaturing the Toyota Production System as indiscriminate inventory minimization.

### Supply chains

Use empirical work and case studies on the 2011 Japan earthquake and tsunami, Thailand floods, semiconductor shortages, pandemic disruptions, supplier concentration, multi-tier mapping and inventory policy.

### Finance

Use primary regulatory sources and academic work on capital, liquidity, bank runs, deposit insurance, stress testing, systemic risk and digital run dynamics. Keep private solvency, liquidity and system externalities distinct.

### Electricity

Use grid-operator, regulator and reliability-organization material on reserve margins, contingency planning, capacity accreditation, black start, transmission, correlated weather and resource adequacy.

### Healthcare

Use research on hospital occupancy, staffing, surge capacity, drug shortages, stockpiles, alarm fatigue and emergency preparedness. Avoid universal claims across different health systems.

### Software and cloud

Use provider architecture documentation, incident reports and reliability engineering literature on multi-region systems, backups, recovery objectives, shared dependencies, chaos testing and correlated software failure.

### Insurance and disasters

Use actuarial and disaster-risk research on correlated risk, reinsurance, moral hazard, flood protection and public insurance. Distinguish financial compensation from preserved physical capability.

### Ecology and competition

Use resilience ecology, biodiversity and market-concentration research to test whether functional diversity provides useful analogies or measurable system benefits without overextending biological metaphors.

### AI and autonomous agents

Use current primary documentation and peer-reviewed or otherwise credible work on automation bias, human oversight, agent permissions, circuit breakers, model diversity, deployment safety and correlated model behavior. Treat forward-looking claims as scenarios, not facts.

## Source discipline

- Prefer primary sources: government reports, regulators, standards bodies, engineering investigations, original academic papers, incident postmortems and company filings.
- Separate anecdotes from general evidence.
- Record exact dates for disaster and policy claims.
- Distinguish correlation from causal claims about lean systems, concentration or regulation.
- For every major claim, maintain a “What would make this false?” note.
- Do not use invented dialogue, invented scenes or unverifiable quotations.
- Treat current AI examples as time-sensitive and verify them again before a Shelf release.

## What would make the whole book false?

The book's strongest conclusion would weaken substantially if empirical evidence showed that modern optimization reliably internalizes tail risk and recovery costs, that resilience externalities are small, and that concentrated/high-utilization systems systematically recover at least as well as more buffered alternatives once full costs are measured. The manuscript should remain open to that possibility.