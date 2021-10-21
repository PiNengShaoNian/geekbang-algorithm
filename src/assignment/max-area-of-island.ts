export function maxAreaOfIsland(grid: number[][]): number {
  let ans = 0

  const rows = grid.length
  const cols = grid[0].length
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  const dfs = (row: number, col: number): void => {
    visited[row][col] = true
    ++cand

    for (let i = 0; i < 4; ++i) {
      const newRow = row + drow[i]
      const newCol = col + dcol[i]

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 1 &&
        !visited[newRow][newCol]
      ) {
        dfs(newRow, newCol)
      }
    }
  }
  const visited: boolean[][] = []

  for (let i = 0; i < rows; ++i) {
    visited[i] = []
  }
  let cand = 0

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === 1) {
        cand = 0
        dfs(i, j)
        ans = Math.max(cand, ans)
      }
    }
  }

  return ans
}
