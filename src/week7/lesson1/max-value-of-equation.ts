//双重循环时间复杂度O(N^2)
export function findMaxValueOfEquation(x: number[], y: number[]): number {
  let ans = -Infinity
  const n = x.length

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      ans = Math.max(ans, y[i] + y[j] + Math.abs(x[i] - x[j]))
    }
  }

  return ans
}

//不难看出只需要加一个条件i > j则可以去掉abs函数，且时间复杂度降低到O((N ^ 2) / 2)
export function findMaxValueOfEquation1(x: number[], y: number[]): number {
  let ans = -Infinity
  const n = x.length

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      ans = Math.max(ans, y[i] + y[j] + x[i] - x[j])
    }
  }

  return ans
}

//经过观察发现"y[i] + x[i]"是第二层循环的冗余计算只需在第一次循环计算一次即可
export function findMaxValueOfEquation2(x: number[], y: number[]): number {
  let ans = -Infinity
  const n = x.length

  for (let i = 0; i < n; ++i) {
    let temp = -Infinity
    for (let j = 0; j < i; ++j) {
      temp = Math.max(temp, y[j] - x[j])
    }
    ans = Math.max(ans, y[i] + x[i] + temp)
  }

  return ans
}

//经过观察发现"y[i] + x[i]"是第二层循环的冗余计算只需在第一次循环计算一次即可
export function findMaxValueOfEquation3(x: number[], y: number[]): number {
  let ans = -Infinity
  const n = x.length
  let temp = -Infinity
  for (let i = 1; i < n; ++i) {
    temp = Math.max(temp, y[i - 1] - x[i - 1])
    ans = Math.max(ans, y[i] + x[i] + temp)
  }

  return ans
}

export function findMaxValueOfEquation4(points: number[][], k: number): number {
  //上界 j <= i - 1
  //下界  x[j] >= x[i] - k
  //考虑两个选项 j1 < j2
  //写出j1 比 j2更优的条件
  // y[j1] - x[j1] > y[j2] - x[j2]
  // x[j] => points[j][0]
  // y[j] => points[j][1]

  const deque: number[] = []
  let ans = -Infinity
  for (let i = 0; i < points.length; ++i) {
    while (deque.length && points[deque[0]][0] < points[i][0] - k) deque.shift()

    if (deque.length) {
      ans = Math.max(
        ans,
        points[i][1] + points[i][0] + points[deque[0]][1] - points[deque[0]][0]
      )
    }

    while (
      deque.length &&
      points[deque[deque.length - 1]][1] - points[deque[deque.length - 1]][0] <=
        points[i][1] - points[i][0]
    )
      deque.pop()

    deque.push(i)
  }

  return ans
}
