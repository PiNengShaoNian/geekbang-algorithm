type char = string

export function minWindow(s: string, t: string): string {
  const window: Map<char, number> = new Map()

  let r = -1
  let l = 0
  const countT: Map<char, number> = new Map()

  for (let i = 0; i < t.length; ++i) {
    countT.set(t[i], (countT.get(t[i]) ?? 0) + 1)
  }

  const contains = (superset: Map<char, number>, set: Map<char, number>) => {
    for (const [key, value] of set.entries()) {
      const x = superset.get(key) ?? 0

      if (x < value) return false
    }

    return true
  }

  let ans = [s.length, s.length * 2 + 1]

  while (l < s.length) {
    const isContains = contains(window, countT)
    if (r + 1 < s.length && !isContains) {
      const char = s[++r]

      window.set(char, (window.get(char) ?? 0) + 1)
    } else {
      if (isContains) {
        if (r - l + 1 < ans[1] - ans[0]) {
          ans[0] = l
          ans[1] = r + 1
        }
      }
      const char = s[l]
      window.set(char, (window.get(char) ?? 0) - 1)
      if (window.get(char) === 0) {
        window.delete(char)
      }

      ++l
    }
  }

  if (ans[0] === s.length) return ''

  return s.slice(ans[0], ans[1])
}
