export function search(nums: number[], target: number): boolean {
  if (nums.length === 1) return nums[0] === target ? true : false

  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (nums[mid] === target) return true
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      ++l
      --r
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
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

  return false
}
