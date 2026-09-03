export function authoringRolePolicy({ role = 'instance', remoteInspection = false } = {}) {
  const normalizedRole = String(role || 'instance').trim().toLowerCase();
  const localDesk = normalizedRole === 'desk' && !remoteInspection;

  return Object.freeze({
    localDesk,
    hideLandingHero: localDesk,
    hidePublishedSummary: localDesk,
    hidePublishedFilter: localDesk,
    readySummaryLabel: localDesk ? 'Ready to release' : 'Ready to publish',
  });
}

export function initialAuthoringRolePolicy({ remoteInspection = false } = {}) {
  return authoringRolePolicy({
    role: remoteInspection ? 'instance' : 'desk',
    remoteInspection,
  });
}
