import { TreeNode } from '../../model/TreeNode'

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root

  invertTree(root.left)
  invertTree(root.right)

  const temp = root.left
  root.left = root.right
  root.right = temp

  return root
}
