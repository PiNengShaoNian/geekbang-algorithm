const partition = (nums: number[], l: number, r: number): number => {
  const pivot = l + Math.floor(Math.random() * (r - l + 1))
  const pivotVal = nums[pivot]
  while (l <= r) {
    while (nums[l] < pivotVal) ++l
    while (nums[r] > pivotVal) --r

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

const quickSort = (nums: number[], l: number, r: number, k: number): number => {
  if (l === r) return nums[l]

  const p = partition(nums, l, r)

  if (p >= k) {
    return quickSort(nums, l, p, k)
  } else {
    return quickSort(nums, p + 1, r, k)
  }
}

export function findKthLargest(nums: number[], k: number): number {
  return quickSort(nums, 0, nums.length - 1, nums.length - k)
}
