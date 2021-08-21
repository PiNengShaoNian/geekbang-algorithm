export type char = string

class TrieNode {
  child: Map<char, TrieNode> = new Map()
  word: string | null = null
}

export function findWords(board: string[][], words: string[]): string[] {
  const root = new TrieNode()

  for (const word of words) {
    let curr = root

    for (const ch of word) {
      if (!curr.child.has(ch)) {
        curr.child.set(ch, new TrieNode())
      }

      curr = curr.child.get(ch)!
    }

    curr.word = word
  }

  const ans: string[] = []
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  const dfs = (
    row: number,
    col: number,
    curr: TrieNode,
    visited: boolean[][]
  ): void => {
    const ch = board[row][col]

    if (!curr.child.has(ch)) return

    const parent = curr
    curr = parent.child.get(ch)!

    if (curr.word !== null) {
      ans.push(curr.word)
      curr.word = null
    }

    if (curr.child.size === 0) {
      parent.child.delete(ch)
    }

    for (let i = 0; i < 4; ++i) {
      const newRow = drow[i] + row
      const newCol = dcol[i] + col

      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        visited[newRow][newCol]
      )
        continue

      visited[newRow][newCol] = true
      dfs(newRow, newCol, curr, visited)
      visited[newRow][newCol] = false
    }
  }

  const rows = board.length
  const cols = board[0].length

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      const visited: boolean[][] = []
      for (let k = 0; k < rows; ++k) {
        visited[k] = []
      }
      visited[i][j] = true
      dfs(i, j, root, visited)
    }
  }
  return ans
}
