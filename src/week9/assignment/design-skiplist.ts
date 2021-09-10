class SkiplistNode {
  right: SkiplistNode | null = null
  down: SkiplistNode | null = null

  constructor(public val: number) {}
}

export class Skiplist {
  private tails: SkiplistNode[] = []
  private heads: SkiplistNode[] = []

  constructor() {
    for (let i = 0; i <= 15; ++i) {
      this.tails[i] = new SkiplistNode(Infinity)
      this.heads[i] = new SkiplistNode(-Infinity)
    }

    for (let i = 0; i < 15; ++i) {
      this.heads[i].right = this.tails[i]
      this.heads[i].down = this.heads[i + 1]
      this.tails[i].down = this.tails[i + 1]
    }

    this.heads[15].right = this.tails[15]
  }

  search(target: number): boolean {
    let cur: SkiplistNode | null = this.heads[0]

    while (cur) {
      if (cur.right!.val < target) {
        cur = cur.right
      } else if (cur.right!.val > target) {
        cur = cur.down
      } else return true
    }

    return false
  }

  add(num: number): void {
    const stack: SkiplistNode[] = []
    let cur: SkiplistNode | null = this.heads[0]
    while (cur) {
      if (cur.right!.val >= num) {
        stack.push(cur)
        cur = cur.down
      } else {
        cur = cur.right
      }
    }

    let pre: SkiplistNode | null = null

    while (stack.length) {
      const cur = stack.pop()!
      const newNode = new SkiplistNode(num)
      newNode.right = cur.right
      cur.right = newNode
      if (pre) {
        newNode.down = pre
      }

      pre = newNode

      if (Math.random() < 0.5) break
    }
  }

  erase(num: number): boolean {
    let cur: SkiplistNode | null = this.heads[0]
    let isRemoved = false
    while (cur) {
      if (cur.right!.val >= num) {
        if (cur.right!.val === num) {
          isRemoved = true
          cur.right = cur.right?.right ?? null
        }
        cur = cur.down
      } else {
        cur = cur.right
      }
    }

    return isRemoved
  }
}
