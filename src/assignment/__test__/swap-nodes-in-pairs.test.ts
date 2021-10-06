import { buildLinkedList } from '../../test-util/buildLinkedList'
import { swapPairs } from '../swap-nodes-in-pairs'

test('swapPairs', () => {
  const head = buildLinkedList([1, 2, 3, 4, 5])

  expect(Array.from(swapPairs(head)!)).toEqual([2, 1, 4, 3, 5])
})
