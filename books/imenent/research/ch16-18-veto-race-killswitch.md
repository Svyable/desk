# Imenent Chapters 16–18 — veto, race, and shutdown revision controls

This note prepares a coherent manuscript pass across Chapters 16–18. The sequence should move from a nominal human veto that arrives too late, through competitive pressures that make preserving re-entry capacity look locally expensive, to the difference between stopping an agent and recovering the institution it was operating. The governing claim remains narrower than “humans will lose control”: formal authority can survive while the practical ability to intervene, slow down, or operate without the machine layer decays.

## Chapter 16 — The Human Veto Becomes Ceremony

### Revision objective

Make the chapter distinguish **formal veto power** from **effective intervention capacity**. A human approval gate is meaningful only when the reviewer has enough time, independent evidence, comprehension, and institutional permission to reject or alter the proposed action before its consequence becomes expensive or irreversible.

### Additions worth making

1. Treat review latency as part of authority. Measure the interval between a machine proposal becoming reviewable and the last moment a rejection still changes the outcome. A nominal approval step outside that interval is recordkeeping, not control.
2. Separate visibility from comprehension. A reviewer can receive every log and still lack a usable picture of live state. Re-entry requires information compressed for human cognition without making the machine actor the only interpreter of that information.
3. Test disagreement, not only approval. Sample cases in which humans reject machine recommendations and inspect whether the surrounding workflow genuinely tolerates the slower or less standardized path.
4. Track automation-induced deference. If reviewers almost never overturn recommendations, investigate whether the machine is exceptionally reliable, whether disagreement has become costly, or whether human expertise has atrophied.
5. Preserve precommitment as the positive case. Humans can exercise real control before machine-speed events by setting authority envelopes, escalation thresholds, budgets, and forbidden actions that remain independently enforceable.

### Counterevidence to preserve

- Machine recommendations can improve consistency and expose evidence humans would otherwise miss.
- Human approval can introduce delay, bias, fatigue, and its own correlated errors.
- In fast domains, precommitted machine action may be safer than waiting for tactical approval.
- Better interfaces, simulations, and machine-generated explanations can increase rather than reduce human leverage when they point to independent evidence.

### Falsification pressure

The ceremony concern weakens where organizations can show that reviewers routinely receive enough time and independent evidence to disagree, that disagreement changes outcomes without prohibitive operational penalty, and that human teams retain the skill to take over the disputed function.

## Chapter 17 — The Race Into Dependence

### Revision objective

Make competitive dependence a coordination problem rather than a deterministic race-to-the-bottom story. Organizations may rationally preserve redundancy and recovery capacity, but they face pressure to spend efficiency gains on higher throughput, lower staffing, tighter inventories, and faster service commitments. The chapter should show how those choices can shrink re-entry margins even when no actor wants dependence.

### Additions worth making

1. Distinguish capability competition from resilience competition. A firm can adopt powerful agents without eliminating fallback capacity if customers, insurers, regulators, lenders, or boards reward recoverability.
2. Make the externality visible. One firm’s thinner fallback may be manageable until counterparties adopt the same posture; then degraded operation fails because the ecosystem no longer accepts slower settlement, manual paperwork, delayed response, or reduced throughput.
3. Identify commitment ratchets. Service-level agreements, market expectations, staffing plans, and capital structures can convert optional machine speed into a contractual baseline that humans cannot meet during re-entry.
4. Treat resilience as a purchased option. Maintaining alternate providers, trained operators, portable state, spare capacity, and slower modes has a visible carrying cost and an uncertain future payoff. That economic shape explains why it is vulnerable to optimization.
5. Preserve coordination mechanisms. Insurance requirements, procurement rules, disclosure, interoperability standards, sector exercises, and liability can change the payoff so that resilience becomes competitive rather than charitable.

### Counterevidence to preserve

- Competition can reward reliability and continuity, not only speed and cost.
- Automation can create enough surplus to fund more redundancy rather than less.
- Modular systems and open standards can make switching cheaper.
- Visible failures can rapidly increase the market value of fallback capacity.

### Falsification pressure

The race mechanism weakens if firms that preserve substantial re-entry capacity consistently remain competitive without external coordination, or if automation makes redundancy cheap enough that resilience grows naturally with capability rather than being optimized away.

## Chapter 18 — The Myth of the Kill Switch

### Revision objective

Separate **cessation**, **containment**, **state reconstruction**, and **service restoration**. A kill switch answers whether a component can be stopped. Re-entry asks what happens during the hours or days after stopping it.

### Additions worth making

1. Define the removal interval. Measure how long essential service can continue after the primary intelligent layer is distrusted or unavailable, not merely how quickly processes can be terminated.
2. Inventory state outside the model. Humans or replacement systems need access to queues, pending commitments, credentials, policy versions, transaction history, descendant agents, and externally visible obligations without asking the disabled system to reconstruct them.
3. Distinguish reversible from irreversible consequences. Killing an agent can stop future actions but cannot recall payments already settled, contracts already accepted, code already deployed, or counterparties already induced to act.
4. Exercise cold starts. Recovery tests should assume the primary model, its monitor, and perhaps its provider are unavailable. If the recovery procedure depends on them to explain state or provision replacements, the kill switch is not an independent control.
5. Preserve selective degradation. The best response may be neither full autonomy nor total shutdown: revoke write authority, halt new descendants, freeze large commitments, preserve read-only telemetry, and continue minimum service through simpler paths.

### Counterevidence to preserve

- Fast shutdown is still valuable; it can limit blast radius while slower recovery begins.
- Stateless or narrowly scoped agents can be genuinely easy to replace.
- Good event sourcing, portable interfaces, short-lived credentials, and deterministic policy layers can make recovery much faster.
- Automation itself can improve backup generation, state reconstruction, incident diagnosis, and operator training when those capabilities remain independent enough to trust during the incident.

### Falsification pressure

The chapter’s critique weakens where organizations can repeatedly remove the primary agent layer, reconstruct authoritative state without it, sustain essential service through the expected incident window, and restore normal operation without accepting unacceptable safety, legal, or economic losses.

## Coherent manuscript pass

Keep the chapters connected but not repetitive:

- **Chapter 16:** Does the human veto still occur inside the decision window?
- **Chapter 17:** What economic pressures make that intervention capacity expensive to preserve?
- **Chapter 18:** If humans finally invoke the veto, can the institution survive the removal interval?

The sequence should move from **decision-time authority** to **competitive erosion of fallback** to **post-shutdown recoverability**. Prefer concrete tests—review windows, disagreement rates, commitment ratchets, portable state, cold starts, and removal intervals—over new slogans or named frameworks.

## Scope discipline

This pass does not justify claims that human review is generally superior to machine action, that competition inevitably destroys resilience, that every automated service needs a manual duplicate, or that kill switches are useless. The stronger claim is conditional: control survives when institutions preserve timely disagreement, make resilience economically durable, and can continue essential operation after the intelligent layer itself becomes unavailable or untrusted.