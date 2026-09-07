# Chapters 14–15 research note — provenance, human signal, and useful friction

This note prepares a coherent revision pass across Chapters 14 and 15. The shared question is not whether human production or friction is intrinsically valuable. It is when an otherwise invisible process attribute changes the meaning, accountability, or safety of an output enough that institutions need a credible signal or a deliberate pause.

## Chapter 14 — The Human Signal

### Revision objective

Keep the chapter's strongest distinction: human origin can matter for different reasons—quality, responsibility, relationship, process, or sacrifice—and those reasons should not be collapsed into a generic authenticity premium. Strengthen the section on provenance so it does not imply that technical provenance proves truth, quality, or human authorship.

### Current technical anchor: C2PA Content Credentials

The Coalition for Content Provenance and Authenticity's current technical specification is version 2.4, dated April 2026. C2PA defines provenance as information about an asset's history and interactions, represented through signed manifests and assertions. It separately defines authenticity in terms of facts that can be cryptographically verified as not having been tampered with.

That distinction is useful for the chapter. A valid provenance record can provide evidence about declared origin and transformations without proving that the content is true, aesthetically good, sincerely meant, or entirely human-made. The credential is evidence about process history, not a universal authenticity score.

Source:
- C2PA, Content Credentials Technical Specification 2.4, April 2026: https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html

### Additions worth making

1. **Separate provenance from value.** A reliable process record can make a valued attribute easier to verify, but the market still has to decide whether that attribute matters. Human origin may command a premium in a letter, performance, artwork, or accountable professional judgment while adding almost nothing to a routine calculation.
2. **Separate human presence from human authorship.** In consequential settings, the valuable signal may be that an identifiable person accepted responsibility for an output, even when machines contributed substantially to producing it.
3. **Treat provenance as contestable infrastructure.** Credentials can improve traceability, but adoption, key custody, missing credentials, stripping, legacy media, and false inferences from absence all complicate use. Do not turn a provenance standard into proof that unlabeled content is synthetic or labeled content is true.
4. **Preserve the chapter's relational case.** Technical provenance is strongest where origin is a market attribute; it is weaker as a substitute for relationship. A cryptographic record can show that a message passed through a declared workflow. It cannot establish that a friend cared enough to write it.

### Counterevidence to preserve

- For many tasks, process is merely a means to an outcome; reliable machine production can be strictly preferable.
- People can misidentify AI and human outputs, so confidence in unaided source detection should remain modest.
- Human origin does not imply higher quality, truthfulness, care, or ethical production.
- Provenance tools can lower verification costs and make origin claims more legible rather than making artificial abundance inherently less trustworthy.

### Falsification pressure

The chapter's human-signal premium should weaken wherever buyers consistently care only about output performance, origin has little effect on willingness to pay or trust once quality is held constant, and reliable accountability can be attached to machine-mediated work without requiring human authorship.

## Chapter 15 — Friction as a Feature

### Revision objective

Preserve the chapter's distinction between wasteful friction and consequential checkpoints. Tighten the surgical-checklist example so it carries both the positive evidence and the replication/implementation warning without implying that a checklist mechanically causes safety.

### WHO surgical checklist

The World Health Organization describes its Surgical Safety Checklist as a 19-item tool developed to reduce errors and adverse events and increase teamwork and communication in surgery. WHO continues to provide the checklist and implementation materials as patient-safety tools.

Source:
- World Health Organization, Surgical Safety Checklist tools and resources: https://www.who.int/teams/integrated-health-services/quality-of-care-and-patient-safety/patient-safety-guidance-and-tools/safe-surgery/tool-and-resources

### Ontario countercase

A 2014 population-level study in the New England Journal of Medicine examined checklist adoption across 101 Ontario hospitals. It found no statistically significant reduction in operative mortality or surgical complications after implementation. The paper explicitly contrasts this result with earlier observational findings and discusses implementation quality and team training as possible reasons outcomes did not transfer automatically.

Source:
- Urbach et al., “Introduction of Surgical Safety Checklists in Ontario, Canada,” New England Journal of Medicine 370 (2014): 1029–1038, DOI 10.1056/NEJMsa1308261: https://www.nejm.org/doi/full/10.1056/NEJMsa1308261

### Additions worth making

1. **Define useful friction by the decision it protects.** A pause earns its cost when it exposes a consequential assumption, creates a genuinely independent check, restores time for coordination, or moves an irreversible action behind a higher threshold.
2. **Distinguish friction from ritual.** A mandatory click-through can increase latency while adding no independent information or judgment. The Ontario evidence is useful because nominal checklist adoption did not reproduce the dramatic outcome improvements associated with the earlier implementation.
3. **Make machine-speed friction state-dependent.** High-volume automation need not wait for humans constantly. Friction can increase with consequence: larger commitments, irreversible actions, unusual counterparties, permission expansion, or low-confidence states can trigger slower paths while routine reversible actions remain fast.
4. **Measure bypass behavior.** A control that users routinely route around, approve automatically, or delegate back to the same machine layer can preserve the appearance of friction while removing its function.
5. **Treat friction as an allocation problem.** Every deliberate delay consumes time and attention. Too many warnings can make the important warning less visible. The relevant comparison is not friction versus zero friction but whether scarce human attention is being spent at the points where it can change outcomes.

### Counterevidence to preserve

- Removing unnecessary friction improves access, speed, and usability, and can be especially important for disabled users and urgent tasks.
- Automated checks can be more consistent and faster than human review.
- Human approval can become a rubber stamp under high volume.
- A well-designed machine control can provide stronger independent constraint than a ceremonial human confirmation.
- Checklist evidence is implementation-sensitive; the existence of a checklist should never be used as shorthand for safety.

### Falsification pressure

The chapter's case for deliberate friction should weaken where automated controls achieve equal or better detection and recovery without delay, where human checkpoints add little independent information, or where imposed pauses predictably cause users to bypass safer channels.

## Coherent revision boundary

The two chapters should connect without becoming one argument. Chapter 14 asks which process attributes remain worth signaling when polished output becomes cheap. Chapter 15 asks which process costs remain worth preserving when execution becomes cheap. In both cases, the answer is conditional rather than nostalgic: preserve the signal or the friction only when it carries information, responsibility, relationship, or safety that the cheaper process would otherwise erase.

Do not claim that provenance proves truth, that human-made work is categorically better, that friction is inherently virtuous, or that surgical checklists work independently of implementation. The stronger claim is that abundance makes hidden process attributes easier to price—and therefore makes it more important to know which attributes actually carry value.