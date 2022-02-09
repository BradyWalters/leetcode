const findSums = require('./feb8')

test(`example 1`, () => {
    expect(findSums([3,1,4,1,5], 2)).toBe(2)
})

test(`example 2`, () => {
    expect(findSums([1,2,3,4,5], 1)).toBe(4)
})

test(`example 3`, () => {
    expect(findSums([1,3,1,5,4], 0)).toBe(1)
})

test(`failed test 1`, () => {
    expect(findSums([6,3,5,7,2,3,3,8,2,4], 2)).toBe(5)
})