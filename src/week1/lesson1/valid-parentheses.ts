export function isValid(s: string): boolean {
  let result = true
  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else if (s[i] === ')') {
      const leftOp = stack.pop()
      if (leftOp !== '(') {
        result = false
        break
      }
    } else if (s[i] === '}') {
      const leftOp = stack.pop()
      if (leftOp !== '{') {
        result = false
        break
      }
    } else if (s[i] === ']') {
      const leftOp = stack.pop()
      if (leftOp !== '[') {
        result = false
        break
      }
    } else {
      result = false
      break
    }
  }

  if (stack.length) {
    result = false
  }

  return result
}
