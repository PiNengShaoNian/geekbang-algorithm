/**
 * 暴力解法O(N^4)
 * @param matrix
 * @param target
 * @returns
 */
export function numSubmatrixSumTarget(
  matrix: number[][],
  target: number
): number {
  const rows = matrix.length
  const cols = matrix[0].length
  const getSum = (row: number, col: number) => {
    if (row >= rows || row < 0 || col >= cols || col < 0) return 0

    return matrix[row][col]
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      matrix[i][j] =
        matrix[i][j] +
        getSum(i - 1, j) +
        getSum(i, j - 1) -
        getSum(i - 1, j - 1)
    }
  }
  let ans = 0
  for (let row1 = 0; row1 < rows; ++row1) {
    for (let col1 = 0; col1 < cols; ++col1) {
      for (let row2 = row1; row2 < rows; ++row2) {
        for (let col2 = col1; col2 < cols; ++col2) {
          const sum =
            matrix[row2][col2] -
            getSum(row1 - 1, col2) -
            getSum(row2, col1 - 1) +
            getSum(row1 - 1, col1 - 1)

          if (sum === target) ++ans
        }
      }
    }
  }

  return ans
}

const subarraySum = (nums: number[], target: number): number => {
  let ans = 0
  let presum = 0
  let map = new Map<number, number>()
  map.set(0, 1)

  for (let i = 0; i < nums.length; ++i) {
    presum = presum + nums[i]

    if (map.has(presum - target)) {
      ans += map.get(presum - target)!
    }

    map.set(presum, (map.get(presum) ?? 0) + 1)
  }

  return ans
}

/**
 * 利用map缓存左边界结果，能将时间复杂度降低到O(N^3)
 * @param matrix 
 * @param target 
 * @returns 
 */
export function numSubmatrixSumTarget1(
  matrix: number[][],
  target: number
): number {
  const rows = matrix.length
  const cols = matrix[0].length
  let ans = 0

  for (let row1 = 0; row1 < rows; ++row1) {
    const sum: number[] = Array.from({ length: cols }).fill(0) as number[]
    for (let row2 = row1; row2 < rows; ++row2) {
      for (let col = 0; col < cols; ++col) {
        sum[col] += matrix[row2][col]
      }

      ans += subarraySum(sum, target)
    }
  }

  return ans
}
