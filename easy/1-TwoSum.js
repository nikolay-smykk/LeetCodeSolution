/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const prevMap = {} //val index

    for (let el in nums) {
        let diff = target - nums[el]
        if (diff in prevMap) {
            return [prevMap[diff], el]
        }
        prevMap[nums[el]] = el
    }
}
