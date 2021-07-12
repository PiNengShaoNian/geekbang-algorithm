import { TreeNode } from '../../model/TreeNode'

export function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  const left = minDepth(root.left)
  const right = minDepth(root.right)

  if (left === 0 || right === 0) {
    return 1 + left + right
  } else {
    return 1 + Math.min(left, right)
  }
}
