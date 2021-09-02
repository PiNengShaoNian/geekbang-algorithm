export function isIsomorphic(s: string, t: string): boolean {
  const getUnifromStr = (s: string): string => {
    const charToCount = new Map<string, number>()
    let count = 0
    let ans = ''

    for (let i = 0; i < s.length; ++i) {
      if (!charToCount.has(s[i])) {
        charToCount.set(s[i], count++)
      }

      ans += charToCount.get(s[i]) + '-'
    }

    return ans
  }

  return getUnifromStr(s) === getUnifromStr(t)
}

export function isIsomorphic1(s: string, t: string): boolean {
  const getUnifromStr = (s: string): string => {
    const charToCount = new Map<string, number>()
    let ans = ''
    const charToFirstIndex: Record<string, number> = {}

    for (let i = 0; i < s.length; ++i) {
      if (charToFirstIndex[s[i]] === undefined) charToFirstIndex[s[i]] = i
      charToCount.set(s[i], (charToCount.get(s[i]) ?? 0) + 1)

      ans += charToFirstIndex[s[i]] + '-' + charToCount.get(s[i]) + '-'
    }

    return ans
  }

  return getUnifromStr(s) === getUnifromStr(t)
}
