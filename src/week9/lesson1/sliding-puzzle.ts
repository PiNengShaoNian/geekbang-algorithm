import { Comparable, PriorityQueue } from '../../week4/lesson1/priority-queue'

export function slidingPuzzle(board: number[][]): number {
  const distToBegin: Map<string, number> = new Map()
  const distToEnd: Map<string, number> = new Map()
  const queueBegin: string[] = []
  const queueEnd: string[] = []
  const boardToStr = (b: number[][]): string => {
    let ans = ''

    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < 3; ++j) {
        ans += b[i][j]
      }
    }
    return ans
  }
  if (boardToStr(board) === '123450') return 0

  const strToBoard = (str: string): number[][] => {
    let ans: number[][] = [[], []]

    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < 3; ++j) {
        ans[i][j] = +str[i * 3 + j]
      }
    }

    return ans
  }
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]

  const expand = (
    queue: string[],
    distTo: Map<string, number>,
    otherDistTo: Map<string, number>
  ): number => {
    if (queue.length) {
      const cur = queue.shift()!
      const depth = distTo.get(cur)!

      let row = 0
      let col = 0
      const b = strToBoard(cur)
      findZero: for (let i = 0; i < 2; ++i) {
        for (let j = 0; j < 3; ++j) {
          if (b[i][j] === 0) {
            row = i
            col = j
            break findZero
          }
        }
      }

      for (let k = 0; k < 4; ++k) {
        const board = strToBoard(cur)

        const newRow = row + drow[k]
        const newCol = col + dcol[k]

        if (newRow < 0 || newRow >= 2 || newCol < 0 || newCol >= 3) continue

        const temp = board[row][col]
        board[row][col] = board[newRow][newCol]
        board[newRow][newCol] = temp
        const newBoardStr = boardToStr(board)

        if (otherDistTo.has(newBoardStr))
          return otherDistTo.get(newBoardStr)! + depth + 1

        if (distTo.has(newBoardStr)) continue

        distTo.set(newBoardStr, depth + 1)
        queue.push(newBoardStr)
      }
    }
    return -1
  }

  queueBegin.push(boardToStr(board))
  queueEnd.push('123450')
  distToBegin.set(boardToStr(board), 0)
  distToEnd.set('123450', 0)

  while (queueBegin.length || queueEnd.length) {
    let res = expand(queueBegin, distToBegin, distToEnd)

    if (res !== -1) return res

    res = expand(queueEnd, distToEnd, distToBegin)

    if (res !== -1) return res
  }

  return -1
}

// type CostAndState = [cast: number, state: string]

class CostAndState implements Comparable<CostAndState> {
  constructor(public cost: number, public state: string) {}

  compareTo(that: CostAndState): number {
    return this.cost - that.cost
  }
}

//启发式搜索
export function slidingPuzzle1(board: number[][]): number {
  const distToBegin: Map<string, number> = new Map()
  const queueBegin = new PriorityQueue<CostAndState>()
  const boardToStr = (b: number[][]): string => {
    let ans = ''

    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < 3; ++j) {
        ans += b[i][j]
      }
    }
    return ans
  }
  if (boardToStr(board) === '123450') return 0

  const strToBoard = (str: string): number[][] => {
    let ans: number[][] = [[], []]

    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < 3; ++j) {
        ans[i][j] = +str[i * 3 + j]
      }
    }

    return ans
  }
  const drow = [-1, 0, 1, 0]
  const dcol = [0, 1, 0, -1]

  const targetRow = [-1, 0, 0, 0, 1, 5]
  const targetCol = [-1, 0, 1, 2, 0, 1]
  const evaluate = (boardStr: string): number => {
    //[[1,2,3]
    // [4,5,0]]

    let ans = 0
    for (let i = 0; i < boardStr.length; ++i) {
      const num = +boardStr[i]
      if (num === 0) continue

      ans += Math.abs(targetRow[num] - ((i / 3) >> 0))
      ans += Math.abs(targetCol[num] - (i % 3))
    }

    return ans
  }

  queueBegin.push(new CostAndState(0, boardToStr(board)))
  distToBegin.set(boardToStr(board), 0)

  while (queueBegin.size()) {
    const cur = queueBegin.pop()!
    const depth = distToBegin.get(cur.state)!

    let row = 0
    let col = 0
    const b = strToBoard(cur.state)
    findZero: for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < 3; ++j) {
        if (b[i][j] === 0) {
          row = i
          col = j
          break findZero
        }
      }
    }

    for (let k = 0; k < 4; ++k) {
      const curBoard = strToBoard(cur.state)

      const newRow = row + drow[k]
      const newCol = col + dcol[k]

      if (newRow < 0 || newRow >= 2 || newCol < 0 || newCol >= 3) continue

      const temp = curBoard[row][col]
      curBoard[row][col] = curBoard[newRow][newCol]
      curBoard[newRow][newCol] = temp
      const newBoardStr = boardToStr(curBoard)

      if (newBoardStr === '123450') return depth + 1

      if (distToBegin.has(newBoardStr)) continue

      distToBegin.set(newBoardStr, depth + 1)
      queueBegin.push(
        new CostAndState(depth + 1 + evaluate(newBoardStr), newBoardStr)
      )
    }
  }

  return -1
}
