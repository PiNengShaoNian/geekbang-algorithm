export function mincostTickets(days: number[], costs: number[]): number {
  const n = days[days.length - 1]
  const dp: number[] = Array.from<number>({ length: n + 1 }).fill(0)

  for (const day of days) {
    dp[day] = -1
  }

  for (let i = 1; i <= n; ++i) {
    if (dp[i] === 0) {
      dp[i] = dp[i - 1]
    } else {
      const a = dp[i - 1] + costs[0]
      const b = i - 7 >= 0 ? dp[i - 7] + costs[1] : costs[1]
      const c = i - 30 >= 0 ? dp[i - 30] + costs[2] : costs[2]

      dp[i] = Math.min(a, b, c)
    }
  }

  return dp[n]
}
