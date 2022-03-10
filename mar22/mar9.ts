import { ListNode } from "./mar7";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return null

    const fake = new ListNode()
    fake.next = head
    let firstPointer = fake
    let secondPointer:ListNode | null = head

    while(secondPointer) {
        while(secondPointer.next && secondPointer.val === secondPointer.next.val) {
            secondPointer = secondPointer.next
        }

        if(secondPointer == firstPointer.next) {
            firstPointer = firstPointer.next
        } else {
            firstPointer.next = secondPointer.next
        }

        secondPointer = secondPointer.next
    }

    return fake.next
};