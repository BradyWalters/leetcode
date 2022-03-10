import { ListNode } from "./mar7";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1 && !l2) return null
    if(!l2) return l1
    if(!l1) return l2

    let prev = new ListNode(0)
    const head = prev
    let carry = 0

    while(l1 || l2 || carry != 0) {
        const cur = new ListNode(0)
        const sum = (l2 ? l2.val : 0) + (l1 ? l1.val : 0) + carry
        cur.val = sum % 10
        carry = Math.floor(sum / 10)
        prev.next = cur
        prev = cur

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }

    return head.next
};