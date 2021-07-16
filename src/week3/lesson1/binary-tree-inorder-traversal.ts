import { TreeNode } from '../../model/TreeNode'

export function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const dfs = (root: TreeNode | null) => {
    if (!root) return

    dfs(root.left)
    ans.push(root.val)
    dfs(root.right)
  }

  dfs(root)

  return ans
}
