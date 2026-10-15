# BYTES VS BOSONS — Part I evidence note

Scope: Chapters 1–4. This note exists to prevent the manuscript’s foundation from shifting under later black-hole and quantum chapters.

## 1. Shannon’s claim is an engineering scope claim

Primary source:
- Claude E. Shannon, “A Mathematical Theory of Communication,” *Bell System Technical Journal* 27 (1948), 379–423, 623–656.
- Reprint: https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf

What the paper supports:
- The communication problem is reproducing a selected message at another point, exactly or approximately.
- Shannon explicitly brackets semantic meaning from the engineering problem.
- Base-two logarithms yield units he calls binary digits or “bits,” with the shorter word credited to J. W. Tukey.
- The theory treats source statistics, coding, channels and noise without requiring the channel to understand meaning.

What the paper does **not** establish:
- that meaning is scientifically irrelevant in every domain;
- that information is a physical substance;
- that all information is Shannon information;
- that the universe is digital.

Editorial rule:
- Chapter 2 can use Shannon as the decisive abstraction, but must not become a compressed second version of **Shannon’s Demon**.

## 2. Shannon entropy and thermodynamic entropy require a bridge

Primary/authoritative sources:
- E. T. Jaynes, “Information Theory and Statistical Mechanics,” *Physical Review* 106 (1957), 620–630. https://doi.org/10.1103/PhysRev.106.620
- E. T. Jaynes, “Information Theory and Statistical Mechanics. II,” *Physical Review* 108 (1957), 171–190. https://doi.org/10.1103/PhysRev.108.171
- Henrik Wilming, Rodrigo Gallego and Jens Eisert, “Axiomatic Relation between Thermodynamic and Information-Theoretic Entropies,” *Physical Review Letters* 117, 260601 (2016). https://doi.org/10.1103/PhysRevLett.117.260601

Working distinction:
- Shannon entropy: uncertainty of a probability distribution, with units determined by log base.
- Thermodynamic entropy: a physical thermodynamic quantity tied to macroscopic state structure and statistical mechanics.
- The forms can be related under explicit assumptions; shared mathematics does not erase the need to state the mapping.

Publication hold:
- Never write “entropy is information” without specifying which entropy and which operational/theoretical bridge.

## 3. Maxwell’s demon is a cycle-accounting problem

Primary/authoritative sources:
- Leo Szilard (1929), DOI: https://doi.org/10.1007/BF01341281
- Charles H. Bennett, “The Thermodynamics of Computation—A Review” (1982): https://research.ibm.com/publications/the-thermodynamics-of-computation-a-review
- Charles H. Bennett, “Notes on Landauer’s principle, reversible computation, and Maxwell’s Demon” (2003): https://research.ibm.com/publications/notes-on-landauers-principle-reversible-computation-and-maxwells-demon
- Koji Maruyama, Franco Nori and Vlatko Vedral, *Reviews of Modern Physics* 81, 1 (2009): https://doi.org/10.1103/RevModPhys.81.1

What the modern Bennett/Landauer resolution supports:
- measurement need not be the essential logically irreversible step;
- reversible measurement/copying is possible in principle under idealized conditions;
- erasure/reset of a memory can be the logically irreversible step needed to close a cyclic demon;
- a supply of initialized memory is itself a physical resource, so an “infinite notebook” moves rather than defeats the accounting problem.

Avoid:
- “measurement always costs kT ln2”;
- “every bit operation costs kT ln2”;
- “information itself contains energy”;
- “the demon proves knowledge creates energy.”

Better formulation:
- information can change which feedback-controlled physical operations are available; the energy extracted still comes from the physical system/resource.

## 4. “Information is physical” is not “information is matter”

Primary source:
- Rolf Landauer, “Information is Physical,” *Physics Today* 44, no. 5 (1991), 23–29. https://doi.org/10.1063/1.881299

Landauer’s useful boundary:
- information must be embodied in physical systems to be stored, transmitted and processed;
- there is no universal mandatory energy dissipation for every computational step;
- logical and physical descriptions meet most sharply at irreversible operations such as erasure.

Working formulation for the manuscript:
> Substrate-independent does not mean substrate-free.

Do not upgrade the phrase into an ontological claim Landauer did not experimentally prove.

## 5. The bit is a logical distinction, not a microscopic object

Working model:
- physical state space contains many microstates;
- an engineering encoding partitions these into logical classes such as 0 and 1;
- the higher-level bit is stable only while the substrate preserves the distinguishability required by the encoding and readout process.

This is authorial synthesis grounded in Shannon + Landauer, not a quotation or a new physical law.

Use cases:
- transistor voltage thresholds;
- magnetic storage;
- double-well particle memory;
- optical encoding.

Avoid claiming:
- all bits require the same physical energy;
- any two-state physical system automatically “contains one bit” regardless of preparation/readout assumptions;
- the bit exists as an independent substance.

## 6. Part I continuity test

Before drafting Part II, every later chapter must be able to answer these questions:

1. What are the alternatives being distinguished?
2. What probability/state structure defines the information quantity?
3. What physical system carries or instantiates the relevant state?
4. Is the claim experimental, theoretical inside stated assumptions, or interpretive?
5. If two entropies are being related, what is the bridge?
6. What does the informational language predict or constrain that a purely rhetorical use would not?

If a black-hole or holography passage cannot answer those questions, the prose is not ready.

## Part I defeat condition

If the first four chapters leave a careful reader with the impression that Shannon information, thermodynamic entropy and physical memory are interchangeable names for the same entity, rewrite Part I before proceeding.

The next section gets less forgiving.
