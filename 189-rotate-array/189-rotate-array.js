/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = nums.length - k % nums.length;
    let arr = [...nums];
    
    for (let i = 0;i < nums.length; i++){
        if(k === nums.length){
            k = 0;
        }
        
        nums[i] = arr[k]
        k++;
    }
};