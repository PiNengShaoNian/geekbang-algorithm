export function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const n = nums.length
  const dp: number[][] = []

  for (let i = 0; i <= n; ++i) {
    dp[i] = [-Infinity, -Infinity]
  }

  //不抢劫1,可以抢劫n
  dp[1][0] = 0
  dp[1][1] = -Infinity

  for (let i = 2; i <= n; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + nums[i - 1])
  }

  let ans = Math.max(dp[n][0], dp[n][1])

  //抢劫1，不能抢劫n
  dp[1][0] = 0
  dp[1][1] = nums[0]

  for (let i = 2; i <= n; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = Math.max(dp[i - 1][0] + nums[i - 1], dp[i][1])
  }

  return Math.max(ans, dp[n][0])
}
