import { coinChange } from '../coin-change'

test('coinChange', () => {
  expect(coinChange([1, 3, 5], 8)).toBe(2)
  expect(coinChange([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 9999)).toBe(-1)
})
