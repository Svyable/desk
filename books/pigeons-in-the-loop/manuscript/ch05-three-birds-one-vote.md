# Three Birds, One Vote

The famous version uses three pigeons.

Three is funny enough to survive retelling, but redundancy is the least funny part of the design. A single biological tracker raises an obvious question: what happens when it loses the target? An engineer can answer by adding another sensor. Skinner's system contemplated multiple animals whose outputs could be compared or combined.

This did not magically solve reliability. It changed its structure.

If three pigeons are independently likely to stay on target, a majority arrangement can reduce the effect of one errant bird. But the word independently is doing enormous work. The birds share the same projected image, vibration, illumination, temperature and vehicle motion. A cloud that obscures the target can confuse all three. A bad training image can bias all three. A mechanical failure in the optical path can erase the target for all three. Redundancy helps most when failure modes are uncorrelated; common-mode failure survives voting.

This is where Project Pigeon begins to look unexpectedly modern. Contemporary safety engineering spends immense effort distinguishing component count from genuine fault tolerance. Three identical software processes running on three processors do not protect against the same software bug. Three pigeons trained from the same visual regime may likewise share blind spots. The analogy is not proof, but it tells us what to ask of the historical test data.

Were the birds trained separately? Did they make different errors? How often did one lose the target while two continued? Did individual birds show stable performance differences? How did the combining mechanism treat disagreement? Were pecks averaged continuously or reduced to a cruder consensus signal? The surviving museum description simplifies the arrangement for public understanding; Skinner's technical narrative and any Naval Research Laboratory reports matter more for reconstructing the actual control logic.

There is another complication. Biological redundancy consumes volume, air and handling attention but little electrical power. In a wartime missile packed with vacuum tubes, batteries, servos and explosives, that trade could look different from the way it looks now. A bird is bulky compared with a chip. It is not bulky compared with an early electronic vision system that does not yet exist.

The three-bird design also exposes the program's psychological burden. One pigeon could be dismissed as a stunt. Three pigeons wired into a consensus mechanism begin to look like architecture. The more seriously the designers treated failure, the harder it became to present the project without making the audience laugh first.

The laughter itself would become a system variable.