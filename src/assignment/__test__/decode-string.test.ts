import { decodeString } from '../decode-string'

test('decodeString', () => {
  expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
  expect(decodeString("3[a2[c]]")).toBe('accaccacc')
})
