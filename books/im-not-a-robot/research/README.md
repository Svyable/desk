# Research Brief — I’m Not a Robot

## Thesis under test

The book tests a narrow proposition: defining human beings by whatever machines cannot yet do produces a moving and increasingly misleading account of human identity. Ordinary human cognition already depends on habits, heuristics, reconstructive memory, borrowed language, external tools, social models, institutional scaffolding, and partial self-knowledge. Those facts do not imply that humans and artificial systems are equivalent. They imply that “not automated” is a poor proxy for “human.”

The positive claim is deliberately more modest. Human agency is often best understood not as independence from influence or automaticity but as the capacity for revision under responsibility: people can notice patterns, contest goals, make commitments, change environments, revise self-descriptions, and remain socially and legally answerable across those changes.

The book also tests a second proposition about institutions. As synthetic media, generative systems, and delegated agents make it cheaper to imitate outputs once associated with human labor, institutions will demand stronger evidence of human presence, attention, authorship, and authorization. That verification can protect people, but it can also overreach. Good verification should prove the narrow fact actually needed, preserve correction and appeal, and avoid turning “proof of human” into continuous surveillance or behavioral conformity.

## Evidence hierarchy

Prefer, in order:

1. Original peer-reviewed papers and scholarly books for named psychological and human-factors findings.
2. Primary legal, regulatory, and government materials for current rules, enforcement, and civil-rights cases.
3. Primary technical documentation and standards for AI provenance, verification, and risk-management claims.
4. High-quality secondary synthesis only where a primary source is unavailable or where the manuscript is describing a broad intellectual history rather than asserting a precise result.

The manuscript avoids treating any single experiment as a complete theory of human behavior. Findings about choice blindness, introspection, memory, attention, automation bias, algorithm aversion, anthropomorphism, and the handmade effect are used to challenge overly clean self-descriptions, not to claim that people always behave in one way.

## Falsification and counter-evidence notes

- **CAPTCHA is operational, not metaphysical.** The history of CAPTCHA and reCAPTCHA shows security tests exploiting temporary human-machine capability gaps. The manuscript does not treat CAPTCHA as a scientific test of personhood.
- **Choice blindness is not universal ignorance of choice.** Johansson et al. demonstrated failures to detect manipulated outcomes under specific experimental conditions. The book does not generalize this into a claim that people never know what they chose or why.
- **Nisbett and Wilson is not a license to dismiss all introspection.** Their 1977 review argued that verbal reports about higher-order mental processes can be unreliable in important circumstances; it also discussed conditions under which reports can be accurate. The manuscript preserves that narrower point.
- **Memory is reconstructive, not worthless.** Bartlett, Loftus, and later memory research show that recall can be shaped by schemas, later information, and retrieval. The book does not claim ordinary memory is generally false.
- **Mere exposure is context-dependent.** Zajonc’s classic work and subsequent debate support the idea that exposure can influence preference; the manuscript does not claim familiarity mechanically determines taste.
- **Inattentional blindness is task-specific evidence about limited attention.** Simons and Chabris do not establish that people are generally oblivious or inattentive.
- **Human-in-the-loop is not automatically bad.** Human-factors research shows both overreliance and underreliance on automation. The manuscript argues for calibrated authority, not a blanket preference for human or machine judgment.
- **Algorithm aversion and algorithm appreciation can coexist.** Dietvorst et al. and Logg et al. document different patterns under different conditions. The book uses both precisely to avoid the story that people are uniformly anti-algorithm or pro-algorithm.
- **The handmade effect is not a universal law of consumer value.** It is evidence that production process can change perceived value under some conditions. The book explicitly rejects the idea that human labor is inherently superior or should be preserved when it is dangerous or pointless.
- **AI-writing detectors differ.** OpenAI withdrew its own 2023 classifier for low accuracy, and Liang et al. found strong bias in several evaluated detectors against non-native English writers. Those results do not prove that every present or future detector has identical error rates.
- **The Florida Gateway College proctoring case is a disability-access and process failure, not proof that all remote proctoring is unlawful.** The U.S. Department of Education Office for Civil Rights described a specific case involving disability-related eye movement and a failure to provide appropriate alternatives.
- **The EU AI Act’s emotion-recognition prohibition has exceptions.** Article 5 prohibits specified emotion-recognition uses in workplaces and educational institutions except where intended for medical or safety reasons; the book does not state a broader categorical ban.
- **Current AI Act transparency rules are described as of September 2026.** Article 50 transparency obligations became applicable in August 2026. Later guidance, standards, or litigation may change implementation details.
- **Copyright is jurisdiction-specific.** The U.S. Copyright Office’s 2025 report is used as one legal framework for human authorship and AI assistance, not as a universal theory of creativity or a statement of law outside the United States.
- **Personal identity is not philosophically settled.** Chapter 20 deliberately declines to select a final metaphysical theory among psychological-continuity, biological, and other accounts.
- **Anthropomorphism is not evidence of machine consciousness.** ELIZA, media-equation research, and anthropomorphism research concern human responses to social cues. They do not establish that an artificial system has subjective experience.
- **Machine consciousness remains open.** The final chapters explicitly separate practical questions of user welfare, consent, disclosure, and institutional responsibility from unresolved questions about possible machine moral status.

## Chapters 1–3 — CAPTCHA, the moving test, and hidden human labor

- Alan M. Turing, “Computing Machinery and Intelligence,” *Mind* 59(236), 433–460 (1950). DOI: https://doi.org/10.1093/mind/LIX.236.433. Primary source for the imitation game and the historical framing that later became culturally associated with the “Turing Test.”
- Luis von Ahn, Manuel Blum, Nicholas J. Hopper, and John Langford, “CAPTCHA: Using Hard AI Problems for Security,” EUROCRYPT 2003. DOI: https://doi.org/10.1007/3-540-39200-9_18. Early formal CAPTCHA framing: automated tests that humans can pass while contemporary computer programs struggle.
- Luis von Ahn, Benjamin Maurer, Colin McMillen, David Abraham, and Manuel Blum, “reCAPTCHA: Human-Based Character Recognition via Web Security Measures,” *Science* 321(5895), 1465–1468 (2008). DOI: https://doi.org/10.1126/science.1160379. Demonstrates channeling CAPTCHA labor into transcription of scanned printed material; reports deployment and accuracy results at the time.
- Google Security Blog, “Are you a robot? Introducing ‘No CAPTCHA reCAPTCHA’,” December 2014. Primary product-history source for the shift toward risk analysis and the checkbox-era interface: https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html
- Tom Standage, *The Turk: The Life and Times of the Famous Eighteenth-Century Chess-Playing Machine*, Walker & Company (2002). Historical synthesis on Wolfgang von Kempelen’s Mechanical Turk and the recurring spectacle of concealed human labor presented as machine autonomy.
- Amazon Mechanical Turk documentation and requester/worker materials are used only for the naming continuity and the broad claim that the service organizes paid human microtasks; no claim in the manuscript depends on undisclosed platform metrics.

## Chapter 4 — Human Error

- James Reason, *Human Error*, Cambridge University Press (1990). DOI/book record: https://doi.org/10.1017/CBO9781139062367. Foundational human-factors account distinguishing forms and levels of human error; used as background against the idea that error is a uniquely authenticating human signature.
- OpenAI, “New AI classifier for indicating AI-written text,” January 31, 2023; updated July 20, 2023 to state that the classifier was no longer available because of its low rate of accuracy. The original evaluation reported 26% of AI-written text correctly identified as “likely AI-written” and 9% of human-written text incorrectly labeled in the challenge set: https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/
- Weixin Liang, Mert Yuksekgonul, Yining Mao, Eric Wu, and James Zou, “GPT detectors are biased against non-native English writers,” *Patterns* 4(7):100779 (2023). DOI: https://doi.org/10.1016/j.patter.2023.100779. Evidence that several evaluated detectors disproportionately classified non-native English writing as AI-generated.

## Chapter 5 — I Chose This

- Petter Johansson, Lars Hall, Sverker Sikström, and Andreas Olsson, “Failure to Detect Mismatches Between Intention and Outcome in a Simple Decision Task,” *Science* 310(5745), 116–119 (2005). DOI: https://doi.org/10.1126/science.1111709. The original “choice blindness” experiment used manipulated outcomes and documented both non-detection and post-choice explanations under the study conditions.
- Lars Hall et al., later choice-blindness work is treated as an extension of the paradigm rather than evidence that every preference is unstable. The manuscript keeps its strongest claims anchored to the 2005 result.

## Chapter 6 — I Know Why

- Richard E. Nisbett and Timothy DeCamp Wilson, “Telling More Than We Can Know: Verbal Reports on Mental Processes,” *Psychological Review* 84(3), 231–259 (1977). DOI: https://doi.org/10.1037/0033-295X.84.3.231. Primary review for limits on introspective access to higher-order mental processes and the possibility of plausible causal reports assembled without direct access to the actual process.
- University of Michigan Deep Blue copy and bibliographic record: https://hdl.handle.net/2027.42/92167

## Chapter 7 — I Remember

- Frederic C. Bartlett, *Remembering: A Study in Experimental and Social Psychology*, Cambridge University Press (1932). Historical foundation for reconstructive accounts of remembering and the role of schemas.
- Elizabeth F. Loftus and John C. Palmer, “Reconstruction of Automobile Destruction: An Example of the Interaction Between Language and Memory,” *Journal of Verbal Learning and Verbal Behavior* 13(5), 585–589 (1974). DOI: https://doi.org/10.1016/S0022-5371(74)80011-3. Classic demonstration that post-event wording can affect reports and later memory in an experimental setting.
- Daniel L. Schacter, *The Seven Sins of Memory*, Houghton Mifflin (2001). Used as synthesis, not primary evidence, for the broader point that memory’s vulnerabilities are related to ordinary adaptive functions rather than evidence that memory is simply broken.

## Chapter 8 — I Have Taste

- Robert B. Zajonc, “Attitudinal Effects of Mere Exposure,” *Journal of Personality and Social Psychology* 9(2, Pt. 2), 1–27 (1968). DOI: https://doi.org/10.1037/h0025848. Foundational evidence that repeated exposure can influence affective evaluation under studied conditions.
- Thomas D. G. Burgess II and Stephen M. Sales, “Attitudinal Effects of ‘Mere Exposure’: A Reevaluation,” *Journal of Experimental Social Psychology* 7(4), 461–472 (1971). DOI: https://doi.org/10.1016/0022-1031(71)90078-3. Included as counter-evidence/history showing early debate over mechanisms behind the exposure effect.
- Allison J. B. Chaney, Brandon M. Stewart, and Barbara E. Engelhardt, “How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility,” RecSys 2018. DOI: https://doi.org/10.1145/3240323.3240370. Computational evidence for feedback effects in recommendation systems; used to support the possibility that recommender exposure can participate in shaping future observations rather than merely revealing fixed taste.

## Chapter 9 — I Am Consistent

- Leon Festinger, *A Theory of Cognitive Dissonance*, Stanford University Press (1957). Original theoretical framework for psychological tension associated with inconsistent cognitions and behavior.
- Daryl J. Bem, “Self-Perception Theory,” in *Advances in Experimental Social Psychology*, Vol. 6 (1972). DOI: https://doi.org/10.1016/S0065-2601(08)60024-6. Alternative tradition emphasizing inferences people make about themselves from their own behavior; included to avoid making one theory do all explanatory work.

## Chapter 10 — I Am Paying Attention

- Daniel J. Simons and Christopher F. Chabris, “Gorillas in Our Midst: Sustained Inattentional Blindness for Dynamic Events,” *Perception* 28(9), 1059–1074 (1999). DOI: https://doi.org/10.1068/p281059. Primary source for the selective-attention demonstration discussed in the chapter.
- Christopher D. Wickens, “Multiple Resources and Performance Prediction,” *Theoretical Issues in Ergonomics Science* 3(2), 159–177 (2002). DOI: https://doi.org/10.1080/14639220210123806. Background for limits and allocation of attention across tasks; not used to assign a universal numeric attention capacity.

## Chapter 11 — I Mean What I Say

- H. Paul Grice, “Logic and Conversation,” in *Syntax and Semantics*, Vol. 3: Speech Acts (1975), pp. 41–58. Foundational account of conversational implicature and the dependence of meaning on cooperative inference beyond literal sentence content.
- Herbert H. Clark, *Using Language*, Cambridge University Press (1996). DOI/book record: https://doi.org/10.1017/CBO9780511620539. Synthesis on language as joint action; used for the idea that meaning is coordinated socially rather than exhausted by string production.
- The chapter’s claims about autocomplete and generated language are interpretive rather than based on a claim that predictive text and human language production are computationally identical. The manuscript explicitly rejects that equivalence.

## Chapters 12–13 — This Is My Work / I Did It Myself

- Evan F. Risko and Sam J. Gilbert, “Cognitive Offloading,” *Trends in Cognitive Sciences* 20(9), 676–688 (2016). DOI: https://doi.org/10.1016/j.tics.2016.07.002. Review of the use of external action and environment to reduce cognitive demand.
- Andy Clark and David J. Chalmers, “The Extended Mind,” *Analysis* 58(1), 7–19 (1998). DOI: https://doi.org/10.1093/analys/58.1.7. Philosophical argument used as a deliberately strong lens on external cognitive resources, not as an empirical claim that notebooks and neural tissue are literally identical.
- U.S. Copyright Office, Copyright and Artificial Intelligence study hub: https://www.copyright.gov/policy/artificial-intelligence/
- U.S. Copyright Office, *Copyright and Artificial Intelligence, Part 2: Copyrightability*, issued January 29, 2025. The report maintains the human-authorship requirement, explains that assistive use of AI does not by itself bar protection for human-authored expression, and distinguishes human expressive selection/modification from mere prompting of generated expressive details: https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf

## Chapter 14 — I Am in Control

- Ellen J. Langer, “The Illusion of Control,” *Journal of Personality and Social Psychology* 32(2), 311–328 (1975). DOI: https://doi.org/10.1037/0022-3514.32.2.311.
- Raja Parasuraman and Victor Riley, “Humans and Automation: Use, Misuse, Disuse, Abuse,” *Human Factors* 39(2), 230–253 (1997). DOI: https://doi.org/10.1518/001872097778543886. Framework for calibrated reliance rather than a simple pro- or anti-automation position.
- Raja Parasuraman and Dietrich H. Manzey, “Complacency and Bias in Human Use of Automation: An Attentional Integration,” *Human Factors* 52(3), 381–410 (2010). DOI: https://doi.org/10.1177/0018720810376055. Review of automation complacency and automation bias.
- Berkeley J. Dietvorst, Joseph P. Simmons, and Cade Massey, “Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err,” *Journal of Experimental Psychology: General* 144(1), 114–126 (2015). DOI: https://doi.org/10.1037/xge0000033.
- Jennifer M. Logg, Julia A. Minson, and Don A. Moore, “Algorithm Appreciation: People Prefer Algorithmic to Human Judgment,” *Organizational Behavior and Human Decision Processes* 151, 90–103 (2019). DOI: https://doi.org/10.1016/j.obhdp.2018.12.005.

## Chapter 15 — The Version of Me Other People Use

- Federal Trade Commission, *Data Brokers: A Call for Transparency and Accountability* (May 2014). Primary government report on data-broker collection, combination, and derived consumer categories: https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014
- Consumer Financial Protection Bureau, “CFPB Issues Guidance on Credit Denials by Lenders Using Artificial Intelligence,” September 19, 2023. Reiterates that complex algorithms do not eliminate legal obligations to provide accurate, specific reasons for adverse credit actions: https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-guidance-on-credit-denials-by-lenders-using-artificial-intelligence/
- Consumer Financial Protection Bureau, Circular 2022-03, adverse-action notification requirements and complex algorithms: https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/
- Erving Goffman, *The Presentation of Self in Everyday Life* (1956/1959 editions). Historical sociological framework for contextual self-presentation.
- Alice E. Marwick and danah boyd, “I Tweet Honestly, I Tweet Passionately: Twitter Users, Context Collapse, and the Imagined Audience,” *New Media & Society* 13(1), 114–133 (2011). DOI: https://doi.org/10.1177/1461444810365313.

## Chapter 16 — The Human Premium

- Christoph Fuchs, Martin Schreier, and Stijn M. J. van Osselaer, “The Handmade Effect: What’s Love Got to Do With It?” *Journal of Marketing* 79(2), 98–110 (2015). DOI: https://doi.org/10.1509/jm.14.0018. Experimental evidence that handmade production can increase product attractiveness in studied conditions through inferences associated with human care/love.
- Later replication/extension and theoretical debate are treated as context-dependent rather than a universal law; see research on handmade authenticity and perceived production process, including DOI: https://doi.org/10.1080/10454446.2020.1765936 and https://doi.org/10.1007/s11151-021-09844-9.
- The chapter’s discussion of live music, personal letters, care, and human attention is conceptual. It does not claim a single measured “human premium” across markets.

## Chapter 17 — Proving Too Much

- U.S. Department of Education, Office for Civil Rights, *Annual Report to the Secretary, the President, and the Congress, Fiscal Year 2023*. The report describes the Florida Gateway College remote-proctoring complaint involving disability-related eye movement, an AI-enabled proctoring flag, and the college’s Section 504/Title II obligations: https://www.ed.gov/sites/ed/files/about/reports/annual/ocr/report-to-president-and-secretary-of-education-2023.pdf
- OpenAI classifier source and Liang et al. detector-bias paper listed under Chapter 4 above.
- Regulation (EU) 2024/1689 (Artificial Intelligence Act), Article 5. Official EUR-Lex text: https://eur-lex.europa.eu/eli/reg/2024/1689/oj. The manuscript’s workplace/education emotion-recognition statement tracks the prohibition and its medical/safety exception.
- European Commission, AI Act implementation materials and Article 50 transparency guidance, including July 2026 guidance published ahead of the August 2, 2026 applicability date: https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems
- NIST, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, January 2023. https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10. Used as risk-management background for the idea that trustworthy systems require governance, measurement, and management of harms rather than a binary “safe/unsafe” label.

## Chapter 18 — I Am Original

- U.S. Copyright Office Part 2 report listed above. Its legal distinction between human-authored expressive elements and AI-generated material is used carefully; copyright originality is not treated as equivalent to cultural originality.
- Margaret A. Boden, *The Creative Mind: Myths and Mechanisms*, 2nd ed., Routledge (2004). Used as conceptual background for distinctions among novelty, combinational/exploratory/transformational creativity; not as evidence that current generative systems have or lack consciousness.
- The chapter’s discussion of influence, imitation, apprenticeship, and genre is historical/interpretive. It does not claim that human learning and model training are computationally equivalent.

## Chapter 19 — I Am Rational

- Herbert A. Simon, “A Behavioral Model of Rational Choice,” *Quarterly Journal of Economics* 69(1), 99–118 (1955). DOI: https://doi.org/10.2307/1884852. Foundational bounded-rationality work.
- Amos Tversky and Daniel Kahneman, “Judgment under Uncertainty: Heuristics and Biases,” *Science* 185(4157), 1124–1131 (1974). DOI: https://doi.org/10.1126/science.185.4157.1124. Foundational heuristics-and-biases paper.
- Gerd Gigerenzer and colleagues’ ecological-rationality tradition is treated as important counter-pressure against reading heuristics solely as defects. See Gerd Gigerenzer and Peter M. Todd, *Simple Heuristics That Make Us Smart*, Oxford University Press (1999).
- The manuscript therefore avoids the pop-psychology shorthand “humans are irrational.” Its claim is bounded, context-sensitive reasoning supported by external scaffolds.

## Chapter 20 — I Am the Same Person

- Stanford Encyclopedia of Philosophy, “Personal Identity,” revised June 30, 2023. https://plato.stanford.edu/entries/identity-personal/. Used as a scholarly map of major positions and thought experiments, not as an authority resolving the debate.
- Derek Parfit, *Reasons and Persons*, Oxford University Press (1984). Influential psychological-continuity/reductionist treatment of personal identity; included as intellectual background rather than the manuscript’s adopted metaphysics.
- The chapter’s core practical claim—that records, agents, and profiles should distinguish historical truth from present authorization—is normative and design-oriented, not presented as a result established by personal-identity philosophy.

## Chapter 21 — I Will Know the Difference

- Joseph Weizenbaum, “ELIZA—A Computer Program for the Study of Natural Language Communication Between Man and Machine,” *Communications of the ACM* 9(1), 36–45 (1966). DOI: https://doi.org/10.1145/365153.365168. Primary technical description of ELIZA.
- Clifford Nass and Youngme Moon, “Machines and Mindlessness: Social Responses to Computers,” *Journal of Social Issues* 56(1), 81–103 (2000). DOI: https://doi.org/10.1111/0022-4537.00153. Review/experimental tradition showing application of social rules and categories to computers under studied conditions.
- Nicholas Epley, Adam Waytz, and John T. Cacioppo, “On Seeing Human: A Three-Factor Theory of Anthropomorphism,” *Psychological Review* 114(4), 864–886 (2007). DOI: https://doi.org/10.1037/0033-295X.114.4.864. Theory of when people attribute humanlike characteristics to nonhuman agents.
- Regulation (EU) 2024/1689, Article 50, and European Commission July 2026 transparency guidance listed above. Used for the current regulatory point that people should in specified contexts be informed when they are interacting with AI or encountering generated/manipulated content.
- The chapter explicitly does **not** use anthropomorphism research as evidence for or against machine consciousness.

## Chapter 22 — I’m Not a Robot

- Coalition for Content Provenance and Authenticity (C2PA), current technical specifications: https://spec.c2pa.org/specifications/. Used as an example of provenance infrastructure that can carry information about content origin and editing history without pretending provenance alone proves truth or human care.
- NIST AI RMF 1.0, cited above, for governance and risk framing.
- U.S. Copyright Office, EU AI Act, and the human-factors research above support the chapter’s separation of capability, accountability, provenance, and rights.
- The final chapter’s core normative proposition—that human worth should not be made contingent on outperforming machines—is philosophical argument. It is not presented as an empirical finding, and it does not answer the separate question of whether some future artificial systems might merit moral consideration.

## Current-law / current-technology review date

Current regulatory and technical statements in this research trail were checked for this first edition in September 2026. Historical and peer-reviewed sources are cited by publication date. Readers revisiting the legal or product-specific sections later should verify the then-current text of the EU AI Act implementation materials, U.S. copyright guidance, detector performance, provenance standards, and vendor practices rather than assuming this 2026 snapshot remains current.
