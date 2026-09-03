# No One Read It — Research and Falsification Spine

## Research question

Under what conditions does machine-assisted production increase the quantity or complexity of consequential work faster than institutions can independently inspect, understand, and own it?

The phrasing matters. The book does not begin from the claim that generative AI necessarily creates more work or worse work. It asks about a ratio, a boundary, and an institutional response.

## Claims the book must establish

### 1. Production and comprehension were partly coupled

Traditional drafting required a person to encounter many of the choices embodied in an artifact. This coupling was never complete. Ghostwriting, boilerplate, junior labor, inherited code, copied policy, and unread contracts all predate generative AI. The historical claim must therefore remain comparative: production often created some familiarity, and machine generation can remove part of that exposure.

Evidence sought:

- ethnographic and workflow research on drafting, programming, analysis, and professional review
- version histories that show how understanding forms during revision
- studies comparing active generation with passive review or reliance on supplied answers

Potential falsifier:

- evidence that comprehension in the relevant domain was already unrelated to production effort, or that machine assistance increases active engagement with intermediate choices

### 2. Production cost can fall faster than independent review cost

The important unit is not tokens or pages. It is consequential output per unit of independent checking. A system may generate and review quickly while still relying on the same assumptions in both passes.

Evidence sought:

- time-on-task and productivity experiments
- output and review volumes before and after tool adoption
- code-review size and defect-detection studies
- audit, inspection, and quality-control economics
- reviewer staffing, backlog, and delay data

Potential falsifier:

- deployments in which independent validation becomes cheaper at least as quickly as production and total unresolved work does not increase

### 3. Approval is being asked to certify more than it can know

Signatures, merges, attestations, and managerial approvals allocate consequence. The book must show cases in which formal ownership outstrips realistic opportunity for comprehension, without assuming every approver promises complete knowledge.

Evidence sought:

- professional rules defining certification and reasonable reliance
- approval workflows and time budgets
- litigation, enforcement, and incident records reconstructing who reviewed what
- delegation structures that make partial knowledge legitimate

Potential falsifier:

- institutions that explicitly narrow what approval represents and can locate tested understanding elsewhere

### 4. Unreadness has observable consequences

The argument cannot rest on the aesthetic complaint that there is too much text. It needs defects, duplicated obligations, delayed correction, citation cascades, brittle dependencies, rework, disputes, or decisions that cannot be reconstructed.

Evidence sought:

- incidents with a traceable artifact chain
- empirical links between change size or workload and defect detection
- retraction and citation-propagation records
- contract and compliance disputes
- alert fatigue, document flooding, and adversarial-volume cases

Potential falsifier:

- higher production with stable or improved error, resolution, and reconstruction outcomes after accounting for selection and task mix

## Strong counterthesis

Generative systems may reduce the comprehension gap. They can summarize long threads, compare versions, generate tests, expose inconsistencies, translate specialist language, and direct human attention toward anomalies. A worker may spend less time typing and more time deciding. Machine assistance may also make formerly unreviewed work reviewable at all.

This counterthesis should appear throughout the book. The empirical distinction is whether automation:

- closes an underlying issue or merely adds a message;
- produces evidence independent enough to test the artifact;
- gives the accountable person a better model or only a more fluent summary;
- reduces total unresolved obligations rather than only time per local task;
- preserves a path from decision back to source.

## Source hierarchy

1. Primary records: court filings, regulatory orders, official incident reports, repository histories, audit standards, public datasets, statutes, and contract text.
2. Peer-reviewed empirical research and well-documented working papers with methods available.
3. First-party product and company records for product behavior, reported adoption, and declared process.
4. High-quality investigative reporting for chronology and participants, corroborated where possible.
5. Interviews and expert interpretation, used with explicit perspective and limits.

Vendor surveys can identify questions and provide telemetry unavailable elsewhere, but the manuscript should name the vendor's position and methodology. A marketing claim is not independent outcome evidence.

## Part I source plan — The pile

### Chapter 1 — The Inbox Writes Back

Build from Smart Reply deployment, AI-mediated communication experiments, workplace email research, customer-support field evidence, and the large Microsoft Copilot field experiment. The key comparison is messages sent versus threads or issues resolved.

Do not claim recursive agent email is already the normal workplace. Present it as a forward inference from cheaper generation on both sides and look for longitudinal evidence as the book develops.

### Chapter 2 — Nobody Read the Contract

Targets:

- clickwrap and browsewrap case law
- empirical contract-reading and comprehension research
- professional guidance on lawyer use of generative AI
- public examples of generated clauses, redline tools, and contract lifecycle systems
- disputes where bespoke-looking text was copied or machine-produced

Falsification question: do drafting tools shorten agreements, increase standardization, or improve issue spotting enough to raise comprehension?

### Chapter 3 — The Pull Request at Machine Speed

Targets:

- empirical code-review research on change size, review latency, and defect detection
- public repositories with disclosed AI-generated patches
- incident reports connecting a merged change to failure
- testing, formal verification, reproducible builds, and software-supply-chain provenance

Falsification question: when AI writes both code and tests, are defects correlated? When separate tools review, how independent are they?

### Chapter 4 — The Literature Flood

Targets:

- submission and publication volumes
- paper-mill investigations and retraction records
- citation-cascade and replication research
- systematic-review workloads
- model-assisted search and evidence-synthesis evaluations

Falsification question: does automated synthesis increase returns to primary evidence by making retrieval and comparison easier?

## Part II source plan — Attention

### Chapter 5 — Production and Inspection

Use manufacturing quality control, civil inspection, audit, and software testing to distinguish creation from verification. Find cases where inspection automation genuinely scales and cases where common-mode failure defeats it.

### Chapter 6 — The Review Budget

Seek actual time allocations, caseloads, staffing ratios, queues, and work-in-process limits. Avoid inventing a universal unit of attention. Compare domains by decision type and consequence.

### Chapter 7 — Sampling the World

Use audit standards, statistical quality control, safety testing, and security triage. Separate random sampling from risk-based sampling and both from adversarial selection. Investigate how correlated generated defects affect expected coverage.

### Chapter 8 — Fluency Is a Queueing Strategy

Use experimental evidence on automation bias, confidence, presentation, and cognitive ease, paired with real approval workflows. Avoid translating laboratory effects mechanically into professional failure rates.

## Part III source plan — Lost threads

### Chapter 9 — Law by Accumulation

Use e-discovery validation studies, discovery sanctions, court records, public-comment procedures, and legal-service workflows. The chapter needs at least one example of successful technology-assisted review.

### Chapter 10 — Science That Cites Itself

Reconstruct a citation chain from primary papers and later reviews. Track correction and retraction notices. Distinguish repetition from independent replication.

### Chapter 11 — The Dependency Nobody Knows

Use package-manager records, software bills of materials, repository archaeology, incident reports, and maintainer interviews. Avoid claiming that line-by-line knowledge of a full stack is possible or desirable.

### Chapter 12 — The Memo That Became Policy

Use public administrative records with document versions, staff analysis, official decisions, and later review. Protect uncertainty that existed at the time.

### Chapter 13 — The Company Made of Summaries

Use board-risk guidance, audit and incident escalation records, management-information research, and cases where a summary either concealed or exposed operational risk.

## Part IV source plan — Responsibility

### Chapter 14 — The Signature Fiction

Compare legal assent, professional certification, executive attestation, and digital signature. The chapter must state precisely what each signature represents.

### Chapter 15 — The Human Name on the Machine's Work

Use authorship rules, bar and medical guidance, workplace accountability, and platform submission policies. Separate credit, control, liability, and epistemic ownership.

### Chapter 16 — Denial of Attention

Use documented legal dumps, alert floods, public-comment campaigns, fraudulent claims, moderation attacks, and personalized phishing. State whether machine generation is proven, alleged, or hypothetical in each case.

### Chapter 17 — When the Reviewer Is Generated Too

Use evaluations of model critique, test generation, debate, ensemble methods, and human-machine review. The central technical issue is independence, not whether the reviewer has a different product name.

## Part V source plan — Institutional answers

### Chapter 18 — Proof-Carrying Work

Use test suites, reproducible research, signed provenance, safety cases, audit trails, and claim-level evidence systems. Do not promise proof where the domain permits only bounded evidence.

### Chapter 19 — The Right Size of a Change

Use code-review research, change-management practice, staged regulation, reversible deployment, and contract redlines. Test the tradeoff between reviewable units and fragmented cumulative effects.

### Chapter 20 — Read Before Consequence

Use high-reliability practice, human-factors evidence, authorization design, and real intervention timelines. A human must have state, time, authority, competence, and a meaningful stop mechanism.

### Chapter 21 — No One Read It

Choose a closing case only after enough of the book exists to know which case can carry the whole argument. It must have a reconstructable chain rather than a famous anecdote pasted onto the thesis.

## Reporting discipline

For every extended case, maintain a claim ledger with source, date, exact support, and limitation. Record contradictions rather than smoothing them out. Separate:

- what participants knew then;
- what later investigation established;
- what the book infers;
- what remains unknown.

The manuscript should not display this apparatus unless it helps the reader. The research trail must.

## Kill tests

Before completing a chapter, ask:

- Is the claimed comprehension gap measured, reconstructed, or merely imagined?
- Is the artifact consequential, or only annoying?
- Did automation cause the scale change, or did it enter an already overloaded system?
- Could the same evidence support the opposite conclusion—that automation improved closure or inspection?
- Does the case belong more naturally in another Svyable book?
- Is the proposed remedy independent of the system it checks?

If a chapter cannot survive those questions, narrow it, move it, or cut it.
