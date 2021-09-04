export function isValidSudoku(board: string[][]): boolean {
  const rows: boolean[][] = Array.from({ length: 9 })
  const cols: boolean[][] = Array.from({ length: 9 })
  const blocks: boolean[][] = Array.from({ length: 9 })

  for (let i = 0; i < 9; ++i) {
    rows[i] = []
    cols[i] = []
    blocks[i] = []
  }

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] === '.') continue

      const char = +board[i][j]
      const blockId = ((i / 3) >> 0) * 3 + ((j / 3) >> 0)
      if (rows[i][char] || cols[j][char] || blocks[blockId][char]) return false

      rows[i][char] = cols[j][char] = blocks[blockId][char] = true
    }
  }

  return true
}
