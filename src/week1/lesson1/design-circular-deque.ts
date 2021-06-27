export class MyCircularDeque {
  private k: number
  private first = 0
  private last = 0
  private size = 0
  private queue: number[] = []
  constructor(k: number) {
    this.k = k
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false

    this.first = this.first === 0 ? this.k - 1 : this.first - 1
    this.queue[this.first] = value
    ++this.size
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false

    this.queue[this.last] = value
    this.last = (this.last + 1) % this.k
    ++this.size

    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false

    this.first = (this.first + 1) % this.k
    --this.size
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false

    this.last = this.last === 0 ? this.k - 1 : this.last - 1
    --this.size
    return true
  }

  getFront(): number {
    if (this.isEmpty()) return -1

    return this.queue[this.first]
  }

  getRear(): number {
    if (this.isEmpty()) return -1

    const index = this.last === 0 ? this.k - 1 : this.last - 1

    return this.queue[index]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.k
  }
}
