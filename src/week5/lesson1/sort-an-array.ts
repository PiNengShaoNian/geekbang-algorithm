const partition = (arr: number[], l: number, r: number): number => {
  const i = l + Math.floor(Math.random() * (r + 1 - l))
  const v = arr[i]

  while (l <= r) {
    while (arr[l] < v) ++l
    while (arr[r] > v) --r

    if (l === r) break
    if (l < r) {
      const temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
      ++l
      --r
    }
  }

  return r
}

const sort = (arr: number[], l: number, r: number): void => {
  if (l >= r) return

  const p = partition(arr, l, r)
  sort(arr, l, p)
  sort(arr, p + 1, r)
}
export function sortArray(nums: number[]): number[] {
  sort(nums, 0, nums.length - 1)

  return nums
}

const mergeSort = (nums: number[], l: number, r: number): void => {
  if (l >= r) return
  const mid = (l + r) >> 1

  mergeSort(nums, l, mid)
  mergeSort(nums, mid + 1, r)
  merge(nums, l, mid, r)
}

const merge = (nums: number[], l: number, mid: number, r: number): void => {
  const temp = Array.from<number>({ length: r - l + 1 })

  let i = l
  let j = mid + 1
  let k = 0
  while (i <= mid && j <= r) {
    temp[k] = nums[i] <= nums[j] ? nums[i++] : nums[j++]
    ++k
  }

  while (i <= mid) temp[k++] = nums[i++]
  while (j <= r) temp[k++] = nums[j++]

  for (let i = 0; i < temp.length; ++i) {
    nums[i + l] = temp[i]
  }
}

export function sortArray1(nums: number[]): number[] {
  mergeSort(nums, 0, nums.length - 1)

  return nums
}
