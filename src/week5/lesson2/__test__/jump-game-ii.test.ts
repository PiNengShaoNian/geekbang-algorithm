import { jump } from '../jump-game-ii'

test('jump', () => {
  expect(jump([1, 2, 3, 4, 5])).toBe(3)
  expect(jump([1, 2, 1, 1, 1])).toBe(3)
})
