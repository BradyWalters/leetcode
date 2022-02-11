const checkInclusion = require('./feb10')

test(`example 1`, () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true)
})

test(`example 2`, () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false)
})

test(`failed test 1`, () => {
    expect(checkInclusion("adc","dcda")).toBe(true)
})