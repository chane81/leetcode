/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, hashMap = {}) {
    // hashMap 을 두어서 무한 순환이 되는 경우(같은 번호가 있을 경우)
    // false 로 return 하여 끝냄
    
    if (n === 1) {
        return true;
    }
    
    const arr = n.toString().split('');
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    };
    
    
    if (!hashMap[sum]) {
        hashMap[sum] = sum;   
    } else {
        return false
    }
    
    return isHappy(sum, hashMap);
    
};