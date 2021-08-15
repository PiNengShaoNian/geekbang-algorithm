import { change1 } from '../coin-change-2'

test('coin-change-2', () => {
  expect(change1(5, [1, 2, 5])).toBe(4)
})
