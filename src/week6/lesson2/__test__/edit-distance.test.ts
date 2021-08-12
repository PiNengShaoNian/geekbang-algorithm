import { minDistance } from '../edit-distance'

test('minDistance', () => {
  expect(minDistance('ho', 'oh')).toBe(2)
  expect(minDistance('horse', 'ros')).toBe(3)
})
