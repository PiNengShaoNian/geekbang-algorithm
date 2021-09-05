export const contains = (s: string, t: string) => {
  if (t.length === 0) return true

  const n = s.length
  const m = t.length

  s = ' ' + s
  t = ' ' + t

  const p = 9999991
  let tHash = 0

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

  /**
   * fooba
   * fo000
   *   
   * 
   * Hash(s[l...r]) = (H(r + 1) - H(l) * b ^ r - l + 1) mod p
   * @param l 
   * @param r 
   * @returns 
   */
  const calcHash = (l: number, r: number): number => {
    return (((sHash[r] - sHash[l - 1] * p13331[r - l + 1]) % p) + p) % p
  }

  for (let i = m; i <= n; ++i) {
    if (
      calcHash(i - m + 1, i) === tHash &&
      s.substring(i - m + 1, i + 1) === t.substring(1)
    ) {
      return i - m
    }
  }

  return -1
}
