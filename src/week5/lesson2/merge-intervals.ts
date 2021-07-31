export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])

  const ans: number[][] = []

  let prev = intervals[0]
  const addOne = (a: number[]) => {
    if (ans.length && ans[ans.length - 1][0] === a[0]) {
      ans.pop()
    }
    ans.push(a)
  }

  addOne(prev)
  for (let i = 1; i < intervals.length; ++i) {
    const cur = intervals[i]

    if (cur[0] === prev[0]) {
      prev = cur[1] > prev[1] ? cur : prev
    } else if (cur[0] <= prev[1]) {
      prev = [prev[0], Math.max(cur[1], prev[1])]
    } else {
      prev = cur
    }

    addOne(prev)
  }

  return ans
}

/**
 * 差分解法
 * @param intervals 
 * @returns 
 */
export function merge1(intervals: number[][]): number[][] {
  const event: number[][] = []

  for (let i = 0; i < intervals.length; ++i) {
    const [start, end] = intervals[i]
    event.push([start, 1])
    event.push([end + 1, -1])
  }

  event.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })

  let left = 0
  let count = 0
  const ans: number[][] = []
  for (let i = 0; i < event.length; ++i) {
    const [index, x] = event[i]
    if (count === 0) {
      left = index
    }
    count += x
    if (count === 0) {
      ans.push([left, index - 1])
    }
  }

  return ans
}
