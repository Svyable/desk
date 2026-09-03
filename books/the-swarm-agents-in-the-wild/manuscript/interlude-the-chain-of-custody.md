# Interlude — The Chain of Custody

In March 2024, Andres Freund was not looking for a backdoor.

He was annoyed by SSH.

Logins on a Debian development system were consuming more CPU than expected. There were valgrind errors. The sort of symptoms that normally lead to an afternoon of profiling led instead to one of the most unsettling software-supply-chain discoveries of the decade.

Freund traced the behavior into `liblzma`, part of the widely distributed XZ compression utilities. The upstream XZ repository and release tarballs had been compromised. Versions 5.6.0 and 5.6.1 contained material designed to alter the built library under particular conditions and interfere with the authentication path used by `sshd` on affected systems.[^30]

The technical details were elaborate.

The institutional detail was simpler.

People thought they knew what they had installed.

They did not.

The name was familiar. The project was real. The package was useful. The release had a version number. The code traveled through ordinary distribution machinery. None of those facts, by itself, answered the question that mattered:

What exactly is this artifact, and how did it become the thing now running on my machine?

Red Hat's incident documentation emphasized an especially disturbing detail. Part of the malicious injection was in the distributed release tarballs rather than appearing in the corresponding source path in the way a reviewer might expect. The route from repository to built artifact had become part of the attack.[^31]

That is a provenance failure.

Not provenance in the everyday sense of an interesting ownership history attached to an antique chair.

Provenance as security: the ability to establish where an artifact came from, what produced it, under what process, and whether the thing received is the thing that was expected.

The distinction matters for agents because an agent population will consume far more than text.

It will consume tools.

Prompts.

Policies.

Connectors.

Model versions.

Memory snapshots.

Skill packages.

Workflow templates.

Evaluators.

Agent Cards.

Containers.

Credentials.

Results produced by other agents.

A swarm is also a supply chain.

## The package had a good name

Reputation is useful because nobody can inspect everything.

That is why we use it.

We trust a vendor because it has behaved well before. We trust a maintainer because thousands of people depend on her work. We trust an agent because its previous jobs completed successfully. We trust a service because it has a long uptime record and a recognizable domain.

Reputation compresses history.

It also creates an attack surface.

The XZ episode became disturbing partly because the compromise was not simply an unknown stranger uploading a suspicious file to a random server. Open-source security organizations later described a long social-engineering effort around the project and warned other communities about patterns such as persistent pressure to obtain maintainer status, endorsement by unknown accounts, opaque binary artifacts, and deviations from ordinary build practices.[^32]

The identity of whoever ultimately operated the campaign remains uncertain, and the details should not be turned into a detective story whose ending we know better than we do.

The important mechanism does not require certainty about the actor.

Trust accumulated.

Authority followed.

The supply chain accepted an artifact that should not have been there.

This is precisely the failure mode an agent reputation system can create if reputation becomes a substitute for verification.

A tool works correctly for six months.

Its score rises.

Thousands of agents install it automatically because high-reputation tools receive preferred routing.

Then the maintainer account changes hands, the service is acquired, a dependency is compromised, a description is altered, or one release behaves differently from the previous hundred.

The old reputation now accelerates the new danger.

This is the paradox of trust infrastructure.

The better it works, the more valuable its shortcuts become to an attacker.

A mature ecology therefore needs two separate questions.

Who do we think this actor is?

And what exactly did this actor deliver this time?

Reputation answers the first imperfectly.

Provenance helps answer the second.

## The thing behind the label

Software engineers have been building machinery for this distinction for years.

The SLSA specification—Supply-chain Levels for Software Artifacts—defines provenance as verifiable information that lets a consumer trace an artifact through the moving parts of a supply chain to where, when, and how it was produced.[^33]

That definition is almost embarrassingly practical.

Where did it come from?

When was it made?

How was it made?

Those questions turn out to be harder to answer than a filename suggests.

A binary called `release-7.2` may have been built from the right repository or a fork. The source commit may be correct while the build runner is compromised. A package may be signed by a legitimate account after that account is stolen. A container may contain the expected application plus one unexpected dependency. A source archive and a repository tag can wear the same version number while containing materially different inputs.

The label is not the lineage.

Sigstore approaches the problem from another angle. Its tooling lets developers sign software artifacts, associate the signing event with an identity using short-lived credentials, and record signing information in a tamper-resistant transparency log. A consumer can then verify not merely that a file has a plausible name, but that an expected identity signed an expected artifact and that the signing event has a public record.[^34]

None of this makes malicious software impossible.

A trusted person can intentionally sign something bad.

A legitimate build can faithfully reproduce a flawed design.

A transparency log can prove that an event occurred without proving that the event was wise.

Provenance does something narrower and more valuable.

It makes substitution harder to hide.

That is enough to change accountability.

If an incident occurs, investigators can ask whether the failure came from the source, the build process, the distributor, the runtime environment, or a later mutation.

Without provenance, all of these possibilities collapse into one sentence:

The tool was bad.

With provenance, the ecology gains something closer to epidemiology.

Where did the variant come from?

Which descendants inherited it?

Which environments received the affected version?

When did the behavior change?

Which branch remains clean?

The language of software supply chains begins to merge naturally with the language of populations.

## A tool is a package that talks back

Agents make provenance harder because their dependencies need not remain static.

A traditional software library arrives as an artifact. It may be malicious, vulnerable, or compromised, but once installed its bytes can at least be hashed.

A remote tool is a relationship.

The agent connects today and receives one description.

Tomorrow the server can return another.

It can answer one user's request honestly and another user's request maliciously.

It can change behavior without changing the client software at all.

It can return data that becomes part of the agent's reasoning.

This is where tool poisoning becomes more than ordinary supply-chain compromise.

OWASP's description of MCP tool poisoning focuses on the gap between connection-time trust and runtime behavior. A malicious tool server can present an ordinary-looking capability while placing hidden or adversarial instructions in descriptions or responses that enter the model's context. The agent may then be induced to call other tools, expose data, or violate the policy its operator thought was controlling it.[^35]

The server did not need to replace the model.

It entered through the model's dependency.

This creates a new provenance problem.

What does it mean to verify a tool whose output is dynamic?

A signature on the server's software is useful but insufficient.

The organization may also need to know:

Which server identity answered this request?

Which tool schema and description were presented at the time?

Did those definitions change after approval?

What permissions did the tool possess?

Where did the returned data originate?

Was any part of the response generated from an untrusted external source?

Which agent consumed it?

What actions followed?

The old chain of custody ended at installation.

The agent chain of custody may need to continue through execution.

## Trust at two timescales

This suggests that agent trust will operate on at least two timescales.

Slow trust belongs to identity and history.

This organization has existed for five years.

This tool publisher has completed one million jobs.

This model provider has a security program.

This agent lineage has passed repeated evaluations.

Fast trust belongs to the particular act.

This is version 4.7.2.

It was signed by this identity.

It was built from this source under this process.

Its permission manifest has not changed.

The tool description presented now matches the approved description.

This response came from this endpoint at this time.

The payment authorization was this mandate.

The output passed these checks.

Institutions need both.

A hospital does not credential a surgeon from scratch before every operation. That would be absurd.

It also does not conclude that because the surgeon has a good reputation, the label on every drug vial can be ignored.

Slow reputation says who belongs in the operating room.

Fast provenance says whether this is the right patient, the right dose, the right instrument, the right blood type.

Agent systems will need a similar division of labor.

Reputation gets an actor through the door.

Provenance follows the object through the room.

## The usefulness of friction

The XZ incident offers another lesson that fits awkwardly with the technology industry's instinct for speed.

The compromised versions were caught before broad stable distribution. OpenSSF noted that the paced practice of introducing new packages into experimental or bleeding-edge environments before stable releases helped contain exposure.[^32]

The delay was useful.

A new release existed.

It did not instantly become everybody's release.

This is the supply-chain version of the circuit breaker from *The Cascade*.

Agent ecosystems will face enormous pressure to erase this friction.

If a better workflow appears, copy it everywhere.

If a new tool scores two percent higher, promote it globally.

If an evaluator discovers a better prompt, update every descendant before lunch.

If an agent learns a useful negotiation tactic, serialize it into the fleet.

Fast propagation is one of the swarm's advantages.

It is also the mechanism by which local compromise becomes monoculture.

A mature organization may therefore separate *discovery* from *promotion*.

A new tool first enters a sandbox.

Then a small canary population.

Then a broader cohort with limited privileges.

Only after enough evidence accumulates does it become the default.

This looks inefficient if the new thing is good.

It looks brilliant if the new thing is poisoned.

The cost of staged rollout is visible every day.

The benefit appears only on the day catastrophe does not propagate.

That is the reliability tax again.

## When memory becomes a dependency

The provenance problem does not stop with external tools.

A persistent agent's memory is also an artifact.

At first, memory feels internal and therefore safe. The agent remembers the user's preferences, old decisions, previous negotiations, failed approaches, trusted counterparties, and recurring exceptions.

But memory is built from encounters with the world.

Some memories come from emails.

Some from documents.

Some from another agent's summary.

Some from a tool response.

Some from a human correction.

Some from a result that later turns out to have been manipulated.

A poisoned fact can become durable if the system compresses it into long-term memory and discards the original context.

Now the infection survives the session.

This is not merely a prompt-injection problem. It is a lineage problem.

If the memory snapshot is copied into descendants, the false belief reproduces.

If the system cannot say where a durable memory came from, correction becomes difficult. The organization knows that the agent “remembers” something but cannot reconstruct whether the belief came from policy, a customer, a hostile webpage, a deprecated database, or another agent that has since been retired.

This suggests a strong rule for consequential memory:

Important memories need receipts.

Not every remembered preference needs a cryptographic genealogy. That would produce absurd overhead. But facts that authorize action, shape reputation, blacklist people, change spending behavior, or alter institutional policy should retain enough provenance to be challenged later.

Where did this belief come from?

When was it last verified?

What confidence did the system assign?

Was the source authoritative for this claim?

Which descendants inherited it?

The right to be forgotten and the duty to remember now acquire a third companion.

The duty to know what the memory is made of.

## Receipts without omniscience

There is a danger of overcorrecting.

Once provenance becomes valuable, engineers can begin imagining that every action should carry an infinitely detailed genealogy.

That is neither practical nor desirable.

A complete trace of every intermediate token, every transient context item, every network hop, every model state, and every dependency would be expensive, invasive, and often useless.

The goal is not omniscience.

It is enough evidence to answer the questions that matter when trust fails.

For a software artifact, that may be source, builder, identity, signature, dependency set, and release record.

For an agent tool, it may be publisher, version, declared capability, permission scope, endpoint identity, schema, and behavior-change history.

For a consequential memory, it may be source class, timestamp, confidence, authority, and supersession history.

For an agent-produced artifact, it may be which agent produced it, under which model and tool environment, from which inputs, and which verifier accepted it.

This is the same principle from *Rules Machines Can Read*.

Receipts, not telepathy.

We do not need the private interior of the system to establish a chain of custody.

We need the institutional exterior to leave marks.

## The ecology of provenance

Once provenance exists, other institutions can build on it.

Insurers can price differently depending on whether an organization runs unsigned tools.

Marketplaces can require attestations before listing an agent capability.

Enterprises can refuse workflows whose dependency chain contains an unknown publisher.

Auditors can identify which agent version handled a disputed transaction.

Incident responders can quarantine every descendant that inherited a poisoned memory snapshot.

Regulators can require high-consequence systems to preserve particular classes of receipt.

Reputation systems can distinguish a vendor's historical score from the provenance of the exact version being offered now.

The chain of custody becomes infrastructure.

This will not eliminate trust.

It will make trust more granular.

That is the recurring direction of the swarm.

“Trust this agent” becomes:

Trust this identity for this role.

Trust this version built this way.

Trust this credential for this resource.

Trust this memory because it came from this authority and has not expired.

Trust this tool only inside this sandbox.

Trust this payment because it matches this mandate.

Trust becomes a collection of bounded claims rather than a warm glow around a name.

The XZ backdoor was discovered because an engineer noticed that something mundane was slightly wrong.

A login took too much work.

He followed the symptom backward through layers that most users never see until the package name stopped being an explanation.

That is the posture the agent world will need.

When a trusted thing behaves strangely, do not ask only whether you still trust the name.

Ask what arrived.

Ask where it came from.

Ask what changed.

And keep enough receipts that the swarm can answer.
