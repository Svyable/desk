# Chapter 1 research note — 911 governance and routing

## Why this note exists

Chapter 1, “The Dispatcher,” uses emergency communications as the book’s opening model of intelligence allocation. The analogy is strong, but several operational claims should stay tied to the real institutional structure of 911 rather than drift into a generic image of a single dispatcher acting as a neutral switchboard.

## Primary / authoritative record checked

### 1. 911 is not one nationally operated queue

The National 911 Program states that the U.S. 911 system is operated by local and state government, with authority and responsibility varying by state. 911 professionals can be employed by law-enforcement agencies, fire departments, emergency-management agencies, IT organizations, and other local or state entities.

Source: National 911 Program, “FAQ About Calling 911,” 911.gov.
https://www.911.gov/calling-911/frequently-asked-questions/

The same federal program separately notes that each state and territory manages 911 differently: some have a statewide authority, some divide responsibility with local agencies, and some have no statewide authority at all.

Source: National 911 Program, “State and Territory 911 Authority Structures.”
https://www.911.gov/issues/legislation-and-policy/state-and-territory-911-authority-structures/

**Editorial implication:** Chapter 1 is right to say that U.S. emergency communications are organized locally and regionally, but the stronger point is not merely geographic decentralization. The institution is a federation of differently governed routing systems. “Who defines urgent?” can therefore have different answers across jurisdictions even before a model enters the loop.

### 2. Call-taking, processing, and dispatch are separable functions

911.gov says that telecommunicator responsibilities vary by center. In some Public Safety Answering Points (PSAPs), a telecommunicator may receive, process, and dispatch a request for help; in others, a professional is responsible for only one step, such as dispatching responders.

Source: National 911 Program, “FAQ About Calling 911.”
https://www.911.gov/calling-911/frequently-asked-questions/

Its current telecommunicator guidance similarly describes public-safety telecommunicators as the first point of contact who obtain essential information, calm callers, send appropriate responders, and sometimes give lifesaving instructions before responders arrive.

Source: National 911 Program, “Telecommunicators & Training.”
https://www.911.gov/issues/telecommunicators-and-training/

NENA’s national standards catalogue also distinguishes call processing and radio dispatch as operational activities subject to quality-assurance and local-policy requirements. NENA-STA-020.1-2020 provides a model operating procedure for 911 call processing, while APCO/NENA quality-assurance standards explicitly refer to both call-taking and radio-dispatch actions.

Source: National Emergency Number Association, Standards catalogue.
https://www.nena.org/page/standards

**Editorial implication:** The manuscript’s sentence that some centers combine receiving, processing, and dispatch while others split those functions is well supported. More importantly, the separation gives the book a useful architecture: allocation can itself be decomposed into intake, classification, prioritization, routing, instruction, and field dispatch. A model can improve one layer while degrading another.

### 3. Routing is constrained by infrastructure, not only judgment

The National 911 Program reports that nearly every emergency communications center uses a computer-aided dispatch (CAD) system, while CAD components remain highly nonuniform across vendors. It identifies that heterogeneity as a barrier to transferring calls and associated data between jurisdictions and to moving information to responders in the field.

Source: National 911 Program, “CAD Interoperability.”
https://www.911.gov/projects/cad-interoperability/

The NG911 program exists partly to improve the ability to transfer calls and data based on caller location, manage overload, and connect systems across jurisdictions. Its federal guidance emphasizes that implementation is not merely a software upgrade; it requires coordination among emergency-communications, public-safety, legislative, and governing entities.

Source: National 911 Program, “Next Generation 911.”
https://www.911.gov/issues/ng911/

**Editorial implication:** Chapter 1 should resist making allocation sound like a purely cognitive act performed by an expert human. A correct classification can still fail to become action if systems cannot transfer the call, location, incident data, or authority cleanly. The allocation problem includes interfaces and interoperability.

## Strongest counterargument / disconfirming evidence

The dispatcher analogy can become too flattering to routing.

A well-designed routing layer cannot manufacture ambulances, firefighters, staffed emergency departments, radio capacity, language access, or trained telecommunicators. Some emergency systems are bottlenecked primarily by response capacity rather than classification. Better triage can redistribute scarcity without reducing it, and prioritizing one call can increase somebody else’s wait.

That matters for the book’s larger AI claim. If a model improves classification accuracy while the downstream institution remains capacity-constrained, aggregate outcomes may improve only modestly, or the principal effect may be a change in who receives scarce service first. Allocation quality and resource abundance are distinct variables.

A second limitation is institutional variation. Because responsibilities and governance differ among PSAPs and states, one center’s workflow should not be narrated as universal U.S. practice. The federal record supports the chapter’s general sequence—receive information, classify/process, send appropriate help—but not a single nationwide staffing model.

## Sharper argument available to the manuscript

The useful distinction is not “dispatchers are intelligent because they know where to send things.” It is:

> Emergency communications make intelligence allocation visible because the institution has to convert incomplete information into a priority, a route, and an authorized response before it possesses a complete account of the event.

The institutional wrinkle makes the metaphor better. The route is produced jointly by human judgment, protocol, jurisdiction, software, communications infrastructure, and available response capacity. That is much closer to the AI-era allocation problem than the image of one exceptionally capable operator deciding everything.

## Suggested future prose pressure points

- Preserve the current opening’s concrete call-taker questions; 911.gov specifically identifies location, callback number, nature of emergency, and details about injuries, fire, or suspected crime as typical information sought from callers.
- Keep the manuscript’s distinction between call-taking and dispatch, but treat it as evidence that “allocation” has layers rather than as a minor organizational variation.
- When asking “Who defines urgent?”, consider adding one sentence noting that the answer can differ by jurisdiction, policy, and agency even before automation is introduced.
- Avoid implying that a better allocator removes scarcity. In emergency communications, an improved queue can still be a queue.
- If a later revision expands the NG911 material, use interoperability as the concrete example: a decision can be cognitively correct but operationally stranded if the relevant data cannot move with the call.

## Sources

1. National 911 Program, “Calling 911.” https://www.911.gov/calling-911/
2. National 911 Program, “FAQ About Calling 911.” https://www.911.gov/calling-911/frequently-asked-questions/
3. National 911 Program, “Telecommunicators & Training.” https://www.911.gov/issues/telecommunicators-and-training/
4. National 911 Program, “State and Territory 911 Authority Structures.” https://www.911.gov/issues/legislation-and-policy/state-and-territory-911-authority-structures/
5. National 911 Program, “CAD Interoperability.” https://www.911.gov/projects/cad-interoperability/
6. National 911 Program, “Next Generation 911.” https://www.911.gov/issues/ng911/
7. National Emergency Number Association, “NENA Standards.” https://www.nena.org/page/standards
