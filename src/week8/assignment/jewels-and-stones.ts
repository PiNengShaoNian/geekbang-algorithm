export function numJewelsInStones(jewels: string, stones: string): number {
  const has = []

  for (let i = 0; i < jewels.length; ++i) {
    has[jewels.charCodeAt(i)] = true
  }

  let ans = 0

  for (let i = 0; i < stones.length; ++i) {
    if (has[stones.charCodeAt(i)]) {
      ++ans
    }
  }

  return ans
}
