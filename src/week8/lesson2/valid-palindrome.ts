export function isPalindrome(s: string): boolean {
  let a = ''

  for (const ch of s) {
    if (ch <= '9' && ch >= '0') a += ch
    else if (ch <= 'Z' && ch >= 'A') a += ch.toLowerCase()
    else if (ch <= 'z' && ch >= 'a') a += ch
  }

  let l = 0
  let r = a.length - 1
  while (l < r) {
    if (a[l] !== a[r]) return false

    --r
    ++l
  }
  return true
}
