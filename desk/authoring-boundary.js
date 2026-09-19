import { authoringRolePolicy, initialAuthoringRolePolicy } from './authoring-role-policy.js';

import('./workspace-nav.js').catch((error) => {
  console.warn('Workspace navigation could not be loaded', error);
});

import('./cover-design.js').catch((error) => {
  console.warn('Cover design studio could not be loaded', error);
});

import('./research-surface.js').catch((error) => {
  console.warn('Publication research surface could not be loaded', error);
});

const $ = (id) => document.getElementById(id);
let policyRequestSequence = 0;

function installDeskPolish() {
  if (!document.querySelector('link[data-desk-polish]')) {
    const polish = document.createElement('link');
    polish.rel = 'stylesheet';
    polish.href = new URL('./desk-polish.css?v=2', import.meta.url).href;
    polish.dataset.deskPolish = 'true';
    document.head.appendChild(polish);
  }

  if (!document.querySelector('link[data-authoring-role]')) {
    const role = document.createElement('link');
    role.rel = 'stylesheet';
    role.href = new URL('./authoring-role.css?v=1', import.meta.url).href;
    role.dataset.authoringRole = 'true';
    document.head.appendChild(role);
  }
}

function hideAuthoringTools() {
  const start = $('startBookLink');
  const studio = $('newPublicationStudio');
  if (start) start.hidden = true;
  if (studio) studio.hidden = true;
}

function showAuthoringTools() {
  const start = $('startBookLink');
  const studio = $('newPublicationStudio');
  if (start) start.hidden = false;
  if (studio) studio.hidden = false;
}

function applyWorkspaceIdentity(policy) {
  document.title = policy.documentTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', policy.documentDescription);

  const brandEyebrow = document.querySelector('.desk-brand .eyebrow');
  if (brandEyebrow) brandEyebrow.textContent = policy.brandEyebrow;

  const home = document.querySelector('.desk-mark');
  if (home) home.setAttribute('aria-label', policy.homeLabel);

  const skip = document.querySelector('.skip-link');
  if (skip) skip.textContent = policy.skipLinkLabel;

  const footer = document.querySelector('.desk-footer p');
  if (footer) footer.textContent = policy.footerText;
}

function applyWorkspacePolicy(policy) {
  document.body.classList.toggle('desk-local-workspace', policy.localDesk);
  applyWorkspaceIdentity(policy);

  const hero = document.querySelector('.desk-hero');
  if (hero) hero.hidden = policy.hideLandingHero;

  const published = $('summaryPublished')?.closest('.summary-card');
  if (published) published.hidden = policy.hidePublishedSummary;

  const publishedFilter = document.querySelector('[data-filter="published"]');
  if (publishedFilter) publishedFilter.hidden = policy.hidePublishedFilter;

  const readyLabel = $('summaryReady')?.closest('.summary-card')?.querySelector('.summary-label');
  if (readyLabel) readyLabel.textContent = policy.readySummaryLabel;
}

function parseRepository(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;
  const github = raw.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  const pair = github ? `${github[1]}/${github[2]}` : raw.replace(/^https?:\/\//i, '');
  const match = pair.match(/^([^/\s]+)\/([^/\s]+)$/);
  return match ? { owner: match[1], repo: match[2].replace(/\.git$/i, '') } : null;
}

function remoteRepository() {
  return parseRepository(new URLSearchParams(location.search).get('repo'));
}

async function loadRemoteInspectionRole(repository = remoteRepository()) {
  if (!repository) return 'instance';

  try {
    const owner = encodeURIComponent(repository.owner);
    const repo = encodeURIComponent(repository.repo);
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/imprint.json`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) return 'instance';
    const payload = await response.json();
    if (payload?.encoding !== 'base64' || typeof payload.content !== 'string') return 'instance';
    const imprint = JSON.parse(atob(payload.content.replace(/\s+/g, '')));
    return String(imprint.role || 'instance').trim().toLowerCase() || 'instance';
  } catch {
    return 'instance';
  }
}

async function applyAuthoringBoundary(remoteInspection, repository = remoteRepository()) {
  const requestId = ++policyRequestSequence;
  if (remoteInspection) {
    hideAuthoringTools();
    const role = await loadRemoteInspectionRole(repository);
    if (requestId !== policyRequestSequence) return;
    applyWorkspacePolicy(authoringRolePolicy({ role, remoteInspection: true }));
    return;
  }

  try {
    const response = await fetch(new URL('../imprint.json', import.meta.url), { cache: 'no-store' });
    if (!response.ok) return;
    const imprint = await response.json();
    if (requestId !== policyRequestSequence) return;
    applyWorkspacePolicy(authoringRolePolicy({
      role: imprint.role,
      remoteInspection: false,
      identity: { owner: imprint.brandOwner || imprint.owner, name: imprint.name },
    }));
    if (String(imprint.role || '').trim().toLowerCase() === 'shelf') hideAuthoringTools();
    else showAuthoringTools();
  } catch {
    // This repository is itself a Desk. Keep the already-applied local policy
    // if role metadata is temporarily unavailable rather than flashing generic
    // platform controls back into view.
  }
}

function initialize() {
  installDeskPolish();
  const initialRemote = remoteRepository();
  const remoteInspection = Boolean(initialRemote);
  applyWorkspacePolicy(initialAuthoringRolePolicy({ remoteInspection }));

  $('repoForm')?.addEventListener('submit', () => {
    const repository = parseRepository($('repoInput')?.value);
    if (!repository) return;
    hideAuthoringTools();
    applyWorkspacePolicy(initialAuthoringRolePolicy({ remoteInspection: true }));
  });

  document.addEventListener('bookself:desk-workspace-loaded', (event) => {
    const detail = event.detail || {};
    policyRequestSequence += 1;
    const remote = detail.local === false;
    const imprint = detail.imprint || {};
    const role = String(detail.role || imprint.role || 'instance').trim().toLowerCase() || 'instance';
    applyWorkspacePolicy(authoringRolePolicy({
      role,
      remoteInspection: remote,
      identity: { owner: imprint.brandOwner || imprint.owner, name: imprint.name },
    }));
    if (remote || role === 'shelf') hideAuthoringTools();
    else showAuthoringTools();
  });

  document.addEventListener('bookself:desk-workspace-failed', () => {
    const committedRemote = remoteRepository();
    void applyAuthoringBoundary(Boolean(committedRemote), committedRemote);
  });

  void applyAuthoringBoundary(remoteInspection, initialRemote);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}
