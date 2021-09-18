import { reverseBits } from '../reverse-bits'

test('reverseBits', () => {
  expect(reverseBits(0b11111111111111111111111111111101)).toBe(3221225471)
})
