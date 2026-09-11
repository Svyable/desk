# Chapter 7 — signal-decay audit

Checked 2026-09-09.

## What the chapter can safely claim

Michael Spence's 1973 `Job Market Signaling` is a model of hiring under uncertainty, not an empirical demonstration that visible effort reliably reveals quality. The paper's useful mechanism for this chapter is narrower: an observable signal can affect an employer's beliefs when applicants face different costs of acquiring it. The Nobel committee's 2001 account of Spence's contribution makes the same boundary explicit: signaling works only when signaling costs differ enough across senders for the signal to separate them.

That mechanism gives `Proof of Effort` a clean way to talk about generative AI. If a polished artifact once carried information partly because producing it was costly for people without the relevant time, training, access, or skill, a technology that sharply lowers that production cost can reduce the artifact's informativeness about the path behind it. This is a claim about changing inference, not about the intrinsic quality or legitimacy of generated work.

Primary source:

- Michael Spence, `Job Market Signaling`, *Quarterly Journal of Economics* 87(3), August 1973, pp. 355–374: https://doi.org/10.2307/1882010
- Nobel Prize, 2001 popular information on Spence's signaling contribution: https://www.nobelprize.org/nobel_prizes/economic-sciences/laureates/2001/popular.html

## Strongest counterargument

The chapter should resist the seductive conclusion that cheaper production necessarily destroys useful evaluation. A signal is valuable because of the information it carries, not because hardship is morally admirable. Once an artifact becomes cheap, receivers may be able to move closer to the underlying property they care about: run the code, observe the worker adapting it, test transfer to a new problem, inspect provenance, sample outcomes, or attach contractual recourse. In those cases AI can reduce socially wasteful signaling rather than merely corrupt it.

This matters because Spence's framework does not imply that preserving an old signal is efficient. A separating signal can consume real resources. The manuscript is strongest when it treats signal decay as a design opportunity: stop charging people for difficulty that no longer measures the thing of interest, and replace proxy evidence with direct evidence where direct measurement is feasible.

## Disconfirming cases the prose should preserve

- For outputs whose important properties are cheaply and directly testable, process history may add little value. A correct compiled result, a passed safety property, or an observed performance outcome can dominate inference from how laborious production looked.
- Some old signals were weak or exclusionary before generative AI. Surface polish could reflect money, coaching, native-language fluency, institutional access, or outsourced help as much as underlying capability.
- Tool use can reveal capability rather than conceal it. Specifying a problem, steering an agent, rejecting bad output, debugging, verifying, and adapting under changed constraints may be the skill the institution actually needs.
- Replacing cheap signals with harder credentials, longer interviews, mandatory manual work, or pervasive process surveillance can increase social cost without improving measurement.
- Costly attention remains relevant only where the receiver values the commitment itself. A handmade gift and a verified software function are different products; the first may include opportunity cost in its meaning while the second may not.

## Revision target

The chapter already contains the right ingredients but repeats the point through many short examples, question stacks, and signal-replacement lists. A later prose pass should let one labor-market example and one relationship/craft example carry most of the argument. The governing distinction should be:

> Generative AI does not make effort worthless. It makes effort harder to infer from the artifact, which forces institutions to decide whether effort was ever the thing they meant to measure.

Do not turn this into a new named framework. Do not imply that education is merely signaling, that Spence proved education has no productive value, or that expensive signals are inherently trustworthy. The useful move is from accidental evidence of effort toward evidence closer to capability, care, responsibility, or performance.