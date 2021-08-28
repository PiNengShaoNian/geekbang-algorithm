export function longestPalindrome(s: string): string {
  if (s.length === 1) return s
  const n = s.length
  let ansLen = 0
  let ansStart = 0

  //中间取一个字符,向两周拓展开
  for (let i = 1; i < n; ++i) {
    let l = i - 1
    let r = i + 1

    while (l >= 0 && r < n && s[l] === s[r]) {
      --l
      ++r
    }

    if (r - l - 1 > ansLen) {
      ansLen = r - l - 1
      ansStart = l + 1
    }
  }

  //中间取两个字符向两周扩展开
  for (let i = 0; i < n; ++i) {
    let l = i
    let r = i + 1

    while (l >= 0 && r < n && s[l] === s[r]) {
      --l
      ++r
    }

    if (r - l - 1 > ansLen) {
      ansLen = r - l - 1
      ansStart = l + 1
    }
  }

  return s.substr(ansStart, ansLen)
}
