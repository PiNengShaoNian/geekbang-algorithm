export function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  const digitToChars = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const ans: string[] = []

  const dfs = (index: number, str: string) => {
    if (index === digits.length) {
      ans.push(str)
      return
    }

    const chars =
      digitToChars[digits[index] as unknown as keyof typeof digitToChars]

    for (const char of chars) {
      dfs(index + 1, str + char)
    }
  }

  dfs(0, '')

  return ans
}
