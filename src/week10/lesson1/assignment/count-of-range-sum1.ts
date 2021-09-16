class SegmentTreeNode {
  constructor(public l: number, public r: number, public add: number) {}
}
class SegmentTree {
  tree: SegmentTreeNode[] = []
  constructor(n: number) {
    this.build(1, 0, n - 1)
  }

  private build(curr: number, l: number, r: number): void {
    if (l === r) {
      this.tree[curr] = new SegmentTreeNode(l, r, 0)
      return
    }

    const mid = l + Math.floor((r - l) / 2)

    this.build(curr * 2, l, mid)
    this.build(curr * 2 + 1, mid + 1, r)

    this.tree[curr] = new SegmentTreeNode(l, r, 0)
  }

  insert(i: number): void {
    this.insertRecursively(1, i)
  }

  private insertRecursively(curr: number, i: number) {
    ++this.tree[curr].add

    if (this.tree[curr].l === this.tree[curr].r) return

    const mid =
      this.tree[curr].l +
      Math.floor((this.tree[curr].r - this.tree[curr].l) / 2)

    if (i <= mid) {
      this.insertRecursively(curr * 2, i)
    }

    if (i >= mid + 1) {
      this.insertRecursively(curr * 2 + 1, i)
    }
  }

  count(l: number, r: number): number {
    return this.countRecursively(1, l, r)
  }

  private countRecursively(curr: number, l: number, r: number): number {
    if (this.tree[curr].l >= l && this.tree[curr].r <= r) {
      return this.tree[curr].add
    }

    const mid =
      this.tree[curr].l +
      Math.floor((this.tree[curr].r - this.tree[curr].l) / 2)

    let ans = 0
    if (l <= mid) {
      ans += this.countRecursively(curr * 2, l, r)
    }

    if (r >= mid + 1) {
      ans += this.countRecursively(curr * 2 + 1, l, r)
    }

    return ans
  }
}

export function countRangeSum(
  nums: number[],
  lower: number,
  upper: number
): number {
  const values: Map<number, number> = new Map()
  const allNumbers: Set<number> = new Set()
  let idx = 0
  let presum: number[] = []
  presum[0] = 0
  for (let i = 1; i <= nums.length; ++i) {
    presum[i] = presum[i - 1] + nums[i - 1]
  }

  for (const x of presum) {
    allNumbers.add(x)
    allNumbers.add(x - lower)
    allNumbers.add(x - upper)
  }

  const soretd = Array.from(allNumbers.values()).sort((a, b) => a - b)
  for (const x of soretd) {
    values.set(x, idx)
    ++idx
  }

  const tree = new SegmentTree(idx)

  let ans = 0
  for (const x of presum) {
    const left = values.get(x - upper)!
    const right = values.get(x - lower)!
    const count = tree.count(left, right)
    tree.insert(values.get(x)!)
    ans += count
  }

  return ans
}
