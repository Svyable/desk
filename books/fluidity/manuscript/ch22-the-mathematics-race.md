# The Mathematics Race

The most dangerous mistake in a book about Anthropic solving Navier–Stokes would be to assume Anthropic gets to run alone.

By September 2026, machine mathematics had already become a race.

Not a race in the cartoon sense, with one scoreboard and one finish line. The competitors were building different layers of the same emerging system. Some were training models to discover mathematics. Some were formalizing old mathematics at industrial scale. Some were assembling public libraries of conjectures. Some were building distributed swarms that treat Git repositories as queues for autonomous proof agents. Some were improving kernels and independent checkers. Some were using machine learning to search numerical solution spaces rather than theorem spaces.

The Navier–Stokes problem sits almost exactly where these efforts could collide.

Anthropic's Fermat formalization showed one extreme: an enormous known theorem reconstructed in Lean by many agents working through a shared dependency graph. The result demonstrated that machine labor could absorb a formalization project previously expected to consume years of expert human work.

OpenAI's 2026 mathematics program demonstrated another extreme. In August, the company published ten advances in mathematics and theoretical computer science produced by an internal version of its Astra system. The problems ranged across geometry, coding theory, complexity, operator algebras, cryptography, and combinatorics. OpenAI said the system generated the mathematical arguments and then formalized each one into Lean certificates after human preparation of the manuscripts.

That distinction matters.

Anthropic's Fermat result was primarily a feat of formal reconstruction around known mathematics.

OpenAI's results were presented as research advances on open problems.

These capabilities are complementary, and their convergence is the event to watch.

Discovery without verification produces a flood of claims.

Verification without discovery produces increasingly trustworthy reconstructions of what humans already know.

A system that can do both can change the tempo of research.

The change was already visible again in September. Lean's own public history page recorded that OpenAI's GPT-6 Astra had helped establish a stronger prime-gap bound of 186 and that the result had a Lean formalization. The exact bound will matter enormously to specialists and very little to the argument here. The strategic fact is the repeated pattern: frontier models generate research mathematics, then formal methods become the validation layer.

The pipeline is becoming a habit.

That makes Navier–Stokes less like a one-off stunt and more like a natural test case.

A laboratory that wants to demonstrate general scientific reasoning needs problems with several properties. The target should be unambiguously important. Progress should be hard to fake. The domain should require deep reasoning rather than memorized benchmark solutions. Useful partial results should exist even if the grand problem resists. Tool use should matter. External experts should be able to attack the output. Ideally, a successful artifact should be checkable in a way that does not require trusting the lab.

Navier–Stokes fits almost indecently well.

It is famous without being purely ceremonial. The equations underlie real fluid mechanics. The analytical frontier contains deep harmonic analysis, geometry, functional analysis, numerics, and computation. Both positive and negative solution routes are possible. A candidate proof can be compared against exact formulations. Numerical singularity searches can generate intermediate discoveries. Formalization infrastructure would benefit other PDEs even if the Millennium problem remains open.

The winner therefore does not have to win the prize to win something important.

This changes incentives.

Anthropic could spend years formalizing PDE infrastructure and produce valuable public mathematics without solving Navier–Stokes.

OpenAI could attack adjacent regularity questions and demonstrate research discovery without closing the Clay statement.

Google DeepMind could continue using machine learning as a discovery engine for singular structures and produce candidate objects that no language model would invent symbolically.

Academic groups could combine open models with proof assistants and rigorous numerics, avoiding the closed-lab model entirely.

The first decisive contribution may come from a coalition nobody can currently name.

This is why the title *How Anthropic Solves Navier–Stokes* should be read as a designed provocation rather than a corporate prophecy.

Anthropic is a useful protagonist because its architecture makes the mechanism unusually legible. But the deeper subject is the institutional form of machine science.

The race will pressure every lab to answer the same question: what part of the result must remain proprietary, and what part must become public before the world should believe it?

A company can reasonably keep model weights private.

It can keep internal training data, orchestration software, and compute infrastructure private.

It cannot reasonably ask the mathematical community to accept a Millennium solution that depends on proprietary execution no outsider can reproduce.

The stronger the commercial competition becomes, the more important this boundary will be.

If Anthropic announces a proof while OpenAI is one month behind, Anthropic has every incentive to publish quickly.

If OpenAI has a competing argument, it has every incentive to find Anthropic's flaw.

If DeepMind has numerical evidence inconsistent with both, it has every incentive to expose it.

Competition can become a verification mechanism.

This is one of the healthier possibilities in the story.

Rival labs share many biases. They train on overlapping public corpora. Their researchers read the same papers. Their models may reproduce the same fashionable approaches. But they do not share all incentives, implementations, or institutional commitments. A proof that survives hostile reproduction by a competing frontier lab gains a kind of evidence that a hundred internal reviewer agents cannot provide.

The rivalry should be designed into the scientific process rather than treated as public-relations noise.

Publish the theorem statement early.

Publish the proof artifact.

Offer verification bounties for counterexamples and build failures.

Invite other labs to run independent checkers.

Release numerical initial data and certificates.

Reward the first credible refutation as visibly as the original claim.

The prize for being wrong quickly should be reputational credit for improving the field.

That norm will be difficult.

Companies are not mathematical departments. Product launches reward certainty. Research announcements reward novelty. A system whose most valuable output is “our competitor's proof fails at Lemma 417 because a hidden integrability assumption enters here” does not produce the same marketing image as a solved Millennium problem.

Science needs the former anyway.

The emerging open formal-mathematics ecosystem may provide a counterweight.

Google DeepMind maintains a public collection of formalized conjecture statements in Lean. The project does not pretend that formalizing a conjecture solves it. Its value is standardization: the unresolved target becomes something machines and humans can point at exactly.

Other projects are experimenting with a more radical labor model. Tau Ceti describes itself as an AI-welcome Lean library downstream of Mathlib in which humans own roadmaps and review rubrics while AI systems handle much of the implementation and review. The `unsorry` project treats a Git repository as a distributed work queue: autonomous agents from different model families attempt to replace Lean `sorry` placeholders with kernel-verified proofs.

These projects are small compared with a frontier lab's compute budget.

Their institutional idea may be larger.

Mathematics can become massively parallel without becoming centrally owned.

A theorem graph can be public.

Tasks can be claimed by many kinds of agent.

Successful lemmas can merge into a shared library.

The kernel can act as a gate that does not care whether the proof was written by Claude, Codex, Gemini, a graduate student, or a deterministic tactic.

At that point, the natural competitor to an Anthropic Navier–Stokes program may not be another company.

It may be an open network.

Imagine the Clay target as a public repository.

The root theorem is unproved.

Underneath it sit formalized known results, open lemmas, numerical challenges, counterexample searches, rigorous-computation tasks, and statement-equivalence proofs. Universities contribute infrastructure. AI labs contribute models or proof artifacts. Individual mathematicians open new strategic branches. Independent checkers validate merges. Reputation accrues to useful lemmas, refutations, abstractions, and verified reductions rather than only to the final person who closes the root.

This would look less like a race to plant a flag and more like Linux for a theorem.

There are reasons it might fail.

Open projects can become chaotic. No one owns the architecture. Agents can flood repositories with trivial proofs. Review becomes a bottleneck. Valuable research directions can require large proprietary compute. Mathematical taste is difficult to encode in issue trackers. A single gifted analyst may outperform ten thousand automated tasks by seeing the right representation.

Yet the model has one enormous advantage.

It makes accumulation visible.

A closed research run can spend a trillion tokens and leave the world with a paper.

An open theorem program can leave behind the formalized theory, counterexamples, failed strategies, rigorous numerics, and checker infrastructure even if the root remains open.

The race then produces public capital.

This is how *Fluidity* should judge the competitors.

Not by benchmark scores.

Not by token budgets.

Not by how many graduate-level questions the models answer.

Ask what durable mathematical objects survive the run.

Did the system find a new theorem?

Did independent experts validate it?

Did it formalize useful theory?

Did it expose a false route?

Did it build a checker another group can use?

Did it produce a candidate singularity reproducible outside the lab?

Did it shrink the set of plausible worlds in which the Clay problem remains unresolved?

A lab can lose the headline race and win on these measures.

That possibility matters because famous open problems distort attention. Once companies discover that a solved theorem is a powerful capability demonstration, they will naturally select problems with recognizable names. The risk is that mathematical research becomes a trophy market: Riemann, Navier–Stokes, Birch and Swinnerton-Dyer, whichever prize attracts the most public attention.

The antidote is to value adjacent progress explicitly.

Anthropic's Riemann-related work is useful here. The system did not solve the Riemann hypothesis. According to the company's account, it produced an improved related bound that mathematicians could validate. The failed grand attempt generated a real neighboring result.

That is exactly what a mature Navier–Stokes race should expect.

One team may formalize a regularity criterion nobody had machine-checked.

Another may discover a new unstable profile for a related equation.

Another may prove that a popular class of candidate inequalities cannot close at critical scaling.

Another may build the missing rigorous-numerics library that eventually makes a singularity proof possible.

Another may discover that a claimed breakthrough reduces to a theorem from 1987 under new notation.

The race can produce a field before it produces a winner.

This changes the meaning of “Anthropic solves Navier–Stokes.”

Perhaps Anthropic generates the decisive inequality.

Perhaps OpenAI formalizes it first.

Perhaps a Brown mathematician recognizes the geometric mechanism.

Perhaps a DeepMind numerical experiment reveals the extremal flow that makes the inequality visible.

Perhaps an open Lean contributor fixes the exact functional-analysis lemma the proof requires.

Perhaps an independent checker catches a kernel issue before publication.

Who solved the problem then?

Mathematics has always been less individual than its prize stories suggest. AI will make that interdependence impossible to hide.

The theorem may have thousands of machine and human contributors distributed across organizations that compete everywhere except inside the final proof object.

This is not a reason to abandon credit.

It is a reason to make provenance first-class.

A theorem graph can record who introduced a conjecture, who found the counterexample to its first version, which agent proved the formal lemma, which human redesigned the definition, which numerical group produced the certificate, and which independent lab reproduced the result. Credit can become more granular exactly because machine labor makes the project larger.

The race will therefore force a cultural decision.

Do we want machine mathematics to reproduce the winner-take-all structure of famous theorem stories, only faster?

Or do we want the machinery to expose the actual topology of discovery?

Navier–Stokes may be the place where this choice becomes visible to everyone.

The equations describe a fluid by local interactions that produce global behavior no single particle controls.

The research program may end up looking strangely similar.

Many agents.

Many labs.

Many proofs, failures, and checks.

One theorem emerging from the flow.
