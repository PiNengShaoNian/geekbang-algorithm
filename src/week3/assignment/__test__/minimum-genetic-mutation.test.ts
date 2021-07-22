import { minMutation } from '../minimum-genetic-mutation'

test('minMutation', () => {
  expect(
    minMutation('AACCGGTT', 'AAACGGTA', [
      'AACCGATT',
      'AACCGATA',
      'AAACGATA',
      'AAACGGTA',
    ])
  ).toBe(4)
})
