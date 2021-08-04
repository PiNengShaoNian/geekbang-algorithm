export function coinChange(coins: number[], amount: number): number {
  const n = amount
  const dp = Array.from<number>({ length: n + 1 }).fill(Infinity)

  dp[0] = 0
  for (let i = 1; i <= n; ++i) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return isFinite(dp[n]) ? dp[n] : -1
}
