type Vote = {
  time: number
  person: number
}

const lower_bound = (arr: Vote[], target: number): number => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = (left + right) >> 1

    if (arr[mid].time === target) return mid
    else if (arr[mid].time > target) {
      right = mid - 1
    } else if (arr[mid].time < target) {
      if (mid + 1 < arr.length && arr[mid + 1].time <= target) {
        left = mid + 1
      } else {
        left = mid
        break
      }
    }
  }

  return left
}
export class TopVotedCandidate {
  private count = new Map<number, number>()
  private votes: Vote[] = []
  constructor(persons: number[], times: number[]) {
    let leaderVotes = 1
    let leader = persons[0]
    this.count.set(leader, 1)
    this.votes.push({
      time: times[0],
      person: leader,
    })

    for (let i = 1; i < persons.length; ++i) {
      const c = (this.count.get(persons[i]) ?? 0) + 1

      this.count.set(persons[i], c)
      if (c >= leaderVotes) {
        if (leader !== persons[i]) {
          leader = persons[i]
          this.votes.push({
            time: times[i],
            person: leader,
          })
        }
        leaderVotes = c
      }
    }
  }

  q(t: number): number {
    const index = lower_bound(this.votes, t)

    return this.votes[index].person
  }
}

{
  //自己尝试
  const lower_bound = (arr: number[], target: number): number => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = (left + right) >> 1

      if (arr[mid] > target) {
        right = mid - 1
      } else if (arr[mid] < target) {
        if (arr[mid + 1] < target) {
          left = mid + 1
        } else {
          left = mid
          break
        }
      }
    }

    return left
  }
  type Summary = Record<number, number> & { top: number }
  class TopVotedCandidate {
    private timeToSummary = new Map<number, Summary>()
    private times: number[]
    constructor(persons: number[], times: number[]) {
      let prev: Summary = {
        [persons[0]]: 1,
        top: persons[0],
      }
      this.timeToSummary.set(times[0], prev)
      for (let i = 1; i < persons.length; ++i) {
        const count = (prev[persons[i]] ?? 0) + 1
        let newTop = prev.top
        if (prev.top !== persons[i] && count >= prev[prev.top]) {
          newTop = persons[i]
        }
        const cur: Summary = {
          ...prev,
          [persons[i]]: count,
          top: newTop,
        }
        this.timeToSummary.set(times[i], cur)
        prev = cur
      }
      this.times = times
    }

    q(t: number): number {
      if (this.timeToSummary.has(t)) return this.timeToSummary.get(t)!.top
      const index = lower_bound(this.times, t)

      return this.timeToSummary.get(this.times[index])!.top
    }
  }
}
