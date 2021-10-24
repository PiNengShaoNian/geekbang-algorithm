export function generateParenthesis(n: number): string[] {
  const ans: string[] = []
  const core = (left: number, right: number, path: string[]) => {
    if (left === 0 && right === 0) {
      ans.push(path.join(''))
      return
    }

    if (left >= right) {
      path.push('(')
      core(left - 1, right, path)
      path.pop()
    } else {
      if (left > 0) {
        path.push('(')
        core(left - 1, right, path)
        path.pop()
      }

      if (right > 0) {
        path.push(')')
        core(left, right - 1, path)
        path.pop()
      }
    }
  }

  core(n, n, [])

  return ans
}
