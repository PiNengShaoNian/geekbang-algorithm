export function wordPattern(pattern: string, s: string): boolean {
  const getNormalizedStr = (str: string[]) => {
    const values = new Map<string, number>()
    let idx = 0
    let ans: number[] = []
    for (const x of str) {
      if (!values.has(x)) {
        values.set(x, idx)
        ++idx
      }

      ans.push(values.get(x)!)
    }

    return ans.join('-')
  }

  return getNormalizedStr(pattern.split('')) === getNormalizedStr(s.split(' '))
}
