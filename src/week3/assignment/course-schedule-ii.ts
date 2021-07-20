export const findOrder = (
  numCourses: number,
  prerequisites: number[][]
): number[] => {
  const graph: Map<number, number[]> = new Map()
  const indegress: number[] = Array.from({ length: numCourses }, () => 0)
  for (let i = 0; i < prerequisites.length; ++i) {
    let adj = graph.get(prerequisites[i][1])

    if (!adj) {
      adj = []
    }

    ++indegress[prerequisites[i][0]]

    adj.push(prerequisites[i][0])

    graph.set(prerequisites[i][1], adj)
  }

  const queue: number[] = []

  for (let i = 0; i < indegress.length; ++i) {
    if (indegress[i] === 0) {
      queue.push(i)
    }
  }

  const ans: number[] = []

  while (queue.length) {
    const cur = queue.shift()!
    const adj = graph.get(cur) ?? []
    ans.push(cur)
    for (let i = 0; i < adj.length; ++i) {
      if (--indegress[adj[i]] === 0) {
        queue.push(adj[i])
      }
    }
  }

  return ans.length === numCourses ? ans : []
}
