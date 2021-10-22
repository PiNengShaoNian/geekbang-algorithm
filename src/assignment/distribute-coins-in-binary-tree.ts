import { TreeNode } from '../model/TreeNode'

export function distributeCoins(root: TreeNode | null): number {
  let ans = 0
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0

    let L = dfs(node.left)
    let R = dfs(node.right)

    ans += Math.abs(L) + Math.abs(R)

    return L + R + node.val - 1
  }

  dfs(root)
  return ans
}
