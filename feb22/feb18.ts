/*
 * @lc app=leetcode id=402 lang=typescript
 *
 * [402] Remove K Digits
 */

// @lc code=start
export function removeKdigits(num: string, k: number): string {
    if(num.length - k < 1) {
        return "0"
    }

    let current = ""
    let index = -1

    while(current.length < num.length - k) {
        let smallest = '9'
        for(let i = index + 1; i <= num.length - (num.length - k - current.length); i++) {
            if(num.charCodeAt(i) < smallest.charCodeAt(0)) {
                smallest = num.charAt(i)
                index = i
            }
        }

        current += smallest
    }

    console.log(current)

    // S/O this Stack Overflow answer for this regular expression https://stackoverflow.com/questions/594325/input-field-value-remove-leading-zeros
    current = current.replace(/^[0]+/g,"")

    if(current === "") {
        return "0"
    }

    return current
};
// @lc code=end

