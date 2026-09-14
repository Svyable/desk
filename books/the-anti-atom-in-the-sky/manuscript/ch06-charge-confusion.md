# 6 — Charge Confusion

Suppose the universe contains no antihelium at the flux AMS can see. The detector will still occasionally reconstruct something that looks like it.

This is not a philosophical possibility. It is a mathematical consequence of an enormous positive-helium sample and finite resolution.

The tracker determines curvature. At low and moderate rigidity, the bend is obvious. At very high rigidity, the track approaches a straight line. The sign of a very small curvature can flip under measurement error. Multiple scattering, imperfect hit assignment, detector alignment and interactions inside the apparatus can all complicate the fit. The phrase `charge confusion` compresses several mechanisms that need to be distinguished because their tails scale differently.

The 2026 doctoral analysis by Rossi is important precisely because it confronts this problem with a modern data-driven machine-learning workflow. It first selects |Z|=2 events and negative reconstructed rigidity, then uses four deep neural networks—two supervised classifiers and two unsupervised autoencoders—to suppress backgrounds. The dominant remaining background is charge-confused helium. The thesis notes a particularly uncomfortable fact: because that background occupies the same reconstructed mass region as the desired signal, there is no clean data control region right beside the candidates. Background estimation therefore relies heavily on Monte Carlo simulation.

That sentence should slow down every reader.

Machine learning does not make the background disappear. It changes the surface on which signal and background are separated. If the simulation fails to reproduce a rare class of real detector pathology, a powerful classifier can become extremely confident about the wrong distinction. Unsupervised autoencoders help by learning common event structure and flagging unusual events, but unusual is not synonymous with antimatter. A detector accident is unusual too.

The thesis tries to mitigate this by using multiple independent or orthogonal networks and multiple working points. That is good practice. The result is not a five-sigma discovery. Depending on the classifier cuts, up to twelve candidates remain, corresponding to only mild 1–2 sigma tension with the background-only hypothesis. Exclusion limits are therefore the statistically appropriate product.

This is a fascinating outcome because it punctures both public caricatures. The candidates are not obviously fake; sophisticated selections still find interesting events. They are also not obviously a cosmic antimatter population; once the background tail is modeled, the significance is modest.

A physicist should want one more thing immediately: event stability under reconstruction perturbation. Refit every candidate after removing individual tracker hits. Vary alignment within calibration uncertainties. Change interaction models. Train classifiers on alternate Monte Carlo generators. Blind the sign during development. Inject synthetic pathologies. Compare with positive-helium events artificially degraded to the same curvature significance. If the same few events remain antihelium-like under every reasonable reconstruction, they become much harder to dismiss.

Rare-event physics is partly the art of attacking your favorite events until they either become boring or become unavoidable.

The lesson extends well beyond AMS. The age of machine-learning anomaly searches will produce more cases where no simple sideband exists and the tail must be simulated. The scientific object is then not only the candidate but the robustness of the inference pipeline under model misspecification.

Antihelium is a perfect rehearsal because the theoretical prize is so large. It forces us to decide how much confidence a black-box classifier can earn when the background it is rejecting is billions of times more common than the signal.