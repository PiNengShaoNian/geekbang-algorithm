export function minDistance(word1: string, word2: string): number {
  const a1 = [...word1]
  const a2 = [...word2]
  type char = string
  const memo: number[][] = Array.from({ length: word1.length + 1 })
  for (let i = 0; i <= word1.length; ++i) {
    memo[i] = []
  }

  const core = (a1: char[], a2: char[]): number => {
    if (a1.length === 0 || a2.length === 0) {
      return Math.max(a1.length, a2.length)
    }

    if (typeof memo[a1.length][a2.length] === 'number')
      return memo[a1.length][a2.length]

    let ans
    if (a1[a1.length - 1] === a2[a2.length - 1]) {
      const char1 = a1.pop()!
      const char2 = a2.pop()!
      ans = core(a1, a2)
      a1.push(char1)
      a2.push(char2)
    } else {
      let flag: 0 | 1 | 2 = 0
      //插入
      let char = a2.pop()!
      ans = 1 + core(a1, a2)
      a2.push(char)

      //删除
      char = a1.pop()!
      const cand1 = 1 + core(a1, a2)
      a1.push(char)

      if (cand1 < ans) {
        ans = cand1
        flag = 1
      }

      //修改
      const char1 = a1.pop()!
      const char2 = a2.pop()!
      const cand2 = 1 + core(a1, a2)
      a1.push(char1)
      a2.push(char2)

      if (cand2 < ans) {
        flag = 2
        ans = cand2
      }
    }

    memo[a1.length][a2.length] = ans
    return ans
  }

  return core(a1, a2)
}

//动态规划解法
export function minDistance1(word1: string, word2: string): number {
  const n = word1.length
  const m = word2.length
  const dp: number[][] = []
  for (let i = 0; i <= n; ++i) {
    dp[i] = Array.from<number>({ length: m + 1 }).fill(Infinity)
    dp[i][0] = i
  }

  for (let i = 0; i <= m; ++i) {
    dp[0][i] = i
  }

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i][j],
          1 + dp[i][j - 1],
          1 + dp[i - 1][j],
          1 + dp[i - 1][j - 1]
        )
      }
    }
  }

  return dp[n][m]
}
