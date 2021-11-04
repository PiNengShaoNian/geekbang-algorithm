export function maxProfit(prices: number[]): number {
  //j为0代表没有持有股票，j为1代表持有一支股票
  //dp[i][j]代表截止至第i天的最大收益
  const dp: number[][] = []

  for (let i = 0; i < prices.length; ++i) {
    dp[i] = []
  }

  dp[0][1] = -prices[0]
  dp[0][0] = 0

  for (let i = 1; i < prices.length; ++i) {
    dp[i][1] = Math.max(
      //买入股票
      dp[i - 1][0] - prices[i],
      //不卖股票
      dp[i - 1][1]
    )
    dp[i][0] = Math.max(
      //卖出
      dp[i - 1][1] + prices[i],
      //不买入
      dp[i - 1][0]
    )
  }

  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])
}
