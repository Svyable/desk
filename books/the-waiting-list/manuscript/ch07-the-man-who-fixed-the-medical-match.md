# The Man Who Fixed the Medical Match

The first problem was not the algorithm.

It was the telephone.

By the 1940s, American hospitals were competing for interns so aggressively that the hiring season had started to creep backward through medical school. A hospital that waited until students had completed more training risked losing the candidates it wanted to a hospital willing to move first. Once one hospital moved early, another had reason to move earlier. Students were sometimes asked to commit before they had enough information to compare programs. Hospitals were evaluating students before much of the students’ medical education had happened.

The market was unraveling.

That word has a precise meaning in matching theory, but the lived version is easy to recognize. A transaction that should happen later starts happening earlier because nobody trusts everyone else to wait. Timing becomes an arms race.

Medical schools and hospitals tried to impose order without changing the underlying mechanism. In 1945, the Association of American Medical Colleges backed a plan that delayed the release of information about students. The hope was that if hospitals could not see the relevant records, they could not make offers too early.

The early offers slowed.

The pressure did not disappear.

Once information became available, hospitals compressed the decision window instead. Students could receive offers that expired before other programs had made theirs. By the end of the decade, what later economists would call exploding offers had become common: accept now or lose the position.

This was not irrational behavior by bad people.

That was the problem.

A hospital that gave a student a generous week to decide could lose its next several choices while waiting. A student who declined a decent offer because a better one might arrive later could end up with nothing. Everyone might have preferred a slower market. No individual participant could safely create one.

The queue had become a race to be early.

And because this was a two-sided market, a simple chronological queue could not fix it. Hospitals had preferences over students. Students had preferences over hospitals. Each side cared about the identity of the other. An orderly market had to gather both sets of preferences and resolve them at roughly the same time.

In 1952, a national clearinghouse ran the first Match.

Instead of letting offers detonate one by one, students and hospitals submitted rank-order lists. The clearinghouse used those lists to produce assignments on a common schedule. The National Resident Matching Program, created in the institutional form that followed, would become one of the most durable matching mechanisms in American life.

It did not begin with modern matching theory.

It began because medical students and hospitals were tired of a hiring market that made both sides worse off.

That history matters because it changes the usual story about algorithms. We tend to imagine a clever theory arriving first and an institution adopting it later. The medical Match developed in the opposite direction. Practitioners built a workable institution. Economists eventually arrived with language for why it worked, where it failed, and how to redesign it.

Alvin Roth was one of those economists.

Long before the Nobel Prize, Roth studied markets in which money was not the only or even the main coordinating device. He became interested in the medical Match because it had survived while other centralized matching systems had failed. A durable institution is evidence of something, even before the theory is clear.

Roth’s work connected the Match to the stability ideas from Gale and Shapley.

The central insight was the one from the previous chapter: an assignment is fragile if a hospital and a doctor who were not matched to each other would both prefer to be together. If enough such pairs exist, participants have reasons to make side deals, withdraw, or rebuild the market outside the official system.

The old Match had achieved a great deal. It had stopped the race toward earlier and earlier offers. It had centralized preferences. It had created a common decision date. It had survived for decades.

But survival did not mean its design was finished.

By the 1990s, the market around it had changed.

One of the most difficult changes was the rise in applicants entering the Match as couples.

A single applicant can rank programs one by one. A couple has to rank pairs of outcomes.

Suppose one partner is applying in pediatrics and the other in internal medicine. A program in Boston might be excellent for one but useless if the other partner can match only in Seattle. Two individually attractive jobs can make a terrible joint outcome.

This breaks the clean structure of the simplest deferred-acceptance model.

In the classic model, one applicant’s preference for a program does not depend on where another applicant is assigned. Couples introduce exactly that dependence. Their choices are complementary. A position in one city becomes more valuable when the partner can also obtain a position nearby.

The mathematics gets ugly quickly.

More important, the human problem gets ugly quickly.

A mechanism that works beautifully for individuals can tell a couple that one partner has a job in New York and the other has a job in California. Calling both matches “successful” would miss what the applicants actually asked the system to do.

Roth had written about this kind of complication as a theorist. Couples were among the cases that showed why simple matching theorems do not automatically extend to every real market.

Then the abstraction became an assignment.

In 1995, the NRMP board asked Roth to direct a redesign of the matching algorithm. Elliott Peranson, a specialist in matching systems who was already providing technical assistance to the Match, became his central collaborator.

The job was not to replace an obviously broken machine.

It was harder than that.

They were changing a live institution that already handled tens of thousands of careers, had constituencies on both sides, and possessed decades of accumulated rules. Any new algorithm had to respect the actual constraints of medical hiring rather than the cleaner assumptions of a journal article.

There were couples. There were programs with multiple positions. There were applicants seeking combinations of programs. There were specialties and institutional rules. There were participants who might try to game the system. There was a political question about which side the algorithm should favor when multiple stable outcomes were possible.

The old algorithm had effectively been oriented toward programs.

The redesign moved toward an applicant-proposing structure.

That choice was not cosmetic.

As Gale and Shapley had shown, proposal direction affects who does better within the set of stable matchings. In a simple deferred-acceptance market, the proposing side receives its best stable outcome. If a medical matching system can be made applicant-proposing while preserving its other requirements, that moves the design toward the preferences of doctors rather than hospitals.

The design goal Roth and Peranson described was therefore not merely to produce a stable matching. It was to produce outcomes as favorable as practical to applicants while still handling the peculiar constraints of the medical market.

The couples problem prevented them from simply copying the textbook algorithm.

Instead, they built a mechanism that could tentatively place applicants, detect problems created by couples, and repair chains of instability. A couple might displace one applicant, whose displacement affected another program, whose change affected another applicant. The consequences could propagate.

The important word in their 1999 paper was not theory.

It was engineering.

The paper’s subtitle was “Some Engineering Aspects of Economic Design.”

That phrase marked a change in how economists thought about institutions. A theorem tells you what is possible under assumptions. Engineering asks what happens after the assumptions encounter a database, a deadline, a married couple, a rule written twenty years ago, and fifty thousand people with careers at stake.

Roth and Peranson did not rely only on proofs.

They ran computational experiments.

They tested the proposed algorithm against market data and simulated strategic behavior. The real medical market was too complicated for the simplest matching theory to describe exactly, but the experiments suggested that the theory remained a useful approximation. The set of stable outcomes appeared to be small. Opportunities for profitable strategic manipulation appeared limited. The redesigned mechanism looked slightly better for applicants than the old program-oriented version.

This is a less glamorous form of intellectual work than discovering an elegant theorem.

It may be more important when the theorem has to touch people.

A market designer has to ask questions a pure model can ignore.

How often does the hard case occur?

How large is the damage if it occurs?

Can the algorithm recover from it?

Does the mechanism invite participants to lie about their preferences?

Will the institution accept the result?

Can the system explain what it did after the fact?

What happens when two rules collide?

The redesign went into use for the 1998 Match.

Its broad architecture remains recognizable today.

Applicants submit ranked lists of programs. Programs submit ranked lists of applicants. The algorithm attempts to place applicants into their most preferred available option while respecting program preferences and capacity. Applicants participating as couples rank pairs of programs. Under current NRMP rules, the algorithm treats the pair as a couple: a coupled match succeeds only when both partners can be placed into one of the ranked program combinations.

That last rule shows how far the system has moved from the simple marriage problem.

The original Gale-Shapley story asks which one person should be paired with which other person.

The medical Match has to solve a labor market with capacities, couples, institutional restrictions, and unmatched outcomes. It is not the same mathematical object.

Yet the old insight survives inside it.

Do not finalize too early.

Collect preferences from both sides.

Make tentative assignments.

Allow better claims to displace weaker ones according to declared rankings.

Keep going until the system can no longer improve the assignment under its rules.

The remarkable part is that this machinery became normal.

Every spring, Match Day produces photographs of medical students opening envelopes or refreshing screens, often surrounded by families and classmates. The drama is personal because the output is personal: a city, a hospital, a specialty, a move, sometimes a partner’s move too.

But underneath the ritual sits a clearinghouse designed to prevent a much older drama—the phone call demanding an answer before the next phone call can arrive.

The Match did not eliminate pressure from medical training.

It moved a particular kind of pressure into a different institutional form.

That distinction is worth keeping clear because the Match still has serious critics.

The outcome is binding. The NRMP explicitly tells participants that Match commitments are binding, subject to its rules and waiver processes. A student who opens a result and hates it cannot ordinarily treat the assignment as a casual recommendation.

That binding quality is part of what makes the market stable.

It is also part of what makes the system feel coercive to some applicants.

A mechanism can solve an unraveling problem while creating a different concentration of power.

Residents are not ordinary employees shopping among competing offers after graduation. Their training positions are gateways into licensed medical careers. Programs control scarce slots. Accreditation and specialty structure constrain the market. Applicants have already invested years of education and large sums of money before the Match determines where the next stage will occur.

It is therefore reasonable to ask whether a centralized, binding assignment weakens bargaining power.

That criticism became politically and legally salient in the early 2000s, when an antitrust lawsuit challenged the residency matching system and other features of graduate medical education. Congress subsequently enacted an antitrust exemption for matching programs in graduate medical education. The exemption remains controversial enough that members of Congress were still questioning it in 2026.

The existence of that controversy does not prove that the Match depresses wages.

The strongest empirical counterpoint is narrower. Economist Nikhil Agarwal built an empirical model of the medical Match and examined the allegation that the centralized mechanism itself explains low resident salaries. His estimates suggested that even in a competitive equilibrium, salaries would remain substantially below the marginal product of residents because applicants are willing to accept lower pay for desirable training positions and because residency capacity is constrained. In his analysis, the Match was not the likely primary cause of low salaries.

That does not settle every labor-market complaint.

It does show why mechanism design has to resist convenient villains.

A binding algorithm can feel like the source of a bad outcome even when the deeper cause is scarcity. Eliminate the clearinghouse and the number of desirable training positions does not automatically increase. Remove the algorithm and hospitals do not lose their accreditation constraints, prestige differences, geography, specialty bottlenecks, or bargaining advantages.

The pre-Match history gives us a natural experiment of sorts in the other direction.

Before a clearinghouse coordinated offers, hospitals did not become a paradise of applicant bargaining power. They raced backward in time. Students faced short deadlines and incomplete information. The decentralized market generated its own coercion.

That is the uncomfortable lesson of the Match.

There may be no mechanism that removes power from the system.

There are mechanisms that move it.

The original hiring market gave power to whoever could move first and force an answer. The early centralized Match gave more structural advantage to programs. The Roth-Peranson redesign shifted the algorithm toward applicants while keeping the central clearinghouse. Binding commitments then strengthened the institution’s ability to hold the market together.

Each improvement carries a trade.

Even the treatment of couples illustrates it.

Current rules allow two applicants to link their rank lists and seek paired outcomes. That recognizes a reality the old system handled poorly: jobs that look independent on paper can be inseparable inside a household.

But the couple mechanism is not a guarantee of geographic happiness. Couples must decide which combinations to rank. A pair that cannot obtain one of its acceptable combinations may go unmatched as a couple. The algorithm cannot create two compatible residency positions in the same place when the underlying market does not contain them.

Again, design can coordinate scarcity.

It cannot abolish scarcity.

This sounds obvious until an algorithm works well enough that people start blaming it for everything the market fails to provide.

The NRMP now handles more than sixty thousand domestic and international medical students and graduates each year across its programs, competing for more than forty thousand clinical training positions. Its scale makes the clearinghouse look inevitable.

It was not inevitable.

It was constructed because a decentralized market had become intolerable.

Then it was reconstructed because a successful centralized market had stopped fitting some of the people inside it.

That sequence is more useful than a simple success story.

First, an institution solves one failure.

Then participants change.

The old solution develops new edges.

Theory identifies the mechanism underneath the institution. Engineering adapts it. Politics decides which tradeoffs are acceptable. The redesigned institution survives long enough to acquire a new generation of critics.

That is what mature market design looks like.

Not perfection.

Maintenance.

Roth’s contribution to the medical Match was important, but the title of this chapter is deliberately a little unfair.

There was no single man who fixed the Match.

Medical students had pushed for reform decades before Roth became involved. Hospitals and medical schools had built the first clearinghouse. Elliott Peranson did the technical design work alongside Roth. NRMP staff and board members defined institutional constraints. Applicants and programs supplied the behavior the designers had to understand. Later administrators continued to modify rules around the algorithm.

Roth himself has described the redesign as the moment when the hard cases from matching theory stopped being counterexamples on a page and became problems he had to solve.

That may be the more accurate origin story for market design as a profession.

A theorist can end a paper by showing that a clean result fails when couples enter the model.

A designer gets a phone call asking what to do about the couples.

The answer, in this case, became an algorithm that has now assigned generations of doctors.

And once economists had learned how to build exchanges around preferences, compatibility, and constraints, the next waiting list was hard to ignore.

Thousands of people needed kidneys.

Many already had someone willing to give them one.

The problem was that the kidney did not match the person it was meant for.