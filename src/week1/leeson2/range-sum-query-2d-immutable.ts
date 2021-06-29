export class NumMatrix {
  private presum: number[][] = []
  private rows: number = 0
  private cols: number = 0
  constructor(matrix: number[][]) {
    if (!matrix.length) return
    this.presum = Array.from({ length: matrix.length }, () => [])
    this.rows = matrix.length
    this.cols = matrix[0].length
    this.presum[0][0] = 0
    for (let i = 0; i < this.rows; ++i) {
      for (let j = 0; j < this.cols; ++j) {
        this.presum[i][j] =
          this.getNum(i - 1, j) +
          this.getNum(i, j - 1) -
          this.getNum(i - 1, j - 1) +
          matrix[i][j]
      }
    }
  }

  private getNum(row: number, col: number): number {
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      return this.presum[row][col]
    }

    return 0
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.getNum(row2, col2) -
      this.getNum(row2, col1 - 1) -
      this.getNum(row1 - 1, col2) +
      this.getNum(row1 - 1, col1 - 1)
    )
  }
}
