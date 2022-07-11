/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 각 4면에 해당하는 값을 가져오기
    // 1면(위): matrix shift
    // 2면(오른): matrix map pop
    // 3면(아래): matrix pop reverse
    // 4면(왼): matrix map shift
    
    /*
    1  2  3  4
    5  6  7  8
    9  10 11 12
    13 14 15 16
    */
     const result = []
    while(matrix.length) {
        result.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...(matrix.pop() ?? []).reverse(),
            ...matrix.map(a => a.shift()).reverse()   
        )
    }
    
    return result.filter(el => el != undefined)
};

