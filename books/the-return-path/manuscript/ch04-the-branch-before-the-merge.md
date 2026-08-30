# The Branch Before the Merge

Software engineers gave one of humanity’s oldest problems an unusually literal vocabulary.

Branch. Commit. Merge. Revert.

The words are technical, but the structure is not. A branch says: let us explore this possibility without forcing everyone else to live inside it yet. A commit says: preserve this state and its explanation. A merge says: this line of work is ready to join the shared history. A revert says: the change was real, the history remains, and we are going to reverse its effect with another recorded change.

That is not only a workflow for code. It is a compact theory of learning under uncertainty.

Early software development made revision painful because the physical and organizational machinery around code was primitive by modern standards. Programs were carried on punched cards, paper tape, magnetic media, and printed listings. Teams needed ways to coordinate changes to systems whose complexity rapidly exceeded any single person’s memory. Source-code control emerged from this practical need. Different tools solved it differently, but the enduring idea was to separate the current state of a system from the history that produced it.

Git, created in 2005 for Linux kernel development, pushed distributed version control into the mainstream. Its details matter less here than one behavior visible in its own documentation. `git revert` does not ordinarily erase an earlier commit. It creates a new commit that reverses the effect of the earlier one. The history remains inspectable.

That is the ledger principle from the previous chapter translated into a machine that millions of people use every day.

The cultural effect is easy to underestimate. Before reliable version control, changing a complex codebase felt more dangerous because an engineer could lose the known-good state. People copied folders and named them things like `final`, `final2`, and `final-really`. They emailed files. They kept mental notes about what had changed. The process created friction around experimentation because experimentation threatened memory.

Version control lowered the cost of trying.

Once the previous state is preserved, a developer can alter code more aggressively. Once branches are cheap, multiple lines of work can coexist. Once a change can be reverted, deployment is less psychologically final. None of this removes risk. A bad software release can corrupt data, expose secrets, injure users, or interact with external systems in ways that cannot simply be rolled back. But preserving recoverable states changes the frontier of what teams are willing to attempt.

The interesting lesson is not “software is reversible.” It often is not. The lesson is that software teams learned to distinguish reversible layers from irreversible ones.

A user-interface change can usually be reversed easily. A database migration that deletes information may not be. A change in a public application-programming interface can be technically undone while still breaking customers who already built against it. A security key that has leaked cannot become secret again. Money transferred through a payment system may trigger downstream actions before the originating service can reverse its own record. An algorithmic decision sent to a person may change behavior even if the model is later replaced.

The more software touches the physical and social world, the less meaningful a simple rollback becomes.

This is why mature engineering organizations use deployment patterns that control exposure before they need reversal. Feature flags allow code to exist without being active for everyone. Canary releases send a new version to a small share of traffic. Blue-green deployments maintain parallel environments so traffic can be switched back if the new environment misbehaves. Backups preserve state. Database migrations are designed, when possible, to be compatible across versions so that the application can move forward or backward during a transition.

Each technique changes the sequence of commitment.

Instead of asking whether a release is perfect, the system asks how much of the world should depend on it before evidence arrives.

This is the software expression of a general strategic principle: expose the smallest reasonable surface to the largest uncertainty.

The principle is the opposite of theatrical leadership. The theatrical leader announces a transformation, reorganizes the company, changes the brand, replaces the technology stack, and commits the budget before the awkward facts appear. The engineer with a canary release looks less heroic. One percent of users see the change. Metrics are watched. Logs are checked. The new system earns the right to expand.

There is nothing inherently virtuous about moving slowly. Good software teams can deploy many times a day precisely because they have made each deployment smaller and more recoverable. The cadence becomes faster by reducing the amount of irreversibility bundled into each move.

This is one of the most important relationships in the book: reversibility can increase speed.

People often treat caution and speed as opposites. They imagine that safer organizations move carefully while bold organizations move fast. In practice, organizations capable of rapid recovery can move faster because each move carries less existential weight. A team that can restore a service in minutes is willing to ship more frequently than a team whose releases are monthly rituals requiring an entire weekend and a war room.

The same pattern appears in aviation, medicine, finance, and manufacturing. Reliability often comes from structuring operations so errors remain local, observable, and recoverable. The result can be higher throughput, not lower.

The phrase “move fast and break things” captured one era of software culture because digital products seemed to make breakage cheap. When the product was a social website used by students, the damage from a buggy feature appeared limited. As software moved into elections, health, payments, transport, employment, military systems, and billions of daily interactions, the slogan aged badly. Breaking things is only tolerable when the broken thing can be repaired before the damage escapes the experiment.

The right to move fast is earned by containment.

This sounds like an engineering concern, but containment is organizational. A company can have technically reversible systems and culturally irreversible decisions. Perhaps the software can be rolled back, but the executive who sponsored the project has tied his status to its success. Engineers discover problems but know that reporting them will delay a launch that the chief executive already promised at a conference. The return path exists in code and vanishes in hierarchy.

A version-control system cannot save an organization that refuses to use the information recorded inside it.

Conversely, a strong engineering culture normalizes reversal. A rollback is not automatically treated as failure. It can be evidence that the safety mechanism worked. An incident review asks why the bad change reached users, why detection took as long as it did, and how recovery could be faster next time. The goal is not to make engineers careless. It is to prevent the shame of reversal from causing a longer outage.

This distinction matters because people internalize the emotional meaning of procedures. If a rollback destroys someone’s career, teams will delay rollback while searching for explanations that preserve status. If rollback is routine, the threshold for acting can be lower. The technical recovery time may be measured in seconds; the organizational recovery time is determined by culture.

Now move one level higher. Branching is also a way to organize disagreement.

A shared codebase forces people to coordinate, but not every disagreement must be resolved before anyone can work. A branch allows a person or team to pursue a different solution while the main line continues. Later the branch can be merged, abandoned, or maintained separately.

Institutions often lack this mechanism. They try to achieve consensus too early.

A company debates a new product concept for months because building anything feels like a commitment to the whole organization. A university committee tries to settle every objection before a pilot. A government agency writes a permanent rule when a temporary program could reveal whether the feared behavior actually occurs. A family argues abstractly about where to live rather than spending a month in the candidate city.

The absence of branching turns uncertainty into politics.

When only one path can exist, every participant must fight to make that path resemble his beliefs. When multiple temporary paths can coexist, some disagreements can be settled by evidence.

This does not mean every social conflict can be A/B tested. Ethical rights should not be allocated experimentally to see whether oppression is efficient. Small pilots can produce misleading results when systems have network effects or when participants know they are temporary. Experiments can shift risks onto people who did not consent. The point is not universal trial-and-error. It is that reversible pluralism can reduce the stakes of some disagreements.

Federal systems sometimes work this way. States, provinces, municipalities, or other jurisdictions can try different policies. Companies can let teams use different tools. Scientists can pursue competing hypotheses. Markets allow many firms to test business models in parallel. Biological evolution is the vast natural example: variation occurs, selection acts, and lineages branch.

Parallel exploration is one of the most powerful ways to learn because it reduces dependence on a single forecast.

The cost is duplication. Multiple branches consume resources. Different jurisdictions create complexity. Competing standards can fragment markets. Independent experiments repeat work. Evolution wastes organisms on unsuccessful variation. Central planners dislike this redundancy because the failed branches look inefficient in retrospect.

But retrospect is exactly the problem. We know which branch won only after the branching occurred.

A system that eliminates all duplication before uncertainty resolves may eliminate the future winner along with the visible waste.

This is why venture capital, scientific research, and decentralized markets can appear extravagantly inefficient. Many projects fail. Several teams solve similar problems. Money is spent on products nobody wants. Yet the portfolio may discover possibilities a single centralized plan would not have chosen.

The relevant comparison is not between one successful project and ten failed ones after the fact. It is between a system capable of generating the successful project and a system that had to identify it in advance.

Version control also teaches a darker lesson about merging. Not every branch combines cleanly.

Two lines of work can alter the same part of a system in incompatible ways. Git calls this a merge conflict. A human must decide how the versions fit together.

Social life is full of merge conflicts. Two departments reorganize around different assumptions. Two legal regimes claim authority over the same activity. A company acquires another and discovers that the cultures encode incompatible meanings of risk, hierarchy, and customer service. A person tries to merge a new identity with commitments made under an old one.

The fantasy of effortless reversibility often ignores integration cost. You may preserve options separately and still discover that combining them later is painful.

This is why interfaces matter. Software modules with clear boundaries can change independently. Organizations with clear decision rights can experiment without constantly colliding. Markets with standards let suppliers innovate behind compatible interfaces. Federal political systems allocate some powers locally and others centrally. The more entangled the components, the harder any one part is to reverse.

Entanglement is the enemy of cheap change.

Technical debt is one form. A quick fix links components that were previously separate. Another fix assumes the first. Soon changing one thing requires understanding ten others. The system still works, but its option value shrinks. Every future modification becomes a negotiation with the past.

Institutions accumulate social technical debt in the same way. A temporary tax preference becomes embedded in business models. A benefit designed for one group creates expectations and industries. A reporting process acquires teams whose jobs depend on it. A corporate exception becomes precedent. Nobody deliberately decided to make the arrangement permanent; dependencies did the work.

This is path dependence through coupling.

The lesson is not that dependencies are bad. Civilization is made of them. Specialization creates enormous value precisely because people and firms rely on one another. The lesson is to notice when dependencies turn a reversible decision into an irreversible architecture.

Good engineers ask whether a change is backward-compatible. Good strategists should ask the same.

If we adopt this vendor, what else will be built around it? If we subsidize this technology, which constituencies will form? If we make this promise, which future choices will become politically impossible? If we store data in this format, what would migration cost? If we build the highway here, what land use will grow around it? If we teach this metric as the definition of success, what behavior will evolve to optimize it?

Reversibility is usually cheapest before dependencies accumulate.

That is why early design choices matter disproportionally. The first version of a product is easy to replace in code but can become hard to replace once customers learn it. The first company process can solidify into culture. The first protocol choice can become a standard. The first city roads influence later development. The first public explanation for a policy can constrain how leaders later retreat from it.

A branch is cheap while it is small.

This yields another useful rule: delay unnecessary merging.

Organizations often rush to standardize because standardization feels like maturity. Sometimes it is. A shared system reduces duplication, makes data comparable, simplifies training, and creates scale. But premature standardization can lock in assumptions before the organization has learned enough. Two teams forced onto one workflow too early may spend more energy negotiating the shared system than learning from their different approaches.

Let the branches reveal something first.

Then merge what deserves to become common.

The discipline of version control is powerful because it puts these ideas into ordinary behavior. Engineers do not need to deliver a lecture on epistemology every morning. The tools make certain habits easy: small changes, recorded rationale, parallel work, review before integration, visible history, reversible effects.

Institutional design is strongest when good epistemology becomes routine in the same way.

A policy sunset clause is version control. A trial period is version control. A staged acquisition is version control. An investment committee that records a thesis and revisit date is version control. A contract that defines milestones before additional funding is version control. A scientific protocol that separates exploratory analysis from confirmatory testing is version control.

The metaphor is not perfect, and we should resist stretching it until everything becomes software. Human systems contain dignity, power, coercion, memory, and physical consequence in ways a code repository does not. You cannot roll back a pregnancy, a battlefield death, or years spent under a harmful policy with a command-line instruction.

That limitation strengthens the argument.

Where the world is less reversible than code, we should borrow the sequencing discipline without borrowing the illusion that consequences disappear.

Branch before the merge. Preserve prior states where possible. Make experiments small enough to learn. Keep histories honest. Detect conflicts before they become systemic. Do not call a decision reversible merely because the decision maker can change his own record of it.

The most useful thing about `revert` is not that it returns software to innocence. It does not. The faulty commit remains part of history. People may have seen the bug. Data may have changed. The team has spent time. The new commit simply creates another state whose effect counters the earlier one.

That is how real return paths work.

They do not give us yesterday.

They give us a better next commit.
