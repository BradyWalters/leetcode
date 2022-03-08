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

import { ListNode } from "./mar7"

export function hasCycle(head: ListNode | null): boolean {
    if(!head) return false

    let slowPointer = head
    let fastPointer = head

    while(fastPointer.next != null && fastPointer.next.next != null) {
        slowPointer = slowPointer.next!!
        fastPointer = fastPointer.next.next

        if(slowPointer == fastPointer) {
            return true
        }
    }

    return false
};