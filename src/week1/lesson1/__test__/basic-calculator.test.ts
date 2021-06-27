import { calculate } from '../basic-calculator'

test('calculate', () => {
  expect(calculate('1 + 1')).toBe(2)
  expect(calculate(' 2-1 + 2 ')).toBe(3)
  expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23)
  expect(calculate('1 - -1')).toBe(0)
  expect(calculate('-48 + +48')).toBe(0)
  expect(calculate('-3-3')).toBe(-6)
  expect(calculate('-3-3+3')).toBe(-3)
})
