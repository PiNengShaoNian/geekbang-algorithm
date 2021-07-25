import { TreeNode } from '../../model/TreeNode'

export function convertBST(root: TreeNode | null): TreeNode | null {
  const nodes: TreeNode[] = []
  const dfs = (root: TreeNode | null) => {
    if (!root) return

    dfs(root.left)
    nodes.push(root)
    dfs(root.right)
  }

  dfs(root)

  for (let i = nodes.length - 2; i >= 0; --i) {
    nodes[i].val += nodes[i + 1].val
  }

  return root
}

//反向中序遍历
export function convertBST1(root: TreeNode | null): TreeNode | null {
  let sum = 0
  const dfs = (root: TreeNode | null) => {
    if (!root) return

    dfs(root.right)
    sum += root.val
    root.val = sum
    dfs(root.left)
  }

  dfs(root)

  return root
}
