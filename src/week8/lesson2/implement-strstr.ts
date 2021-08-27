export function strStr(s: string, t: string): number {
  if (t.length === 0) return 0
  const m = t.length
  const n = s.length

  s = ' ' + s
  t = ' ' + t

  let tHash = 0
  let p = 9999991

  for (let i = 1; i <= m; ++i) {
    tHash = (tHash * 13331 + t.charCodeAt(i)) % p
  }

  let sHash: number[] = []
  sHash[0] = 0
  let p13331: number[] = []
  p13331[0] = 1

  for (let i = 1; i <= n; ++i) {
    sHash[i] = (sHash[i - 1] * 13331 + s.charCodeAt(i)) % p
    p13331[i] = (p13331[i - 1] * 13331) % p
  }

  const hash = (l: number, r: number): number => {
    return ((sHash[r] - sHash[l - 1] * p13331[r - l + 1]) % p + p) % p
  }

  for (let i = m; i <= n; ++i) {
    if (
      hash(i - m + 1, i) === tHash &&
      s.substr(i - m + 1, m) === t.substring(1)
    )
      return i - m
  }

  return -1
}
