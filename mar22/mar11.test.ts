import { rotateRight } from "./mar11";
import { makeList } from "./mar7";

test(`example 1`, () => {
    const head = makeList([1,2,3,4,5])
    const correctHead = makeList([4,5,1,2,3])

    expect(rotateRight(head, 2)).toEqual(correctHead)
})

test(`example 2`, () => {
    const head = makeList([0,1,2])
    const correctHead = makeList([2,0,1])

    expect(rotateRight(head, 4)).toEqual(correctHead)
})