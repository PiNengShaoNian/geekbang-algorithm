class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

export function preorder(root: Node | null): number[] {
  const ans: number[] = []

  const dfs = (root: Node | null): void => {
    if (!root) return

    ans.push(root.val)

    for (const child of root.children) {
      dfs(child)
    }
  }

  dfs(root)
  return ans
}
