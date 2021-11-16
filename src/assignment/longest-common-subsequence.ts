export function longestCommonSubsequence(text1: string, text2: string): number {
  /**
      dp[i][j] 为text1[0:i]和text2[0:j]的最长公共子序列
     */
  const dp: number[][] = []
  const m = text1.length
  const n = text2.length

  for (let i = 0; i <= m; ++i) {
    dp[i] = []
    dp[i][0] = 0
  }

  for (let i = 0; i <= n; ++i) {
    dp[0][i] = 0
  }

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}
