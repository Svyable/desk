# Decisive Experiment Protocol: Optical-Only Mitochondrial Coupling

## Purpose

Test whether a reported non-contact physiological effect between separated mitochondrial preparations is mediated by photons at the intensity and wavelengths spontaneously emitted by the biological source.

This is a preregistration sketch, not a claim that the effect exists or that photons mediate it.

## Primary hypothesis

A stressed mitochondrial emitter produces an optical output that changes oxygen-consumption rate in an isolated receiver preparation. Receiver response should depend predictably on optical transmission between chambers.

## Primary outcome

Change in receiver oxygen-consumption rate during a fixed post-perturbation interval defined from a pilot that is not included in confirmatory analysis.

## Architecture

Two separate sealed chambers on independent mechanically isolated supports. No shared gas or fluid path. Temperature controlled and monitored independently. Electromagnetic shielding around both chambers. The sole intentional connection is an optical path through interchangeable filter assemblies or a fiber.

Emitter and receiver are prepared independently from the same defined biological source and randomized to positions.

## Conditions

1. Full optical transmission across the measured biological UPE band.
2. Neutral-density attenuation of the full band by at least three calibrated levels.
3. Short-wavelength pass / long-wavelength block.
4. Long-wavelength pass / short-wavelength block.
5. Complete optical block with thermal and mechanical properties matched as closely as practical.
6. Fiber-linked condition with chambers physically separated beyond plausible local thermal/mechanical coupling.
7. Sham perturbation in the emitter.
8. Receiver-only perturbation control.

## Emitter characterization

A beam splitter or parallel matched detector path measures emitter photon flux continuously with a calibrated single-photon detector. Record spectral distribution where count rate allows. Record emitter oxygen consumption, temperature, and redox state.

Stress condition should replicate the inhibitor and concentration used in the target prior study unless a documented pilot requires modification.

## Receiver characterization

Measure oxygen consumption continuously in darkness with instrumentation that does not inject relevant optical power. Secondary outcomes may include membrane potential, ATP, NADH/FAD redox measures, and ROS, but the primary endpoint remains fixed.

## Channel-confound measurements

- Chamber temperature at high temporal resolution.
- Gas composition and volatile-organic monitoring where feasible.
- Accelerometers on both supports.
- Broadband electromagnetic field monitoring.
- Static potential.
- Pressure and humidity.
- Detector dark counts and ambient optical leakage.

## Substitution phase

After biological-emitter trials, replace the emitter with a calibrated optical source whose spectrum, average photon flux, and temporal modulation approximate the measured biological emission.

Repeat the same receiver protocol across a wide dose range including below, at, and above measured endogenous flux.

This phase is critical. A photon-mediated hypothesis should predict that a nonbiological optical source can reproduce the receiver effect when the optical stimulus is matched.

## Blinding

Sample handlers do not know filter condition. The optical-condition controller is automated. Raw data are timestamped and stored before unblinding. Analysis scripts are finalized and hashed before confirmatory runs.

## Statistical plan

Power analysis is based on an independently estimated effect size smaller than the original reported effect to protect against winner's curse. The primary comparison is receiver response in full-transmission versus optical-block conditions. Secondary dose-response analysis tests monotonicity or a preregistered non-monotonic model if prior data justify one.

No post-hoc spectral band is promoted to primary evidence without independent replication.

## Interpretation matrix

**Effect only with optical transmission; attenuates with photon flux; reproduced by matched artificial source:** strong evidence for causal optical coupling.

**Effect persists with optical block:** photons not necessary under the tested conditions; investigate other physical channels or common artifacts.

**Effect disappears under all improved-isolation conditions:** original geometry likely depended on an uncontrolled coupling or nonreproducible biological effect.

**Biological emitter works but matched artificial source does not:** optical hypothesis remains incomplete; investigate unmeasured spectral/temporal structure while testing non-optical alternatives.

**Artificial source works only at flux orders of magnitude above endogenous emission:** photobiological sensitivity exists, but measured UPE is insufficient under the tested geometry.

## Independent replication

The protocol should be run in at least two laboratories with different detector hardware. The second laboratory receives the analysis plan before seeing the first laboratory's confirmatory result.

## Defeat rule

If two adequately powered independent implementations reproduce emitter UPE but find no receiver effect specific to the optical path, the mitochondrial-UPE communication hypothesis should be downgraded substantially rather than rescued by unspecified “subtle conditions.”
