import { TreeNode } from '../../model/TreeNode'
import { hasPathSum } from '../path-sum'

test('hasPathSum', () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  expect(hasPathSum(root, 4)).toBeTruthy()
})
