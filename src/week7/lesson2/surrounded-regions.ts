export function solve(board: string[][]): void {
  const rows = board.length
  const cols = board[0].length
  const fa = Array.from<number>({ length: rows * cols + 1 })

  const find = (x: number): number => {
    if (x === fa[x]) return x

    return (fa[x] = find(fa[x]))
  }
  const indexToVertex = (i: number, j: number) => {
    return i * cols + j
  }
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      fa[indexToVertex(i, j)] = indexToVertex(i, j)
    }
  }
  fa[rows * cols] = rows * cols
  let drow = [-1, 0, 1, 0]
  let dcol = [0, 1, 0, -1]

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (board[i][j] === 'X') continue
      for (let k = 0; k < 4; ++k) {
        const newrow = i + drow[k]
        const newcol = j + dcol[k]

        if (newrow < 0 || newrow >= rows || newcol < 0 || newcol >= cols) {
          fa[find(indexToVertex(i, j))] = find(rows * cols)
        } else if (board[newrow][newcol] === 'O') {
          fa[find(indexToVertex(newrow, newcol))] = find(indexToVertex(i, j))
        }
      }
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (
        board[i][j] === 'O' &&
        find(indexToVertex(i, j)) !== find(cols * rows)
      ) {
        board[i][j] = 'X'
      }
    }
  }
}
