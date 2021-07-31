const partition = (nums: number[], l: number, r: number): number => {
  const pivot = l + Math.floor(Math.random() * (r + 1 - l))
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

const quickSort = (nums: number[], k: number, l: number, r: number): number => {
  if (l === r) return nums[l]

  const pivot = partition(nums, l, r)

  if (pivot >= k) {
    return quickSort(nums, k, l, pivot)
  } else {
    return quickSort(nums, k, pivot + 1, r)
  }
}

export function findKthLargest(nums: number[], k: number): number {
  return quickSort(nums, nums.length - k, 0, nums.length - 1)
}
