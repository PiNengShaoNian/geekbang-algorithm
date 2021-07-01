function twoSum(numbers: number[], target: number, start: number): number[][] {
  let j = numbers.length - 1
  const ans: number[][] = []
  for (let i = start; i < numbers.length; ++i) {
    if (i > start && numbers[i] === numbers[i - 1]) continue
    while (i < j && numbers[i] + numbers[j] > target) --j

    if (i < j && numbers[i] + numbers[j] === target) {
      ans.push([numbers[i], numbers[j]])
    }
  }

  return ans
}

export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  let ans: number[][] = []
  for (let i = 0; i < nums.length; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    const pairs = twoSum(nums, -nums[i], i + 1)
    for (const jk of pairs) {
      ans.push([nums[i], jk[0], jk[1]])
    }
  }

  return ans
}
