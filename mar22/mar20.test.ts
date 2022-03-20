import { minDominoRotations } from "./mar20"

test(`example 1, one viable`, () => {
    expect(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])).toBe(2)
})

test(`example 2, viable candidate, but can't be done`, () => {
    expect(minDominoRotations([3,5,1,2,3], [3,6,3,3,4])).toBe(-1)
})
