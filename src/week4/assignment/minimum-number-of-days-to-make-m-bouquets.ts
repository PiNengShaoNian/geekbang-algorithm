export function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length / k < m) return -1
  let right = 10 ** 9
  let left = 0

  while (left <= right) {
    const mid = (left + right) >> 1

    let remainning = m
    let x = 0
    for (let i = 0; i < bloomDay.length; ++i) {
      if (bloomDay[i] <= mid) {
        if (++x === k) {
          --remainning
          x = 0
        }
      } else {
        x = 0
      }

      if (remainning === 0) break
    }

    if (remainning === 0) {
      right = mid - 1
    } else if (remainning > 0) {
      left = mid + 1
    }
  }

  return left
}
