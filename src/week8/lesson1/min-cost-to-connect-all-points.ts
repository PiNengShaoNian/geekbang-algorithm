export function minCostConnectPoints(points: number[][]): number {
  const edges: [vertex1: number, vertex2: number, weight: number][] = []
  const fa: number[] = []
  for (let i = 0; i < points.length; ++i) {
    fa[i] = i
  }
  const find = (x: number): number => {
    return x === fa[x] ? x : (fa[x] = find(fa[x]))
  }
  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      edges.push([
        i,
        j,
        Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1]),
      ])
    }
  }

  edges.sort((a, b) => a[2] - b[2])

  let ans = 0

  for (let i = 0; i < edges.length; ++i) {
    const [v1, v2, weight] = edges[i]
    if (find(v1) !== find(v2)) {
      ans += weight
      fa[find(v1)] = find(v2)
    }
  }

  return ans
}
