export const solve = (pairs: [price: number, deadline: number][]): number => {
  pairs.sort((a, b) => a[0] - b[0])
  const n = pairs.length
  const fa: number[] = []
  for (let i = 0; i <= 10001; ++i) {
    fa[i] = i
  }
  const find = (x: number): number => {
    return x === fa[x] ? x : (x = find(fa[x]))
  }

  let ans = 0
  for (let i = n - 1; i >= 0; --i) {
    const [price, deadline] = pairs[i]

    if (find(deadline) > 0) {
      ans += price
      fa[deadline] = find(deadline) - 1
    }
  }

  return ans
}
