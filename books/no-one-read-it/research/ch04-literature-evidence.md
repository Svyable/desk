# Chapter 4 Evidence — The Literature Flood

## Chapter claim

Scientific literature could accumulate authority faster than readers could verify it before generative AI. Language models lower the cost of producing and polishing papers and reviews, increasing the risk that fluent restatement will outrun experiments, replication, and return to primary evidence. The answer is not to reject machine assistance. It is to use machines to prioritize reading, expose citation context, and preserve the path from a claim back to the observations that support it.

## Central case trail

Steven Greenberg reconstructed the citation network around a claim about beta amyloid and skeletal muscle in inclusion body myositis. His 2009 study followed 242 papers, 675 citations, and 220,553 citation paths. It found selective citation of confirming work, amplification by papers that contributed no new evidence, and cases in which a hypothesis acquired the appearance of established fact through citation. This predates contemporary generative systems and demonstrates that literature can create authority by circulation.

The case is not an indictment of citation. Citation is how scientific memory travels. The failure occurs when a chain of references is mistaken for a chain of independent observations.

## Scale evidence

The National Library of Medicine reports more than a million citations indexed in each of several recent fiscal years. Counts by publication year differ from indexing-year counts, but both show the scale confronting any reader. Volume alone does not establish declining quality. It establishes the cost of returning from a polished claim to its primary evidentiary base.

Kobak and colleagues analyzed more than fifteen million PubMed abstracts from 2010 through 2024. Their excess-vocabulary method estimated that at least 13.5 percent of 2024 abstracts had been processed with language models, with higher estimates in some subcorpora. This is a statistical lower-bound at corpus level, not a detector for accusing individual authors and not evidence that the affected work is false.

Liang and colleagues used a related population-level method to estimate that a meaningful share of review text at several 2023 and 2024 computer-science conferences was substantially modified or produced by language models. Estimated use was higher in reviews expressing lower confidence and in reviews submitted near deadlines; reviewers in the high-use group were also less likely to participate in author rebuttal. These are associations and model-based estimates, not observation of each reviewer's process.

Paper mills show the adversarial edge of cheap scholarly form. Publication-ethics organizations document businesses that manufacture or sell papers and authorship. The chapter should not let fraud dominate the argument. The more general problem is work that looks properly situated in a literature even when no reader has retraced its evidentiary route.

## Strongest counterclaim

Machine assistance can restore attention as well as consume it. The ASReview project uses active learning to prioritize records during systematic-review screening while keeping researchers in the loop. Its published evaluation reports large efficiency gains in simulations while preserving high-quality retrieval. Crossref's public Retraction Watch data can make correction signals machine-readable. Citation-context systems can help distinguish supporting, disputing, and merely mentioning references, although current automated methods remain better at some distortions than others.

The hopeful case is therefore concrete: use computation to decide what humans should inspect next, while retaining reproducible decisions and direct access to the sources.

## Falsification and kill tests

- If machine-assisted writing reduces search and synthesis time while authors and reviewers verify primary evidence, disclose assistance, and preserve provenance, the chapter should count it as an inspection gain.
- Do not infer paper quality from vocabulary-based estimates of language-model use.
- Do not equate a citation with endorsement or independent replication.
- Do not use total publication counts as proof of a quality decline.
- Do not make paper mills representative of ordinary scientific use of language tools.
- Treat claims about very recent adoption rates as provisional and method-dependent.

## Draft guardrails

- Open inside Greenberg's citation map, not with generic claims about information overload.
- Distinguish papers, citations, paths, claims, and experiments.
- Explain corpus-level detection without turning it into a forensic oracle.
- Give active-learning screening and correction infrastructure enough space to become a real countercase.
- End Part I by naming the recurring ratio: artifacts can multiply faster than independent inspection.

## Sources

- Greenberg, “How citation distortions create unfounded authority” (2009): https://pmc.ncbi.nlm.nih.gov/articles/PMC2714656/
- National Library of Medicine, MEDLINE citation counts by fiscal year: https://www.nlm.nih.gov/bsd/medline_pubmed_production_stats.html
- National Library of Medicine, MEDLINE citation counts by publication year: https://www.nlm.nih.gov/bsd/medline_cit_counts_yr_pub.html
- Kobak et al., “Delving into LLM-assisted writing in biomedical publications through excess vocabulary” (2025): https://www.science.org/doi/10.1126/sciadv.adt3813
- Liang et al., “Monitoring AI-Modified Content at Scale” (2024): https://arxiv.org/abs/2403.07183
- COPE and STM, Paper Mills Research: https://publicationethics.org/guidance/research-and-reports/paper-mills-research
- Crossref, Retraction Watch data documentation: https://www.crossref.org/documentation/retrieve-metadata/retraction-watch/
- van de Schoot et al., “An open source machine learning framework for efficient and transparent systematic reviews” (2021): https://www.nature.com/articles/s42256-020-00287-7
- Sarol et al., automatic detection of citation distortion (2025): https://jodischneider.com/pubs/asist2025.pdf
