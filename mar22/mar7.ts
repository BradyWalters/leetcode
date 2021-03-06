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

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1 && !list2) return null
    if(!list2) return list1
    if(!list1) return list2

    if(list1.val > list2.val) {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    } else {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
};

export const makeList = (arr: Array<number> | null): ListNode => {
    if(!arr) return new ListNode()

    const head = new ListNode(arr[0])
    let prevNode = head
    for(let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i])
        prevNode.next = newNode
        prevNode = newNode
    }

    return head
}