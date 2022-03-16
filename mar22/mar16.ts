export function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack = []

    while(pushed.length !== 0) {
        if(stack.length !== 0 && stack[stack.length - 1] === popped[0]) {
            stack.pop()
            popped.shift()
        } else {
            stack.push(pushed.shift())
        }
    }

    while(stack.length !== 0) {
        if(stack[stack.length - 1] !== popped[0]) {
            return false
        } else {
            stack.pop()
            popped.shift()
        }
    }

    return true
};