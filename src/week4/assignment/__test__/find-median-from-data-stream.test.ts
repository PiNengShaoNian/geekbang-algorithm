import { MedianFinder } from '../find-median-from-data-stream'

test('MedianFinder', () => {
  const finder = new MedianFinder()

  expect(finder.findMedian()).toBe(-1)
  finder.addNum(1)
  expect(finder.findMedian()).toBe(1)
  finder.addNum(2)
  expect(finder.findMedian()).toBe(1.5)
  finder.addNum(3)
  expect(finder.findMedian()).toBe(2)
  finder.addNum(4)
  expect(finder.findMedian()).toBe(2.5)
  finder.addNum(5)
  expect(finder.findMedian()).toBe(3)
  finder.addNum(6)
  expect(finder.findMedian()).toBe(3.5)
  finder.addNum(7)
  expect(finder.findMedian()).toBe(4)

  const finder2 = new MedianFinder()
  finder2.addNum(5)
  expect(finder2.findMedian()).toBe(5)
  finder2.addNum(4)
  expect(finder2.findMedian()).toBe(4.5)
  finder2.addNum(3)
  expect(finder2.findMedian()).toBe(4)
  finder2.addNum(2)
  expect(finder2.findMedian()).toBe(3.5)
  finder2.addNum(1)
  expect(finder2.findMedian()).toBe(3)
})
