export function twoSum(nums: number[], target: number): number[] {
  const numsWithIndex: { index: number; value: number }[] = Array.from({
    length: nums.length,
  })

  for (let i = 0; i < nums.length; ++i) {
    numsWithIndex[i] = {
      index: i,
      value: nums[i],
    }
  }

  numsWithIndex.sort((a, b) => a.value - b.value)

  let j = nums.length - 1
  for (let i = 0; i < nums.length; ++i) {
    while (i < j && numsWithIndex[i].value + numsWithIndex[j].value > target)
      --j

    if (i < j && numsWithIndex[i].value + numsWithIndex[j].value === target)
      return [numsWithIndex[i].index, numsWithIndex[j].index].sort()
  }

  return []
}
