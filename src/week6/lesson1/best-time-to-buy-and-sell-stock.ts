export function maxProfit(prices: number[]): number {
  const rightMax = []
  const n = prices.length
  rightMax[n - 1] = prices[n - 1]
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(prices[i], rightMax[i + 1])
  }

  let ans = 0

  for (let i = 0; i < prices.length; ++i) {
    ans = Math.max(ans, rightMax[i] - prices[i])
  }

  return ans
}

export function maxProfit1(prices: number[]): number {
  if (prices.length <= 1) return 0

  let min = prices[0]
  let max = 0

  for (let i = 0; i < prices.length; ++i) {
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }

  return max
}
