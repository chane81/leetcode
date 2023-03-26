/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 1 - 1
    // 2 - 2
    // 3 - 3
    // 4 - 5
    // 5 - 8

    // s = f(n - 1) + f(n - 2)

    // console.log('n', n, arr[n]);

    // if (n === 1) return 1;
    // if (n === 2) return 2;

    // if (arr[n] !== undefined) {
    //     return arr[n];
    // }

    // let p1 = climbStairs(n - 1);
    // let p2 = climbStairs(n - 2);

    // arr[n] = p1 + p2;

    // return p1 + p2;
    
    
    
    
    const a = [];
    a[1] = 1;
    a[2] = 2;
    a[3] = 3;
    
    // answer == k(n - 1) + k(n - 2)
    
    let answer = 0;
    for(let i = 3; i <= n; i++) {
        a[i] = a[i - 1] + a[i - 2];
    }
    
    return a[n];
};
