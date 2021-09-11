export class NumArray {
  private c: number[] = []
  private a: number[] = []
  private n: number = 0
  constructor(nums: number[]) {
    this.n = nums.length
    this.c = Array.from<number>({ length: this.n + 1 }).fill(0)
    this.a = Array.from<number>({ length: this.n + 1 }).fill(0)

    for (let i = 1; i <= this.n; ++i) {
      this.a[i] = nums[i - 1]
      this.add(i, this.a[i])
    }
  }

  private lowbit(x: number): number {
    return x & -x
  }

  private add(x: number, delta: number): void {
    for (; x <= this.n; x += this.lowbit(x)) {
      this.c[x] += delta
    }
  }

  update(index: number, val: number): void {
    ++index
    const delta = val - this.a[index]
    this.add(index, delta)
    this.a[index] = val
  }

  query(x: number): number {
    let ans = 0
    for (; x > 0; x -= this.lowbit(x)) {
      ans += this.c[x]
    }

    return ans
  }

  sumRange(left: number, right: number): number {
    ++left
    ++right
    return this.query(right) - this.query(left - 1)
  }
}
