import { MinHeap } from '../min-heap'

test('MinHeap', () => {
  const minPQ = new MinHeap<number>()

  expect(minPQ.size()).toBe(0)

  minPQ.push(4)
  minPQ.push(2)
  minPQ.push(3)
  minPQ.push(5)
  minPQ.push(1)

  expect(minPQ.size()).toBe(5)

  const arr: number[] = []

  while (minPQ.size()) {
    arr.push(minPQ.pop()!)
  }

  expect(arr).toEqual([1, 2, 3, 4, 5])
  expect(minPQ.size()).toBe(0)
})
