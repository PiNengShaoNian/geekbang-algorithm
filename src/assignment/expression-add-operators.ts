export function addOperators(num: string, target: number): string[] {
  const ans: string[] = []

  const Impl = (expr: string[], numIndex: number, res: number, mul: number) => {
    if (numIndex === num.length) {
      if (res === target) {
        ans.push(expr.join(''))
      }
      return
    }

    const signIndex = expr.length
    if (numIndex > 0) {
      expr.push('')
    }

    let val = 0
    for (
      let j = numIndex;
      j < num.length && (numIndex === j || num[numIndex] !== '0');
      ++j
    ) {
      val = val * 10 + +num[j]
      expr.push(num[j])

      if (numIndex === 0) {
        Impl(expr, j + 1, val, val)
      } else {
        expr[signIndex] = '+'
        Impl(expr, j + 1, res + val, val)
        expr[signIndex] = '-'
        Impl(expr, j + 1, res - val, -val)

        expr[signIndex] = '*'
        Impl(expr, j + 1, res - mul + mul * val, mul * val)
      }
    }

    expr.splice(signIndex, expr.length - signIndex)
  }

  Impl([], 0, 0, 0)

  return ans
}
