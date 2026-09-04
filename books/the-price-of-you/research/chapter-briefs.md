# Chapter Briefs

These are research and argument briefs, not prose outlines. Each chapter should still discover its own narrative shape from the evidence available when it is written. Word target for each chapter: 3,500–4,500 words. Do not pad to hit the target; if a chapter's real material runs short, deepen the case studies rather than adding commentary.

Every chapter must open on something concrete — a person, a company, a document, a courtroom, a receipt — before widening into argument, per `.agents/skills/human-prose/SKILL.md`. Read that skill file before drafting. Read `books/predictable/manuscript/ch01-the-price-of-tomorrow.md` first for a sense of this Desk's narrative-nonfiction register (measured, evidence-led, willing to sit with uncertainty) — do not copy its subject matter, only its voice.

Do not fabricate dialogue, statistics, or sources. Every concrete factual claim below has a verifiable source; find the canonical citation yourself (search for the company/agency/publication name plus the date) and record it as a JSON file in `research/sources/` following the format described in `research/README.md`'s sibling file `research/sources/_example.json` and the repository's `scripts/check-desk.py` schema: fields `year`, `author_or_institution`, `title`, `source_type`, `book_use`, `url`, filed under a lowercase filename such as `ch07-doj-realpage-complaint.json`. Add two or three further sources of your own finding to deepen the chapter — new case studies, academic studies, or contemporaneous reporting — as long as they are real and verifiable.

## Chapter 1 — The Price Only You Can See

**Job:** Open the book on the moment the public argument over personalized pricing became impossible to ignore: Delta Air Lines' 2024–2025 rollout of AI-assisted fare pricing, and the July 2025 letter from Senators Ruben Gallego, Richard Blumenthal, and Mark Warner demanding answers, followed by Delta's August 2025 denial that it uses individualized, personal-data-based fares. Use this concrete, unresolved dispute to introduce the book's central distinction: a price that varies with aggregate supply and demand is not the same thing as a price computed from what the system knows about *you* — and the argument over which one is happening is itself revealing, because most people cannot tell the difference from the receipt.

**Questions to answer:** What did Delta's president actually say in earlier public comments that triggered alarm? What exactly did the senators' letter allege, and what did Delta's response concede versus deny? What does "dynamic pricing" mean in the airline industry's own technical vocabulary, versus what the public heard?

**Evidence to seek:** The senators' letter and Delta's public/Congressional response (primary sources); reporting on Delta's stated rollout percentage (roughly 3% of the domestic network expanding toward a stated 2025 goal); the distinction industry sources draw between "dynamic" (aggregate, real-time supply/demand) and "individualized" (person-specific) pricing.

**Counterevidence:** Delta explicitly and specifically denied targeting individuals with personal-data-based prices; take that denial seriously and represent it accurately rather than implying it was refuted.

**Avoid:** Settling the Delta dispute definitively — it is unresolved. The chapter's job is to dramatize the *stakes* and the *ambiguity*, not to adjudicate Delta's guilt.

**Handoff:** End by proposing that to understand why this fight matters, the reader needs to see what a "price" used to be before any of this infrastructure existed — which is where Chapter 2 begins.

## Chapter 2 — The Invention of One Price

**Job:** Tell the story of the fixed, non-haggled retail price as a nineteenth-century innovation, centered on John Wanamaker's Oak Hall store (Philadelphia, founded 1861, "One Price, Full Guarantee, Money Returned") and his 1876 Grand Depot store opened alongside the Centennial Exposition.

**Questions to answer:** What did commerce look like before fixed pricing — what was actually lost and gained by ending routine haggling? Why did merchants market fixed pricing as an act of *honesty and equality* (the same price for every customer) rather than simply a business efficiency? Who benefited and who lost bargaining leverage under the new system (e.g., customers skilled at haggling, or those from groups routinely quoted worse deals under negotiated pricing)?

**Evidence to seek:** Primary/secondary histories of Wanamaker's price-tag innovation and the "one price" retail movement of the mid-to-late 1800s; the broader department-store history (Wanamaker's, Macy's, and others) that spread fixed pricing across American retail.

**Counterevidence:** Haggling persists today in many high-value markets (cars, real estate, business-to-business contracts) precisely because it can favor a skilled or informed buyer; fixed pricing is not an unambiguous consumer win, it is a trade of negotiating leverage for predictability and (the marketing claim of) equal treatment.

**Avoid:** Overstating Wanamaker as a single inventor; note other merchants of the era made similar claims, and treat the "first" claim with appropriate hedging.

**Handoff:** The fixed public price becomes the shared assumption the rest of the book complicates — but almost immediately, merchants discovered that a fixed price could still be *shaped* by psychology, which leads into anchoring and De Beers.

## Chapter 3 — A Diamond Is Forever

**Job:** Tell the De Beers/N.W. Ayer & Son advertising campaign as the paradigm case of manufacturing willingness to pay through narrative rather than scarcity alone — hired in 1938 when only about 10% of engagement rings held a diamond, with copywriter Frances Gerety producing the line "A Diamond Is Forever" that first appeared in 1948.

**Questions to answer:** What specific tactics did the campaign use (planted magazine and newspaper stories, product placement, the idea of a "months' salary" rule)? How much of diamonds' scarcity was real geological scarcity versus De Beers' controlled supply? How did a single price expectation (the idea that a diamond ring is *supposed* to cost a certain amount) get built into an entire culture's marriage ritual?

**Evidence to seek:** Histories of the N.W. Ayer campaign and Frances Gerety's role; De Beers' historical supply-control practices; the by-1951 trade claim that "a girl is not engaged unless she has a diamond engagement ring."

**Counterevidence:** Consumer diamond and lab-grown-diamond markets have shifted substantially in recent years, suggesting the manufactured norm is not permanently fixed; note this as evidence that engineered price expectations can also erode.

**Avoid:** Treating this as simply a story about advertising cleverness; keep the throughline on *price anchoring* — the campaign set an expectation of what a diamond ring "should" cost, not just that you should want one.

**Handoff:** From an anchor built over decades through advertising, move to anchors built in seconds at the point of sale: charm pricing and the left-digit effect.

## Chapter 4 — The Nine at the End

**Job:** Explain charm pricing ($X.99) and the left-digit effect through Eric Anderson and Duncan Simester's field experiments on mail-order clothing catalogs (early 2000s, published research; a shirt sold better at $39 than at both $34 and $44 in one well-known test).

**Questions to answer:** What is the psychological mechanism (left-to-right reading, truncation of the trailing digits) behind why $39 can outsell a *lower* price of $34? How large is the effect across the broader literature? Where does charm pricing show up beyond U.S. retail (menus, subscriptions, real estate listings just under a round number)?

**Evidence to seek:** The Anderson & Simester research and its reporting; broader review/meta literature on charm pricing magnitude; a few concrete category examples (grocery, retail, subscription software).

**Counterevidence:** Charm pricing does not always work — some luxury and prestige categories use round numbers deliberately to signal quality (the "prestige pricing" counter-effect); note this to avoid overclaiming a universal law.

**Avoid:** Formula-izing the effect ("Charm Effect = 9 × Category") — write it as documented behavioral research, not a law of nature, consistent with the human-prose guidance against pseudo-precision.

**Handoff:** Charm pricing still applies to one public number seen by everyone. The next chapter turns to a psychological tactic (loss leaders) that, like charm pricing, is public and voluntary — before the book turns to less public, less voluntary techniques.

## Chapter 5 — The Hot Dog Vow

**Job:** Tell the Costco $1.50 hot-dog-and-soda-combo story — unchanged since 1985 — anchored on CEO Craig Jelinek's own retelling (an April 12, 2018 speech) of co-founder Jim Sinegal's line: "If you raise (the price of the) effing hot dog, I will kill you," and Costco's decision to bring hot dog production in-house (building a Kirkland Signature plant) rather than raise the price, reaffirmed again by CFO Gary Millerchip on Costco's Q3 2024 earnings call.

**Questions to answer:** What is a loss leader, mechanically, and why does a company willingly lose money on one visible item? Why does a *stable, well-known* price (rather than the lowest possible price) function as a trust signal for an entire retailer's pricing? What did Costco actually do operationally (vertical integration of its hot dog supply chain) to defend the price instead of raising it?

**Evidence to seek:** Jelinek's own account of the Sinegal exchange; Costco's supply-chain response; the 2024 earnings-call reaffirmation.

**Counterevidence:** Loss leaders are a deliberate, bounded exception, not evidence that Costco's overall prices are unusually low; membership fees fund the model, and other analysts have debated whether the hot dog is really "a loss" once membership revenue is considered — represent that debate.

**Avoid:** Treating this chapter as filler or comic relief only; use it to establish the idea of *price as a promise*, which the book will contrast sharply with hidden, shifting, individualized prices later.

**Handoff:** A stable public price is a promise about the future. The book now needs a theoretical vocabulary — willingness to pay, price discrimination — for why sellers might want to break that promise, selectively, to different customers.

## Chapter 6 — What It's Worth To You

**Job:** Lay out, through concrete historical example rather than a lecture, the core economic idea of willingness to pay (reservation price) and the classical taxonomy of price discrimination (first-, second-, third-degree), using William Vickrey's auction theory and a clear real-world illustration (student/senior discounts as third-degree discrimination; bulk pricing as second-degree; a perfectly individualized price as the theoretical first-degree limit).

**Questions to answer:** Why would a monopolist prefer to charge each customer their own maximum rather than one price for everyone — and why can competitive markets erode that ability? What historically has *prevented* first-degree discrimination from being practical (the seller's inability to know each buyer's true reservation price, and the buyer's ability to resell or hide)? Why does the book argue that data infrastructure is now eroding that historical barrier?

**Evidence to seek:** Vickrey's foundational auction-theory work and its Nobel recognition; a standard, well-sourced explanation of the three degrees of price discrimination; concrete legal, everyday U.S. examples of second- and third-degree discrimination already considered normal (movie-ticket student pricing, matinee pricing, bulk-buy discounts).

**Counterevidence:** Price discrimination is not inherently sinister — third-degree discrimination (senior/student discounts) is widely accepted and can expand access for lower-income buyers; some economists argue perfect price discrimination could in theory maximize total output and access even while it eliminates "consumer surplus." Represent this argument fairly.

**Avoid:** Turning this into a textbook chapter with headers and bullet definitions; keep it narrative, building the vocabulary through examples the reader already half-recognizes from ordinary life.

**Handoff:** With the vocabulary established, the book can now show the first industry that built an entire modern business function around varying price by segment and time: airlines.

## Chapter 7 — The Man Who Named Yield

**Job:** Tell the history of airline revenue/yield management centered on Robert Crandall at American Airlines: his sponsorship of the SABRE reservations system beginning in the 1970s, his rise to Chairman/CEO in 1985, the "DINAMO" (Dynamic Inventory Allocation and Maintenance Optimizer/similar — verify exact acronym expansion and spelling from source) system, and American's 1985 "Ultimate Super Saver Fares" launched specifically to undercut low-cost rival People Express after the 1978 Airline Deregulation Act reshaped the industry.

**Questions to answer:** What specific competitive threat (People Express and other new low-cost entrants after deregulation) forced American to build differentiated seat pricing? What did Crandall mean by calling yield management "the single most important technical development in transportation management since deregulation" — verify and cite this quotation precisely? How did selling the *same* seat at many different prices, filled algorithmically by advance-purchase and restriction rules, differ conceptually from Wanamaker's one-price promise?

**Evidence to seek:** Histories of SABRE and American Airlines' yield-management program; Crandall's own statements; the collapse of People Express as a case study in what happened to a rival that couldn't match the system.

**Counterevidence:** Classic yield management prices the *seat*, segmented by advance purchase, refundability, and day of travel — it is disclosed, rule-based, and available to any customer who meets the same public conditions; it is not (yet) personalized to the individual, and the book should mark this distinction clearly as the ancestor of, not the same thing as, today's controversy.

**Avoid:** Implying 1980s yield management is equivalent to 2020s personalized pricing; the chapter's job is to show the *first* legal, industrial-scale system for breaking a single public price into many public prices.

**Handoff:** Once one seat can have a dozen legitimate public prices, the idea spreads to other industries with perishable inventory — sports tickets, hotels — which is where Chapter 8 goes.

## Chapter 8 — Selling the Same Seat Twice

**Job:** Show how variable and dynamic ticket pricing spread from airlines into live sports and entertainment. Distinguish two waves precisely: fixed-tier "variable pricing" (charging a different flat price for different scheduled games based on anticipated demand — opponent, day of week, promotion night), adopted by several MLB teams in the mid-2000s, and true algorithmic "dynamic pricing" (prices that move in real time based on live demand signals), which the San Francisco Giants piloted in 2009 on roughly 2,000 bleacher/upper-deck seats at AT&T Park using vendor Qcue, reportedly selling about 25,000 additional tickets for roughly $500,000 in incremental revenue before expanding the system park-wide in 2010; cite that seventeen of thirty MLB teams were using some form of dynamic pricing by 2012.

**Questions to answer:** What made sports franchises adopt airline-style demand pricing — and what was different about a ticket (a branded, emotionally loaded purchase tied to a specific date and opponent) that made the public reaction different from an airline fare? How did hotel revenue management mature over the same period?

**Evidence to seek:** Documented history of MLB teams' fixed-tier variable pricing in the mid-2000s and the Giants' 2009 dynamic-pricing pilot with Qcue; general hotel revenue-management industry history; contrast in public reaction between airline fare variation (largely accepted) and ticket price variation (more contested, foreshadowing Chapter 10's Ticketmaster material).

**Counterevidence:** Variable/dynamic ticket pricing, like airline yield management, is disclosed at time of purchase and applies equally to every buyer viewing that same seat at that same moment — it is not yet individualized, and conflating it with what comes later would weaken the book's argument.

**Avoid:** Duplicating the Ticketmaster material that belongs in Chapter 10; keep this chapter focused on the broader, quieter spread of the practice, saving the specific monopoly-and-backlash story for later.

**Handoff:** Two industries have now normalized publicly-varying prices. The next chapter shows what happens when the public first watches an algorithm change a price in real time, in a way that feels punitive rather than routine: Uber's surge pricing.

## Chapter 9 — Surge

**Job:** Tell the story of Uber's 2011 introduction of surge-pricing multipliers (first on Halloween night 2011, then dramatically during New Year's Eve 2011–2012, with multipliers reported as high as 7–8x in some markets) and the resulting public backlash, alongside the company's algorithmic and economic rationale (using price to summon more drivers rather than rationing a fixed supply by wait time).

**Questions to answer:** How does the surge algorithm actually work, mechanically, according to Uber's own later explanations? What specific incidents (New Year's Eve, later severe-weather and crisis-period surges such as during the December 2014 Sydney siege) most damaged public trust, and how did Uber respond over time (capping surges during emergencies, improving warnings)? What does the widely cited finding that a large majority of Americans view surge pricing as unfair reveal about the gap between economic efficiency and perceived fairness?

**Evidence to seek:** Uber's own contemporaneous and retrospective explanations of surge pricing; reporting on the 2011–2012 backlash and later high-profile surge controversies; survey/behavioral research on public perception of surge pricing as "price gouging."

**Counterevidence:** Present the economic argument for surge pricing fairly and on its own terms — it reliably increases driver supply during genuine demand spikes and can get more riders a ride faster than a flat price with a long wait; some economists and Uber itself have defended it as more efficient than rationing by queue.

**Avoid:** Resolving the fairness question one way or the other; the chapter should let both the efficiency argument and the outrage stand, since the book returns to *why* outrage happens (not just that it happens) in Chapter 17.

**Handoff:** Surge pricing is still, notably, the same price for every rider requesting that ride in that moment — it is not personalized. The book now turns to the case where dynamic pricing collided with monopoly power and became a national political fight: Ticketmaster.

## Chapter 10 — The Fury and the Formula

**Job:** Tell the history of Ticketmaster/Live Nation's "platinum"/dynamic ticket pricing controversies (including the 2009 Bruce Springsteen pricing backlash) through to the DOJ's May 23, 2024 antitrust complaint (joined by 29 states plus D.C., amended in August 2024 with 10 more states), and the April 15, 2026 federal jury verdict finding Live Nation/Ticketmaster illegally monopolized primary ticketing and amphitheaters and unlawfully tied amphitheaters to concert promotion, including the jury's finding of $1.72 per ticket in overcharges at major venues, with the case now in a remedies phase before Judge Arun Subramanian that could include a breakup.

**Questions to answer:** What specifically did the DOJ allege was anticompetitive about Ticketmaster's structure, separate from dynamic pricing itself? How did "platinum"/demand-based ticket pricing amplify public anger at Ticketmaster specifically, compared to the muted reaction to airline or hotel dynamic pricing? What does the 2026 verdict and pending remedies phase suggest about how much market structure — not just algorithm design — shapes whether dynamic pricing feels like efficiency or extraction?

**Evidence to seek:** DOJ press releases and the complaint/amended complaint; reporting on the April 2026 verdict and per-ticket damages figure; the remedies-phase status as of this writing.

**Counterevidence:** Live Nation has stated its intent to appeal, and the remedies phase (potentially including a breakup) has not concluded — the chapter must not report the case as fully resolved.

**Avoid:** Duplicating `books/silent-cartel/`'s antitrust-doctrine focus; keep this chapter's lens on ticket buyers' lived experience of price and the specific link between monopoly power and the *intensity* of the personalized/dynamic-pricing backlash, not a general antitrust-law survey.

**Handoff:** Ticketmaster's dynamic prices, like Uber's and the airlines', are still public and identical for every buyer viewing that seat. The book now crosses the real line it has been circling: the first documented case where a company tested genuinely *different* prices for different individual customers online — Amazon, in 2000.

## Chapter 11 — Six Dollars and Ten Cents

**Job:** Tell Amazon's September 2000 DVD dynamic-pricing test — 68 titles tested over about five days, with discounts to different customers ranging from 20% to 40%, discovered when customers compared notes online (one customer deleting his cookies to watch a price fall from $26.24 to $22.74) — Jeff Bezos's public apology and denial that pricing was based on demographic data ("a random price test, and even that was a mistake"), and Amazon's refund of roughly $3.10 on average to about 6,896 affected customers.

**Questions to answer:** What made this the first mainstream, publicly documented case of a company caught pricing individuals differently for an identical online product? Why did Amazon frame the incident as "random" testing rather than personalization, and does that distinction matter to a customer who was simply charged more? What lasting effect did this episode have on how online retailers talk about (and hide) price experimentation?

**Evidence to seek:** Contemporaneous 2000 news coverage; Bezos's own quoted statement; the refund figures.

**Counterevidence:** Amazon's account — random A/B testing rather than demographic targeting — may be true and is a materially different practice from deliberately profiling a customer; represent it as the company's stated explanation, sourced, without asserting it was necessarily false.

**Avoid:** Treating this as proof that all subsequent e-commerce pricing is individualized; it is one, early, admitted incident. Its importance is that it is the first crack in the assumption of a single online price, not proof of a universal practice.

**Handoff:** If price testing by customer was possible in 2000 with cookies alone, what became possible fifteen years later once online retailers had geographic and demographic data at scale? Chapter 12 answers with a documented case of a real disparity by ethnicity.

## Chapter 12 — The Tiger Mom Tax

**Job:** Tell ProPublica's September 2015 investigation (with Julia Angwin's team) of The Princeton Review's SAT tutoring pricing, which found that customers in zip codes with a high density of Asian residents were about 1.8 times as likely to be quoted a higher price for the same online tutoring package (prices for the Premier online course ranging roughly from $6,600 to $8,400 depending on zip code), a disparity that persisted even in lower-income Asian neighborhoods such as Flushing, Queens.

**Questions to answer:** How did ProPublica's methodology work (comparing quoted prices across zip codes and cross-referencing Census demographic data)? What was Princeton Review's own explanation (local cost-of-tutoring variation), and how well does that explanation account for the racial correlation specifically, as opposed to income alone? What does this case establish about *proxy discrimination* — a pricing algorithm that never uses race as an input can still produce a racially disparate outcome through zip code alone?

**Evidence to seek:** The original ProPublica investigation and its data/methodology description; the Princeton Review's public response.

**Counterevidence:** Present Princeton Review's stated defense (that price reflects the local cost of hiring tutors, which correlates with cost of living, not race) fully and fairly, and note that ProPublica's own reporting acknowledges the disparity persisted even after attempting to account for income — but that geographic cost variables beyond income were not fully ruled out.

**Avoid:** Overreaching into a general claim that all zip-code pricing is racially discriminatory; this is one well-documented case that illustrates a mechanism (proxy variables), not a universal indictment.

**Handoff:** Princeton Review priced by zip code deliberately. The next chapter shows a much larger retailer whose zip-code price variation turned out to have an entirely different, more mundane driver — setting up an important contrast.

## Chapter 13 — Nearest Rival Wins

**Job:** Tell the Wall Street Journal's December 2012 investigation into Staples.com, which tested pricing on roughly 1,000 randomly selected products and found prices varied for about a third of them by geography — and, critically, found that the distance from a customer's zip code to a competitor's physical store, not income, race, or other demographic factors, was the strongest correlate (explaining the large majority of the pattern the Journal measured).

**Questions to answer:** How is this mechanism (competitor-proximity pricing) different in kind from the Princeton Review case — is it a legitimate competitive response or a form of geographic price discrimination with its own disparate effects (since store location itself often correlates with income and race)? What did the WSJ's broader 2012 investigation find about other retailers testing similar location-based pricing that same year?

**Evidence to seek:** The original WSJ investigation and its stated methodology; any other retailers named in the same reporting era.

**Counterevidence:** Competitor-proximity pricing is textbook competitive behavior (matching or beating a nearby rival's price) rather than an attempt to extract more from a captive customer — represent this as the more benign, market-driven explanation the evidence actually supports for Staples specifically, in contrast to Chapter 12.

**Avoid:** Blurring this case with Chapter 12's; the point of placing them back-to-back is the contrast between a demographic-correlated pricing scheme and a competition-driven one that merely has demographic *side effects* through the geography of retail locations.

**Handoff:** Both of these early 2010s cases relied on comparatively simple data (zip code). The next chapter shows how, by the mid-2020s, an entire industry had grown up to feed far more granular personal data into pricing decisions.

## Chapter 14 — Eight Firms You've Never Heard Of

**Job:** Report on the FTC's 2024–2025 "surveillance pricing" 6(b) study: in July 2024 the FTC ordered eight intermediary firms (identify and cite them precisely by name from the FTC's own materials) to disclose how they build and sell pricing products to retailers, finding that the firms studied had served at least 250 client businesses including grocery retailers, using data such as precise location, browsing history, mouse movements, and abandoned shopping carts; and the FTC's January 2025 staff report/"Issue Spotlight" describing these findings.

**Questions to answer:** Who exactly are the intermediary firms the FTC studied, and what products do they sell (personalized pricing engines, "customer-specific" or "tailored" pricing tools)? What specific data points does the FTC report describe being used? How does the report distinguish "surveillance pricing" from ordinary dynamic pricing?

**Evidence to seek:** The FTC's own July 2024 6(b) orders and press materials, the January 2025 report/staff perspective and "Issue Spotlight" PDF, and contemporaneous reporting (e.g., Forbes' 2026 retrospective on the study) — cite the FTC's original documents as primary sources.

**Counterevidence:** The FTC's report describes what data *can be* and *has been* used by these intermediaries' clients; it does not establish how many retailers actually deploy fully individualized pricing to end consumers versus using the tools for less granular segmentation. Preserve that distinction; the report is significant mainly for showing the *infrastructure* exists at meaningful scale, not for proving every price a reader sees is personalized.

**Avoid:** Naming individual grocery retailers unless a specific, sourced claim ties them to a specific practice — the FTC's public materials describe patterns rather than naming most specific client retailers, since the underlying six(b) submissions were partly confidential; be precise about what is and is not publicly attributed.

**Handoff:** With the infrastructure established, the book can now describe, carefully, what everyday personalization looks like from the consumer's side, and how much of it a shopper can and cannot detect.

## Chapter 15 — Everybody's Paying a Different Price

**Job:** Synthesize Chapters 11–14 into a clear-eyed picture of what personalized/surveillance pricing actually is as of 2026: real-time bidding and ad-tech infrastructure repurposed for pricing, loyalty-app-specific "personalized offers" (distinguish this legitimate, opted-in mechanism from covert personalization), browser and device fingerprinting, and the practical difficulty an ordinary shopper faces in ever proving they were charged more than someone else for the identical thing at the identical moment.

**Questions to answer:** What is the actual evidentiary gap between "the infrastructure to personalize price exists and is sold at scale" (well documented, per Chapter 14) and "most prices most people pay are individually computed" (not well documented)? Why is personalized pricing so hard for consumers, journalists, and even regulators to detect and prove, compared with the earlier zip-code-level cases?

**Evidence to seek:** Follow-on reporting and any additional 2025–2026 investigations of specific personalized pricing incidents (search for updates beyond what's cited in Chapter 14); loyalty-app economics reporting (grocery and retail apps offering "personalized deals").

**Counterevidence:** Some economists and industry defenders argue personalized discounts (as opposed to personalized markups) can make goods cheaper for price-sensitive shoppers overall — a coupon-app "personalized offer" that undercuts the shelf price for one shopper is a personalized price too, and it runs in the consumer's favor. Represent this fairly; the book's argument is about opacity and disclosure, not that personalization is inherently a markup.

**Avoid:** Overclaiming certainty the evidence doesn't support; this is the chapter to be most explicit about what remains genuinely unknown.

**Handoff:** One especially aggressive form of algorithmic pricing did get proven, in court filings, in detail: RealPage's rent-setting software. The book now turns from consumer retail to housing.

## Chapter 16 — The Algorithm That Learned to Collude Without Being Told

**Job:** Tell the DOJ's August 23, 2024 antitrust lawsuit (joined by eight state attorneys general, later more) against RealPage, alleging its software let landlords controlling roughly 80% of a certain segment of the multifamily rental market share nonpublic competitor pricing and lease-expiration data, with the algorithm allegedly never recommending a price below the "market floor" and instead recommending landlords hold units vacant rather than undercut competitors — describe the case's resolution/settlement status as of the most recent available reporting.

**Questions to answer:** How is what RealPage is alleged to have done different, legally and mechanically, from classic price-fixing (which requires an agreement) — and why did the DOJ argue that sharing data through a common algorithm can produce the same anticompetitive effect without an explicit human handshake? What has actually been resolved (settlement terms, if any) versus what remains contested?

**Evidence to seek:** The DOJ's original complaint and press release; reporting on the case's resolution/settlement; NPR, PBS, and legal-analysis coverage of the mechanism alleged.

**Counterevidence:** RealPage has disputed the DOJ's characterization and defended its software as providing legal, independent pricing recommendations that landlords are free to reject — represent RealPage's position, sourced, alongside the DOJ's.

**Avoid:** Re-litigating the general antitrust doctrine covered by `books/silent-cartel/`; keep the focus on what this case means for the book's core argument — that the personal cost of algorithmic pricing is not limited to retail purchases but reaches necessities like housing, and that "no human agreed to anything" is no longer a reliable defense.

**Handoff:** Whether or not any individual practice is proven, the public's emotional reaction to all of this has been remarkably consistent for forty years. The book now explains why, using the foundational psychology of price fairness.

## Chapter 17 — Snow Shovels and the Idea of a Fair Price

**Job:** Explain Daniel Kahneman, Jack Knetsch, and Richard Thaler's 1986 "Fairness as a Constraint on Profit Seeking: Entitlements in the Market" (American Economic Review, Vol. 76) telephone-survey research, centered on its famous hardware-store scenario (a store selling snow shovels for $15 raises the price to $20 the morning after a large snowstorm; roughly 82% of surveyed respondents called this "unfair" or "very unfair") and the paper's "dual entitlement" principle — that raising prices in response to a cost increase is broadly seen as fair, while raising prices purely because demand or market power increased is broadly seen as exploitative — then use Wendy's February 2024 "surge pricing" announcement-and-backlash (CEO Kirk Tanner's earnings-call comments, the #BoycottWendys reaction, Burger King's "No urge to surge" promotion, and Wendy's clarification days later that it would only ever lower prices in slow periods, never raise them at peak times) as a live 2020s case study of the same psychology in action.

**Questions to answer:** Why does the dual-entitlement principle predict, almost exactly, which pricing tactics in this book have provoked outrage (surge pricing, Ticketmaster) and which have not (loss leaders, charm pricing, off-season discounts)? What does the speed and intensity of the Wendy's backlash — collapsing a fast-food company's stated strategy within days — reveal about how durable this forty-year-old psychological finding still is?

**Evidence to seek:** The original Kahneman/Knetsch/Thaler paper; contemporaneous 2024 reporting on the Wendy's episode.

**Counterevidence:** Some later research and industry practice has found ways to make demand-based pricing feel more acceptable when framed as a *discount* for off-peak use rather than a *penalty* for peak use (which is precisely the framing Wendy's retreated to) — note this as a real, evidence-based mitigation, not merely spin.

**Avoid:** Treating fairness perception as irrational; the chapter's job is to show it is a coherent, predictable, and now well-tested psychological principle that companies ignore at their own risk.

**Handoff:** If flexible, opaque pricing reliably triggers outrage, it's worth asking what the alternative — a single price the government simply sets and holds — actually looks like in practice. Chapter 18 turns to history's most thorough experiment in that alternative.

## Chapter 18 — Command Price

**Job:** Tell the history of the U.S. Office of Price Administration (OPA), created in 1941 (formalized under the Emergency Price Control Act of January 1942, led initially by Leon Henderson, dubbed the "Price Czar" in the press), which set ceiling prices on non-agricultural goods and rationed scarce consumer goods using a coupon/points system during World War II, conducted roughly 650,000 enforcement investigations in 1943 alone finding around 280,000 violations, and was disbanded in 1947.

**Questions to answer:** What specific goods were rationed and how did the coupon/points system work in practice? What black markets and enforcement problems did fixed, government-administered prices generate, and how large were they? How does this counter-case complicate the book's argument — does it show that a single, stable, "fair" public price is not automatically a *better* system, only a differently flawed one?

**Evidence to seek:** Histories of the OPA, wartime rationing mechanics, and documented black-market/enforcement activity.

**Counterevidence:** Wartime price controls are widely credited with limiting inflation and ensuring a baseline of equitable access to scarce necessities during an extraordinary national emergency — a very different context from ordinary peacetime commerce — and the chapter should not imply price controls are simply a failure; represent the trade-offs honestly.

**Avoid:** Drawing a simplistic straight line from 1940s rationing to modern debates over price controls (e.g., contemporary political proposals); the point is narrower and structural — suppressing the flexible, information-carrying function of price has costs too, which the rest of the book should keep in view when it later argues for constraining personalized pricing.

**Handoff:** Between the extremes of a fully suppressed public price and a fully personalized hidden price sits a mechanism that predates both online personalization and wartime rationing by decades and that most readers participate in voluntarily: the loyalty program.

## Chapter 19 — The Loyalty Trick

**Job:** Tell the origin of the modern loyalty/frequent-flyer program through American Airlines' AAdvantage program, launched May 1, 1981 (following, and generally credited as the second such program in the industry after Texas International Airlines' 1979 program, though the largest and most influential) in the newly deregulated post-1978 airline market — and connect this history forward to the modern grocery and retail loyalty app, which trades a shopper's purchase history and identity for "personalized" discounts, making the loyalty program arguably the first mass, voluntary, and *disclosed* personalized-pricing system.

**Questions to answer:** Why did deregulation specifically create the competitive pressure that produced loyalty programs (an airline could no longer compete on price, so it competed on retained relationship)? How does a loyalty program formally resemble first- or second-degree price discrimination — the same product at different effective prices for members versus non-members, or top-tier versus base-tier members — while feeling like a reward rather than a penalty? What does the shift from paper frequent-flyer miles to app-based, algorithmically personalized grocery offers reveal about continuity between 1981 and today?

**Evidence to seek:** AAdvantage's origin history; the broader history of frequent-flyer and retail loyalty programs; reporting on contemporary grocery/retail loyalty-app "personalized offer" mechanics.

**Counterevidence:** Loyalty programs are opt-in, disclosed, and give the customer something concrete and visible (points, discounts, status) in exchange for data — a meaningfully different bargain from the covert personalization in earlier chapters; the chapter should credit this as a genuinely more honest model, even while noting the underlying data-for-price logic is the same one running the more troubling cases in this book.

**Avoid:** Cynicism that flattens loyalty programs into pure manipulation; let the ambivalence stand — a real, mutually understood exchange that also happens to be the training ground for personalized pricing.

**Handoff:** The book now has its full cast of mechanisms — psychological, structural, algorithmic, voluntary, and covert. The final chapter turns to what is actually being done, and what a reader can do, about the ones that aren't disclosed.

## Chapter 20 — Building a Price You Can Trust Again

**Job:** Close the book by surveying the concrete 2024–2026 policy response — the FTC's December 17, 2024 final "junk fees" rule (covering live-event ticketing and short-term lodging, requiring total-price disclosure, effective May 12, 2025), the FTC's August 19, 2026 proposed enforcement policy statement on personalized-pricing disclosure under Section 5 of the FTC Act (a proposal, not a final rule, open for public comment), and the European Union's Digital Services Act (in force since February 2024), Digital Markets Act transparency requirements, and the emerging Digital Fairness Act / Consumer Rights Directive provisions requiring disclosure when a price has been set by automated, personalized decision-making — then return, deliberately, to the unresolved Delta dispute from Chapter 1, and close with an honest accounting of what disclosure can and cannot fix.

**Questions to answer:** What do these rules actually require companies to do (and, as importantly, what do they explicitly not prohibit — the FTC's junk-fees rule, for instance, does not ban dynamic pricing itself, only requires total-price disclosure)? Why might disclosure alone be an insufficient remedy — what does the book's own evidence (from Kahneman's fairness research to the persistence of Big Tech ad-tracking despite years of disclosure regimes) suggest about whether consumers actually change behavior once told a price is personalized? What, concretely and modestly, can an individual reader do (clearing cookies, comparison-shopping across devices/accounts, understanding what a receipt cannot tell them)?

**Evidence to seek:** The FTC's final junk-fees rule and its effective date; the FTC's August 2026 proposed policy statement; EU DSA/DMA and Digital Fairness Act materials.

**Counterevidence:** Give real weight to the industry argument that disclosure and compliance costs could push some legitimate, efficiency-enhancing dynamic pricing out of reach for smaller businesses, and to the possibility that better-informed but still busy consumers will not meaningfully change behavior even once prices are labeled — do not let the ending oversell what regulation is likely to achieve.

**Avoid:** A tidy, triumphant close; the book has spent nineteen chapters showing genuine ambiguity, and the last chapter should preserve that, ending on the honest, still-open question the Delta dispute represents rather than a false resolution.

**Handoff:** None — this is the final chapter. Back matter follows.
