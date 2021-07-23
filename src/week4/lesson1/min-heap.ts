interface Comparable<T> {
  compareTo(that: T): number
}

export class MinHeap<T extends number | string | Comparable<T>> {
  private data: T[] = [-1 as any]

  size() {
    return this.data.length - 1
  }

  isEmpty() {
    return this.size() === 0
  }

  push(value: T): void {
    const index = this.size() + 1
    this.data[index] = value
    this.siftUp(index)
  }

  pop(): T | null {
    if (this.isEmpty()) return null

    const ans = this.data[1]

    this.swap(1, this.size())
    this.data.pop()
    this.siftDown(1)
    return ans
  }

  private siftDown(k: number): void {
    const size = this.size()
    while (k * 2 <= size) {
      let j = k * 2
      if (j + 1 <= size && this.less(this.data[j + 1], this.data[j])) {
        j = j + 1
      }

      if (this.less(this.data[j], this.data[k])) {
        this.swap(j, k)
        k = j
      } else break
    }
  }

  private less(a: T, b: T): boolean {
    if (typeof a === 'number' || typeof a === 'string') {
      return a < b
    } else {
      return a.compareTo(b) < 0
    }
  }

  private swap(i: number, j: number): void {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  private siftUp(k: number): void {
    while (k >> 1 >= 1) {
      const j = k >> 1
      if (this.less(this.data[k], this.data[j])) {
        this.swap(k, j)
        k = j
      } else break
    }
  }
}

