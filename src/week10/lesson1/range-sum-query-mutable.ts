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

class SegmentTreeNode {
  constructor(public l: number, public r: number, public val: number) {}
}

class SegmentTree {
  private tree: SegmentTreeNode[]
  constructor(nums: number[]) {
    const n = nums.length
    this.tree = []

    this.build(1, 0, n - 1, nums)
  }

  query(l: number, r: number): number {
    return this.queryRecursively(1, l, r)
  }

  change(i: number, val: number) {
    this.changeRecursively(1, i, val)
  }

  build(curr: number, l: number, r: number, nums: number[]): void {
    if (l === r) {
      this.tree[curr] = new SegmentTreeNode(l, r, nums[l])
      return
    }

    const mid = l + Math.floor((r - l) / 2)
    this.build(curr * 2, l, mid, nums)
    this.build(curr * 2 + 1, mid + 1, r, nums)

    this.tree[curr] = new SegmentTreeNode(
      l,
      r,
      this.tree[curr * 2].val + this.tree[curr * 2 + 1].val
    )
  }

  private changeRecursively(curr: number, i: number, val: number): void {
    if (this.tree[curr].l === this.tree[curr].r) {
      this.tree[curr].val = val
      return
    }

    const mid =
      this.tree[curr].l +
      Math.floor((this.tree[curr].r - this.tree[curr].l) / 2)

    if (i <= mid) {
      this.changeRecursively(curr * 2, i, val)
    } else {
      this.changeRecursively(curr * 2 + 1, i, val)
    }

    this.tree[curr].val = this.tree[curr * 2].val + this.tree[curr * 2 + 1].val
  }

  private queryRecursively(curr: number, l: number, r: number): number {
    if (l <= this.tree[curr].l && r >= this.tree[curr].r)
      return this.tree[curr].val

    const mid =
      this.tree[curr].l +
      Math.floor((this.tree[curr].r - this.tree[curr].l) / 2)

    let ans = 0
    if (l <= mid) {
      ans += this.queryRecursively(curr * 2, l, r)
    }
    if (r >= mid + 1) {
      ans += this.queryRecursively(curr * 2 + 1, l, r)
    }

    return ans
  }
}

class NumArray1 {
  tree: SegmentTree
  constructor(nums: number[]) {
    this.tree = new SegmentTree(nums)
  }

  update(index: number, val: number): void {
    this.tree.change(index, val)
  }

  sumRange(left: number, right: number): number {
    return this.tree.query(left, right)
  }
}
