export function trap(height: number[]): number {
  const n = height.length
  const leftMax: number[] = Array.from({ length: n })
  leftMax[0] = height[0]
  const rightMax: number[] = Array.from({ length: n })
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  }

  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }

  let ans = 0

  for (let i = 0; i < n; ++i) {
    const min = Math.min(leftMax[i], rightMax[i])

    ans += min <= height[i] ? 0 : min - height[i]
  }

  return ans
}
