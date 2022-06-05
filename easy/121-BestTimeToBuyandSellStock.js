/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0
    if (prices.length === 1) return 0
    let res = 0
    let r = 1 // sell
    let l = 0 // buy

    for (let i = 0; i < prices.length; i++) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]
            res = Math.max(res, profit)
        } else {
            l = r
        }

        r += 1
    }
    return res
}
