import { equationsPossible } from '../satisfiability-of-equality-equations'

test('equationsPossible', () => {
  expect(equationsPossible(['a==b', 'e==c', 'b==c', 'a!=e'])).toBeFalsy()
})
