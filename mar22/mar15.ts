export function minRemoveToMakeValid(s: string): string {
    let stack = []

    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '(') {
            stack.push('(')
        } else if(s.charAt(i) === ')') {
            if(stack.length === 0) {
                s = s.substring(0, i) + s.substring(i+1)
                i--
            } else {
                stack.pop()
            }
        }
    }

    stack = []

    for(let i = s.length - 1; i >= 0; i--) {
        if(s.charAt(i) === ')') {
            stack.push(')')
        } else if(s.charAt(i) === '(') {
            if(stack.length === 0) {
                s = s.substring(0, i) + s.substring(i+1)
            } else {
                stack.pop()
            }
        }
    }

    return s
};