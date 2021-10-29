export function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length
  const cols = matrix[0].length

  let row = rows - 1
  let col = 0

  while (row >= 0 && col < cols) {
    if (target === matrix[row][col]) return true
    else if (target < matrix[row][col]) {
      --row
    } else {
      ++col
    }
  }

  return false
}
