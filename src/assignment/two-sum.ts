export function twoSum(nums: number[], target: number): number[] {
  const numberToIndex = new Map<number, number>()

  for (let i = 0; i < nums.length; ++i) {
    if (numberToIndex.has(target - nums[i]))
      return [numberToIndex.get(target - nums[i])!, i]

    numberToIndex.set(nums[i], i)
  }

  return []
}

type IndexAndValue = [index: number, value: number]
export function twoSum1(nums: number[], target: number): number[] {
  const pairs: IndexAndValue[] = []
  for (let i = 0; i < nums.length; ++i) {
    pairs[i] = [i, nums[i]]
  }

  pairs.sort((a, b) => a[1] - b[1])

  let j = nums.length - 1
  for (let i = 0; i < nums.length; ++i) {
    while (i < j && pairs[i][1] + pairs[j][1] > target) --j

    if (i < j && pairs[i][1] + pairs[j][1] === target)
      return [pairs[i][0], pairs[j][0]]
  }

  return []
}
