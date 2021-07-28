export function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = (left + right) >> 1

    if (nums[mid] < nums[right]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return nums[left]
}
