import { findNeighboringValues } from '../find-neighboring-values'

test('findNeighboringValues', () => {
  expect(findNeighboringValues([1, 8, 5, 7, 3, 6])).toEqual([1, 8, 8, 1, 5])
})
