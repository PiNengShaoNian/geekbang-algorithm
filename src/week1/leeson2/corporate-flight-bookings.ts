export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const delta: number[] = Array.from({ length: n + 2 }).fill(0) as number[]
  for (const [first, last, seat] of bookings) {
    delta[first] += seat
    delta[last + 1] -= seat
  }

  const a: number[] = Array.from({ length: n + 1 }).fill(0) as number[]
  for (let i = 1; i <= n; ++i) a[i] = a[i - 1] + delta[i]

  for (let i = 1; i <= n; ++i) a[i - 1] = a[i]
  a.pop()

  return a
}
