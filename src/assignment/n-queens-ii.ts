export function totalNQueens(n: number): number {
  let ans: number = 0
  const cols: boolean[] = []
  const rows: boolean[] = []
  const dia1: Record<number, boolean> = {}
  const dia2: Record<number, boolean> = {}

  const dfs = (row: number) => {
    if (row === n) {
      ++ans
      return
    }

    for (let i = 0; i < n; ++i) {
      if (!cols[i] && !dia1[i + row] && !dia2[i - row] && !rows[row]) {
        cols[i] = dia1[i + row] = dia2[i - row] = rows[row] = true

        dfs(row + 1)

        cols[i] = dia1[i + row] = dia2[i - row] = rows[row] = false
      }
    }
  }

  dfs(0)

  return ans
}
