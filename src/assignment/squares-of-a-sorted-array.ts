const lowerBound = (nums: number[], target: number): number => {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] === target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return l >= nums.length ? nums.length : l
}

const merge = (mid: number, nums: number[]): number[] => {
  const temp: number[] = []

  for (let k = 0, i = 0, j = mid; k < nums.length; ++k) {
    if (i >= mid || (j < nums.length && nums[j] <= nums[i])) {
      temp[k] = nums[j++]
    } else {
      temp[k] = nums[i++]
    }
  }

  return temp
}

export function sortedSquares(nums: number[]): number[] {
  const p = lowerBound(nums, 0)
  let l = 0
  let r = p - 1
  while (l < r) {
    nums[l] *= nums[l]
    nums[r] *= nums[r]

    const temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp
    ++l
    --r
  }
  if (l === r) {
    nums[l] *= nums[l]
  }
  for (let i = p; i < nums.length; ++i) {
    nums[i] *= nums[i]
  }

  return merge(p, nums)
}
