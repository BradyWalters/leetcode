import { makeList } from "./mar7";
import { mergeTwoLists } from "./mar7";

test(`makeList test`, () => {
    const head = makeList([1,2,3,4])

    expect(head.val).toBe(1)
    expect(head.next?.val).toBe(2)
    expect(head.next?.next?.val).toBe(3)
    expect(head.next?.next?.next?.val).toBe(4)
})

test(`example 1`, () => {
    const head1 = makeList([1,2,4])
    const head2 = makeList([1,3,4])
    const sortedHead = mergeTwoLists(head1, head2)
    const correctHead = makeList([1,1,2,3,4,4])
    expect(sortedHead).toEqual(correctHead)
})

test(`example 2`, () => {
    expect(mergeTwoLists(null, null)).toEqual(null)
})

test(`example 3`, () => {
    const head = makeList([0])
    const sortedHead = mergeTwoLists(null, head)
    expect(sortedHead).toEqual(head)
})

test(`two sorted lists, no shared numbers`, () => {
    const head1 = makeList([5])
    const head2 = makeList([1,2,4])
    const sortedHead = mergeTwoLists(head1, head2)
    const correctHead = makeList([1,2,4,5])
    expect(sortedHead).toEqual(correctHead) 
})