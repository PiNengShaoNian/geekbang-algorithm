declare function guess(x: number): number

export function guessNumber(n: number): number {
  let left = 1
  let right = n

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    const cmp = guess(mid)

    if (cmp === 0) return mid
    else if (cmp < 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}
