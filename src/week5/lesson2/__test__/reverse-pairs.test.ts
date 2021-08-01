import { reversePairs1 } from '../reverse-pairs'

test('reversePairs1', () => {
  const arr1 = [2, 4, 3, 5, 1]
  expect(reversePairs1(arr1)).toBe(3)
  expect(reversePairs1([1, 3, 2, 3, 1])).toBe(2)
  expect(arr1).toEqual([1, 2, 3, 4, 5])
})
