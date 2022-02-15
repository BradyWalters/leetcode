/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    const map = new Map()

    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    console.log(map)

    for(const [key, value] of map.entries()) {
        if(value === 1) {
            return key
        }
    }

    return -1
};
// @lc code=end

module.exports = singleNumber