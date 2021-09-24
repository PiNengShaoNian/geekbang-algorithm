export function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)
  const ans: number[][] = []
  for (let i = 0; i < nums.length; ++i) {
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) continue

    const all_three_nums = threeSum(nums, target - nums[i], i + 1)

    for (const [j, k, l] of all_three_nums) {
      ans.push([nums[i], j, k, l])
    }
  }

  return ans
}

function threeSum(nums: number[], target: number, start: number): number[][] {
  const ans: number[][] = []
  for (let i = start; i < nums.length; ++i) {
    if (i - 1 >= start && nums[i] === nums[i - 1]) continue

    const all_tow_sums = twoSum(nums, target - nums[i], i + 1)

    for (const [j, k] of all_tow_sums) {
      ans.push([nums[i], j, k])
    }
  }

  return ans
}

function twoSum(numbers: number[], target: number, start: number): number[][] {
  let j = numbers.length - 1
  const ans: number[][] = []
  for (let i = start; i < j; ++i) {
    if (i - 1 >= start && numbers[i] === numbers[i - 1]) continue
    while (i < j && numbers[i] + numbers[j] > target) {
      --j
    }

    if (i < j && numbers[i] + numbers[j] === target) {
      ans.push([numbers[i], numbers[j]])
    }
  }

  return ans
}
