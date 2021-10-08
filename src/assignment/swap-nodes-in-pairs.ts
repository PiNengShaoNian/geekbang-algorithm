import { ListNode } from '../model/ListNode'

export function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1, head)
  let prev = dummyHead
  while (prev.next && prev.next.next) {
    const node1 = prev.next
    const node2 = prev.next.next
    const next = node2.next
    node2.next = node1
    prev.next = node2
    node1.next = next
    prev = node1
  }

  return dummyHead.next
}
