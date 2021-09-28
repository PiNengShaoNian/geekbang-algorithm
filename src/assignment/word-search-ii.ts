export type char = string
class TrieNode {
  children: Map<char, TrieNode> = new Map()
  count: number = 0
}

function findWords(board: string[][], words: string[]): string[] {
  const root = new TrieNode()

  for (const word of words) {
    let cur = root

    for (let i = 0; i < word.length; ++i) {
      const c = word[i]

      if (!cur.children.get(c)) {
        cur.children.set(c, new TrieNode())
      }

      cur = cur.children.get(c)!
    }

    ++cur.count
  }

  const ans: string[] = []
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]
  const visited: boolean[][] = []
  const rows = board.length
  const cols = board[0].length

  const dfs = (row: number, col: number, cur: TrieNode, path: string): void => {
    const c = board[row][col]
    if (!cur.children.has(c)) return
    const parent = cur
    cur = cur.children.get(c)!
    if (cur.count > 0) {
      ans.push(path + c)
      --cur.count
    }

    if (cur.count <= 0 && cur.children.size === 0) {
      parent.children.delete(c)
    }

    for (let i = 0; i < 4; ++i) {
      const newRow = row + drow[i]
      const newCol = col + dcol[i]

      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        visited[newRow][newCol]
      )
        continue

      visited[row][col] = true
      dfs(newRow, newCol, cur, path + c)
      visited[row][col] = false
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      for (let k = 0; k < rows; ++k) {
        visited[k] = []
      }
      visited[i][j] = true
      dfs(i, j, root, '')
    }
  }

  return ans
}
