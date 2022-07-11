/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, hashMap = {}) {
    // 1. input num을 toString() 변환
    // 2. for 문으로 각 숫자를 돌면서 제곱 구해서 sum
    // 3. sum 한 값을 재귀호출
    // 4. 만약 sum 한 값이 1
    
    // 1111111
    // 1 + 1 + 1 + 1 + 1 + 1 + 1 = 7
    // 49
    // 16 + 81 = 97
    // 81 + 49 = 140
    // 1 + 16 + 0 = 17
    // 1 + 49 = 50
    // 25 + 0 = 25
    // 4 + 25 = 29
    // 4 + 81 = 85
    // 64 + 25 = 89
    // 64 + 81 = 145
    
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