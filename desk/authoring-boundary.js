import { authoringRolePolicy } from './authoring-role-policy.js';

import('./workspace-nav.js').catch((error) => {
  console.warn('Workspace navigation could not be loaded', error);
});

import('./cover-design.js').catch((error) => {
  console.warn('Cover design studio could not be loaded', error);
});

const $ = (id) => document.getElementById(id);

function installDeskPolish() {
  if (document.querySelector('link[data-desk-polish]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./desk-polish.css?v=3', import.meta.url).href;
  link.dataset.deskPolish = 'true';
  document.head.appendChild(link);
}

function hideAuthoringTools() {
  const start = $('startBookLink');
  const studio = $('newPublicationStudio');
  if (start) start.hidden = true;
  if (studio) studio.hidden = true;
}

function applyWorkspacePolicy(policy) {
  document.body.classList.toggle('desk-local-workspace', policy.localDesk);

  const hero = document.querySelector('.desk-hero');
  if (hero) hero.hidden = policy.hideLandingHero;

  const published = $('summaryPublished')?.closest('.summary-card');
  if (published) published.hidden = policy.hidePublishedSummary;

  const readyLabel = $('summaryReady')?.closest('.summary-card')?.querySelector('.summary-label');
  if (readyLabel) readyLabel.textContent = policy.readySummaryLabel;
}

async function applyAuthoringBoundary() {
  const remoteInspection = new URLSearchParams(location.search).has('repo');
  if (remoteInspection) {
    hideAuthoringTools();
    applyWorkspacePolicy(authoringRolePolicy({ role: 'instance', remoteInspection: true }));
    return;
  }

  try {
    const response = await fetch(new URL('../imprint.json', import.meta.url), { cache: 'no-store' });
    if (!response.ok) return;
    const imprint = await response.json();
    applyWorkspacePolicy(authoringRolePolicy({ role: imprint.role, remoteInspection: false }));
    if (imprint.role === 'shelf') hideAuthoringTools();
  } catch {
    // If role metadata is unavailable, preserve the existing generic Desk behavior.
  }
}

function initialize() {
  installDeskPolish();
  $('repoForm')?.addEventListener('submit', hideAuthoringTools);
  applyAuthoringBoundary();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}
