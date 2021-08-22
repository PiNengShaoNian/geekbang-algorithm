export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length
  const fa = Array.from<number>({ length: isConnected.length })
  const find = (x: number): number => {
    if (x == fa[x]) return x

    return (fa[x] = find(fa[x]))
  }
  for (let i = 0; i < n; ++i) {
    fa[i] = i
  }

  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j <= n; ++j) {
      if (isConnected[i][j] === 1) {
        const x = find(i)
        const y = find(j)
        fa[x] = y
      }
    }
  }

  let ans = 0

  for (let i = 0; i < n; ++i) {
    if (fa[i] === i) ++ans
  }

  return ans
}
