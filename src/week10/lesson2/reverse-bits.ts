export function reverseBits(n: number): number {
  let ans = new Uint32Array(1)

  for (let i = 0; i < 32; ++i) {
    ans[0] = (ans[0] << 1) | ((n >> i) & 1)
  }

  return ans[0]
}

export function reverseBits1(n: number): number {
  let ans = 0
  for (let i = 0; i < 32; ++i) {
    ans = ans * 2 + ((n >> i) & 1)
  }

  return ans
}
