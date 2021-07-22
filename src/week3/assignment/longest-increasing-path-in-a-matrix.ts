export function longestIncreasingPath(matrix: number[][]): number {
  const memo = new Map<string, number>()
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const rows = matrix.length
  const cols = matrix[0].length

  const maxPath = (row: number, col: number) => {
    const key = row + '-' + col
    if (memo.has(key)) return memo.get(key)!

    let ans = 1
    for (const [_row, _col] of directions) {
      const newRow = _row + row
      const newCol = _col + col

      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue

      if (matrix[newRow][newCol] > matrix[row][col]) {
        ans = Math.max(ans, 1 + maxPath(newRow, newCol))
      }
    }

    memo.set(key, ans)
    return ans
  }

  let ans = 0
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      ans = Math.max(ans, maxPath(i, j))
    }
  }

  return ans
}
