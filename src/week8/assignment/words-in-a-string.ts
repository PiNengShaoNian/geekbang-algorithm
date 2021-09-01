export function reverseWords(s: string): string {
  let ans = ''

  const readWord = (): string => {
    while (s[index] === ' ') --index

    let word = ''

    for (; index >= 0 && s[index] !== ' '; --index) {
      word = s[index] + word
    }

    return word
  }

  let index = s.length - 1

  while (index >= 0) {
    ans += readWord() + ' '
  }

  return ans.replace(/\s+$/, '')
}
