# Research Brief

## Thesis under test

*How to Train Your Agent* asks a practical question that sits downstream of the usual arguments about whether AI agents will transform work: if ordinary people are increasingly able to delegate consequential work to persistent software actors, what does a competent principal actually have to learn?

The book's working answer is that the decisive skill is not prompting. It is apprenticeship design.

A useful agent is made dependable through a sequence that human institutions have used for apprentices, junior professionals, pilots, operators, and delegated representatives for a long time: begin with bounded work, expose the learner to examples, make standards observable, correct failures while the cost is low, preserve the corrections, test under variation, widen authority gradually, require escalation at the edge of competence, and keep the principal close enough to reality to notice when the system has drifted.

The contemporary twist is economic. Models may become broadly available commodities while the accumulated layer around them — role definitions, examples, corrections, evaluations, access rules, tool interfaces, operating history, and domain-specific judgment — becomes a durable productive asset. The book calls this an **agent childhood**: the costly period in which a general capability is turned into a trustworthy role.

That claim needs restraint. A model does not learn exactly as a human apprentice does. Many deployed agents do not update model weights from a user's corrections. Memory can be lossy, context can expire, vendors can change underlying models, and evaluation suites can overfit. “Training” in this book therefore means the practical shaping of an agent system through instructions, examples, memory, tools, permissions, tests, feedback, and operating routines. It does not imply that ordinary users are performing foundation-model training.

## Relationship to neighboring Desk books

This manuscript must remain distinct from two existing Sven Hardy Benson books.

- *Agentile* is a macroeconomic argument about delegated intention becoming cheap, persistent, parallel, and programmable, and about what that new force does to firms, wages, ownership, verification, and the state.
- *The Delegation Machine* is a historical and institutional account of delegation, authority, evidence, review, and revocation, with a protocol-oriented practical companion.
- *How to Train Your Agent* is the principal's field manual. Its center of gravity is the period **before** broad autonomy: apprenticeship, examples, correction, evaluation, skill preservation, promotion, and the creation of portable operating judgment around an agent.

Overlap is permitted where the subject genuinely requires it, but the book should not simply restate the economics of delegation or the security architecture of delegated authority. Its novel unit of analysis is the trained role and the human process that creates it.

## Market-positioning check

A September 7, 2026 web scan found a growing technical and management literature on building, deploying, and supervising agents. Manning's *AI Agents and Applications* is a technical implementation book. Open-source playbooks teach day-to-day agentic workflows. Kenneth Mangum's short *Leading with AI Agents* frames trust, delegation, and accountability at the organizational level. A recent Substack post by Caitlin McCaffrey used the exact phrase “How to train your agent” for a practical self-improving customer-research loop.

The title phrase therefore cannot honestly be described as unprecedented. The book's defensible white space is narrower and stronger: a full trade-nonfiction argument that **agent training is a new form of personal capital formation**, that agents need a deliberately designed “childhood” before autonomy, and that the worker of the agent economy increasingly competes through the quality of the digital workforce they have taught rather than only through the tasks they can personally execute.

The manuscript should make that distinction clear without spending pages attacking neighboring books or claiming exclusive ownership of a fast-moving idea.

## Core empirical questions

1. Do agent systems perform better when users supply explicit criteria, examples, tests, and iterative feedback rather than relying on a single natural-language request?
2. When does wider autonomy increase useful output, and when does it mainly widen the blast radius of errors?
3. Can evaluation and observability support graduated autonomy without turning the human into a full-time checker?
4. What happens to human judgment when AI removes the repetitions through which novices historically acquired skill?
5. Which parts of an agent's usefulness are portable across model upgrades and vendors, and which are fragile dependencies on a particular model or platform?
6. Does a personal “bench” of trained agents create durable career leverage, or will improving base models erase most of that advantage?
7. How should people divide work among one agent, several specialized agents, deterministic software, and humans?
8. What rights, privacy, security, and ownership problems arise when a personal agent accumulates examples and corrections drawn from an employer, household, client, or community?
9. Can agents meaningfully help households coordinate ordinary life, or does the privacy and maintenance burden overwhelm the benefit for most people?
10. Which forms of human involvement preserve learning and accountability rather than merely adding ceremonial approval clicks?

## Falsification and counter-evidence

Every chapter should preserve evidence that could weaken the thesis.

- Frontier models may become so capable at interpreting vague goals that elaborate role training becomes much less valuable.
- General-purpose agents may absorb planning, evaluation, memory, and escalation well enough that user-created operating layers commoditize quickly.
- A heavily trained agent can become brittle if its rules encode yesterday's environment; more instruction is not always better.
- Multi-agent systems can add coordination cost and failure modes without adding useful capability. A single agent or deterministic workflow is often enough.
- Human review can become security theater when reviewers are overloaded, deskilled, or unable to reproduce the work they approve.
- “Keeping your hands dirty” can preserve judgment in some fields and waste scarce human attention in others. The book should distinguish formative practice from nostalgia for drudgery.
- Personal agent portfolios may be constrained by employer data ownership, privacy rules, vendor lock-in, security requirements, and the practical difficulty of moving memory across systems.
- Unequal access to capable models, proprietary data, compute, and time for experimentation may matter more than training skill itself.
- Some household uses will remain inappropriate because family data is unusually sensitive and interpersonal responsibilities cannot be reduced to optimization.
- The economic value of agent supervision depends on actual reliability and adoption. Current agent deployment remains early in many business functions.

## Source discipline

Concrete claims should trace to the source ledger in `source-ledger.csv`. Prefer primary research, standards, official guidance, first-party engineering reports, and original papers. Contemporary vendor guidance is useful evidence about current engineering practice, not proof of universal laws. Vendor claims should be labeled as such.

Historical automation research is used as an analogy with boundaries. An AI agent is not an autopilot, process-control system, or 1990s expert system. The relevance is the recurring supervisory problem: as automation performs more routine work, human operators can lose the contact with the process that makes intervention competent.

The manuscript should avoid invented scenes, invented quotations, and unsupported statistics. When a current statistic is used, preserve its date, population, and measurement limits in the source ledger.

## Chapter-to-evidence map

| Chapter | Primary research question |
|---|---|
| 1 — Your First Employee Isn't an Employee | What is technically and institutionally different when software can execute workflows rather than only answer questions? |
| 2 — Prompting Is Micromanagement | Why do stable role definitions, tools, and evaluation outlast clever one-shot instructions? |
| 3 — The Agent Needs a Childhood | What can apprenticeship research teach us about graduated participation without pretending machines learn like people? |
| 4 — Write the Job Before the Prompt | How do objectives, constraints, and task boundaries reduce ambiguity and agency costs? |
| 5 — Show It What Good Looks Like | What is the evidence for examples, evaluation criteria, and iterative improvement? |
| 6 — Your Judgment Is the Dataset | Which scarce human judgments become more valuable when execution gets cheaper? |
| 7 — Corrections Become Culture | How should failures and feedback become persistent operating knowledge rather than repeated conversations? |
| 8 — Memory Is Not Experience | What do current agent architectures mean by memory, and why can stored context be mistaken for understanding? |
| 9 — The Probation Period | How can evaluations, shadow work, and bounded pilots reveal failures before authority expands? |
| 10 — Never Give a Rookie the Keys | What do least privilege, prompt-injection risk, and excessive agency imply for everyday agent use? |
| 11 — Promotion Means Permission | How should autonomy expand as demonstrated reliability grows? |
| 12 — Teach the Agent to Call You | Why are escalation thresholds and human intervention part of competent autonomy rather than evidence of failure? |
| 13 — One Human, Many Agents | When does specialization help, and when does multi-agent orchestration add needless complexity? |
| 14 — When Agents Manage Agents | What new observability and attribution problems arise when agents delegate to agents? |
| 15 — The Receipt Is Part of the Work | Why do logs, provenance, tests, and visible state changes matter once execution becomes cheap? |
| 16 — Keep Your Hands Dirty | What does automation research say about skill decay, situation awareness, and the ability to take over? |
| 17 — When the Agent Is Better Than You | How should a principal supervise work they cannot personally outperform? |
| 18 — The Agent Owner's Moat | Which parts of trained agent systems could function as durable personal or organizational capital? |
| 19 — Your New Résumé Is an Org Chart | How might careers change if people increasingly bring systems of delegated capability to a role? |
| 20 — The Family Becomes a Small Firm | What does agentic coordination look like outside the corporation, and what privacy limits become sharper at home? |
| 21 — The Last Job Title Is Owner | What remains of the thesis if models keep improving and the boundary of automatable work keeps moving? |

## What would make the whole book false?

The strongest version of the book would be wrong if capable agents reliably inferred goals, standards, permissions, context, and escalation needs from minimal instruction; if user-created examples and correction histories added little durable value; if most economically useful autonomy remained too unreliable or too regulated for ordinary people to deploy; or if agent platforms made personal operating layers so non-portable that users could not accumulate meaningful capital around them.

A weaker version could still survive: as long as people delegate consequential work to systems whose behavior is imperfect and whose authority is bounded, the old problems of apprenticeship, supervision, evaluation, and accountability will reappear in new forms. The manuscript should earn that conclusion rather than assume it.