import { solve } from '../max-profit-with-deadline'

test('max-profit-with-deadline', () => {
  expect(
    solve([
      [50, 2],
      [10, 1],
      [20, 2],
      [30, 1],
    ])
  ).toEqual(80)
  expect(
    solve([
      [20, 1],
      [2, 1],
      [10, 3],
      [100, 2],
      [8, 2],
      [5, 20],
      [50, 10],
    ])
  ).toEqual(185)
})
