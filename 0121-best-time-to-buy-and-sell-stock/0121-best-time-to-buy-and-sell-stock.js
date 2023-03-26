/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxPrice = 0;

    for(p of prices) {
        min = Math.min(p, min);
        maxPrice = Math.max(maxPrice, p - min)
    }

    return maxPrice;
};