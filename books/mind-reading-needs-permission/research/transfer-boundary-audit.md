# Transfer-boundary audit: cooperation is moving, not disappearing

This is a bounded research pass for *Mind Reading Needs Permission*, stacked on the manuscript branch. It tests the opening chapter's most commercially attractive claim — that cooperation is part of the channel — against the strongest nearby counterevidence I could find.

## The 2023 result is narrower than the slogan

Tang et al. (2023) remains a strong positive control for a cooperation-dependent semantic decoder. The paper reports three subjects, individualized encoding models, performance that improved with more subject-specific training data, unintelligible results when a decoder was applied to a person it had not been trained on, and substantial degradation when trained subjects deliberately resisted during application.

Primary source: Tang, LeBel, Jain & Huth, *Semantic reconstruction of continuous language from non-invasive brain recordings*, Nature Neuroscience 26, 858–866 (2023):
https://www.nature.com/articles/s41593-023-01304-9

The University of Texas's contemporaneous FAQ makes the engineering burden unusually concrete: a participant could spend up to roughly fifteen hours in the MRI scanner for training, and the team explicitly said training could not simply be skipped.

Authoritative institutional source:
https://www.cs.utexas.edu/news/2023/brain-activity-decoder-can-reveal-stories-peoples-minds

That supports Chapter 1's opening move. It does **not** establish that fifteen hours of subject-specific linguistic calibration is a durable law of semantic decoding.

## The boundary moved in 2025

The same research group subsequently reported a transfer method that adapted an existing decoder to a new participant with about **one hour** of that participant's fMRI data while the participant watched silent videos. The method maps the new participant's activity into the brain space of a person on whom the semantic decoder had already been trained.

UT Austin's 6 February 2025 account explicitly contrasts the two regimes: the original decoder required about sixteen hours of subject-specific podcast listening; the newer method adapted it to a new person with roughly one hour of silent-video training. The group also reports that resistance still makes results unusable.

Authoritative institutional source:
https://cns.utexas.edu/news/research/improved-brain-decoder-holds-promise-communication-people-aphasia

This is exactly the kind of counterevidence the book needs. The original burden did not vanish. It was **redistributed**. A large source-subject training burden plus learned cross-subject conversion reduced the amount of labeled data demanded from the new subject.

The stronger formulation for the book is therefore not "the machine needs sixteen hours from you." It is that useful decoding presently depends on a calibration economy: somebody has to supply enough paired structure to connect measured activity to a semantic model, but transfer learning can amortize part of that cost across people.

## A second 2025 result makes the trend harder to dismiss

Wang et al. (2025) reported inter-individual and inter-site neural-code conversion without requiring shared stimuli between source and target participants. Their method still relies on trained decoders and stimulus-content representations, but it attacks a specific obstacle that a covert-capability argument would attack too: fine-grained functional topographies differ across people.

Primary source: Wang et al., *Inter-individual and inter-site neural code conversion without shared stimuli*, Nature Computational Science 5, 534–546 (2025):
https://www.nature.com/articles/s43588-025-00826-5

This paper concerns visual reconstruction rather than arbitrary private semantic thought, so it cannot be spent directly on Chapter 1's language-decoding claim. It belongs in the research trail because it shows that "individual brains differ" is an engineering problem researchers are actively reducing, not a permanent privacy guarantee.

## Replace a binary variable with a calibration budget

The current brief scores `subject calibration` and `cooperation` separately, which is useful, but the manuscript will be stronger if later chapters treat calibration as a budget with at least these components:

- source-population training data;
- target-subject training time;
- whether target and source see matched stimuli;
- whether target labels are required;
- task participation required during calibration;
- passive versus intentional target data;
- scanner/site alignment burden;
- performance lost under transfer;
- performance lost under active resistance;
- amount of target history or side-channel data available before the claimed decoding event.

This avoids a future rhetorical trap. A system that reduces target calibration from sixteen hours to one hour has not become calibration-free. But a book that keeps using sixteen hours as though nothing changed would understate the trajectory.

## Strongest counterargument to the book's thesis

The title phrase **Mind Reading Needs Permission** risks confusing today's demonstrated protocol with tomorrow's physical limit. The 2025 transfer result already weakens the strongest version of that claim: one person's extensive training can help bootstrap another person's decoder, and the new person's linguistic comprehension need not supply the labels in the original way.

A capable adversary might also possess passive target data collected for unrelated purposes, population priors, medical imaging, behavioral recordings, speech, gaze, video, or repeated exposures. If those data permit useful latent alignment without the target knowingly participating in a decoder-training session, ethical permission and engineering cooperation come apart.

The book should welcome this objection rather than bury it. Its central question becomes more interesting if **permission is a contingent cost that technology is trying to drive toward zero**.

## Counter-counterargument: one hour is still a person in a magnet

The newer result does not demonstrate stranger-readable thought. The target still contributes about an hour of fMRI data while performing a structured perceptual task. The source decoder still rests on extensive earlier data. The system still operates through a large scanner. UT Austin reports that deliberate resistance remains effective. And cross-subject neural-code conversion in a visual task does not establish covert language decoding.

So the correct update is neither "cooperation is fundamental" nor "cooperation has been solved." It is:

> demonstrated systems are progressively moving calibration work away from the target, while the strongest semantic decoders still require target-specific measured data and remain vulnerable to active resistance.

That sentence should itself be treated as time-sensitive.

## Narrative opportunity

Chapter 1 currently opens with a boundary and then warns that better systems may move it. The 2025 work can make that movement happen **inside the story** rather than in a caveat.

The clean sequence is:

1. 2023: roughly fifteen to sixteen hours in the scanner; wrong-person decoding is unintelligible; resistance works.
2. The tempting conclusion: cooperation looks like part of the channel.
3. 2025: the same lab cuts new-user adaptation to about one hour by borrowing structure learned from another brain.
4. The question changes. Which part of "permission" was physics, which part was missing training data, and which part can be amortized?

That is better narrative pressure than announcing a static ladder. The machine still needs you, but it has already learned how to need less of you.

## Publication holds

Do not describe the original Tang decoder's ~15–16 hour target-specific training burden as the current state of the art without immediately noting the group's 2025 transfer result.

Do not describe the 2025 method as calibration-free, stranger-readable, covert, or noncooperative. It still uses target-subject fMRI data from a structured task.

Do not use Wang et al.'s visual cross-subject conversion as evidence that arbitrary private language can be decoded across strangers. Use it only as evidence that cross-person functional alignment is an active and improving engineering target.

Do not make `cooperation` a single yes/no field in later quantitative comparisons. Separate cooperation during acquisition, target-specific calibration, task compliance during application, and active resistance.

## What would materially weaken the book

The thesis should be revised aggressively if blinded replication shows useful high-content semantic decoding from previously unseen people with no target-specific neural calibration, no task cooperation, and quantified robustness to deliberate resistance. A result using passively collected target data would not be "permission-free" in the engineering sense; it would instead show that calibration can occur without contemporaneous informed participation, which is arguably the more consequential privacy result.

## Sources checked

- Tang, J., LeBel, A., Jain, S. & Huth, A. G. (2023), *Semantic reconstruction of continuous language from non-invasive brain recordings*, Nature Neuroscience 26, 858–866: https://www.nature.com/articles/s41593-023-01304-9
- University of Texas at Austin Computer Science (1 May 2023), contemporaneous decoder FAQ: https://www.cs.utexas.edu/news/2023/brain-activity-decoder-can-reveal-stories-peoples-minds
- University of Texas at Austin College of Natural Sciences (6 February 2025), *Improved Brain Decoder Holds Promise for Communication in People With Aphasia*: https://cns.utexas.edu/news/research/improved-brain-decoder-holds-promise-communication-people-aphasia
- Wang, H. et al. (2025), *Inter-individual and inter-site neural code conversion without shared stimuli*, Nature Computational Science 5, 534–546: https://www.nature.com/articles/s43588-025-00826-5
