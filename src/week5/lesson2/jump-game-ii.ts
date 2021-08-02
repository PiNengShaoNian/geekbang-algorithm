export function jump(nums: number[]): number {
  if (nums.length <= 1) return 0
  let cur = 0
  const n = nums.length
  let ans = 0

  while (cur < n) {
    let next = cur
    let far = 0
    for (let j = 1; j <= nums[cur]; ++j) {
      if (cur + j >= n - 1) return ans + 1

      if (cur + j + nums[cur + j] > far) {
        far = cur + j + nums[cur + j]
        next = cur + j
      }
    }

    cur = next
    ++ans
    if (cur >= n - 1) break
  }

  return ans
}
