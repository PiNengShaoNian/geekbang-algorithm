import { Comparable, PriorityQueue } from '../priority-queue'

function generateArr<T>(
  length: number,
  iterFn: (i: number) => T,
  random?: boolean
): T[] {
  const arr = Array.from({ length }, (_, i) => iterFn(i))
  if (random) {
    return shuffle(arr)
  }
  return arr
}

function shuffle<T>(a: T[]): T[] {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

describe('MinHeap', () => {
  test('min-heap工作正常', () => {
    const testArr = generateArr(3000, (i) => i, true)
    const pq = new PriorityQueue<number>()
    for (let i = 0; i < testArr.length; i++) {
      pq.push(testArr[i])
    }

    testArr.sort((a, b) => a - b)

    for (let i = 0; i < testArr.length; i++) {
      const prevSize = pq.size()
      expect(pq.pop()).toBe(testArr[i])
      expect(pq.size()).toBe(prevSize - 1)
    }

    expect(pq.size()).toBe(0)
  })

  test('自定义比较函数能正常工作', () => {
    const maxPQ = new PriorityQueue<number>((a, b) => {
      return b < a
    })

    const testArr = generateArr(3000, (i) => i, true)
    for (let i = 0; i < testArr.length; i++) {
      maxPQ.push(testArr[i])
    }

    testArr.sort((a, b) => b - a)

    for (let i = 0; i < testArr.length; i++) {
      const prevSize = maxPQ.size()
      expect(maxPQ.pop()).toBe(testArr[i])
      expect(maxPQ.size()).toBe(prevSize - 1)
    }

    expect(maxPQ.size()).toBe(0)
  })

  test('Comparable对象能被正常排序', () => {
    class Student implements Comparable<Student> {
      constructor(public score: number) {}

      compareTo(that: Student): number {
        return this.score - that.score
      }
    }

    const testArr = generateArr<Student>(3000, (i) => new Student(i), true)

    const pq = new PriorityQueue<Student>()
    for (let i = 0; i < testArr.length; i++) {
      pq.push(testArr[i])
    }

    const orderedArr = testArr.map((v) => v.score).sort((a, b) => a - b)

    for (let i = 0; i < orderedArr.length; i++) {
      const prevSize = pq.size()
      expect(pq.pop()!.score).toBe(orderedArr[i])
      expect(pq.size()).toBe(prevSize - 1)
    }

    expect(pq.size()).toBe(0)
  })
})
