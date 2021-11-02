const partition = (nums: number[][], l: number, r: number): number => {
  const pivot = l + Math.floor(Math.random() * (r - l + 1))
  const pivotVal = nums[pivot][0] ** 2 + nums[pivot][1] ** 2

  while (l <= r) {
    while (nums[l][0] ** 2 + nums[l][1] ** 2 < pivotVal) ++l
    while (nums[r][0] ** 2 + nums[r][1] ** 2 > pivotVal) --r

    if (l === r) break

    if (l < r) {
      const temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
      ++l
      --r
    }
  }

  return r
}

const quickSort = (nums: number[][], l: number, r: number, k: number): void => {
  if (l === r) return

  const p = partition(nums, l, r)

  if (p >= k) {
    quickSort(nums, l, p, k)
  } else {
    quickSort(nums, p + 1, r, k)
  }
}

export function kClosest(points: number[][], k: number): number[][] {
  quickSort(points, 0, points.length - 1, k - 1)

  return points.slice(0, k)
}
