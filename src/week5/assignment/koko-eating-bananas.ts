const valid = (piles: number[], speed: number, h: number): boolean => {
  let count = 0
  for (let i = 0; i < piles.length; ++i) {
    count += Math.ceil(piles[i] / speed)

    if (count > h) return false
  }

  return true
}

export function minEatingSpeed(piles: number[], h: number): number {
  let left = 0
  let right = 10 ** 9

  while (left <= right) {
    const mid = (left + right) >> 1

    if (valid(piles, mid, h)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
