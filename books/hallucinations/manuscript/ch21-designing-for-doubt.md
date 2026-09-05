# Designing for Doubt

Most software is designed to remove doubt.

The button changes state. The transaction completes. The route appears. The message sends. Good interfaces tell users what happened and what to do next.

Generative AI introduces a category of output that may be useful precisely because it is not fully settled.

That makes doubt a design material.

The phrase sounds awkward because product culture usually treats uncertainty as a defect to be hidden or resolved. A loading spinner ends. An error banner should disappear. A confidence warning looks like unfinished engineering.

But uncertainty about a factual claim is not necessarily a software error.

Sometimes it is a correct representation of the world.

The system needs ways to preserve it without making every interaction unbearable.

This is the design problem at the center of trustworthy AI.

Users should not have to read a dissertation about epistemology before asking for lunch recommendations. They also should not receive the same smooth declarative interface when asking whether a contract authorizes a multimillion-dollar obligation.

Doubt should scale with consequence.

This sounds simple until someone has to turn it into product behavior.

What counts as consequence?

Money.

Health.

Legal obligation.

Public publication.

Irreversible action.

Reputation.

Security.

Personal safety.

But consequence is also contextual. A restaurant recommendation can become medically significant if the user has a severe allergy. A calendar time can become consequential if it is a court deadline. A translation can become legal if it is used in a contract.

The model sees language.

The product must infer stakes.

One strategy is to use domain and action boundaries. Systems already know when the user is about to send, submit, purchase, deploy, transfer, diagnose, prescribe, publish, or file. Those verbs can trigger higher evidentiary requirements.

Another is to let users declare the mode.

Brainstorm.

Draft.

Research.

Verify.

Decide.

Act.

The interface can then change what counts as success.

In brainstorm mode, unsupported possibilities are welcome.

In verify mode, a missing source is a failed result.

In act mode, the system may require stronger confirmation at the hinge.

The same model can serve all three if the product preserves the distinction.

This is better than one universal personality performing every epistemic role.

The danger of the universal assistant is not merely that it does many things. It is that the user encounters one conversational style while the task silently changes from imagination to evidence.

Mode makes the contract visible.

Humans use mode constantly.

"I'm just thinking out loud."

"Off the record."

"For the final version."

"Double-check this."

"I need a rough estimate."

These phrases change how language should be interpreted. They permit speculation in one context and forbid it in another.

AI systems can formalize the same move.

The second design principle is source proximity.

Important claims should be easy to walk back to evidence.

Not every claim needs a citation badge. But the path should be short enough that verification competes fairly with convenience.

If checking requires leaving the application, authenticating into another system, locating a document, searching a hundred pages, and interpreting a table, most users will not check.

The machine has already won the attention contest.

A better interface can show the source passage beside the claim. It can highlight the number in the report. It can open the legal clause. It can distinguish the user's statement from the model's inference. It can show that several sources disagree.

Verification becomes inspection rather than recreation.

This is a major productivity gain, not a safety tax.

A common mistake is to imagine responsible AI as adding more work.

Good epistemic design can reduce work by automating the boring parts of verification.

Resolve the citation automatically.

Compare the quotation with source text.

Check the arithmetic with a deterministic tool.

Surface the changed paragraph after a policy update.

Identify that five articles trace to one press release.

Find the contradiction across notes.

These functions can make skeptical work faster than blind trust.

The third principle is preserving alternatives.

A model often has to choose one way to phrase an answer. The interface does not always need to choose one interpretation.

If two strong sources disagree, show the disagreement.

If two causal explanations remain plausible, keep both alive.

If a decision depends on values, show how the recommendation changes under different value priorities.

This is not an argument for false balance.

Evidence can be asymmetric.

The system should say when one interpretation is better supported. The goal is to prevent formatting from erasing live uncertainty.

A chart can show a range instead of a point.

A forecast can show scenarios.

A summary can preserve dissent.

A recommendation can name the assumption that would reverse it.

These are ordinary analytical techniques. Generative systems should make them easier to produce, not replace them with a single conversational conclusion.

The fourth principle is useful interruption.

Most interface interruption is bad. Pop-ups, confirmations, and warnings train people to click through.

A good system interrupts rarely and specifically.

"This action will send the document externally, and the cited source cannot be verified. Continue?"

That is useful.

"AI can make mistakes."

That is background noise.

The warning should name the hinge.

This matters because generic caution becomes invisible through repetition. Users stop seeing banners. Professionals click through disclaimers. The system needs to spend interruption budget where it changes behavior.

The phrase *interruption budget* is useful.

Every product can ask only so many clarifying questions before the user abandons it. Every workflow can require only so many approvals before people route around it. Every warning consumes attention.

Designing for doubt therefore means triage.

Which ambiguity deserves a question?

Which missing fact can safely remain blank?

Which action can be staged instead of blocked?

Which assumption should be exposed without requiring approval?

Which contradiction should stop the process?

These are not questions a model should answer alone. They belong to product design, domain experts, risk owners, and users.

The fifth principle is reversible autonomy.

A system can move quickly when the action can be undone cheaply.

Draft the message.

Create the branch.

Hold the reservation.

Prepare the order.

Mark the database change as proposed.

The interface can make the provisional state visually distinct from committed state.

This is a powerful way to preserve speed without pretending the first interpretation deserves authority.

Version control is one of the great underrated epistemic interfaces.

A code change is not simply true or false. It is proposed, reviewed, tested, merged, reverted. The process preserves history and allows disagreement to become inspectable artifacts.

Many AI-assisted tasks could benefit from similar states.

Drafted.

Sourced.

Verified.

Approved.

Published.

Superseded.

These are not bureaucratic labels for their own sake.

They tell downstream systems how much authority the artifact carries.

The sixth principle is explicit missingness.

A system should not silently turn unknown into null, null into zero, or zero into a plausible value.

Missingness needs representation.

Unknown.

Not applicable.

Not found.

Conflicting.

Not yet measured.

Withheld.

Each means something different.

Databases have struggled with this forever. AI can make the problem worse by filling blanks too elegantly.

A trustworthy interface makes absence legible.

This may be one of the least glamorous and most important features of the AI era.

The seventh principle is counterfactual prompting.

If the user appears committed to a conclusion, the system can ask what evidence would change it.

If a recommendation is strong, the system can surface the strongest plausible failure mode.

If a plan depends on one forecast, it can show the plan under a different forecast.

This creates doubt without theatrical disagreement.

The system is not saying, "You are wrong."

It is saying, "Here is what would have to be true for the other path to win."

That is often a better cognitive tool.

The eighth principle is source diversity with lineage.

Showing three sources is not enough if all three copy the same source.

A good research interface can show not only count but independence.

Primary source.

Independent analysis.

Repetition of primary source.

Contradictory source.

This gives users a better picture of evidence strength than a row of citation icons.

The ninth principle is time.

Truth changes.

A policy is current as of a date. A price is current as of a time. A forecast has a horizon. A person's role changes. A scientific consensus evolves. An election result is preliminary before certification.

The interface should make temporal validity easy to see where it matters.

"Verified from the current policy published August 2026" is more useful than "according to policy."

"Based on sources available as of 10:32 a.m." may be essential in breaking news.

Dates are not clutter when the claim expires.

The tenth principle is correction visibility.

If an answer changes because a source was corrected, tell the user when the difference matters.

Products often prefer silent improvement. Silent improvement is fine for spelling and style. It can be wrong for consequential facts.

A user who acted on the old answer needs more than a better future answer.

The interface should treat correction as part of the relationship.

This is especially important for persistent assistants. If the system remembered something wrong about the user and later corrects it, the user should have a way to see and edit the memory. Hidden memory changes can create invisible behavior changes.

The eleventh principle is calibrated persona.

A friendly voice does not have to sound omniscient.

Warmth and certainty are separate dimensions.

An assistant can say, "I found two plausible readings; the contract language is ambiguous" without becoming cold. It can say, "I couldn't verify that citation" without sounding incompetent. It can say, "You may be right, but the evidence I can access doesn't establish it" without becoming adversarial.

This matters because many users experience excessive confidence as competence.

Product writing can teach a different norm.

Competence can sound like accurate boundaries.

The twelfth principle is inspectable process language.

Words such as checked, verified, remembered, confirmed, calculated, and found should correspond to actual operations.

If the model says it checked, there should be something it checked against.

If it says it remembers, there should be a retrievable record or user-authorized memory.

If it says it calculated, the system should know the inputs and method.

This prevents a subtle form of hallucination in which the interface invents its own epistemic process.

The design language should not pretend the system did more than it did.

All twelve principles point toward the same idea.

Doubt should be structured.

Not sprayed everywhere as generic hedging.

Not hidden everywhere in the name of usability.

Structured doubt appears at the boundary between evidence and action.

It tells the user what is known, where it came from, what is missing, and what would change the conclusion.

This is a more ambitious goal than reducing hallucination rates.

A model can become dramatically more accurate and still live inside a product that trains users to misread residual errors. A product can use a less capable model and still become safer by preserving provenance, enforcing action gates, and representing missingness.

The system is the unit of trust.

This should change how companies compete.

The winning product should not merely be the one that answers fastest or appears most certain.

It should be the one that helps users know when certainty is earned.

That may sound like a slower future.

It need not be.

The point of design is to make good behavior easy.

A seat belt does not require a seminar. A browser's lock icon compresses security state. Version control makes rollback normal. A spell-check underline makes uncertainty local.

AI needs its own equivalents.

Small, legible signals that preserve the difference between plausible and supported.

We will know the design has matured when users stop experiencing uncertainty as the machine failing to answer and start experiencing it as the machine accurately describing the state of knowledge.

Doubt is not a hole in the interface.

Sometimes it is the most truthful thing on the screen.