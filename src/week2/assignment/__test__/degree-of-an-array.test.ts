import { findShortestSubArray, findShortestSubArray1 } from '../degree-of-an-array'

test('findShortestSubArray', () => {
  expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
  expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6)
  expect(findShortestSubArray([1, 2, 3])).toBe(1)
  expect(findShortestSubArray([1, 2, 2, 3, 2])).toBe(4)
  expect(findShortestSubArray([1])).toBe(1)
  expect(findShortestSubArray([1, 2, 2, 1, 1])).toBe(5)
  expect(findShortestSubArray([2, 2, 1, 1])).toBe(2)
  expect(findShortestSubArray([1, 1, 2, 2, 1, 1, 2, 2])).toBe(6)
  expect(findShortestSubArray([3, 3, 3, 3])).toBe(4)
  expect(findShortestSubArray([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 3, 4])).toBe(9)
  
  
  expect(findShortestSubArray1([1, 2, 2, 3, 1])).toBe(2)
  expect(findShortestSubArray1([1, 2, 2, 3, 1, 4, 2])).toBe(6)
  expect(findShortestSubArray1([1, 2, 3])).toBe(1)
  expect(findShortestSubArray1([1, 2, 2, 3, 2])).toBe(4)
  expect(findShortestSubArray1([1])).toBe(1)
  expect(findShortestSubArray1([1, 2, 2, 1, 1])).toBe(5)
  expect(findShortestSubArray1([2, 2, 1, 1])).toBe(2)
  expect(findShortestSubArray1([1, 1, 2, 2, 1, 1, 2, 2])).toBe(6)
  expect(findShortestSubArray1([3, 3, 3, 3])).toBe(4)
  expect(findShortestSubArray1([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 3, 4])).toBe(9)

})
