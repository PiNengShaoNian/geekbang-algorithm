export function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number
): number {
  const dis: number[][] = []

  for (let i = 0; i < n; ++i) {
    dis[i] = []
    for (let j = 0; j < n; ++j) {
      dis[i][j] = Infinity
    }
    dis[i][i] = 0
  }

  for (const [from, to, weight] of edges) {
    dis[from][to] = weight
    dis[to][from] = weight
  }

  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j])
      }
    }
  }

  let ansCount = n
  let ans = -1

  for (let i = 0; i < n; ++i) {
    let count = 0
    for (let j = 0; j < n; ++j) {
      if (i !== j) {
        if (dis[i][j] <= distanceThreshold) ++count
      }
    }

    if (count <= ansCount) {
      ans = i
      ansCount = count
    }
  }

  return ans
}
