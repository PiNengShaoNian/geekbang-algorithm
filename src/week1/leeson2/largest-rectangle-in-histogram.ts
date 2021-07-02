type Rect = {
  width: number
  height: number
}

export function largestRectangleArea(heights: number[]): number {
  heights.push(0)
  const stack: Array<Rect> = []

  let ans = 0
  for (const height of heights) {
    let accumulatedWidth = 0
    while (stack.length && stack[stack.length - 1].height >= height) {
      const { height: topHeight, width: topWidth } = stack.pop()!
      accumulatedWidth += topWidth

      ans = Math.max(ans, accumulatedWidth * topHeight)
    }

    stack.push({
      height,
      width: accumulatedWidth + 1,
    })
  }

  return ans
}
