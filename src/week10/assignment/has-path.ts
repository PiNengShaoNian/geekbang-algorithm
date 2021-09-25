const drow = [-1, 0, 1, 0]
const dcol = [0, 1, 0, -1]

const getNext = (row: number, col: number, dir: number, maze: number[][]) => {
  const rows = maze.length
  const cols = maze[0].length
  while (true) {
    const nextRow = row + drow[dir]
    const nextCol = col + dcol[dir]

    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) break

    if (maze[nextRow][nextCol] === 1) break

    col = nextCol
    row = nextRow
  }

  return [row, col]
}

export const hasPath = (
  maze: number[][],
  start: number[],
  destination: number[]
): boolean => {
  const visted: boolean[][] = []
  const queue: number[][] = []

  for (let i = 0; i < maze.length; ++i) {
    visted[i] = []
  }

  queue.push(start)
  visted[start[0]][start[1]] = true
  while (queue.length) {
    const [row, col] = queue.shift()!

    for (let i = 0; i < 4; ++i) {
      const [nextRow, nextCol] = getNext(row, col, i, maze)

      if (!visted[nextRow][nextCol]) {
        queue.push([nextRow, nextCol])
        visted[nextRow][nextCol] = true

        if (nextRow === destination[0] && nextCol === destination[1])
          return true
      }
    }
  }

  return false
}
