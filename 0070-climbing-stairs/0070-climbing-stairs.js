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

    if (n === 1) return 1;
    if (n === 2) return 2;

    if (arr[n] !== undefined) {
        return arr[n];
    }

    let p1 = climbStairs(n - 1);
    let p2 = climbStairs(n - 2);

    arr[n] = p1 + p2;

    return p1 + p2;
};

let arr = new Array();