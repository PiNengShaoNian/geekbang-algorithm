import { TreeNode } from '../../model/TreeNode'

export const inorderSuccessor = (
  root: TreeNode | null,
  p: TreeNode
): TreeNode | null => {
  if (!root) return null

  if (root.val < p.val) {
    return inorderSuccessor(root.right, p)
  } else if (root.val === p.val) {
    const rightNode = inorderSuccessor(root.right, p)
    return rightNode
  } else {
    const leftNode = inorderSuccessor(root.left, p)

    if (leftNode) return leftNode
    return root
  }
}
