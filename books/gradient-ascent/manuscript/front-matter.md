# Gradient Ascent

*Hiding Signal in Artificial Noise*

**@svyable**

---

There is an old way to hide a fact.

You remove it.

Burn the document. Delete the file. Threaten the witness. Block the broadcast. Lock the archive. Put the inconvenient number in a drawer and make sure the meeting ends before anybody asks for it.

There is another way.

Leave the fact exactly where it is and manufacture ten thousand things around it.

Not necessarily ten thousand lies. That would be too easy. Lies invite rebuttal. They create a contest with two visible sides. A sufficiently motivated reader can ask which claim is true.

The more interesting material is plausible.

It has headings. It has charts. It has footnotes. It has the tone of a competent person who has already considered the obvious objections. It arrives in several formats. It can be summarized, translated, shortened, lengthened, illustrated, narrated, and repackaged for every audience before the original fact has finished loading in somebody else's browser.

Some of it is right. Some of it is wrong. Much of it is beside the point.

That mixture is the problem.

A signal can disappear without ever becoming unavailable.

It only has to become expensive to distinguish from everything that resembles it.

For most of the internet's history, publishing was cheap but producing convincing material still carried friction. A person could start a website for very little money, but filling it with a thousand competent articles was another matter. A company could create a report, but ten reports required time. A political campaign could make talking points, but tailoring them to every neighborhood, profession, age group, language, and objection required people. A seller could write fake reviews, but scale had costs. A student could bluff through an essay, but bluffing through a hundred different essays still consumed a hundred stretches of attention.

Generative systems change that friction.

They do not make truth impossible. They make form cheap.

A convincing surface can now be produced at industrial speed: the memo shape, the expert tone, the customer review, the personalized explanation, the legal-sounding objection, the comparison table, the code comment, the research summary, the friendly answer, the stern answer, the answer that sounds as though it has no agenda at all.

This is useful. It is also destabilizing.

The same machinery that lets a small company translate its help center into twelve languages can let somebody fill a search index with low-value pages. The same system that helps a scientist explore alternative explanations can produce a polished account of evidence that does not exist. The same tool that gives a student a patient tutor can produce performance that no longer tells a teacher what the student understands. The same model that makes a government form intelligible can make a fraudulent message look unusually competent.

The point is not that artificial intelligence corrupts every artifact it touches.

The point is that it lowers the price of resemblance.

Once resemblance gets cheap, appearance loses informational value.

That is the problem this book is about.

The title comes from optimization.

Imagine a landscape of hills and valleys. You are standing somewhere on that terrain and want to climb. You cannot see the entire world at once, but you can measure the slope under your feet. So you take a step in the direction that goes upward. Then you measure again. Another step. Another measurement. Repeat the process and, under the right conditions, you ascend.

Machine learning has many more complications than that picture suggests, but the picture is enough for our purpose. Optimization requires an objective. Something has to count as up.

Higher score. Lower error. More reward. More clicks. More purchases. More watch time. More completed tasks. More positive feedback. More benchmark points.

Human institutions do this too.

A school wants learning, so it measures test performance.

A hospital wants health, so it measures outcomes it can reliably record.

A company wants durable customer relationships, so it measures conversion and retention.

A newsroom wants public relevance, so it watches traffic and subscriptions.

A scientist wants knowledge, but careers are partly evaluated through papers, citations, grants, and institutional prestige.

A social platform wants people to find material worth seeing, but the system can observe taps, pauses, shares, comments, hides, follows, and time spent more readily than it can observe whether a person's afternoon was improved.

These measures are not foolish. Institutions need feedback. A goal that cannot be observed at all is difficult to manage.

The trouble begins when the measure becomes easier to optimize than the thing it represents.

Then the climb can continue while the destination changes.

A number goes up. The underlying quality stays flat.

A dashboard turns green. The customer gets angrier.

A benchmark improves. The deployed system still fails on an ordinary edge case.

A post earns engagement because everyone is furious.

A student submits perfect prose and learns less.

A report becomes more polished while becoming less informative.

This is an old problem. People have gamed metrics as long as people have been measured by them. What changes with generative AI is the available production function.

We can now manufacture proxy-conforming material much faster.

If a ranking system rewards a certain shape of page, pages with that shape can multiply. If a hiring process rewards polished applications, polish can be generated. If customers reward a familiar review style, that style can be imitated. If managers reward summaries that sound decisive, decisive summaries become easy. If benchmark tasks become prestigious, enormous effort can flow toward the benchmark until the score no longer means what a casual observer thinks it means.

Optimization does not have to fail to create noise.

It can create noise by succeeding.

That is the phrase I want to keep in view: artificial noise.

Noise here does not mean random garbage.

Random garbage is easy to ignore.

Artificial noise is material shaped by an objective strongly enough to compete with the signal while being weakly connected to the thing the observer actually wants to know.

A thousand templated pages can be artificial noise in a search system.

A wall of nearly identical reviews can be artificial noise in a reputation system.

A flood of confident summaries can be artificial noise inside an organization if nobody knows which ones were checked.

An evaluation suite can become artificial noise if the score survives after the test stops distinguishing the capabilities people care about.

A market can produce artificial noise when everybody learns the same optimization rule and starts expressing it at once.

Even consensus can become noisy.

If it is cheap to generate agreement-shaped language, then seeing many statements that sound alike tells us less about how many independent minds reached the conclusion.

Independence is one of the hidden themes of this book.

Ten witnesses who saw an event are different from one witness copied ten times.

Ten analysts using different data and methods are different from ten summaries derived from the same model output.

Ten customer reviews written after ten purchases are different from ten variations on a prompt.

The surface count can be identical. The informational value is not.

This becomes especially important when generated material feeds back into the systems that generate more material. Researchers have shown, under specific recursive-training conditions, that models trained indiscriminately on outputs from earlier models can lose information about the tails of an original distribution. Rare cases disappear first. The model increasingly learns from a projection of reality rather than reality itself.

The finding does not mean synthetic data is inherently bad. Carefully designed synthetic data can be valuable. It does mean that provenance and diversity of source matter. If a system cannot tell independent observation from recycled projection, volume can masquerade as evidence.

People have the same vulnerability.

We infer importance from repetition.

We infer credibility from fluency.

We infer competence from polish.

We infer consensus from agreement.

We infer popularity from visible activity.

We infer quality from rankings.

We infer understanding from performance.

Each inference can be reasonable. Each can also become less reliable when the visible cue becomes cheap to manufacture.

The result is a new tax on attention.

Every artifact can demand a second question.

Where did this come from?

What observation is underneath it?

How many independent sources are represented here?

Who would know if this were wrong?

What was optimized to produce this answer?

What evidence would have made the answer different?

What part of the claim is measured and what part is inferred?

Who is responsible after the system has finished speaking?

Those questions sound like caution. They are really about economics.

Verification consumes time. Attention is finite. Expertise is unevenly distributed. Some facts can be checked in seconds; others require laboratories, audits, travel, access, interviews, experiments, professional judgment, or waiting for reality to reveal itself.

Generation can scale faster than those things.

That asymmetry is the heart of the book.

If creating a plausible claim becomes one hundred times cheaper while checking the claim becomes only twice as cheap, then the world does not simply receive more information. It receives a larger verification queue.

That queue can be exploited deliberately, but deliberate deception is only part of the story. Plenty of artificial noise comes from ordinary incentives.

A marketing team wants more variations.

A manager wants a dashboard that looks complete.

A student wants to finish the assignment.

A creator wants to keep publishing.

A support team wants faster replies.

A search publisher wants traffic.

An engineer wants the benchmark to move.

A bureaucracy wants every field filled in.

Each actor climbs the gradient in front of them.

Nobody needs to intend epistemic collapse.

The environment can get noisier through local success.

That is why the answer cannot be nostalgia.

We are not going back to a world in which every decent paragraph was expensive. We should not want to. Cheap generation has real benefits, especially for people and organizations that could not afford specialized help. A world in which translation, tutoring, drafting, coding, explanation, and analysis are more accessible can be materially better.

The task is to build better signals for that world.

Some will be technical. Content provenance standards can preserve information about where an artifact came from and how it changed. Cryptographic attestations can make some histories tamper-evident. Detection systems can identify certain patterns. Better evaluations can resist saturation for longer.

None of those eliminates judgment.

A document can have impeccable provenance and contain a mistake.

An anonymous statement can be true.

A human-made artifact can be fraudulent.

A machine-made artifact can be correct.

A cryptographic signature can tell you who signed something without telling you whether they should be believed.

Provenance is evidence about history, not a sacrament.

Other signals will be institutional.

We can design processes that reward independent observation rather than sheer repetition. We can preserve friction at the points where responsibility matters. We can separate drafting from approval. We can sample outputs instead of pretending to review everything. We can ask evaluators to search for disconfirming cases. We can make people state what evidence would change their minds before the dashboard starts moving. We can keep a chain of custody between raw observation and polished summary.

And some signals will remain stubbornly human.

Taste.

Reputation.

A willingness to say, “I checked this myself.”

The memory of how a system fails when the metric still looks good.

The instinct to notice the one observation that does not fit the story.

The patience to investigate something that has not yet become popular enough to trigger a recommendation engine.

The courage to preserve an awkward fact after everybody has learned how to produce a smoother version.

The future of information will not be a contest between humans and machines.

It will be a contest between systems that preserve discrimination and systems that destroy it.

The winners will not merely generate more.

They will know what still counts as evidence after generation is abundant.

They will know when a metric has become a costume.

They will know when consensus is really correlation.

They will know how to keep rare observations from being averaged out.

They will know where to spend verification effort and where to trust automation.

They will know that the loudest channel can contain less information than the quiet one.

A signal can survive in public and still be hidden.

This book is about finding it again.
