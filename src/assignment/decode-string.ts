export function decodeString(s: string): string {
  let index = 0
  const n = s.length

  const readNum = (): number => {
    let ans = ''
    while (index < n && s[index] >= '0' && s[index] <= '9') {
      ans += s[index]
      ++index
    }

    return ans === '' ? 1 : +ans
  }

  const readStr = (): string => {
    let ans = ''

    while (
      index < n &&
      (s[index] < '0' ||
        (s[index] > '9' && s[index] !== '[' && s[index] !== ']'))
    ) {
      ans += s[index]
      ++index
    }

    return ans
  }

  const run = (): string => {
    let ans = ''
    while (index < n) {
      const num = readNum()
      let str: string
      if (index < n && s[index] === '[') {
        ++index
        str = readStr()
        if (index < n && s[index] >= '0' && s[index] <= '9') {
          str += run()
        }
        if (index < n && s[index] === ']') ++index
      } else {
        str = readStr()
      }
      ans += str.repeat(num)

      if (s[index] === ']') return ans
    }

    return ans
  }

  return run()
}
