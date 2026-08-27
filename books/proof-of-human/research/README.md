# Research Brief — Proof of Human

## Thesis under test

For most of history, fabricating convincing evidence — a signature, a photograph, a familiar voice, a financial record — was expensive relative to producing the genuine article, and a great deal of civilization's trust infrastructure (seals, audits, safety marks, credentials) was built on that cost gap rather than on any inherent honesty in human affairs. Generative AI has sharply narrowed or reversed that gap across several important categories of evidence at the same moment several much older trust institutions (auditing, peer review, corporate governance) were already showing structural fatigue for unrelated reasons. The book's claim is that the resulting scarcity is not content — content has never been more abundant — but verifiable authenticity: proof of where a piece of media came from, and proof that a given actor is a real, distinct human being.

The book tries to hold two things at once rather than picking the more dramatic one: the threat from cheap fabrication is real and already financially and politically costly, and the infrastructure being built in response (content provenance standards, biometric personhood credentials, identity verification businesses) carries its own serious risks of exclusion and centralized control that deserve equal scrutiny.

## Evidence hierarchy

Prefer, in order: primary legal/regulatory records and court outcomes; peer-reviewed research and the original papers behind named concepts (Akerlof, Spence, Zahavi, Chesney and Citron, Bem, the Open Science Collaboration); official statements and technical documentation from the organizations building verification infrastructure (C2PA, Google DeepMind, the EU's AI Office); and high-quality journalism for incident reporting and figures not otherwise available in primary form. Market-sizing and industry-growth figures are treated as informed estimates rather than settled fact and are flagged as such in the manuscript.

## Falsification and counter-evidence notes

- Chapter 1 does not claim the Slovakia deepfake was proven to have changed the election outcome; multiple factors were in play, and the manuscript hedges accordingly.
- Chapter 4 does not claim Daryl Bem committed fraud; the replication crisis discussion distinguishes ordinary methodological weakness and incentive problems from deliberate fabrication.
- Chapter 6 does not claim content credentials or watermarking solve the fabrication problem; both are framed as after-the-fact provenance checks with real adoption and evasion limitations.
- Chapter 9 is written specifically to counterweight the earlier chapters' implicit optimism about verification technology, focusing on exclusion, centralization, and misuse risk.

## Chapter 1 — The Liar's Dividend

- CNN Business, "Arup revealed as victim of $25 million deepfake scam involving Hong Kong employee," May 16, 2024. Confirms Arup as the named victim, the fifteen wire transfers, and the roughly $25.6 million / HK$200 million total. https://www.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk
- PurpleSec, "Arup Deepfake: How An AI-Generated Video Stole $25 Million." Case summary including the phishing email, the video call, and the employee's follow-up call to headquarters that surfaced the fraud. https://purplesec.us/breach-report/arup-deepfake/
- MIT Cyber IR, "This happens more frequently than people realize: Arup chief on the lessons learned from a $25M deepfake crime." First-person account context from Arup leadership. https://cyberir.mit.edu/site/this-happens-more-frequently-than-people-realize-arup-chief-on-the-lessons-learned-from-a-25m-deepfake-crime
- Marketing-Interactive / OECD.AI incident record, "WPP Executives Targeted by Deepfake Scam Using AI Voice Cloning," May 2024. Details on the WhatsApp impersonation, the Microsoft Teams meeting, and WPP's confirmation the attempt failed. https://oecd.ai/en/incidents/2024-05-10-e24d
- AI Incident Database, Incident 983, on the WPP scam attempt. https://incidentdatabase.ai/cite/983/
- Bloomberg, "AI Deepfakes Used In Slovakia To Spread Disinformation," September 29, 2023. https://www.bloomberg.com/news/articles/2023-09-29/trolls-in-slovakian-election-tap-ai-deepfakes-to-spread-disinfo
- CNN Politics, "A fake recording of a candidate saying he'd rigged the election went viral. Experts say it's only the beginning," February 1, 2024. Context on the Šimečka/Tódová recording and the electoral silence period. https://www.cnn.com/2024/02/01/politics/election-deepfake-threats-invs
- Harvard Kennedy School Misinformation Review, "Beyond the deepfake hype: AI, democracy, and 'the Slovak case.'" Academic treatment cautioning against overstating the deepfake's causal role in the election outcome. https://misinforeview.hks.harvard.edu/article/beyond-the-deepfake-hype-ai-democracy-and-the-slovak-case/
- Robert Chesney and Danielle Citron, "Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security," California Law Review, 2019, and related commentary defining the "liar's dividend." https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security and https://scholarship.law.bu.edu/faculty_scholarship/640/

## Chapter 2 — The Seal and the Signature

- Wikipedia, "William Henry Merrill"; UL Research Institutes, "Our History." Founding details for Underwriters Laboratories: the 1893 Columbian Exposition inspection, the 1894 first test, the initial staffing and equipment. https://en.wikipedia.org/wiki/William_Henry_Merrill and https://ul.org/about/our-history/
- FundingUniverse, "History of Underwriters Laboratories, Inc." Corroborating detail on incorporation in 1901. https://www.fundinguniverse.com/company-histories/underwriters-laboratories-inc-history/

General background on double-entry bookkeeping, nineteenth-century railway finance, and the historical development of the independent audit function, and on guild marks, hallmarks, and brand seals as premodern trust signals, drew on standard business-history and economic-history reference material rather than a single primary source; the manuscript treats this material at the level of established consensus rather than citing a specific disputed figure.

## Chapter 3 — When Machines Learned to Lie Well

- Ian Goodfellow et al., "Generative Adversarial Networks," 2014, and widely reported accounts of the paper's origin story. Standard background on the GAN architecture underlying most deepfake generation techniques.
- Background on the 2017 Reddit origin of the term "deepfake" is drawn from consistent contemporaneous and retrospective reporting; the manuscript treats the coiner as anonymous, since that is the more heavily corroborated account.
- Middermusic, "The controversial rise of ElevenLabs' voice cloning technology." 2023 controversy involving misuse on forums including 4chan, and the company's subsequent consent-verification safeguard. https://middermusic.com/the-controversial-rise-of-elevenlabs-voice-cloning-technology/
- Coval and Flexprice product documentation summaries on ElevenLabs' minimum audio sample requirements (roughly thirty seconds for reliable cloning, shorter samples producing degraded but sometimes usable results). https://www.coval.ai/blog/elevenlabs-review-2026-voice-cloning-and-synthesis-capabilities-explained/ and https://flexprice.io/blog/elevenlabs-pricing-breakdown
- Federal Trade Commission consumer alert (2023) on AI voice cloning used in grandparent scams; American Bar Association, "Artificial Intelligence in Financial Scams Against Older Adults." https://www.americanbar.org/groups/law_aging/publications/bifocal/vol45/vol45issue6/artificialintelligenceandfinancialscams/
- Fox News / FBI reporting on AI-related fraud losses among adults over 60. https://noticias.foxnews.com/tech/grandparents-identity-thefts-biggest-payday.amp

## Chapter 4 — The Institutions That Already Broke

- U.S. Department of Justice, Northern District of California, press releases on Elizabeth Holmes's conviction (January 2022) and sentencing. https://www.justice.gov/usao-ndca/pr/theranos-founder-elizabeth-holmes-found-guilty-investor-fraud and https://www.justice.gov/usao-ndca/pr/elizabeth-holmes-sentenced-more-11-years-defrauding-theranos-investors-hundreds
- Reporting summaries on John Carreyrou's Wall Street Journal investigation into Theranos, drawn from NPR and Al Jazeera trial coverage. https://www.npr.org/2021/08/30/1031314018/elizabeth-holmes-theranos-fraud-trial
- Transparently.ai, "How the Wirecard scandal happened: Case study"; CNBC, "'The Enron of Germany': Wirecard scandal casts a shadow on corporate governance," June 29, 2020. Timeline of the €1.9 billion disclosure, the Philippine banks' denial, and the stock collapse. https://www.transparently.ai/blog/how-the-wirecard-scandal-happened and https://www.cnbc.com/2020/06/29/enron-of-germany-wirecard-scandal-casts-a-shadow-on-governance.html
- Fortune / Pressreader coverage, "Missing billions likely don't exist," June 2020. https://fortune.com/2020/06/22/missing-billions-wirecard-does-not-exist
- U.S. Department of Justice archive, Arthur Andersen indictment and press conference transcript, March 2002; contemporaneous NPR and PBS Newshour coverage of the document-shredding testimony. https://www.justice.gov/archive/dag/cftf/chargingdocs/andersenllpindictment.pdf and https://www.pbs.org/newshour/politics/law-jan-june02-duncan_04-09
- Center for Open Science, "Massive Collaboration Testing Reproducibility of Psychology Studies Publishes Findings," and the original paper: Open Science Collaboration, "Estimating the reproducibility of psychological science," Science, 2015. https://www.cos.io/about/news/massive-collaboration-testing-reproducibility-psychology-studies-publishes-findings and https://www.science.org/doi/10.1126/science.aac4716
- Background on Daryl Bem's "Feeling the Future" (2011) and its role as a catalyst for the replication crisis, via Replicability-Index and retrospective science journalism. https://replicationindex.com/2018/01/05/bem-retraction/

## Chapter 5 — The Economics of the Unfakeable

- George Akerlof, "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism," Quarterly Journal of Economics, 1970. https://ideas.repec.org/a/oup/qjecon/v84y1970i3p488-500..html
- Michael Spence, "Job Market Signaling," Quarterly Journal of Economics, 1973. https://www.sfu.ca/~allen/Spence.pdf
- Amotz Zahavi's handicap principle (1975), as summarized in Wikipedia's "Handicap principle" entry and in Szymon M. Penn's 2020 Biological Reviews retrospective, "The Handicap Principle: how an erroneous hypothesis became a scientific principle." https://en.wikipedia.org/wiki/Handicap_principle and https://onlinelibrary.wiley.com/doi/full/10.1111/brv.12563

## Chapter 6 — Proof of Work for Reality

- Microsoft "Source" blog and the C2PA founding press release, February 2021, on the coalition's formation and founding members. https://news.microsoft.com/source/2021/02/22/technology-and-media-entities-join-forces-to-create-standards-group-aimed-at-building-trust-in-online-content/ and https://c2pa.org/c2pa-founding-press-release/
- Adobe Blog, "C2PA releases version 1.0 of world's first industry standard for content authenticity," January 2022. https://blog.adobe.com/en/publish/2022/01/26/cp2a-1spec-adobeblogv1
- Wikipedia, "Content Credentials," for steering-committee membership growth (Amazon, Google, Meta, OpenAI, Sony) since the coalition's founding. https://en.wikipedia.org/wiki/Content_Credentials
- Google DeepMind, "Watermarking AI-generated text and video with SynthID" and "Identifying AI-generated images with SynthID," including the August 2023 Imagen beta launch. https://deepmind.google/blog/watermarking-ai-generated-text-and-video-with-synthid/ and https://deepmind.google/blog/identifying-ai-generated-images-with-synthid/
- artificialintelligenceact.eu, "The EU AI Act's Transparency Rules: A Practical Guide to Article 50"; European Commission, "Transparency obligations under Article 50 of the AI Act." Deepfake disclosure requirements and the August 2026 effective date for the transparency guidelines and code of practice. https://artificialintelligenceact.eu/transparency-rules-article-50/ and https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act
- SiliconANGLE, "Getty Images sues Stability AI for copyright and trademark infringement," February 2023; Entrepreneur, "'Extraordinarily Expensive': Getty Images Is Pouring Millions of Dollars Into One AI Lawsuit, CEO Says." https://siliconangle.com/2023/02/06/getty-images-sues-stability-ai-copyright-trademark-infringement/ and https://www.entrepreneur.com/business-news/getty-images-ceo-spending-millions-on-one-ai-copyright-case/492358
- MarketBeat, "Getty drops copyright allegations in UK lawsuit against Stability AI," June 2025, on the narrowing of the case to trademark claims. https://www.marketbeat.com/articles/getty-drops-copyright-allegations-in-uk-lawsuit-against-stability-ai-2025-06-25

## Chapter 7 — Proof of Personhood

- PC Guide and CHEQ, on Tanishq Mathew Abraham's March 2023 demonstration of GPT-4V solving a reCAPTCHA challenge. https://www.pcguide.com/ai/computer-vision-gpt-4v-captcha-codes/ and https://cheq.ai/blog/testing-ai-gpt-4v-against-captcha/
- ResearchGate figure and related coverage on the GPT-4/TaskRabbit CAPTCHA-solving-via-deception anecdote from OpenAI/ARC evaluation reporting. https://www.researchgate.net/figure/GPT-4-completes-a-CAPTCHA-task-via-deceiving-a-human_fig2_380505917
- Imperva, "2024 Bad Bot Report," and associated coverage, on the roughly 49.6% non-human traffic share, the 32% bad-bot share, and five consecutive years of bad-bot growth. https://www.imperva.com/resources/resource-library/reports/2024-bad-bot-report/ and https://www.imperva.com/blog/five-key-takeaways-from-the-2024-imperva-bad-bot-report/
- TechSpot, "Sam Altman's iris-scanning World project wants a billion users – it's reached 2% of that goal"; CoinDesk, "Sam Altman's Retina-Scanning Orb to Become More Useful with World ID 2.0," December 2023. Launch timeline, orb mechanics, IrisHash, incentive amount, and adoption figures. https://www.techspot.com/news/110222-sam-altman-iris-scanning-world-project-wants-billion.html and https://www.coindesk.com/tech/2023/12/13/sam-altmans-retina-scanning-orb-to-become-more-useful-with-world-id-20
- Steven Adler, Zoë Hitzig, Shrey Jain et al., "Personhood credentials: Artificial intelligence and the value of privacy-preserving tools to distinguish who is real online," arXiv, 2024. https://arxiv.org/html/2408.07892v1
- Vitalik Buterin, "What do I think about biometric proof of personhood?", July 2023. https://vitalik.eth.limo/general/2023/07/24/biometric.html

## Chapter 8 — The Verification Economy

- Fortune Business Insights and Market Research Future identity verification market sizing reports (treated as estimates), on 2025 market size in the $14–15 billion range and projected growth toward roughly $40–50 billion by the early-to-mid 2030s. https://www.fortunebusinessinsights.com/identity-verification-market-106468 and https://www.marketresearchfuture.com/reports/identity-verification-market-10381
- Reporting on Entrust's completed acquisition of Onfido, April 2024, reported deal value near $650 million.
- Jumio corporate materials on document-type and country coverage.
- Persona's 2026 Candidate Verification product launch, as covered in identity-verification trade press, used as an illustrative example of hiring-fraud-focused verification products.
- Getty Images v. Stability AI coverage (see Chapter 6 sources) revisited here for its business-strategy implications rather than its legal posture.

## Chapter 9 — When Verification Gets Weaponized

- Techweez, "Hong Kong Joins Kenya and Spain in the Suspension of Worldcoin Activities," May 2024; CoinDesk, "Worldcoin Operations Violate Privacy and Should Cease, Hong Kong Regulator Says," May 22, 2024. https://techweez.com/2024/05/23/hong-kong-bans-worldcoin-activities/ and https://www.coindesk.com/policy/2024/05/22/worldcoin-operations-violate-privacy-and-should-cease-hong-kong-regulator-says
- The Block, "Spain bans Worldcoin for up to three months amid broader investigation," March 2024. https://www.theblock.co/amp/post/281009/spain-bans-worldcoin-for-up-to-three-months-amid-broader-investigation
- Fintech News Kenya / BitPinas summaries on Kenya's August 2023 suspension, the first national action against the project. https://fintechnews.co.ke/why-kenya-banned-worldcoin-and-what-it-signals-on-data-rights/
- Vitalik Buterin's 2023 essay (see Chapter 7) and the Adler/Hitzig/Jain personhood credentials paper (see Chapter 7), both revisited here for their explicit caution against centralized biometric verification monopolies.

## Chapter 10 — Living as a Verifiable Species

Synthesis chapter; draws on material and sources already cited in Chapters 1 through 9 rather than introducing new claims requiring separate sourcing.
