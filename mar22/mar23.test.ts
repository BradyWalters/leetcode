import { titleToNumber } from "../feb22/feb22"
import { brokenCalc } from "./mar23"

test(`example 1`, () => {
    expect(brokenCalc(2, 3)).toBe(2)
})

test(`example 2`, () => {
    expect(brokenCalc(5, 8)).toBe(2)
})

test(`example 3`, () => {
    expect(brokenCalc(3, 10)).toBe(3)
})

test(`failed test 1`, () => {
    expect(brokenCalc(1024, 1)).toBe(1023)
})