import {calls} from '../data/calls'
import {calculatePerMinutes} from '../functions'

describe("Per minutes calls fee:", () => {
  test("Should return 38", () => {
    expect(calculatePerMinutes(calls[0].value, 20)).toBe(38)
  });

  test("Should return 136", () => {
    expect(calculatePerMinutes(calls[2].value, 80)).toBe(136)
  })
  
  test("Should return 380", () => {
    expect(calculatePerMinutes(calls[5].value, 200)).toBe(380)
  })
})


