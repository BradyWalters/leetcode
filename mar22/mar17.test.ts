import { scoreOfParentheses } from "./mar17"

test(`example 1`, () => {
    expect(scoreOfParentheses("()")).toBe(1)
})

test(`example 2`, () => {
    expect(scoreOfParentheses("(())")).toBe(2)
})

test(`example 3`, () => {
    expect(scoreOfParentheses("()()")).toBe(2)
})

test(`non power of 2 example`, () => {
    expect(scoreOfParentheses("(()(()))")).toBe(6)
})