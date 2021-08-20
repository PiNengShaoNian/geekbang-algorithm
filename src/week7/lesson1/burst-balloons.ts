export function maxCoins(nums: number[]): number {
  const n = nums.length
  nums.unshift(1)
  nums.push(1)

  const dp: number[][] = []

  for (let i = 0; i <= n; ++i) {
    dp[i] = Array.from<number>({ length: n + 1 }).fill(-1)
  }

  const dfs = (l: number, r: number): number => {
    if (l > r) return 0

    if (dp[l][r] > 0) return dp[l][r]

    dp[l][r] = 0
    for (let i = l; i <= r; ++i) {
      dp[l][r] = Math.max(
        dp[l][r],
        dfs(l, i - 1) + dfs(i + 1, r) + nums[i] * nums[l - 1] * nums[r + 1]
      )
    }
    return dp[l][r]
  }

  return dfs(1, n)
}
