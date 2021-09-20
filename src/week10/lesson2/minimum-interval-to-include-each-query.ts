import { RedBlackTree } from './red-black-tree'

type MyEvent = {
  type: -1 | 0 | 1
  x: number
  length: number
}

export function minInterval(
  intervals: number[][],
  queries: number[]
): number[] {
  const events: MyEvent[] = []

  for (const interval of intervals) {
    const [left, right] = interval
    const length = right - left + 1
    events.push({
      type: 1,
      length: length,
      x: left,
    })
    events.push({
      type: -1,
      length: length,
      x: right,
    })
  }

  for (let i = 0; i < queries.length; ++i) {
    events.push({
      type: 0,
      x: queries[i],
      length: i,
    })
  }

  events.sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x
    return b.type - a.type
  })

  let ans: number[] = []
  const map = new RedBlackTree<number, number>()

  for (const event of events) {
    const { type, x, length } = event

    if (type === 1) {
      map.put(length, (map.get(length) ?? 0) + 1)
    } else if (type === -1) {
      map.put(length, map.get(length)! - 1)
      if (map.get(length) === 0) {
        map.delete(length)
      }
    } else {
      if (map.isEmpty()) ans[length] = -1
      else {
        ans[length] = map.min()!
      }
    }
  }

  return ans
}
