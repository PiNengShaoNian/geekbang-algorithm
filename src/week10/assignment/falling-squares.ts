class SegmentTreeNode {
  mark: null | number = null

  constructor(public l: number, public r: number, public val: number) {}
}

class SegmentTree {
  tree: SegmentTreeNode[] = []
  constructor(n: number) {
    this.build(1, 0, n - 1)
  }

  private build(curr: number, l: number, r: number) {
    if (l === r) {
      this.tree[curr] = new SegmentTreeNode(l, r, 0)
      return
    }

    const mid = l + ((r - l) >> 1)

    this.build(curr * 2, l, mid)
    this.build(curr * 2 + 1, mid + 1, r)

    this.tree[curr] = new SegmentTreeNode(l, r, 0)
  }

  updateRange(l: number, r: number, val: number) {
    this.updateRangeRecursively(1, l, r, val)
  }

  private spread(curr: number) {
    if (this.tree[curr].mark !== null) {
      const mark = this.tree[curr].mark!
      this.tree[curr * 2].val = mark
      this.tree[curr * 2].mark = mark

      this.tree[curr * 2 + 1].val = mark
      this.tree[curr * 2 + 1].mark = mark

      this.tree[curr].mark = null
    }
  }

  private updateRangeRecursively(
    curr: number,
    l: number,
    r: number,
    val: number
  ) {
    if (l <= this.tree[curr].l && r >= this.tree[curr].r) {
      this.tree[curr].val = val
      this.tree[curr].mark = val
      return
    }

    this.spread(curr)

    const mid =
      this.tree[curr].l + ((this.tree[curr].r - this.tree[curr].l) >> 1)

    if (l <= mid) {
      this.updateRangeRecursively(curr * 2, l, r, val)
    }

    if (r >= mid + 1) {
      this.updateRangeRecursively(curr * 2 + 1, l, r, val)
    }

    this.tree[curr].val = Math.max(
      this.tree[curr * 2].val,
      this.tree[curr * 2 + 1].val
    )
  }

  query(l: number, r: number): number {
    return this.queryRecursively(1, l, r)
  }

  private queryRecursively(curr: number, l: number, r: number): number {
    if (l <= this.tree[curr].l && r >= this.tree[curr].r) {
      return this.tree[curr].val
    }

    this.spread(curr)

    const mid =
      this.tree[curr].l + ((this.tree[curr].r - this.tree[curr].l) >> 1)

    let ans = 0
    if (l <= mid) {
      ans = Math.max(this.queryRecursively(curr * 2, l, r), ans)
    }

    if (r >= mid + 1) {
      ans = Math.max(this.queryRecursively(curr * 2 + 1, l, r), ans)
    }

    // this.tree[curr].val = Math.max(this.tree[curr * 2].val, this.tree[curr * 2 + 1].val)
    return ans
  }
}

export function fallingSquares(positions: number[][]): number[] {
  const allNumbers: Set<number> = new Set()

  for (const position of positions) {
    allNumbers.add(position[0])
    allNumbers.add(position[0] + position[1] - 1)
  }

  const values = new Map<number, number>()
  let idx = 0
  const sorted = Array.from(allNumbers.values()).sort((a, b) => a - b)
  for (const x of sorted) {
    values.set(x, idx)
    ++idx
  }

  const tree = new SegmentTree(idx)

  const ans: number[] = []
  let best = 0
  for (const position of positions) {
    const left = values.get(position[0])!
    const right = values.get(position[0] + position[1] - 1)!
    const height = tree.query(left, right) + position[1]
    tree.updateRange(left, right, height)
    ans.push((best = Math.max(height, best)))
  }

  return ans
}
