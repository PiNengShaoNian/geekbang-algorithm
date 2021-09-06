export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const distToBegin: Map<string, number> = new Map()
  const distToEnd: Map<string, number> = new Map()
  const queueBegin: string[] = []
  const queueEnd: string[] = []

  for (const word of wordList) {
    distToBegin.set(word, Infinity)
    distToEnd.set(word, Infinity)
  }

  if (!distToEnd.has(endWord)) return 0

  const expand = (
    queue: string[],
    distTo: Map<string, number>,
    otherDistTo: Map<string, number>
  ): number => {
    if (queue.length) {
      const cur = queue.shift()!
      const depth = distTo.get(cur)!
      for (let i = 0; i < cur.length; ++i) {
        for (let j = 0; j < 26; ++j) {
          const char = String.fromCharCode(97 + j)
          const next = [...cur]
          next[i] = char
          const nextStr = next.join('')

          if (!distTo.has(nextStr)) continue

          if (isFinite(otherDistTo.get(nextStr)!))
            return depth + otherDistTo.get(nextStr)!

          if (distTo.get(nextStr)! > depth + 1) {
            distTo.set(nextStr, depth + 1)
            queue.push(nextStr)
          }
        }
      }
    }

    return -1
  }

  queueBegin.push(beginWord)
  queueEnd.push(endWord)
  distToBegin.set(beginWord, 1)
  distToEnd.set(endWord, 1)
  while (queueBegin.length || queueEnd.length) {
    let res = expand(queueBegin, distToBegin, distToEnd)

    if (res !== -1) return res

    res = expand(queueEnd, distToEnd, distToBegin)

    if (res !== -1) return res
  }

  return 0
}
