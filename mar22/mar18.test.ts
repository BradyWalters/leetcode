import { removeDuplicateLetters } from "./mar18";

test(`example 1`, () => {
    expect(removeDuplicateLetters("bcabc")).toBe("abc")
})

test(`example 2`, () => {
    expect(removeDuplicateLetters("cbacdcbc")).toBe("acdb")
})

test(`failed test 1`, () => {
    expect(removeDuplicateLetters("abacb")).toBe("abc")
})