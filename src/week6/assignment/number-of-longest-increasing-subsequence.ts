export function findNumberOfLIS(nums: number[]): number {
  const n = nums.length
  const lengths: number[] = Array.from<number>({ length: n + 1 }).fill(1)
  const counts: number[] = Array.from<number>({ length: n + 1 }).fill(1)

  let maxLength = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        if (lengths[j] + 1 > lengths[i]) {
          lengths[i] = lengths[j] + 1
          counts[i] = counts[j]
        } else if (lengths[j] + 1 === lengths[i]) {
          counts[i] += counts[j]
        }
      }
    }
    maxLength = Math.max(maxLength, lengths[i])
  }

  let ans = 0

  for (let i = 1; i < lengths.length; ++i) {
    if (lengths[i] === maxLength) ans += counts[i]
  }

  return ans
}
