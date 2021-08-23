export function findRedundantConnection(edges: number[][]): number[] {
  const fa: number[] = []
  for (let i = 0; i <= 1000; ++i) {
    fa[i] = i
  }

  const find = (x: number): number => {
    return x === fa[x] ? x : (fa[x] = find(fa[x]))
  }

  for (let i = 0; i < edges.length; ++i) {
    const [a, b] = edges[i]

    if (find(a) === find(b)) return edges[i]
    else {
      fa[find(a)] = find(b)
    }
  }

  return []
}
