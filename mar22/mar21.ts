export function partitionLabels(s: string): number[] {
    const results = []
    let lastIndex = new Map()

    for(let i = 0; i < s.length; i++) {
        lastIndex.set(s.charAt(i), i)
    }

    let startIndex = 0
    let endIndex = 0
    let current = 0

    while(current < s.length) {
        endIndex = Math.max(endIndex, lastIndex.get(s.charAt(current)))
        if(endIndex === s.length - 1) {
            results.push(endIndex - startIndex + 1)
            break
        } else if(current === endIndex) {
            results.push(endIndex - startIndex + 1)
            startIndex = current + 1
        }
        current++
    }

    return results
};