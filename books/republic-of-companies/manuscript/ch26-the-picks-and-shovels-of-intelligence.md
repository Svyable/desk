# The Picks and Shovels of Intelligence

The most important company of the 2020s may turn out to be wrong.

That is the first thing to say about NVIDIA.

The decade is not finished. The companies changing American life most visibly are still moving. OpenAI made generative artificial intelligence legible to hundreds of millions of people. Microsoft turned its partnership with OpenAI into a platform strategy spanning cloud computing and workplace software. Amazon and Google are spending extraordinary sums on data centers, custom chips, models, and power. Meta distributes open-weight models while operating some of the largest computing systems on earth. SpaceX has changed launch economics and satellite communications. Apple remains the owner of the most important personal computing surface many Americans touch every hour.

A company not yet founded could still make this chapter look foolish.

History is easiest after the market closes.

The 2020s have not closed.

NVIDIA wins provisionally because it sits underneath too many of the decade’s rival futures.

If generative AI becomes a durable general-purpose technology, NVIDIA has supplied a large share of the computing machinery used to train and run it. If the frontier shifts from giant language models toward robotics, scientific computing, autonomous systems, simulation, or agents, the company has been building software and hardware for those workloads too. If cloud providers succeed, they buy and rent NVIDIA systems. If AI laboratories succeed, they buy or rent NVIDIA systems. If enterprises decide not to build models themselves, they still consume inference from infrastructure that often contains NVIDIA hardware.

The company’s position is not that of the gold prospector.

It is closer to the company selling the picks, shovels, railroads, explosives, and accounting software to every prospector at once.

That cliché is overused because the business model is genuinely powerful.

The more surprising fact is that NVIDIA spent years building the mine before anyone knew exactly what would be dug from it.

The company was founded in 1993 around graphics. Its early strategic problem was the growing demand for realistic three-dimensional images in games and multimedia. Graphics rendering involves performing many similar mathematical operations across large arrays of pixels and geometry. That workload rewards parallelism: many calculations can happen at once.

Central processing units were designed to be flexible generalists. Graphics processing units became extraordinarily good specialists.

Then the specialists escaped graphics.

By the early 2000s, researchers and engineers had begun using increasingly programmable graphics processors for non-graphics computation. NVIDIA made the shift explicit in 2006 with CUDA, a programming model and software platform designed to let developers use the parallel processing capability of its GPUs for general computational work.

CUDA is the reason this chapter is about a company rather than a chip.

A processor can be technically superior and still lose if developers cannot use it easily enough. Hardware changes quickly. Software accumulates.

CUDA gave researchers libraries, tools, compilers, documentation, examples, and a programming environment that let them treat the GPU as a computing platform rather than a strange graphics device. Over time, more scientific applications, machine-learning frameworks, engineering tools, and libraries learned to speak CUDA.

The installed base grew.

The software base grew with it.

The software base made the next GPU more useful on arrival.

That is a network effect hiding inside a semiconductor company.

Intel had already demonstrated the power of an instruction-set ecosystem. Microsoft demonstrated the power of an operating system. NVIDIA built something adjacent: a software environment that made generations of accelerated hardware progressively easier to adopt.

The moat was not simply transistor count.

It was memory in other people’s code.

This mattered enormously when deep learning arrived.

Modern neural networks can require enormous numbers of matrix and tensor operations. Training them involves applying related mathematical transformations repeatedly across huge datasets. That structure fit the parallel strengths GPUs had developed for graphics.

Researchers discovered the fit before the mass market understood why it mattered.

In 2012, Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton used NVIDIA GPUs to train AlexNet, a neural network that won the ImageNet image-recognition competition by a striking margin. The result did not prove that every future AI system would run on NVIDIA hardware. It showed that a class of algorithms once constrained by computing cost could improve dramatically when given enough parallel processing.

The field took notice.

Deep learning moved from an academic specialty toward an industrial race.

NVIDIA was already standing on the track.

The company then did something historically important: it treated a research trend as an architecture problem early enough to shape the architecture around it.

GPUs gained tensor-focused capabilities. Systems gained faster interconnects. Software libraries became more specialized. The company built DGX systems to package multiple GPUs into integrated AI machines. Networking became increasingly central because frontier models could no longer fit comfortably onto one accelerator or one server. NVIDIA expanded beyond the chip into the links that let chips behave like a larger computer.

This is the same movement seen elsewhere in the book.

DuPont moved from powder recipe to process system.

Ford moved from car design to production system.

IBM moved from individual computer to compatible architecture.

Amazon moved from warehouse to infrastructure.

NVIDIA moved from processor to full computing stack.

The company’s language changed accordingly.

It increasingly described data centers as “AI factories.”

The phrase is marketing, but it contains a useful idea. A factory takes inputs and turns them into outputs through capital equipment. An AI data center takes electricity, data, model architecture, software, and computing hardware and turns them into trained models or generated tokens.

The economic bottleneck is no longer merely owning a clever algorithm.

It is operating the capital plant required to manufacture useful intelligence at scale.

That framing explains why the 2020s AI boom became a physical infrastructure boom.

Generative AI looked like software on a screen. Behind it came server racks, substations, cooling systems, high-bandwidth memory, optical links, networking switches, construction crews, transformers, backup power, water systems, gas turbines, transmission lines, and negotiations over where enough electricity could be found.

The more immaterial the product appeared, the more material its production became.

This is one of the oldest patterns in the book.

The telegraph seemed to make information weightless while requiring poles and wire across a continent.

Amazon made shopping feel like a click while building warehouses and delivery stations everywhere.

Cloud computing made servers disappear from the customer’s office by concentrating vastly more servers somewhere else.

Artificial intelligence makes an answer appear in seconds because an industrial system consumed extraordinary amounts of capital before the prompt arrived.

NVIDIA became one of the companies selling the scarce machinery inside that industrial system.

The H100, based on the Hopper architecture and released into the market in 2022, became a defining accelerator of the early generative-AI boom. Its timing was extraordinary. ChatGPT’s public launch late that year turned large language models from an industry story into a mass cultural event. Cloud providers and AI laboratories rushed to secure computing capacity. H100 systems became a unit of strategic planning. Companies discussed GPU availability the way earlier industrialists discussed steel, oil, or rail access.

A chip had become a bottleneck in the production of a new kind of software.

That bottleneck produced unusual economics.

For much of semiconductor history, buyers benefited from brutal competition and rapid performance improvement. Chip companies lived with cyclical demand, inventory corrections, enormous fabrication costs, and the possibility that a new architecture could make a previous advantage disappear.

NVIDIA’s 2020s position looked different because demand for frontier AI computing grew faster than supply chains could comfortably respond. Gross margins rose to levels more commonly associated with software than industrial hardware. Full-year revenue for fiscal 2026 reached more than $215 billion, up dramatically from the company’s pre-generative-AI scale. Data-center products became the center of the business.

The numbers were astonishing.

The dependency was more important.

Microsoft, Amazon, Google, Oracle, Meta, OpenAI-linked infrastructure providers, sovereign AI projects, research institutions, pharmaceutical companies, manufacturers, and startups were all planning around access to accelerated computing.

The same company could be supplier to firms competing fiercely with one another.

That position resembles Standard Oil in one respect and differs in another.

Standard integrated a commodity market until rivals worried that access to transportation and refining had become organized around one company.

NVIDIA does not own the AI applications customers are building. Its power comes from supplying a technical layer beneath them that has become unusually hard to substitute at the highest-performance frontier.

The antitrust question therefore arrives in modern language.

How durable is CUDA lock-in?

Can cloud companies shift workloads to their own custom accelerators?

Can AMD or other chipmakers build enough performance and software compatibility to narrow the moat?

Will open standards weaken the advantage?

Will inference become less dependent on premium GPUs than training?

Will new model architectures reduce compute requirements?

Will electricity, memory, networking, or data become the true bottleneck instead?

These are not objections to NVIDIA’s selection.

They are the reasons the selection remains provisional.

Every dominant platform looks most inevitable near the moment competitors reorganize around escaping it.

IBM once looked like computing itself.

AT&T once looked like the natural architecture of telephony.

Microsoft once looked nearly impossible to route around on the desktop.

Intel once possessed the defining processor franchise of personal computing.

The history of companies is full of moats that turned out to contain bridges.

NVIDIA knows this better than most because it built its current position outside Intel’s original center of gravity.

The company’s response has been to widen the system.

Blackwell, introduced in 2024, was presented not simply as a faster GPU but as part of a rack-scale computing platform. NVLink connects accelerators at extraordinary bandwidth. Spectrum-X Ethernet and InfiniBand products address scale-out networking. Grace and later Vera CPUs extend the stack. BlueField data-processing units handle infrastructure tasks. Software libraries, model-serving tools, simulation systems, networking, and orchestration increasingly make the unit of competition larger than a chip.

By 2026, NVIDIA was ramping the Vera Rubin generation into production with partners across hundreds of factories and dozens of countries. The company described systems containing CPUs, GPUs, switches, network interfaces, storage processing, and software as one coordinated AI factory.

The strategy is clear.

If competitors attack the GPU, make the product the rack.

If they attack the rack, make the product the data center.

If they attack the data center, make the product the developer ecosystem and software stack surrounding every layer.

Integration moves the boundary of comparison.

This creates value for customers because the pieces are optimized together. It also deepens dependency because replacing one component may require replacing assumptions elsewhere in the stack.

The architecture becomes the contract.

The company’s geographic position complicates the idea that this is simply an American industrial triumph.

NVIDIA is an American company headquartered in California. Its advanced chips depend heavily on manufacturing by Taiwan Semiconductor Manufacturing Company and on a wider Asian supply chain for packaging, memory, substrates, servers, networking equipment, and assembly. The most valuable American semiconductor designer of the decade does not own the most advanced fabrication plants making its leading products.

The supply chain is global because no one country efficiently contains every capability.

That global specialization creates extraordinary productivity.

It creates geopolitical risk.

Taiwan sits at the center of advanced semiconductor manufacturing while facing military pressure from the People’s Republic of China. The United States has responded to semiconductor dependence with industrial policy, including the CHIPS and Science Act, export controls, subsidies, and efforts to expand domestic fabrication and packaging capacity.

NVIDIA therefore inhabits another version of the public-private boundary that has run through this book from the first chapter.

The company sells globally.

The U.S. government restricts which advanced products may be sold to particular countries because computing power has become a national-security concern.

China is both a large market and a strategic competitor.

A design decision can become an export-control question.

A chip specification can become foreign policy.

This is what happens when a commercial input becomes strategically important enough that governments stop treating trade as merely commercial.

The company has had to redesign products and absorb lost opportunities as export rules changed. Customers and policymakers have argued over whether restrictions slow rivals, accelerate domestic alternatives abroad, or both. There is no clean corporate answer because NVIDIA does not control the geopolitical system in which its products have become important.

Its success helped make the system care.

The power problem is even more literal.

AI data centers require electricity in quantities that have changed planning assumptions for utilities and governments. Large projects can demand power comparable with heavy industry. New transmission, generation, and grid connections take years. Communities debate water use, land, tax incentives, noise, backup generators, and whether data centers create enough employment to justify infrastructure demands.

NVIDIA does not decide where every data center is built.

Its performance roadmap influences how much computation customers believe they can profitably deploy.

A faster accelerator can improve efficiency per unit of work and still increase total electricity demand if the lower cost causes vastly more work to be attempted.

Efficiency can expand consumption.

This is Jevons’ paradox in silicon clothes.

The environmental accounting of AI therefore cannot stop at watts per token. It has to consider total demand, the electricity mix, construction, cooling, chip manufacturing, and what applications the computation replaces or creates.

NVIDIA’s systems may make a given workload more efficient while helping make a much larger workload economically plausible.

That is exactly what transformative infrastructure does.

The labor story is similarly distributed.

NVIDIA itself employs highly paid engineers and technical workers. The supply chain includes fabrication workers, assembly workers, server manufacturers, electricians, construction crews, data-center technicians, utility workers, miners, chemical suppliers, and logistics networks around the world.

The AI interface tends to erase this labor because the output arrives as text, image, code, or decision.

The intelligence looks synthetic.

The infrastructure is deeply human.

The company of the 2020s is also unusual because its customers are automating cognition rather than movement or material transformation.

Ford mechanized assembly.

Walmart optimized distribution.

NVIDIA sells machinery used to automate or augment parts of writing, coding, design, customer service, research, analysis, translation, media production, and decision support.

That gives the company an indirect relationship to labor markets far outside technology.

A GPU does not replace an accountant or writer.

Software running on accelerated computing might alter how many accountants or writers a firm hires, what tasks they perform, or how quickly their work is expected.

The company supplies capability into choices other institutions make.

This makes responsibility difficult to assign.

A semiconductor firm can plausibly say it does not choose the application.

A society can reasonably reply that companies shaping foundational capabilities cannot be understood only as neutral vendors.

The same tension surrounded explosives, railroads, communications networks, and cloud infrastructure earlier in this book.

General-purpose technologies multiply consequences beyond the control of their makers.

That is why they become political.

The strongest competitor for this decade is OpenAI.

ChatGPT changed the public understanding of artificial intelligence almost overnight. It made generative systems conversational, useful, strange, and threatening in a way decades of research papers had not. It triggered investment, product launches, school policies, labor anxiety, copyright disputes, and strategic panic across corporate America.

If this book selected the company that most changed American consciousness during the first half of the 2020s, OpenAI would probably win.

The criterion is different.

Which company most changed the operating system?

NVIDIA’s claim is that the intelligence boom became an infrastructure boom organized around accelerated computing, and that its architecture shaped who could participate, how much participation cost, where data centers were built, what cloud providers purchased, and how engineers wrote software.

OpenAI made the demand visible.

NVIDIA was already selling the scarce input.

Microsoft is the other formidable candidate. It owns an enormous cloud, enterprise software distribution, the Windows installed base, and a strategic relationship with OpenAI. The company has used AI to strengthen products used daily by businesses around the world. Its ability to place AI features into existing workflows may ultimately prove more consequential than the hardware beneath them.

Amazon and Google could make the same argument from cloud infrastructure and custom silicon. Meta could make it through model distribution and social reach. TSMC could make it through fabrication. SpaceX could make it through launch and satellite networks.

A decade this consequential should have an unstable winner.

The instability keeps the chapter honest.

There is another reason to end with NVIDIA rather than a consumer-facing AI company.

The book began with tea.

The tea mattered because the East India Company was a system behind the commodity: charter, monopoly, finance, shipping, taxation, empire, and political privilege.

Two hundred and fifty years later, the most important company may again be easiest to misunderstand if one looks only at the visible product.

NVIDIA’s visible product is a chip.

The system behind it includes developer tools, software libraries, foundries, memory suppliers, network fabrics, servers, data centers, energy, export controls, cloud providers, AI laboratories, capital markets, and governments trying to decide whether computational capacity has become national infrastructure.

The product is not really the chip.

The product is a place in the stack.

Every company in this book fought for such a place.

The Bank of North America sat between the republic and credit.

The B&O sat between cities and western markets.

AT&T sat between people who wanted to speak.

Sears sat between rural households and national inventory.

Standard Oil sat between crude petroleum and useful light.

IBM sat between organizations and computing.

Microsoft sat between PC makers and software developers.

Walmart sat between manufacturers and household demand.

Google sat between intention and discovery.

Amazon sat between transactions and infrastructure.

NVIDIA sits between algorithms and the physical work required to make them run fast enough to matter.

That position has already created one of the most valuable corporations in history.

It may not last.

The company’s customers are investing heavily in alternatives precisely because dependence is expensive. Custom accelerators from Google, Amazon, Microsoft, Meta, and others can move selected workloads away from NVIDIA. AMD competes directly. Model efficiency could reduce demand for the highest-end hardware. Open-source software could weaken proprietary layers. A breakthrough in architecture could move the bottleneck somewhere else.

The future may route around NVIDIA.

That would not erase the company’s importance in this decade.

The railroad remained important after highways.

IBM remained important after the mainframe stopped defining all computing.

Intel remains important after losing strategic ground in the data center and mobile computing.

A company can define the transition without owning the destination.

That may be NVIDIA’s final place in American history.

Or this may still be the early chapter.

The honest answer is that we do not know.

The people in 1773 did not know that tea sitting in Boston Harbor would become part of a national creation myth. Robert Morris did not know how completely banking would become embedded in the republic. Samuel Slater did not know what factory work would become. Railroad investors did not know that the country would build highways that displaced passenger rail. IBM did not know that a student might one day carry more computing power in a pocket than a data center once contained.

They were living before the verdict.

For the first time in this book, so are we.

**Verdict:** NVIDIA provisionally wins the 2020s because accelerated computing became a scarce industrial input to the artificial-intelligence boom, and NVIDIA turned decades of GPU architecture, CUDA software, networking, and systems engineering into a full-stack platform on which rival AI laboratories, cloud companies, enterprises, and governments increasingly depend. The choice is deliberately unfinished. So is the decade.