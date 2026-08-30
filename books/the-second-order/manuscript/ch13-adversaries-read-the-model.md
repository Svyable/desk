# Adversaries Read the Model

The spam filter works best on the messages written before the spammer understands it.

At first, that sounds like an implementation problem. A filter is trained on old examples, deployed, and eventually grows stale. Retrain it and the accuracy returns. But spam has always exposed something deeper about prediction in public: the objects being classified can be authored by people who care about the classification.

A spammer does not need to know the model's weights. It is enough to learn that certain words, formats, links, sender patterns, or message structures tend to disappear into the junk folder. The next campaign changes. Words are misspelled. Text becomes an image. URLs are redirected. Harmless vocabulary is mixed with the pitch. The distribution does not merely drift. Someone pushes it.

In 2004, Nilesh Dalvi, Pedro Domingos, Mausam, Sumit Sanghai, and Deepak Verma described this problem as adversarial classification. Their opening premise was blunt: ordinary data-mining methods generally assume that the process producing data is independent of the data miner's activity, yet in domains such as spam, fraud, and intrusion detection the adversary actively manipulates inputs to produce false negatives. They treated classification as a game between classifier and adversary and showed, in a spam setting, why a classifier designed with that response in mind could outperform one trained as though deployment changed nothing.

The important word is game.

Most of this book has dealt with people adapting to metrics, forecasts, rankings, and recommendations because those systems change incentives. Adversarial settings add intent. The person on the other side is not merely living under the rule. They may be studying it.

That changes what it means for a model to be accurate.

Suppose a bank uses a fraud score to decide which transactions receive extra verification. On a frozen historical test set, the score may separate fraudulent from legitimate activity remarkably well. Once deployed, however, successful fraudsters do not keep submitting transactions sampled from that test set. They probe. A rejected attempt is information. A successful attempt is information. Merchants, devices, timing, amounts, and transaction sequences can all be adjusted. The model's decision boundary becomes part of the environment in which the next example is designed.

The same structure appears in less criminal settings. Applicants learn what a hiring screen rewards. Websites learn what search engines rank. Sellers learn what marketplace moderation catches. Students learn what plagiarism detectors flag. Companies learn which accounting ratios lenders watch. Citizens learn which forms of income affect eligibility thresholds. Some adaptations are evasive. Some are perfectly legitimate responses to a published rule. From the model's perspective, both can move the data.

Moritz Hardt, Nimrod Megiddo, Christos Papadimitriou, and Mary Wootters formalized one version of this in work on strategic classification. Their setup imagines a classifier making consequential decisions about people who can alter some of their observable attributes at a cost. The classifier moves first. The person then responds. The goal is no longer simply to find the boundary that best separates yesterday's examples. It is to choose a rule while anticipating how people will move after seeing, inferring, or experiencing it.

This is a subtle shift because manipulation is not always the same thing as deception.

Imagine a lender that rewards applicants for lowering revolving credit utilization. An applicant who pays down a credit-card balance before applying has changed an input in response to the model. If lower utilization reflects a genuinely improved capacity to manage debt, the response may make the person a better credit risk. The metric has induced improvement rather than camouflage.

Now imagine an applicant who learns that a particular reporting date matters and temporarily moves balances in a way that makes the snapshot look healthier while leaving the underlying obligation unchanged. The same broad category of strategic response has produced something closer to gaming.

A model that treats every response as hostile misses this distinction. A model that assumes every response is improvement misses it too.

This is why strategic classification is not simply adversarial robustness with people in place of pixels. Human beings can change the thing the model is trying to predict.

An image classifier confronted with a carefully perturbed picture of a panda is usually supposed to preserve the original semantic label. In the adversarial-example literature, the striking cases are those where small, intentionally chosen changes to an input cause a model to make a confident error. Ian Goodfellow, Jonathon Shlens, and Christian Szegedy showed in 2015 that such examples could be generated efficiently and that adversarial training could improve robustness in their experiments. The attacker searches for a perturbation that changes the model's answer without changing what the input should mean for the task.

With people and institutions, meaning can move too.

If a school is rewarded for graduation rates and responds by improving tutoring, the measured outcome and the underlying objective move together. If it quietly pushes likely dropouts elsewhere before they count, the metric improves while the mission does not. Chapter 2 called this the problem of a metric eating the mission. The adversarial version asks a more operational question: once actors know which features drive the score, which features will they change, at what cost, and what will those changes do to the underlying outcome?

That question can make a model look worse on paper and better in the world.

Suppose an employer wants workers who have mastered a technical skill. A screening rule rewards completion of a demanding, verifiable course. Applicants respond by taking the course. If the course genuinely teaches the skill, the original predictive relationship may weaken: course completion becomes common among people who would not previously have completed it. Yet the policy may have improved the applicant pool by inducing learning.

Prediction has become mechanism design.

This is one reason secrecy is an incomplete defense. Keeping a model hidden can slow adaptation, but consequential systems leak information through decisions. Applicants compare notes. Merchants run experiments. Attackers send probes. Consultants reverse-engineer ranking factors. Even without exact access to a model, repeated interaction can reveal useful approximations of its boundary.

Secrecy also creates a governance problem. A rule important enough to affect employment, credit, insurance, policing, or public benefits may require explanation, appeal, audit, or legal scrutiny. "Make the model impossible to understand" is therefore not a general solution to gaming. In many settings it is not even a desirable one.

The more useful design question is what happens when the rule becomes legible.

Some features survive contact better than others. A cheaply editable field is different from a costly, causally meaningful behavior. A one-time credential is different from a demonstrated ability under independent testing. A self-reported attribute is different from a measurement whose manipulation requires changing the underlying process. None is perfectly safe, and costly signals can create exclusion or waste. But the cost and meaning of adaptation belong in the model design.

This is an old institutional insight wearing statistical clothing. Rules invite optimization. Tax codes create tax planning. Procurement rules shape bids. Sports rules shape tactics. Safety standards shape product design. Sometimes this is exactly what the rule is for. A building code is successful when builders change buildings to satisfy it.

The problem begins when the designer evaluates the rule as though nobody will respond.

A static benchmark asks whether the classifier predicts well on a sample. A strategic benchmark would ask what equilibrium the classifier helps create.

That word can sound grander than the setting warrants. Equilibrium here need not mean a perfectly solved game populated by omniscient actors. Real people have limited information, uneven resources, different costs, and conflicting beliefs about how a model works. Some never adapt. Some copy bad advice from online forums. Some discover loopholes the designer never imagined. Adaptation can be noisy and slow.

Those imperfections matter. They are also why the simplest game-theoretic models should be treated as maps rather than literal descriptions.

Hardt and colleagues assumed a cost function governing how a strategic individual could change an input. That abstraction makes the problem tractable enough to analyze, but real costs are not evenly distributed. One applicant can afford a credential, relocation, consultant, or months of unpaid preparation that another cannot. A classifier that is robust to a representative strategic response may still create a market in costly signals that sorts people partly by their capacity to game.

The second-order effect can therefore be distributional.

Consider a university admissions model that learns that a particular extracurricular pattern predicts persistence. Once families discover the pattern, affluent applicants can purchase coaching, travel, and curated opportunities that reproduce the visible signal. The signal's predictive value may decay. More importantly, the adaptation process can change who is able to appear qualified without changing who would actually thrive.

This resembles rankings, but with a tighter loop. Chapter 5 described institutions reshaping themselves around public rank criteria. Strategic classification brings the same logic to individual decisions: the model defines a surface on which effort is allocated.

Not all effort is waste. That is the central ambiguity.

A society constantly uses measurements to induce behavior. Speed limits are supposed to make drivers slow down. Emissions standards are supposed to make manufacturers reduce emissions. Capital requirements are supposed to make banks hold more loss-absorbing resources. A system that changes behavior can be more valuable than a system that remains predictively pristine.

The goal, then, cannot be to build a classifier people are unable to influence. It is to make desirable ways of improving one's classification line up, as much as practical, with desirable changes in the underlying world.

This is difficult because proxies are easier to manipulate than objectives. The objective may itself be disputed. A lender cares about repayment, but also profitability, fairness, compliance, customer relationships, and risk under future economic conditions. An employer may say it wants "talent" when it actually needs a bundle of skills, reliability, learning ability, teamwork, and role-specific judgment. A moderation system may want safety without suppressing legitimate disagreement. There is rarely one hidden true label waiting to be perfectly recovered.

Adversaries exploit these ambiguities, but they do not create them.

Cybersecurity makes the adversarial case easiest to see because attacker and defender objectives are often plainly opposed. A malware detector is not trying to encourage malware authors to become better citizens. It wants malicious software caught. Here, robust prediction is closer to an arms race.

Arms races have a characteristic rhythm. A defense works. Attackers learn its regularities. Evasion techniques spread. The defense updates. Attackers adapt again. Performance measured immediately after a defensive improvement can exaggerate durable advantage because the other side has not yet had time to respond.

This temporal asymmetry appears outside security. A new plagiarism detector may look excellent before students learn its weaknesses. A new content-moderation rule may sharply reduce a behavior before creators adopt coded substitutes. A new tax enforcement model may find yesterday's evasion strategies while tomorrow's are being designed. The first evaluation measures surprise as well as quality.

Surprise expires.

That does not mean every defense inevitably loses. Adversarial training, rate limits, randomized inspection, ensembles, secure hardware, formal verification, human investigation, legal penalties, and continual updating can all raise the cost of attack. Some domains give defenders structural advantages. An attacker may need to succeed repeatedly while a defender needs only one strong identity check. Manipulation may be expensive. Rules can change. Attackers can make mistakes.

The existence of an adversary is not proof that prediction is futile.

Goodfellow and colleagues' work is useful here because adversarial examples are often cited as evidence of brittleness, yet the same paper also used adversarially generated examples as training data and reduced error in its experiments. The attack became curriculum. A model's failure under purposeful pressure revealed information that ordinary samples did not contain.

This is close to the logic of Chapter 12. There, an agent's own actions generated states on which it needed new instruction. Here, an opponent generates states designed to expose weakness. In both cases, the training distribution becomes endogenous. The difference is that the adversary is choosing those states against you.

Red teams institutionalize that fact. Instead of waiting for a hostile actor to discover every weakness in production, an organization asks someone to attack first. Penetration testing, fraud simulations, abuse testing, and adversarial evaluation all try to import strategic pressure into development.

But red teams can become benchmarks too.

Once a recurring evaluation suite is known, developers can optimize against its favorite attacks. The system becomes robust to the red team rather than to the open world. A useful adversarial program therefore needs novelty, rotation, and some separation between the people building the defense and the people trying to break it. The point is not ritual combat. It is to preserve an opponent capable of surprise.

Randomization can help for the same reason. If every transaction above an exact threshold receives scrutiny and every transaction below it does not, the threshold becomes a target. Random inspection around the boundary makes the response less deterministic. Tax authorities, security systems, and quality-control programs have long used sampling partly because predictable enforcement is easier to route around.

Randomness is not magic. If the randomization is weak, learnable, or applied to a fundamentally bad objective, it merely adds noise. It can also make consequential decisions harder to explain. Yet a small amount of uncertainty can prevent a decision boundary from becoming a perfectly reliable instruction manual for evasion.

Another defense is to measure outcomes after adaptation rather than merely inputs before it.

If a hiring screen can be gamed by superficial résumé changes, follow the later job performance of applicants who entered through those changed signals. If a fraud rule pushes attacks toward new transaction patterns, sample outcomes in the newly quiet regions as well as the suspicious ones. If an eligibility model causes applicants to rearrange reported behavior, examine whether the policy's underlying objective improved.

This sounds obvious and is often expensive. Outcome labels arrive late. They may be censored by the intervention. Fraud that succeeds is hard to observe precisely because it succeeded. Rejected applicants do not generate job-performance data. Loans not made do not reveal whether they would have defaulted. Chapter 17 will return to this counterfactual problem. For now the important point is that strategic response makes it worse: the missing outcomes are partly selected by a population reacting to the rule.

A mature system therefore needs more than retraining. It needs intelligence about adaptation.

Which features are moving fastest after deployment? Which groups face the lowest cost of changing them? Are changes associated with better underlying outcomes or merely better scores? Are new clusters appearing just below intervention thresholds? Do errors concentrate among people with incentives to probe the model? Does performance decay with time since a rule change? These are not ordinary drift questions because the cause of drift is part of what matters.

Sometimes the right response is to change the feature. Sometimes it is to change the incentive.

A school accountability system can spend years improving its detection of test manipulation, or it can reduce the stakes attached to one narrow score and broaden the evidence used for judgment. A marketplace can build a more elaborate classifier for deceptive seller behavior, or redesign payments and guarantees so the profitable exploit disappears. A fraud model can become more accurate, or the payment protocol can make stolen credentials less useful.

Prediction competes with mechanism design.

This is easy to forget in machine-learning organizations because a model is a visible artifact with measurable metrics. A changed process may look less sophisticated even when it removes the classification problem. If a door can be made harder to force, a better burglar predictor may be beside the point.

The best defense sometimes changes the game rather than winning the current version of it.

That is also the strongest counterargument to a book about reactive models. If every deployed model triggers adaptation, perhaps the lesson is simply to model the adaptation more accurately. Strategic classification does exactly that in stylized form. Adversarial training does it by bringing purposeful perturbations into training. Game theory, robust optimization, online learning, and mechanism design all provide tools for anticipating response. There is no theorem saying second-order effects must defeat quantitative systems.

The narrower claim is that first-order accuracy is not enough evidence.

A classifier can be excellent against a population that has not yet reacted and poor against the population its own deployment creates. Conversely, a classifier can become less accurate because people respond in exactly the socially desired way. Without a theory of response, the metric cannot tell those stories apart.

This returns us to the spammer.

The filter does not merely estimate whether a message resembles spam. It changes which messages are worth sending. A successful rule removes some strategies from the attacker's menu and makes others more attractive. The messages that arrive tomorrow are evidence about the filter, but they are also replies to it.

Once an adversary can read the model, prediction becomes correspondence.