/**
 * 滑动窗口解法 
 * @param nums 
 * @returns 
 */
export function findShortestSubArray(nums: number[]): number {
  const count: number[] = Array.from({ length: 50000 }).fill(0) as number[]

  let maxDegree = 0
  for (let i = 0; i < nums.length; ++i) {
    maxDegree = Math.max(maxDegree, ++count[nums[i]])
  }

  const window = new Map<number, number>()
  const countMap = new Map<number, number>()
  let r = -1
  let l = 0
  let degree = 0
  let ans = nums.length
  while (l < nums.length) {
    if (r + 1 < nums.length && degree < maxDegree) {
      const num = nums[++r]
      const duplicates = window.get(num) ?? 0
      if (duplicates !== 0) {
        let countOfNumWithSameDuplicates = countMap.get(duplicates)!
        if (countOfNumWithSameDuplicates - 1 === 0) {
          countMap.delete(duplicates)
        } else {
          countMap.set(duplicates, countOfNumWithSameDuplicates - 1)
        }
        countMap.set(duplicates + 1, (countMap.get(duplicates + 1) ?? 0) + 1)
      } else {
        countMap.set(1, (countMap.get(1) ?? 0) + 1)
      }
      degree = Math.max(degree, duplicates + 1)
      window.set(num, duplicates + 1)
    } else {
      const num = nums[l]
      const duplicates = window.get(num)!

      let countOfNumWithSameDuplicates = countMap.get(duplicates)!

      if (duplicates === maxDegree && countOfNumWithSameDuplicates === 1) {
        --degree
      }
      if (countOfNumWithSameDuplicates - 1 === 0) {
        countMap.delete(duplicates)
      } else {
        countMap.set(duplicates, countOfNumWithSameDuplicates - 1)
      }

      if (duplicates === 1) {
        window.delete(num)
      } else {
        window.set(num, duplicates - 1)
      }
      ++l
    }

    if (degree === maxDegree) {
      ans = Math.min(ans, r - l + 1)
    }
  }

  return ans
}

export function findShortestSubArray1(nums: number[]): number {
  const map: Map<number, [number, number, number]> = new Map()

  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      const arr = map.get(nums[i])!
      arr[2] = i
      ++arr[0]
    } else {
      map.set(nums[i], [1, i, i])
    }
  }

  let maxCount = 0
  let ans = 0

  for (const [count, start, end] of map.values()) {
    if (count > maxCount) {
      maxCount = count
      ans = end - start + 1
    } else if (count === maxCount) {
      ans = Math.min(ans, end - start + 1)
    }
  }

  return ans
}
