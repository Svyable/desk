# Proving Too Much

In 2022, a college student in Florida was flagged by an automated test-proctoring system.

The system used technologies that included facial recognition and eye tracking to detect behavior it considered suspicious. The student had a disability that affected eye movement. According to the U.S. Department of Education’s Office for Civil Rights, the software flagged the student’s behavior, the professor reviewed the video, the student received a failing grade on the quiz, and the student was warned that another incident could lead to expulsion. The federal civil-rights investigation later found that the college had failed to properly handle the student’s disability-related request for an alternative and resolved the case through an agreement requiring changes and training.

The machine had been introduced to help prove something about the test.

The student ended up having to prove something about the student.

This reversal is the subject of the chapter.

Once institutions become worried that machines can impersonate people, write for people, answer for people, attend for people, and act for people, they naturally want stronger proof that a human being is really present and really responsible.

The desire is reasonable.

The methods can become unreasonable very quickly.

A test wants proof that the enrolled student is taking it. An employer wants proof that a remote worker is working. A bank wants proof that the customer is the customer. A platform wants proof that an account represents a real person rather than a bot farm. A publisher wants proof that a submitted work was not fabricated. A government wants proof that benefits go to eligible recipients. A marketplace wants proof that a review comes from a real transaction. A social network wants proof that a million accounts are not one automated influence operation wearing a million names.

Every one of these systems has a legitimate problem to solve.

The danger begins when the proof demanded exceeds the fact that needed proving.

A website needs to know that an interaction is probably not automated.

It does not necessarily need my legal name.

A bar needs to know that a customer is old enough.

It does not necessarily need to retain the customer’s home address.

An employer needs to know that work is being completed.

It does not necessarily need a continuous stream of webcam images, keystrokes, idle time, screen captures, emotional inferences, and location data.

A school needs confidence that a student learned the material.

It does not necessarily need to turn unusual eye movement into evidence of dishonesty.

A publisher may need disclosure of substantial generative assistance.

It does not therefore gain an unlimited claim on every draft, keystroke, revision, private note, and search that produced the final work.

Good proof is specific.

Bad proof expands.

The checkbox at the beginning of this book looks innocent partly because it asks such a narrow question: are you a robot? Even that question has never been quite as simple as the interface suggests, but the visual grammar is restrained. One box. One claim.

The future version can easily become a dossier.

Prove you are a person by scanning your face.

Prove it is your face with liveness detection.

Prove your identity with government documents.

Prove your location because fraud sometimes crosses borders.

Prove your behavior is normal because stolen identities can pass document checks.

Prove the work is yours by exposing the process that created it.

Prove you stayed attentive by allowing continuous monitoring.

At each step, the additional evidence can be defended as a response to a real attack.

The combined system can become more invasive than the original threat.

This is a familiar security problem. Authentication grows in response to adversaries. Passwords become stronger. Then they become unique. Then a second factor is added. Then devices are scored. Then behavior is analyzed. Each layer may reduce a class of fraud. Each layer also creates data, failure modes, exclusion risks, and new institutions with power to decide whether the person at the door counts as legitimate.

Security is not free merely because the price is paid in friction rather than money.

The most important cost may be error.

A system built to distinguish human from machine will make two kinds of mistake. It will let some machines through, and it will keep some humans out.

The first error gets most of the attention because it threatens the system’s purpose.

The second threatens the person.

When the stakes are low, the second error is annoying. A CAPTCHA refuses to believe you saw the traffic light. You try again. When the stakes are high, false suspicion becomes punishment.

AI-writing detectors provided an early warning.

When widely available generative language models entered schools, one obvious response was to build systems that claimed to distinguish generated text from human writing. The desire was understandable. Teachers needed some way to enforce assignment rules in a moment when a student could obtain a fluent essay in seconds.

The technical problem proved much uglier than the administrative need.

OpenAI released its own experimental classifier in early 2023 and withdrew it that July because of its low accuracy. In the evaluation OpenAI published with the tool, the classifier correctly identified only a minority of AI-written text as likely AI-written and also mislabeled some human writing. The company explicitly warned that it should not be used as a primary decision-making tool.

Even more troubling, researchers Weixin Liang, Mert Yuksekgonul, Yining Mao, Eric Wu, and James Zou reported that several GPT detectors they evaluated disproportionately misclassified writing by non-native English authors. In their test set, more constrained language patterns could resemble the statistical properties detectors associated with generated text.

The system was asked to find machines.

It found humans whose English looked insufficiently surprising.

That sentence should stay with us.

Whenever humanness becomes a detectable style, somebody whose humanity does not match the style is in danger.

A student writes plainly.

Suspicious.

A disabled student looks away from the screen.

Suspicious.

A remote worker pauses because thinking does not generate keyboard events.

Suspicious.

A person’s face is difficult for a camera to verify under the available lighting or hardware.

Suspicious.

A writer is too polished.

Suspicious.

An artist is too consistent.

Suspicious.

A human being becomes responsible for generating evidence of human messiness on demand.

That is the absurd endpoint of defining humanity through whatever machines currently fail to imitate.

The machines improve.

The proof ritual gets stranger.

We can already see the incentive. If detectors look for predictable prose, people will make prose less predictable. If systems look for perfectly smooth cursor movement, automation can inject variation. If liveness systems look for blinking, synthetic faces can blink. If proctors look for eye direction, students learn to perform the approved posture. If marketplaces look for review timing, bot networks learn human timing.

Every behavioral test creates a curriculum for the adversary.

The genuine human is then forced into the same curriculum.

This is one reason security systems should prefer claims that can be proven directly over psychological guesses when direct proof is available.

If the question is whether a person controls a cryptographic credential, test control of the credential.

If the question is whether a transaction was authorized, verify authorization through a secure channel.

If the question is whether media came from a particular device or editing history, provenance systems can sometimes attach evidence to that history.

If the question is whether a user is over eighteen, a system should ideally prove the threshold without collecting unrelated identity information.

Behavioral inference may still be useful. Fraud detection would be much weaker without anomaly signals. But an inference should remain an inference rather than quietly becoming a moral fact about the person.

You behaved unlike our expected legitimate user.

That is different from:

You are illegitimate.

The difference is where appeal begins.

The first statement admits uncertainty. The second closes the door.

A humane verification system needs a way to recover when the model is wrong.

That sounds obvious until recovery is treated as an edge case and therefore receives almost no design attention. Companies optimize the main flow. The legitimate user passes. The fraudulent user is blocked. The ambiguous person becomes a support ticket.

But ambiguity is not distributed evenly.

People with disabilities, unusual names, atypical documents, weak internet connections, old devices, changing appearances, nonstandard work patterns, multiple residences, limited access to government records, or language patterns outside the system’s training assumptions can live closer to the edge.

For them, the exception flow is the product.

If the exception flow is humiliating, expensive, slow, or nonexistent, the verification system has made participation conditional on looking ordinary to the model.

This is where “proof of human” can become a sorting machine for standard humans.

The irony is almost too neat.

A system created because machines imitate people ends up requiring people to imitate the system’s idea of a person.

The same risk appears in workplaces.

Remote work weakened some of the physical signals managers once used as proxies for effort. The employee was no longer visibly at a desk. Organizations responded in different ways. Some moved toward outcome-based management. Others adopted software capable of tracking activity, screenshots, application use, location, or other behavioral signals.

The attraction is understandable. If presence is invisible, measure presence.

But presence and productivity are not the same variable.

A developer can stare at a wall for twenty minutes and solve the problem. A salesperson can be away from the keyboard while speaking to a customer. A writer can produce nothing visible while deciding that an entire argument is wrong. A manager can spend a day generating digital activity and accomplish almost nothing.

Metrics do not merely observe work.

Workers adapt to metrics.

Once keyboard activity is evidence of labor, keyboard activity becomes a task.

Once green presence indicators are evidence of availability, people learn to remain green.

Once ticket closure counts are performance, difficult tickets become dangerous.

Once call length is efficiency, human complexity becomes a delay.

Verification becomes production.

The person performs proof of work instead of work.

This is not an argument against measurement. Institutions cannot be run entirely on vibes. Output matters. Reliability matters. Fraud exists. Some workers do misrepresent effort. Some students do cheat. Some accounts are bots. Some applicants are not who they claim to be.

The question is proportionality.

How much of a person should an institution be allowed to observe in order to establish the fact it legitimately needs?

Europe’s AI Act offers one useful contemporary example of a line being drawn. Among its prohibited practices are certain uses of AI to infer emotions in workplaces and educational institutions, subject to limited medical or safety exceptions. The regulation’s recitals point to concerns about scientific reliability, generalizability, discrimination, and the power imbalance in those settings.

The law does not say employers and schools may never observe behavior.

It says some inferences reach too deeply into the person for the claimed purpose.

That distinction matters because the technical future will make more inner-state claims tempting.

Is the student confused?

Is the worker engaged?

Is the applicant honest?

Is the customer angry?

Is the driver distracted?

Is the patient depressed?

Models can produce scores for questions like these. The existence of a score can make the underlying state feel measurable before the science warrants confidence.

A number creates an aura of access.

The person becomes legible in ways the person may not recognize.

This can lead to a particularly invasive form of proving too much: proving not only that I am here and human, but that I am the correct kind of human internally.

Attentive enough.

Calm enough.

Enthusiastic enough.

Sincere enough.

Normal enough.

The workplace has always contained performance. Employees smile at customers when tired. Students look interested when bored. Interviewees manage nervousness. Social life involves presentation. The danger is not that machines discover this. The danger is that institutions start treating probabilistic inferences about presentation as measurements of private mental states.

A face is not a confession.

Neither is a cursor.

The best verification designs therefore practice restraint.

Prove the minimum.

Retain the minimum.

Infer the minimum.

Give the person an alternative path.

Make the consequence of uncertainty proportionate to the evidence.

Do not turn a fraud signal into a character judgment.

Do not ask a person to expose an entire identity when a narrower credential would do.

Do not require continuous surveillance to prove an intermittent fact.

Do not make appeal depend on the same model that produced the original suspicion.

These are not anti-technology principles.

They are good security principles because overcollection creates attack surface.

The database built to prove people legitimate can itself become a target. Biometric data is particularly sensitive because a face or fingerprint is not reset in the way a compromised password can be. Centralized identity systems can improve fraud prevention while also increasing the consequences of breaches, misuse, function creep, or political change.

A system should therefore distinguish identity from personhood whenever possible.

Those concepts sound similar and solve different problems.

Identity asks: which person is this?

Personhood asks: is there a distinct person here at all?

Authorization asks: is this person allowed to do this?

Presence asks: is the person actually participating now?

Authorship asks: what role did the person play in creating this artifact?

Attention asks: did the person meaningfully review it?

Intent asks: did the person mean to authorize the action?

We frequently demand a strong identity proof because we are really worried about one of the other questions.

That can be wasteful and dangerous.

A pseudonymous community may care that each participant is one real person without needing legal names. A petition may need to know signers are eligible constituents. A marketplace may need to know a review corresponds to a purchase without publicly identifying the buyer. A service may need age assurance without a permanent copy of identity documents.

Technical systems can sometimes separate these claims more cleanly than older bureaucracies did.

That is the optimistic side of the story.

Artificial intelligence creates pressure for more verification, but modern cryptography, device security, privacy-preserving credentials, and provenance standards can also make verification narrower. The future does not have to be a choice between trusting everyone and scanning everyone.

We can build proofs that reveal less.

The cultural challenge is wanting less.

Institutions love extra data because extra data promises future usefulness. If we already know the person’s identity, why not retain it? If we already have the webcam feed, why not estimate attention? If we already log work activity, why not score productivity? If we already have voice samples, why not detect emotion? If we already analyze writing, why not estimate personality?

The phrase for this is often function creep: information collected for one purpose gradually becomes useful for another.

The creep is seductive because each new use can sound efficient.

We have the data anyway.

That sentence should trigger suspicion.

Data gathered to prove humanity should not become a general license to govern the human.

The same principle applies to creative work.

As anxiety about generated content rises, writers, artists, students, and professionals may be asked to prove process. Version histories can help. Source files can help. Content credentials can help. Drafts can help. Oral defense can help. But process proof has limits.

A writer’s drafts may contain private names, abandoned ideas, quotations copied for research, political speculation, medical details, or sentences never intended for another reader. An artist’s source folder can reveal references and experiments. A programmer’s history can reveal credentials if handled badly. A student’s notes can include personal material irrelevant to academic integrity.

The institution’s legitimate question may be narrow: did you perform the learning or authorship required by this task?

The evidence can expose much more.

Proving too much is not only a privacy cost.

It can change the work itself.

A person who knows every intermediate step may be audited begins creating for the audit. Drafts become performances of drafting. False starts look suspicious because they are too strange. Revisions are made legible to an imagined investigator. The private space in which a person can be confused, derivative, wrong, ugly, repetitive, or reckless begins to shrink.

But private bad work is part of how good work happens.

We should be careful not to destroy the workshop in order to authenticate the finished object.

This is one of the strongest arguments against a culture of universal AI suspicion.

If every polished artifact requires proof that a human suffered visibly enough while making it, creators will learn to manufacture suffering traces.

If every student must preserve a complete surveillance history to prove learning, education will confuse evidence with obedience.

If every worker must produce constant behavioral telemetry to prove labor, jobs will optimize for legibility rather than value.

If every online participant must attach a government identity to prove personhood, the internet will lose forms of pseudonymity that protect vulnerable speech along with the bots the system intended to exclude.

Security can eliminate more than the threat.

The answer is not trust without verification.

It is verification with a theory of human cost.

What happens when the system is wrong?

Who is most likely to look anomalous?

What unrelated information does the proof expose?

How long is the evidence retained?

Can it be reused?

Can the person choose another method?

Can the claim be proved without revealing identity?

Can the institution explain why the proof is necessary?

Does the strength of the proof match the consequence of failure?

Can a person appeal to someone with actual authority?

These questions should be asked before the first person is falsely accused, not after the press release.

The human being is not a security perimeter.

That sentence is easy to forget because so many systems now treat the person as the last uncertain component. Networks can be encrypted. Devices can be attested. Logs can be signed. Models can be versioned. The human arrives with memory lapses, social engineering vulnerability, inconsistent behavior, changing devices, changing faces, changing intentions, and the irritating capacity to want exceptions.

From the system’s point of view, the person is messy.

From the person’s point of view, the mess is the point.

We change jobs. Lose phones. Age. Travel. Become disabled. Recover. Change names. Change addresses. Learn languages. Forget passwords. Share devices with family. Work at odd hours. Write differently when tired. Look differently after illness. Refuse routines we followed yesterday.

A verification system that treats change itself as suspicion will be secure only for static people.

There are no static people.

The better aim is graceful uncertainty.

When the evidence is strong, proceed.

When it is weak, ask for another form of evidence.

When the consequence is serious, escalate to a human process capable of hearing context.

When the system remains uncertain, admit uncertainty rather than converting it into guilt.

That last move may be the hardest because institutions dislike unresolved cases. Databases want states. Approved. Denied. Human. Bot. Fraud. Legitimate. Pass. Fail.

The person does not become binary because the table requires a value.

The original CAPTCHA offered a clean little drama. A machine doubted you. You clicked a box. The machine believed you. Green check.

The future will not be that simple.

Machines will impersonate people well enough that verification becomes infrastructure. Some of that infrastructure will be necessary. Some will protect us from fraud, spam, synthetic manipulation, stolen accounts, and automated abuse. Some will make online spaces better.

The goal should not be to prevent verification.

It should be to prevent the proof from swallowing the person.

You should be able to prove that you are human without surrendering everything that makes you one.
