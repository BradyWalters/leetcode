import { partitionLabels } from "./mar21"

test(`example 1`, () => {
    expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9,7,8])
})

test(`example 2`, () => {
    expect(partitionLabels("eccbbbbdec")).toEqual([10])
})

test(`failed test`, () => {
    expect(partitionLabels("caedbdedda")).toEqual([1,9])
})