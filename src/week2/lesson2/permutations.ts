export function permute(nums: number[]): number[][] {
  const used: boolean[] = []
  const temp: number[] = []

  const helper = (i: number): void => {
    if (i === nums.length) {
      ans.push(temp.slice())

      return
    }

    for (let j = 0; j < nums.length; ++j) {
      if (!used[j]) {
        used[j] = true
        temp[i] = nums[j]
        helper(i + 1)

        used[j] = false
      }
    }
  }

  const ans: number[][] = []

  helper(0)

  return ans
}
