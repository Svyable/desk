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

const remoteDesk = authoringRolePolicy({ role: 'desk', remoteInspection: true });
equal(remoteDesk.localDesk, false);
equal(remoteDesk.hideLandingHero, false);
equal(remoteDesk.hidePublishedSummary, false);
equal(remoteDesk.hidePublishedFilter, false);
equal(remoteDesk.readySummaryLabel, 'Ready to publish');

const shelf = authoringRolePolicy({ role: 'shelf' });
equal(shelf.localDesk, false);
equal(shelf.hidePublishedSummary, false);
equal(shelf.hidePublishedFilter, false);
equal(shelf.readySummaryLabel, 'Ready to publish');

const normalized = authoringRolePolicy({ role: ' Desk ' });
equal(normalized.localDesk, true);
equal(normalized.readySummaryLabel, 'Ready to release');

const initialLocal = initialAuthoringRolePolicy();
equal(initialLocal.localDesk, true);
equal(initialLocal.hideLandingHero, true);
equal(initialLocal.hidePublishedSummary, true);
equal(initialLocal.readySummaryLabel, 'Ready to release');

const initialRemote = initialAuthoringRolePolicy({ remoteInspection: true });
equal(initialRemote.localDesk, false);
equal(initialRemote.hideLandingHero, false);

const boundary = fs.readFileSync(new URL('./authoring-boundary.js', import.meta.url), 'utf8');
const roleCss = fs.readFileSync(new URL('./authoring-role.css', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');

match(boundary, /authoringRolePolicy/);
match(boundary, /initialAuthoringRolePolicy/);
match(boundary, /applyWorkspacePolicy\(initialAuthoringRolePolicy\(\{ remoteInspection \}\)\)/);
match(boundary, /void applyAuthoringBoundary\(remoteInspection\)/);
match(boundary, /desk-local-workspace/);
match(boundary, /summaryPublished/);
match(boundary, /data-filter="published"/);
match(boundary, /summaryReady/);
match(boundary, /authoring-role\.css/);
match(roleCss, /repeat\(3, minmax\(0, 1fr\)\)/);
match(roleCss, /\.desk-local-workspace #startBookLink\s*\{[^}]*display:\s*none/s);
match(roleCss, /\.book-secondary-actions > summary/);
match(roleCss, /min-height:\s*2\.75rem/);
match(index, /id="summaryPublished"/);
match(index, /id="summaryReady"/);
match(index, /data-filter="published"/);
match(index, /<details class="book-secondary-actions">\s*<summary>More<\/summary>/s);
match(index, /book-secondary-links[\s\S]*folder-action[\s\S]*history-action/);
match(index, /preview-action[\s\S]*edit-action[\s\S]*book-secondary-actions/);

console.log(`Desk authoring role policy: ${assertions}/41 assertions passed`);
