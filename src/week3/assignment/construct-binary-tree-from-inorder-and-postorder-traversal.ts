import { TreeNode } from '../../model/TreeNode'

export const buildTree = (
  inorder: number[],
  postorder: number[]
): TreeNode | null => {
  if (!inorder.length) return null

  const buildTreeHelper = (
    inorder: number[],
    inLeft: number,
    inRight: number
  ): null | TreeNode => {
    if (inLeft > inRight) return null

    const root = new TreeNode(postorder[postIndex])
    const index = map.get(postorder[postIndex])!
    --postIndex

    root.right = buildTreeHelper(inorder, index + 1, inRight)
    root.left = buildTreeHelper(inorder, inLeft, index - 1)

    return root
  }

  const map: Map<number, number> = new Map()
  for (let i = 0; i < inorder.length; ++i) {
    map.set(inorder[i], i)
  }
  let postIndex = postorder.length - 1

  return buildTreeHelper(inorder, 0, inorder.length - 1)
}
