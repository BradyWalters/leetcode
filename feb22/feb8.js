//had to look at an answer for this one :(

function findPairs(nums, k) {
    const found = {}
    const dupes = {}
    let pairs = 0

    nums.forEach(n => {
        if(found[n]) {
            dupes[n] = true
        } else {
            found[n] = true
            if(found[n - k]) {
                pairs++
            }
            if(found[n + k]) {
                pairs++
            }
        }
    })

    if(k === 0) return Object.keys(dupes).length

    return pairs
};

module.exports = findPairs