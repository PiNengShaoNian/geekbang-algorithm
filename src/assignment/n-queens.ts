export function solveNQueens(n: number): string[][] {
  const ans: string[][] = []
  const cols: boolean[] = []
  const rows: boolean[] = []
  const dia1: Record<number, boolean> = {}
  const dia2: Record<number, boolean> = {}
  const placement: number[] = []

  const generateBoard = (): string[] => {
    const ans: string[] = []
    for (let i = 0; i < n; ++i) {
      const line = Array.from({ length: n }).fill('.')
      line[placement[i]] = 'Q'
      ans.push(line.join(''))
    }

    return ans
  }

  const dfs = (row: number) => {
    if (row === n) {
      ans.push(generateBoard())
      return
    }

    for (let i = 0; i < n; ++i) {
      if (!cols[i] && !dia1[i + row] && !dia2[i - row] && !rows[row]) {
        cols[i] = dia1[i + row] = dia2[i - row] = rows[row] = true
        placement[row] = i

        dfs(row + 1)

        cols[i] = dia1[i + row] = dia2[i - row] = rows[row] = false
      }
    }
  }

  dfs(0)

  return ans
}
