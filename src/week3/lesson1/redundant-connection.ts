export class UnionFind {
  private id: number[]
  private size: number[]
  private _count: number
  constructor(n: number) {
    this.id = []
    this.size = []
    this._count = n
    for (let i = 0; i < n; ++i) {
      this.id[i] = i
      this.size[i] = 0
    }
  }

  count(): number {
    return this._count
  }

  find(x: number): number {
    return x === this.id[x] ? x : (this.id[x] = this.find(this.id[x]))
  }

  union(p: number, q: number) {
    const leader1 = this.find(p)
    const leader2 = this.find(q)

    if (leader1 === leader2) return

    --this._count
    if (this.size[leader1] > this.size[leader2]) {
      this.id[leader2] = leader1
      this.size[leader1] += this.size[leader2]
    } else {
      this.id[leader1] = leader2
      this.size[leader2] += this.size[leader1]
    }
  }
}

export function findRedundantConnection(edges: number[][]): number[] {
  let n = 0
  for (const [a, b] of edges) {
    n = Math.max(n, a, b)
  }
  const uf = new UnionFind(n)

  for (const [a, b] of edges) {
    const prevCount = uf.count()
    uf.union(a - 1, b - 1)
    if (prevCount === uf.count()) return [a, b]
  }

  return []
}
