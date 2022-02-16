import { ListNode } from './feb16'
import { swapPairs } from './feb16'

const createList = (nums: Array<number>): ListNode => {
    const head = new ListNode(nums[0])
    let previous = head

    for(let i = 1; i < nums.length; i++) {
        const next = new ListNode(nums[i])
        previous.next = next
        previous = next
    }

    return head
}

test(`example 1`, () => {
    const head = createList([1,2,3,4])
    let test = swapPairs(head)
    const expected = [2,1,4,3]
    let i = 0
    
    while(test) {
        expect(test.val).toBe(expected[i])
        test = test.next
        i++
    }
})

test(`example 2`, () => {
    const head = null
    expect(swapPairs(head)?.val).toBe(undefined)
})

test(`example 3`, () => {
    const head = new ListNode(1)
    expect(swapPairs(head)?.val).toBe(1)
})

test(`failed test 1`, () => {
    const head = createList([2,5,3,4,6,2,2])
    let test = swapPairs(head)
    const expected = [5,2,4,3,2,6,2]
    let i = 0
    
    while(test) {
        expect(test.val).toBe(expected[i])
        test = test.next
        i++
    }
})