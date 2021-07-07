export function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()

  for (const str of strs) {
    const charArray = [...str]
    charArray.sort()
    const sortedStr = charArray.join('')
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [])
    }

    map.get(sortedStr)!.push(str)
  }

  return Array.from(map.values())
}
