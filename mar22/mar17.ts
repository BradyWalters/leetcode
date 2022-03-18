// example 1: "()"
// example 2: "(())"
// example 3: "()()"

export function scoreOfParentheses(s: string): number {
    const stack:Array<number> = []
    let score = 0

    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '(') {
            stack.push(-1)
        } else {
            let current = 0
            while(stack[stack.length - 1] !== -1) {
                current += stack.pop()!!
            }
            stack.pop()
            stack.push(current === 0 ? 1 : current * 2)
        }
    }

    while(stack.length > 0) {
        score += stack.pop()!!
    }

    return score
};