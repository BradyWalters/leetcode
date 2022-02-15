const singleNumber = require('./feb15')

test(`example 1`, () => {
    expect(singleNumber([2,2,1])).toBe(1)
})

test(`example 2`, () => {
    expect(singleNumber([4,1,2,1,2])).toBe(4)
})

test(`example 3`, () => {
    expect(singleNumber([1])).toBe(1)
})