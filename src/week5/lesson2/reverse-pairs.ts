const count = (nums: number[], l: number, r: number): number => {
  if (l >= r) return 0
  const mid = (l + r) >> 1
  const temp = Array.from<number>({ length: r - l + 1 })

  let ans = count(nums, l, mid) + count(nums, mid + 1, r)

  for (let i = l, j = mid + 1, t = j, k = 0; k < temp.length; ++k) {
    if (i <= mid && (j > r || nums[i] < nums[j])) {
      for (; t <= r && nums[i] > 2 * nums[t]; ++t);
      ans += t - mid - 1
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

export function reversePairs(nums: number[]): number {
  return count(nums, 0, nums.length - 1)
}

let ans = 0
const merge = (nums: number[], l: number, mid: number, r: number): void => {
  const temp = Array.from<number>({ length: r - l + 1 })
  let i = l
  let j = mid + 1
  let k = 0
  while (i <= mid && j <= r) {
    temp[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++]
  }

  while (j <= r) {
    temp[k++] = nums[j++]
  }

  while (i <= mid) {
    temp[k++] = nums[i++]
  }

  for (let i = l; i <= r; ++i) {
    nums[i] = temp[i - l]
  }
}

const calculate = (nums: number[], l: number, mid: number, r: number): void => {
  for (let i = l, j = mid; i <= mid; ++i) {
    while (j < r && nums[i] > nums[j + 1] * 2) ++j

    ans += j - mid
  }
}

const mergeSort = (nums: number[], l: number, r: number): void => {
  if (l >= r) return
  const mid = (l + r) >> 1

  mergeSort(nums, l, mid)
  mergeSort(nums, mid + 1, r)
  calculate(nums, l, mid, r)
  merge(nums, l, mid, r)
}

export function reversePairs1(nums: number[]): number {
  ans = 0
  mergeSort(nums, 0, nums.length - 1)
  return ans
}
