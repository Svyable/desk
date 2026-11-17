# 12. A Clock Inside the Nucleus

There are at least two thorium-clock architectures hiding inside the phrase *nuclear clock*.

One traps thorium ions and interrogates the nuclear transition with exquisite state control. Another embeds thorium in a transparent crystal, trading single-particle cleanliness for an enormous number of nuclei and potentially strong absorption signals. Each architecture has different systematic enemies. A third distinction has now become essential: measuring a nuclear line against an external laser reference is not the same achievement as feeding the nuclear resonance back to steer a clock laser.

That distinction moved from philosophical to experimental in October 2026.

Two independent groups published operational, feedback-locked solid-state thorium-229 nuclear clocks. One stabilized its 148-nanometre laser to a calcium-fluoride-embedded nuclear transition and compared a subharmonic to a Yb+ ion clock. It reported fractional frequency instability of \(3\times10^{-12}/\sqrt{\tau/{\rm s}}\), where \(\tau\) is averaging time. It searched a roughly 20-second-to-one-day range for oscillations and short drifts in nuclear-to-atomic frequency ratios. The other locked a continuous-wave 148.4-nanometre laser to a spectroscopically resolved transition in its own independently prepared crystals and measured an instability of \(5\times10^{-13}/\sqrt{\tau/{\rm s}}\). These are real clock operations, not calculated future performance. They are also not yet superior to the best optical atomic clock ratios.

The reports are *A thorium-229 optical nuclear clock with feedback loop*, *Nature* 658 (2026), https://doi.org/10.1038/s41586-026-11084-4, and *A nuclear clock synchronized to 229Th*, *Nature* 658 (2026), https://doi.org/10.1038/s41586-026-11122-1.

In a solid, the lattice answers back. Electric-field gradients split nuclear levels. Temperature changes the electron density, field gradients and resonance frequency. Defects, dopant distribution, strain and the precise region struck by a vacuum-ultraviolet beam matter. Nuclear compactness does not make the surrounding crystal disappear.

The scale of the problem can be calculated without an elaborate model. In 2025, Higgins and colleagues measured a \(62(6)\)-kilohertz displacement of one useful quadrupole-split thorium line between 150 and 293 kelvin. The average slope is approximately \(0.4\) kilohertz per kelvin. The nuclear carrier frequency is around \(2.0204\times10^{15}\) hertz. Its fractional temperature coefficient, over that interval, is thus of order

\[
\frac{4\times10^2\ {\rm Hz/K}}{2.0204\times10^{15}\ {\rm Hz}}
\simeq2.0\times10^{-13}\ {\rm K}^{-1}.
\]

For that line and temperature regime, preventing a \(10^{-18}\) fractional shift would require temperature stability of about \(5\times10^{-6}\) kelvin—five microkelvin—if temperature were the only uncontrolled contribution. It was a measured materials constraint, not an abstract engineering caution. Source: Higgins et al., *Physical Review Letters* 134, 113801 (2025), https://doi.org/10.1103/PhysRevLett.134.113801.

The next result partly changes this diagnosis. Ooi and collaborators studied thorium-doped calcium fluoride crystals and found an operating temperature of \(196(5)\) kelvin at which the *first-order* thermal sensitivity vanishes. Their paper described using different quadrupole-split lines to sense temperature and projected suppression of thermal systematics below \(10^{-18}\). But the actual comparison of differently doped crystals over seven months showed frequency reproducibility of 220 hertz, or \(1.1\times10^{-13}\) fractionally, at about 195 kelvin. A zero first derivative in temperature is not zero sensitivity to strain, doping, gradients or long-term material history. Source: *Frequency reproducibility of solid-state thorium-229 nuclear clocks*, *Nature* 650 (2026), https://doi.org/10.1038/s41586-025-09999-5.

The October feedback-clock studies brought the material question into sharper relief. In the European experiment, the linewidth and shot noise supported much better instability *during* a run than reproducibility *between* days: the reported inter-run scale was approximately \(5\times10^{-13}\). Repositioning the ultraviolet beam on different regions of the crystal produced shifts of up to 1.7 kilohertz. The authors investigated local strain and inhomogeneity as plausible causes. The Chinese group measured two independently prepared crystals whose relevant line frequencies differed by \(2.8(6)\times10^{-13}\) fractionally; its comparison against the JILA temperature-calibrated data was consistent within the larger cross-laboratory uncertainty. This is not a contradiction. A clock can have excellent short-term stability and a systematic offset between samples. Both quantities belong in the claim.

A useful test has to ask three separate questions. How quietly does the frequency average within one uninterrupted run? How reproducibly does the same apparatus return to the line after laser realignment and environmental changes? And how close do independent specimens and laboratories agree on the physical transition, once all measured shifts have been corrected? A clock can pass the first question and fail the others.

The ion route avoids a particular crystal's lattice shifts, but not trapping-field, laser, state-preparation or count-rate limitations. A solid-state device may win on interrogation signal even while losing on reproducibility. It is too early to turn the nuclear clock's theoretically large response to alpha into a demonstrated superiority over electronic clocks in secular drift.

The deeper opportunity is precisely this distinction between architecture and physics. An alpha-dependent signal should appear in unlike instruments with amplitudes determined by their *sensitivity differences*, not by their thermometers. A crystal-dependent line-centre displacement should change when the beam finds another grain of strain. An actual change in a dimensionless coupling cannot be allowed to migrate with the probe spot.

The clock inside the nucleus is now real. The controlled experiment around it is still being built.
