# Chapter 13 — The Waste Heat of Certainty

The easiest way to find a modern data center from the outside may be to look for everything that does not look like computing.

Substations.

Transmission lines.

Backup generators.

Cooling equipment.

Water infrastructure.

Concrete.

Fences.

The servers are inside, hidden behind the architecture required to keep them useful.

This is a good correction to the picture of artificial intelligence as software.

Software is real, but it runs somewhere.

The somewhere is getting large enough to alter power systems.

The International Energy Agency estimated that data centers consumed about 415 terawatt-hours of electricity worldwide in 2024, roughly 1.5 percent of global electricity use. Its 2025 *Energy and AI* report projected consumption rising to around 945 terawatt-hours by 2030 in its base case, with AI the largest driver of growth. In the United States, a Lawrence Berkeley National Laboratory analysis estimated data centers used about 176 terawatt-hours in 2023, or 4.4 percent of U.S. electricity consumption, with scenarios reaching roughly 325 to 580 terawatt-hours in 2028.

Those numbers will change.

That is why I am giving the dates.

Infrastructure forecasts are not physical constants. AI hardware changes. Model architectures change. Efficiency improves. Demand surprises in both directions. Projects are announced and canceled. Grids add generation. Policy changes. A book that turns one forecast into destiny is already obsolete when printed.

The physical point survives the forecast.

Large-scale machine intelligence has become an energy system.

That does not mean every question asked of an AI model is energetically outrageous. It means the aggregate capacity being built to answer, train, search, simulate, classify, generate, and automate has crossed from the realm of information technology into the realm of industrial load.

The distinction matters because industrial loads have geography.

A data center does not consume “global electricity.” It connects to a particular grid node in a particular region with particular generators, transmission constraints, water conditions, permitting rules, fuel prices, weather, and neighbors.

A megawatt in northern Virginia is not the same system problem as a megawatt in Iceland.

The IEA emphasizes this concentration. Data centers remain a modest share of global electricity, but they can become large local loads because capacity clusters where fiber, land, tax policy, power, and market access align.

The global average hides the transformer.

This is exactly the kind of compression the last chapter warned about.

“AI uses 1.5 percent of global electricity” sounds small.

“A new campus wants hundreds of megawatts on a constrained regional grid” sounds large.

Both can be true.

The meaningful scale depends on the question.

Energy supply is only one layer.

Power enters chips and emerges mostly as heat. That heat must leave the electronics quickly enough to keep temperatures within operating limits. Air cooling remains common, but high-density AI hardware increasingly pushes facilities toward liquid cooling and more elaborate thermal designs. Pumps move coolant. Chillers reject heat. Cooling towers may use water. Heat exchangers couple loops. Fans remain everywhere.

The computation produces symbols.

The building produces warm fluid.

This is not an unfortunate side effect that a future software patch will make conceptually disappear. Practical computation converts electrical work into heat because real circuits have resistance, switching losses, leakage, memory traffic, and control overhead. Better hardware can reduce energy per operation. It cannot make a large physical computer nonphysical.

The irony is that the most apparently abstract product in the economy has become one of the clearest demonstrations that information is physical.

A model parameter has no weight in the sentence “the model has a trillion parameters.”

The hardware storing, moving, and multiplying those numbers certainly does.

Memory bandwidth matters.

Interconnect matters.

Packaging matters.

Power delivery matters.

Thermal resistance matters.

Chip yield matters.

The abstract architecture becomes constrained by copper, silicon, voltage, heat, and distance.

Distance is especially rude.

Moving data across a chip costs energy. Moving it across a board costs more. Moving it between racks requires networking. Moving it across regions requires fiber and optical equipment. In many machine-learning workloads, getting data to the arithmetic units can consume as much design attention as the arithmetic itself.

The intelligence is partly a logistics problem for bits.

This is where biological brains offer an instructive contrast.

Neurons are slow compared with transistors, but memory and computation are not separated in the same clean way as in conventional computer architecture. Synaptic state sits where signals are integrated. Brains exploit dense local connectivity and massively parallel low-frequency operation. They avoid shuttling every intermediate representation back and forth to a remote memory hierarchy at gigahertz rates.

Digital systems compensate with speed, precision, replicability, and industrial power.

Different architecture, different metabolism.

The energy debate around AI often collapses into two equally unhelpful camps.

One says the demand is catastrophic by definition because large numbers sound morally incriminating.

The other says efficiency will solve it because computation has historically become cheaper per unit.

Both ignore rebound.

When a capability becomes cheaper, people often use more of it.

Computing history is full of this pattern. Transistors became dramatically more efficient and the world did not respond by using one small computer forever. It built billions of devices, larger software systems, streaming services, cloud platforms, cryptocurrency networks, simulations, and now large AI workloads.

Efficiency changes what becomes economically feasible.

Feasibility creates demand.

The total can rise even while energy per operation falls.

This is not a law that demand must always outrun efficiency. It is a warning that per-unit improvement and aggregate consumption are different variables.

The IEA’s own scenarios reflect this uncertainty. Efficiency can materially alter future data-center demand. So can slower adoption. So can new model architectures, specialized hardware, power constraints, and economics.

The future bill depends on what intelligence we decide to buy.

That is a more interesting question than whether AI is “worth” electricity in the abstract.

Electricity is already spent on advertising auctions, video autoplay, decorative lighting, aluminum smelting, air conditioning empty rooms, fertilizer production, gaming, refrigeration, medical imaging, financial trading, sewage treatment, and millions of other activities.

Energy use is not self-justifying because it produces GDP, and it is not self-condemning because it produces heat.

The question is comparative value under real constraints.

What does one more megawatt accomplish here instead of somewhere else?

That question becomes uncomfortable when the output is epistemic.

A model may use electricity to generate ten million low-value summaries.

Or to help screen molecular structures.

Or to optimize ad placement.

Or to translate languages.

Or to produce fraudulent content.

Or to assist software development.

Or to search scientific literature.

The same hardware can support very different forms of knowing and pretending to know.

The thermodynamics does not rank them.

Humans have to.

This is where certainty enters the chapter.

Machine intelligence can make knowledge feel cheap because the marginal interface cost is tiny. Ask another question. Generate another answer. Run another analysis. Create another image. Search another corpus. The response arrives without making the power plant visible.

When the marginal experience approaches zero, epistemic appetite expands.

We start asking machines to produce answers simply because answers are available.

Not all answers reduce uncertainty.

Some manufacture it.

A fluent model can turn weak evidence into confident prose faster than a human expert can verify the claims. Automated systems can generate millions of predictions whose apparent precision exceeds the quality of their input. Synthetic content can flood the channels through which later systems learn.

Computation can spend energy to produce epistemic exhaust.

That phrase is metaphorical, unlike the heat leaving a server rack. The epistemic exhaust consists of plausible claims, duplicate content, spam, generated reports, unverified summaries, and predictions nobody had reason to make before prediction became cheap.

The physical and informational waste streams can reinforce each other.

If generation becomes nearly free, verification becomes the bottleneck.

A model can write a legal brief in seconds.

Checking every citation still takes work.

A model can propose a thousand scientific hypotheses.

Experiments remain slow.

A model can generate candidate drug molecules.

Synthesis, toxicology, clinical trials, and regulatory evidence remain physical processes.

A model can produce code quickly.

Testing, security review, maintenance, and consequences remain.

Cheap inference can increase demand for expensive reality.

That may be one of AI’s largest near-term effects on science and engineering.

The bottleneck moves from idea production toward falsification.

Human intelligence already had this problem. It is easier to speculate than to build an instrument. Easier to tell a story than to run a controlled trial. Easier to predict a market than to wait a decade and see.

AI changes the ratio.

Hypotheses can now be manufactured at industrial scale.

The world has not become correspondingly faster at answering them.

This is where the cost of knowing becomes useful as discipline.

A claim deserves resources in proportion to what changes if it is true or false.

Not every uncertainty needs to be reduced.

Not every dataset needs to be collected.

Not every model output needs another decimal place.

Not every question deserves an inference run merely because capacity exists.

This sounds austere until you look at the opposite condition: a civilization that burns increasing physical resources generating low-consequence certainty while leaving high-consequence ignorance untouched.

We can imagine it easily because parts already exist.

Advertising systems infer which thumbnail will increase click probability while tropical ecosystems disappear faster than species can be cataloged.

Financial systems optimize latency in microseconds while public infrastructure leaks water through unmapped pipes.

Recommendation engines model entertainment preferences in exquisite detail while many diseases affecting poorer populations remain understudied.

The asymmetry is not caused by thermodynamics.

It is caused by incentives.

Thermodynamics merely prevents the inference machinery from being free.

Every optimization has opportunity cost somewhere in the physical world.

This does not imply a central planner should allocate all compute according to moral rank. It implies that claims of weightless abundance are dishonest.

Someone pays for the chips.

Someone builds the grid.

Someone hosts the transmission line.

Someone uses the water.

Someone lives near the generation.

Someone mines the materials.

Someone receives the benefit.

The location of those people may differ.

Data centers are unusually clean industrial facilities compared with many older factories. They do not have smokestacks from every server rack. They can be powered by low-carbon electricity. Waste heat can sometimes be reused. Water use can be reduced through cooling choices. Workloads can shift across time and geography in ways a blast furnace cannot.

Those advantages are real.

They do not remove tradeoffs.

The IEA projects renewables meeting a large share of additional data-center electricity demand through 2030, while natural gas, coal, and nuclear also contribute depending on region and scenario. Electricity supply for computing becomes another driver shaping which power plants, transmission lines, storage systems, and generation technologies get built.

Intelligence has entered resource planning.

The physical buildout may eventually teach software a useful humility.

A programmer can instantiate a new process with one command.

A grid operator cannot instantiate a substation the same way.

Transformers have manufacturing lead times. Transmission lines require permits and rights of way. Power plants take years. Water rights are political. Communities object. Weather constrains renewable output. Reliability standards limit how quickly large loads can appear.

The physical layer applies brakes the interface forgot.

This may improve AI.

When compute is scarce, efficiency becomes valuable again. Models get distilled. Specialized hardware improves. Workloads are scheduled around power availability. Algorithms that use less memory or fewer parameters gain economic advantage. Not every request gets the largest model.

Constraint can produce intelligence about intelligence.

The brain learned this under evolutionary pressure.

Perhaps computing will too.

The deeper issue is what we do with the saved capacity.

If every efficiency gain is immediately spent generating more low-value certainty, the waste heat remains while the epistemic value plateaus.

The metric cannot be tokens per joule alone.

It has to include consequence per joule, though no universal unit exists for consequence.

That is where judgment returns.

A physicist using computation to search gravitational-wave data and a spam network generating fake reviews both consume electricity. Thermodynamics treats the heat impartially.

Civilization should not.

The cost of knowing becomes ethical only after purpose enters.

Without purpose, a data center is a highly organized heater that happens to emit symbols before it emits warmth.

With purpose, those symbols can alter medicine, science, engineering, art, logistics, or governance.

The difference is not visible in the cooling tower.

It exists in what the computation changes outside the building.

We have spent centuries making information cheaper to copy and process.

We are now building machines that make plausible answers cheap to produce.

The next scarce resource may be the willingness to ask whether the answer was worth producing.

Heat is honest.

It leaves the rack either way.