export function majorityElement(nums: number[]): number {
    // first attempt, pretty slow but super easy
    // nums.sort()
    // return nums[Math.floor(nums.length/2)]

    //second attempt, I *think* this is linear, but it definitely was faster
    const map = new Map()

    for(let i = 0; i < nums.length; i++) {
        let curVal = map.get(nums[i])
        if(curVal === undefined) {
            curVal = 0
        }

        if(curVal + 1 > Math.floor(nums.length / 2)) {
            return nums[i]
        }

        map.set(nums[i], curVal + 1)
    }

    return -1
};