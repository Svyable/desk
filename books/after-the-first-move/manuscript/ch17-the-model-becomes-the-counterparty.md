# The Model Becomes the Counterparty

For most of the history of statistics, a model did not argue back.

It might be wrong. It might be badly specified. It might be used by a human who misunderstood it. But the regression itself did not notice that people were changing behavior to influence its output. The score did not read the forum where applicants discussed the score. The forecast did not rewrite its own interface after users discovered a pattern.

Machine learning systems do not magically solve this old limitation, but they make the loop faster and more intimate.

A fraud model classifies transactions. Fraudsters learn which behavior attracts attention. The data distribution changes. A spam filter catches a pattern. Senders alter language. A ranking model rewards a format. Creators change production. A hiring model influences which candidates advance. Applicants learn how automated screening works. A language model is tuned from human feedback, users learn how to prompt it, the provider observes those prompts, and later systems are trained or evaluated on a world in which people already know how to interact with language models.

The model becomes a counterparty.

That word matters because it changes the mental picture. A counterparty has interests, constraints, and a model of your behavior. The AI system may not possess interests in the human sense, but the institution operating it has objectives, and the system’s behavior shapes your choices. You adapt to what it will accept, rank, flag, recommend, or generate.

People already do this with search engines. Writers learned search-engine optimization. Businesses structured pages around discoverability. Search providers changed algorithms because the web had been optimized for previous algorithms. The index and the indexed coevolved.

Generative AI extends the same logic into dialogue.

Users learn that phrasing matters. They discover that one request produces generic output and another produces a useful structure. Developers wrap models with prompts, tools, memory, retrieval, and validation. Providers change models, safety systems, and interfaces. The ecology of prompting responds.

A model benchmark can experience the same pressure.

At first, a benchmark measures a capability with some independence. Once the benchmark becomes prestigious, model developers optimize against it, directly or indirectly. Test items leak into training corpora or become similar to training examples. Researchers design systems with the benchmark in mind. Scores rise. Some of the rise is genuine capability; some is specialization to the evaluation environment.

The benchmark changes from measurement to curriculum.

This is Campbell’s problem in machine learning form.

The response cannot be to abandon benchmarks. Progress requires evaluation. The response is to maintain evaluation systems that expect adaptation: hidden or refreshed test sets where appropriate, multiple benchmarks, adversarial evaluation, real-world tasks, distribution shifts, and careful separation between development and independent testing.

The same principle applies after deployment.

NIST’s Generative AI Profile, published in 2024 as a companion to its AI Risk Management Framework, emphasizes lifecycle risk management rather than a one-time certification. That orientation is sensible because generative systems sit inside changing technical and social environments. Inputs change, users invent uses, attackers adapt, dependent systems evolve, and the model provider updates components.

A model that was acceptably safe in one deployment can become unsafe when placed inside a different loop.

Consider an AI assistant that drafts customer-service responses. In first-order analysis, the system saves time and perhaps improves consistency. In second-order analysis, agents begin trusting the drafts, customers learn the style, managers change staffing, performance metrics adjust, the company sends more automated messages, and the training data increasingly contains text influenced by previous model outputs.

The intervention changes the labor process and the text ecology.

One risk is automation bias: people defer to the system because it appears competent. Another is the opposite—automation contempt—where users learn that outputs are unreliable and stop engaging seriously. Both are adaptation. The quality of the human-AI team depends on the trust calibration produced through experience.

Trust is not a setting.

A company can tell employees “verify important outputs,” but verification has a cost. If the model is usually right, humans become less vigilant. If verification requires as much expertise as doing the task, time savings shrink. If managers reward speed, employees infer how much verification is really expected.

The workplace learns a verification culture.

That culture can become fragile gradually. Early users carefully check every answer. Months pass without visible failure. Workflows accelerate. New employees inherit the faster process but not the memory of why checks existed. Eventually a rare error crosses a system whose defenses were designed for the caution of the first generation.

Success erodes skepticism.

This is the same dynamic that weakens safety systems after long periods without accidents. AI merely gives it a new surface.

Another second-order issue is generated data. As synthetic text, images, code, and audio become common, future models encounter material produced by earlier models. Researchers study the consequences under different conditions; simplistic claims that synthetic data inevitably causes collapse or that it is harmless are both too broad. Synthetic data can be useful when generated and filtered carefully. It can also narrow diversity, amplify errors, or obscure provenance if used poorly.

The important structural point is recursive: the model’s outputs can become part of the model’s future environment.

A recommendation model can shape which products sell, and sales become training data. A coding assistant can shape common code patterns, and public code becomes training material. A writing assistant can shape business language, and business language becomes evaluation context. The machine participates in manufacturing the distribution on which the next machine is judged.

This is not unprecedented. Human institutions have always trained on artifacts created by previous institutions. Law cites law. Science cites science. Art responds to art. Markets use prices produced by markets. The novelty is scale and automated repetition.

Recursion gets cheap.

Cheap recursion can magnify small biases. If an automated hiring tool slightly favors one pattern, the selected workforce generates future success data concentrated in that pattern. If a content generator slightly overproduces a phrase, millions of generated documents can make the phrase common. If a ranking system slightly favors a style, creators can flood supply with that style.

A tiny first-order preference can become a population-level prior.

This is why feedback data needs provenance. Did users independently choose this behavior, or did the system suggest it? Was this text written by a person, generated by a model, or edited by both? Did the recommendation cause the purchase? Was the evaluation conducted on users who had already learned the interface?

Without provenance, the system can congratulate itself for creating the behavior it predicts.

Causal inference becomes more important, not less, as models become more powerful.

A personalization system may observe that users who receive recommendation type A engage more. Was A better, or were users selected for A already likely to engage? Randomized experiments can help locally. But long-term adaptation complicates even clean experiments because treatment changes habits. A two-week test may estimate immediate response while missing how users learn the product over months.

Time horizon is part of model evaluation.

This is particularly important for AI companions, tutors, coaches, and agents that maintain long relationships. The product does not merely answer isolated prompts. It can shape dependence, confidence, study habits, decision routines, and expectations about human interaction.

The relevant outcome is not only whether the next answer is satisfying.

A tutor that always supplies the solution may maximize short-term satisfaction and weaken learning. A coding assistant that removes every difficulty may increase output while reducing opportunities for junior engineers to form mental models. A writing assistant that instantly smooths prose may make a person less willing to tolerate the awkward drafting through which thought sometimes develops.

Assistance changes capability formation.

This does not mean friction is inherently educational. Nobody becomes a better accountant by retyping numbers a machine can calculate. Tools have always moved skill boundaries. Calculators changed arithmetic practice. Search engines changed memory. Spellcheck changed proofreading. High-level programming languages changed what programmers had to hold in mind.

The question is which difficulties contain learning and which are merely waste.

That is a human judgment about task structure, not a property the model can infer from engagement alone.

AI agents add another layer. A model can take actions through tools: schedule, purchase, code, search, message, allocate, monitor. Once an agent acts, other systems respond. A sales agent sends more outreach; recipients adapt with filters. A procurement agent negotiates; suppliers learn its patterns. A trading agent enters markets; prices move. A security agent patches systems; attackers adapt.

The agent is not simply predicting the world. It is entering the world as an actor.

This makes evaluation after deployment unavoidable. Laboratory performance is necessary and insufficient. The important failures may arise from interaction among agents, humans, policies, and markets rather than from a single model output.

Multi-agent systems make this explicit. Give many agents goals and they create an ecology. They may coordinate, compete, copy, exploit shared tools, congest resources, or discover strategies designers did not anticipate. The behavior of one depends on beliefs about others.

Game theory returns through software.

The practical defense is not to predict every emergent interaction. It is to limit consequences while learning. Permissions, spending limits, rate limits, reversible actions, audit logs, staged deployment, human approval for high-impact steps, and independent monitoring create containment around adaptation.

These are institutional design choices, not merely model features.

They also shape behavior. An agent with a narrow permission set explores a different action space from one with broad autonomy. A human who knows an action requires approval delegates differently. A system with clear receipts encourages different trust than one whose actions are hard to reconstruct.

Governance is part of the agent’s environment.

This matters for characterizing AI risk. Public debate often oscillates between anthropomorphism and dismissal. One side speaks as though models have fully human intentions. The other says they are just tools. Both frames can obscure the interaction problem.

A thermostat is a tool. A global market of adaptive software agents acting through payments, code, communication, and contracts would still create emergent strategic behavior even if no individual system experienced a human-like intention.

Agency at the system level can matter without personhood at the component level.

Corporations already teach this lesson. A corporation has goals, routines, incentives, memory, and legal agency even though no single employee is “the corporation.” Markets behave in ways no trader intends. Bureaucracies produce outcomes no official designed. Emergence does not require a ghost.

AI increases the speed at which organizational intentions can be translated into automated action.

That makes objective design unusually consequential. A small metric preference repeated millions of times becomes policy. An ambiguous instruction interpreted across thousands of actions becomes a pattern. A reward function can create pressure the designer experiences only after deployment.

The old management lesson applies: every objective casts a shadow.

The best AI systems will therefore not be those with the most elaborate single objective. They will be surrounded by institutions that can observe side effects, hear appeals, revise rules, and preserve human judgment where values conflict.

This may sound less futuristic than autonomous intelligence deserves. That is a virtue.

We already know how adaptive systems fail. They optimize proxies. They create constituencies. They hide bad news. They synchronize on common models. They change the population that generated the data. They make successful safeguards look unnecessary. They turn reputation into reality and reality into reputation.

AI does not repeal these lessons. It industrializes them.

The danger is not only that the model will misunderstand us.

It is that we will reorganize ourselves around what the model understands.