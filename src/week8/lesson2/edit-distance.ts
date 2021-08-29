export function minDistance(word1: string, word2: string): number {
  const memo: number[][] = []

  for (let i = 0; i < word1.length; ++i) {
    memo[i] = []
  }
  const count = (i: number, j: number): number => {
    if (i < 0 || j < 0) {
      return Math.max(i, j) + 1
    }

    if (typeof memo[i][j] === 'number') return memo[i][j]
    let ans = 0
    if (word1[i] === word2[j]) {
      ans = count(i - 1, j - 1)
    } else {
      ans =
        1 +
        Math.min(
          //替换
          count(i - 1, j - 1),
          //删除
          count(i - 1, j),
          //插入
          count(i, j - 1)
        )
    }

    return (memo[i][j] = ans)
  }

  return count(word1.length - 1, word2.length - 1)
}
