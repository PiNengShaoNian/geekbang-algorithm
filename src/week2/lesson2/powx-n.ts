export function myPow(x: number, n: number): number {
  if (n < 0) return 1 / myPow(x, -n)

  if (n === 0) return 1

  const half = Math.floor(n / 2)

  const temp = myPow(x, half)

  if (n % 2 === 1) {
    return x * temp * temp
  } else return temp * temp
}
