# Trust Is Not Authority

The best employee in the company can still lack permission to sign the contract.

No one finds this paradoxical.

The employee may be brilliant, loyal, experienced, and admired. The company may trust her with sensitive information and difficult clients. None of that automatically makes her an officer authorized to bind the corporation.

Trust and authority answer different questions.

We forget this when systems become intelligent.

A model demonstrates strong performance, so we trust it more. An agent completes tasks reliably, so we give it more tools. A user sees that it rarely makes mistakes and stops reviewing every output. Trust grows through evidence.

This is reasonable.

The mistake is allowing growing trust to silently expand the domain of legitimate action.

A system can be trustworthy and unauthorized.

It can also be authorized and untrustworthy.

The first distinction protects principals from overreach.

The second protects everyone from the assumption that a formal grant guarantees competence.

Security and governance discussions often blend these concepts because the language itself is overloaded. “Trusted system” can mean technically inside a security boundary, believed to behave correctly, authorized to access resources, or relied on by other systems. Zero-trust architecture was partly a response to one version of this confusion: network location should not confer implicit trust.

Agentic systems need a parallel correction.

Behavioral reliability should not confer implicit mandate.

Consider an executive assistant who has worked for a chief executive for ten years. She knows the executive’s preferences better than many colleagues do. She can anticipate scheduling choices, distinguish serious requests from noise, and represent the executive in routine interactions.

Her trust is high.

Suppose the company enters acquisition negotiations. The assistant can still be highly trusted while lacking authority to communicate a binding offer, disclose particular information, or accept terms.

The novel context shortens the half-life of ordinary assumptions about what “handle it” means.

Competence did not decline.

The stakes and mandate changed.

Autonomous systems will encounter the same boundary, but software products have an incentive to blur it because capability feels like progress.

The agent now can book travel.

Now it can pay invoices.

Now it can negotiate purchases.

Now it can sign forms.

Each capability is marketed as a new level of autonomy. The user’s growing comfort with prior behavior becomes evidence for enabling the next action.

The progression can be sensible if each step includes a fresh grant appropriate to the consequence.

It is dangerous if trust is treated as a permission gradient.

“I trust this agent” is not a complete authorization statement.

Trust it to do what?

For whom?

Under which conditions?

With which consequences?

Until when?

Those questions turn trust into a relationship instead of a halo.

Recent work on agent systems has begun to formalize dynamic trust. One 2026 Internet-Draft on Progressive Trust describes trust scores that can decay over time and uses a configurable half-life. It is thoughtful adjacent work, and it makes an important distinction: trust decay is not the same thing as authority reduction.

That distinction is central here.

An actor’s trust can decay because evidence is old, behavior is uncertain, or the operating environment changed. Authority can narrow for a different reason: the purpose or conditions of the grant changed even if the actor remains completely trustworthy.

The two can move independently.

Suppose an agent has performed thousands of refunds correctly. Its trust is high. The company changes policy so that refunds above a certain amount now require a fraud review because a new attack is underway.

The agent has not become less trustworthy.

Its authority narrows because the world changed.

Now reverse the case. The policy remains unchanged, but the agent begins making unusual errors. Authority may remain formally broad while trust falls. The organization should probably narrow what the agent can execute until reliability is restored.

Same operational result.

Different reason.

The reason matters because it determines renewal.

If trust fell, the system may need new performance evidence, testing, supervision, or a model change.

If authority fell, the system may need new consent, changed scope, updated policy, or a renewed principal decision.

Treat the causes as interchangeable and the organization may solve the wrong problem.

A user cannot repair stale consent by showing that the agent has a good benchmark score.

A company cannot repair poor reliability by obtaining another manager approval.

Trust and authority require different evidence.

This distinction also protects agents and employees from arbitrary suspicion.

When a mandate expires, organizations often behave as though the actor did something wrong. Access is removed. A process stops. The language of security makes the event sound defensive.

Autonomy half-life offers a more neutral interpretation.

Authority can decay because the world changed.

The actor may have performed flawlessly.

That framing matters in human organizations because it reduces the stigma of asking again. A team can accept that an old mandate no longer fits without interpreting the change as a vote of no confidence.

It matters in product design because users are more likely to understand a narrow reauthorization request when the system explains the changed condition rather than saying “We no longer trust this agent.”

Trust language is powerful and often unnecessarily personal.

Authority language is structural.

The distinction becomes even more important when the principal is not the only person affected.

A user may trust an agent to share her own data. That trust does not authorize the agent to share someone else’s data contained in the same document. An employer may trust a manager to use employee information responsibly. The manager’s trustworthiness does not erase legal or contractual limits on use. A government may trust an official’s judgment. The official still acts under law.

Authority can arise from multiple sources.

The principal’s confidence is only one.

This is where agent systems designed as “user assistants” can become misleading. The user appears to be the principal, but the agent operates across systems containing rights and obligations belonging to employers, customers, counterparties, platforms, and other people.

The user cannot delegate what the user does not own.

Trust in the user does not change that.

A well-designed agent therefore needs to distinguish user intent from resource authority.

The user may intend to send an attachment. The document may be classified. The user may intend to refund a customer. Policy may require a second approval. The user may intend to delete records. Retention obligations may prohibit it.

The agent is not disobeying the user when it respects those higher-order mandates.

It is recognizing that authority is layered.

This complicates the half-life metaphor because there may be several grants with different persistence.

A user’s task authorization may expire in an hour.

An employment role may last years.

A legal prohibition may remain until law changes.

A customer’s consent may be purpose-limited and revocable.

A technical credential may last fifteen minutes.

The action is legitimate only where these layers overlap.

The shortest relevant mandate can control the consequence.

Again, this is not a universal law. Some legal authorities supersede individual preferences. Some obligations persist despite revocation. The point is that “the user said yes” cannot be the entire authorization model for actions embedded in larger institutions.

Trust can also create a dangerous form of delegation inflation.

A principal begins by trusting an actor in one domain. Success becomes evidence of character. Character becomes evidence for broader responsibility.

Human organizations do this constantly. A successful founder is assumed to understand every function. A star salesperson becomes a manager. A respected engineer receives security authority. Sometimes the transfer works. Sometimes skill does not travel.

Agent systems can accelerate the same halo effect because competence appears unified behind one conversational interface.

The same agent writes well, summarizes well, codes well, schedules well, and searches well. The user experiences one identity.

Underneath, different tools and models may have radically different error modes and consequences.

Trust should therefore be scoped too.

Reliable drafting is evidence for reliable drafting.

It is not automatically evidence for financial discretion.

Reliable financial calculations are not authority to trade.

Reliable legal summarization is not authority to give binding legal advice or sign a contract.

A single trust score can hide these distinctions.

This is a reason to be cautious with quantified trust systems even when they are useful operationally. A number invites portability. “Trust 0.92” sounds like a property of the actor.

Trust is usually conditional.

The actor is reliable for a class of actions under a class of conditions.

Autonomy half-life has the same structure.

Authority is not a battery level inside the actor. It is a relationship between actor, action, purpose, principal, and world.

The metaphor should not tempt us into creating one scalar that pretends to summarize the relationship.

There may be cases where scores are useful for routing or policy. Fraud systems score risk. Security systems assess device posture. Agent frameworks may calculate confidence. The danger is letting the score become the explanation.

A reviewer should be able to ask what changed.

The supplier changed.

The model version changed.

The task moved from drafting to executing.

The user’s role changed.

The data classification changed.

The environment moved outside validation.

These facts support judgment more clearly than “authority score fell from 78 to 61.”

Scores compress. Birth certificates explain.

There is a deeper moral reason to separate trust from authority.

Trust is often relational and voluntary. Authority can be coercive.

A manager can possess authority over an employee without being trusted by that employee. A court can issue an order to a party that distrusts the court’s judgment. A regulator can act under law despite opposition from a regulated firm.

Conflating authority with trust can obscure the sources and limits of legitimate power.

The agent world inherits this problem when designers say an agent should act only when “trusted.” Trusted by whom?

The user?

The platform?

The organization?

The affected third party?

These actors can disagree.

Authority resolves some disagreements through institutional rules. Trust does not.

This is another reason autonomy governance cannot be reduced to reputation systems.

A highly reputable agent still needs the right mandate.

A low-reputation actor can still possess a legal right that others must respect.

The book’s argument is therefore more conservative about trust than the technology industry often is.

Use trust to decide how much ordinary variation a delegate can safely absorb.

Use demonstrated reliability to widen operational discretion where the principal is entitled to widen it.

But do not let trust silently rewrite purpose, consent, law, ownership, or the identity of affected parties.

Those are authority questions.

The distinction improves renewal design.

When a trusted actor encounters a changed mandate, the renewal can be lightweight because competence is not in dispute. The system can say: “You are still trusted to perform this class of work. The recipient changed, so this action needs fresh approval.”

When an actor’s reliability is in doubt but the mandate remains, the system can keep the purpose alive while narrowing execution: “The task remains authorized, but this system now requires review before sending.”

These are different degraded states.

They should feel different to the people involved.

A mature autonomy system will eventually need to represent both.

The industry will be tempted to collapse them because one number and one state machine are easier.

Resist that temptation where consequence matters.

Trust tells us something about the actor.

Authority tells us something about the relationship.

Autonomy is safe only when both are alive enough for the action in front of us.

Trust also has a source problem.

Evidence of reliability is never generic.

Who observed the actor?

Under what conditions?

For how long?

With which incentives?

A system that performed well in a sandbox has earned evidence about sandbox behavior. A model that performed well when humans reviewed every decision has not necessarily earned the same trust when review disappears. An employee who handled one product line well has evidence of competence in that environment, not a universal certificate of judgment.

We routinely erase this provenance when we say an actor is trusted.

The adjective detaches the conclusion from the conditions that produced it.

Autonomy half-life should resist that detachment just as it resists context-free authority.

Trust has its own birth certificate.

That certificate might include the task class, environment, level of supervision, model version, data distribution, failure history, and consequence scale under which reliability was observed.

When those conditions change, trust evidence can become stale even before authority changes.

This is where trust decay and authority decay can interact without becoming identical.

Suppose an agent has a live mandate to process customer refunds under a policy that has not changed. The company upgrades the model to a new version with little production history.

The authority remains.

Trust evidence weakens.

The appropriate response may be to keep the mandate while moving execution into a more supervised or reversible state until new reliability evidence accumulates.

Now suppose the opposite. The same highly proven model receives a new authority to negotiate employment offers.

Trust in the underlying model may remain high for language and planning tasks.

Authority is new and the consequence domain is different.

The system should not use broad model trust as evidence that the new mandate deserves broad autonomy immediately.

These cases show why a two-axis view is often more useful than one confidence score.

One axis asks: how much evidence supports the actor’s reliable performance for this task class under these conditions?

The other asks: how much current authority supports this action for this purpose under these conditions?

High trust, high authority can justify wide autonomy.

High trust, weak authority suggests capable preparation with constrained consequence.

Weak trust, strong authority suggests supervision, redundancy, or narrower execution while the task remains legitimate.

Weak trust, weak authority is the obvious case for stopping or rethinking the system.

This does not need to become a literal matrix in every product. The conceptual separation prevents organizations from repairing one dimension with evidence from the other.

Trust can also be manufactured socially.

A polished interface creates trust. A familiar brand creates trust. Fluent language creates trust. A system that confidently explains its reasoning can feel more trustworthy than a less articulate system with better measured performance.

Humans use presentation as evidence because in social life confidence, coherence, and reputation often carry information.

With generative systems, those cues can become weakly connected to actual reliability.

This matters for authority because perceived trust is often what causes users to widen permissions.

The agent sounds competent, so the user lets it send rather than draft. It handles email well, so the user lets it manage money. It gives sensible advice, so the user assumes it understands private social boundaries.

The interface becomes an authority acquisition channel.

Product design should therefore make consequence boundaries explicit even when the agent appears highly competent.

The system should not rely on user skepticism as the final authorization control.

People become less skeptical precisely when the product works well.

Success can reduce supervision faster than the mandate architecture improves.

This is one reason trustworthy systems need stronger authority design, not weaker authority design.

The more users rely on the actor, the more easily implicit permission expands.

Trust can create complacency around scope.

The mature response is not to make the agent look less capable.

It is to make the transition from trust to authority deliberate.

“You have seen me draft these messages successfully” is evidence for less review during drafting.

It is not consent for me to contact new recipients.

“You have seen me reconcile invoices accurately” is evidence for broader analysis.

It is not a durable right to send money to a changed bank account.

“You have seen me operate production safely” is evidence for ordinary autonomy inside known conditions.

It is not proof that I may improvise outside the validated regime.

This distinction becomes more important as agents develop reputations across tasks and organizations.

A future agent identity may carry a history: completed jobs, evaluations, certifications, incident records, customer ratings, model provenance. That history can support trust.

It should not function like a universal passport to authority.

A five-star contractor still needs a contract.

A respected physician still needs patient consent and lawful scope of practice.

A highly rated financial adviser still needs a client mandate.

A famous lawyer still needs to be retained.

Reputation answers whether others have reason to rely on the actor.

Mandate answers whether this principal, in this relationship, grants the right to act.

The difference protects both sides.

It prevents powerful, reputable actors from treating reputation as entitlement.

It prevents principals from treating a formal grant as evidence that the actor is safe enough to exercise it unsupervised.

Autonomy is not produced by trust alone or authority alone.

It is produced by their fit.

And because both can drift for different reasons, the system has to know which one moved before it decides what to do next.