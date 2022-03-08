import { hasCycle } from "./mar8";
import { makeList } from "./mar7";

test(`example 1`, () => {
    const head = makeList([3,2,0,-4])
    head.next!!.next!!.next!!.next = head

    expect(hasCycle(head)).toBe(true)
})

test(`example 2`, () => {
    const head = makeList([1,2])
    head.next!!.next = head

    expect(hasCycle(head)).toBe(true)
})

test(`example 3`, () => {
    const head = makeList([1])
    
    expect(hasCycle(head)).toBe(false)
})