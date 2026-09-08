const GENERIC_IDENTITY = Object.freeze({
  documentTitle: 'Publishing Desk · Bookself',
  documentDescription: 'A Git-native publishing desk for Bookself authors and editors.',
  brandEyebrow: 'Bookself',
  homeLabel: 'Bookself home',
  skipLinkLabel: 'Skip to manuscripts',
  footerText: 'Bookself Publishing Desk reads repository content only. Manuscript edits still happen through normal Git commits and pull requests.',
});

const SVEN_DESK_IDENTITY = Object.freeze({
  owner: 'Sven Hardy Benson',
  name: 'Sven Hardy Benson’s Desk',
});

function localIdentity(identity = {}) {
  const owner = String(identity.owner || SVEN_DESK_IDENTITY.owner).trim() || SVEN_DESK_IDENTITY.owner;
  const name = String(identity.name || SVEN_DESK_IDENTITY.name).trim() || SVEN_DESK_IDENTITY.name;
  return Object.freeze({
    documentTitle: `Publishing Desk · ${owner}`,
    documentDescription: `${name} is the local-first authoring workspace for working manuscripts before deliberate release.`,
    brandEyebrow: owner,
    homeLabel: `${owner} home`,
    skipLinkLabel: 'Skip to publishing workspace',
    footerText: `${name} reads repository content only. Manuscript edits still happen through normal Git commits and pull requests.`,
  });
}

export function authoringRolePolicy({ role = 'instance', remoteInspection = false, identity = {} } = {}) {
  const normalizedRole = String(role || 'instance').trim().toLowerCase();
  const deskRole = normalizedRole === 'desk';
  const localDesk = deskRole && !remoteInspection;
  const identityPolicy = localDesk ? localIdentity(identity) : GENERIC_IDENTITY;

  return Object.freeze({
    deskRole,
    localDesk,
    hideLandingHero: localDesk,
    hidePublishedSummary: deskRole,
    hidePublishedFilter: deskRole,
    readySummaryLabel: deskRole ? 'Ready to release' : 'Ready to publish',
    ...identityPolicy,
  });
}

export function initialAuthoringRolePolicy({ remoteInspection = false } = {}) {
  return authoringRolePolicy({
    role: remoteInspection ? 'instance' : 'desk',
    remoteInspection,
    identity: remoteInspection ? {} : SVEN_DESK_IDENTITY,
  });
}
