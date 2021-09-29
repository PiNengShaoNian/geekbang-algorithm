export function firstUniqChar(s: string): number {
  const count: number[] = Array.from<number>({ length: 26 }).fill(0)

  for (let i = 0; i < s.length; ++i) {
    ++count[s.charCodeAt(i) - 97]
  }

  for (let i = 0; i < s.length; ++i) {
    if (count[s.charCodeAt(i) - 97] === 1) return i
  }

  return -1
}
