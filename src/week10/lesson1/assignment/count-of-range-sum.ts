export function countRangeSum(nums: number[], lower: number, upper: number): number {
  const core = (arr: number[], l: number, r: number): number => {
    if (l >= r) return 0

    const mid = (l + r) >> 1

    let ans = core(arr, l, mid)
    ans += core(arr, mid + 1, r)

    let ll = mid + 1
    let rr = mid + 1
    let i = l

    while (i <= mid) {
      while (ll <= r && arr[ll] - arr[i] < lower) ++ll
      while (rr <= r && arr[rr] - arr[i] <= upper) ++rr

      if (ll <= rr) ans += rr - ll
      ++i
    }

    const temp: number[] = []

    for (let k = 0, i = l, j = mid + 1; k < r - l + 1; ++k) {
      if (j <= r && (i > mid || arr[j] < arr[i])) {
        temp[k] = arr[j++]
      } else {
        temp[k] = arr[i++]
      }
    }

    for (let i = l; i <= r; ++i) {
      arr[i] = temp[i - l]
    }

    return ans
  }

  const presum: number[] = []
  presum[0] = 0
  for (let i = 1; i <= nums.length; ++i) {
    presum[i] = presum[i - 1] + nums[i - 1]
  }

  return core(presum, 0, presum.length - 1)
}
