export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let ans = 0
  for (let i = g.length - 1, j = s.length - 1; i >= 0 && j >= 0; --i) {
    if (s[j] >= g[i]) {
      ++ans
      --j
    }
  }

  return ans
}
