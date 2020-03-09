import { calls, plans } from '../data/calls.json';
import { calculateWithPlan } from '../functions';

describe('Calls with FaleMais plans:', () => {
  test('with FaleMais30 should return 0 the call from 011 to 016', () => {
    expect(calculateWithPlan(calls[0].value, 20, plans[0].value)).toBe(0);
  });

  test('With FaleMais60 should return 37.40 the call from 011 to 017', () => {
    expect(calculateWithPlan(calls[2].value, 80, plans[1].value)).toBe(37.4);
  });

  test('With FaleMais120 should return 167.20 the call from 018 to 011', () => {
    expect(calculateWithPlan(calls[5].value, 200, plans[2].value)).toBe(167.2);
  });
});
