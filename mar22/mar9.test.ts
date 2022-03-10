import { ListNode } from "./mar7";
import { deleteDuplicates } from "./mar9";
import { makeList } from "./mar7"

test(`example 1`, () => {
    const head = deleteDuplicates(makeList([1,2,3,3,4,4,5]))
    const correctHead = makeList([1,2,5])

    expect(head).toEqual(correctHead)
})

test(`example 2`, () => {
    const head = deleteDuplicates(makeList([1,1,1,2,3]))
    const correctHead = makeList([2,3])

    expect(head).toEqual(correctHead)
})