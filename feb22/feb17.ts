/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 * 
 * Had to get help with this one, this very good post helped a ton https://leetcode.com/problems/combination-sum/discuss/16502/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)
 */

// @lc code=start
export function combinationSum(candidates: number[], target: number): number[][] {
    const combinations = Array<Array<number>>()

    backtrack(combinations, [], candidates, target, 0)

    return combinations
};

const backtrack = (combinations:number[][], current:number[], nums:number[], remain:number, start:number) => {
    if(remain < 0) return
    if(remain === 0) {
        combinations.push(current.map((x) => x))
    } else {
        for(let i = start; i < nums.length; i++) {
            current.push(nums[i])
            backtrack(combinations, current, nums, remain - nums[i], i)
            current.pop()
        }
    }
}
// @lc code=end
