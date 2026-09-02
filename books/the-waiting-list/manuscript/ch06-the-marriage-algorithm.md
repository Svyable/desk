# The Marriage Algorithm

In 1962, two mathematicians published a seven-page paper with a title that sounds like a joke until you realize how much of modern life eventually fits inside it.

David Gale and Lloyd Shapley called the paper “College Admissions and the Stability of Marriage.”

The marriage part got the attention. The college part was closer to the point.

Imagine a group of students applying to a group of colleges. Each student has preferences. Each college has preferences. Colleges have limited capacity. A student would like the most preferred college willing to take them. A college would like the most preferred set of students willing to attend. There is no single price that clears the market because admission is not a normal purchase. The institution is trying to create pairs between two sides that each care about whom they get.

That is a matching market.

The problem is not merely how to assign everyone somewhere.

The problem is whether the assignment holds.

Suppose Maya is assigned to College B but prefers College A. College A has admitted Leo but would prefer Maya to Leo. If Maya and College A can find each other after the official process ends, they have a reason to break the assignment. The system has produced a pair who would rather be together than accept what the system gave them.

Gale and Shapley called that kind of situation instability.

More precisely, a matching is unstable if there exists a pair not matched to each other who would both prefer each other to their assigned partners. Later literature calls such a pair a blocking pair.

The phrase sounds technical. The intuition is ordinary.

An institution is unstable when it gives two parties a mutually attractive reason to go around it.

That is the same pressure we have already seen in queues and ticket markets. If the official rule consistently puts people in arrangements they can profitably escape, they will try to escape. The bypass may be a black market, a side deal, a private contract, or a quiet phone call. The form changes. The structural problem does not.

Gale and Shapley showed something stronger than the definition.

They showed that a stable matching always exists in the basic problem they studied, and they gave a procedure for finding one.

The procedure is now usually called deferred acceptance.

It is simple enough to perform with index cards.

Take two groups. To keep the original terminology, call one group men and the other women. Each person ranks everyone on the other side from most to least preferred.

In the first round, every man proposes to his first choice.

A woman who receives one proposal keeps it provisionally.

A woman who receives several proposals keeps the one she prefers most and rejects the others.

The word provisionally matters. She has not accepted forever. She is holding the best offer she has seen so far.

In the next round, every rejected man proposes to his next choice.

Each woman compares any new proposal with the one she is already holding. She keeps the better one and rejects the worse.

The process repeats.

A man moves down his list only after rejection. A woman moves up, in the sense that she never discards a more-preferred proposal for a less-preferred one.

Eventually, no man remains rejected and able to make another proposal.

The provisional matches become final.

That is the algorithm.

The remarkable part is not that it ends. The remarkable part is what ending means.

No unmatched man and woman can both prefer each other to the partners they received.

Suppose, after the algorithm ends, Daniel is matched with Priya but would rather be with Sofia. For Daniel to prefer Sofia, he must have proposed to Sofia before reaching Priya, because he worked down his list in order. Sofia therefore either rejected Daniel immediately or held his proposal and later rejected him for someone she preferred more. By the time the algorithm ends, Sofia cannot be matched with someone she likes less than Daniel, because she only trades upward.

So Daniel may want Sofia, but Sofia does not want Daniel more than the person she has.

There is no blocking pair.

The proof is short enough that it almost feels like a trick.

It is not.

The trick is in the design of the waiting.

Deferred acceptance works because acceptance is not final when it first occurs. The receiving side can hold an offer without committing, and the proposing side can keep trying after rejection. The system delays finality until it has learned enough from the pattern of proposals to avoid creating a mutually tempting escape route.

That is a different philosophy from first come, first served.

In a queue, the first acceptable match often ends the search. The person reaches the desk, gets the seat, gets the permit, gets the slot.

Deferred acceptance deliberately refuses to finalize too early.

That delay creates information.

Imagine three students—Ana, Ben, and Cara—and three colleges—North, Central, and South—with one seat each.

Ana ranks North first, Central second, South third.

Ben ranks North first, South second, Central third.

Cara ranks Central first, North second, South third.

Now suppose North ranks Ben over Ana over Cara. Central ranks Ana over Cara over Ben. South ranks Cara over Ben over Ana.

In the first round, Ana proposes to North. Ben proposes to North. Cara proposes to Central.

North keeps Ben and rejects Ana. Central keeps Cara.

Ana now proposes to Central.

Central prefers Ana to Cara, so it keeps Ana and rejects Cara.

Cara then proposes to North.

North prefers Ben to Cara and rejects her.

Cara finally proposes to South, which accepts.

The result is Ben at North, Ana at Central, and Cara at South.

Now look for a pair that would rather defect together.

Ana prefers North to Central, but North prefers Ben to Ana.

Cara prefers Central to South, but Central prefers Ana to Cara.

Cara also prefers North to South, but North prefers Ben to Cara.

Nobody can find a mutually preferred alternative.

The assignment is stable.

This is not the same thing as saying everyone is happy.

Cara wanted Central most and got South.

Ana wanted North and got Central.

Stability does not mean universal satisfaction. It means dissatisfaction does not line up in a way that creates a pair with a mutual incentive to bypass the assignment.

That distinction matters because many institutions quietly promise too much when they talk about “optimal matching.”

A stable assignment can still contain disappointment, inequality, and conflict.

It can even systematically favor one side.

Gale and Shapley’s result included a feature that later became central to market design: who proposes matters.

When men propose in the classic marriage version, the resulting stable matching is best for the proposing side among all stable matchings and worst for the receiving side among all stable matchings, using the individuals’ stated preferences as the measure.

Reverse the direction of proposals and the distribution changes.

The algorithm can remain stable while the beneficiaries shift.

That is not a bug in the theorem.

It is a warning about institutional design.

People often hear the word algorithm and imagine that once the math is correct, politics has ended.

Here, the math says the opposite.

The procedure contains a policy decision before the first proposal is made.

Who gets to propose?

Who gets to rank whom?

Which preferences count?

How are ties handled?

What happens when one side has quotas rather than one-to-one matches?

Can participants remain unmatched?

Are preferences private, strategic, or constrained?

The algorithm does not answer those questions for society.

It answers a narrower one: given a particular structure of preferences and a particular proposal rule, can we find a stable outcome?

That narrower answer turned out to be enormously valuable.

The strange historical feature of the Gale-Shapley paper is that some institutions had already stumbled toward similar procedures without having the theory.

The American market for medical residency positions had spent the first half of the twentieth century unraveling. Hospitals competed to hire medical students earlier and earlier. Offers arrived before students had enough information to compare programs. Deadlines became short. The system moved backward into medical school because each side feared losing good matches by waiting.

In the early 1950s, the medical profession created a centralized clearinghouse. Decades later, Alvin Roth showed that the procedure it used was essentially equivalent to deferred acceptance.

The market had discovered the mechanism before economists fully understood why it worked.

That fact would become important in Roth’s career.

Roth did not merely ask whether an algorithm was elegant. He asked why some matching institutions survived while others broke apart.

Stability became an empirical clue.

A market that repeatedly creates blocking pairs invites side deals. A market that produces stable assignments removes at least one reason for participants to abandon the central mechanism.

That does not make stability sufficient for success.

A stable system can be unfair. It can be opaque. It can embody objectionable priorities. It can be stable only because powerful participants are allowed to define the rankings. It can treat some people as unacceptable and leave them unmatched.

But instability is costly in a distinctive way.

It makes the institution fragile from within.

This is the sense in which matching differs from ordinary rationing.

A queue allocates a scarce object to a person.

A matching system allocates relationships.

The object may itself have preferences, or more accurately, the institution controlling the object may have preferences. A hospital ranks residents. A school may have priorities among students. A kidney is biologically compatible with some recipients and not others. An employer cares which worker it gets. A worker cares which employer.

The assignment has two sides.

That changes everything.

If there is only one side with preferences, a simple ranking may be enough. Give the apartment to the highest-priority applicant. Give the vaccine appointment to the earliest eligible registrant.

If both sides care, one ranking can create chaos.

Suppose all students simply choose their favorite college in order. Popular colleges fill instantly. Rejected students move to backups. But colleges may later prefer rejected students to some of those they accepted. If offers are final too early, the system can lock in weak matches and create incentives to circumvent the rule.

Deferred acceptance fixes this by separating proposal from final acceptance.

That sounds almost trivial now because the idea has seeped into so many explanations of matching markets.

It was not trivial in 1962.

The paper begins from a problem that is easy to state and unpleasant to solve by brute force. With even a modest number of participants, the number of possible pairings becomes enormous. Checking every possible matching for stability would be a terrible institutional method.

Gale and Shapley supplied a constructive proof.

They did not merely prove that a stable matching must exist somewhere in the combinatorial wilderness. They gave a procedure that finds one through a sequence of ordinary actions: propose, hold, reject, try again.

This is one reason algorithms matter in public life even when nobody using them cares about computer science.

An existence theorem says a good arrangement is possible.

An algorithm says how to reach it.

Market design lives in the distance between those two sentences.

The next complication is incentives.

If people know the rule, should they tell the truth about their preferences?

This question is more subtle than stability.

Under the proposer-optimal version of deferred acceptance, truthful ranking has especially strong properties for the proposing side. In later work, Roth and others showed that no stable mechanism can make truthful reporting a dominant strategy for both sides in the general two-sided matching problem. The dream of a completely manipulation-proof stable system is unavailable.

Again, the theorem does not remove politics. It identifies the tradeoff.

An institution can choose a stable mechanism that gives one side especially clean incentives, but it cannot make every strategic problem vanish for everyone.

This matters whenever people are told, “Just rank your true preferences.”

Sometimes that advice is exactly right under the mechanism in use.

Sometimes it is not.

The difference is not psychological. It is mathematical.

Before the redesign of school-choice systems in places such as Boston, families often faced mechanisms in which ranking a highly competitive school first could hurt them if they failed to get it, because they might lose priority at a safer second choice. The system invited strategic misrepresentation. Sophisticated families learned to game it. Less informed families could be punished for telling the truth.

Deferred acceptance can remove that particular incentive when designed from the student-proposing side.

The mechanism changes behavior before it changes assignments.

That is the same pattern we saw with ticket queues. A rule does not merely select winners. It teaches participants what to optimize.

If speed matters, they become faster.

If seniority matters, they wait.

If a ranking mechanism rewards strategic misrepresentation, they misrepresent.

If truth-telling is safe, they can spend less effort gaming the system.

Good mechanism design often looks like reducing the value of cleverness.

That can sound anti-market until you notice what kind of cleverness is being removed.

A doctor choosing among residency programs should ideally spend effort deciding which program is a good fit, not calculating how to disguise a preference ranking to avoid being punished by the algorithm.

A family choosing schools should ideally spend effort understanding the schools, not reverse-engineering a priority rule.

A kidney exchange should ideally spend effort finding compatible transplants, not rewarding whichever hospital can manipulate the sequence of offers.

The institutional objective is not to eliminate strategy from human life.

It is to stop wasting strategy on loopholes the institution accidentally created.

This is why the word “stable” can mislead when taken too literally.

A stable matching is not socially frozen.

People can move, change jobs, divorce, transfer schools, reject offers, or die. New participants arrive. Preferences change. Capacity changes. Real institutions operate repeatedly, not once.

The theorem concerns a snapshot.

Within that snapshot, no unmatched pair should have a mutual reason to break away from the assignment.

In a changing world, the system must be run again or adapted.

Even in theory, stability can coexist with distributional conflict.

Suppose there are several stable matchings. The proposer-optimal one and receiver-optimal one can differ sharply. Choosing between them changes who gets a better outcome.

An administrator cannot hide that choice behind the phrase “the algorithm decided.”

The algorithm decided only after the institution decided the algorithm.

That sentence will matter throughout the rest of this book.

Algorithms are often presented as replacements for discretion.

More often, they relocate discretion.

A human does not choose each final match one by one. Instead, humans choose the priority structure, the eligible participants, the ranking rules, the constraints, the proposer side, the treatment of ties, and the appeal process. The machine applies those decisions consistently.

Consistency is valuable.

It is not neutrality.

The Nobel committee made this distinction unusually clear when it recognized Lloyd Shapley and Alvin Roth in 2012 “for the theory of stable allocations and the practice of market design.” Shapley’s contribution was not simply an algorithm. It was part of a broader theory showing how different matching methods produce different stable outcomes and how the design can benefit one side or the other. Roth’s contribution was to connect that theory to institutions that had to work with real people, incomplete information, legal rules, and political constraints.

The phrase “economic engineering” appeared in the Nobel materials for a reason.

Engineering begins where the pure theorem stops.

A bridge calculation may be correct and still fail if the material is wrong, the load is mismeasured, or the maintenance plan is ignored.

A matching algorithm may be correct and still fail if participants do not trust it, if the preference data are distorted, if priorities are illegitimate, if appeals are impossible, or if powerful actors can opt out whenever the result displeases them.

The theory gives a designer leverage.

It does not give permission to ignore the institution.

That is also why the marriage metaphor, useful as it was mathematically, should be handled carefully.

Real marriages are not centralized clearinghouse assignments between two lists with complete rankings. People meet over time. Preferences are incomplete, endogenous, and shaped by social networks. Individuals can remain single, reconsider, learn, misrepresent, or care about qualities they cannot rank consistently. Modern relationships do not fit neatly into the original binary setup either.

Gale and Shapley were not claiming to have solved romance.

They had built a mathematical model simple enough to expose a structure that appears in many allocation problems.

The marriage problem made the idea of blocking pairs vivid.

The college-admissions problem made the mechanism useful.

Later economists would make it institutional.

The deepest contribution was not a dating formula.

It was a new way of seeing scarcity.

Before matching theory, one could look at a failed allocation system and describe the symptoms: offers arrive too early, participants game the rules, deals happen outside the official process, good pairs somehow miss each other.

After matching theory, one could ask whether the mechanism itself was producing unstable assignments.

That is a more powerful question because it suggests a repair.

Do not merely punish the people who defect.

Change the rule so they have less reason to defect.

This is the same shift we saw in the ticket market when bot enforcement proved unable to solve excess demand by itself. Enforcement matters, but rules create incentives before enforcement begins.

A stable mechanism tries to design away a category of evasion.

That is why the original paper still feels modern.

Its world is stripped down to ranked preferences and finite lists, but its central observation is institutional: when people can reject the official assignment for a mutually better one, the official assignment is not really final.

A system that ignores that fact must either become coercive or become irrelevant.

Deferred acceptance offers another path.

Let preferences reveal themselves through an ordered process.

Delay final commitment.

Allow the receiving side to trade up.

Let rejected participants continue searching.

Stop only when no mutually preferred escape pair remains.

The result is not perfect.

It is stable.

That word would become the hinge between mathematics and medicine.

For years, American hospitals and medical students had already been living inside a matching problem they did not describe in Gale and Shapley’s language. The market had unraveled once, been centralized, and then accumulated new complications as medicine changed.

By the 1990s, the system needed redesign.

That is where Alvin Roth entered the story in force.

The next chapter is about the medical match—and about what happens when a theorem has to survive contact with couples, careers, hospitals, deadlines, and people who cannot afford to treat a mathematical assignment as an abstraction.