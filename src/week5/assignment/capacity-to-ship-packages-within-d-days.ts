const validate = (
  capacity: number,
  days: number,
  weights: number[]
): boolean => {
  let sum = 0
  let count = 0

  for (let i = 0; i < weights.length; ++i) {
    if (weights[i] > capacity) return false
    if (weights[i] + sum <= capacity) {
      sum += weights[i]
    } else {
      ++count
      sum = weights[i]
    }

    if (count > days) return false
  }

  if (sum !== 0) ++count

  return count <= days
}

export function shipWithinDays(weights: number[], days: number): number {
  let left = 0
  let right = 25000000

  while (left <= right) {
    const mid = (left + right) >> 1

    if (validate(mid, days, weights)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
