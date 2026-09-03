# Chapter 9 — McKinney mammography addendum and reproducibility boundary

## Claim under test

Chapter 9 uses McKinney et al. (2020) to establish that a mammography AI system could outperform or improve on clinical-reader baselines in retrospective evaluation, then asks the separate human-factors question of how radiologists should rely on such a system. The manuscript correctly separates standalone model performance from human–AI team performance, but its treatment of the later Nature addendum is too vague: the public record now states exactly what the addendum supplied.

## Primary sources checked

- Scott Mayer McKinney et al., “International evaluation of an AI system for breast cancer screening,” *Nature* 577, 89–94 (published January 1, 2020), DOI 10.1038/s41586-019-1799-6. The paper reports absolute reductions in false positives of 5.7% in the US dataset and 1.2% in the UK dataset, and false negatives of 9.4% in the US and 2.7% in the UK. It also reports an independent six-radiologist reader study in which the AI system’s AUC-ROC exceeded the average radiologist by 11.5 percentage points, plus a simulated UK double-reading workflow that reduced second-reader workload by 88% while maintaining non-inferior performance. https://www.nature.com/articles/s41586-019-1799-6
- McKinney et al., “Addendum: International evaluation of an AI system for breast cancer screening,” *Nature* 586, E19 (published October 14, 2020), DOI 10.1038/s41586-020-2679-9. The addendum says its purpose was to assist replication by expanding the Supplementary Methods with additional optimization hyperparameters and a more exhaustive description of the data-augmentation strategy. It points readers to the accompanying Matters Arising comment on transparency and reproducibility and the authors’ reply. https://www.nature.com/articles/s41586-020-2679-9

Sources rechecked September 2, 2026.

## Editorial correction

The current manuscript says that the public record “does not specify what the addendum corrected” and therefore declines to guess. That caution was preferable to invention, but it is now factually obsolete. The addendum itself is explicit: it expands methodological disclosure to improve reproducibility; it is not described by Nature as a correction to the reported false-positive or false-negative results.

A later manuscript pass should replace that paragraph rather than merely deleting it. The stronger version is more interesting: a high-profile result about medical AI was followed within the same year by a reproducibility dispute serious enough to produce a Nature Matters Arising exchange and an addendum with fuller training details. That does not negate the reported performance. It does show why “the model scored well” and “independent researchers can reproduce and interrogate how it scored well” are different evidentiary standards.

## Counterevidence and limits

The addendum should not be used rhetorically to imply that the original performance numbers were retracted, overturned, or shown false. Nature’s addendum says it expands the Supplementary Methods for replication. The original article remains the version of record and continues to report the same headline performance results.

Nor should the chapter overgeneralize from one reproducibility dispute into a claim that medical-AI studies are broadly irreproducible. The narrower lesson fits *Second Guess* better: trust calibration applies to evidence about the automation as well as to the automation itself. A reader should distinguish retrospective model performance, independent-reader comparisons, simulated workflow effects, prospective clinical performance, human–AI team performance, and reproducibility of the published method.

## Why this matters for the chapter

Chapter 9 is strongest when it refuses the false choice between “AI beats doctors” and “doctors should ignore AI.” The addendum gives that restraint another layer. Before asking how much a radiologist should trust an AI recommendation on one mammogram, the institution has to decide how much trust the evidence base for the system has earned. That is the same calibration problem at a different level of the stack.
