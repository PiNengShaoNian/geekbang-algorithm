import { findSubstring1 } from '../substring-with-concatenation-of-all-words'

test('findSubstring1', () => {
  expect(findSubstring1('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
  expect(
    findSubstring1('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
  ).toEqual([])
  expect(
    findSubstring1('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
  ).toEqual([6, 9, 12])

  expect(findSubstring1('aabab', ['a', 'b'])).toEqual([1, 2, 3])

  expect(
    findSubstring1('lingmindraboofooowingdingbarrwingmonkeypoundcake', [
      'fooo',
      'barr',
      'wing',
      'ding',
      'wing',
    ])
  ).toEqual([13])
})
