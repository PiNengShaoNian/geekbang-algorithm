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

export class NumArray1 {
  private blockSize: number = 0
  private data: number[] = []
  private blocks: number[] = []
  constructor(nums: number[]) {
    const blockSize = Math.floor(Math.sqrt(nums.length))
    this.blockSize = blockSize
    this.data = nums
    this.blocks = Array.from<number>({
      length: Math.ceil(nums.length / blockSize),
    }).fill(0)
    for (let i = 0; i < nums.length; ++i) {
      this.blocks[Math.floor(i / blockSize)] += nums[i]
    }
  }

  sumRange(left: number, right: number): number {
    const { blockSize, blocks, data } = this
    if (!data.length) return 0
    const blockStart = Math.floor(left / blockSize)
    const blockEnd = Math.floor(right / blockSize)

    let ans = 0
    if (blockStart === blockEnd) {
      for (let i = left; i <= right; ++i) {
        ans += data[i]
      }
      return ans
    }

    for (let i = left; i < blockSize * (blockStart + 1); ++i) {
      ans += data[i]
    }

    for (let i = blockStart + 1; i < blockEnd; ++i) {
      ans += blocks[i]
    }

    for (let i = blockEnd * blockSize; i <= right; ++i) {
      ans += data[i]
    }

    return ans
  }
}
