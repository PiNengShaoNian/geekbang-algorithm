export function countBits(n: number): number[] {
  let ans: number[] = []

  ans[0] = 0
  for (let i = 1; i <= n; ++i) {
    ans[i] = ans[i - (i & -i)] + 1
  }

  return ans
}
