export function sortArrayByParity(nums: number[]): number[] {
  let l = 0
  let r = nums.length - 1
  const n = nums.length

  while (l < r) {
    while (l + 1 < n && (nums[l] & 1) === 0) ++l
    while (r - 1 >= 0 && nums[r] & 1) --r

    if (l >= r) break

    const temp = nums[r]
    nums[r] = nums[l]
    nums[l] = temp
  }

  return nums
}
