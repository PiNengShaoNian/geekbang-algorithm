export function maxProfit(prices: number[], fee: number): number {
  const n = prices.length
  const dp: number[][] = []
  for (let i = 0; i <= n; ++i) {
    dp[i] = [-Infinity, -Infinity]
  }

  dp[0][0] = 0

  for (let i = 1; i <= n; ++i) {
    dp[i][0] = dp[i - 1][0]
    dp[i][1] = dp[i - 1][1]
    dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + prices[i - 1] - fee)
    dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] - prices[i - 1])
  }

  return dp[n][0]
}
