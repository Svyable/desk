# Chapter 6 — Stargate

A data center is a promise with a power contract.

That is the useful way to think about the largest artificial-intelligence infrastructure announcements of the present era. They arrive in public as numbers so large that they become difficult to picture. Hundreds of billions of dollars. Gigawatts. Campuses. Accelerators counted by the hundreds of thousands. New substations, transmission lines, cooling systems, fiber routes, financing vehicles, land deals, and queues for electrical equipment that most software users have never had reason to name.

In January 2025, OpenAI announced the Stargate Project with an intention to invest $500 billion over four years, beginning with $100 billion. By September of that year it said announced Stargate sites represented nearly seven gigawatts of planned capacity and more than $400 billion of investment over three years. A month later, after adding a Michigan project, it described the planned footprint as exceeding eight gigawatts and $450 billion. Those are company announcements, not a claim that every dollar was already spent or every gigawatt commissioned. The distinction matters. So does the willingness to announce the commitment at all. [SI-010][SI-011][SI-012]

The natural response is to treat numbers like these as spectacle. The better response is to treat them as a bill of materials for a forecast.

The forecast is that the world will consume much more machine intelligence than it does today.

Not somewhat more. Not merely enough to replace the searches, emails, and programming tasks already being performed. Enough that companies are willing to build physical systems whose useful lives extend beyond the model generation that justified them. Enough to commit capital before anyone can know precisely which model will run in which rack, what customers will ask it to do, or how much useful cognition a dollar will buy when the concrete has cured.

This is why Stargate matters to the argument of this book. The name is memorable, but the underlying phenomenon is larger than any one project. Artificial intelligence has crossed an economic boundary. It is no longer only a software race in which cleverness can be represented by a research paper and a cluster allocation. It has become an infrastructure race in which beliefs about future demand are poured into foundations.

## Forecasts made physical

Software has trained us to think of scaling as unusually reversible. If demand rises, rent more servers. If a feature fails, roll it back. If a product misses, redeploy the engineers. The mythology of the cloud reinforced this impression by hiding physical commitment behind an API.

The cloud was never immaterial. It simply made material commitment someone else's problem.

Frontier AI makes the problem visible again because the quantities are too large to remain comfortably abstract. A sufficiently large inference fleet is not a line item that can be summoned after demand appears. Power has to exist. Buildings have to be permitted. Transformers have to be ordered. Networks have to be designed. Accelerators have to be manufactured, packaged, shipped, installed, cooled, maintained, and fed with electricity. Financing has to bridge the time between the decision to build and the revenue that may eventually justify the decision.

The farther upstream one moves, the longer the clocks become.

A model can change in weeks. A rack can be installed in months. A data-center campus can take years. A transmission project can take longer still. Semiconductor fabs and power generation live on timelines that make product road maps look like weather reports.

This creates a strange inversion. The most rapidly changing technology in the world is increasingly dependent on some of the slowest-moving assets in the economy.

To build for AI is therefore to make a forecast under radical technical uncertainty. The builders cannot know the exact architecture of the models that will occupy the capacity. They are betting on something more durable: that whatever the architecture, society will find uses for enormous quantities of computation devoted to intelligence.

The bet is not that today's model is permanent. It is that demand for the category will outrun the obsolescence of its components.

## Why build before demand is proven?

Ordinary capital discipline says to wait for evidence. Sell the product. Observe demand. Add capacity. Repeat.

That sequence becomes unstable when capacity itself determines whether the product can improve and whether customers can be served. If a company waits for perfectly demonstrated demand before building, it may discover that the lead time for the required infrastructure is longer than the patience of the market. A rival willing to commit earlier can train larger systems, serve more inference, lower latency, offer higher limits, and absorb the bursts of usage that turn experiments into habits.

Capacity becomes strategic inventory.

This is familiar in other industries. Railroads laid track toward anticipated commerce. Telecommunications companies buried fiber for traffic that did not yet exist. Semiconductor manufacturers commit to fabs before the final demand for a future process node can be observed. Electricity systems build reserve margins because a grid designed for average demand is a grid designed to fail.

AI combines features of all of them. It has the demand uncertainty of a new consumer category, the capital intensity of heavy industry, the utilization economics of cloud computing, and the improvement curve of semiconductors and software.

The result is a race in which overbuilding can be rational even when some individual projects later look excessive.

Suppose two providers believe demand might triple. One builds for twice today's demand; the other builds for four times. If demand merely doubles, the conservative builder appears wise. If demand quadruples, it is constrained at precisely the moment when users are forming habits and developers are choosing platforms. The aggressive builder has spare capacity, and spare capacity can be converted into lower prices, higher limits, free tiers, developer credits, faster responses, larger contexts, and more generous products.

In other words, an infrastructure surplus can become a consumer subsidy.

This is one of the mechanisms behind subsidized intelligence. It does not require a conspiracy, a permanent loss leader, or a benevolent provider. It can emerge from competitive capital allocation. When firms fear being capacity-constrained more than they fear temporary underutilization, they build ahead. Once the machines exist, the economics of using an idle accelerator are different from the economics of deciding whether to buy the accelerator in the first place.

The sunk machine wants work.

## The two prices of compute

This distinction between investment and utilization is easy to miss.

Before a data center is built, compute has a capital price. Someone must decide whether future revenue justifies land, buildings, chips, networking, power equipment, financing, and labor. The decision competes against every other use of capital.

After the data center is built, compute has an operating price. The relevant question becomes what additional electricity, wear, networking, support, and opportunity cost are incurred by serving another unit of demand.

Those prices are not the same.

A restaurant owner deciding whether to build a kitchen faces one set of economics. A restaurant with an empty table at 8:30 faces another. Airlines understand this so well that they built an entire discipline around filling perishable capacity. Cloud computing made server utilization a science. AI providers now face a related problem with an unusual twist: serving more demand can itself improve the product ecosystem by creating habits, applications, feedback, and developer dependence.

An unused token cannot be stored for next year.

If frontier capacity is built in large increments, periods of slack are inevitable. During those periods, the economically sensible retail response may be generosity. Increase limits. Lower API prices. Route more requests to capable models. Give students access. Give developers credits. Bundle capabilities into subscriptions. Let users discover tasks they would never have attempted when every query felt expensive.

That generosity is not necessarily charity. It is demand creation.

The cheapest way to discover what people will do with abundant intelligence may be to give them more intelligence than their existing habits can justify.

## Stargate as an option

There is another way to read enormous infrastructure commitments: as options on futures that are difficult to forecast individually.

A single application can fail. A model architecture can be surpassed. A consumer behavior can prove temporary. But general-purpose compute can be redirected among many workloads, and a campus with power, cooling, networking, and physical security preserves the option to run whatever valuable workload emerges next.

The option is especially valuable when the space of possible applications is expanding.

Consider the progression from chat to code generation, image creation, voice, video, deep research, long-context analysis, tool use, computer control, and agents. Each capability creates new ways to spend inference. The user who once sent ten short prompts may later ask an agent to browse, reason, call tools, inspect files, revise a plan, test an answer, and continue for minutes or hours. The visible interaction may still be one request. The hidden computation can be orders of magnitude larger.

This means demand can rise even if the number of humans using the product stops growing.

Usage has at least three multipliers: more users, more tasks per user, and more computation per task.

Agents add a fourth: machines initiating work on behalf of users without requiring a fresh human prompt for every step.

Infrastructure builders are therefore not merely betting on subscriber counts. They are betting on the depth of machine effort behind each unit of human intention.

A world with eight billion people does not cap the number of cognitive tasks at eight billion. Once software can act, search, test, retry, compare, simulate, and monitor continuously, demand for computation begins to detach from the waking hours of the human population.

That possibility changes what counts as a large data center.

## The danger of reading announcements literally

Large announced numbers deserve skepticism.

An announcement is not a completed campus. A target is not expenditure. A financing framework is not cash already spent. A proposed gigawatt is not a powered rack. Projects can be delayed, resized, relocated, refinanced, or canceled. Technology can improve quickly enough that less hardware is required for a given amount of useful work. Demand can disappoint. Capital markets can change their minds.

This book should not convert corporate ambition into accomplished fact merely because the numbers are impressive.

The important evidence is not any single headline total. It is the convergence of behavior across firms that do not share identical incentives: cloud providers increasing capital expenditure; chip designers racing to deliver more compute per watt; utilities receiving data-center requests; power developers signing contracts; governments treating AI infrastructure as strategic capacity; model providers seeking long-duration access to compute; and customers consuming increasingly capable systems at retail prices that remain tiny relative to the industrial plant behind them.

Any one actor can be promotional. An entire supply chain committing real capital is harder to dismiss.

Still, the thesis is falsifiable. If AI demand plateaus, if model efficiency improves so quickly that aggregate compute requirements fall, if agents fail to create useful work, or if customers refuse to pay for the resulting services, some of today's infrastructure will become an expensive monument to extrapolation.

That outcome is possible.

Indeed, overbuilding is part of the argument rather than an embarrassment to it. Industries that become abundant often pass through periods in which capital races ahead of proven demand. The waste is visible afterward because infrastructure is lumpy and forecasts are imperfect. But the consumer inherits something from the mistake: capacity already paid for.

The fiber glut after the telecommunications boom did not prove that the internet had no future. It helped make bandwidth cheap enough for a different future to arrive.

The analogy is imperfect, as all analogies are. GPUs depreciate differently from fiber. Model architectures change. Power constraints are local. AI demand may be more elastic or less. The useful lesson is narrower: competitive overinvestment can lower the marginal price of a capability even when investors do not earn attractive returns on every asset built to supply it.

Consumers can benefit from a capital cycle that punishes some capital providers.

## The industrialization of intelligence

The phrase artificial intelligence still encourages a mental picture of software. Stargate points toward a different picture.

Intelligence is becoming an industrial output.

It has factories. Inputs. Supply chains. Bottlenecks. Capacity planning. Yield problems. Energy intensity. Financing costs. Depreciation schedules. Geographic constraints. Strategic reserves. Commodity-like units sold through APIs and bundled into retail products.

This does not make intelligence identical to electricity. Cognition is heterogeneous. Model quality matters. Latency matters. Context matters. Reliability matters. Different tasks consume different quantities of compute, and the value of an answer is not measured by the joules used to produce it.

But industrialization changes the intuition that intelligence must remain expensive because human expertise is expensive.

Human intelligence is produced through biology, childhood, education, experience, sleep, motivation, and a finite working life. Its marginal supply is stubborn. A brilliant engineer cannot be copied into a second meeting at 2:00 p.m. A physician cannot examine a thousand patients simultaneously. A lawyer's best hour cannot be manufactured by adding another rack.

Machine intelligence has different constraints. It is expensive to create the system, expensive to build the fleet, and expensive to power it. Yet once the capability is encoded in a model and sufficient inference capacity exists, another instance can be summoned without raising another child or training another professional for twenty years.

The supply curve can move.

Stargate is a bet on how far.

## The customer sees none of this

Return to the person paying twenty dollars.

They do not negotiate a power purchase agreement. They do not order transformers. They do not model accelerator depreciation. They do not secure land next to transmission. They do not issue debt for a data-center campus. They do not decide whether a new generation of chips justifies replacing hardware that is only a few years old.

They type.

That is the marvel and the distortion.

The consumer interface collapses an industrial system into a text box. The simplicity is real; the hidden complexity is also real. A person can purchase access to a frontier capability without possessing any of the capital assets required to produce it.

This is what mature infrastructure does. A household does not own a power plant to turn on a lamp. A traveler does not own an airline to cross an ocean. A small company does not own a fiber backbone to hold a video call. Infrastructure concentrates fixed costs and distributes access.

AI is entering that pattern at extraordinary speed.

The question is what happens when the distributed product is not merely transport, electricity, or communication, but useful cognitive work.

If the builders are right, Stargate and projects like it will eventually be remembered less for their announced price tags than for what those price tags made cheap.

The most consequential infrastructure is often the infrastructure users stop noticing.

A generation after electrification, people did not marvel at the financing of power stations every time they opened a refrigerator. A generation after the internet backbone was built, nobody pictured trenching crews while loading a webpage. The capital stack disappeared behind ordinary behavior.

That is the destination implied by today's AI buildout: not a world in which everyone thinks constantly about GPUs, but one in which calling on machine intelligence feels too ordinary to deserve a thought.

The monumental investment is aimed at producing an unmonumental experience.

A question. An answer. A task completed.

Twenty dollars a month.

And somewhere far away, a power plant notices.

### Source notes

Claims tagged **SI-010**, **SI-011**, and **SI-012** are documented in `../research/source-ledger.csv`. The ledger deliberately distinguishes announced investment and planned capacity from cash spent and commissioned capacity.