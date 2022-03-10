import { addTwoNumbers } from "./mar10";
import { makeList } from "./mar7";

test(`example 1`, () => {
    const l1 = makeList([2,4,3])
    const l2 = makeList([5,6,4])
    const correctHead = makeList([7,0,8])

    expect(addTwoNumbers(l1, l2)).toEqual(correctHead)
})

test(`example 2`, () => {
    const head = makeList([0])

    expect(addTwoNumbers(head, head)).toEqual(head)
})

test(`example 3`, () => {
    expect(addTwoNumbers(makeList([9,9,9,9,9,9,9]), makeList([9,9,9,9]))).toEqual(makeList([8,9,9,9,0,0,0,1]))
})
