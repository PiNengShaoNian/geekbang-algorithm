export function combine(n: number, k: number): number[][] {
  const ans: number[][] = []
  const helper = (n: number, k: number, i: number, temp: number[]): void => {
    if (temp.length + (n - i + 1) < k) return

    if (temp.length === k) {
      ans.push(temp.slice())
      return
    }

    temp.push(i)
    helper(n, k, i + 1, temp)
    temp.pop()
    helper(n, k, i + 1, temp)
  }

  helper(n, k, 1, [])

  return ans
}
