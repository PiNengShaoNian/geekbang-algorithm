export function minimumTotal(triangle: number[][]): number {
  const dp: number[][] = []
  const rows = triangle.length
  for (let i = 0; i < rows; ++i) {
    dp[i] = []
  }

  dp[0][0] = triangle[0][0]

  const get = (i: number, j: number): number => {
    const row = triangle[i]

    if (j < 0 || j >= row.length) return Infinity

    return dp[i][j]
  }

  for (let i = 1; i < triangle.length; ++i) {
    for (let j = 0; j < triangle[i].length; ++j) {
      dp[i][j] = Math.min(get(i - 1, j), get(i - 1, j - 1)) + triangle[i][j]
    }
  }

  let ans = Infinity

  for (const x of dp[rows - 1]) {
    ans = Math.min(x, ans)
  }

  return ans
}
