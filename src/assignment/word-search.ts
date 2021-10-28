export function exist(board: string[][], word: string): boolean {
  const dfs = (row: number, col: number, index: number): boolean => {
    visited[row][col] = true

    if (board[row][col] !== word[index]) {
      visited[row][col] = false
      return false
    } else {
      if (index === word.length - 1) {
        return true
      }
    }

    for (let i = 0; i < 4; ++i) {
      const newRow = drow[i] + row
      const newCol = dcol[i] + col

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol]
      ) {
        if (dfs(newRow, newCol, index + 1)) return true
      }
    }

    visited[row][col] = false
    return false
  }
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  const rows = board.length
  const cols = board[0].length
  let visited: boolean[][]
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      visited = Array.from({ length: rows }, () => [])

      const res = dfs(i, j, 0)

      if (res === true) return true
    }
  }

  return false
}
