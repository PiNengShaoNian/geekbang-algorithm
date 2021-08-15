//自底向上
export function change(amount: number, coins: number[]): number {
  const dp: number[] = Array.from<number>({ length: amount + 1 }).fill(0)

  dp[0] = 1

  for (const coin of coins) {
    for (let i = coin; i <= amount; ++i) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[amount]
}

//自顶向下
export function change1(amount: number, coins: number[]): number {
  const memo: number[][] = Array.from({ length: amount + 1 }, () => [])
  const core = (amount: number, index: number): number => {
    if (amount < 0 || index === coins.length) return 0
    if (amount === 0) return 1
    if (typeof memo[amount][index] === 'number') return memo[amount][index]

    let res = core(amount, index + 1)
    res += core(amount - coins[index], index)

    return (memo[amount][index] = res)
  }

  return core(amount, 0)
}
