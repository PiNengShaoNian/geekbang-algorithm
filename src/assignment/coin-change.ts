//自己想的状态转移方程总是会出现偏差，会想在多出一个循环去枚举每个硬币每次选多少枚
//在仔细想想,如果有面额为3的硬币其实dp[6] = dp[6 - 2 * 3] + 2
//已经包含在dp[6] = dp[6 - 3] + 1, dp[3] -> dp[0] + 1 中
//所以每次枚举选取多少枚硬币是冗余状态，可以被省略
export function coinChange(coins: number[], amount: number): number {
  //dp[i]表示，一个为i的金额最少需要dp[i]枚硬币
  const dp: number[] = Array.from<number>({ length: amount + 1 }).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; ++i) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return isFinite(dp[amount]) ? dp[amount] : -1
}
