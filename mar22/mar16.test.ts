import { validateStackSequences } from "./mar16"

test(`example 1`, () => {
    expect(validateStackSequences([1,2,3,4,5], [4,5,3,2,1])).toBe(true)
})

test(`example 2`, () => {
    expect(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])).toBe(false)
})