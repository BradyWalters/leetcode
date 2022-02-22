import { titleToNumber } from "./feb22";

test(`example 1 - A -> 1`, () => {
    expect(titleToNumber("A")).toBe(1)
})

test(`example 2 - AB -> 2`, () => {
    expect(titleToNumber("AB")).toBe(28)
})

test(`example 3 - ZY -> 701`, () => {
    expect(titleToNumber("ZY")).toBe(701)
})