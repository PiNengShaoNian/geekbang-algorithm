export function generateParenthesis(n: number): string[] {
  const ans: string[] = []
  const core = (left: number, right: number, path: string[]): void => {
    if (left === 0 && right === 0) {
      ans.push(path.join(''))
    }

    if (left === right) {
      path.push('(')
      core(left - 1, right, path)
      path.pop()
    } else if (left < right) {
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
