//自己解题
export function maxProfit(prices: number[]): number {
  //j为1代表当前持有股票，j为0代表没有持有股票
  //k为1表示代表当前处于冷冻期，k为0代表当前未处于冷冻期
  //dp[i][j][k]代表截止至第1天的最大收益
  const dp: number[][][] = []
  const n = prices.length
  for (let i = 0; i <= n; ++i) {
    dp[i] = [
      [-Infinity, -Infinity],
      [-Infinity, -Infinity],
    ]
  }

  dp[0][0][0] = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= 1; ++j) {
      for (let k = 0; k <= 1; ++k) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1])
        if (j === 0) {
          //冷冻期，说明今天把股票卖出了
          if (k === 1) {
            dp[i][0][1] = Math.max(dp[i - 1][1][0] + prices[i - 1], dp[i][0][1])
          } else {
            dp[i][0][0] = Math.max(
              //今天啥也不干
              dp[i - 1][0][0],
              //前天卖出了股票
              dp[i - 1][0][1]
            )
          }
        } else {
          dp[i][1][0] = Math.max(dp[i][1][0], dp[i - 1][0][0] - prices[i - 1])
        }
      }
    }
  }

  return Math.max(dp[n][0][0], dp[n][0][1])
}


//只用写出可达状态做法
export function maxProfit1(prices: number[]): number {
  //j为1代表当前持有股票，j为0代表没有持有股票
  //k为1表示代表当前处于冷冻期，k为0代表当前未处于冷冻期
  //dp[i][j][k]代表截止至第1天的最大收益
  const dp: number[][][] = []
  const n = prices.length
  for (let i = 0; i <= n; ++i) {
    dp[i] = [
      [-Infinity, -Infinity],
      [-Infinity, -Infinity],
    ]
  }

  dp[0][0][0] = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= 1; ++j) {
      for (let k = 0; k <= 1; ++k) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1])
        dp[i][1][0] = Math.max(dp[i][1][0], dp[i - 1][0][0] - prices[i - 1])
        dp[i][0][1] = Math.max(dp[i][0][1], dp[i - 1][1][0] + prices[i - 1])
      }
    }
  }

  return Math.max(dp[n][0][0], dp[n][0][1])
}
