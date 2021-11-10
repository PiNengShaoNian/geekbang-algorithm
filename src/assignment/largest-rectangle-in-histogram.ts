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
