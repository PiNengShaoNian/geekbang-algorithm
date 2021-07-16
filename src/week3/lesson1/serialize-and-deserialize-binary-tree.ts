import { TreeNode } from '../../model/TreeNode'

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  let ans: string = ''
  const dfs = (root: TreeNode | null): void => {
    if (!root) {
      ans += '$ '
      return
    }

    ans += root.val + ' '

    dfs(root.left)
    dfs(root.right)
  }

  dfs(root)

  return ans
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  const nodes: string[] = data.split(' ')
  if (nodes[nodes.length - 1] === '') nodes.pop()
  let curr = 0

  const buildTree = (): TreeNode | null => {
    if (nodes[curr] === '$') {
      ++curr
      return null
    }

    const root = new TreeNode()
    root.val = +nodes[curr]
    ++curr
    root.left = buildTree()
    root.right = buildTree()

    return root
  }

  return buildTree()
}
