type char = string

export function isValid(s: string): boolean {
  const stack: char[] = []

  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else if (c === ']') {
      if (!stack.length || stack[stack.length - 1] !== '[') return false
      stack.pop()
    } else if (c === '}') {
      if (!stack.length || stack[stack.length - 1] !== '{') return false
      stack.pop()
    } else if (c === ')') {
      if (!stack.length || stack[stack.length - 1] !== '(') return false
      stack.pop()
    }
  }

  return stack.length === 0
}
