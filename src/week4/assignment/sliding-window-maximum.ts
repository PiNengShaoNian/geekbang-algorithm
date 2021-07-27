import { Comparable, PriorityQueue } from '../lesson1/priority-queue'

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = []
  const ans: number[] = []
  for (let i = 0; i < nums.length; ++i) {
    while (queue.length && queue[0] <= i - k) queue.shift()

    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) queue.pop()

    queue.push(i)

    if (i - k + 1 >= 0) {
      ans.push(nums[queue[0]])
    }
  }

  return ans
}

class IndexValuePair implements Comparable<IndexValuePair> {
  constructor(public index: number, public value: number) {}
  compareTo(that: IndexValuePair): number {
    return that.value - this.value
  }
}
export function maxSlidingWindow1(nums: number[], k: number): number[] {
  const maxPQ = new PriorityQueue<IndexValuePair>()
  for (let i = 0; i < k - 1; ++i) {
    maxPQ.push(new IndexValuePair(i, nums[i]))
  }

  const ans: number[] = []
  for (let i = k - 1; i < nums.length; ++i) {
    maxPQ.push(new IndexValuePair(i, nums[i]))

    while (maxPQ.size() && maxPQ.top()!.index <= i - k) maxPQ.pop()

    ans.push(maxPQ.top()!.value)
  }

  return ans
}
