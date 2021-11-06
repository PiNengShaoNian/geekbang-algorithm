export function maxProfit(k: number, prices: number[]): number {
  if (!prices.length) return 0

  // j为1代表当前持有股票，为0表示没有持有股票
  // k代表当前进行了几笔交易
  // dp[i][j][k]代表截止至第i天最大的收益
  const dp: number[][][] = []
  const n = prices.length
  for (let i = 0; i <= n; ++i) {
    dp[i] = [
      Array.from<number>({ length: k + 1 }).fill(-Infinity),
      Array.from<number>({ length: k + 1 }).fill(-Infinity),
    ]
  }

  const c = k
  dp[0][0][0] = 0
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= 1; ++j) {
      for (let k = 0; k <= c; ++k) {
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
