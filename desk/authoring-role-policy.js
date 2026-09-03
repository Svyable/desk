export function authoringRolePolicy({ role = 'instance', remoteInspection = false } = {}) {
  const normalizedRole = String(role || 'instance').trim().toLowerCase();
  const localDesk = normalizedRole === 'desk' && !remoteInspection;

  return Object.freeze({
    localDesk,
    hideLandingHero: localDesk,
    hidePublishedSummary: normalizedRole === 'desk',
    readySummaryLabel: normalizedRole === 'desk' ? 'Ready to release' : 'Ready to publish',
  });
}
