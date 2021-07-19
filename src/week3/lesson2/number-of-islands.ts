export function numIslands(grid: string[][]): number {
  const visited: boolean[][] = Array.from({ length: grid.length }, () => [])
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const rows = grid.length
  const cols = grid[0].length
  const dfs = (row: number, col: number) => {
    for (const [_row, _col] of directions) {
      const newRow = row + _row
      const newCol = col + _col

      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue

      if (!visited[newRow][newCol] && grid[newRow][newCol] === '1') {
        visited[newRow][newCol] = true
        dfs(newRow, newCol)
      }
    }
  }

  let ans = 0
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (!visited[i][j] && grid[i][j] === '1') {
        ++ans
        visited[i][j] = true
        dfs(i, j)
      }
    }
  }

  return ans
}
