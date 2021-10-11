export function search(nums: number[], target: number): number {
  if (!nums.length) return -1

  if (nums.length === 1) return nums[0] === target ? 0 : -1

  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (nums[mid] === target) return mid

    if (nums[0] <= nums[mid]) {
      if (target >= nums[0] && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[nums.length - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}
