export class MinStack {
  private data: number[] = []
  private min: number[] = []

  constructor() {}

  push(val: number): void {
    this.data.push(val)
    const min = this.getMin()
    if (val < min) this.min.push(val)
    else this.min.push(min)
  }

  pop(): void {
    this.data.pop()
    this.min.pop()
  }

  top(): number {
    return this.data[this.data.length - 1]
  }

  getMin(): number {
    if (!this.min.length) return Infinity
    return this.min[this.min.length - 1]
  }
}
