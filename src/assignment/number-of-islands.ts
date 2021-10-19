export function numIslands(grid: string[][]): number {
  let ans = 0
  const rows = grid.length
  const cols = grid[0].length
  const visited: boolean[][] = []
  for (let i = 0; i < rows; ++i) {
    visited[i] = []
  }
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  const dfs = (row: number, col: number): void => {
    visited[row][col] = true

    for (let i = 0; i < 4; ++i) {
      const newRow = drow[i] + row
      const newCol = dcol[i] + col

      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        visited[newRow][newCol] ||
        grid[newRow][newCol] !== '1'
      )
        continue

      dfs(newRow, newCol)
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (!visited[i][j] && grid[i][j] === '1') {
        dfs(i, j)
        ++ans
      }
    }
  }

  return ans
}
