export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const graph: number[][] = Array.from({ length: numCourses })
  for (let i = 0; i < graph.length; ++i) graph[i] = []
  const indegrees: number[] = Array.from<number>({ length: numCourses }).fill(0)
  for (let i = 0; i < prerequisites.length; ++i) {
    const [to, from] = prerequisites[i]
    graph[from].push(to)
    ++indegrees[to]
  }
  const queue: number[] = []
  for (let i = 0; i < indegrees.length; ++i) {
    if (indegrees[i] === 0) queue.push(i)
  }
  let ans = 0
  while (queue.length) {
    const cur = queue.shift()!

    const adjacent = graph[cur]
    ++ans
    for (const neighbor of adjacent) {
      if (--indegrees[neighbor] === 0) {
        queue.push(neighbor)
      }
    }
  }

  return ans === numCourses
}
