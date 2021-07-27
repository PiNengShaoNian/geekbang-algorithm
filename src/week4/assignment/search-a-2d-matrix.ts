export function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length
  const cols = matrix[0].length

  let row = rows - 1
  let col = 0

  while (row >= 0 && col < cols) {
    if (matrix[row][col] === target) return true
    else if (matrix[row][col] > target) {
      --row
    } else {
      ++col
    }
  }

  return false
}
