import { findMin } from '../find-minimum-in-rotated-sorted-array-ii'

test('findMin', () => {
  expect(findMin([10, 1, 10, 10, 10])).toBe(1)
  expect(findMin([1])).toBe(1)
  expect(findMin([1, 1])).toBe(1)
  expect(findMin([3, 1, 1])).toBe(1)
})
