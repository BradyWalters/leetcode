function subarraySum(nums: number[], k: number): number {
    let sums = 0
    for(let i = 0; i < nums.length; i++) {
        let total = nums[i]
        
        for(let j = i + 1; j < nums.length; j++) {
            if(total === k) {
                sums++
            }

            total += nums[j]
        }

        if(total === k) {
            sums++
        }
    }

    return sums
};

module.exports = subarraySum