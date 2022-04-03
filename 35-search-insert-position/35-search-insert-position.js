/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;
    
    if (target > nums[len - 1]) return len;
    
    for (let i = 0; i < len; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    
};