export function numberOfSubarrays(nums: number[], k: number): number {
  const presum: number[] = Array.from({ length: nums.length + 1 })
  presum[0] = 0

  for (let i = 1; i < presum.length; ++i) {
    presum[i] = presum[i - 1] + (nums[i - 1] % 2)
  }

  const count = Array.from({ length: nums.length + 1 }, () => 0)

  for (let i = 0; i < presum.length; ++i) {
    ++count[presum[i]]
  }

  let ans = 0

  for (let i = 1; i < presum.length; ++i) {
    if (presum[i] - k >= 0) ans += count[presum[i] - k]
  }

  return ans
}
