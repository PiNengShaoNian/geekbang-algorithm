import { Node } from '../../model/Node'

export function levelOrder(root: Node | null): number[][] {
  if (!root) return []
  type NodeWithDepth = {
    node: Node
    depth: number
  }
  const queue: NodeWithDepth[] = []

  queue.push({
    node: root,
    depth: 0,
  })
  const ans: number[][] = []
  while (queue.length) {
    const { node, depth } = queue.shift()!

    if (ans[depth] === undefined) {
      ans[depth] = []
    }

    ans[depth].push(node.val)

    for (const child of node.children) {
      queue.push({
        node: child,
        depth: depth + 1,
      })
    }
  }

  return ans
}
