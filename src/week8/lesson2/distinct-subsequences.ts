export function numDistinct(s: string, t: string): number {
  const m = s.length
  const n = t.length
  s = ' ' + s
  t = ' ' + t

  const dp: number[][] = Array.from({ length: m + 1 })
  for (let i = 0; i <= m; ++i) {
    dp[i] = Array.from<number>({ length: n + 1 }).fill(0)
  }

  for (let i = 0; i <= m; ++i) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      dp[i][j] = dp[i - 1][j]

      if (s[i] === t[j]) dp[i][j] += dp[i - 1][j - 1]
    }
  }

  return dp[m][n]
}
