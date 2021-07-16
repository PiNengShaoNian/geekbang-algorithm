import { TreeNode } from '../../model/TreeNode'

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const valToNodeIndex = new Map<number, number>()

  for (let i = 0; i < inorder.length; ++i) {
    valToNodeIndex.set(inorder[i], i)
  }
  const helper = (
    preorderLeft: number,
    preorderRight: number,
    inorderLeft: number,
    inorderRight: number
  ): TreeNode | null => {
    if (preorderLeft > preorderRight) return null

    const root = new TreeNode(preorder[preorderLeft])
    const rootIndex = valToNodeIndex.get(root.val)!
    const leftSize = rootIndex - inorderLeft
    root.left = helper(
      preorderLeft + 1,
      leftSize + preorderLeft,
      inorderLeft,
      rootIndex - 1
    )
    root.right = helper(
      leftSize + preorderLeft + 1,
      preorderRight,
      rootIndex + 1,
      inorderRight
    )
    return root
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1)
}
