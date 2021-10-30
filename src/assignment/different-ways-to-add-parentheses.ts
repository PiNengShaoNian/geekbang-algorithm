export function diffWaysToCompute(expression: string): number[] {
  let cur = ''
  const expressionParts: string[] = []
  const isOp = (s: string): boolean => {
    return s === '+' || s === '-' || s === '*'
  }
  for (let i = 0; i < expression.length; ++i) {
    if (isOp(expression[i])) {
      expressionParts.push(cur)
      expressionParts.push(expression[i])
      cur = ''
    } else {
      cur += expression[i]
    }
  }

  expressionParts.push(cur)

  const Impl = (l: number, r: number): number[] => {
    if (l === r) {
      return [+expressionParts[l]]
    }

    const res: number[] = []
    for (let i = l; i <= r; ++i) {
      if (isOp(expressionParts[i])) {
        const left = Impl(l, i - 1)
        const right = Impl(i + 1, r)

        for (const x of left) {
          for (const y of right) {
            if (expressionParts[i] === '+') {
              res.push(x + y)
            } else if (expressionParts[i] === '-') {
              res.push(x - y)
            } else if (expressionParts[i] === '*') {
              res.push(x * y)
            }
          }
        }
      }
    }

    return res
  }

  return Impl(0, expressionParts.length - 1)
}
