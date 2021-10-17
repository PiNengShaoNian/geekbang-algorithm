import { TreeNode } from "../model/TreeNode"

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return []
  const ans: number[][] = []

  const Impl = (root: TreeNode | null, sum: number, path: number[]) => {
    if (!root) {
      if (sum === 0) {
        ans.push(path.slice())
      }

      return
    }

    if (!root.left) {
      path.push(root.val)
      Impl(root.right, sum - root.val, path)
      path.pop()
      return
    }

    if (!root.right) {
      path.push(root.val)
      Impl(root.left, sum - root.val, path)
      path.pop()
      return
    }

    path.push(root.val)
    Impl(root.left, sum - root.val, path)
    path.pop()

    path.push(root.val)
    Impl(root.right, sum - root.val, path)
    path.pop()
  }

  Impl(root, targetSum, [])

  return ans
}
