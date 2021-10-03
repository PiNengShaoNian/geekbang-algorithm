import { ListNode } from '../../model/ListNode'
import { reverseBetween } from '../reverse-linked-list-ii'

function buildLinkedList(arr: number[]) {
  let head: ListNode
  let cur: ListNode = (head = new ListNode(arr[0], null))

  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i], null)
    cur = cur.next
  }

  return head
}

test('reverseBetween', () => {
  const head = buildLinkedList([1, 2, 3, 4, 5])

  debugger
  reverseBetween(head, 2, 4)
})
