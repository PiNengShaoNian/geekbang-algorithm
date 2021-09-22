export function twoSum(nums: number[], target: number): number[] {
  const numberToIndex = new Map<number, number>()

  for (let i = 0; i < nums.length; ++i) {
    if (numberToIndex.has(target - nums[i]))
      return [numberToIndex.get(target - nums[i])!, i]

    numberToIndex.set(nums[i], i)
  }

  return []
}
