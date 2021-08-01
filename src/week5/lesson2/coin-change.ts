export function coinChange(coins: number[], amount: number): number {
  const memo = new Map<string, number>()
  coins.sort((a, b) => b - a)
  const core = (index: number, amount: number): number => {
    if (amount === 0) return 0
    if (index === coins.length) {
      return -1
    }
    const key = index + '-' + amount
    if (memo.has(key)) return memo.get(key)!
    let ans = Infinity
    for (let k = Math.floor(amount / coins[index]); k >= 0; --k) {
      const cand = core(index + 1, amount - k * coins[index])
      if (cand !== -1) {
        ans = Math.min(ans, cand + k)
      }
    }

    ans = isFinite(ans) ? ans : -1
    memo.set(key, ans)
    return ans
  }

  return core(0, amount)
}

export function coinChange1(coins: number[], amount: number): number {
  const dp = Array.from<number>({ length: amount + 1 }).fill(Infinity)

  dp[0] = 0

  for (let i = 1; i <= amount; ++i) {
    for (let j = 0; j < coins.length; ++j) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return isFinite(dp[amount]) ? dp[amount] : -1
}
