import { contains } from '../contains-substring'

test('contains', () => {
  expect(contains('abc', 'a')).toBe(0)
  expect(contains('abc', 'bc')).toBe(1)
  expect(contains('abc', 'abc')).toBe(0)
  expect(contains('abc', 'cc')).toBe(-1)
})
