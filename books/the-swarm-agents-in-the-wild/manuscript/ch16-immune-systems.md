# Immune Systems

A city does not survive because nothing goes wrong.

It survives because fires usually remain fires instead of becoming the end of the city.

Water systems have valves. Electrical grids have breakers. Buildings have fire doors. Banks hold reserves. Ships have compartments. Networks segment traffic. Hospitals isolate infections.

Resilience is the art of preventing one local failure from becoming a general event.

Agent ecosystems will need the same art.

The early instinct will be to focus on prevention. Make the model safer. Write a stronger policy. Improve prompt-injection resistance. Audit the tool. Test the agent before deployment.

All worthwhile.

All insufficient.

Complex systems eventually encounter failure modes their designers did not anticipate. The question is not whether a swarm can be made perfectly safe. It is whether the swarm can notice damage, contain it, learn, and recover.

That is an immune system.

Imagine a company with ten thousand active agents. One coding agent begins making unusual credential requests. A behavioral monitor notices that the requests do not match its historical task profile. The agent is not immediately declared malicious. Its privileges are reduced. Its recent outputs are quarantined. Sibling agents that shared the same dependency are inspected. A fresh verifier reproduces the task in a clean environment. The suspicious lineage is paused.

No executive needs to understand the attack in real time.

The system buys time.

Biological immunity works similarly. It does not wait for a central brain to identify every pathogen. It relies on distributed detection, local response, memory, escalation, and controlled destruction.

Machine immune systems can be far more explicit.

They can watch rates, destinations, resource use, privilege changes, output patterns, error correlations, and deviations from expected workflow. They can compare agents against peer populations. They can create canaries: deliberately tempting resources that legitimate agents should never touch. They can revoke credentials instantly.

The most important design principle is containment by default.

An agent should not have standing access to every resource it might conceivably need. It should receive the minimum practical authority for the shortest practical time.

This is familiar security doctrine, but agents make it harder because their usefulness comes from flexibility. Give them too little access and every task stalls. Give them too much and every mistake acquires reach.

Dynamic permission is the compromise.

An agent starts narrow. When it needs more authority, it requests it with context. A policy engine or supervising agent evaluates the request. High-risk expansions require independent approval. Permissions expire.

Authority becomes leased rather than owned.

This also protects against goal drift.

A persistent agent working for months may accumulate strange local strategies. Its environment changes. Its memory fills with exceptions. It may continue pursuing assumptions that were once correct. Periodic revalidation can treat long-lived agents like software certificates: continued authority is something they must repeatedly earn.

Swarm immunity also requires diversity.

If every defensive agent uses the same model as every operational agent, a shared blind spot can compromise both. Independent models, separate vendors, distinct prompts, and non-AI enforcement mechanisms reduce correlated failure.

A simple deterministic rule may outperform a genius model when the job is to forbid money from leaving an account under certain conditions.

Never send a poet to guard a turnstile.

Some constraints should be dumb and hard.

This layered design creates an important cultural shift. Security stops being a department that says no and becomes part of the swarm's metabolism.

Agents can carry security context with each action. Credentials can encode purpose. Transactions can state which policy authorized them. Downstream systems can reject actions that arrive without the right evidence.

The environment itself becomes selective.

This is closer to immunity than policing. The goal is not to inspect every thought. It is to make dangerous propagation difficult.

There will still be incidents.

A bad agent will leak data. A swarm will make an expensive trade. A verifier will miss a manipulation. An attacker will discover a new pathway.

When that happens, the quality of the ecosystem will be measured by blast radius.

How many identities were affected? How much money could move? How long did the anomaly persist? Could the decision be reversed? Were the logs intact? Did the system learn a general defense, or merely patch one symptom?

The public conversation about AI safety often asks whether a system is safe.

Mature engineering asks a different question:

How does it fail?

The wild is not safe.

It is survivable when the ecosystem has immune systems.
