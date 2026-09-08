# Chapter 9 — Compression Is an Opinion

A photograph can be made smaller without anyone noticing.

That sentence built an industry.

Take a digital image and save it as a high-quality JPEG. The file may become dramatically smaller while looking, to an ordinary viewer, almost unchanged. The compression works partly because the algorithm is willing to discard information the visual system is less sensitive to under typical conditions.

The missing bits are not recovered when you open the file.

They are gone from that representation.

What remains is an opinion about what you were unlikely to miss.

The word *opinion* may sound unfair to mathematics. JPEG compression is not a moody aesthetic judgment. It uses specific transforms, quantization procedures, and models of perceptual relevance. The engineering is formal.

The decision about relevance is still a decision.

Compression only works because not every distinction is treated as equally valuable.

Lossless compression exploits redundancy without changing the exact original data. If a text file contains patterns, an encoding can often represent those patterns more compactly and reconstruct the original bit for bit. Lossy compression goes further. It deliberately destroys distinctions judged less important for the intended use.

Human thought is mostly lossy.

Tell me about your drive to work yesterday.

You will not report the position of every car, the exact shape of every cloud, each pressure change under each tire, the serial number on the traffic light controller, or the sequence of photons reflected from the dashboard. You may remember one near collision, a song, a phone call, construction, unusual rain, or nothing in particular.

The event contained enormous physical detail.

The memory kept a model.

Language does the same.

“This morning was cold” compresses a temperature field across space and time into a sentence. “The market fell” compresses millions of trades, securities, motives, time intervals, and accounting conventions into a directional claim about an index or group of assets. “She was angry” compresses facial expression, history, tone, words, posture, context, and the speaker’s interpretation into one category.

Every noun is a compression algorithm with cultural history.

Call something a tree and you discard almost every property that distinguishes this organism from every other tree while preserving enough structure to put it in a useful class.

Call a person an employee, patient, voter, customer, refugee, suspect, citizen, homeowner, or debtor and the compression becomes consequential.

Categories are not only descriptions. They route action.

A hospital triage code changes who receives care first. A credit category changes interest rates. A species classification changes conservation rules. A diagnosis changes treatment. A legal status changes rights.

Compression becomes governance when the summary determines what happens next.

This is why “the data speak for themselves” is usually nonsense.

Data have already survived multiple acts of selection before anyone plots them.

Some physical property was chosen to measure.

An instrument encoded it with finite resolution.

A sampling interval was chosen.

Values outside some range were clipped or marked invalid.

Records were cleaned.

Fields were defined.

Categories were assigned.

Missing values were handled.

A model selected features.

A chart selected axes.

A paragraph selected one result to mention.

By the time a clean statistic arrives, most of reality has been compressed away.

This is not an argument against statistics.

It is an argument for knowing what was sacrificed to make the statistic possible.

Thermodynamics enters through a related idea called coarse-graining.

A gas can be described microscopically by the positions and momenta of an enormous number of particles. In practice, thermodynamics works with macroscopic variables such as pressure, volume, temperature, and entropy. Many different microscopic arrangements correspond to the same macrostate.

The macrostate is a compression.

We stop caring which particular molecule occupies which precise coordinate and care instead about aggregate properties.

This loss of microscopic distinction is not merely a human inconvenience. It is central to how statistical mechanics connects reversible microscopic dynamics with macroscopic irreversibility. The exact conceptual foundations remain rich enough to occupy physicists and philosophers, but one practical point is clear: the world described at human scale is a coarse-grained world.

A cup of coffee has a temperature.

That number does not tell you the velocity of each molecule.

It does not need to.

The usefulness of thermodynamics comes from identifying macroscopic variables that remain predictive even after microscopic detail is ignored.

Good compression preserves the causal structure you care about.

That phrase provides a way to distinguish intelligent simplification from mere information loss.

A subway map distorts geography. Stations are spaced neatly. Lines become straight or gently angled. Coastlines and street geometry disappear. If you used the map to estimate walking distance between two stations, the distortion could mislead you. If you use it to decide where to transfer trains, the same distortion becomes a feature.

The map is wrong in service of being right about something else.

Models work this way.

A globe omits houses.

A circuit diagram omits the color of wires.

A balance sheet omits the smell of a factory.

A genome sequence omits most of a cell’s current molecular state.

A personality trait omits the hour-to-hour variability of a person.

A climate model omits individual leaves while attempting to preserve large-scale dynamics.

The question is never whether a model loses information.

It does.

The question is whether it loses the information required for the inference being made.

This is where artificial intelligence belongs in the book without becoming the book.

A trained model is an extraordinary compression of patterns in its training process. Vast corpora are transformed into parameters that make future outputs conditional on inputs. The parameters do not preserve a neat searchable copy of every source, yet they can retain statistical structure, associations, styles, facts, and sometimes memorized sequences.

The compression is useful precisely because the full corpus is not replayed for every answer.

But compression creates a provenance problem.

If a model produces a claim, which training examples contributed to it?

Sometimes there is no simple answer. The representation is distributed. Many examples shaped the parameters. Fine-tuning changed them further. Prompt context contributed. Retrieval may have added documents. A post-processing layer may alter the output.

The original distinctions have been mixed into a new machine.

This is not unprecedented.

Human expertise also compresses sources.

Ask a skilled physician why a pattern worries her and she may not be able to identify every patient, paper, lecture, and failed diagnosis that shaped the judgment. Experience becomes structure. A carpenter hears a saw differently after years of work. A pilot notices weather cues a passenger ignores. A radiologist detects abnormalities in images before being able to fully verbalize which learned features drove the perception.

Expertise is lossy compression with retrieval pathways built into a person.

The danger is that compressed judgment can preserve bias as efficiently as skill.

A stereotype is also compression.

It takes a varied population and maps individuals onto a crude prior. The compression may arise from limited experience, cultural transmission, institutional history, or statistical regularity used outside its proper context. Once the category is active, new evidence is interpreted through it.

Cheap inference can become expensive error.

The information-theoretic language does not decide the moral question. It helps explain the structure.

A finite agent cannot process every relevant fact from first principles each time. It uses summaries. Priors. Categories. Habits. Heuristics. Models.

Intelligence is partly the art of choosing which compressions remain reversible enough to correct.

That last phrase matters.

A flexible model can be updated when evidence arrives. A rigid category rejects evidence as noise. A scientist can revise a parameter. An institution can become trapped in a metric long after the metric stopped representing its goal. A person can preserve a story about themselves because too much identity is invested in the compression.

Some lossy formats are difficult to edit without accumulating artifacts.

Human narratives are like that.

A family compresses decades into a story: Grandpa built everything from nothing. She was always the responsible one. That side of the family never cared. The business failed because of the recession. We moved for the schools.

The story may contain truth. It also selects.

Over years, the selected version can become easier to retrieve than the messy event. Contradictory details fade. The compression becomes the memory.

Civilizations do the same thing with history.

Textbooks cannot contain every archive. Museums cannot display every object. Public holidays cannot encode every causal ambiguity. Nations build narratives from selected events and names. The compression is unavoidable. The danger is pretending it was neutral.

A mature historical culture therefore preserves two layers at once.

The public summary and the archive capable of challenging it.

This is an elegant information architecture.

Compression for usability.

Retention for reversibility.

Science tries to do something similar. A paper compresses years of work into methods, figures, tables, and prose. The raw data, code, lab notebooks, calibration records, and negative results may sit elsewhere if they survive at all. Reproducibility depends partly on how much of that underlying state remains available.

A result is more trustworthy when the compression can be audited.

This is one reason open data and open methods matter, though they create their own costs involving privacy, storage, documentation, and long-term maintenance. You cannot simply dump uninterpretable files online and call the experiment transparent.

Useful reversibility requires metadata.

Return to the JPEG.

If you compress an image lightly, discard the original, and later discover that a faint pattern in the lost high-frequency detail was scientifically important, no moral argument brings those coefficients back. The choice was made at encoding time.

This is the asymmetry that makes measurement design difficult.

You often must decide what to discard before knowing the future question.

Space missions face this sharply. A probe has finite power, storage, downlink bandwidth, and instrument time. It cannot transmit every possible measurement at every possible resolution. Scientists prioritize targets and data products. Compression may occur on board. A once-in-history encounter with a planet or asteroid can pass while the spacecraft is configured to look somewhere else.

Exploration is irreversible sampling.

So is life.

You cannot archive childhood at full resolution for later analysis. You cannot record every conversation from every angle. You cannot preserve every state of a relationship in case one becomes important after the breakup. Experience is compressed while it occurs by a system that does not know the future.

This makes regret partly an information problem.

Now I know which detail mattered.

Then I did not.

No amount of present attention can reconstruct a distinction that was never preserved.

The lesson is not to record everything. That way lies surveillance, paralysis, and an archive no one can interpret.

The lesson is to be careful about irreversible compression in domains where future questions are likely to change.

Science keeps raw data when feasible for this reason.

Finance keeps transaction records.

Airlines preserve flight data.

Hospitals retain images.

Courts preserve evidence.

Software teams keep version histories.

Writers keep drafts.

The drafts matter because polished prose is compression.

A finished sentence can hide the route by which an idea arrived. Notes preserve alternate directions, doubts, sources, bad metaphors, discarded arguments, and evidence that resisted the thesis. Most readers should not have to wade through them. The author sometimes should.

This is especially important for a book like this one.

The central thesis is vulnerable to becoming too neat.

Information is physical. Erasure costs. Life dissipates energy. Therefore humans are the universe knowing itself.

That chain can be made to sound magnificent in a paragraph and become intellectually dishonest in the process.

The missing distinctions are precisely what matter.

Measurement is not always logically irreversible.

Landauer’s bound is tiny compared with practical computing energy.

Biological sensing can sometimes operate near equilibrium.

The thermodynamics of quantum information includes cases where correlations alter erasure costs.

Entropy in physics is not a synonym for ignorance, disorder, waste, or cultural decay in every context.

Consciousness is not explained by a bit eraser.

If those distinctions are compressed away, the book becomes metaphysical content marketing.

Keeping them makes the argument harder and better.

A serious thesis should survive its own residuals.

Statisticians call the difference between a model’s prediction and an observed value a residual. Good analysts look at residuals because structure left there means the model has failed to explain something systematic.

The same habit is useful outside statistics.

What did the story leave out?

Who does not fit the category?

Which observation was called noise because it threatened the theory?

What fact became inconvenient after compression?

The residual is where reality files an appeal.

This is why science progresses partly by improving compression.

Newtonian mechanics compresses a vast range of motion into compact laws. Relativity does not make those laws useless at ordinary speeds; it identifies where the compression breaks. Classical thermodynamics remains useful even though statistical mechanics reveals microscopic structure beneath it. Quantum field theories compress regularities into mathematical frameworks that can predict measurements to astonishing accuracy while leaving deep interpretive and unification questions open.

A more powerful theory often preserves more consequence with fewer assumptions.

But simplicity is not automatically truth.

The shortest story can be wrong.

An overly compressed model fits the author better than the world.

This is a recurring temptation for humans because compression feels like understanding. A complicated situation becomes one principle. One villain. One cause. One graph. One ideology. One diagnosis.

Sometimes the compression is genuinely explanatory.

Sometimes it merely reduces cognitive load.

The two experiences feel dangerously similar.

A finite brain likes the simpler file.

The responsible knower keeps asking what was lost in the export.