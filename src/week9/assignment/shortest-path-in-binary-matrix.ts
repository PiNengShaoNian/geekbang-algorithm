export function shortestPathBinaryMatrix(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  if (grid[0][0] !== 0 || grid[rows - 1][cols - 1] !== 0) return -1
  if (rows === 1 && cols === 1 && grid[0][0] === 0) return 1

  const distToBegin: Map<string, number> = new Map()
  const distToEnd: Map<string, number> = new Map()
  const queueBegin: string[] = []
  const queueEnd: string[] = []

  distToBegin.set('0-0', 1)
  distToEnd.set(`${rows - 1}-${cols - 1}`, 1)
  queueBegin.push('0-0')
  queueEnd.push(`${rows - 1}-${cols - 1}`)

  const drow = [-1, -1, -1, 0, 1, 1, 1, 0]
  const dcol = [-1, 0, 1, 1, 1, 0, -1, -1]

  const expand = (
    queue: string[],
    distTo: Map<string, number>,
    otherDistTo: Map<string, number>
  ): number => {
    if (queue.length) {
      const cur = queue.shift()!
      const [row, col] = cur.split('-').map((v) => +v)

      const depth = distTo.get(row + '-' + col)!

      for (let i = 0; i < 8; ++i) {
        const newRow = row + drow[i]
        const newCol = col + dcol[i]

        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols ||
          grid[newRow][newCol] === 1
        )
          continue

        const key = newRow + '-' + newCol

        if (otherDistTo.has(key)) return otherDistTo.get(key)! + depth

        if (distTo.has(key)) continue

        distTo.set(key, depth + 1)
        queue.push(key)
      }
    }

    return -1
  }

  while (queueBegin.length || queueEnd.length) {
    let res = expand(queueBegin, distToBegin, distToEnd)

    if (res !== -1) return res

    res = expand(queueEnd, distToEnd, distToBegin)

    if (res !== -1) return res
  }

  return -1
}
