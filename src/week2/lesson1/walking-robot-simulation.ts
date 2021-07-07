export function robotSim(commands: number[], obstacles: number[][]): number {
  const set: Set<string> = new Set()

  for (const [x, y] of obstacles) {
    set.add(x + '-' + y)
  }

  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]

  let ans = 0
  let x = 0
  let y = 0
  let dir = 0

  for (const command of commands) {
    if (command > 0) {
      for (let i = 0; i < command; ++i) {
        const newx = x + dx[dir]
        const newy = y + dy[dir]

        if (set.has(newx + '-' + newy)) break

        x = newx
        y = newy
        ans = Math.max(ans, newx ** 2 + newy ** 2)
      }
    } else if (command === -1) {
      dir = (dir + 1) % 4
    } else {
      dir = (dir + 4 - 1) % 4
    }
  }

  return ans
}
