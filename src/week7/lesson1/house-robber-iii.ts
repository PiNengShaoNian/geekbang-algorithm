import { TreeNode } from '../../model/TreeNode'

export function rob(root: TreeNode | null): number {
  const dp: Map<TreeNode, [number, number]> = new Map()
  // dp[node][0] 不抢劫node节点是最大的收益
  // dp[node][1] 抢劫node结点时获得的最大收益

  const dfs = (node: TreeNode | null): number => {
    if (node === null) return 0
    const vals: [number, number] = [0, 0]
    if (node.left) {
      //不抢劫node,他的最大收益为Math.max(dp[son][0], dp[son][1])
      vals[0] += dfs(node.left)
      //抢劫node,他的最大收益为dp[son][0] + node.val
      vals[1] += dp.get(node.left)![0]
    }

    if (node.right) {
      vals[0] += dfs(node.right)
      vals[1] += dp.get(node.right)![0]
    }

    vals[1] += node.val
    dp.set(node, vals)

    return Math.max(vals[0], vals[1])
  }

  return dfs(root)
}
