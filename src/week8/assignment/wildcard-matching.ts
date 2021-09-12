//自己尝试超时
export function isMatch(s: string, p: string): boolean {
  p = p.replace(/\*+/, '*')
  const n = s.length
  const m = p.length
  const memo: boolean[][] = Array.from({ length: n })
  for (let i = 0; i < n; ++i) {
    memo[i] = []
  }

  const isPureStar = (p: string, start: number): boolean => {
    const remainning = p.slice(start)
    for (let i = 0; i < remainning.length; ++i) {
      if (remainning[i] !== '*') return false
    }

    return true
  }

  const core = (sIndex: number, pIndex: number): boolean => {
    if (sIndex >= n && pIndex >= m) return true

    if (sIndex >= n) {
      if (pIndex >= m) return true
      if (isPureStar(p, pIndex)) return true
      else return false
    }

    if (sIndex >= n || pIndex >= m) return false

    if (typeof memo[sIndex][pIndex] === 'boolean') return memo[sIndex][sIndex]

    let res: boolean
    if (p[pIndex] === '?' || p[pIndex] === s[sIndex]) {
      res = core(sIndex + 1, pIndex + 1)
    } else if (p[pIndex] === '*') {
      res =
        core(sIndex, pIndex + 1) ||
        core(sIndex + 1, pIndex) ||
        core(sIndex + 1, pIndex + 1)
    } else {
      res = false
    }

    return (memo[sIndex][pIndex] = res)
  }

  return core(0, 0)
}

export function isMatch1(s: string, p: string): boolean {
  const n = s.length
  const m = p.length
  s = ' ' + s
  p = ' ' + p

  const dp: boolean[][] = Array.from({ length: n + 1 })

  for (let i = 0; i <= n; ++i) {
    dp[i] = Array.from<boolean>({ length: m + 1 }).fill(false)
  }

  for (let i = 1; i <= m && p[i] === '*'; ++i) dp[0][i] = true
  dp[0][0] = true

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      if (p[j] === '?') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j - 1] && s[i] === p[j]
      }
    }
  }

  return dp[n][m]
}