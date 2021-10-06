import { reverseBetween } from '../reverse-linked-list-ii'
import { buildLinkedList } from '../../test-util/buildLinkedList'

test('reverseBetween', () => {
  const head = buildLinkedList([1, 2, 3, 4, 5])

  reverseBetween(head, 2, 4)
})
