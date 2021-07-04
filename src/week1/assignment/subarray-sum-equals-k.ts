export function subarraySum(nums: number[], k: number): number {
  let presum = 0
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  let ans = 0
  for (let i = 0; i < nums.length; ++i) {
    presum += nums[i]

    ans += map.get(presum - k) ?? 0

    map.set(presum, (map.get(presum) ?? 0) + 1)
  }

  return ans
}
