export function numSquares(n: number): number {
  const dp = Array.from<number>({ length: n + 1 }).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j * j <= i; ++j) {
      dp[i] = dp[i - j * j] + dp[j * j]
    }
  }
  return dp[n]
}

export function numSquares1(n: number): number {
  const dp = Array.from<number>({ length: n + 1 }).fill(Infinity)
  for (let i = 1; i * i <= n; ++i) {
    dp[i * i] = 1
  }
  for (let i = 1; i <= n; ++i) {
    if (dp[i] === 1) continue
    let min = Infinity
    for (let j = 1; j * j <= i; ++j) {
      min = Math.min(min, dp[i - j * j])
    }
    dp[i] = min + 1
  }

  return dp[n]
}
