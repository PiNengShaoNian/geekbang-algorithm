export function searchMatrix(matrix: number[][], target: number): boolean {
  let row = matrix.length - 1
  let col = 0
  const cols = matrix[0].length

  while (row >= 0 && col < cols) {
    if (matrix[row][col] === target) return true
    else if (matrix[row][col] < target) ++col
    else {
      --row
    }
  }

  return false
}
