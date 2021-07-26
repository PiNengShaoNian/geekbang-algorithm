import { PriorityQueue } from '../lesson1/priority-queue'

export class MedianFinder {
  private minPQ = new PriorityQueue<number>()
  private maxPQ = new PriorityQueue<number>((a, b) => a > b)
  constructor() {}

  addNum(num: number): void {
    const minSize = this.minPQ.size()
    const maxSize = this.maxPQ.size()

    if (minSize <= maxSize) {
      if (maxSize > 0 && this.maxPQ.top()! < num) {
        this.minPQ.push(num)
      } else if (maxSize > 0 && this.maxPQ.top()! > num) {
        this.minPQ.push(this.maxPQ.pop()!)
        this.maxPQ.push(num)
      } else {
        this.minPQ.push(num)
      }
    } else {
      if (minSize > 0 && this.minPQ.top()! > num) {
        this.maxPQ.push(num)
      } else if (minSize > 0 && this.minPQ.top()! < num) {
        this.maxPQ.push(this.minPQ.pop()!)
        this.minPQ.push(num)
      } else {
        this.maxPQ.push(num)
      }
    }
  }

  size() {
    return this.minPQ.size() + this.maxPQ.size()
  }

  findMedian(): number {
    const size = this.size()
    if (size === 0) return -1
    if ((size & 1) === 0) {
      return (this.minPQ.top()! + this.maxPQ.top()!) / 2
    } else if (this.minPQ.size() * 2 > size) {
      return this.minPQ.top()!
    } else {
      return this.maxPQ.top()!
    }
  }
}
