# The Verification Tax

The first industrial effect of cheap intelligence is more output.

The second is more doubt.

A person receives a polished report that would once have represented days of work. Was it researched carefully or generated in two minutes? A programmer opens a pull request containing hundreds of lines of competent-looking code. Did anybody understand the architecture before writing it? A student submits an elegant essay. Does the prose demonstrate learning or access to a system that learned elsewhere? A scientist encounters a plausible hypothesis. Is it one of ten carefully considered possibilities or one of ten thousand machine-generated candidates?

When production becomes cheap, production stops proving very much.

Verification becomes the tax on abundance.

This tax is easy to overlook in productivity calculations because it often appears as human time after the machine has apparently finished. The AI drafts quickly. The expert reviews slowly. The system generates a hundred options. The manager must choose. The agent edits code. The engineer waits for tests and inspects the diff. The cognitive work has not disappeared. It has moved from making to checking.

Sometimes checking is cheaper.

Sometimes it is not.

Anyone who has reviewed bad work knows the asymmetry. Creating a plausible error can take seconds. Discovering why it is wrong can take hours. A fabricated citation may fit naturally into a paragraph and send a researcher searching for a paper that never existed. A subtle software bug can hide inside code that looks cleaner than the code it replaced. A legal argument can sound authoritative while depending on a case that does not apply.

Fluency lowers the visible warning signal.

This is a peculiar risk of generative systems. Traditional software often fails loudly. It crashes, returns an error, refuses invalid input. Language models can fail grammatically.

The output remains smooth.

The verification burden therefore depends not only on error rate but on error legibility.

A system that is wrong ten percent of the time in obvious ways may be easier to use than one wrong two percent of the time in ways an expert has difficulty noticing. The second system has better average performance and may create greater tail risk.

Accepted outcome is the right economic unit because acceptance implies somebody or something has decided the work is good enough.

The cost of that decision can dominate.

Software offers a relatively favorable environment because verification can be automated. Code can compile. Tests can run. Type systems can reject inconsistencies. Static analysis can detect classes of error. Benchmarks can compare performance. Sandboxes can contain dangerous behavior. Version control can roll back changes.

The closer a task is to executable truth, the cheaper verification can become.

This is one reason AI coding can progress rapidly even while experienced developers sometimes find current tools irritating. The surrounding field has spent decades building machine-readable ways to say no.

A test suite is a refusal mechanism.

It lets a system try cheaply because failure can be detected cheaply.

Science has a similar structure where experiments provide strong feedback, though the feedback can be slower and more expensive. A chemical exists or it does not. A protein binds under specified conditions or it does not. A physical measurement falls within a range or it does not. Reality grades the hypothesis.

The difficulty is throughput.

If AI generates hypotheses faster than laboratories can test them, experimental capacity becomes the verification tax.

This is already the interesting tension behind AI for science. Systems such as AlphaFold dramatically expanded access to predicted protein structures. DeepMind’s GNoME work generated enormous numbers of candidate materials. These advances can change where scientists spend attention. They do not turn every prediction into a drug or every predicted crystal into a manufactured material.

Prediction creates a queue at reality.

The queue can be valuable. A better ranking of possibilities can improve the experiments chosen. But the experiment remains the boundary between plausible and demonstrated.

A takeoff in science requires the verification loop to accelerate alongside generation.

Automated laboratories matter for exactly this reason. Robots can prepare samples, run assays and record results without a person manually executing every step. Machine-learning systems can choose the next experiment based on previous outcomes. In narrow domains, the loop can become partially closed: propose, test, measure, update, propose again.

The acceleration comes from the cycle time.

If a cycle that once took a week can run overnight, a year contains more learning.

This is a general principle.

Progress depends on the time between a proposal and trustworthy feedback.

Shorten the feedback loop and exploration accelerates.

Lengthen it and cheap generation creates a backlog.

Organizations have feedback loops too, though they are messier.

A sales strategy is not verified by a unit test. A hiring decision can take months to evaluate and even then causality is unclear. A marketing campaign has metrics but confounding factors. A reorganization can produce effects that are debated for years. Leadership decisions often lack clean ground truth.

AI will create more proposals in precisely these domains where verification is hardest.

That may make judgment more valuable rather than less.

The person who can distinguish a clever argument from a useful one becomes a bottleneck when arguments are abundant.

This is the paradox of artificial abundance: the better machines become at producing candidates, the more economic value can migrate toward selection.

The migration will not last forever if machines become good selectors too.

That is the next phase.

An AI system can check another AI system. It can compare an answer with sources. It can run tests. It can search for counterexamples. It can generate adversarial cases. It can score outputs according to policy. It can ask a separate model to critique the first.

Machine verification turns abundance against its own problem.

Instead of spending one expensive human judgment on every cheap machine output, the system spends more cheap machine cognition until the remaining uncertainty is worth human attention.

This architecture will be fundamental to takeoff.

The generation-to-verification ratio can rise dramatically without overwhelming people if verification scales in software.

The catch is correlated failure.

Two models trained on similar data can make the same mistake. A model asked to critique its own output may defend the assumption that caused the error. Several agents can produce apparent consensus because they share architecture, incentives or context.

Redundancy is valuable only when failures are sufficiently independent.

Human institutions know this. An audit is less useful when the auditor is economically dependent on the person being audited. Peer review is less useful when every reviewer shares the same unexamined premise. Checks and balances rely on different roles precisely because independence creates information.

Machine systems need analogous diversity.

Different models.

Different prompts.

Different tools.

Different data sources.

Deterministic checks alongside generative judgment.

External evidence rather than repeated opinion.

The goal is not to create an army of agents nodding at one another.

It is to create disagreement that can reveal error.

This makes verification a design discipline rather than a final step.

A workflow should be built around what can be checked.

If the outcome has no observable standard, perhaps the system should remain advisory. If an action is reversible, the organization can tolerate more experimentation. If an action is irreversible or high stakes, require stronger evidence and narrower authority.

Risk can be priced into autonomy.

This is already how humans operate. A junior employee can draft freely and sign rarely. A surgeon can make decisions an intern cannot. A bank applies more controls to a large transfer than to a small one. A company allows developers to run experiments in a sandbox that would be unacceptable in production.

AI systems need graduated trust.

Verification determines the graduation.

The verification tax also appears in information markets.

As generated text, images, audio and video become abundant, receivers spend more effort deciding provenance. Who made this? When? Was it altered? Does the source have a reputation? Can the claim be traced to evidence?

The old web treated copying as the main problem.

The new web has to treat fabrication as a default possibility.

This increases the value of trusted origin.

A signed dataset can be more valuable than a larger anonymous one. A direct filing can be more valuable than a beautiful summary. A verified human identity can be more valuable when synthetic identities are cheap. Brands, institutions and chains of custody can gain economic importance because they lower verification cost.

Trust is a compression algorithm.

It lets a person accept information without reconstructing the entire proof.

A society cannot independently verify every fact. It relies on institutions, reputations, credentials and procedures to decide what deserves provisional acceptance. AI can weaken some of those signals by making polished output cheap. It can also strengthen them by making checking cheaper.

The competition is between generation and authentication.

If generation wins by too much, information quality degrades.

If authentication becomes equally scalable, abundance remains usable.

This is why provenance standards, cryptographic signatures and secure identity systems belong on the same roadmap as model capability. They do not make models smarter. They make machine output easier to place inside systems of trust.

The workplace version of this problem is particularly concrete.

Imagine an organization where every employee can generate ten times as much written work.

If every employee sends ten times as many documents, the company becomes less productive. The bottleneck moves into reading. If AI summarizes the documents, the company creates summaries of machine-generated documents for people who never needed the documents in the first place.

Automation can manufacture bureaucracy.

The solution is not better summarization.

It is fewer unnecessary artifacts.

This is an important discipline for agentic organizations. The goal should not be to maximize visible output. It should be to complete objectives with less coordination cost. A good agent may generate no report because it updated the system of record directly. It may communicate only exceptions. It may run a hundred analyses internally and show the human one decision with the evidence required to judge it.

Verification should be designed into the information flow.

This is how software systems handle scale. A monitoring platform does not ask an engineer to read every log line. It observes everything, applies rules and models, aggregates signals and alerts when something deserves attention. The engineer receives an exception, not the universe.

Agentic work will need the same architecture.

Observe broadly.

Verify cheaply.

Escalate selectively.

Human attention becomes the final verifier rather than the first.

This architecture has safety implications.

Frontier AI labs increasingly use capability evaluations and safety frameworks to determine when stronger safeguards are required. The details differ among organizations, and the frameworks remain evolving commitments rather than universal law. The shared intuition is relevant: verification effort should rise with capability and consequence.

A system that can assist with ordinary coding requires one level of control.

A system capable of materially aiding sophisticated cyber operations or dangerous biological work demands another.

More capability can make verification more important, not less.

This complicates simplistic takeoff stories in which intelligence automatically removes its own constraints. Some constraints are deliberately added as systems become more powerful.

Safety can lengthen the runway.

That may be a feature.

The mature question is whether safeguards can scale without consuming all the benefit. If every powerful action requires slow human review, high-assurance deployment can become a durable bottleneck. If machine evaluations, monitoring and containment become strong enough, safety can be automated alongside capability.

The race is not between safety and speed.

It is between scalable control and unscalable control.

Scalable control lets the system move fast without making every human a full-time guard.

This is why evaluation science deserves more investment than its public visibility suggests. We need better ways to measure reliability on long tasks, detect deception or manipulation, estimate uncertainty, test robustness under adversarial input and identify capabilities before they appear in unrestricted deployment.

A model can be hard to verify because intelligence is general.

The same flexibility that makes it useful allows it to produce novel failures.

Static checklists eventually meet open-ended behavior.

The answer will probably be layered.

Some checks are deterministic.

Some are statistical.

Some are adversarial.

Some involve human experts.

Some use other models.

Some constrain the environment so failure cannot become catastrophe.

No single verifier needs to be perfect if the system can combine imperfect ones intelligently.

This is the engineering of trust.

It is likely to become a large industry in its own right.

As generation commoditizes, customers will pay for systems that can guarantee provenance, compliance, safety and outcome quality. The verification layer can capture value because it converts cheap possibility into usable certainty.

This is another example of value migrating toward the bottleneck.

When content was scarce, creators captured value.

When content becomes abundant, filters capture value.

When filters become abundant, trusted authority may capture value.

The chain keeps moving.

For the runway, the decisive signal will be whether verification cost falls as fast as generation cost.

If generation becomes a thousand times cheaper but trustworthy checking only becomes twice as cheap, the economy drowns in candidates.

If checking becomes machine-scalable, cheap intelligence becomes composable. Systems can attempt more, reject more and surface only what survives.

That is how experimentation accelerates without overwhelming judgment.

The deepest version of the takeoff loop therefore contains a skeptical machine.

AI proposes.

AI tests.

AI attacks the result.

Reality answers where reality can.

Humans intervene where ambiguity remains.

The next cycle incorporates the feedback.

Acceleration comes not from being right the first time.

It comes from becoming cheap enough to be wrong quickly.