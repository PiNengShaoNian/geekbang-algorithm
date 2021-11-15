export class NumMatrix {
  private cols: number
  private rows: number
  private presum: number[][]

  constructor(matrix: number[][]) {
    this.rows = matrix.length
    this.cols = matrix[0].length

    this.presum = []
    for (let i = 0; i < this.rows; ++i) {
      this.presum[i] = []
      for (let j = 0; j < this.cols; ++j) {
        this.presum[i][j] =
          this.get(i - 1, j) +
          this.get(i, j - 1) -
          this.get(i - 1, j - 1) +
          matrix[i][j]
      }
    }
  }

  private get(row: number, col: number): number {
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      return this.presum[row][col]
    }

    return 0
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.get(row2, col2) -
      this.get(row1 - 1, col2) -
      this.get(row2, col1 - 1) +
      this.get(row1 - 1, col1 - 1)
    )
  }
}
