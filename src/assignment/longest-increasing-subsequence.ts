export function lengthOfLIS(nums: number[]): number {
  //dp[i]表示nums[0 - i]区间的子数组中最长递增子序列为dp[i]
  const dp: number[] = []

  dp[0] = 1
  let ans: number = 1

  for (let i = 1; i < nums.length; ++i) {
    dp[i] = 1
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    ans = Math.max(dp[i], ans)
  }

  return ans
}

/**
 * 二分查找插入位置构成递增子序列
 * @param nums 
 * @returns 
 */
export function lengthOfLIS1(nums: number[]): number {
  //tails[i]表示长度为i的递增子序列他最后一个元素是tails[i]
  const tails: number[] = []
  tails[1] = nums[0]
  let len = 1

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > tails[len]) {
      tails[++len] = nums[i]
    } else {
      let l = 1
      let r = len
      let pos = 0

      while (l <= r) {
        const mid = (l + r) >> 1

        if (tails[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }

      tails[pos + 1] = nums[i]
    }
  }

  return len
}
