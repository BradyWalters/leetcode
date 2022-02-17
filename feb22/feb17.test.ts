import { combinationSum } from "./feb17";

test(`example 1`, () => {
    expect(combinationSum([2,3,6,7], 7)).toEqual([[2,2,3],[7]])
})

test(`example 2`, () => {
    expect(combinationSum([2,3,5], 8)).toEqual([[2,2,2,2],[2,3,3],[3,5]])
})

test(`example 3`, () => {
    expect(combinationSum([2], 1)).toEqual([])
})