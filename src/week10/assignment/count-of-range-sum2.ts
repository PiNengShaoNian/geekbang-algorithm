export class Tree {
  tree: number[] = []
  n: number
  constructor(n: number) {
    for (let i = 0; i <= n; ++i) {
      this.tree[i] = 0
    }
    this.n = n
  }

  private lowbit(x: number): number {
    return x & -x
  }

  add(x: number, v: number) {
    for (; x <= this.n; x += this.lowbit(x)) {
      this.tree[x] += v
    }
  }

  private query(x: number): number {
    let ans = 0
    for (; x > 0; x -= this.lowbit(x)) {
      ans += this.tree[x]
    }

    return ans
  }

  queryRange(l: number, r: number): number {
    ++l
    ++r

    return this.query(r) - this.query(l - 1)
  }
}

export function countRangeSum(
  nums: number[],
  lower: number,
  upper: number
): number {
  const presum: number[] = []

  presum[0] = 0
  for (let i = 1; i <= nums.length; ++i) {
    presum[i] = presum[i - 1] + nums[i - 1]
  }

  const allNumbers = new Set<number>()

  for (const x of presum) {
    allNumbers.add(x)
    allNumbers.add(x - upper)
    allNumbers.add(x - lower)
  }

  const sorted = Array.from(allNumbers.values()).sort((a, b) => a - b)
  const values = new Map<number, number>()
  let idx = 0

  for (const x of sorted) {
    values.set(x, idx)
    ++idx
  }
  const tree = new Tree(idx)
  let ans = 0
  for (const x of presum) {
    const left = values.get(x - upper)!
    const right = values.get(x - lower)!

    const count = tree.queryRange(left, right)
    tree.add(values.get(x)! + 1, 1)
    ans += count
  }

  return ans
}
