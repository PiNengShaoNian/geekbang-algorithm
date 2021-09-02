export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const count = Array.from<number>({ length: 26 }).fill(0)

  for (let i = 0; i < s.length; ++i) {
    ++count[s.charCodeAt(i) - 97]
    --count[t.charCodeAt(i) - 97]
  }

  for (let i = 0; i < count.length; ++i) {
    if (count[i] !== 0) return false
  }
  return true
}
