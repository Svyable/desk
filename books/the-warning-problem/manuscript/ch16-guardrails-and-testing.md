# Guardrails and Testing

“Put guardrails around it” is not a safety program.

A guardrail is useful only when the failure it is meant to stop is known, tested, and monitored.

For AI in nuclear-related warning and decision support, this means moving beyond principles into evaluation.

What should be tested?

False positives.

False negatives.

Behavior under missing data.

Behavior under adversarial inputs.

Sensitivity to one corrupted source.

Calibration under rare events.

Ability to expose provenance.

Operator ability to recognize model failure.

Fallback performance when the model is unavailable.

The testing environment should include uncertainty the system was not optimized to resolve.

A model that performs well only when the scenario has a correct label is not being tested against real strategic ambiguity.

Human-machine teams should be evaluated together.

Does the system improve analyst performance?

Does it reduce fatigue?

Does it create automation bias?

Do users notice when the model is wrong?

Does the interface encourage premature closure?

These questions turn safety from a property of the model into a property of the workflow.

Testing must also be continuous.

Models change. Data changes. Adversaries adapt. Software dependencies update. A certification from two years ago may say little about current behavior.

This argues for version control, regression testing, independent evaluation, and clear authority to suspend a system after unexpected behavior.

The guardrail is not one rule.

It is an institution capable of saying no to a system everybody has become accustomed to using.