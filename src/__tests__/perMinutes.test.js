import {calls} from '../data/calls'
import {calculatePerMinutes} from '../functions'

describe("Per minutes", () => {
  test("Should return the 38", () => {
    expect(calculatePerMinutes(calls[0].value, 20)).toBe(38);
  });
});


