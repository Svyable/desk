# Research Brief

## Thesis under test

**Robust** asks what it means to remain sturdy while the intelligence layer underneath work changes faster than normal institutional planning cycles.

The strong version of the argument — that people and organizations should distrust AI, preserve old workflows, or wait for the technology to stabilize — is too brittle to be useful. The version worth testing is almost the opposite:

> The faster AI improves, the more valuable it becomes to design choices, workflows, skills, and systems that can absorb model changes, failures, price shifts, vendor moves, and capability surprises without losing their essential function or their human owners’ ability to steer them.

Robustness here means **preserving essential function and agency across a useful range of surprises.** It is related to resilience but not identical to it. Resilience emphasizes recovery after damage. Adaptability emphasizes changing behavior when conditions change. Robustness begins one step earlier: enough of the system still works during the disturbance that there remains something coherent to recover or adapt.

The manuscript organizes practical robustness around six recurring properties:

- **Reversible choices** — decisions can be undone before their cost becomes existential.
- **Optional paths** — more than one credible route exists to an essential outcome.
- **Bounded delegation** — automation has explicit authority, permissions, scope, and escalation points.
- **Understood failure modes** — teams know how the system tends to fail, not merely how it performs on average.
- **Substitutable dependencies** — critical functions are not inseparable from a single model, interface, employee, vendor, or data representation unless there is a conscious reason.
- **Tested fallbacks** — degraded modes are exercised before an emergency proves they were imaginary.

## Core empirical tests

1. **Capability versus reliability:** How much does frontier capability growth tell us about dependable performance on specific production tasks?
2. **Model churn:** How often do deployed AI models, versions, prices, interfaces, or support statuses change on timescales shorter than normal enterprise software planning?
3. **Dependency cost:** When does deep integration with one model or vendor create enough benefit to justify the switching cost and concentration risk?
4. **Human skill retention:** Which human capabilities become more valuable as AI gets better, and which atrophy in ways that reduce oversight or fallback capacity?
5. **Delegation boundaries:** Which task properties — consequence, reversibility, observability, ambiguity, latency, and error detectability — should determine how much authority is delegated?
6. **Evaluation:** Can small, workflow-specific evaluation suites outperform intuition and benchmark headlines when selecting or migrating models?
7. **Graceful degradation:** Which AI-enabled systems can continue delivering a useful reduced service when the preferred model, tool, network, retrieval system, or automation layer fails?
8. **Organizational learning:** What structures let institutions update rapidly without turning every new model release into a reorganization?
9. **Redundancy economics:** Where is redundancy rational insurance, and where is it expensive theater?
10. **Reversibility:** How should organizations price the value of being able to undo an AI adoption decision when future capability and regulation are uncertain?

## Falsification and counter-evidence

Every part of the book should look for evidence against its instincts.

- A single-vendor architecture may be the most robust option when the vendor provides extraordinary reliability, migration tooling, support, compliance, and contractual guarantees.
- Abstraction can create its own fragility by forcing every model into the least-common-denominator interface and hiding useful model-specific behavior.
- Human-in-the-loop designs can reduce reliability when humans become inattentive rubber stamps or when intervention is too slow for the system being controlled.
- Manual fallbacks can be dangerous if they are rarely used and therefore decay into an untested ritual.
- Keeping old skills alive has an opportunity cost; the right question is not whether a skill is traditional but whether it remains useful for judgment, verification, recovery, or transfer.
- Redundancy can multiply attack surfaces, operational complexity, and inconsistent states.
- Fast adoption can itself be robust when the implementation is modular, observable, reversible, and backed by good evaluation.
- The best way to survive a moving frontier may sometimes be to embrace a new capability quickly rather than hedge against it.

The book should not turn robustness into conservatism. A system that never changes can be perfectly stable right up to the moment its environment makes it irrelevant.

## Evidence lanes

### I. The pace and shape of capability change

Use the Stanford AI Index, METR task-horizon work, agent benchmarks, and other original evaluations to establish two facts at once: frontier systems are improving rapidly, and capability remains uneven across tasks and conditions. Do not generalize one benchmark into a universal intelligence score.

### II. Model and platform churn

Use current model-lifecycle and retirement documentation from major cloud and AI providers. Treat deprecation schedules as evidence that model replacement is normal infrastructure work, not as evidence that any particular vendor is unusually unstable.

### III. Reliability engineering

Borrow carefully from mature reliability disciplines: service-level objectives, error budgets, graceful degradation, load shedding, redundancy, fault isolation, postmortems, and game-day testing. Translate mechanisms into AI workflows without pretending a stochastic model is just another database server.

### IV. Risk management and governance

Use NIST AI RMF materials and other primary standards to ground concepts such as mapping context, measuring risk, managing controls, documentation, monitoring, and accountability. The manuscript should keep governance operational rather than ceremonial.

### V. Work and organizational adoption

Use current adoption research from Stanford and vendor economic/enterprise studies with clear source labels. Vendor studies can reveal real usage patterns but should not be treated as neutral estimates of the entire economy.

### VI. Human judgment and skill

Use research on automation bias, skill decay, expertise, deliberate practice, and human factors where claims require it. Distinguish “doing a task by hand forever” from “retaining enough understanding to detect errors, set goals, and recover.”

### VII. Architecture and portability

Study interface contracts, modular design, open data formats, exportability, and migration patterns. Avoid simplistic “multi-cloud everything” prescriptions. The question is which boundaries preserve valuable choices at acceptable cost.

## Planned figures

1. **The moving ground** — model capability, cost, and lifecycle changes on different clocks.
2. **Capability is not reliability** — benchmark or task performance distributed across task types rather than shown as one score.
3. **The delegation ladder** — assist, draft, recommend, act with approval, act within bounds, act autonomously.
4. **The reversibility curve** — consequence and switching cost against the amount of pre-commitment testing required.
5. **AI error budget** — acceptable failure rates tied to workflow consequence and detection speed.
6. **Graceful degradation ladder** — frontier model → smaller model → deterministic tool → manual process → safe stop.
7. **Dependency map** — models, data, prompts, tools, identity, permissions, vendors, humans, and external systems.
8. **The robustness portfolio** — efficiency on one axis, optionality on the other, with examples of over- and under-engineering.

## Chapter-to-evidence map

| Chapter | Primary research question |
|---|---|
| 1 — The Model Has an Expiration Date | What does normal model retirement reveal about building on a moving intelligence layer? |
| 2 — The Jagged Frontier | Why does rapid aggregate capability growth coexist with stubborn local unreliability? |
| 3 — When Better Breaks Things | How can an objectively stronger model still break a workflow built around the behavior of its predecessor? |
| 4 — Robust Is a Different Goal | What distinguishes robustness from maximum performance, resilience, adaptability, and stagnation? |
| 5 — Own the Problem, Rent the Intelligence | Which parts of a person’s work should remain portable across tools and models? |
| 6 — Keep the Manual Gear | What minimum fallback competence is worth preserving as automation deepens? |
| 7 — Taste Is a Control System | Why do judgment, standards, and error detection become more valuable when production gets cheap? |
| 8 — Skills That Survive the Tool | Which skills transfer across model generations and changing interfaces? |
| 9 — The Human Override | When does human intervention improve a delegated system, and when is it merely decorative? |
| 10 — Two Speeds, One Workflow | How can teams combine fast AI execution with slower consequential approval? |
| 11 — Evals Before Opinions | What should small, task-specific evaluations measure before model selection or migration? |
| 12 — Failure Budgets for Intelligence | How should acceptable AI error be tied to consequence, observability, and recoverability? |
| 13 — Vendor Optionality | When is provider substitution worth engineering, and when does it create needless complexity? |
| 14 — Data You Can Leave With | Which representations and records must remain exportable for practical independence? |
| 15 — Reversible Architecture | How can systems preserve the ability to replace models, policies, and components without total redesign? |
| 16 — Graceful Degradation | What useful service should remain when the preferred AI path fails? |
| 17 — Scenario Portfolios | How can strategy remain useful across multiple plausible capability and cost trajectories? |
| 18 — Redundancy Is Not Waste | Where does deliberate duplication buy survival rather than bureaucracy? |
| 19 — The Sturdy Institution | What organizational structures learn quickly without surrendering accountability or memory? |
| 20 — Sturdy, Not Still | What practical compact lets people move aggressively without making themselves brittle? |

## Source discipline

- Prefer original reports, official lifecycle documents, standards, academic papers, and primary datasets.
- Date volatile statistics and provider policies.
- Distinguish model capability, model reliability, workflow reliability, and institutional reliability.
- Treat vendor-produced economic studies as useful but interested evidence; label them accordingly.
- Never infer reliability from a single benchmark score.
- Record the exact task, model version, evaluation setup, and access date when using fast-moving technical results.
- Do not quote source prose unless necessary. Paraphrase mechanisms and preserve links in the source registry.
- For every prescription, ask what cost it adds and what failure it is meant to survive.
