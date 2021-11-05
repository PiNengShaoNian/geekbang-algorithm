//单纯动态规划(会超时)
export function superEggDrop(k: number, n: number): number {
  const memo: number[][] = []
  for (let i = 0; i <= k; ++i) {
    memo[i] = []
  }

  const Impl = (K: number, N: number): number => {
    if (K === 1) return N
    if (N === 0) return 0

    if (typeof memo[K][N] === 'number') return memo[K][N]

    let res = Infinity
    for (let i = 1; i <= N; ++i) {
      res = Math.min(
        Math.max(
          Impl(K - 1, i - 1), //蛋碎
          Impl(K, N - i) //蛋没碎
        ) + 1,
        res
      )
    }

    return (memo[K][N] = res)
  }

  return Impl(k, n)
}

//利用了楼层增加时Impl(K - 1, mid - 1)的单调递增，和Impl(K, N - i)的单调递减
//特性，故使用二分查找优化快速的找出最优解
export function superEggDrop1(k: number, n: number): number {
  const memo: number[][] = []
  for (let i = 0; i <= k; ++i) {
    memo[i] = []
  }

  const Impl = (K: number, N: number): number => {
    if (K === 1) return N
    if (N === 0) return 0

    if (typeof memo[K][N] === 'number') return memo[K][N]

    let l = 1
    let r = N
    let res = Infinity
    while (l <= r) {
      const mid = (l + r) >> 1

      const broken = Impl(K - 1, mid - 1)
      const notBroken = Impl(K, N - mid)

      if (broken > notBroken) {
        r = mid - 1
        res = Math.min(res, broken + 1)
      } else {
        l = mid + 1
        res = Math.min(res, notBroken + 1)
      }
    }

    return (memo[K][N] = res)
  }

  return Impl(k, n)
}
