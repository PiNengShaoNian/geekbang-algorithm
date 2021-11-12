type Rect = {
  width: number
  height: number
}

export const maxSquare = (heights: number[]): number => {
  heights.push(0)
  const stack: Rect[] = []

  let ans = 0
  for (const height of heights) {
    let accumulationWidth = 0
    while (stack.length && stack[stack.length - 1].height >= height) {
      const { height: topHeight, width: topWidth } = stack.pop()!
      accumulationWidth += topWidth

      if (accumulationWidth === topHeight) {
        ans = Math.max(ans, accumulationWidth * topHeight)
        //有时候accumulationWidth不能构成topHeight正方形，但是
        //topWidth 和 topHeight能构成正方形
      } else if (topWidth === topHeight) {
        ans = Math.max(ans, topWidth * topHeight)
      }
    }

    stack.push({
      width: accumulationWidth + 1,
      height,
    })
  }

  heights.pop()
  return ans
}

export function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length
  const cols = matrix[0].length
  const heights: number[] = Array.from<number>({ length: cols }).fill(0)
  let ans = 0
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (matrix[row][col] === '1') {
        heights[col] += 1
      } else {
        heights[col] = 0
      }
    }
    ans = Math.max(ans, maxSquare(heights))
  }
  return ans
}

export function maximalSquare1(matrix: string[][]): number {
  const rows = matrix.length
  const cols = matrix[0].length

  /**
   *    dp[i][j]表示以第i行第j列为右下角所能构成的最大正方形边长, 则递推式为: 
        dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
   */
  const dp: number[][] = []

  for (let i = 0; i <= rows; ++i) {
    dp[i] = [0]
  }

  for (let i = 0; i <= cols; ++i) {
    dp[0][i] = 0
  }

  let ans = 0
  for (let i = 1; i <= rows; ++i) {
    for (let j = 1; j <= cols; ++j) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
        ans = Math.max(ans, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }

  return ans * ans
}
