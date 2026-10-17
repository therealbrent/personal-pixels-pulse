import { describe, it as test } from 'node:test';
import { strict as assert } from 'node:assert';
import { countSpeakingEngagements } from '../src/data/mediaSelection';
import type { ThoughtLeadershipItem } from '../src/data/thoughtLeadership';

const item = (overrides: Partial<ThoughtLeadershipItem>): ThoughtLeadershipItem => ({
  id: 'example', title: 'Example', type: 'presentation', date: '2026-06-01', ...overrides,
});

describe('completed speaking evidence', () => {
  test('excludes the upcoming November 2026 B2B Forum as of October 17', () => {
    assert.equal(countSpeakingEngagements([item({ date: '2026-11-01' })], '2026-10-17'), 0);
  });
  test('does not count written interviews or podcasts as talks or panels', () => {
    assert.equal(countSpeakingEngagements([item({ type: 'interview' }), item({ type: 'podcast' })], '2026-10-17'), 0);
  });
  test('counts each documented venue in bundled appearances', () => {
    assert.equal(countSpeakingEngagements([item({ venue: ['Seattle', 'San Diego', 'Virtual', 'SDXD'] }), item({ type: 'panel' })], '2026-10-17'), 5);
  });
  test('includes a talk on its scheduled date', () => {
    assert.equal(countSpeakingEngagements([item({ date: '2026-10-17' })], '2026-10-17'), 1);
  });
});