export function permuteUnique(nums: number[]): number[][] {
  const used: boolean[] = []
  const temp: number[] = []

  const helper = (index: number) => {
    if (index === nums.length) {
      ans.push(temp.slice())

      return
    }

    for (let i = 0; i < nums.length; ++i) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
        continue

      used[i] = true
      temp[index] = nums[i]
      helper(index + 1)
      used[i] = false
    }
  }

  const ans: number[][] = []
  nums.sort((a, b) => a - b)

  helper(0)

  return ans
}
