export function maxProduct(nums: number[]): number {
  const dpMin: number[] = []
  const dpMax: number[] = []

  dpMax[0] = dpMin[0] = nums[0]

  for (let i = 1; i < nums.length; ++i) {
    dpMin[i] = Math.min(nums[i] * dpMin[i - 1], nums[i] * dpMax[i - 1], nums[i])
    dpMax[i] = Math.max(nums[i] * dpMax[i - 1], nums[i] * dpMin[i - 1], nums[i])
  }

  let ans = dpMax[0]

  for (let i = 1; i < dpMax.length; ++i) {
    ans = Math.max(ans, dpMax[i])
  }

  return ans
}
