export function solveSudoku(board: string[][]): void {
  const rows: boolean[][] = Array.from({ length: 10 })
  const cols: boolean[][] = Array.from({ length: 10 })
  const blocks: boolean[][] = Array.from({ length: 10 })

  for (let i = 0; i <= 9; ++i) {
    rows[i] = Array.from<boolean>({ length: 10 }).fill(true)
    cols[i] = Array.from<boolean>({ length: 10 }).fill(true)
    blocks[i] = Array.from<boolean>({ length: 10 }).fill(true)
  }

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== '.') {
        const char = +board[i][j]
        const blockId = ((i / 3) >> 0) * 3 + ((j / 3) >> 0)
        rows[i][char] = cols[j][char] = blocks[blockId][char] = false
      }
    }
  }

  const findLeastPossibleLocation = (): [number, number] => {
    let ans: [number, number] = [-1, -1]
    let count = 10

    for (let i = 0; i < 9; ++i) {
      for (let j = 0; j < 9; ++j) {
        if (board[i][j] === '.') {
          let newCount = 0
          const blockId = ((i / 3) >> 0) * 3 + ((j / 3) >> 0)
          for (let k = 1; k <= 9; ++k) {
            if (rows[i][k] && cols[j][k] && blocks[blockId][k]) {
              ++newCount
            }
          }

          if (newCount < count) {
            count = newCount
            ans = [i, j]
          }
        }
      }
    }

    return ans
  }

  const dfs = (): boolean => {
    const [x, y] = findLeastPossibleLocation()

    if (x === -1) return true
    const blockId = ((x / 3) >> 0) * 3 + ((y / 3) >> 0)
    for (let i = 1; i <= 9; ++i) {
      if (rows[x][i] && cols[y][i] && blocks[blockId][i]) {
        rows[x][i] = cols[y][i] = blocks[blockId][i] = false

        board[x][y] = i + ''
        if (dfs()) return true
        board[x][y] = '.'

        rows[x][i] = cols[y][i] = blocks[blockId][i] = true
      }
    }

    return false
  }

  dfs()
}
