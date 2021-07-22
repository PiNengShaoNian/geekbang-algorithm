import { TreeNode } from '../../model/TreeNode'

export function diameterOfBinaryTree(root: TreeNode | null): number {
  const heightMemo = new Map<TreeNode, number>()

  const height = (root: TreeNode | null): number => {
    if (!root) return 0
    if (heightMemo.has(root)) return heightMemo.get(root)!
    const ans = 1 + Math.max(height(root.left), height(root.right))
    heightMemo.set(root, ans)
    return ans
  }

  let ans = 0

  const dfs = (root: TreeNode | null) => {
    if (!root) return

    const leftHeight = height(root.left)
    const rightHeight = height(root.right)

    const cand = leftHeight + rightHeight
    ans = Math.max(cand, ans)
    dfs(root.left)
    dfs(root.right)
  }

  dfs(root)

  return ans
}

export function diameterOfBinaryTree1(root: TreeNode | null): number {
  let ans = 1

  const depth = (root: TreeNode | null): number => {
    if (!root) return 0

    const leftHeight = depth(root.left)
    const rightHeight = depth(root.right)

    const cand = leftHeight + rightHeight + 1
    ans = Math.max(cand, ans)
    return Math.max(leftHeight, rightHeight) + 1
  }

  depth(root)

  return ans - 1
}
