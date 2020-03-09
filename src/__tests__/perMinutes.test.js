import { calls } from '../data/calls.json';
import { calculatePerMinutes } from '../functions';

describe('Per minutes calls fee:', () => {
  test('Should return 38 the call from 011 to 016', () => {
    expect(calculatePerMinutes(calls[0].value, 20)).toBe(38);
  });

  test('Should return 136 the call from 011 to 017', () => {
    expect(calculatePerMinutes(calls[2].value, 80)).toBe(136);
  });

  test('Should return 380 the call from 018 to 011', () => {
    expect(calculatePerMinutes(calls[5].value, 200)).toBe(380);
  });
});
