import { countRangeSum, Tree } from '../count-of-range-sum2'

describe('countRangeSum', () => {
  test('树状数组', () => {
    const arr = [1, 2, 3, 4, 5]
    const tree = new Tree(5)

    for (let i = 1; i <= arr.length; ++i) {
      tree.add(i, arr[i - 1])
    }

    expect(tree.queryRange(0, 4)).toBe(15)
    expect(tree.queryRange(0, 0)).toBe(1)
    expect(tree.queryRange(1, 1)).toBe(2)
    expect(tree.queryRange(1, 2)).toBe(5)
    expect(tree.queryRange(2, 2)).toBe(3)
    expect(tree.queryRange(2, 4)).toBe(12)

    tree.add(2, 1)
    expect(tree.queryRange(0, 4)).toBe(16)
    expect(tree.queryRange(1, 1)).toBe(3)
  })

  test('能正确的求出区间和', () => {
    expect(countRangeSum([1, 2], 0, 3)).toBe(3)
  })
})
