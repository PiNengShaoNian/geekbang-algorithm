export function minMutation(
  start: string,
  end: string,
  bank: string[]
): number {
  const valid = new Set(bank)

  if (!bank.length || !valid.has(end)) return -1

  let steps = 0

  let queue: string[][] = []
  queue.push([...start])
  const chars = 'ACGT'
  const visited = new Set<string>()
  while (queue.length) {
    let next = []

    for (let i = 0; i < queue.length; ++i) {
      const cur = queue[i]
      visited.add(cur.join(''))

      for (let i = 0; i < cur.length; ++i) {
        for (const char of chars) {
          const nextArr = [...cur]
          if (nextArr[i] === char) continue

          nextArr[i] = char
          const nextStr = nextArr.join('')
          if (nextStr === end) return steps + 1
          if (visited.has(nextStr) || !valid.has(nextStr)) continue
          next.push(nextArr)
        }
      }
    }

    ++steps

    queue = next
  }

  return -1
}
