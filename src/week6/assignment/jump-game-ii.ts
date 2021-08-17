export function jump(nums: number[]): number {
  const n = nums.length
  const dp: number[] = Array.from<number>({ length: n }).fill(Infinity)

  dp[0] = 0
  for (let i = 0; i <= n; ++i) {
    const x = nums[i]

    for (let j = 1; j <= x; ++j) {
      if (i + j >= n - 1) {
        dp[n - 1] = Math.min(dp[i] + 1, dp[n - 1])
        break
      }

      dp[i + j] = Math.min(dp[i + j], dp[i] + 1)
    }
  }

  return dp[n - 1]
}
