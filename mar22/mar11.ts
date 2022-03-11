import { ListNode } from "./mar7";

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head) return head
    
    let length = 0
    let pointer: ListNode | null = head

    while(pointer) {
        length++
        pointer = pointer.next
    }

    k = k % length
    let prev = head
    pointer = head

    while(k > 0) {
        k--
        pointer = pointer!!.next
    }

    while(pointer?.next) {
        prev = prev.next!!
        pointer = pointer.next
    }

    pointer!!.next = head
    head = prev.next
    prev.next = null

    return head
};