export function uniquePathsIII(grid: number[][]): number {
  let start!: [number, number]
  let end!: [number, number]
  const rows = grid.length
  const cols = grid[0].length
  const visited: boolean[][] = []
  let zero = 0

  for (let i = 0; i < rows; ++i) {
    visited[i] = []
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === 1) {
        start = [i, j]
      } else if (grid[i][j] === 2) {
        end = [i, j]
      } else if (grid[i][j] === 0) {
        ++zero
      }
    }
  }

  let ans = 0

  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  grid[start[0]][start[1]] = grid[end[0]][end[1]] = 0
  const dfs = (row: number, col: number, len: number): void => {
    if (row === end[0] && col === end[1]) {
      if (len === zero + 1) ++ans
      return
    }
    visited[row][col] = true

    for (let i = 0; i < 4; ++i) {
      const newRow = row + drow[i]
      const newCol = col + dcol[i]

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        grid[newRow][newCol] === 0
      ) {
        dfs(newRow, newCol, len + 1)
      }
    }

    visited[row][col] = false
  }

  dfs(start[0], start[1], 0)

  return ans
}
