# Human Error

For most of the history of computing, “human error” was the thing the machine was supposed to reduce.

The phrase appears everywhere machines meet institutions. A form is digitized so nobody mistypes the number. A control system adds an alarm so an operator cannot forget a threshold. A spreadsheet replaces arithmetic done by hand. A checklist catches an omitted step. An autopilot holds altitude more steadily than a tired pilot. A medication system warns that two drugs should not be combined. We build machinery around human fallibility because human beings are distractible, inconsistent, forgetful, slow at some tasks, overconfident at others, and capable of doing something correctly a thousand times before doing it wrong on the thousand-and-first.

Then generative AI arrived and error acquired a second job.

It became evidence.

A typo could feel reassuring. An awkward transition looked human. A sentence that wandered slightly off course seemed less suspicious than one that landed too neatly. A student who wrote with unusual polish could face a question that an earlier generation of teachers would have considered backward: is this work *too good* to be yours?

The machine had spent decades earning trust by being less error-prone than people. Now a new class of machines became fluent enough that the old asymmetry started producing a cultural inversion. If software could generate smooth prose, polish ceased to be an uncomplicated signal of care. If image models could produce spectacular pictures in seconds, technical finish ceased to prove effort. If a model could answer a routine email perfectly, an imperfect email could begin to look like proof that a person had bothered to type it.

The error became a fingerprint.

This is an understandable response and a terrible foundation for human value.

The problem is easiest to see in education, where the desire to know who did the work is legitimate and the evidence is often weak. Schools cannot simply stop caring whether a student wrote an essay. The essay may be a means of evaluating reading, argument, synthesis, style, or the student’s ability to make a claim and defend it. If the assigned work is outsourced in a way the assignment forbids, something important has been bypassed even when the final paragraph is excellent.

So the institution looks for a test.

The appeal of an AI detector is obvious. Paste in the text. Receive a judgment. Human or machine. The administrative problem seems to collapse back into the old checkbox.

It does not stay collapsed for long.

OpenAI released a classifier for indicating AI-written text in early 2023 and explicitly warned that it was not fully reliable. In the company’s own evaluation on a challenge set, the classifier identified 26 percent of AI-written text as “likely AI-written” while incorrectly labeling human-written text that way 9 percent of the time. By July of that year, OpenAI had discontinued the classifier because of its low rate of accuracy.

The numbers are useful not because they settle the general question of detection for all future systems. They do not. Detection methods change. Models change. Watermarking, provenance, platform-side signals, process evidence, and other approaches are separate technical questions. The numbers are useful because they reveal how dangerous a binary cultural expectation can become when the underlying evidence is probabilistic.

A 9 percent false-positive rate is an evaluation statistic until the false positive has a name.

Then it is an accusation.

Research published in *Patterns* in 2023 made the asymmetry more uncomfortable. Weixin Liang and colleagues tested several GPT detectors on writing by non-native English speakers and found substantial bias. In their evaluation, detectors frequently classified human-written TOEFL essays as AI-generated. The authors connected the problem to lower perplexity in the writing: prose with more predictable word choices could look more machine-like to systems using that kind of signal.

A detector therefore risked converting linguistic difference into suspicion.

The student whose English followed more regular patterns was not less human. The detector had simply found features that, in its design and data, overlapped with features associated with model output.

This sounds obvious when written slowly.

It can become much less obvious when a system produces a confident-looking score.

People have a long history of mistaking the precision of an interface for the precision of the underlying judgment. A number with two decimal places feels more settled than a teacher saying, “Something about this does not sound like the student’s previous work.” The number can be useful. It can also hide uncertainty behind typography.

The deeper problem is not a particular detector.

It is the desire for human error to become machine-readable proof of personhood.

Suppose, for a moment, that we could build a detector that noticed stylistic regularities with high accuracy in a controlled setting. The existence of the detector would change behavior. People who wanted to evade it would rewrite. Models would be prompted to vary sentence length, include colloquial language, add mistakes, imitate nonstandard syntax, or reproduce the stylistic artifacts the detector associated with human writing. Detection and evasion would become an arms race because passing the test has value.

The performance of humanness would be learned by machines.

Again.

This is the CAPTCHA story at the level of prose.

If the tell is imperfection, imperfection becomes producible.

If the tell is unpredictability, unpredictability becomes a target.

If the tell is revision history, fake revision history becomes worth generating.

If the tell is personal detail, synthetic personal detail becomes attractive.

A test that rewards visible humanity creates incentives to manufacture visible humanity.

The obvious response is to keep moving toward evidence that is harder to fake. Sometimes that is exactly what institutions should do. A laboratory needs a chain of custody. A court needs rules for evidence. A school may ask a student to discuss the argument orally, show notes, cite sources, or complete portions of work in a supervised setting. An employer may care about audit trails for a consequential decision. Process can matter.

But the purpose of the process should be remembered.

We are trying to establish authorship, learning, responsibility, or provenance.

We are not trying to reward bad writing because bad writing is human.

That distinction matters more than it sounds.

A culture that associates humanness with imperfection will eventually ask people to preserve the wrong imperfections.

There is already a market for the handmade, the hand-drawn, the live, the raw, the unfiltered, and the visibly imperfect. Some of this predates generative AI by centuries. A pot can be valued partly because the maker’s hand is visible. A live performance can matter because every note is not guaranteed. A handwritten letter can be treasured because the person’s physical act is inseparable from the object. None of those values require pretending the flaw is the point.

The point is the relationship between the maker and the thing.

A wobble in a ceramic bowl may carry evidence of the process, but a potter does not become more human by making worse bowls.

A singer’s breath can make a performance intimate, but missing the melody does not automatically make the song more authentic.

A writer’s odd sentence can be distinctive, but a typo is not a soul leaking through the keyboard.

Human error can be meaningful without being sacred.

The phrase “human error” itself is worth inspecting because it often performs too much explanatory work in the opposite direction. When something fails in a complex system, calling the cause “human error” can make the investigation feel finished. The operator pushed the wrong button. The nurse entered the wrong number. The driver missed the signal. The analyst copied the wrong cell.

The person made an error. That fact may be true.

It may also be the beginning of the explanation rather than the end.

Human-factors and safety research has spent decades insisting on this point in different forms. If a system makes a predictable kind of mistake easy, frequent, hard to detect, and catastrophic, blaming the final person in the chain is not a sufficient design philosophy. Why were two dangerous controls adjacent? Why did the interface present the same warning so often that people learned to dismiss it? Why did the schedule produce fatigue? Why was the procedure brittle? Why did the organization depend on one person never forgetting a step?

The phrase “human error” can hide the system around the person.

The phrase “AI error” can do something similar.

A model produces a wrong answer, and we speak as though a small agent inside the system made a discrete bad decision. In practice, consequences depend on the surrounding architecture. Was the output advisory or automatic? Was it checked? Did the interface communicate uncertainty? Could a user appeal? Was there a second source? Was the task appropriate for the model? Did the organization deploy the system in a context where error was cheap or one where error could seriously harm someone?

A mistake does not belong only to the entity that emitted the last visible action.

That is true of people and machines.

It is also why “humans make mistakes” is not enough to distinguish us.

Machines make mistakes too, though not necessarily for the same reasons. They fail in different distributions, under different conditions, with different levels of self-awareness and different possibilities for responsibility. A calculator can produce the wrong result if the input is wrong. A language model can produce a plausible falsehood. A vision system can misclassify an object. A software service can behave perfectly according to a flawed requirement. A machine can fail deterministically or probabilistically. It can fail in ways a person finds obvious and succeed in ways a person finds astonishing.

The important thing is not that both sides err.

The important thing is that error tells us about the system only when we know what kind of error it is.

A human typo may indicate haste, unfamiliarity, distraction, disability, second-language writing, motor error, indifference, or nothing worth interpreting. The same visible mistake can have many causes. A machine-generated typo may be intentionally prompted, stochastically produced, copied from source material, or inserted to satisfy an evaluator. Surface imperfection is weak evidence because causes are many.

We should have learned this from people long before machines made it urgent.

Consider the familiar social ritual of pretending not to care too much.

A carefully composed message is rewritten to look casual. Punctuation is removed. A response is delayed because answering immediately might reveal eagerness. A photograph selected from twenty attempts is posted with a caption designed to feel spontaneous. A presenter rehearses until the delivery no longer sounds rehearsed.

Humans already manufacture naturalness.

We perform spontaneity.

We edit authenticity.

We insert the little roughness that makes effort invisible.

Generative AI did not invent this. It merely became another participant in the same signaling game.

Once that is visible, “human error” starts to look less like a fingerprint and more like one style of evidence among many, often ambiguous and easy to manipulate.

Error also has a distribution, and distributions matter more than averages when consequences are uneven.

Imagine two systems with the same overall error rate.

One makes small mistakes across almost everybody.

The other is extremely accurate for most people and repeatedly wrong for a narrow group whose language, body, documents, work patterns, or circumstances sit outside the common case.

The headline number can be identical.

The social system is not.

This is why an error rate is never the whole policy question. Somebody chooses which error matters more. Somebody chooses the threshold. Somebody decides whether uncertainty produces a warning, a delay, a denial, or an accusation. Somebody decides whether a person can recover when the system is wrong.

The cost of error belongs to a biography.

A mistaken movie recommendation wastes two hours.

A mistaken fraud flag may freeze money needed for rent.

A mistaken plagiarism accusation can alter a student’s record.

A mistaken medical classification can delay care.

A mistaken hiring filter can become invisible because the applicant never learns the opportunity existed.

The same statistical word—error—covers radically different human events.

This is one reason institutions need error budgets with moral dimensions, not merely technical ones.

What happens when we are wrong?

Who absorbs the cost?

Can the action be reversed?

Is a false positive merely friction, or does it carry stigma?

Does the person learn that a model was involved?

Can they present context the model did not have?

Does correction repair the downstream record, or does the original flag keep traveling?

A system that answers none of these questions has not solved error by becoming accurate.

It has only made error rarer and perhaps harder to contest.

There is a dangerous psychological effect in very reliable systems too.

When the tool is wrong only occasionally, the human reviewer may become less prepared to disagree. The machine earns trust honestly by being right. That trust then changes the conditions under which the rare failure is encountered.

The odd result is that better automation can make the remaining error more organizationally difficult.

The person reviewing it has fewer examples of failure.

The institution has more confidence in the pipeline.

The affected person looks more exceptional because “the system is almost always right.”

Reliability can become social evidence against the person challenging it.

This is not an argument for keeping systems unreliable so humans stay alert.

It is an argument for designing correction as a normal part of reliable systems rather than as an embarrassing exception.

Airplanes have checklists not because pilots are expected to fail constantly but because rare failures matter. Financial systems reconcile accounts not because every entry is wrong but because small mismatches can compound. Scientific methods preserve replication and correction because confidence should remain revisable.

A mature AI system should have the same humility around its residual errors.

The system can be excellent.

The appeal can still be real.

The correction can still propagate.

The person can still be treated as a person rather than as noise in the metric.

So what should matter instead of error-as-proof?

The temptation is to answer with a list of uniquely human virtues and start another retreat. Judgment. Empathy. Creativity. Accountability. Context. Relationship. Each word can matter. None should be used carelessly as a permanent benchmark that machines are forbidden to approach.

Accountability is different from the others in one useful respect.

It is not merely a capability.

It is a social position.

When I sign my name to work, I do more than claim that my fingers produced the words. I say that the work can be brought back to me. I can be asked what I meant. I can be corrected. I can defend a choice. I can admit that a source was weak. I can revise the argument. I can be embarrassed by what I published last year. I can owe somebody an apology. I can be held to a standard that persists after the moment of generation.

The important human contribution is not that the artifact contains a detectable mistake.

It is that there is a person who can answer for the artifact.

This does not solve authorship disputes automatically. A person can take responsibility for work produced with tools. A person can falsely claim responsibility for work they did not meaningfully inspect. A team can share responsibility. An institution can diffuse responsibility until nobody feels it. The social arrangement needs design.

But it gives us a better question than “does this look imperfect enough to be human?”

Who stands behind it?

What did they do?

What do they understand?

What are they representing about the process?

What happens if it is wrong?

Those questions are slower than a detector score.

They are also closer to what we actually care about.

A student assignment is not valuable because a student makes human-shaped mistakes. It is valuable because the student is supposed to practice and demonstrate something. If a tool performs the practice for them, the learning objective may be missed. If the assignment allows the tool and asks the student to evaluate, edit, cite, or defend the result, then different learning is being measured. The honest issue is task design.

A journalist’s article is not valuable because the prose contains idiosyncratic punctuation. It is valuable because the reporting was done, the claims are sourced, the editor can verify them, and identifiable people and institutions accept responsibility for correction.

A physician’s note is not valuable because it was typed unaided. It is valuable because it accurately represents the encounter, supports care, and remains under professional responsibility.

A love letter is different again. There, process may be part of the meaning. If the recipient cares that the words came through the writer’s own struggle rather than from a template, that preference is not irrational. Relationship changes what authorship means. Delegation can alter the gift even if the final sentence is beautiful.

The same tool can therefore be acceptable in one context and corrosive in another.

This is precisely why universal proof-of-human tests are attractive and inadequate. They promise to solve a contextual question with a general classification.

Human or machine.

But the real question is often: what kind of human involvement did this situation require?

That question cannot be answered by worshipping error.

In fact, treating error as evidence of personhood can punish exactly the people who have spent years learning to make fewer errors.

A second-language writer studies until grammar becomes precise, then gets told precision looks synthetic.

A junior employee learns the house style, then gets told the prose is too generic.

An autistic person writes with regularity and gets treated as suspicious because a detector expects a different distribution of human expression.

A meticulous student revises away the roughness that would have served as an alibi.

The problem is not merely technical bias. It is a cultural model of humanity that assumes the normal human is a particular kind of messy.

People are messy in incompatible ways.

Some are astonishingly consistent.

Some are formal.

Some are terse.

Some write sentences that sound like policy documents because they have spent fifteen years writing policy documents.

Some use clichés because they like them.

Some hate contractions.

Some use too many contractions.

Some learned English from textbooks and produce grammar cleaner than native speakers who learned it at kitchen tables.

Some make the same error every time.

Some revise obsessively until almost no trace of the first draft remains.

There is no single human texture.

This is where the machine-comparison game becomes particularly dangerous. Once a model acquires a style, people whose natural style overlaps with it can become collateral damage. The model does not steal their humanity. The classifier steals social confidence in their evidence.

The right response is not despair.

Institutions can use richer evidence. Teachers can know students over time, design assignments with stages, ask for source trails, hold conversations, and make accusations only when evidence justifies them. Publishers can care about provenance and editorial process rather than vibes. Employers can define acceptable tool use before judging outputs after the fact. Systems can communicate uncertainty instead of converting probabilities into verdicts.

None of these approaches is frictionless.

That is the point.

Human judgment is expensive because consequential distinctions are sometimes genuinely hard.

We should be suspicious when a difficult question about responsibility becomes suspiciously cheap.

The title of this chapter has spent most of modern history carrying blame.

Human error.

Now the same phrase is being asked to carry proof.

Human error.

Both uses make the person too small.

Error is not where humanity resides. It is where limitations become visible. What matters is what happens around the error: whether someone notices, whether the system catches it, whether the person learns, whether the institution changes, whether the harm can be repaired, whether responsibility can travel backward through the chain instead of stopping at the last pair of hands.

A mistake can become part of a human story because a person can live after it.

That sounds sentimental until you consider how much of adult identity depends on exactly this fact. We remain legally and socially continuous with earlier versions of ourselves who believed things we no longer believe, made decisions we now regret, failed people we care about, misunderstood situations, chose badly, or simply did not know what we know now.

We do not prove our humanity by making the mistake.

We live it by having to answer for what comes next.

That brings us to the first of the title’s other stories.

It is a sentence we use to gather influence, habit, circumstance, uncertainty, and consequence into two words sturdy enough to carry responsibility.

I chose.
