export function splitArray(nums: number[], m: number): number {
  let right = 10 ** 9
  let left = 0

  while (left <= right) {
    const mid = (right + left) >> 1

    let count = 0
    let sum = 0
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] > mid) {
        count = Infinity
        break
      }
      if (sum + nums[i] <= mid) {
        if (sum + nums[i] === mid) {
          ++count
          sum = 0
        } else {
          sum += nums[i]
        }
      } else {
        sum = nums[i]

        ++count
      }
    }

    if (sum !== 0) ++count

    if (count <= m) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
