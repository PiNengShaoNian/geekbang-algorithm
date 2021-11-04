export function maxProduct(nums: number[]): number {
  //其中nums[i]为以i结尾最大的乘积
  const dpMax: number[] = []
  //其中nums[i]为以i结尾最小的乘积
  const dpMin: number[] = []

  dpMax[0] = dpMin[0] = nums[0]

  for (let i = 1; i < nums.length; ++i) {
    dpMax[i] = Math.max(dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i], nums[i])
    dpMin[i] = Math.min(dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i], nums[i])
  }

  let res = -Infinity

  for (const x of dpMax) {
    res = Math.max(res, x)
  }

  return res
}
