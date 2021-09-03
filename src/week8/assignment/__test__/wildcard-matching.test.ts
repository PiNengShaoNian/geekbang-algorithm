import { isMatch } from '../wildcard-matching'

test('isMatch', () => {
  expect(isMatch('d', 'd*')).toBeTruthy()
})
