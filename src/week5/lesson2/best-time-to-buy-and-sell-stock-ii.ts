export function maxProfit(prices: number[]): number {
  let ans = 0
  let isHold = -1
  const n = prices.length

  for (let i = 0; i < n - 1; ++i) {
    if (isHold === -1 && prices[i] <= prices[i + 1]) {
      isHold = prices[i]

      if (i + 1 === n - 1) {
        ans += prices[i + 1] - isHold
      }
    } else if (isHold !== -1 && prices[i] > prices[i + 1]) {
      ans += prices[i] - isHold
      isHold = -1
    } else if (isHold !== -1 && i + 1 === n - 1 && prices[i + 1] >= prices[i]) {
      ans += prices[i + 1] - isHold
    }
  }

  return ans
}

//动态规划
export function maxProfit1(prices: number[]): number {
  const n = prices.length
  const dp: number[][] = Array.from({ length: n })
  for (let i = 0; i < n; ++i) {
    dp[i] = []
  }

  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return Math.max(dp[n - 1][0], dp[n - 1][1])
}
