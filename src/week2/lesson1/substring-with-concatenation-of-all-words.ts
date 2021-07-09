function findSubstring(s: string, words: string[]): number[] {
  const isSame = (s: string, map: Map<string, number>, m: number): boolean => {
    const newMap = new Map<string, number>()
    for (let i = 0; i < s.length; i += m) {
      const word = s.substr(i, m)
      newMap.set(word, (newMap.get(word) ?? 0) + 1)
    }

    if (newMap.size !== map.size) return false

    for (const key of newMap.keys()) {
      if (newMap.get(key) !== map.get(key)) return false
    }

    return true
  }

  const ans: number[] = []

  const totalLength = words[0].length * words.length
  const map = new Map<string, number>()
  const m = words[0].length
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1)
  }
  for (let i = 0; i + totalLength <= s.length; ++i) {
    if (isSame(s.substr(i, totalLength), map, m)) {
      ans.push(i)
    }
  }
  return ans
}

/**
 *
 * @param s 滑动窗口优化解法
 * @param words
 */
export function findSubstring1(s: string, words: string[]): number[] {
  const m = words[0].length
  const totalLength = words.length * m
  const window = new Map<string, number>()
  const isSame = (map1: Map<string, number>, map2: Map<string, number>) => {
    if (map1.size !== map2.size) return false

    for (const key of map1.keys()) {
      if (map1.get(key) !== map2.get(key)) return false
    }

    return true
  }

  const map = new Map<string, number>()
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1)
  }
  const ans: Set<number> = new Set()
  for (let i = 0; i  < m; ++i) {
    let l = i
    let r = i - m
    window.clear()

    while (r < s.length && l < s.length) {
      if (r - l + m < totalLength) {
        for (; r - l + m < totalLength; ) {
          r += m
          const word = s.substr(r, m)
          window.set(word, (window.get(word) ?? 0) + 1)
        }
      } else {
        const word = s.substr(l, m)
        const count = window.get(word)! - 1
        if (count === 0) {
          window.delete(word)
        } else {
          window.set(word, count)
        }
        l += m
        r += m
        const rightWord = s.substr(r, m)
        window.set(rightWord, (window.get(rightWord) ?? 0) + 1)
      }

      if (isSame(window, map)) {
        ans.add(l)
      }
    }
  }

  return Array.from(ans)
}
