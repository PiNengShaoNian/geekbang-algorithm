export function reverseOnlyLetters(s: string): string {
  let l = 0
  let r = s.length - 1

  const ans = [...s]
  const isValidChar = (char: string): boolean => {
    return (char <= 'z' && char >= 'a') || (char >= 'A' && char <= 'Z')
  }

  while (l < r) {
    while (l < s.length && !isValidChar(ans[l])) ++l
    while (r >= 0 && !isValidChar(ans[r])) --r
    if (l >= s.length || r < 0 || l >= r) break

    const temp = ans[l]
    ans[l] = ans[r]
    ans[r] = temp
    ++l
    --r
  }

  return ans.join('')
}
