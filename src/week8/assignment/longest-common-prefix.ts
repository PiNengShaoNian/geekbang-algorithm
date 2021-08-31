export function longestCommonPrefix(strs: string[]): string {
  let prefix = ''

  let index = 0
  mainLoop: while (true) {
    if (strs[0].length <= index) break
    let fistChar = strs[0][index]
    for (let i = 1; i < strs.length; ++i) {
      if (index >= strs[i].length) break mainLoop

      if (strs[i][index] !== fistChar) break mainLoop
    }
    ++index
    prefix += fistChar
  }

  return prefix
}
