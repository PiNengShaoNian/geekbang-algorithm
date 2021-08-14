function canPartition(nums: number[]): boolean {
  const memo: boolean[][] = Array.from({ length: nums.length }, () => [])
  const core = (index: number, sum: number): boolean => {
    if (index < 0 || sum < 0) return false

    if (memo[index][sum] !== undefined) return memo[index][sum]
    if (sum === 0) return true

    return (memo[index][sum] =
      core(index - 1, sum) || core(index - 1, sum - nums[index]))
  }

  let sum = 0
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]
  }

  if (sum % 2 !== 0) return false

  return core(nums.length - 1, sum / 2)
}
