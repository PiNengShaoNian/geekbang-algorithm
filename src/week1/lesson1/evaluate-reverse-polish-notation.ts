const calc = (a: number, b: number, op: string): number => {
  if (op === '+') return a + b
  else if (op === '-') return a - b
  else if (op === '*') return a * b
  else return a / b
}

export function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < tokens.length; ++i) {
    if (
      tokens[i] === '+' ||
      tokens[i] === '-' ||
      tokens[i] === '*' ||
      tokens[i] === '/'
    ) {
      const b = stack.pop()!
      const a = stack.pop()!
      stack.push(calc(a, b, tokens[i]) | 0)
    } else {
      stack.push(+tokens[i])
    }
  }

  return stack[0]
}
