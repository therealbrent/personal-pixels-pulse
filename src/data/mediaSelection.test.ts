import { describe, expect, test } from 'bun:test';
import { countSpeakingEngagements } from './mediaSelection';
import type { ThoughtLeadershipItem } from './thoughtLeadership';

const item = (overrides: Partial<ThoughtLeadershipItem>): ThoughtLeadershipItem => ({
  id: 'example', title: 'Example', type: 'presentation', date: '2026-06-01', ...overrides,
});

describe('completed speaking evidence', () => {
  test('excludes the upcoming November 2026 B2B Forum as of October 17', () => {
    expect(countSpeakingEngagements([item({ date: '2026-11-01' })], '2026-10-17')).toBe(0);
  });
  test('does not count written interviews or podcasts as talks or panels', () => {
    expect(countSpeakingEngagements([item({ type: 'interview' }), item({ type: 'podcast' })], '2026-10-17')).toBe(0);
  });
  test('counts each documented venue in bundled appearances', () => {
    expect(countSpeakingEngagements([item({ venue: ['Seattle', 'San Diego', 'Virtual', 'SDXD'] }), item({ type: 'panel' })], '2026-10-17')).toBe(5);
  });
  test('includes a talk on its scheduled date', () => {
    expect(countSpeakingEngagements([item({ date: '2026-10-17' })], '2026-10-17')).toBe(1);
  });
});