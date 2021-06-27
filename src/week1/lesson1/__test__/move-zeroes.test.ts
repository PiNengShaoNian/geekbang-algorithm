import { moveZeroes } from '../move-zeroes'

test('moveZeroes', () => {
  const arr = [0, 1, 0, 3, 12]
  moveZeroes(arr)
  expect(arr).toEqual([1, 3, 12, 0, 0])
})
