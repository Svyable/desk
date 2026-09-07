# The Bat Argument

The Egyptian fruit bats were arguing.

That description is deliberately human and therefore dangerous. It suggests motives, emotions, and conversational structure before we have earned them.

So begin again.

In a large dataset of vocal interactions among captive Egyptian fruit bats, Yossi Yovel’s group recorded tens of thousands of vocalizations produced during ordinary social life. The calls were not rare alarm signals or courtship songs selected because their function was obvious. They were the noisy everyday vocalizations of animals sharing roost space: individuals squabbling over position, food, mating access, and proximity.

When researchers analyzed those calls, they found acoustic information associated not only with the caller but with the apparent addressee and the social context. The calls could contain information about who was vocalizing, who was being vocalized at, the type of interaction underway, and aspects of the likely behavioral outcome.

“Bat argument” suddenly becomes less reckless.

Not because bats are exchanging human propositions about justice in the roost, but because social friction can be organized vocally around particular partners.

The addressee matters.

This chapter begins there because addressee may be one of the most underestimated properties of animal communication.

Humans hear a sound and ask what it means.

An animal may hear the same sound and also know who said it, to whom, after what history, from what location, under what social tension.

Meaning can be indexed to relationship.

The Egyptian fruit bat studies are particularly useful because researchers eventually assembled a huge annotated corpus—hundreds of thousands of audio files associated with social context. Animal communication science rarely enjoys datasets remotely comparable to the quantities used in modern speech recognition. Every tagged interaction therefore matters. Who was near whom? What behavior was observed? Which call preceded which action?

This is exactly the kind of material machine learning wants.

It is also exactly the kind of material that can mislead machine learning if context labels are treated as translations.

Suppose a model learns to classify a bat vocalization as “food-related aggression” with high accuracy. A product interface might output *Get away from my food.*

That sentence may be a useful mnemonic for a human.

It may also be wrong in every linguistic detail while preserving the broad behavioral context.

The model has not necessarily discovered a bat phrase corresponding to an English imperative. It may have learned acoustic correlates of arousal, individual identity, position, interaction type, or a combination. The call could change receiver behavior without encoding a proposition humans would express verbally.

The temptation to narrate is strongest precisely when the context is familiar.

We know what it is like to quarrel over food.

We understand crowded sleeping spaces.

We understand social annoyance.

A bat screaming at a neighbor makes emotional sense to us, so we feel licensed to subtitle.

This is the same problem we encountered with dog guilt. Familiar human stories rush into ambiguous animal behavior.

The solution is not to strip the animal of social life.

The solution is to keep description, contingency, and interpretation separate.

Description: a vocalization occurred during a particular social encounter.

Contingency: acoustic features predict caller, addressee, context, or subsequent behavior above chance.

Interpretation: the call functions as a directed threat, protest, request, or other communicative act.

The third layer becomes stronger when experiments manipulate signals and receivers respond in predicted ways.

The bat corpus gives us another insight less obvious than “animals have complex communication.”

Most communication is mundane.

Humans become fascinated by animal alarm calls because predator categories are clean. Vervet monkeys became textbook celebrities for producing different alarm calls in response to different predators, with listeners showing different escape behaviors. Prairie dogs attracted attention for alarm calls that appear to encode information about predator characteristics. These systems are scientifically valuable because external events make meaning easier to anchor.

But most human conversation is not “Leopard!”

It is social maintenance.

Move over.

Are you coming?

That was mine.

Where are you?

Stop.

Continue.

Pay attention.

I am here.

The words are mine; the functional problems are ancient.

If animal communication is rich, much of the richness is likely to hide in ordinary interaction rather than dramatic survival calls.

That changes what we record.

A microphone placed only during hunting or predator encounters misses the social fabric. A dataset assembled only around events humans can easily label biases discovery toward meanings humans already understand.

The bat roost is scientifically important because the noise itself became data.

This should be a general rule for the field: record the boring parts.

The third language in a household is built mostly from boring parts too.

The dog waits.

The person stands.

The cat moves from chair to doorway.

The person changes course.

The horse shifts before being touched.

The handler pauses.

None of these moments makes a documentary trailer. Repetition is what gives them meaning.

A private dialect needs routine the way a public language needs community.

The bat data also reminds us that directed communication can exist without the human-like visual behavior we find charming.

A dog looks at us and our social brains activate. A raven holds something toward another raven and we recognize a gesture. Bats often communicate in darkness, in crowded acoustic environments, with faces and bodies humans are less practiced at reading.

The channel is harder for us, not necessarily poorer for them.

This is a recurring asymmetry in animal cognition. Humans grant complexity most readily when an animal performs it in a human-readable medium.

The parrot speaks.

The ape gestures.

The dog follows a point.

The dolphin responds to an artificial command.

The bat calls into darkness and requires a classifier before we realize that one neighbor may be vocalizing differently at another.

Technology can correct this bias by expanding our perception.

It can also create a new bias toward what is machine-readable.

Large audio datasets favor acoustic species. Computer vision favors visible behavior. Wearables favor animals that can be safely tagged. Laboratory tasks favor species tolerant of captivity and repeated trials. The frontier of “animal communication” can therefore become a map of our instruments rather than a map of animal capacities.

The third-language framework offers a way to resist that.

Ask where reciprocal contingency exists, regardless of channel.

Can one animal’s behavior predictably alter another’s?

Does the sender account for recipient identity or state?

Does the receiver’s response alter what happens next?

Can a human enter the loop without forcing it into speech?

The answers may be acoustic, visual, chemical, tactile, electrical, vibrational, spatial, or mixed.

Bats also complicate the clean distinction between signal and identity.

Human voices carry who we are alongside what we say. Even when the words are identical, listeners can often identify speakers, infer age or sex categories, detect emotional state, and recognize accent or group membership. We rarely treat these as separate communication systems because they arrive in one sound.

Animal calls can bundle information similarly.

A bat vocalization may carry caller identity while also varying with addressee and context. An elephant rumble may contain information about caller identity, arousal, and receiver. A dolphin whistle may identify an individual while its timing and copying pattern alter social function.

The one-signal-one-meaning model begins to fail.

This is another reason a dictionary metaphor is weak.

Words in human language already carry multiple layers, but dictionaries can isolate a conventional lexical meaning because shared grammar and culture do enormous background work. With animal signals, the acoustic object may be more like an entire spoken turn: identity, emotion, relationship, intention, and context braided together.

AI will be tempted to unbraid these dimensions because machine learning prefers labeled targets.

Caller ID: 92 percent.

Context class: 81 percent.

Addressee ID: 74 percent.

Outcome class: 68 percent.

Those numbers would be useful if they came from properly separated data and robust validation. But no single label would be “the meaning.”

Meaning might reside partly in how the dimensions combine.

This point has practical consequences for any consumer technology claiming to translate pets.

Imagine an app trained on thousands of cat vocalizations. It predicts “food” whenever a certain acoustic pattern occurs near feeding time. The model may be learning the cat’s vocal signal. It may also be learning the household routine, room acoustics, microphone location, human movement, or time-of-day features.

A laboratory can control these confounds.

A consumer product may not even know they exist.

The output *I’m hungry* appears precise because English is precise. The model’s actual evidence may be closer to *this vocalization resembles patterns recorded in feeding-associated contexts among these animals under these conditions*.

The bat corpus shows both the promise and the danger.

With enough data, social structure becomes statistically visible.

With a fluent interface, statistical structure can be mistaken for speech.

The right next step is interaction.

Can a bat call generated or replayed under controlled conditions produce the expected receiver behavior?

Does changing acoustic information associated with addressee alter the response?

Do familiar and unfamiliar individuals react differently?

Does sequence matter?

Can a receiver tell when a call is “for” someone else?

These experiments are harder than classification and far more informative.

They also bring ethics back into the design. Playback in a social roost can provoke conflict, alter stress, or disrupt relationships. The fact that a signal can be synthesized is not evidence that it should be broadcast casually.

Every step toward speaking animal increases the obligation to know when to stay quiet.

This principle becomes even more important for bats because many species already face anthropogenic disturbance. Roost disruption, habitat loss, artificial lighting, hunting, and disease management can alter behavior. Humans often encounter bats through fear—rabies, zoonotic disease, darkness, myths—rather than through appreciation of social complexity.

A communication lens can humanize the public’s view without anthropomorphizing the bats themselves.

A roost is not a bag of interchangeable animals.

It contains relationships.

One bat directs vocal behavior toward another.

Individuals differ.

Histories matter.

Conflict is structured.

That is enough to change the moral imagination.

The same shift has happened repeatedly in animal science. Once researchers demonstrate individual recognition, social memory, culture, flexible communication, or long-term bonds, practices that treat animals as anonymous units become harder to defend casually.

Science does not dictate ethics directly. Facts about cognition do not produce one automatic moral rule.

But facts can destroy excuses.

It is harder to say an animal “doesn’t notice” when experiments show discrimination.

It is harder to say a group has no stable social life when network data show otherwise.

It is harder to say separation is irrelevant when vocal contact and reunion behavior reveal its social significance.

Communication research makes absence visible.

The unanswered call matters because someone was being addressed.

This is where the bat argument returns to our own relationships with animals.

Humans are often poor addressees.

We hear the signal and respond to the category rather than the individual.

A dog growls: “aggression.”

A horse pins ears: “bad attitude.”

A cat vocalizes at night: “annoying.”

A cow calls after separation: “noise.”

The category may describe something real. It may also erase who is being addressed and why.

Is the signal directed toward a specific individual?

Does it occur only in one relationship?

Does the receiver’s behavior change it?

What happened immediately before?

What action makes it stop?

The third language begins when we become willing to ask those questions before imposing a fixed label.

This is especially important in conflict.

Friendly communication is easy to romanticize. Mutual gaze, slow blinking, play, contact calls, and approach fit the human desire for connection. Threat, protest, avoidance, displacement, and competition feel like failures of connection.

They are often communication doing its job.

A bat telling another bat to move may prevent a fight.

A dog growl may create distance without a bite.

A horse threat may precede a kick and therefore provide time to change the situation.

A cat hiss is highly informative to anyone tempted to keep advancing.

A communication system that contains only signals humans enjoy is not a communication system. It is customer service.

The bat argument therefore gives the book one of its most important corrections:

Understanding animals does not mean hearing nicer things.

A real translator, if such a device ever exists, will not merely tell us that pets love us and whales are wise.

It will reveal conflict, indifference, competing goals, irritation, avoidance, fear, sexual motivation, hierarchy, resource defense, and social boundaries.

Some of the first messages humans understand may be versions of *move* and *stop*.

Would we celebrate that breakthrough?

Or would we decide the system was inaccurate because the animal failed to say what we hoped?

The answer will reveal whether our interest in communication was curiosity or control.

Bats live in a social world where voices are directed at particular others under particular conditions. Their calls can carry more information than an unaided human ear knows how to extract. Modern computational analysis helps reveal that structure.

The next scientific step is not to write dialogue for them.

It is to take the argument seriously enough to notice who is arguing with whom.

There is a deeper statistical lesson in the roost.

Suppose a model predicts the addressee of a call above chance. That result is only as interesting as the alternatives it has ruled out. Perhaps the caller always quarrels with one neighbor in one corner of the enclosure, and the model has learned echoes from that corner. Perhaps one interaction type happens mostly at a certain time, and equipment noise marks the time. Perhaps individuals differ so strongly in voice that a model appears to classify context simply because particular individuals dominate particular contexts.

The more dimensions a call contains, the easier it becomes for a system to be right for the wrong reason.

This is not an argument against large datasets. It is an argument for splitting them intelligently.

Train on some individuals and test on others.

Train in one recording period and test later.

Move microphones.

Separate caller identity from social context.

Ask whether a feature that predicts addressee still works when caller and location change.

Then, where ethically possible, use playback to see whether animals discriminate the manipulated feature.

Machine-learning performance becomes biologically meaningful only when the shortcut doors are closed.

This problem has a direct analogue in close human-animal relationships. A person may believe she knows what a dog’s vocalization means when she is actually using the entire scene: the time, location, object, direction of gaze, and what usually happens next. Remove the scene and the sound becomes ambiguous.

That is not necessarily a failure of human understanding.

It may be evidence that the communication itself is contextual.

The mistake is claiming the sound alone carries what the whole interaction carried.

A bat corpus, because it can be annotated at such scale, gives researchers a chance to separate these layers more carefully than household anecdotes allow. It can ask how much information sits in acoustics and how much sits in social circumstance.

The answer will probably be both.

That “both” is precisely what consumer translators will resist because interfaces prefer one input and one output. The microphone hears a sound. The app returns a sentence.

A scientifically serious system may need to refuse when context is missing.

No location data.

No known caller identity.

No social history.

No confidence that this sound functions the same way in this population.

Insufficient evidence.

That is an ugly product experience and a beautiful scientific one.

It means the system knows which world it does not possess.

The bat argument therefore becomes an argument about humility in machine design.

A model should not be rewarded merely for answering.

It should be rewarded for knowing when the animal has not given us enough to answer responsibly.

Humans are poor at this too. We dislike unresolved social signals. We would rather call the dog jealous, the horse stubborn, the cat spiteful, or the bat angry than hold several hypotheses at once.

But ambiguity is not ignorance if it is structured.

We can know that a vocalization is directed, that it differs by partner and context, that it predicts a class of outcome, and still not know which human word deserves to replace it.

That middle state is where good science lives.

And it may be where the first genuinely useful animal AI lives too.
