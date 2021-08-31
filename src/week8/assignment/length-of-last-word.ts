export function lengthOfLastWord(s: string): number {
  let ans = 0

  let index = s.length - 1
  for (; index >= 0 && s[index] === ' '; --index);
  for (let i = index; i >= 0; --i) {
    if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
      ++ans
    } else break
  }

  return ans
}
