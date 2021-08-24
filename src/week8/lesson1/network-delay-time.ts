import { Comparable, PriorityQueue } from '../../week4/lesson1/priority-queue'

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

class DisAndIndex implements Comparable<DisAndIndex> {
  constructor(public index: number, public distach: number) {}

  compareTo(that: DisAndIndex): number {
    return this.distach - that.distach
  }
}

export function networkDelayTime1(
  times: number[][],
  n: number,
  k: number
): number {
  const distTo: number[] = []
  const adj: number[][] = []
  const weights: number[][] = []
  const expaned: boolean[] = []

  for (let i = 0; i <= n; ++i) {
    adj[i] = []
    weights[i] = []
    distTo[i] = Infinity
  }

  for (const [from, to, weight] of times) {
    adj[from].push(to)
    weights[from].push(weight)
  }
  distTo[k] = 0
  const minPQ = new PriorityQueue<DisAndIndex>()
  minPQ.push(new DisAndIndex(k, 0))

  while (minPQ.size()) {
    const { index } = minPQ.pop()!

    if (expaned[index]) continue

    expaned[index] = true

    for (let i = 0; i < adj[index].length; ++i) {
      const to = adj[index][i]
      const weight = weights[index][i]

      if (distTo[index] + weight < distTo[to]) {
        distTo[to] = distTo[index] + weight
        minPQ.push(new DisAndIndex(to, distTo[to]))
      }
    }
  }

  let ans = -Infinity

  for (let i = 1; i < distTo.length; ++i) {
    ans = Math.max(ans, distTo[i])
  }

  return isFinite(ans) ? ans : -1
}
