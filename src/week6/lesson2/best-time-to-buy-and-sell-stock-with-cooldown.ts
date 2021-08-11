export function maxProfit(prices: number[]): number {
  const days = prices.length
  const dp: number[][][] = []
  for (let i = 0; i <= days; ++i) {
    dp[i] = [
      [-Infinity, -Infinity],
      [-Infinity, -Infinity],
    ]
  }

  dp[0][0][0] = 0

  for (let i = 1; i <= days; ++i) {
    for (let j = 0; j <= 1; ++j) {
      for (let k = 0; k <= 1; ++k) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1])
        dp[i][1][0] = Math.max(dp[i][1][0], dp[i - 1][0][0] - prices[i - 1])
        dp[i][0][1] = Math.max(dp[i][0][1], dp[i - 1][1][0] + prices[i - 1])
      }
    }
  }

  return Math.max(dp[days][0][1], dp[days][0][0])
}
