export function groupAnagrams(strs: string[]): string[][] {
  return [
    ...strs
      .reduce((acc, cur) => {
        const sorted = [...cur].sort().join('')
        const arr: string[] = acc.get(sorted) ?? []
        arr.push(cur)
        acc.set(sorted, arr)

        return acc
      }, new Map<string, string[]>())
      .values(),
  ]
}
