# The Mark That Shouldn't Be There

The immune system is not looking for cancer.

It is looking for evidence that something does not belong.

That distinction is where neoantigens begin.

A T cell does not inspect a whole cell the way a pathologist looks at a stained slide. It samples. Most nucleated cells continually break down proteins into short fragments. Some of those fragments are loaded onto molecules of the major histocompatibility complex, called HLA in humans, and carried to the cell surface. The display is partial, selective and dynamic. It is closer to a customs declaration than a full inventory.

T cells patrol those declarations.

A T-cell receptor can bind a particular peptide-HLA combination. If the binding occurs in the right biological context and the surrounding signals support activation, the T cell may respond. It can proliferate. It can release inflammatory molecules. A cytotoxic T cell can kill the cell displaying the target.

The system evolved under two conflicting requirements.

It must be sensitive enough to detect infected or abnormal cells.

It must be restrained enough not to destroy the body it protects.

The second requirement explains why so much of cancer immunology is difficult. Tumors are not invading bacteria. They arise from normal cells. Many proteins expressed by tumors also appear in healthy tissue. An immune response against a shared self-antigen can therefore damage the person along with the cancer, while a weak response can be suppressed by the tolerance mechanisms that prevent autoimmunity.

Cancer vaccines spent decades trying to live inside this contradiction.

Tumor-associated antigens offered targets. Some were overexpressed proteins. Some were developmental proteins reactivated in cancer. Some were lineage markers. Some were viral antigens in cancers caused by viruses. The logic was often reasonable. The immune system could sometimes be induced to react. But the clinical results repeatedly failed to match the elegance of the idea.

Neoantigens changed the target class.

A somatic mutation exists in the tumor but not in the inherited genome of the patient. If that mutation alters an amino acid in a protein, the changed sequence may produce a peptide the immune system has never encountered during the establishment of central tolerance. The altered peptide can be genuinely tumor specific.

The tumor has made a mark that should not be there.

That phrase is useful, but it conceals several layers of filtering.

The first is genetic.

Cancer genomes accumulate substitutions, insertions, deletions, copy-number changes, gene fusions and other alterations. Some are drivers that help the tumor grow. Many are passengers carried along for the ride. A mutation only matters to a neoantigen strategy if it can create something the immune system might see.

The second filter is expression.

A mutation in DNA does not guarantee the altered gene is being transcribed. RNA sequencing helps establish whether a candidate mutation is actually expressed. A beautifully predicted peptide encoded by a silent gene is an address on a demolished building.

The third filter is processing.

Proteins are not simply chopped into every possible fragment with equal probability. Cellular machinery processes proteins in patterned ways. Peptides must survive the journey into the antigen-presentation system.

The fourth filter is HLA binding.

Human HLA molecules are extraordinarily diverse. A peptide that fits strongly into one person's HLA molecule may fit poorly into another's. That diversity is a population-level defense against pathogens, but it makes personalized cancer immunology computationally difficult. The relevant question is not whether a mutation can create an interesting peptide in the abstract. It is whether that peptide is likely to be presented by this patient's HLA molecules.

The fifth filter is T-cell recognition.

Presentation is not the same thing as immunogenicity. A peptide-HLA complex can reach the surface and still fail to provoke a useful T-cell response. The appropriate receptor may not exist in sufficient numbers. The T cell may be exhausted. Regulatory cells and suppressive signals may dominate. The tumor microenvironment may exclude lymphocytes. The target may be presented at too low a density.

The sixth filter is clonal relevance.

A mutation carried by nearly every cancer cell is a better strategic target than one present in a small branch of the tumor's family tree. Tumors evolve. A biopsy is a sample of that evolution. A vaccine aimed at a subclone may destroy the cells carrying that mutation while leaving the rest of the malignant population untouched.

The seventh filter is escape.

Even a good target can disappear. Immune pressure changes the tumor. A clone that stops presenting the targeted antigen can gain a selective advantage. Tumors can lose HLA alleles, alter antigen-processing machinery, downregulate expression or evolve through other routes that make an originally visible target less useful.

This is why the word prediction appears so often in neoantigen medicine.

The raw mutation list is usually much larger than the number of targets a vaccine can carry. A platform must rank candidates. Which mutation is real? Which is expressed? Which altered peptide is likely to bind the patient's HLA molecules? Which is likely to be processed? Which is clonal? Which is sufficiently different from the normal peptide to escape tolerance? Which resembles known immunogenic sequences? Which might create both CD8 and CD4 responses? Which target is worth one of the limited slots in the product?

The algorithm is not decorating the medicine.

It is deciding what the medicine is.

That fact makes neoantigen therapy different from many familiar forms of precision oncology. If a patient has an EGFR mutation and receives an EGFR inhibitor, the molecular diagnostic helps select a manufactured drug from a shelf. The test is upstream from the medicine.

In a personalized neoantigen vaccine, the test and the ranking process can become part of manufacturing. The analysis determines the payload that will be synthesized. The diagnostic pipeline is no longer only choosing among medicines. It is composing one.

The distinction has consequences for quality.

Suppose two algorithms examine the same tumor and normal sequence data. They may not choose the same neoantigens. One may privilege predicted HLA binding. Another may incorporate RNA expression more heavily. Another may model peptide processing. Another may use immunopeptidomic data. Another may weight clonality. A proprietary system may combine dozens of features learned from prior patients.

If the final vaccine contains different sequences, the software disagreement has become a pharmaceutical disagreement.

This is one reason open academic tools matter so much to the field.

NetMHC and its descendants helped make peptide-HLA prediction practical across a wide range of alleles. NetMHCpan extended prediction beyond alleles with abundant direct measurements by using information across HLA sequence similarity. MHCflurry, MixMHCpred, HLAthena and other methods contributed different approaches. The Immune Epitope Database accumulated experimental observations and provided prediction resources. Open-source pipelines such as pVACtools connected parts of the workflow from variant information toward candidate vaccine targets.

None of these tools is perfect. That is not an indictment. The underlying biology is difficult.

A training dataset is shaped by what scientists were able to measure. Common HLA alleles have historically been easier to study than rare ones. Binding assays are not identical to actual presentation in a tumor. Mass-spectrometry datasets reveal peptides that were presented but may contain their own sampling biases. A model trained on one distribution of tumors, tissues and assays can perform differently elsewhere.

The resulting inequality is subtle.

Personalized medicine sounds like the opposite of population bias. The therapy is made for you. Yet the software that decides what is worth making may know some immune systems better than others because the training data are not evenly distributed across ancestry and HLA diversity.

The patient's uniqueness is processed through a population dataset.

That tension will become more important as algorithms become more proprietary.

A company has a legitimate reason to protect a target-ranking system if years of experiments and clinical outcomes have improved it. Better ranking may be the central commercial advantage of a neoantigen platform. A public database can tell everyone where the field began; a proprietary feedback loop can tell one company what worked in thousands of manufactured products.

The value may migrate from the molecule to the learning system.

Consider what a successful commercial platform could observe over time.

For each patient it could hold tumor and normal sequence data, HLA type, RNA expression, candidate neoantigens, the subset chosen for manufacture, production quality, immune responses, circulating tumor DNA changes, recurrence patterns, adverse events, responses to checkpoint blockade and eventual survival. If the company links these layers carefully, every treated patient can improve the ranking model for the next patient.

The drug becomes a dataset that produces another drug.

This creates a powerful flywheel and an uncomfortable governance problem.

Patients contribute the most intimate possible data: the inherited genome, the tumor genome and the evolving immune response. Hospitals may contribute tissue and clinical outcomes. Publicly funded research may supply the underlying algorithms and benchmark datasets. The company supplies integration, manufacturing and capital. Who owns the improvement that emerges from the combined record?

The answer in practice is often shaped by contracts rather than philosophy.

That is one reason the public-versus-private debate becomes slippery. It is easy to count grants. It is harder to count learning.

A public agency can fund the original discovery that neoantigens matter. It can fund a tumor atlas. It can support an academic HLA model. But a company running a commercial platform may later accumulate the highest-value dataset in the field because it sees the entire chain from tumor sequencing to treatment outcome at scale.

The private asset is then not the original discovery. It is the closed loop.

This pattern appears elsewhere in medicine. Diagnostic companies can build proprietary databases around tests. Electronic-health-record vendors sit near clinical workflows. Imaging companies can improve algorithms with large labeled datasets. Genomic firms can turn testing volume into variant knowledge.

Neoantigen medicine intensifies the pattern because the algorithm's output is action.

A ranking error is not merely a mistaken forecast. It can consume a vaccine slot.

This does not mean the field should wait for perfect prediction. Perfect prediction may be impossible.

Biology has a useful habit of humiliating systems that demand certainty before learning. Many early personalized vaccine trials deliberately included multiple predicted neoantigens because the platform did not need every prediction to be right. If a vaccine encoded twenty or thirty targets and only a fraction generated strong T-cell responses, the treatment could still be biologically useful.

Redundancy is part of the design.

It also helps with tumor evolution. A therapy aimed at one mutation can create a single escape route. A therapy aimed at many independent targets can make escape more difficult, especially when the targets occur in clonal mutations shared across the tumor.

The word vaccine can be misleading here because people naturally imagine a preventive shot containing a stable antigen shared across a population.

A personalized neoantigen vaccine is closer to an immune curriculum assembled after reading the tumor.

The curriculum can be delivered in several formats.

Long synthetic peptides can be manufactured to contain mutated sequences and given with immune-stimulating adjuvants. Dendritic-cell approaches can load antigen-presenting cells with tumor material or selected antigens. DNA vaccines can encode personalized targets in plasmids. RNA can encode multiple neoantigens in a sequence that cells translate after administration. Viral vectors can deliver antigenic instructions. Each platform creates different tradeoffs in speed, manufacturing, innate immune activation, HLA coverage, dosing and cost.

The target layer is conceptually separate from the delivery layer.

That separation is important because it means the neoantigen idea can survive the failure of any single technology.

A disappointing mRNA trial does not prove neoantigens are useless. A peptide vaccine that induces T cells without clinical benefit does not prove another modality cannot work. A TCR therapy against a neoantigen can validate a target even if vaccination against the same class of targets remains difficult.

The field is a matrix, not a product.

Targets run in one direction. Delivery systems run in another. Disease settings create a third dimension. Combination partners create a fourth.

This is why melanoma has mattered so much.

Melanoma often carries a high mutational burden, especially when ultraviolet radiation has created many DNA changes. More mutations can mean more candidate neoantigens. Melanoma also helped establish checkpoint inhibitors because some tumors already contain immune cells that can be reactivated. A personalized vaccine combined with pembrolizumab is therefore operating in a disease where the immune system may already be closer to useful engagement.

Pancreatic cancer poses a very different test.

It usually has fewer mutations and a tumor microenvironment that is notoriously difficult for immune therapies. The early autogene cevumeran study in resected pancreatic ductal adenocarcinoma became important precisely because it showed that an individualized mRNA vaccine could induce substantial, durable neoantigen-specific T-cell responses in some patients even in a cancer often described as immunologically cold. At extended follow-up, patients who generated strong vaccine-induced responses had longer recurrence-free survival than those who did not, although the study was small and not randomized to prove the vaccine caused the survival difference.

That last clause is not bureaucratic caution. It is the difference between seeing a mechanism and proving a treatment.

Responders may differ from non-responders in ways the trial does not fully capture. Small numbers amplify chance. Complex treatment sequences make causal attribution difficult. The patients also received surgery, atezolizumab and chemotherapy. A correlation between immune response and recurrence can be biologically persuasive without being definitive clinical evidence.

This is the recurring rhythm of translational medicine.

First comes an observation.

Then a mechanism.

Then a small trial showing the mechanism can be induced in humans.

Then a signal suggesting the mechanism may matter clinically.

Then larger randomized trials that discover whether the signal survives comparison, heterogeneity, manufacturing variation and time.

At each stage, the story becomes less elegant and more valuable.

Neoantigens have already passed the first tests. Tumors do contain mutation-derived targets. T cells can recognize them. Vaccines and cell therapies can induce or expand neoantigen-specific T cells. Some clinical studies have produced encouraging outcomes. In melanoma, a Phase 3 trial has now crossed an important threshold.

The remaining questions are the expensive ones.

Which cancers benefit?

Which patients benefit inside those cancers?

Which targets are actually necessary?

Can the product be made quickly enough?

Does adding a personalized therapy improve survival enough to justify its cost and complexity?

Can the manufacturing process be standardized while the sequence changes every time?

Can access expand beyond elite academic centers?

Can regulators evaluate a platform whose molecular identity is renewed patient by patient?

Can the public retain enough access to data and foundational tools that the field continues to improve, even if the best commercial models become proprietary?

The biological answer begins with a mark that should not be there.

The economic answer begins when somebody learns to find it reliably.