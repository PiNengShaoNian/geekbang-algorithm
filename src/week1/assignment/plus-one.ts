export function plusOne(digits: number[]): number[] {
  let carry = 0
  ++digits[digits.length - 1]
  for (let i = digits.length - 1; i >= 0; --i) {
    let sum = digits[i] + carry
    if (sum >= 10) {
      sum = sum % 10
      carry = 1
    } else {
      carry = 0
    }

    digits[i] = sum
    if (carry === 0) break
  }

  if (carry) {
    digits.unshift(carry)
  }

  return digits
}
