export function maxSubArray(nums: number[]): number {
  const n = nums.length
  const presum: number[] = Array.from({ length: n + 1 })
  presum[0] = 0

  for (let i = 1; i <= n; ++i) {
    presum[i] = presum[i - 1] + nums[i - 1]
  }

  let presum_min = presum[0]
  let ans = -Infinity
  for (let i = 1; i <= n; ++i) {
    ans = Math.max(ans, presum[i] - presum_min)
    presum_min = Math.min(presum[i], presum_min)
  }

  return ans
}
