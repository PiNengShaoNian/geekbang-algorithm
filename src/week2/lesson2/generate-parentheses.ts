export function generateParenthesis(n: number): string[] {
  const memo = new Map<number, string[]>()
  const helper = (n: number) => {
    if (n === 0) return ['']
    if (memo.has(n)) return memo.get(n)!

    const ans: string[] = []

    for (let k = 1; k <= n; ++k) {
      const result1 = generateParenthesis(k - 1)
      const result2 = generateParenthesis(n - k)

      for (const a of result1) {
        for (const b of result2) {
          ans.push('(' + a + ')' + b)
        }
      }
    }

    memo.set(n, ans)
    return ans
  }

  return helper(n)
}

export function generateParenthesis1(n: number): string[] {
  const ans: string[] = []
  const helper = (left: number, right: number, path: string[]): void => {
    if (left === 0 && right === 0) {
      ans.push(path.join(''))
      return
    }

    if (left === right) {
      path.push('(')
      helper(left - 1, right, path)
      path.pop()
    } else if (left < right) {
      if (left > 0) {
        path.push('(')
        helper(left - 1, right, path)
        path.pop()
      }
      if (right > 0) {
        path.push(')')
        helper(left, right - 1, path)
        path.pop()
      }
    }
  }

  helper(n, n, [])

  return ans
}
