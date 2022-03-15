import { minRemoveToMakeValid } from "./mar15"

test(`example 1`, () => {
    expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de")
})

test(`example 2`, () => {
    expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d")
})

test(`example 3`, () => {
    expect(minRemoveToMakeValid("))((")).toBe("")
})

test(`too many open parentheses test`, () => {
    expect(minRemoveToMakeValid(")))t((u)")).toBe("t(u)")
})