export function isMatch(s: string, p: string): boolean {
  const n = s.length
  const m = p.length
  s = ' ' + s
  p = ' ' + p

  const dp: boolean[][] = Array.from({ length: n + 1 })

  for (let i = 0; i <= n; ++i) {
    dp[i] = Array.from<boolean>({ length: m + 1 }).fill(false)
  }
  dp[0][0] = true

  for (let i = 2; i <= m && p[i] === '*'; i += 2) dp[0][i] = true

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      if (p[j] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j] === '*') {
        dp[i][j] = dp[i][j - 2]
        if (p[j - 1] === s[i] || p[j - 1] === '.') {
          dp[i][j] ||= dp[i - 1][j]
        }
      } else {
        dp[i][j] = dp[i - 1][j - 1] && p[j] === s[i]
      }
    }
  }

  return dp[n][m]
}
