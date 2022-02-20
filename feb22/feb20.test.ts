import { removeCoveredIntervals } from "./feb20";

test(`example 1 - 3 intervals, expects 2`, () => {
    expect(removeCoveredIntervals([[1,4],[3,6],[2,8]])).toBe(2)
})

test(`example 2 - 2 intervals, expects 1`, () => {
    expect(removeCoveredIntervals([[1,4],[2,3]])).toBe(1)
})

test(`failed test 1`, () => {
    expect(removeCoveredIntervals([[1,2],[1,4],[3,4]])).toBe(1)
})