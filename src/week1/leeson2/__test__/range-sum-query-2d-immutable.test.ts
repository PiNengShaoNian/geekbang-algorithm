import { NumMatrix } from '../range-sum-query-2d-immutable'

test('NumMatrix', () => {
  const matrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ])

  expect(matrix.sumRegion(2, 1, 4, 3)).toBe(8)
  expect(matrix.sumRegion(1, 1, 2, 2)).toBe(11)
  expect(matrix.sumRegion(1, 2, 2, 4)).toBe(12)
})
