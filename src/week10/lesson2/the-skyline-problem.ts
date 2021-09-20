import { RedBlackTree } from './red-black-tree'

type XAndHeight = [x: number, height: number]
export function getSkyline(buildings: number[][]): number[][] {
  const events: XAndHeight[] = []

  for (const x of buildings) {
    const [left, right, height] = x
    events.push([left, height])
    events.push([right, -height])
  }

  events.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]

    if (a[1] !== b[1]) return a[1] - b[1]

    return 0
  })
  const h = new RedBlackTree<number, number>()

  const ans: number[][] = []
  for (let i = 0; i < events.length; ++i) {
    const [x, y] = events[i]

    if (y > 0) {
      h.put(y, (h.get(y) ?? 0) + 1)
    } else {
      h.put(-y, h.get(-y)! - 1)

      if (h.get(-y) === 0) {
        h.delete(-y)
      }
    }

    if (i === events.length - 1 || x !== events[i + 1][0]) {
      const height = h.isEmpty() ? 0 : h.max()!

      if (!ans.length || ans[ans.length - 1][1] !== height)
        ans.push([x, height])
    }
  }
  return ans
}
