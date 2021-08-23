export function networkDelayTime(
  times: number[][],
  n: number,
  k: number
): number {
  const distTo: number[] = []

  for (let i = 0; i <= n; ++i) {
    distTo[i] = Infinity
  }

  distTo[k] = 0

  for (let i = 0; i < n; ++i) {
    let flag = false
    for (const [from, to, weight] of times) {
      if (distTo[from] + weight < distTo[to]) {
        flag = true
        distTo[to] = distTo[from] + weight
      }
    }

    if (!flag) break
  }

  let ans = -Infinity

  for (let i = 1; i < distTo.length; ++i) {
    ans = Math.max(ans, distTo[i])
  }

  return isFinite(ans) ? ans : -1
}
