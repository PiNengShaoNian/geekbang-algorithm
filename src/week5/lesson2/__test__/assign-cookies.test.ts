import { findContentChildren } from '../assign-cookies'

test('findContentChildren', () => {
  expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toBe(2)
})
