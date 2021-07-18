export const solveNQueens = (n: number): string[][] => {
  const rows: boolean[] = Array.from({ length: n })
  const cols: boolean[] = Array.from({ length: n })
  const dia2: Record<number, boolean> = {}
  const dia1: Record<number, boolean> = {}
  const placement: number[] = []
  const ans: string[][] = []
  const generateBoard = (): string[] => {
    const ans: string[] = []

    for (let i = 0; i < placement.length; ++i) {
      const str = '.'.repeat(n)
      const temp = [...str]
      temp[placement[i]] = 'Q'
      ans.push(temp.join(''))
    }

    return ans
  }
  const dfs = (row: number): void => {
    if (row >= n) {
      ans.push(generateBoard())
      return
    }

    for (let i = 0; i < n; ++i) {
      if (!rows[row] && !cols[i] && !dia1[row - i] && !dia2[row + i]) {
        placement[row] = i
        cols[i] = rows[row] = dia1[row - i] = dia2[row + i] = true
        dfs(row + 1)
        cols[i] = rows[row] = dia1[row - i] = dia2[row + i] = false
      }
    }
  }

  dfs(0)

  return ans
}
