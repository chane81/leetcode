/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const stack = [];
    let res = 0;
    let cnt = 0;
    
    nums.forEach((v, idx) => {
        if (v === 1) {
            ++cnt;
            res = Math.max(res, cnt);
        } else {
            cnt = 0;
        }
    });
    
    return res;
};