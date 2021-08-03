export const mergeSort = (
  nums: number[],
  l: number,
  r: number,
  lower: number,
  upper: number
): number => {
  if (l >= r) return 0

  const mid = (l + r) >> 1
  const ret1 = mergeSort(nums, l, mid, lower, upper)
  const ret2 = mergeSort(nums, mid + 1, r, lower, upper)
  let ans = ret1 + ret2

  let ll = mid + 1
  let rr = mid + 1
  let i = l

  while (i <= mid) {
    while (ll <= r && nums[ll] < lower + nums[i]) ++ll
    while (rr <= r && nums[rr] <= upper + nums[i]) ++rr

    ++i
    ans += rr - ll
  }

  const temp = []

  for (let i = l, j = mid + 1, k = 0; k < r - l + 1; ++k) {
    if (i <= mid && (j > r || nums[i] <= nums[j])) {
      temp[k] = nums[i++]
    } else {
      temp[k] = nums[j++]
    }
  }

  for (let i = l; i <= r; ++i) {
    nums[i] = temp[i - l]
  }

  return ans
}

export function countRangeSum(
  nums: number[],
  lower: number,
  upper: number
): number {
  const presum: number[] = Array.from({ length: nums.length + 1 })
  presum[0] = 0

  for (let i = 1; i <= nums.length; ++i) {
    presum[i] = presum[i - 1] + nums[i - 1]
  }

  return mergeSort(presum, 0, presum.length - 1, lower, upper)
}
