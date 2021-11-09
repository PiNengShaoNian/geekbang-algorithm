export function minDistance(word1: string, word2: string): number {
  const n = word1.length
  const m = word2.length
  //dp[i][j]代表word1 的[0-i]字串和 word2[0-j]字串的最短编辑距离为dp[i][j]
  const dp: number[][] = []

  for (let i = 0; i <= n; ++i) {
    dp[i] = []
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
        dp[i][j] =
          Math.min(
            //增加
            dp[i][j - 1],
            //删除
            dp[i - 1][j],
            //修改
            dp[i - 1][j - 1]
          ) + 1
      }
    }
  }

  return dp[n][m]
}
