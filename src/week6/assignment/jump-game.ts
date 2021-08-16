export function canJump(nums: number[]): boolean {
  const n = nums.length
  const dp: boolean[] = Array.from<boolean>({ length: n }).fill(false)
  dp[0] = true

  for (let i = 0; i < n; ++i) {
    if (!dp[i]) continue
    const x = nums[i]
    for (let j = 1; j <= x; ++j) {
      if (i + j >= n) return true
      dp[i + j] = true
    }
  }

  return dp[n - 1]
}

export function canJump1(nums: number[]): boolean {
  let far = 0

  for (let i = 0; i < nums.length; ++i) {
    if (i <= far) {
      far = Math.max(far, i + nums[i])

      if (far >= nums.length - 1) {
        return true
      }
    }
  }

  return false
}
