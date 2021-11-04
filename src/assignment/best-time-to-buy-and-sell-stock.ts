export function maxProfit(prices: number[]): number {
  let ans = 0
  let lowestPrice = prices[0]

  for (let i = 1; i < prices.length; ++i) {
    ans = Math.max(ans, prices[i] - lowestPrice)
    lowestPrice = Math.min(lowestPrice, prices[i])
  }

  return ans
}
