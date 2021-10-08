export function peakIndexInMountainArray(arr: number[]): number {
  let l = 1
  let r = arr.length - 2
  let ans = -1
  while (l <= r) {
    const mid = (l + r) >> 1

    if (arr[mid] > arr[mid + 1]) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
}
