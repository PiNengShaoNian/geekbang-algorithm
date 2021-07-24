import { Twitter } from '../design-twitter'

test('Twitter', () => {
  const twitter = new Twitter()
  twitter.postTweet(1, 5)
  expect(twitter.getNewsFeed(1)).toEqual([5])
  twitter.follow(1, 2)
  twitter.postTweet(2, 6)
  expect(twitter.getNewsFeed(1)).toEqual([6, 5])
  twitter.unfollow(1, 2)
  expect(twitter.getNewsFeed(1)).toEqual([5])
  twitter.follow(1, 2)
  twitter.follow(1, 3)
  twitter.postTweet(3, 31)
  twitter.postTweet(3, 32)
  expect(twitter.getNewsFeed(1)).toEqual([32, 31, 6, 5])
  twitter.follow(1, 4)
  twitter.follow(1, 5)
  twitter.postTweet(5, 51)
  twitter.postTweet(5, 52)
  expect(twitter.getNewsFeed(1)).toEqual([52, 51, 32, 31, 6, 5])
  twitter.postTweet(4, 41)
  expect(twitter.getNewsFeed(1)).toEqual([41, 52, 51, 32, 31, 6, 5])
  twitter.postTweet(4, 42)
  expect(twitter.getNewsFeed(1)).toEqual([42, 41, 52, 51, 32, 31, 6, 5])
  twitter.follow(1, 6)
  twitter.postTweet(6, 61)
  twitter.postTweet(6, 62)
  twitter.postTweet(6, 63)
  expect(twitter.getNewsFeed(1)).toEqual([
    63, 62, 61, 42, 41, 52, 51, 32, 31, 6,
  ])
  twitter.follow(1, 7)
  twitter.postTweet(7, 71)
  twitter.postTweet(7, 72)
  twitter.postTweet(7, 73)
  expect(twitter.getNewsFeed(1)).toEqual([
    73, 72, 71, 63, 62, 61, 42, 41, 52, 51,
  ])
  twitter.postTweet(8, 81)
  twitter.postTweet(8, 82)
  twitter.postTweet(8, 83)
  expect(twitter.getNewsFeed(1)).toEqual([
    73, 72, 71, 63, 62, 61, 42, 41, 52, 51,
  ])
  twitter.follow(1, 8)
  expect(twitter.getNewsFeed(1)).toEqual([
    83, 82, 81, 73, 72, 71, 63, 62, 61, 42,
  ])
  twitter.unfollow(1, 8)
  expect(twitter.getNewsFeed(1)).toEqual([
    73, 72, 71, 63, 62, 61, 42, 41, 52, 51,
  ])
  twitter.follow(1, 8)
  expect(twitter.getNewsFeed(1)).toEqual([
    83, 82, 81, 73, 72, 71, 63, 62, 61, 42,
  ])
  twitter.unfollow(1, 7)
  expect(twitter.getNewsFeed(1)).toEqual([
    83, 82, 81, 63, 62, 61, 42, 41, 52, 51,
  ])

  expect(twitter.getNewsFeed(7)).toEqual([73, 72, 71])
  twitter.follow(7, 8)
  expect(twitter.getNewsFeed(7)).toEqual([83, 82, 81, 73, 72, 71])
})
