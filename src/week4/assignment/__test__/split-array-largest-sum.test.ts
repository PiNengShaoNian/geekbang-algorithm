import { splitArray } from '../split-array-largest-sum'

test('splitArray', () => {
  expect(splitArray([7, 2, 5, 10, 8], 2)).toBe(18)
  expect(splitArray([1, 2, 3, 100], 2)).toBe(100)
  expect(splitArray([1000, 1, 2, 3, 100], 2)).toBe(1000)
  expect(splitArray([1000, 500, 500, 1, 2, 3, 100], 2)).toBe(1106)
  expect(splitArray([1000, 1, 2, 3, 50, 500, 500, 100], 2)).toBe(1100)
  expect(splitArray([1, 2, 3, 4, 5], 2)).toBe(9)
  expect(splitArray([1, 2, 3, 4, 5, 6], 2)).toBe(11)
  expect(splitArray([1, 1, 1], 2)).toBe(2)
  expect(splitArray([1, 1, 1], 3)).toBe(1)
  expect(splitArray([550, 500, 500, 1, 2, 3, 100], 3)).toBe(606)
})
