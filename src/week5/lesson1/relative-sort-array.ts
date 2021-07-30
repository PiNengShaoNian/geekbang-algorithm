export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const has = new Map<number, number>()

  for (let i = 0; i < arr2.length; ++i) {
    has.set(arr2[i], i)
  }

  arr1.sort((a, b) => {
    if (has.has(a)) {
      return has.has(b) ? has.get(a)! - has.get(b)! : -1
    } else {
      return has.has(b) ? 1 : a - b
    }
  })

  return arr1
}

export function relativeSortArray1(arr1: number[], arr2: number[]): number[] {
  const count = Array.from<number>({ length: 1001 }).fill(0)

  for (let i = 0; i < arr1.length; ++i) {
    ++count[arr1[i]]
  }

  const ans: number[] = []
  let n = 0
  for (let i = 0; i < arr2.length; ++i) {
    while (count[arr2[i]]) {
      --count[arr2[i]]
      ans[n] = arr2[i]
      ++n
    }
  }

  for (let i = 0; i <= 1000; ++i) {
    while (count[i]) {
      --count[i]
      ans[n] = i
      ++n
    }
  }

  return ans
}
