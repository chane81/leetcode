/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // rows 갯수 구하기
    // cols 갯수 구하기
    // 0부터 cols length까지 진행
    // cols length 에 도달하면 rows length 까지 진행
    
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

