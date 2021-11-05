export function maxProfit(prices: number[]): number {
  //j为1表示当前持有股票，0表示当前没有持有股票
  //k表示当前进行了k次交易机会
  //dp[i][j][k]表示截止至第i天的最大收益
  const dp: number[][][] = []
  const n = prices.length
  const c = 2
  for (let i = 0; i <= n; ++i) {
    dp[i] = [
      Array.from<number>({ length: c + 1 }).fill(-Infinity),
      Array.from<number>({ length: c + 1 }).fill(-Infinity),
    ]
  }

  dp[0][0][0] = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= 1; ++j) {
      for (let k = 0; k <= 2; ++k) {
        dp[i][j][k] = dp[i - 1][j][k]

        if (j === 0 && k > 0) {
          dp[i][0][k] = Math.max(
            dp[i - 1][0][k],
            dp[i - 1][1][k - 1] + prices[i - 1]
          )
        } else if (j === 1) {
          dp[i][1][k] = Math.max(
            dp[i - 1][1][k],
            dp[i - 1][0][k] - prices[i - 1]
          )
        }
      }
    }
  }

  let ans = -Infinity

  for (let i = 0; i <= c; ++i) {
    ans = Math.max(ans, dp[n][0][i])
  }

  return ans
}
