export class NumArray {
  private presum: number[] = []
  constructor(nums: number[]) {
    const n = nums.length
    const presum: number[] = []
    presum[0] = 0

    for (let i = 1; i <= n; ++i) {
      presum[i] = presum[i - 1] + nums[i - 1]
    }

    this.presum = presum
  }

  sumRange(left: number, right: number): number {
    return this.presum[right + 1] - this.presum[left]
  }
}
