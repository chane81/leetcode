/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let obj = [];
    
    for(let i = 0; i < nums.length; i++) {
        obj.push(Math.pow(nums[i], 2));
    }
    
    return obj.sort((a, b) => a - b);
};