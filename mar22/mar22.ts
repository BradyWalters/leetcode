export function getSmallestString(n: number, k: number): string {
    if(k < n) return ""

    if(n === k) return "a".repeat(n)

    let currNumValue = n
    let index = n - 1
    let nonAorZ = 0

    while(currNumValue < k) {
        if(k - currNumValue > 25) {
            currNumValue += 25
            index--
        } else {
            nonAorZ = k - currNumValue
            currNumValue += nonAorZ
        }
    }

    return "a".repeat(index) + String.fromCharCode(nonAorZ + "a".charCodeAt(0)) + "z".repeat(n - index - 1)
};