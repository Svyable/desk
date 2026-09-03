import assert from 'node:assert/strict';
import fs from 'node:fs';
import { authoringRolePolicy } from './authoring-role-policy.js';

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

const boundary = fs.readFileSync(new URL('./authoring-boundary.js', import.meta.url), 'utf8');
const roleCss = fs.readFileSync(new URL('./authoring-role.css', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');

match(boundary, /authoringRolePolicy/);
match(boundary, /desk-local-workspace/);
match(boundary, /summaryPublished/);
match(boundary, /data-filter="published"/);
match(boundary, /summaryReady/);
match(boundary, /authoring-role\.css/);
match(roleCss, /repeat\(3, minmax\(0, 1fr\)\)/);
match(index, /id="summaryPublished"/);
match(index, /id="summaryReady"/);
match(index, /data-filter="published"/);

console.log(`Desk authoring role policy: ${assertions}/26 assertions passed`);
