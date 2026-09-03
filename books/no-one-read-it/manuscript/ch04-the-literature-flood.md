# The Literature Flood

Steven Greenberg began with a claim about muscle.

Patients with inclusion body myositis experience progressive weakness. Under a microscope, their muscle tissue can contain deposits involving beta amyloid, a protein more commonly associated with Alzheimer's disease. By the early 2000s, a body of medical literature described beta amyloid as something muscle fibers produced and as a cause of damage in the disease.

The claim had the appearance of scientific maturity. It appeared in papers. It was repeated in reviews. It carried citations.

Greenberg asked a question that readers often assume the citations have already answered: where, exactly, did the authority come from?

He reconstructed the network. His 2009 study followed 242 papers, 675 citations, and more than 220,000 paths through the citation graph. He classified the content of the papers and examined how later authors represented earlier findings. The resulting map did not show a straightforward accumulation of independent confirmation.

It showed selection. Papers that supported the claim were cited more readily than papers that weakened it. It showed amplification. Reviews and other articles that added no new experimental evidence became heavily cited sources for the claim. It showed mutation. In some citation chains, an idea presented earlier as a hypothesis reappeared later as an established fact.

The literature had not fabricated itself from nothing. Experiments existed. So did real uncertainty and contrary evidence. The distortion occurred as later papers chose, compressed, and restated what came before. A citation could make a sentence look connected to evidence even when the connection had become indirect. Repetition increased while the number of underlying observations did not.

Greenberg called the result unfounded authority. The phrase is precise. The problem was not merely a false statement or a dishonest author. It was authority that the structure of publication had made stronger than its evidentiary foundation.

This happened before contemporary language models could draft an abstract, summarize a paper, or propose a peer review. It belongs in a book about generative production because it reveals the older machinery into which that production arrives. Scientific literature has always been capable of citing itself.

A citation is an ingenious compression device. It lets an author use a prior finding without reproducing the experiment. It gives the reader a path backward. It distributes memory across journals, libraries, laboratories, and time. Without it, each paper would have to begin again.

The superscript or parenthesis beside a claim appears small because it carries a large promise: you can inspect the basis if you need to.

Most readers will not.

They cannot. The National Library of Medicine has indexed more than a million MEDLINE citations in each of several recent years. The exact count changes depending on whether one asks when a citation was indexed or when the underlying item was published, but the practical scale is clear. No biomedical researcher can read the biomedical literature. No specialist can read all of a specialty. Even a careful systematic review begins by discarding most of what its search retrieves.

Scientific reading is therefore an allocation system. A title earns a glance. An abstract earns several minutes. A review article substitutes for dozens of primary papers. A prestigious journal, a familiar laboratory, a striking result, or a high citation count changes the order in which attention is spent. Researchers use alerts, recommendations, search engines, reference lists, and colleagues to decide what might deserve deeper inspection.

This is not intellectual failure. It is the only possible response to scale.

The danger lies in forgetting that the allocation occurred. A claim encountered in three papers can feel independently confirmed even when all three derive it from one source. A review can feel more authoritative than a primary study because it is broader and more fluent, even when it compresses away the weakness that matters. A citation count can appear to measure evidentiary support while also measuring fashion, controversy, convenience, and the tendency of later authors to cite a review instead of following its references.

The path backward remains available in principle. In practice, every additional step makes it less likely that a reader will take it.

Generative systems reduce the cost of adding steps. They can turn notes into paragraphs, paragraphs into abstracts, papers into literature reviews, and search results into claims with references attached. They can improve grammar for authors writing outside their first language. They can suggest clearer organization. They can help a reviewer state an objection more precisely. They can surface work a researcher would not otherwise find.

They can also make secondary language multiply faster than primary evidence.

Dmitry Kobak and his colleagues looked for one sign of this change in more than fifteen million biomedical abstracts published from 2010 through 2024. They did not attempt to label particular papers as machine-written. Instead, they examined shifts in vocabulary after widely available language models entered common use. Certain words appeared much more often than earlier trends would predict. From this excess vocabulary, the researchers estimated that at least 13.5 percent of 2024 abstracts had been processed with language models, with much higher estimates in some subsets of the literature.

The method is both revealing and limited. It detects a population-level discontinuity. It cannot tell us why a particular author used a particular word, whether a model generated a whole abstract or polished several sentences, or whether the research beneath the prose was sound. The estimate is not a misconduct detector. Language assistance can improve a paper without changing its claim, and human authors can adopt words that models have made fashionable.

What the result establishes is a change in the production environment. Machine assistance became visible in the aggregate language of science remarkably quickly.

Peer review changed too. Weixin Liang and colleagues analyzed review text from several large computer-science conferences held in 2023 and 2024. Using shifts in word frequencies, they estimated that between 6.5 and 16.9 percent of the text had been substantially modified or produced with language models. Estimated use was higher among reviews submitted near deadlines and those expressing lower confidence. Reviewers in the higher-use group were less likely to participate in the later exchange with authors.

Again, the method did not observe each person writing. It cannot convert a phrase into proof of hidden model use, and model use does not make a review wrong. But the associations point toward the part of review that generation cannot supply cheaply: sustained engagement.

A peer review is not complete when criticism has been worded. An author may answer. The reviewer may need to reconsider. A disputed method may require a closer reading. A suggested citation may turn out not to support the claim for which it was offered. The intellectual work lies partly in producing the report and partly in remaining answerable to what happens after it.

The `flake8-bugbear` maintainer encountered the same boundary. The generated pull requests were plausible enough to inspect. An automated reviewer could identify real concerns. But the submissions could not be revised, so the exchange could not produce acceptable code. In scholarship, the equivalent failure is a fluent review detached from the willingness or time to keep reasoning with the paper.

The pressures are not mysterious. Review is usually performed alongside the work by which researchers are employed and evaluated. Deadlines converge. Journals and conferences ask a limited pool of qualified people to inspect an expanding volume of submissions. An editor who needs another review can send another invitation. An author waiting months for a decision experiences the shortage directly. A tool that turns scattered notes into a coherent report may be genuinely useful.

The same tool can let a reviewer accept more work without creating more capacity to understand it. The report arrives. The queue appears to move. The shortage reappears as shallow evaluation, missed interaction, generic criticism, or silence during rebuttal.

This is the literature flood in its most important sense. It is not simply too many papers. It is too many surfaces that imply underlying inspection.

Fraud makes the point vivid but can obscure it. Paper mills sell fabricated manuscripts, manipulated data, authorship positions, or routes through compromised publication processes. Publishers and research-integrity organizations have documented these businesses and the patterns they leave behind. Generative systems can lower the cost of producing convincing scholarly form, varying text, or answering routine editorial requests. A paper can be manufactured to look as if it belongs in the literature.

But most machine-assisted papers are not paper-mill products, and most weaknesses in the literature are not fraud. The harder institutional problem is ordinary work produced under pressure: an honest abstract that overstates a modest result, a citation borrowed from a neighboring paper, a review article that cleans up an unresolved dispute, a peer review that sounds specific while missing the central methodological flaw. Each artifact can pass through people acting in good faith.

The question is not whether a machine wrote the sentence. It is whether the sentence preserved contact with the evidence.

Greenberg's network shows how that contact can decay. Imagine a primary study that supports a narrow proposition under particular conditions. A later paper cites it while omitting the conditions. A review cites the later paper and converts the proposition into background knowledge. Several new articles cite the review. A language model trained or prompted on those articles encounters a strong textual consensus. Asked to summarize the field, it reports the consensus accurately.

Accuracy to the literature is not the same as accuracy to the world.

The model may even provide citations. If they lead to the review and the later papers, the answer looks grounded. The references are real. The authors exist. The titles are relevant. Yet the apparent plurality of support can still resolve to one uncertain experiment or to a hypothesis nobody actually tested.

This is why citation checking cannot stop at existence. Does the source make the attributed claim? Is it primary evidence or another summary? Does it cite something else for the point? Were there qualifications that disappeared? Are several citations independent, or do they form a family tree with one ancestor?

Answering these questions for every sentence would make scientific synthesis impossible. The purpose of a better system is not to force all readers down every path. It is to make the paths visible enough that attention can be directed where the claim, consequence, and uncertainty justify it.

Machines can help with this work.

The ASReview project offers a useful counterexample to the idea that automation necessarily expands the unread pile. Systematic reviews often begin with thousands of search results that must be screened for relevance. In the conventional process, researchers inspect titles and abstracts in some fixed order, excluding most of them. ASReview uses active learning: after a human labels some records, the system predicts which unseen records are most likely to be relevant and moves them forward in the queue.

The output is not a synthetic verdict about the literature. It is a better order for human reading. The decisions remain recordable. Researchers can inspect the selected studies. Simulations reported by the project's authors showed that this approach could substantially reduce screening work while retaining high-quality retrieval.

That is automation aimed at the scarce input.

It does not remove judgment. A reviewer still defines the question, constructs the search, labels records, resolves disagreements, evaluates study quality, and synthesizes results. Active learning makes those judgments more productive by trying to present the most informative records sooner. It treats attention as something to allocate, not a ceremonial step to automate away.

Correction infrastructure can work similarly. Crossref makes the Retraction Watch database available through public data services and updates it regularly. A search system can use those records to warn that a cited paper was retracted or that a correction exists. Citation-context tools can identify whether a later paper supports, disputes, or merely mentions an earlier one. Researchers have begun using language models to reconstruct distortions in citation chains; current methods appear more capable of detecting some kinds of amplification than the subtler selection and invention Greenberg described.

These limits matter. A red retraction label is a comparatively crisp signal. Determining that a field systematically ignored weakening evidence requires interpretation of claims across papers and time. A model can help assemble the map without being entitled to pronounce on every road.

The useful division of labor follows the shape seen in contracts and code. Let machines reduce routine search, preserve provenance, compare versions, expose deviations, and prioritize high-value review. Reserve accountable human attention for decisions the available checks cannot settle. Keep the generated summary connected to the source, the source connected to the claim, and the claim connected to the observation.

In scientific work, that final connection is especially important because the primary artifact is not always the paper. It may be a dataset, a laboratory notebook, a specimen, a protocol, an image, a piece of code, or an event that can no longer be reproduced. The paper is already a representation. The abstract is a representation of the representation. A literature review adds another layer. A generated synthesis can add one more while sounding closer to the world than any of them.

Each layer can add value. Abstraction is how knowledge becomes portable. The error is to let portability masquerade as independent confirmation.

This suggests several ways to shape machine-assisted scholarship before volume overwhelms review. Authors can disclose where language models were used and remain accountable for every claim. Writing tools can attach assertions to source passages rather than merely format plausible references. Journals can ask for data and code where appropriate, make correction status visible, and focus human review on high-consequence uncertainties. Review systems can measure responsiveness and evidentiary specificity, not just whether a report was submitted. Literature tools can show citation ancestry, so five references derived from one experiment do not look like five experiments.

None of these measures guarantees truth. Science never had such a control. They preserve opportunities for error to meet something other than more language.

There is a reasonable optimistic future in which the literature becomes more readable and more navigable. Researchers who struggle with English can express their work clearly. Automated screening can prevent relevant studies from being buried. Citation graphs can reveal neglected contradictions. Reviewers can spend less time repairing prose and more time on design and inference. Living reviews can update as evidence changes. A reader can move from a sentence to the exact data and method behind it.

That future is compatible with extensive machine use. It requires choosing comprehension as the object of automation.

The less hopeful future looks productive by every surface measure. More papers are submitted. Reviews arrive on time. Abstracts are polished. Citations are abundant. Literature summaries answer instantly. Each participant can point to completed artifacts. Meanwhile, the number of experiments does not grow at the same rate, replication remains slow, qualified reviewers remain finite, and no one retraces the citations because the summary is good enough to use.

The system does not have to fill with nonsense to fail. It can fill with accurate restatements of claims whose foundations have never been proportionally inspected.

Part I began with an inbox. A suggested reply made it easier to send another message while leaving open whether anything had been resolved. The contract made it easier to record assent without proving comprehension. The pull request made it easier to propose a change than to establish that a project should own it. The literature makes it easier to repeat a claim than to return to the observation beneath it.

In every case, the machine can help. It can resolve the support issue, expose the contractual deviation, find the bug, or surface the overlooked paper. The relevant divide is not human work on one side and machine work on the other. It is production that merely adds to the queue and production that carries enough evidence to reduce it.

The ratio has changed. Messages, clauses, patches, reviews, and summaries can be produced in quantities that their receiving institutions were not designed to inspect. Human attention has not become worthless. It has become the scarce production input that the output statistics fail to count.

To understand what happens next, we need to stop treating creation as the whole act. We need an economics that includes the person who has to read.
