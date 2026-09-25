# How to Test a Hollow World

Suppose we take the hollow-Moon claim seriously for one afternoon.

Not seriously in the social sense. Seriously in the engineering sense.

The first task is to stop saying “hollow.” A cavity occupying one percent of lunar volume is a different object from a shell around an empty center. An artificial honeycomb is different again. A lava-tube province is different from all three. Each geometry changes mass, gravity, rotational inertia, elastic modes and seismic travel paths in different ways.

So choose the strongest version: a large planetary shell surrounding a substantial empty interior.

Now give it a radius.

The Moon's mean radius is about 1,737.5 kilometres. Its mass is about 7.35 × 10^22 kilograms. Those two measurements imply a mean density of **3.344 g/cm³** in NASA's current planetary constants. That number does not by itself prove the interior is solid. It does something more useful: it turns emptiness into a bill the remaining material has to pay.

For the simplest possible shell, let the shell material have one uniform density, `ρ_s`, let the inner empty radius be `r`, and let the lunar radius be `R`. Then

`ρ_mean = ρ_s [1 - (r/R)^3]`.

That is only volume accounting. No seismology. No theory of lunar formation. No appeal to authority.

Give the shell fairly dense rocky material, **3.5 g/cm³**. To preserve the Moon's measured mean density, the empty central radius can only be about **0.355 R**, roughly **616 km**. Raise the shell density to **4.0 g/cm³** and the cavity can grow to about **0.547 R**, roughly **951 km**. A still larger empty interior demands progressively denser remaining material.

This is where many hollow-Moon arguments stop. If the total mass can be made to work by increasing shell density, perhaps the idea survives.

It does not survive the next number nearly as well.

Mass tells you how much material exists. **Moment of inertia tells you where it is.** Move mass outward and a body becomes harder to spin about its axis. Move mass inward and the normalized moment of inertia falls.

For a uniform solid sphere, the polar moment-of-inertia coefficient is exactly **0.400**:

`C / (M R²) = 2/5`.

For a uniform spherical shell with inner-radius fraction `x = r/R`, the coefficient becomes

`C / (M R²) = (2/5) × (1 - x^5) / (1 - x^3)`.

The important feature is not the algebra. It is the direction. The moment you carve an empty cavity out of the center while leaving a uniform shell, the coefficient rises **above 0.400**, because mass has been pushed outward. As the shell becomes thinner, the coefficient approaches **2/3**.

The real Moon goes the other way.

Lunar laser ranging combined with GRAIL gravity gives a mean moment-of-inertia estimate for the solid Moon of about **0.393112 ± 0.000012** when scaled to the mean lunar radius. The exact interior inversion remains model-dependent, but that bulk number is not subtle: the Moon is slightly **more centrally concentrated than a uniform sphere**, not more shell-like.

Put the two simple shell examples through the same equation. The 3.5 g/cm³ shell with a ~616 km central cavity gives a moment-of-inertia coefficient of about **0.416**. The 4.0 g/cm³ shell with a ~951 km cavity gives about **0.455**. Both move hard in the wrong direction relative to the observed ~0.393.

This does not mathematically forbid every imaginable engineered structure. An advocate can always add radial density gradients, ultra-dense internal layers, internal trusses, ballast or materials chosen specifically to recover the observed inertia. But notice what has happened. “The Moon rang, therefore hollow” has become an engineered density-distribution problem. Every patch added to rescue the shell creates new predictions for gravity, tidal deformation, seismology and geochemistry.

That is progress.

A vague claim can absorb any observation. A specified shell has to balance its books.

The GRAIL mission makes those books even less forgiving. GRAIL mapped the lunar gravity field at extraordinary spatial resolution and helped constrain the Moon's tidal response and internal mass distribution. Lunar laser ranging independently measures physical librations and tidal behavior. Apollo seismology supplies wave speeds and reflected or converted phases. Modern analyses of those data support a crust, mantle and small core. None of these measurements is individually sacred. Together they form a cross-audit.

A planetary cavity large enough to deserve the phrase “hollow Moon” should not merely alter one famous waveform. It should alter several independent observables at once.

A free internal surface, for example, is not just empty space. It is a seismic boundary with an enormous impedance contrast. A sufficiently large spherical cavity should create strong, repeatable reflected phases and a normal-mode spectrum different from that of a differentiated rocky body. If somebody proposes a shell thickness, elastic moduli and density profile, those signals can be computed before looking again at the Apollo archive.

The same is true of gravity. A spherically symmetric cavity can be hidden from the exterior monopole field if the remaining mass is arranged to preserve total mass. But the needed mass rearrangement does not disappear from rotational inertia, tidal response or plausible material density. Depart from perfect spherical symmetry and GRAIL's higher-degree gravity field becomes another constraint.

The correct way to test the claim is therefore not to ask whether any one dataset can be narrated as mysterious. It is to freeze a model and make it pass independent exams.

Start with five parameters: inner cavity radius, shell density profile, elastic moduli, shell thickness and any internal support structure. From those, predict at least:

- total mass and mean density;
- normalized principal moments of inertia;
- tidal Love numbers and physical libration response;
- gravity harmonics for any non-spherical structure;
- compressional and shear-wave travel times;
- free-surface reflections from the inner boundary;
- normal modes and coda behavior under known impacts;
- heat flow and long-term mechanical stability.

Only after those predictions are frozen should the Apollo data be reopened.

This is a much harder standard than “it rang for a long time.” It is also much fairer. A genuinely artificial shell that matched all of these constraints would be extraordinary precisely because it had survived several measurement systems that were not built to validate it.

There are, meanwhile, narrower forms of lunar hollowness that do not require any of this planetary gymnastics. Large lava tubes are geologically plausible. Pits and candidate voids can be tested with local radar, gravimetry, active seismology and eventually drilling. A kilometre-scale cavity is an archaeological or geological target. A thousand-kilometre central void is a planetary structure. The two claims should never inherit evidence from each other merely because both contain empty space.

The same discipline applies beyond the Moon. A hidden cavity has dimensions and a transfer function. A retrieved alloy has composition, isotopes, microstructure and provenance. A craft has acceleration, power, heat and material limits. An extraordinary technological claim becomes scientifically useful the moment it is forced to acquire engineering parameters.

The phrase “extraordinary claims require extraordinary evidence” is memorable but incomplete. What they require first is **ordinary conservation laws and geometry applied without mercy**.

NASA's current lunar constants give the mean density: https://science.nasa.gov/moon/by-the-numbers/

The modern GRAIL/laser-ranging moment-of-inertia estimate is reported by Williams et al. in *JGR Planets*: https://doi.org/10.1002/2013JE004559

A hollow world should be easier to test than a vague one.