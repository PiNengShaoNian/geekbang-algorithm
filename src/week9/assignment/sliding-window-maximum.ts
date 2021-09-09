import { Comparable, PriorityQueue } from '../../week4/lesson1/priority-queue'

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = []
  let ans: number[] = []
  for (let i = 0; i < nums.length; ++i) {
    while (queue.length && queue[0] < i - k + 1) queue.shift()

    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) queue.pop()

    queue.push(i)

    if (i - k + 1 >= 0) {
      ans.push(nums[queue[0]])
    }
  }

  return ans
}

export class IndexValuePair implements Comparable<IndexValuePair> {
  constructor(public index: number, public value: number) {}

  compareTo(that: IndexValuePair): number {
    return this.value - that.value
  }
}

export function maxSlidingWindow1(nums: number[], k: number): number[] {
  const ans: number[] = []
  const minPQ = new PriorityQueue<IndexValuePair>()

  for (let i = 0; i < k - 1; ++i) {
    minPQ.push(new IndexValuePair(i, nums[i]))
  }

  for (let i = k - 1; i < nums.length; ++i) {
    minPQ.push(new IndexValuePair(i, nums[i]))

    while (minPQ.size() && minPQ.top()!.index <= i - k) minPQ.pop()

    ans.push(minPQ.top()!.value)
  }

  return ans
}
