import { TreeNode } from '../../model/TreeNode'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const valToParentNodeMap = new Map<number, TreeNode>()
  const dfs = (root: TreeNode | null): void => {
    if (!root) return

    if (root.left) {
      valToParentNodeMap.set(root.left.val, root)
      dfs(root.left)
    }

    if (root.right) {
      valToParentNodeMap.set(root.right.val, root)
      dfs(root.right)
    }
  }

  dfs(root)

  const redNodes = new Set<TreeNode>()

  while (p) {
    redNodes.add(p)
    p = valToParentNodeMap.get(p.val)!
  }

  while (!redNodes.has(q!)) {
    q = valToParentNodeMap.get(q!.val)!
  }

  return q
}
