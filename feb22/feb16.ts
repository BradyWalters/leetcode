/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) {
        return head
    }

    let first = head
    let second = head?.next
    head = second
    let last = first
    let next = swap(first, second)

    while(next) {
        last.next = next.next
        last = next
        next = swap(next, next.next)
    }

    return head
};

const swap = (first: ListNode | null, second: ListNode | null): ListNode | null => {
    if(!first || !second) {
        return null
    }

    const next = second.next
    second.next = first
    first.next = next

    if(next?.next) {
        return next
    }

    return null
}