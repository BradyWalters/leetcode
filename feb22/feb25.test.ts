import { compareVersion } from "./feb25";

test(`example 1 - 1.01, 1.001 -> 0`, () => {
    expect(compareVersion("1.01", "1.001")).toBe(0)
})

test(`example 2 - 1.0, 1.0.0 -> 0`, () => {
    expect(compareVersion("1.0", "1.0.0")).toBe(0)
})

test(`example 3 - 0.1, 1.1 -> -1`, () => {
    expect(compareVersion("0.1", "1.1")).toBe(-1)
})