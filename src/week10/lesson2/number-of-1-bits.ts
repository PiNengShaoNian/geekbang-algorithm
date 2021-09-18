//javascript中没有unsign类型，当一个数直接减去 2 ^ 31 会溢出
export function hammingWeight(n: number): number {
  let ans = 0

  while (n > 0) {
    ++ans
    n -= n & -n
  }

  return ans
}

//构建一个unit32数组达到相同效果
export function hammingWeight1(n: number): number {
  let ans = 0
  const a = new Uint32Array(1)
  a[0] = n

  while (a[0] > 0) {
    ++ans
    a[0] -= a[0] & -a[0]
  }

  return ans
}

export function hammingWeight2(n: number): number {
  let ans = 0
  for (let i = 0; i < 32; ++i) {
    if ((n >> i) & 1) ++ans
  }

  return ans
}
