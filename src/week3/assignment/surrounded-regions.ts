export function solve(board: string[][]): void {
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const dfs = (row: number, col: number): void => {
    board[row][col] = '$'
    for (const [_row, _col] of directions) {
      const newRow = row + _row
      const newCol = col + _col

      if (newRow >= rows || newRow < 0 || newCol >= cols || newCol < 0) continue

      if (board[newRow][newCol] === 'O') {
        dfs(newRow, newCol)
      }
    }
  }
  const rows = board.length
  const cols = board[0].length

  for (let col = 0; col < cols; ++col) {
    if (board[0][col] === 'O') dfs(0, col)
    if (board[rows - 1][col] === 'O') dfs(rows - 1, col)
  }

  for (let row = 0; row < rows; ++row) {
    if (board[row][0] === 'O') dfs(row, 0)
    if (board[row][cols - 1] === 'O') dfs(row, cols - 1)
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (board[i][j] === '$') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
}
