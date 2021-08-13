export const knapsackProblem = (
  weight: number[],
  values: number[],
  capacity: number
): number => {
  const n = weight.length

  const dp: number[][] = []

  for (let i = 0; i <= n; ++i) {
    dp[i] = Array.from<number>({ length: capacity + 1 }).fill(-Infinity)
  }

  for (let i = 0; i <= n; ++i) {
    dp[i][0] = 0
  }

  for (let i = 0; i <= capacity; ++i) {
    dp[0][i] = 0
  }

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= capacity; ++j) {
      if (j < weight[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i - 1][j - weight[i - 1]] + values[i - 1],
          dp[i - 1][j]
        )
      }
    }
  }

  return dp[n][capacity]
}
