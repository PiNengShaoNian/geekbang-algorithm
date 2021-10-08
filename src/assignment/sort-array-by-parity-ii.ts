export function sortArrayByParityII(nums: number[]): number[] {
  let j = 1

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] & 1 && (i & 1) === 0) {
      while (nums[j] & 1 && j + 2 < nums.length) {
        j += 2
      }

      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }

  return nums
}
