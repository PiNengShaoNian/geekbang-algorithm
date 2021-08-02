export const minimumEffort = (tasks: number[][]): number => {
  tasks.sort((a, b) => {
    return b[1] - b[0] - (a[1] - a[0])
  })

  let ans = 0
  let e = 0

  for (const t of tasks) {
    e -= t[1]
    ans = Math.max(ans, -e)
    e += t[1] - t[0]
  }

  return ans
}
