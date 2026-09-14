# The Map Looters Would Like

An archaeological map can be scientifically incomplete and operationally perfect for a looter.

That asymmetry is the first thing to understand about open archaeological data.

A researcher may need excavation, dating, ceramic analysis, soil chemistry and years of comparison before deciding what a low rectangular rise means. A person looking for saleable material needs much less. Coordinates can be enough.

This is why LiDAR creates a heritage-security problem almost by design. Its scientific virtue is scale. A single survey can reveal hundreds or thousands of candidate features in places where ground protection is sparse, travel is difficult and existing inventories are incomplete. The same dataset that lets an archaeologist prioritize fieldwork can let somebody else prioritize extraction.

The artifact is not the only thing at risk.

Looting destroys association. A vessel removed from a burial is no longer located relative to the body, the other offerings, the construction sequence, the soil layer or the later disturbance. An object survives while a historical measurement disappears. The market sees inventory. Archaeology loses a relationship.

That makes coordinate release an unusual scientific decision because the damage can be irreversible before the interpretation is even mature.

A bad statistical model can be rerun.

A looted tomb cannot be unlooted.

## Openness is not one variable

The debate is often flattened into **open data versus secrecy**.

That is too crude.

A LiDAR project can contain several data products with radically different risk profiles:

- raw point clouds,
- classified ground returns,
- digital terrain models,
- hillshades and slope derivatives,
- polygons marking candidate archaeological features,
- exact site coordinates,
- field-validation notes,
- chronology and cultural attribution,
- local place names,
- oral histories,
- community knowledge about access, use and significance.

There is no reason all of those layers must inherit the same access rule.

A public paper may need enough terrain imagery to let another researcher evaluate a morphological claim without releasing a machine-readable file containing every exact candidate location. A regional density model may be reproducible from generalized cells while the underlying point coordinates remain restricted. A cultural-landscape interpretation may require community knowledge that is not the research team's to place into an unrestricted repository at all.

The right question is not **open or closed?**

It is **open to whom, at what resolution, for what purpose, under whose authority, and with what reversibility if the decision proves wrong?**

That is a governance problem, not merely a repository setting.

## The FAIR problem

Modern science has spent years encouraging data that are FAIR: findable, accessible, interoperable and reusable.

Those are useful properties. Archaeology benefits from them. A point cloud that cannot be found, a dataset stored in an obsolete format, or a survey that cannot be compared with later work wastes scientific value.

But accessibility and reusability are not morally neutral when the data describe places, knowledge or heritage over which living communities retain interests and authority.

The Global Indigenous Data Alliance developed the CARE Principles precisely around this gap. CARE stands for **Collective Benefit, Authority to Control, Responsibility and Ethics**. The framework argues that open-data norms often describe the desired properties of data while failing to address power differences, historical context and Indigenous rights. CARE is presented not as a rejection of FAIR but as a complement to it. Source: https://www.gida-global.org/careprinciples

That distinction belongs inside a LiDAR book because archaeological remote sensing can look deceptively objective.

The aircraft flies a grid.

The laser returns a cloud.

The software classifies a surface.

None of those steps tells us who should control the resulting knowledge.

A terrain model can be technically FAIR and politically extractive.

## Authority is different from protection

There are at least two reasons not to publish exact archaeological data, and they should not be confused.

The first is **site protection**. Publishing a coordinate may increase the probability of looting, vandalism or destructive tourism.

The second is **authority**. A community may hold legitimate cultural, legal or political claims over knowledge connected to its lands, ancestors and heritage whether or not publication would create a looting risk.

The first can tempt researchers into paternalism: *we will hide this for your protection.*

The second asks a more difficult question: *who had the right to decide whether it was ours to release in the first place?*

Those are not the same ethics.

Indigenous data sovereignty pushes archaeological practice toward the second question. Local Contexts, a global initiative built around Indigenous cultural and intellectual property and data sovereignty, describes its purpose as enabling Indigenous communities to assert authority over how heritage and data are collected, managed, displayed, accessed and used. Source: https://localcontexts.org/

That changes the role of the archaeologist.

The research team is not automatically the sovereign because it paid for the flight.

The institution is not automatically the owner of meaning because it stores the point cloud.

The sensor does not confer cultural title.

## A practical model already exists

One reason researchers sometimes treat Indigenous data governance as abstract is that they imagine the alternative to open release is an informal request to “be respectful.”

There are more concrete tools than that.

Local Contexts has developed Traditional Knowledge and Biocultural Labels that communities can use to state provenance, protocols and permissions for data and cultural materials circulating in digital systems. The labels can specify, among other things, community attribution, culturally sensitive status, secret or sacred status, seasonal access, community-only use, non-commercial use, or openness to collaboration. Source: https://localcontexts.org/labels/traditional-knowledge-labels/

The important feature is not the icon.

It is that the metadata carries a governance statement with the data.

Scientific repositories are good at preserving technical metadata: coordinate reference system, sensor, flight date, point density, processing software, classification version.

They are much worse at preserving **authority metadata**: who says this knowledge may circulate, under what conditions, with what attribution, and whether those conditions differ from ordinary copyright.

A mature archaeological data system needs both.

Imagine two files with identical terrain information.

One has a DOI and a Creative Commons license.

The other has the same DOI and license plus a community-defined protocol explaining that a subset of cultural information is sensitive, that commercial reuse is not permitted by the community, and that future research should involve specified cultural authorities.

The bytes may be identical.

The ethical object is not.

Local Contexts makes that difference legible to digital systems instead of leaving it buried in acknowledgments. Source: https://localcontexts.org/labels/about-the-labels/

## A four-layer release model

For archaeological LiDAR, I would start with four access layers rather than one.

### Layer 1: public scientific surface

Release enough for the central scientific claims to be inspected.

This can include generalized maps, representative terrain derivatives, methods, sensor specifications, uncertainty descriptions, aggregate counts, regional models and carefully selected examples.

The public layer should allow a skeptical reader to understand what the sensor measured and how the interpretation was produced.

It does not automatically need every candidate coordinate.

### Layer 2: controlled reproducibility layer

Qualified researchers may need more.

This layer could include high-resolution terrain derivatives, candidate-feature polygons and more complete spatial data under access conditions that prohibit public redistribution and require a research purpose.

The goal is not to create a priesthood of approved archaeologists. It is to recognize that **reproducibility does not always require anonymous worldwide download**.

Secure census microdata already operate on this logic. Medical researchers work with controlled-access genomic datasets. Archaeology should be capable of designing similarly serious access systems when disclosure creates material risk.

### Layer 3: protection-sensitive layer

Exact coordinates for vulnerable burials, caves, isolated monuments, unprotected sites or features likely to attract collectors belong here.

Access should be logged. Downloads should be attributable. The release decision should consider local enforcement capacity, current looting pressure, road access, tourism exposure and whether the site has been documented or protected on the ground.

This layer should also be **time-sensitive**.

A site may be too vulnerable for release today and appropriate for broader access after field verification, legal protection or community planning. Restriction should not have to mean permanent academic possession.

### Layer 4: community-governed knowledge

This is the layer a conventional open-science framework is least equipped to handle.

Local names, oral histories, sacred associations, ancestral knowledge, culturally restricted places and interpretations provided by Indigenous collaborators may be governed by rules that do not originate with the university or funding agency.

Those rules should not be flattened into “sensitive data” as though the only issue were risk.

The issue is authority.

A community may choose to make something public. It may choose limited circulation. It may choose attribution, seasonal conditions, community-only use or no release at all. The governance system should be able to represent those distinctions.

## The danger of the derivative

Researchers often protect exact coordinates while publishing a beautiful high-resolution hillshade.

Sometimes that is security theater.

A map does not need a latitude-longitude table to reveal a site if the published image contains enough landmarks, scale, terrain shape or geographic context to georeference it. A machine-learning model can infer locations from derivatives a human publisher thought were safely abstracted. A cropped figure can be matched against public elevation data.

The threat model therefore has to include **derivation**.

Can a motivated user recover the location from what we released?

Can the restricted layer be reconstructed from the public layer plus other open datasets?

Does the paper name a village, river and distance that together identify the site?

Does a supplementary GIS file preserve hidden metadata or coordinates?

Does an interactive web map expose precise geometry at high zoom?

“Coordinates withheld” is not a security policy if the coordinate can be recovered in ten minutes.

## Machine vision raises the stakes

The problem gets sharper as archaeological detection becomes automated.

A human analyst may take weeks to inspect a regional terrain model. A segmentation system can score millions of cells. If machine-assisted detection becomes reliable, the scarce resource changes from **finding candidate sites** to **validating and protecting them**.

That is scientifically exciting and operationally dangerous.

An open model plus open national LiDAR can allow researchers to discover features without another flight. It can also allow treasure hunters, developers or hostile actors to do the same.

The ethical object is no longer only the dataset.

It may be the **model weights**, training labels, inference code and ranked output.

A system that publishes a probability map of unrecorded archaeological features could create more risk than releasing a conventional site inventory because it points toward places heritage authorities do not yet know require protection.

Open archaeology will have to learn the same lesson cybersecurity learned long ago: publishing capability and publishing evidence are not always the same act.

## A release decision should have a threat model

Before publication, a LiDAR archaeology project should be able to answer a short list of questions in writing.

**What harm becomes easier if this layer is public?**

Looting, vandalism, unauthorized tourism, development targeting, surveillance of culturally sensitive places, commercial appropriation, or something else?

**Who bears that harm?**

The research team, the state, a local community, descendant communities, landholders, or people who were never asked to join the project?

**Who has authority to accept the risk?**

This is different from asking who signed the grant.

**What scientific purpose requires this exact resolution?**

A claim of reproducibility should identify the actual analytic need rather than invoke openness as a ritual.

**Can the public product be recombined with other datasets to reconstruct the restricted one?**

If yes, redaction has failed.

**Can access expand later?**

Time-delayed release may preserve both protection and eventual scientific reuse.

**Is the decision logged?**

Future researchers should know why a layer was restricted, who participated in the decision and when the decision should be revisited.

That final point matters because secrecy also has costs.

Restricted data can become invisible data. An archaeological team can use “site protection” to prevent criticism, hoard discoveries, exclude local scholars or retain control long after the original risk has passed. A governance system needs review dates and accountability so protection does not become indefinite proprietorship.

## Discovery is a dangerous word

LiDAR journalism loves discovery verbs.

**Revealed. Found. Uncovered. Discovered.**

The sensor can genuinely discover something to archaeological remote sensing. A research team can genuinely identify a previously unrecorded feature in the scholarly literature. That does not mean the place was unknown to humanity.

Local people may know it.

Descendant communities may have names for it.

Farmers may work around it.

Hunters may use the road passing through it.

Oral tradition may preserve an association the remote-sensing team cannot recognize from the terrain model.

This is why the cleanest phrase may be **newly documented by LiDAR** rather than **discovered**, unless the history of knowledge is actually known.

Kathryn Reese-Taylor's 2025 analysis of LiDAR and “lost cities” is useful here because it shows how public presentation can convert a methodological advance into an explorer narrative. The instrument becomes the hero, the landscape becomes empty until science sees it, and prior knowledge disappears from the story. Source: https://doi.org/10.1017/aap.2025.2

The correction is not semantic politeness.

It is historical accuracy.

## The Amazon makes the problem concrete

The 2026 southwest Amazon LiDAR work is powerful partly because it demonstrates how much conventional visibility had missed. Hundreds of earthworks appeared in airborne laser data where previous inventories were sparse. The study also confronted modern Indigenous territories and the sensitivity of archaeological location information rather than treating every mapped point as ordinary public metadata.

That is the future version of this problem.

As national and regional LiDAR coverage expands, researchers will increasingly work with data collected for forestry, flood control, infrastructure or mapping rather than archaeology. They may identify sites from a desk thousands of kilometers away. The person who detects the feature may never have visited the land and may have no relationship with the people living there.

Technical access will become easier precisely as social authority becomes easier to ignore.

The remedy cannot be that remote researchers simply decide to be benevolent.

It has to be governance built into the project before the exciting map appears.

## FAIR and CARE together

The best resolution is not to choose FAIR or CARE.

It is to make them constrain each other.

A dataset should be findable enough that knowledge does not disappear when a principal investigator retires.

Its technical structure should be interoperable enough that future scholars can compare surveys.

Its provenance should be clear enough that transformations and interpretations can be audited.

And its access conditions should preserve legitimate authority, collective benefit, responsibility and ethics rather than assuming that maximum reuse is always the highest good.

The Global Indigenous Data Alliance's formulation is useful because it refuses the false choice between useful science and Indigenous governance. CARE was designed to complement FAIR, not erase it. Source: https://www.gida-global.org/careprinciples

The newer practical guidance emerging from Local Contexts and Creative Commons makes the same point from another angle: ordinary open licenses and Indigenous data-governance tools can coexist, because they answer different questions. Copyright permission is not the same thing as cultural authority. Source: https://localcontexts.org/new-guidance-for-indigenous-collections-and-data/

That sentence should be printed above every archaeological repository upload form.

A Creative Commons license can say what copyright permissions attach to a file.

It cannot, by itself, settle who has cultural authority over knowledge represented inside the file.

## The map can help defend the landscape too

The risks should not obscure the other side.

Remote sensing can strengthen protection.

A mapped archaeological landscape can support heritage designation, environmental review, land claims, conservation planning and arguments that an apparently “empty” forest has a deep history of human management and occupation. The same spatial evidence that attracts unwanted attention can make erasure harder.

That is why blanket secrecy is not a solution.

If data remain permanently locked in a foreign university, the project can reproduce the extraction it claims to prevent.

Protection without access can deny local communities the evidentiary value of the research.

The right design is therefore not **hide the map**.

It is **decide together which map each audience actually needs**.

## A better publication standard

For every remote-sensing archaeology paper, I would like to see a short data-governance statement beside the methods.

Not a generic ethics paragraph.

A real account:

- which spatial layers exist;
- which are public, controlled or community-governed;
- who participated in the access decision;
- whether Indigenous or descendant-community protocols apply;
- what looting or exposure threat was considered;
- whether locations can be reconstructed from figures or derivatives;
- when restrictions will be reviewed;
- where researchers can request legitimate access;
- what conditions attach to future reuse.

That would make withholding more accountable and openness more thoughtful.

It would also improve science because future researchers could distinguish **data absent because they do not exist** from **data intentionally restricted because release creates risk**.

Those are very different epistemic states.

## The point cloud has no ethics

The laser does not know whether the mound beneath the canopy is a house platform, a burial, a sacred place, a looting target, a legal boundary or a place somebody's grandparents already knew by name.

The classifier does not know either.

The ethics begin when people decide what the measurement means and who gets the next copy.

That is why I resist the explorer's fantasy that revelation is automatically progress.

Sometimes the scientifically responsible act is to publish the coordinate.

Sometimes it is to generalize it.

Sometimes it is to share it only with a protection agency or a community authority.

Sometimes it is to wait.

And sometimes the most important fact about a dataset is that the researchers do not have unilateral authority to decide.

The laser can remove the trees from an image.

It should not remove the people from the governance of what appears underneath.