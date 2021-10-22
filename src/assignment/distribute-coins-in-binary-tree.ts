/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '../model/TreeNode'

function distributeCoins(root: TreeNode | null): number {
  let id = 0
  const nodeToNodeId = new Map<TreeNode, number>()
  const nodeIdToNode = new Map<number, TreeNode>()
  const graph: number[][] = []

  const setIdAndBuildGraph = (node: TreeNode | null): number => {
    if (!node) return -1

    const nodeId = id
    nodeToNodeId.set(node, nodeId)
    nodeIdToNode.set(nodeId, node)
    ++id

    graph[nodeId] = []
    if (node.left) {
      const leftId = setIdAndBuildGraph(node.left)
      graph[nodeId].push(leftId)
      graph[leftId].push(nodeId)
    }

    if (node.right) {
      const rightId = setIdAndBuildGraph(node.right)
      graph[nodeId].push(rightId)
      graph[rightId].push(nodeId)
    }

    return nodeId
  }

  setIdAndBuildGraph(root)

  const setDistance = (source: number) => {
    const queue: [vertex: number, distance: number][] = []

    queue.push([source, 0])
    visited[source] = true
    while (queue.length) {
      const [vertex, dis] = queue.shift()!

      const adj = graph[vertex]

      for (const neighbor of adj) {
        if (visited[neighbor]) continue

        if (unallocated.has(neighbor)) {
          unallocated.delete(neighbor)
          ans += dis + 1
        }
        visited[neighbor] = true
        queue.push([neighbor, dis + 1])
      }
    }
  }

  const unallocated = new Set<number>()
  const queue: number[] = []
  for (const node of nodeIdToNode.values()) {
    if (node.val === 0) {
      unallocated.add(nodeToNodeId.get(node)!)
    } else if (node.val > 1) {
      queue.push(nodeToNodeId.get(node)!)
    }
  }

  let ans = 0

  let visited: boolean[]

  for (let i = 0; i < id; ++i) {
    visited = []
    setDistance(i)
  }

  return ans
}
