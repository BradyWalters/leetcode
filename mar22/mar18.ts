export function removeDuplicateLetters(s: string): string {
    const charFreq = new Array(26)
    const charInStack = new Array(26)
    charFreq.fill(0)
    charInStack.fill(false)

    for(let i = 0; i < s.length; i++) {
        charFreq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    const stack:Array<string> = []

    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
        charFreq[index]--
        if(charInStack[index]) continue

        while(stack.length > 0 && c < stack[stack.length - 1] && charFreq[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] !== 0) {
            charInStack[stack.pop()!!.charCodeAt(0) - 'a'.charCodeAt(0)] = false
        }

        stack.push(c)
        charInStack[index] = true
    }

    let retVal = ""

    while(stack.length > 0) {
        retVal = stack.pop() + retVal
    }

    return retVal
};