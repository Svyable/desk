import assert from 'node:assert/strict';
import fs from 'node:fs';
import { authoringRolePolicy, initialAuthoringRolePolicy } from './authoring-role-policy.js';

let assertions = 0;
const equal = (...args) => {
  assertions += 1;
  assert.equal(...args);
};
const match = (...args) => {
  assertions += 1;
  assert.match(...args);
};

const desk = authoringRolePolicy({ role: 'desk' });
equal(desk.localDesk, true);
equal(desk.hideLandingHero, true);
equal(desk.hidePublishedSummary, true);
equal(desk.hidePublishedFilter, true);
equal(desk.readySummaryLabel, 'Ready to release');
equal(desk.documentTitle, 'Publishing Desk · Sven Hardy Benson');
equal(desk.documentDescription, 'Sven Hardy Benson’s Desk is the local-first authoring workspace for working manuscripts before deliberate release.');
equal(desk.brandEyebrow, 'Sven Hardy Benson');
equal(desk.homeLabel, 'Sven Hardy Benson home');
equal(desk.skipLinkLabel, 'Skip to publishing workspace');
equal(desk.footerText, 'Sven Hardy Benson’s Desk reads repository content only. Manuscript edits still happen through normal Git commits and pull requests.');

const remoteDesk = authoringRolePolicy({ role: 'desk', remoteInspection: true });
equal(remoteDesk.localDesk, false);
equal(remoteDesk.hideLandingHero, false);
equal(remoteDesk.hidePublishedSummary, false);
equal(remoteDesk.hidePublishedFilter, false);
equal(remoteDesk.readySummaryLabel, 'Ready to publish');
equal(remoteDesk.documentTitle, 'Publishing Desk · Bookself');
equal(remoteDesk.documentDescription, 'A Git-native publishing desk for Bookself authors and editors.');
equal(remoteDesk.brandEyebrow, 'Bookself');
equal(remoteDesk.homeLabel, 'Bookself home');
equal(remoteDesk.skipLinkLabel, 'Skip to manuscripts');
match(remoteDesk.footerText, /^Bookself Publishing Desk /);

const shelf = authoringRolePolicy({ role: 'shelf' });
equal(shelf.localDesk, false);
equal(shelf.hidePublishedSummary, false);
equal(shelf.hidePublishedFilter, false);
equal(shelf.readySummaryLabel, 'Ready to publish');
equal(shelf.brandEyebrow, 'Bookself');

const normalized = authoringRolePolicy({ role: ' Desk ' });
equal(normalized.localDesk, true);
equal(normalized.readySummaryLabel, 'Ready to release');

const customIdentity = authoringRolePolicy({
  role: 'desk',
  identity: { owner: 'Example Press', name: 'Example Working Desk' },
});
equal(customIdentity.documentTitle, 'Publishing Desk · Example Press');
equal(customIdentity.brandEyebrow, 'Example Press');
equal(customIdentity.homeLabel, 'Example Press home');
equal(customIdentity.documentDescription, 'Example Working Desk is the local-first authoring workspace for working manuscripts before deliberate release.');
match(customIdentity.footerText, /^Example Working Desk reads repository content only\./);

const initialLocal = initialAuthoringRolePolicy();
equal(initialLocal.localDesk, true);
equal(initialLocal.hideLandingHero, true);
equal(initialLocal.hidePublishedSummary, true);
equal(initialLocal.readySummaryLabel, 'Ready to release');
equal(initialLocal.documentTitle, 'Publishing Desk · Sven Hardy Benson');
equal(initialLocal.brandEyebrow, 'Sven Hardy Benson');

const initialRemote = initialAuthoringRolePolicy({ remoteInspection: true });
equal(initialRemote.localDesk, false);
equal(initialRemote.hideLandingHero, false);
equal(initialRemote.documentTitle, 'Publishing Desk · Bookself');
equal(initialRemote.brandEyebrow, 'Bookself');

const boundary = fs.readFileSync(new URL('./authoring-boundary.js', import.meta.url), 'utf8');
const roleCss = fs.readFileSync(new URL('./authoring-role.css', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const imprint = JSON.parse(fs.readFileSync(new URL('../imprint.json', import.meta.url), 'utf8'));

equal(imprint.brandOwner, 'Sven Hardy Benson');
equal(imprint.owner, 'Svyable');
match(boundary, /authoringRolePolicy/);
match(boundary, /initialAuthoringRolePolicy/);
match(boundary, /applyWorkspacePolicy\(initialAuthoringRolePolicy\(\{ remoteInspection \}\)\)/);
match(boundary, /void applyAuthoringBoundary\(remoteInspection\)/);
match(boundary, /desk-local-workspace/);
match(boundary, /summaryPublished/);
match(boundary, /data-filter="published"/);
match(boundary, /summaryReady/);
match(boundary, /authoring-role\.css/);
match(boundary, /function applyWorkspaceIdentity\(policy\)/);
match(boundary, /document\.title = policy\.documentTitle/);
match(boundary, /meta\[name="description"\]/);
match(boundary, /\.desk-brand \.eyebrow/);
match(boundary, /\.desk-mark/);
match(boundary, /\.skip-link/);
match(boundary, /\.desk-footer p/);
match(boundary, /identity: \{ owner: imprint\.brandOwner \|\| imprint\.owner, name: imprint\.name \}/);

match(roleCss, /repeat\(3, minmax\(0, 1fr\)\)/);
match(roleCss, /\.desk-local-workspace #startBookLink\s*\{[^}]*display:\s*none/s);
match(roleCss, /\.book-secondary-actions > summary/);
match(roleCss, /min-height:\s*2\.75rem/);
match(index, /<title>Publishing Desk · Bookself<\/title>/);
match(index, /aria-label="Bookself home"/);
match(index, /id="summaryPublished"/);
match(index, /id="summaryReady"/);
match(index, /data-filter="published"/);
match(index, /<details class="book-secondary-actions">\s*<summary>More<\/summary>/s);
match(index, /book-secondary-links[\s\S]*folder-action[\s\S]*history-action/);
match(index, /preview-action[\s\S]*edit-action[\s\S]*book-secondary-actions/);

console.log(`Desk authoring role policy: ${assertions} assertions passed`);
