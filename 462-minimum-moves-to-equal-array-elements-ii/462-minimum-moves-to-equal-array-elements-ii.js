/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const len = nums.length;
    
    const arrCalc = [];
    let stNum;
    
    for(let i = 0; i < len; i++) {
        stNum = nums[i];
        let calc = 0;
        
        for (let j = 0; j < len; j++) {
            if (stNum !== nums[j]) {
                calc += Math.abs(stNum - nums[j]);
            }
        }
        
        arrCalc.push(calc);
    }

    return arrCalc.sort((a, b) => a - b)[0];
};