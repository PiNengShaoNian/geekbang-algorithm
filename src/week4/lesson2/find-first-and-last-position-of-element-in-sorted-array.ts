export function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1
  const ans: number[] = []
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  if (left >= nums.length || nums[left] !== target) ans.push(-1)
  else ans.push(left)

  left = 0
  right = nums.length - 1

  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  if (right < 0 || nums[right] !== target) ans.push(-1)
  else ans.push(right)

  return ans
}
