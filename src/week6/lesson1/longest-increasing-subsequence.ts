export function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  const dp = Array.from<number>({ length: n }).fill(1)

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  let ans = dp[0]

  for (let i = 1; i < dp.length; ++i) {
    ans = Math.max(ans, dp[i])
  }

  return ans
}
