export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const has1 = Array.from<number>({ length: 1001 }).fill(0)
  const has2 = Array.from<number>({ length: 1001 }).fill(0)
  const count = Array.from<number>({ length: 1001 }).fill(0)
  for (let i = 0; i < arr2.length; ++i) {
    has1[arr2[i]] = 1
  }
  for (let i = 0; i < arr1.length; ++i) {
    ++count[arr1[i]]
    has2[arr1[i]] = 1
  }

  const ans: number[] = []
  const extra: number[] = []

  for (let i = 0; i < count.length; ++i) {
    if (count[i] === 0 && has2[i]) {
      extra.push(i)
    }
  }

  for (let i = 0; i < arr1.length; ++i) {
    if (!count[arr1[i]]) continue

    while (--count[arr1[i]] && has1[arr1[i]]) {
      ans.push(arr1[i])
    }
  }

  ans.push(...extra)

  return ans
}
