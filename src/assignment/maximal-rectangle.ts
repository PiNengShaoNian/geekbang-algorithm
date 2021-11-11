export type Rect = {
  width: number
  height: number
}

function largestRectangleArea(heights: number[]): number {
  heights.push(0)
  const stack: Rect[] = []
  let ans: number = 0

  for (const height of heights) {
    let accumulationWidth = 0
    while (stack.length && stack[stack.length - 1].height >= height) {
      const { width: topWidth, height: topHeight } = stack.pop()!

      accumulationWidth += topWidth

      ans = Math.max(ans, topHeight * accumulationWidth)
    }

    stack.push({
      width: accumulationWidth + 1,
      height,
    })
  }

  return ans
}

//关键思路在于遍历每一行后将他们的高度进行累加，这样就能使用84题的找出
//柱形图中的最大矩形的解法解题
export function maximalRectangle(matrix: string[][]): number {
  if (!matrix.length) return 0
  const rows = matrix.length
  const cols = matrix[0].length
  let ans = 0
  const heights: number[] = Array.from<number>({ length: cols }).fill(0)
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (matrix[i][j] === '0') {
        heights[j] = 0
      } else {
        heights[j] += 1
      }
    }
    ans = Math.max(ans, largestRectangleArea(heights))
  }

  return ans
}
