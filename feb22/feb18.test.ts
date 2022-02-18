import { removeKdigits } from "./feb18";

test(`example 1`, () => {
    expect(removeKdigits("1432219", 3)).toBe("1219")
})

test(`example 2`, () => {
    expect(removeKdigits("10200", 1)).toBe("200")
})

test(`example 3`, () => {
    expect(removeKdigits("10", 2)).toBe("0")
})

test(`failed test 1`, () => {
    expect(removeKdigits("10", 1)).toBe("0")
})