import assert from 'node:assert/strict';
import { authoringRolePolicy } from './authoring-role-policy.js';

let assertions = 0;
const equal = (...args) => {
  assertions += 1;
  assert.equal(...args);
};

const desk = authoringRolePolicy({ role: 'desk' });
equal(desk.localDesk, true);
equal(desk.hideLandingHero, true);
equal(desk.hidePublishedSummary, true);
equal(desk.readySummaryLabel, 'Ready to release');

const remoteDesk = authoringRolePolicy({ role: 'desk', remoteInspection: true });
equal(remoteDesk.localDesk, false);
equal(remoteDesk.hideLandingHero, false);
equal(remoteDesk.hidePublishedSummary, false);
equal(remoteDesk.readySummaryLabel, 'Ready to publish');

const shelf = authoringRolePolicy({ role: 'shelf' });
equal(shelf.localDesk, false);
equal(shelf.hidePublishedSummary, false);
equal(shelf.readySummaryLabel, 'Ready to publish');

const normalized = authoringRolePolicy({ role: ' Desk ' });
equal(normalized.localDesk, true);
equal(normalized.readySummaryLabel, 'Ready to release');

console.log(`Desk authoring role policy: ${assertions}/13 assertions passed`);
