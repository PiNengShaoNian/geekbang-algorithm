export function findMin(nums: number[]): number {
  let ans = Infinity
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1

    //[1,1]这种情况下，不能减小区间
    if (nums[l] === nums[mid] && nums[mid] === nums[r] && r - l >= 2) {
      ++l
      --r
    } else if (nums[l] <= nums[mid]) {
      ans = Math.min(nums[l], ans)
      l = mid + 1
    } else {
      ans = Math.min(nums[mid], ans)
      r = mid - 1
    }
  }

  return ans
}
