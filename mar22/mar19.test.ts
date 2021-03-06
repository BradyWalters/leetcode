import { FreqStack } from "./mar19";

test(`example 1`, () => {
    const freqStack = new FreqStack()
    freqStack.push(5)
    freqStack.push(7)
    freqStack.push(5)
    freqStack.push(7)
    freqStack.push(4)
    freqStack.push(5)
    expect(freqStack.pop()).toBe(5)
    expect(freqStack.pop()).toBe(7)
    expect(freqStack.pop()).toBe(5)
    expect(freqStack.pop()).toBe(4)
})