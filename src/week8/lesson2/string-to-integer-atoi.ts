export function myAtoi(s: string): number {
  const n = s.length
  let index = 0
  while (index < n && s[index] === ' ') ++index

  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = -(2 ** 31)
  let sign = 1
  if (s[index] === '-' || s[index] === '+') {
    if (s[index] === '-') {
      sign = -1
    }
    ++index
  }

  let val = 0
  while (index < n && s[index] >= '0' && s[index] <= '9') {
    if (val > (INT_MAX - +s[index]) / 10) {
      if (sign < 0) return INT_MIN
      else return INT_MAX
    }

    val = val * 10 + +s[index]
    ++index
  }

  return sign * val
}
