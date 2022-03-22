import { getSmallestString } from "./mar22"

test(`smallest possible string`, () => {
    expect(getSmallestString(5, 5)).toBe("aaaaa")
})

test(`largest possible string`, () => {
    expect(getSmallestString(5, 130)).toBe("zzzzz")
})

test(`example 1`, () => {
    expect(getSmallestString(3, 27)).toBe("aay")
})

test(`example 2`, () => {
    expect(getSmallestString(5, 73)).toBe("aaszz")
})