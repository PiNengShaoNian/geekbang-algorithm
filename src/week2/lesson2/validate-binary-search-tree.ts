import { TreeNode } from '../../model/TreeNode'

export function isValidBST(root: TreeNode | null): boolean {
  const helper = (root: TreeNode | null, max: number, min: number): boolean => {
    if (!root) return true

    if (root.val >= max || root.val <= min) return false

    let res = helper(root.left, Math.min(max, root.val), min)

    if (!res) return res

    return helper(root.right, max, Math.max(root.val, min))
  }

  return helper(root, Infinity, -Infinity)
}
