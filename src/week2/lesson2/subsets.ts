export function subsets(nums: number[]): number[][] {
  const n = nums.length
  const used: boolean[] = Array.from({ length: n })
  const ans: number[][] = []

  const helper = (nums: number[], index: number): void => {
    if (index === n) {
      const newArr = []

      for (let i = 0; i < n; ++i) {
        if (used[i]) {
          newArr.push(nums[i])
        }
      }

      ans.push(newArr)

      return
    }

    used[index] = true
    helper(nums, index + 1)

    used[index] = false
    helper(nums, index + 1)
  }

  helper(nums, 0)

  return ans
}

/**
 * 将状态的表示转化为数字
 * @param nums
 * @returns
 */
export function subsets1(nums: number[]): number[][] {
  const m = nums.length
  const n = (1 << m) - 1
  const ans: number[][] = []
  for (let i = 0; i <= n; ++i) {
    const newArr = []
    for (let j = 0; j <= m; ++j) {
      if ((i >> j) & 1) {
        newArr.push(nums[j])
      }
    }

    ans.push(newArr)
  }

  return ans
}
