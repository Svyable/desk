# Postcards from Sleep

There is a small square of paper on the imaginary bedside table. It shows a blue staircase rising out of an ocean. Across the bottom, a machine has printed: YOUR DREAM, 3:17 A.M.

The picture is beautiful. It is also a possible lie.

I have no particular quarrel with machines that make beautiful pictures. I would like to own one that could retrieve an image from a dream as faithfully as a camera retrieves the afternoon from a memory card. I suspect such a device would find a large and eager market. People wake from dreams that were strange, frightening, tender, humiliating, or so splendidly incoherent that they cannot be described before the details disappear. A tool that lets a person bring something back from that interior place would be irresistible.

But it matters whether the square of paper is evidence of a dream or an interpretation generated from partial signals. That distinction could become one of the most consequential problems in personal technology.

A dream is not stored as a movie in an isolated part of the brain. Remembering it after waking is itself a difficult and variable process. Sleep has multiple stages; brain activity changes; memory processes are complicated. Subjective experience and its later report are not identical. A person may be certain that an image appeared during sleep without being able to place it in a stable sequence. Dreams often obey logics that are hard to translate into ordinary narrative. There is no convenient file format to export.

This is the first obstacle to my imaginary postcard machine: what would count as an accurate copy?

One possibility is to ask the sleeper afterward, but that makes the evaluation depend on recall. Another is to compare measured brain activity with models trained on waking perception, imagined experiences, or other tasks, while recognizing that the relationships may differ during sleep. Researchers can examine sleep reports alongside neural recordings, but even a striking correlation does not establish that a picture is the actual content of a particular dream.

The technology has real scientific foundations that deserve more care than its popular caricature. In 2023 researchers reported a [semantic reconstruction system using non-invasive functional MRI](https://pmc.ncbi.nlm.nih.gov/articles/PMC11304553/). Their work demonstrated reconstruction of aspects of the meaning of language from measured brain activity under highly particular experimental conditions. It was an important research result, involving long training and participant cooperation, and the authors examined limitations and privacy implications. It did not establish a machine that can casually read a stranger's private thoughts. Nor did it mean that ordinary dreams can be recovered as video on a phone.

There had, in fact, been a more direct attempt to decode dream imagery a decade before the language-reconstruction study. In 2013, Tomoyasu Horikawa and colleagues published [Neural decoding of visual imagery during sleep](https://doi.org/10.1126/science.1234330) in *Science*. They combined functional MRI measurements with verbal reports from participants awakened during the sleep-onset period, then used information about brain responses to visual stimuli to classify aspects of the reported imagery. The work was inventive because it treated the participant's dream reports and waking perception as distinct but potentially related sources of evidence. It did not recover an audiovisual film of a dream. Its reported success concerned identifying and classifying categories of visual content under the conditions of the experiment.

That difference can seem small in a headline and enormous in a bedroom. If someone wakes and reports having dreamed about a building, an experimental model that identifies a category related to buildings has accomplished something interesting. It has not established the building's exact location, the dream's emotional meaning, the order of events, the color of the sky, or even whether the scene appeared as a stable image in the way a painting does. The category building covers an extraordinary number of possible experiences. A computer can classify a subject correctly on a task while getting most of the particulars of the lived event wrong.

The participant's report remains part of the experimental procedure. This matters because researchers have no direct way to place an independent camera inside the dream. They can compare neural measurements with what a person remembers and says after awakening, then test whether a model predicts something better than chance. The inference may be useful without supplying a perfect ground truth. An experiment may ask a question narrow enough for the available evidence to answer. A consumer advertisement can widen the question until the evidence no longer belongs to it.

The 2023 semantic-language experiment had a strikingly different design. Jerry Tang and colleagues trained models using many hours of narratives heard by a very small number of cooperative participants during fMRI measurement. The published methods describe three principal subjects listening to approximately sixteen hours of spoken stories each for model training. The system generated language sequences that approximated aspects of the meaning of later stimuli. Its output was not a precise transcription of every word the person heard. The method incorporated a language model that proposed plausible text and a model of how the participant's brain responded to language. The result depended on both.

This is a subtle but important source of error. If a system begins with a set of plausible stories and selects the one that best fits a noisy signal, the final language may contain details supplied by the model rather than observed in the participant's brain. The distinction is familiar from scientific inference. A model can recover structure in limited evidence by incorporating prior assumptions. Its predictions can be useful. The price is that the result is partly shaped by those assumptions, especially where the signal is weak. In dream interpretation, the price could become a complete synthetic scene that the user assumes was personally experienced.

The participants' cooperation was not a small detail relegated to the ethics appendix. The 2023 authors explicitly tested whether successful decoding could be achieved across participants and whether the trained approach could be resisted by directed mental tasks. In the experiments they reported, individualized training and cooperation mattered. This should complicate the easy fear that an ordinary scanner can secretly download an unsuspecting stranger's thoughts. It should also complicate the equally easy reassurance that future neural decoding will never create privacy problems. A constraint demonstrated by one method in 2023 does not establish the limits of every later technology.

I would like the imaginary dream company to print two very different numbers on its brochure. One would describe the performance of its best demonstration on the participants, tasks and measurements used to develop it. The other would describe performance on new people, new nights and new types of dreams under conditions the company could not curate. The second number might be much less impressive. It would be the one most relevant to the buyer.

There would also need to be a category called NO RELIABLE OUTPUT. When the signal fails to support an inference, the device should decline to generate a persuasive reconstruction and perhaps preserve only the person's own report. Such a product would produce fewer spectacular images and more occasions when its technology was visibly limited. The feature could become commercially unpopular. It could also be the reason a cautious user trusts the images that remain.

The evaluation itself would be unusually difficult. A manufacturer might ask users to judge whether generated images resemble their dreams. Recognition is not a perfect independent test. An image can suggest details that a person incorporates into memory. A user impressed by the device may assign more meaning to a coincidence than a skeptic would. Researchers would need to design blinded comparisons, measure rates of false recognition where possible, and examine how the device changes later recollection. A reconstruction whose apparent accuracy rises with repeated viewing may be improving the user’s agreement with the image rather than improving the image's connection to the earlier experience.

The clinical and artistic uses should not be forced into the same evidence standard. A voluntary artwork inspired by a night's physiological recordings can be valuable without establishing that its content was literally dreamed. A device advertised for medical diagnosis, legal evidence or intimate psychological insight would need much stronger proof. If the company cannot meet that standard, it should not benefit from the authority implied by a clinical-looking interface.

The gap between those claims is enormous. Excitement tends to cross it in one headline.

Functional MRI is a remarkable research instrument, but it is not a household wearable. It measures signals related to changes in blood oxygenation, which researchers use to infer aspects of brain activity; it does not capture thoughts directly. The time resolution and spatial relationships impose limitations. A trained model works under assumptions about the participant, the task, and the data. The person whose brain was measured is part of the experimental system, not a passive object from which a universal machine extracts sentences.

To turn this into a consumer dream recorder would require a sequence of breakthroughs and engineering achievements that no honest product announcement should compress into a demonstration video. The apparatus would need some way to measure relevant signals outside a laboratory, model sleep states, infer aspects of subjective content with known error rates, and communicate uncertainty. A picture-generating system can always make a plausible image. The hard part is showing that the image came from the person's experience rather than from the model's own habits.

A model is exceptionally capable of being convincing when it is wrong. That makes a dream recorder a potentially dangerous kind of entertainment.

Suppose the first commercial version uses a sleep headband and generative imagery. It records physiological signals, identifies likely sleep stages, and uses a model to generate images based on partial indicators and perhaps the person's waking descriptions or historical preferences. The result may be intriguing. It may feel personal. It may even include motifs the user recognizes. But if the system cannot establish a reliable relationship between the output and the dream, calling it a recording would be misleading.

It might be an artwork made from sleep data. That would be a perfectly respectable product if sold as such.

The difficulty is that people often believe a thing more readily when it is accompanied by a technological explanation. A photograph carries authority even when it has been manipulated; a medical chart carries authority even when its underlying measurement is uncertain. A dream image accompanied by a timestamp and a confidence score might feel like proof. An owner could begin to remember the image as the dream itself, especially after reviewing it repeatedly. The machine would alter memory of the experience it claims merely to preserve.

There is a curious irony here. The device offered to stop dreams from disappearing could instead replace them with a more durable fiction.

One useful analogy is the difference between a photograph and a portrait. A photograph is a measurement produced by optical and electronic processes, shaped by framing, exposure, processing, and the conditions of capture. It is not neutral, but its relationship to light entering the camera can be investigated. A portrait is an interpretation. It may reveal something meaningful and personal without claiming to be a measurement of an exact moment. The dream machine will need to declare which kind of object it is making, and perhaps the answer will vary by feature.

It is possible that future systems will reconstruct limited elements of dreaming with measurable accuracy under controlled conditions. That would be fascinating. The system may identify some categories or features more reliably than others. It might fail on novel experiences. It might depend on training peculiar to an individual. The reporting standards should force developers to show examples of failure rather than only the most astonishing outputs.

I would like the machine to include a button labeled THIS IS YOUR INTERPRETATION, NOT MINE.

In practice, a carefully designed interface might separate recorded physiological measurements, model inferences, and images generated for artistic purposes. It could record the person's own spoken dream recollection before showing any synthetic imagery, preserving an unprompted account. It might let the user compare what they remembered with what the model proposed, without claiming either is a perfect record. Researchers would need methods to test whether this process helps or distorts recall.

The distinction would be especially important in health-related contexts. Sleep monitoring can be valuable, but a consumer entertainment device must not be allowed to imply diagnoses or interpretations that lack clinical evidence. People may experience nightmares, distressing dreams, sleep disorders, and other difficulties for many reasons. A beautiful visualization cannot determine their causes. If the technology enters clinical use, the standards must be more demanding than those applied to a novelty app.

There is an entire bookstore of dream dictionaries ready to explain why a person sees a particular animal or hallway. I would not trust a neural display more merely because it produces the explanation with a confidence percentage.

If dreams become media, the social consequences begin immediately. A person may share an odd image with friends, the way people share photographs or music. Someone might build a collection of recurring dreams. Artists may discover a new source of material. Family members might choose to save recollections from different periods of life. There are reasons to be charmed by such possibilities.

Then comes the person who does not want to share.

The social history of communication devices is full of activities that began as optional and gradually acquired obligations. A phone allows a person to be reached; soon failure to answer may require an explanation. A camera preserves experiences; soon an event without photographs can feel unrecorded. Workplace productivity tools make activity visible; managers then ask why a recorded pattern changed. The ability to preserve dream imagery could become an invitation, then an expectation, then a demand.

An employer might insist that it would never require access to an employee's dreams. The assurance would be welcome, but a privacy system should not rely exclusively on employer goodwill. Insurers, security agencies, schools, intimate partners, advertisers, and other parties might have interests in information that seems exceptionally personal. The possibility of coercion is not evidence that a particular institution is already using such technology. It is a reason to design limits before the capacity becomes commonplace.

The relevant rights would need to go beyond a checkbox at first use. A person should be able to decline recording, stop it, delete outputs, and prevent secondary uses that were never meaningfully authorized. Depending on the eventual technology, there may need to be strict limits on collecting neural data, processing it locally where feasible, transferring it to other parties, retaining training material, and producing inferences that the individual cannot inspect or challenge.

This could create a paradox. A dream recorder may need personal calibration to work well. Personal calibration requires intimate data. Improving accuracy may increase the amount of information a system knows about the user. The better the recording, the more serious the privacy problem.

Sometimes the most intimate technology is the one that understands a person poorly. A company may still treat its unreliable interpretations as sensitive assets and sell services based on them.

There is an additional problem with consent during sleep. A person can agree in advance to a device recording certain data, but cannot evaluate each inference as it is produced. A system could capture a period of experience the user did not anticipate, including distressing content. A household member might have access to a shared device. A child might be enrolled in monitoring by parents. The boundary between care and intrusion could become difficult to maintain.

The future machine should be designed with the capacity to forget, not just to remember.

I am fascinated by the possibility of using such a device for art. Imagine a museum of dream-inspired imagery in which every contribution is voluntary and explicitly labeled as a model's reconstruction or interpretation. Some of the art may be incomprehensible. Some might be surprisingly ordinary. A thousand people could dream of missing a train and still produce a thousand different reasons for the anxiety. The exhibit could teach visitors as much about the limits of representation as about the content of dreaming.

A particularly good exhibition might present an image alongside a person's recollection and the machine's uncertainties, leaving the viewer to see where the two diverge. The discrepancy could become the artistic material. Instead of promising access to an interior truth, the work would reveal the distance between experience and representation.

There is no shortage of remarkable art produced without a machine reading any neurons. That should remain the baseline against which a new device justifies its complexity.

The strongest potential value may arrive in research. Better understanding of how neural processes relate to reported experiences could inform scientific questions about sleep, perception, memory, and consciousness. It might produce new ways to study conditions that are difficult to investigate with self-report alone. These goals require careful experimental designs, replication, ethical oversight, and an honest account of inference. They are compelling even if they never lead to consumer dream postcards.

The public often encounters science through the most extraordinary imagined consumer application. The research itself may be investigating a much narrower mechanism. That gap is not necessarily deceitful; speculation can attract attention and funding. But the speculation should not be allowed to masquerade as the result.

What if the dream recorder becomes excellent? Suppose that in some distant future it reconstructs large parts of dream content with demonstrable fidelity. A person can review not a fanciful illustration but something close to a genuine record. That achievement would raise questions about the nature of remembering. Would people trust the external record over their own recollection? Would they begin to revise their narratives of themselves? Could a dream be used unfairly as evidence of intention, loyalty, danger, or desire?

Dreams contain images and thoughts that people do not choose in the ordinary way they choose actions. Even an accurate record would not establish a person's character or intentions. The law and culture would need to resist the impulse to turn involuntary experience into a confession.

The record could be genuine and the interpretation wrong.

That last distinction is worth holding onto. A technology may become increasingly accurate at measuring some aspect of a process while the meaning assigned to the measurement remains contested. A heart-rate monitor can measure a pulse without knowing whether its owner is frightened, exercising, excited, or ill. A brain signal can correlate with certain conditions without revealing a person's complete private world. A camera can record someone walking down a street without explaining why they were there. Measurement and understanding are related, but they are not synonyms.

If a dream recorder ever exists, the most serious part of its design may be the warning that appears after it creates a beautiful picture.

There could be markets for safeguarding neural information, rights-management systems, secure local storage, and methods for proving whether a particular image was generated by a specific device or altered later. Some of those protections might help, but every system would introduce its own vulnerabilities. A purported authentication mark may establish provenance without proving accuracy. A digital signature can show that a file has not changed since signing; it cannot tell us whether the interpretation inside the file was valid.

I imagine future legal disputes in which lawyers spend hours explaining the difference. It would be possible for a machine's output to be both authentic and misleading. There is something almost reassuring about the thought that the future will still have paperwork.

The postcard on the bedside table remains attractive. A blue staircase ascends from an impossible sea. The person who wakes sees it and feels a startling recognition. Perhaps the machine caught something. Perhaps the image suggested the recognition. Perhaps both the experience and the output drew on a shared vocabulary of imagery. Without a reliable evaluation, the feeling cannot settle the question.

The person might save the postcard anyway.

There is nothing wrong with keeping a picture because it moves you. Much of human culture depends on the ability to find meaning in representations whose factual origin is uncertain. The difference is that art does not have to claim it entered your brain during the night. An honest dream-inspired image can be loved without being treated as evidence.

The device's most valuable feature may eventually be a field that lets its owner write: This is what I remember.

A little free text box would look primitive beside the neuroimaging, generative models, and biometric dashboard. It would also return the person to the center of an experience no machine has the right to claim as its own.

I would buy a dream postcard machine if it worked, if it was safe, if it kept my data private, if I could stop it, and if it understood the difference between an image and a claim. That is a longer list of conditions than the advertisement is likely to show.

Until then, the blue staircase can stay where it belongs: in a book about possible futures, with its fictional timestamp and its perfectly real question.