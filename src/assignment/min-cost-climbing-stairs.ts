export function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = []
  const n = cost.length
  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i <= n; ++i) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] ?? 0)
  }

  return dp[n]
}
