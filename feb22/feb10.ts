function checkInclusion(s1: string, s2: string): boolean {
    const len1 = s1.length
    const len2 = s2.length

    const charArr = Array.apply(null, Array(26)).map(i => 0)

    for(let i = 0; i < len1; i++) {
        charArr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        charArr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }

    if(allZeros(charArr)) return true

    for(let i = len1; i < len2; i++) {
        charArr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
        charArr[s2.charCodeAt(i - len1) - 'a'.charCodeAt(0)]++
        if(allZeros(charArr)) return true
    }

    return false
};

function allZeros(arr: Array<number>): boolean {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != 0) {
            return false
        }
    }

    return true
}

module.exports = checkInclusion