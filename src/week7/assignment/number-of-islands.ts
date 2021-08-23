function numIslands(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const fa: number[] = []

  for (let i = 0; i < rows * cols; ++i) {
    fa[i] = i
  }

  const indexToVertex = (row: number, col: number) => {
    return row * cols + col
  }
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  const find = (x: number): number => {
    return x === fa[x] ? x : (fa[x] = find(fa[x]))
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === '0') continue

      for (let k = 0; k < 4; ++k) {
        const newRow = i + drow[k]
        const newCol = j + dcol[k]

        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols ||
          grid[newRow][newCol] === '0'
        )
          continue

        fa[find(indexToVertex(newRow, newCol))] = find(indexToVertex(i, j))
      }
    }
  }

  const set = new Set<number>()

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === '1') {
        set.add(find(indexToVertex(i, j)))
      }
    }
  }

  return set.size
}
