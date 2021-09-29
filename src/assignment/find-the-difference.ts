export function findTheDifference(s: string, t: string): string {
  const count: number[] = Array.from<number>({ length: 26 }).fill(0)

  for (let i = 0; i < s.length; ++i) {
    --count[s.charCodeAt(i) - 97]
    ++count[t.charCodeAt(i) - 97]
  }

  ++count[t.charCodeAt(s.length) - 97]

  for (let i = 0; i < count.length; ++i) {
    if (count[i] > 0) return String.fromCharCode(i + 97)
  }

  return ''
}
