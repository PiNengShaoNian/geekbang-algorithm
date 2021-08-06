export function maxSubArray(nums: number[]): number {
  const n = nums.length
  const dp: number[] = Array.from({ length: n })
  dp[0] = nums[0]
  let prev = nums[0]
  let ans = prev
  for (let i = 1; i < n; ++i) {
    prev = Math.max(nums[i], prev + nums[i])
    ans = Math.max(ans, prev)
  }

  return ans
}
