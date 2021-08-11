export function rob(nums: number[]): number {
  const n = nums.length
  const dp: number[][] = []

  for (let i = 0; i <= n; ++i) {
    dp[i] = [-Infinity, -Infinity]
  }

  dp[0][0] = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= 1; ++j) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])

      dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + nums[i - 1])
    }
  }

  return Math.max(dp[n][1], dp[n][0])
}
