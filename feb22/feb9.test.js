const subarraySumb = require('./feb9')

test(`example 1`, () => {
    expect(subarraySumb([1,1,1], 2)).toBe(2)
})

test(`example 2`, () => {
    expect(subarraySumb([1,2,3], 3)).toBe(2)
})