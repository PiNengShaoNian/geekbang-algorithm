import { Comparable, PriorityQueue } from './priority-queue'

class Tweet implements Comparable<Tweet> {
  constructor(
    public time: number,
    public userId: number,
    public tweetId: number
  ) {}

  compareTo(that: Tweet): number {
    return this.time - that.time
  }
}

const maxPQCompareFunc = (a: Tweet, b: Tweet): boolean => {
  return a.time > b.time
}

export class Twitter {
  private userIdToTweets = new Map<number, PriorityQueue<Tweet>>()
  private userIdToFolloweeIds = new Map<number, Set<number>>()

  constructor() {}
  private time = 0

  postTweet(userId: number, tweetId: number): void {
    let pq = this.userIdToTweets.get(userId)

    if (typeof pq === 'undefined') {
      pq = new PriorityQueue<Tweet>(maxPQCompareFunc)
      this.userIdToTweets.set(userId, pq)
    }

    pq.push(new Tweet(++this.time, userId, tweetId))
  }

  getNewsFeed(userId: number): number[] {
    const queueList: PriorityQueue<Tweet>[] = []

    const followeeIds = this.userIdToFolloweeIds.get(userId)

    if (followeeIds) {
      for (const id of followeeIds) {
        const tweets = this.userIdToTweets.get(id)
        if (tweets) {
          queueList.push(tweets)
        }
      }
    }

    const tweets = this.userIdToTweets.get(userId)
    if (tweets) queueList.push(tweets)
    const cache: Tweet[] = []

    const minPQ = new PriorityQueue<Tweet>()

    for (let i = 0; i < queueList.length; ++i) {
      const maxPQ = queueList[i]

      while (minPQ.size() < 10 && maxPQ.size()) {
        minPQ.push(maxPQ.pop()!)
      }

      while (
        maxPQ.size() &&
        minPQ.size() &&
        minPQ.top()!.time < maxPQ.top()!.time
      ) {
        const minTop = minPQ.pop()!
        cache.push(minTop)
        minPQ.push(maxPQ.pop()!)
      }
    }

    const recentlyTweets: Tweet[] = []

    for (const tweet of minPQ) {
      const { userId } = tweet
      recentlyTweets.push(tweet)

      this.userIdToTweets.get(userId)?.push(tweet)
    }

    for (const tweet of cache) {
      this.userIdToTweets.get(tweet.userId)?.push(tweet)
    }

    recentlyTweets.sort((a, b) => b.time - a.time)

    return recentlyTweets.map((v) => v.tweetId)
  }

  follow(followerId: number, followeeId: number): void {
    let followee = this.userIdToFolloweeIds.get(followerId)

    if (typeof followee === 'undefined') {
      followee = new Set<number>()
      this.userIdToFolloweeIds.set(followerId, followee)
    }

    followee.add(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    this.userIdToFolloweeIds.get(followerId)?.delete(followeeId)
  }
}
