export function findMin(nums: number[]): number {
  let ans = Infinity

  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1

    //[l,mid]区间为有序数组，直接取nums[l],然后将区间减小到[mid + 1, r]
    //进行同样的操作
    if (nums[l] <= nums[mid]) {
      ans = Math.min(nums[l], ans)
      l = mid + 1
    } else {
      ans = Math.min(nums[mid], ans)
      r = mid - 1
    }
  }

  return ans
}
