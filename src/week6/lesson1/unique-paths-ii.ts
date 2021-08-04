export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length
  const dp: number[][] = []
  for (let i = 0; i < rows; ++i) {
    dp[i] = []
  }

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (obstacleGrid[row][col] === 1) {
        dp[row][col] = 0
      } else if (row === 0 && col === 0) {
        dp[row][col] = 1
      } else if (row === 0) {
        dp[row][col] = dp[row][col - 1]
      } else if (col === 0) {
        dp[row][col] = dp[row - 1][col]
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
      }
    }
  }

  return dp[rows - 1][cols - 1]
}

export function uniquePathsWithObstacles1(obstacleGrid: number[][]): number {
  const memo = new Map<string, number>()
  const cols = obstacleGrid[0].length
  const rows = obstacleGrid.length
  const dfs = (row: number, col: number): number => {
    if (obstacleGrid[row][col] === 1) return 0

    if (row === rows - 1 && col === cols - 1) return 1

    const key = row + '-' + col
    if (memo.has(key)) return memo.get(key)!

    let ans = 0
    if (row + 1 < rows && obstacleGrid[row + 1][col] !== -1) {
      const downRet = dfs(row + 1, col)
      ans += downRet
    }

    if (col + 1 < cols && obstacleGrid[row][col + 1] !== -1) {
      const rightRet = dfs(row, col + 1)

      ans += rightRet
    }

    memo.set(key, ans)
    return ans
  }

  return dfs(0, 0)
}
