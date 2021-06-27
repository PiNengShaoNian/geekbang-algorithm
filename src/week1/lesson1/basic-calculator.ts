const calc = (a: number, b: number, op: string): number => {
  if (op === '+') return a + b
  else if (op === '-') return a - b
  else if (op === '*') return a * b
  else return a / b
}

function evalRPN(tokens: string[]): number {
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

const getOpPriority = (op: string): number => {
  if (op === '+' || op === '-') return 1
  else if (op === '*' || op === '/') return 2

  if (op === '(') return 0

  throw new Error('Unexpected operator ' + op)
}

export function calculate(s: string): number {
  let ops: string[] = []
  let tokens: string[] = []

  let val = 0
  let parsedNum = false
  let needZero = true
  for (const char of s) {
    if (char >= '0' && char <= '9') {
      val = val * 10 + Number.parseInt(char)
      parsedNum = true
      continue
    } else if (parsedNum) {
      tokens.push(val + '')
      parsedNum = false
      val = 0
      needZero = false
    }

    if (char === ' ') continue

    if (char === '(') {
      ops.push(char)
      needZero = true
      continue
    }

    if (char === ')') {
      while (ops.length && ops[ops.length - 1] !== '(') {
        tokens.push(ops.pop()!)
      }

      ops.pop()
      needZero = false
      continue
    }

    if (needZero) tokens.push('0')
    while (
      ops.length &&
      getOpPriority(ops[ops.length - 1]) >= getOpPriority(char)
    ) {
      tokens.push(ops.pop()!)
    }

    ops.push(char)
    needZero = true
  }

  if (parsedNum) {
    tokens.push(val + '')
  }

  while (ops.length) {
    tokens.push(ops.pop()!)
  }

  return evalRPN(tokens)
}
