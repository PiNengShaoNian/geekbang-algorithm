import { TreeNode } from '../model/TreeNode'

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  const Impl = (root: TreeNode | null, sum: number): boolean => {
    if (!root) {
      if (sum === 0) return true
      else return false
    }

    if (!root.left) return Impl(root.right, sum - root.val)

    if (!root.right) return Impl(root.left, sum - root.val)

    return Impl(root.left, sum - root.val) || Impl(root.right, sum - root.val)
  }

  return Impl(root, targetSum)
}
